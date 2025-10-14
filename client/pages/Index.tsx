import MapDestinations from "@/components/map/MapDestinations";
import WhatsAppForm from "@/components/forms/WhatsAppForm";
import { Plane, MapPinned, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { decorImages } from "@/data/decor";

export default function Index() {
  const slides = useMemo(() => decorImages.filter((s) => !!s.url), []);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, [slides.length]);
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#001e43] text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.35]">
          {slides.map((s, i) => (
            <img
              key={s.url + i}
              src={s.url}
              alt={s.alt}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                i === idx ? "opacity-100" : "opacity-0"
              )}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsla(43,96%,50%,0.25),transparent_60%)]"/>
        <div className="container mx-auto py-20 md:py-28 relative z-50">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white ring-1 ring-white/30">
              <img src="/logo.svg" alt="Porto Mundo" className="h-4 w-4"/> Porto Mundo Viagens
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              Descubra o mundo com conforto, segurança e experiências únicas
            </h1>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              Inspirado pela excelência, criamos roteiros sob medida para sua próxima aventura. Explore destinos pelo mapa e solicite sua proposta.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-xl">
              <a href="#destinos" className="inline-flex justify-center items-center rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground shadow hover:brightness-95 w-full sm:w-auto">
                Explorar destinos
              </a>
              <a href="#contato" className="inline-flex justify-center items-center rounded-md border border-primary-foreground/20 px-6 py-3 font-semibold hover:bg-primary-foreground/10 w-full sm:w-auto">
                Solicitar orçamento
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-primary-foreground/70">
              <div className="flex items-center gap-2"><MapPinned className="h-5 w-5"/> Destinos selecionados</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5"/> Suporte dedicado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Map + Destinations */}
      <MapDestinations />

      {/* WhatsApp Form */}
      <WhatsAppForm />
    </div>
  );
}
