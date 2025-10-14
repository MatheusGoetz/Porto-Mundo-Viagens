export type HeroSlide = {
  name: string;
  location: string;
  description: string;
  url: string; // accepts http(s) or data:image/*;base64
  caption?: string;
};

// Mapeado a partir do JSON fornecido (usando URLs públicas quando o campo estava vazio)
export const heroSlides: HeroSlide[] = [
  {
    name: "Grace Bay Beach",
    location: "Turks and Caicos",
    description:
      "Areia branca, águas claras, frequentemente citada nas listas das melhores praias do mundo.",
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop",
    caption: "Grace Bay Beach - vista panorâmica",
  },
  {
    name: "Varadero Beach",
    location: "Cuba",
    description:
      "Beleza natural e boa infraestrutura turística; extensa faixa de areia sobre península.",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    caption: "Varadero Beach - costa extensiva",
  },
  {
    name: "Baía do Sancho",
    location: "Fernando de Noronha, Brasil",
    description:
      "Água cristalina, mar morno, acesso mais rústico, natureza quase intocada.",
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
    caption: "Baía do Sancho - formação costeira verde e água turquesa",
  },
  {
    name: "Baía dos Porcos",
    location: "Fernando de Noronha, Brasil",
    description:
      "Praia pequena mas espetacular, ideal para contemplação, com visuais dramáticos de pedras e mar calmo.",
    url: "https://images.unsplash.com/photo-1535084955805-910d8a9f3b41?q=80&w=1600&auto=format&fit=crop",
    caption: "Baía dos Porcos - contraste pedras-mar",
  },
  {
    name: "Eagle Beach",
    location: "Aruba",
    description:
      "Areia branca, ausência de algas ou pedras, mar claro, ideal para relaxar.",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Bávaro Beach",
    location: "Punta Cana, República Dominicana",
    description:
      "Região bastante turística, com resorts, palmeiras, mar de tom azul-turquesa e areia clara.",
    url: "https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Maldivas",
    location: "Arquipélago no Oceano Índico",
    description:
      "Arquipélago famoso por suas águas calmas, coral e resorts sobre o mar.",
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop",
  },
];
