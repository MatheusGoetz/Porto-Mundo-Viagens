export type DecorImage = { url: string; alt: string };

// Conteúdo baseado no JSON fornecido pelo usuário
const beaches = [
  {
    name: "Grace Bay Beach",
    location: "Turks and Caicos",
    description:
      "Areia branca, águas cristalinas — frequentemente citada entre as melhores praias do mundo.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/47/Grace_Bay_-_panoramio.jpg",
        caption: "Grace Bay - panorama",
        alt: "Praia Grace Bay com areia branca e mar azul-turquesa",
        license: "CC BY-SA 3.0",
        license_url: "https://creativecommons.org/licenses/by-sa/3.0/",
        source_page: "https://commons.wikimedia.org/wiki/File:Grace_Bay_-_panoramio.jpg",
      },
    ],
  },
  {
    name: "Varadero Beach",
    location: "Varadero, Cuba",
    description:
      "Extensa faixa de areia, boa infraestrutura turística e mar azul-claro.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Varadero_Beach.jpg",
        caption: "Varadero Beach - vista da costa",
        alt: "Varadero Beach, areia e mar calmo",
        license: "CC BY-SA 4.0",
        license_url: "https://creativecommons.org/licenses/by-sa/4.0/",
        source_page: "https://commons.wikimedia.org/wiki/File:Varadero_Beach.jpg",
      },
    ],
  },
  {
    name: "Baía do Sancho",
    location: "Fernando de Noronha, Brasil",
    description:
      "Águas transparentes e visual preservado — cartão-postal do arquipélago.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Ba%C3%ADa_do_Sancho_-_Fernando_de_Noronha_-_Brasil.jpg",
        caption: "Baía do Sancho - vista aérea/rasante",
        alt: "Piscina natural entre rochas na Baía do Sancho",
        license: "CC BY-SA 4.0",
        license_url: "https://creativecommons.org/licenses/by-sa/4.0/",
        source_page:
          "https://commons.wikimedia.org/wiki/File:Ba%C3%ADa_do_Sancho_-_Fernando_de_Noronha_-_Brasil.jpg",
      },
    ],
  },
  {
    name: "Baía dos Porcos",
    location: "Fernando de Noronha, Brasil",
    description: "Pequena e dramática; cenário com rochas e águas turquesa.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Ba%C3%ADa_dos_Porcos%2C_Fernando_de_Noronha.jpg",
        caption: "Baía dos Porcos - panorama",
        alt: "Baía dos Porcos com formações rochosas e água verde-azulada",
        license: "CC BY 2.0",
        license_url: "https://creativecommons.org/licenses/by/2.0/",
        source_page:
          "https://commons.wikimedia.org/wiki/File:Ba%C3%ADa_dos_Porcos%2C_Fernando_de_Noronha.jpg",
      },
    ],
  },
];

export const decorImages: DecorImage[] = beaches
  .flatMap((b) => (b.images || []).map((img) => ({ url: img.url, alt: img.alt || `${b.name} — ${b.location}` })))
  .filter((i) => !!i.url);
