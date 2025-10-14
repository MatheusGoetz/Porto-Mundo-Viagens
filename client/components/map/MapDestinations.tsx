import { useEffect, useMemo, useRef, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { destinationsByCountry, countryDisplayName, brazilRegionDestinations } from "@/data/destinations";
import { cn } from "@/lib/utils";
import { geoCentroid } from "d3-geo";
import { feature } from "topojson-client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

// Use jsDelivr TopoJSON (reliable CORS)
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Optional fallback for a few ids we care about; most names come from geo.properties
const nameById: Record<string, string> = {
  "076": "Brazil",
  "840": "United States of America",
  "620": "Portugal",
  "250": "France",
  "380": "Italy",
  "724": "Spain",
  "032": "Argentina",
  "152": "Chile",
  "484": "Mexico",
  "392": "Japan",
};


type RegionKey = "world" | "africa_me" | "n_america" | "s_america" | "brazil" | "asia" | "europe" | "oceania";

type LabeledCountry = { label: string; key: string };
const AFRICA_COUNTRIES: LabeledCountry[] = [
  { label: "África do Sul", key: "South Africa" },
  { label: "Marrocos", key: "Morocco" },
  { label: "Egito", key: "Egypt" },
  { label: "Quênia", key: "Kenya" },
  { label: "Tanzânia", key: "Tanzania" },
  { label: "Tunísia", key: "Tunisia" },
  { label: "Namíbia", key: "Namibia" },
  { label: "Seychelles", key: "Seychelles" },
];
const MIDDLE_EAST_COUNTRIES: LabeledCountry[] = [
  { label: "Emirados Árabes Unidos", key: "United Arab Emirates" },
  { label: "Turquia", key: "Turkey" },
  { label: "Arábia Saudita", key: "Saudi Arabia" },
  { label: "Israel", key: "Israel" },
  { label: "Jordânia", key: "Jordan" },
  { label: "Omã", key: "Oman" },
  { label: "Qatar", key: "Qatar" },
];

const NA_NORTH_COUNTRIES: LabeledCountry[] = [
  { label: "Estados Unidos", key: "United States of America" },
  { label: "Canadá", key: "Canada" },
  { label: "México", key: "Mexico" },
  { label: "Bermudas", key: "Bermuda" },
  { label: "Groenlândia", key: "Greenland" },
  { label: "Bahamas", key: "The Bahamas" },
  { label: "Porto Rico", key: "Puerto Rico" },
  { label: "Aruba", key: "Aruba" },
  { label: "Barbados", key: "Barbados" },
  { label: "Saint Martin", key: "Saint Martin" },
  { label: "Ilhas Cayman", key: "Cayman Islands" },
  { label: "Guadalupe", key: "Guadeloupe" },
];

const NA_CENTRAL_COUNTRIES: LabeledCountry[] = [
  { label: "Costa Rica", key: "Costa Rica" },
  { label: "Panamá", key: "Panama" },
  { label: "Cuba", key: "Cuba" },
  { label: "República Dominicana", key: "Dominican Republic" },
  { label: "Jamaica", key: "Jamaica" },
  { label: "Belize", key: "Belize" },
  { label: "Guatemala", key: "Guatemala" },
  { label: "Honduras", key: "Honduras" },
  { label: "El Salvador", key: "El Salvador" },
  { label: "Nicarágua", key: "Nicaragua" },
  { label: "Haiti", key: "Haiti" },
  { label: "Trinidad e Tobago", key: "Trinidad and Tobago" },
];

const SA_COUNTRIES: LabeledCountry[] = [
  { label: "Argentina", key: "Argentina" },
  { label: "Chile", key: "Chile" },
  { label: "Peru", key: "Peru" },
  { label: "Colômbia", key: "Colombia" },
  { label: "Uruguai", key: "Uruguay" },
  { label: "Paraguai", key: "Paraguay" },
  { label: "Bolívia", key: "Bolivia" },
  { label: "Equador", key: "Ecuador" },
  { label: "Venezuela", key: "Venezuela" },
  { label: "Guiana", key: "Guyana" },
  { label: "Suriname", key: "Suriname" },
  { label: "Guiana Francesa", key: "French Guiana" },
  { label: "Ilhas Malvinas", key: "Falkland Islands" },
  { label: "Ilha de Páscoa", key: "Chile" },
  { label: "Galápagos", key: "Ecuador" },
];

const ASIA_COUNTRIES: LabeledCountry[] = [
  { label: "Japão", key: "Japan" },
  { label: "China", key: "China" },
  { label: "Índia", key: "India" },
  { label: "Tailândia", key: "Thailand" },
  { label: "Indonésia (Bali)", key: "Indonesia" },
  { label: "Malásia", key: "Malaysia" },
  { label: "Singapura", key: "Singapore" },
  { label: "Vietnã", key: "Vietnam" },
  { label: "Filipinas", key: "Philippines" },
  { label: "Coreia do Sul", key: "South Korea" },
  { label: "Sri Lanka", key: "Sri Lanka" },
  { label: "Nepal", key: "Nepal" },
  { label: "Mongólia", key: "Mongolia" },
  { label: "Camboja", key: "Cambodia" },
  { label: "Laos", key: "Laos" },
];

const EUROPE_COUNTRIES: LabeledCountry[] = [
  { label: "França", key: "France" },
  { label: "Itália", key: "Italy" },
  { label: "Espanha", key: "Spain" },
  { label: "Portugal", key: "Portugal" },
  { label: "Alemanha", key: "Germany" },
  { label: "Reino Unido", key: "United Kingdom" },
  { label: "Suíça", key: "Switzerland" },
  { label: "Áustria", key: "Austria" },
  { label: "Grécia", key: "Greece" },
  { label: "Holanda", key: "Netherlands" },
  { label: "Bélgica", key: "Belgium" },
  { label: "Croácia", key: "Croatia" },
  { label: "República Tcheca", key: "Czechia" },
  { label: "Hungria", key: "Hungary" },
  { label: "Islândia", key: "Iceland" },
];

const OCEANIA_COUNTRIES: LabeledCountry[] = [
  { label: "Austrália", key: "Australia" },
  { label: "Nova Zelândia", key: "New Zealand" },
  { label: "Fiji", key: "Fiji" },
  { label: "Samoa", key: "Samoa" },
  { label: "Tonga", key: "Tonga" },
  { label: "Papua-Nova Guiné", key: "Papua New Guinea" },
  { label: "Ilhas Cook", key: "Cook Islands" },
  { label: "Vanuatu", key: "Vanuatu" },
  { label: "Palau", key: "Palau" },
  { label: "Micronésia", key: "Federated States of Micronesia" },
  { label: "Nauru", key: "Nauru" },
  { label: "Kiribati", key: "Kiribati" },
  { label: "Ilhas Marshall", key: "Marshall Islands" },
  { label: "Nova Caledônia", key: "New Caledonia" },
  { label: "Taiti / Polinésia Francesa", key: "French Polynesia" },
];

const REGIONS: Record<RegionKey, { label: string; center: [number, number]; scaleMul: number }> = {
  world: { label: "Todos", center: [0, 0], scaleMul: 1 },
  africa_me: { label: "África & Oriente Médio", center: [20, 12], scaleMul: 1.9 },
  n_america: { label: "América do Norte & Central", center: [-95, 30], scaleMul: 2.1 },
  s_america: { label: "América do Sul", center: [-62, -20], scaleMul: 2.6 },
  brazil: { label: "Brasil", center: [-55, -10], scaleMul: 4.5 },
  asia: { label: "Ásia", center: [90, 25], scaleMul: 1.9 },
  europe: { label: "Europa", center: [15, 52], scaleMul: 3.0 },
  oceania: { label: "Oceania", center: [140, -22], scaleMul: 2.7 },
};

// Aproximação de bounds por continente/país para ajustar escala centralizada no card
const REGION_BOUNDS: Record<Exclude<RegionKey, "world">, { lon: [number, number]; lat: [number, number] }> = {
  africa_me: { lon: [-20, 60], lat: [-35, 38] },
  n_america: { lon: [-170, -20], lat: [7, 85] },
  s_america: { lon: [-90, -30], lat: [-60, 13] },
  brazil: { lon: [-74, -34], lat: [-34, 5] },
  asia: { lon: [25, 180], lat: [-10, 80] },
  europe: { lon: [-31, 60], lat: [35, 72] },
  oceania: { lon: [110, 180], lat: [-50, 0] },
};

const toRad = (deg: number) => (deg * Math.PI) / 180;
const mercY = (latDeg: number) => Math.log(Math.tan(Math.PI / 4 + toRad(latDeg) / 2));
function mercatorScaleForBounds(b: { lon: [number, number]; lat: [number, number] }, width: number, height: number, pad = 0.1) {
  const lonSpan = toRad(b.lon[1] - b.lon[0]);
  const yMin = mercY(b.lat[0]);
  const yMax = mercY(b.lat[1]);
  const ySpan = Math.max(1e-6, yMax - yMin);
  const scaleX = (width * (1 - pad)) / lonSpan;
  const scaleY = (height * (1 - pad)) / ySpan;
  return Math.min(scaleX, scaleY);
}

export default function MapDestinations() {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeRegion, setActiveRegion] = useState<RegionKey>("world");
  const [regionDialogOpen, setRegionDialogOpen] = useState(false);
  const [pickedRegion, setPickedRegion] = useState<string | null>(null);
  const [pickedLabel, setPickedLabel] = useState<string | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const regionKeys = useMemo(() => (Object.keys(REGIONS) as RegionKey[]).filter((k) => k !== "world"), []);
  const [cardDims, setCardDims] = useState<{ w: number; h: number }>({ w: 150, h: 200 });
  const [regionCountries, setRegionCountries] = useState<Record<RegionKey, string[]>>({
    world: [],
    africa_me: [],
    n_america: [],
    s_america: [],
    brazil: ["Brazil"],
    asia: [],
    europe: [],
    oceania: [],
  });
  const [regionsByContinent, setRegionsByContinent] = useState<Record<Exclude<RegionKey, "world" | "brazil">, Record<string, string[]>>>(
    { africa_me: {}, n_america: {}, s_america: {}, asia: {}, europe: {}, oceania: {} }
  );

  const countriesWithData = useMemo(
    () => new Set(Object.keys(destinationsByCountry)),
    [],
  );

  const selectedCountriesFromPicked = pickedRegion && activeRegion !== "world"
    ? (activeRegion === "brazil"
        ? ["Brazil"]
        : (activeRegion === "africa_me" || activeRegion === "n_america" || activeRegion === "s_america" || activeRegion === "asia" || activeRegion === "europe" || activeRegion === "oceania")
          ? [pickedRegion]
          : (regionsByContinent[activeRegion as Exclude<RegionKey, "world" | "brazil">]?.[pickedRegion] || []))
    : [];
  const destinations = activeRegion === "brazil" && pickedRegion
    ? (brazilRegionDestinations[pickedRegion] || [])
    : selectedCountriesFromPicked.flatMap((c) => destinationsByCountry[c] || []);

  // Load world countries once and group by regions via centroid in bounds
  // On mobile, start at Brazil
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setActiveRegion("brazil");
    }
  }, []);

  // Track card size by breakpoint (md≈>=768 use 160,160)
  useEffect(() => {
    const update = () => {
      if (typeof window === "undefined") return;
      setCardDims({ w: 150, h: 200 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(geoUrl);
        const topo = await res.json();
        const feats: any = feature(topo, topo.objects.countries);
        type BBox = { lon:[number,number]; lat:[number,number] };
        const bounds: Record<Exclude<RegionKey, "world" | "brazil">, BBox> = {
          africa_me: { lon: [-20, 60], lat: [-35, 38] },
          n_america: { lon: [-170, -20], lat: [7, 85] },
          s_america: { lon: [-90, -30], lat: [-60, 13] },
          asia: { lon: [25, 180], lat: [-10, 80] },
          europe: { lon: [-31, 60], lat: [35, 72] },
          oceania: { lon: [110, 180], lat: [-50, 0] },
        };
        const buckets: Record<RegionKey, Set<string>> = {
          world: new Set<string>(),
          africa_me: new Set<string>(),
          n_america: new Set<string>(),
          s_america: new Set<string>(),
          brazil: new Set<string>(["Brazil"]),
          asia: new Set<string>(),
          europe: new Set<string>(),
          oceania: new Set<string>(),
        };
        const centroids = new Map<string, [number, number]>();
        for (const f of feats.features) {
          const id = String(f.id).padStart(3, "0");
          const props = f.properties || {};
          const propName = props.name || props.NAME || props.ADMIN || props.Country || null;
          const name: string | null = (propName as string) || nameById[id] || null;
          if (!name) continue;
          buckets.world.add(name);
          const [lon, lat] = geoCentroid(f) as [number, number];
          centroids.set(name, [lon, lat]);
          (Object.keys(bounds) as (keyof typeof bounds)[]).forEach((rk) => {
            const b = bounds[rk];
            if (lon >= b.lon[0] && lon <= b.lon[1] && lat >= b.lat[0] && lat <= b.lat[1]) {
              buckets[rk].add(name);
            }
          });
        }
        const out: Record<RegionKey, string[]> = Object.fromEntries(
          (Object.keys(buckets) as RegionKey[]).map((k) => [k, Array.from(buckets[k]).sort()])
        ) as any;

        // Build regions inside each continent using centroid position
        const labelFor = (rk: Exclude<RegionKey, "world">, lon: number, lat: number) => {
          const b = bounds[rk];
          const nx = (lon - b.lon[0]) / (b.lon[1] - b.lon[0]);
          const ny = (lat - b.lat[0]) / (b.lat[1] - b.lat[0]);
          const t1 = 0.33, t2 = 0.66;
          const north = ny <= t1, south = ny >= t2, west = nx <= t1, east = nx >= t2;
          if (north && west) return "Noroeste";
          if (north && east) return "Nordeste";
          if (south && west) return "Sudoeste";
          if (south && east) return "Sudeste";
          if (north) return "Norte";
          if (south) return "Sul";
          if (west) return "Oeste";
          if (east) return "Leste";
          return "Centro";
        };
        const regionsMap: Record<Exclude<RegionKey, "world" | "brazil">, Record<string, string[]>> = {
          africa_me: {}, n_america: {}, s_america: {}, asia: {}, europe: {}, oceania: {}
        };
        (Object.keys(bounds) as (keyof typeof bounds)[]).forEach((rk) => {
          for (const name of buckets[rk]) {
            const c = centroids.get(name);
            if (!c) continue;
            const lab = labelFor(rk, c[0], c[1]);
            const m = regionsMap[rk];
            m[lab] = m[lab] || [];
            m[lab].push(name);
          }
          Object.keys(regionsMap[rk]).forEach((lab) => regionsMap[rk][lab].sort());
        });

        if (!cancelled) {
          setRegionCountries(out);
          setRegionsByContinent(regionsMap);
        }
      } catch (e) {
        // silent
      }
    })();
    return () => { cancelled = true };
  }, []);

  // scroll selected into center on change (mobile only)
  useEffect(() => {
    const sc = scrollerRef.current;
    if (!sc) return;
    if (typeof window !== "undefined" && window.innerWidth >= 768) return; // only for widths under md
    const idx = regionKeys.indexOf(activeRegion);
    if (idx < 0) return;
    const item = sc.querySelectorAll('[role="radio"]')[idx] as HTMLElement | undefined;
    const itemWidth = (item?.offsetWidth || 150);
    const gap = 16; // gap-4
    const targetLeft = idx * (itemWidth + gap) - (sc.clientWidth - itemWidth) / 2;
    const maxLeft = sc.scrollWidth - sc.clientWidth;
    const left = Math.max(0, Math.min(targetLeft, maxLeft));
    sc.scrollTo({ left, behavior: 'smooth' });
  }, [activeRegion, regionKeys]);

  return (
    <section id="destinos" className="container mx-auto py-12 sm:py-16">
      <div className="mx-auto text-center max-w-3xl">
        <h2 className="text-xl sm:text-2xl font-bold">Explore pelo mapa</h2>
        <p className="text-muted-foreground mt-1">Escolha um continente para explorar regiões e destinos.</p>
      </div>

      <Card className="mt-6 border border-border/40 bg-background/60 shadow-sm">
        <CardHeader className="pb-4">
          <div>
            <CardTitle className="text-lg sm:text-xl text-left">Continentes</CardTitle>
            <CardDescription className="text-left">Escolha um continente para explorar.</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <span id="continent-picker-label" className="sr-only">
            Escolha um continente
          </span>
          <div className="relative pt-4">
            <div
              ref={scrollerRef}
              className="w-full flex flex-nowrap gap-4 overflow-x-auto justify-start px-2 md:px-0 snap-x snap-mandatory no-scrollbar"
            >
              <ToggleGroup
                type="single"
                value={activeRegion}
                aria-labelledby="continent-picker-label"
                onValueChange={(v) => { if (v) { setActiveRegion(v as RegionKey); setPickedRegion(null); setPickedLabel(null); setSelected(null); setRegionDialogOpen(true);} }}
                className="flex flex-nowrap gap-4"
              >
                {(Object.keys(REGIONS) as RegionKey[]).filter(k => k !== "world").map((key) => (
                  <ToggleGroupItem
                    key={key}
                    value={key}
                    aria-label={REGIONS[key].label}
                    onClick={() => { setActiveRegion(key as RegionKey); setRegionDialogOpen(true); }}
                    className="flex w-[150px] h-[200px] md:w-[150px] md:h-[200px] md:mx-auto flex-col items-center justify-between rounded-xl border border-transparent bg-background/70 p-3 transition hover:border-accent/40 hover:bg-accent/10 data-[state=on]:border-accent/60 data-[state=on]:bg-accent/5 data-[state=on]:ring-2 data-[state=on]:ring-accent shrink-0 snap-center"
                >
                    <div className="pointer-events-none mt-2 w-[80%] mx-auto">
                      {(() => {
                        const w = 0.8 * cardDims.w; // 80% da largura atual do card
                        const h = 0.8 * cardDims.h * 0.65; // 80% da altura atual do card
                        const b = REGION_BOUNDS[key as Exclude<RegionKey, "world">];
                        const center: [number, number] = [(b.lon[0] + b.lon[1]) / 2, (b.lat[0] + b.lat[1]) / 2];
                        const scale = mercatorScaleForBounds(b, w, h, 0.1);
                        return (
                          <ComposableMap projection="geoMercator" width={Math.round(w)} height={Math.round(h)} projectionConfig={{ center, scale }} style={{ width: "100%", height: "auto" }}>
                            <Geographies geography={geoUrl}>{({ geographies }) => {
                              const allowed = new Set(regionCountries[key as RegionKey] || []);
                              return geographies
                                .filter((geo: any) => {
                                  const p = (geo.properties || {}) as any;
                                  const n = p.name || p.NAME || p.ADMIN || p.Country;
                                  return allowed.has(n);
                                })
                                .map((geo: any) => (
                                  <Geography key={geo.rsmKey} geography={geo} style={{ default: { fill: "#e6d5bf", outline: "none", stroke: "transparent" } }} />
                                ));
                            }}
                            </Geographies>
                          </ComposableMap>
                        );
                      })()}
                    </div>
                    <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                    <span className="inline-flex items-center gap-1 text-center text-xs md:text-sm font-medium leading-tight pb-1">
                      {REGIONS[key].label}
                    </span>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>

            {/* Mobile arrows */}
            <button
              type="button"
              aria-label="Anterior"
              className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-white/10 text-white backdrop-blur border border-white/20 flex items-center justify-center disabled:opacity-30"
              onClick={() => {
                const idx = regionKeys.indexOf(activeRegion);
                const nextIdx = (idx - 1 + regionKeys.length) % regionKeys.length;
                setActiveRegion(regionKeys[nextIdx]);
              }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Próximo"
              className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-white/10 text-white backdrop-blur border border-white/20 flex items-center justify-center disabled:opacity-30"
              onClick={() => {
                const idx = regionKeys.indexOf(activeRegion);
                const nextIdx = (idx + 1) % regionKeys.length;
                setActiveRegion(regionKeys[nextIdx]);
              }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Region picker modal */}
      <Dialog open={regionDialogOpen} onOpenChange={setRegionDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{(activeRegion === "africa_me" || activeRegion === "n_america") ? "Escolha um país" : "Escolha uma região"}</DialogTitle>
            <DialogDescription>
              {(activeRegion === "africa_me" || activeRegion === "n_america") ? "Selecione um país" : `Selecione uma região de ${REGIONS[activeRegion].label}`}
            </DialogDescription>
          </DialogHeader>
          {activeRegion === "africa_me" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {[...AFRICA_COUNTRIES, ...MIDDLE_EAST_COUNTRIES].map((c) => (
                <Button key={`am-${c.label}`} variant="outline" className="w-full px-4 py-3 text-sm whitespace-normal" onClick={() => { setPickedRegion(c.key); setPickedLabel(c.label); setRegionDialogOpen(false); }}>
                  {c.label}
                </Button>
              ))}
            </div>
          ) : activeRegion === "n_america" ? (
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold mb-2">América do Norte</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {NA_NORTH_COUNTRIES.map((c) => (
                    <Button key={`na-n-${c.label}`} variant="outline" className="w-full px-4 py-3 text-sm whitespace-normal" onClick={() => { setPickedRegion(c.key); setPickedLabel(c.label); setRegionDialogOpen(false); }}>
                      {c.label}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">América Central</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {NA_CENTRAL_COUNTRIES.map((c) => (
                    <Button key={`na-c-${c.label}`} variant="outline" className="w-full px-4 py-3 text-sm whitespace-normal" onClick={() => { setPickedRegion(c.key); setPickedLabel(c.label); setRegionDialogOpen(false); }}>
                      {c.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ) : activeRegion === "s_america" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {SA_COUNTRIES.map((c) => (
                <Button key={`sa-${c.label}`} variant="outline" className="w-full px-4 py-3 text-sm whitespace-normal" onClick={() => { setPickedRegion(c.key); setPickedLabel(c.label); setRegionDialogOpen(false); }}>
                  {c.label}
                </Button>
              ))}
            </div>
          ) : activeRegion === "asia" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {ASIA_COUNTRIES.map((c) => (
                <Button key={`as-${c.label}`} variant="outline" className="w-full px-4 py-3 text-sm whitespace-normal" onClick={() => { setPickedRegion(c.key); setPickedLabel(c.label); setRegionDialogOpen(false); }}>
                  {c.label}
                </Button>
              ))}
            </div>
          ) : activeRegion === "europe" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {EUROPE_COUNTRIES.map((c) => (
                <Button key={`eu-${c.label}`} variant="outline" className="w-full px-4 py-3 text-sm whitespace-normal" onClick={() => { setPickedRegion(c.key); setPickedLabel(c.label); setRegionDialogOpen(false); }}>
                  {c.label}
                </Button>
              ))}
            </div>
          ) : activeRegion === "oceania" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {OCEANIA_COUNTRIES.map((c) => (
                <Button key={`oc-${c.label}`} variant="outline" className="w-full px-4 py-3 text-sm whitespace-normal" onClick={() => { setPickedRegion(c.key); setPickedLabel(c.label); setRegionDialogOpen(false); }}>
                  {c.label}
                </Button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(
                activeRegion === "brazil"
                  ? ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"]
                  : Object.keys(regionsByContinent[activeRegion as Exclude<RegionKey, "world" | "brazil">] || {}).sort()
              ).map((lab) => (
                <Button key={lab} variant="outline" onClick={() => { setPickedRegion(lab); setPickedLabel(lab); setRegionDialogOpen(false); }}>
                  {lab}
                </Button>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <div className="max-w-6xl mx-auto mt-8 sm:mt-12">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold">
            {pickedRegion ? `Destinos — ${pickedLabel || pickedRegion}` : "Destinos"}
          </h3>
          {pickedRegion ? (
            <p className="text-muted-foreground mt-1">
              {destinations.length} {destinations.length === 1 ? "opção" : "opções"} encontradas
            </p>
          ) : (
            <p className="text-sm text-muted-foreground mt-1">
              Escolha um destino para explorar...
            </p>
          )}
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {pickedRegion && destinations.length > 0 ? (
            destinations.map((d) => (
              <Card key={`${d.city}-${d.title}`} className="group overflow-hidden h-full flex flex-col">
                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="overflow-hidden">
                    <img
                      src={d.image}
                      alt={d.city}
                      loading="lazy"
                      onError={(e) => ((e.currentTarget.src = "/placeholder.svg"))}
                      className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block text-xs font-semibold text-accent">{d.city}</span>
                    <h4 className="mt-1 font-semibold">{d.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{d.description}</p>
                  </div>
                </CardContent>
                <div className="px-4 pb-4">
                  <Button asChild size="sm" className="w-full">
                    <a
                      href="#contato"
                      onClick={() => {
                        try { sessionStorage.setItem('prefill_destino', d.city); } catch {}
                        try { document.dispatchEvent(new CustomEvent('prefill-destino', { detail: d.city })); } catch {}
                      }}
                    >
                      Solicitar orçamento
                    </a>
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center text-muted-foreground">
              {pickedRegion ? "Sem destinos cadastrados ainda." : ""}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
