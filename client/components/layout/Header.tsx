import { Link } from "react-router-dom";
import { Plane, Map, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-[1000] bg-[#001e43] backdrop-blur text-primary-foreground border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-accent">
            <img src="/logo.svg" alt="Porto Mundo" className="h-6 w-6" />
          </span>
          <span className="font-extrabold tracking-tight text-lg">Porto Mundo Viagens</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#destinos" className="hover:text-accent transition-colors flex items-center gap-2">
            <Map className="h-4 w-4" /> Destinos
          </a>
          <a href="#footer" className="hover:text-accent transition-colors flex items-center gap-2">
            <Phone className="h-4 w-4" /> Contato
          </a>
          <a href="#contato" className="inline-flex items-center rounded-full bg-accent px-4 py-2 font-semibold text-accent-foreground shadow-sm hover:brightness-95 transition">
            Solicitar orçamento
          </a>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#001e43]">
          <nav className="container mx-auto py-3 grid gap-3 text-sm">
            <a href="#destinos" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <Map className="h-4 w-4" /> Destinos
            </a>
            <a href="#footer" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> Contato
            </a>
            <a href="#contato" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 font-semibold text-accent-foreground shadow-sm">
              Solicitar orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
