import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold inline-flex items-center gap-2">
            <img src="/logo.svg" alt="Porto Mundo" className="h-6 w-6" />
            Porto Mundo Viagens
          </h3>
          <p className="mt-2 text-primary-foreground/80">
            Experiências inesquecíveis ao redor do mundo. Planejamos cada detalhe
            para sua viagem perfeita.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Contato</h4>
          <ul className="mt-3 space-y-2 text-primary-foreground/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> WhatsApp: (51) 99642-0330</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> contato@portomundo.com.br</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Siga</h4>
          <div className="mt-4 flex items-center gap-4">
            <a href="https://www.instagram.com/portomundoviagens" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition"><Instagram/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary/20">
        <div className="container mx-auto py-4 text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} Porto Mundo Viagens. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
