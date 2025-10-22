export type Destination = {
  city: string;
  title: string;
  description: string;
  image: string;
};

// Base curated destinations already present
const baseDestinations: Record<string, Destination[]> = {
  Brazil: [
    {
      city: "Rio de Janeiro",
      title: "Praias e Pão de Açúcar",
      description:
        "Descubra o Cristo Redentor, Copacabana e a energia carioca.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80",
    },
    {
      city: "Foz do Iguaçu",
      title: "Cataratas e natureza",
      description:
        "Uma das sete maravilhas da natureza, com paisagens de tirar o fôlego.",
      image:
        "https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&fit=crop&w=1600&q=80",
    },
  ],
  "United States of America": [
    {
      city: "Nova York",
      title: "Nova York",
      description:
        "Conhecida como a cidade que nunca dorme, é famosa pela Times Square, Central Park e a Estátua da Liberdade.",
      image:
        "https://i.pinimg.com/736x/61/43/6e/61436e92302c995063ebb034cfa67635.jpg",
    },
    {
      city: "Los Angeles",
      title: "Los Angeles",
      description:
        "Centro da indústria cinematográfica de Hollywood, também conhecida por praias e vida cultural vibrante.",
      image:
        "https://i.pinimg.com/736x/96/e1/46/96e146bbbc9b698d077bb356fc6d10e6.jpg",
    },
    {
      city: "Las Vegas",
      title: "Las Vegas",
      description:
        "Cidade do entretenimento e cassinos, com shows e vida noturna intensos no famoso Las Vegas Strip.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Las%20Vegas%20Strip.jpg",
    },
    {
      city: "San Francisco",
      title: "San Francisco",
      description:
        "Famosa pela Golden Gate Bridge, bondinhos e a Ilha de Alcatraz.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/GoldenGateBridge-001.jpg",
    },
    {
      city: "Miami",
      title: "Miami",
      description:
        "Destino tropical nos EUA, famoso por suas praias, vida noturna e influência cultural latina.",
      image:
        "https://i.pinimg.com/736x/c3/2a/4d/c32a4d0fb9f5070cf9ac2526fc3150a2.jpg",
    },
    {
      city: "Chicago",
      title: "Chicago",
      description:
        "Cidade às margens do Lago Michigan, conhecida por sua arquitetura, blues e pizza deep dish.",
      image:
        "https://i.pinimg.com/1200x/10/3f/a3/103fa32a398e8eac3d0b7abbacc1cdd5.jpg",
    },
    {
      city: "Orlando",
      title: "Orlando",
      description:
        "Capital dos parques temáticos, incluindo Walt Disney World e Universal Studios.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cinderella%20Castle%20at%20Magic%20Kingdom.jpg",
    },
    {
      city: "Washington, D.C.",
      title: "Washington, D.C.",
      description:
        "A capital dos EUA, com monumentos icônicos como a Casa Branca e o Capitólio.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/US%20Capitol%20west%20side.JPG",
    },
    {
      city: "Honolulu (Havaí)",
      title: "Honolulu (Havaí)",
      description:
        "Capital do Havaí, famosa pela praia de Waikiki e paisagens vulcânicas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Waikiki%20Beach%20from%20Diamond%20Head.jpg",
    },
  ],
  Canada: [
    {
      city: "Toronto",
      title: "Toronto",
      description:
        "A maior cidade do Canadá, famosa pela CN Tower, diversidade cultural e vida urbana vibrante.",
      image:
        "https://i.pinimg.com/1200x/c6/df/e4/c6dfe4e7c4d2b9637d987a6993df545b.jpg",
    },
    {
      city: "Vancouver",
      title: "Vancouver",
      description:
        "Cidade costeira entre montanhas e o oceano, conhecida por sua beleza natural e qualidade de vida.",
      image:
        "https://i.pinimg.com/1200x/51/39/f8/5139f8728aafe7fd1f1b9d95b54cba10.jpg",
    },
    {
      city: "Montreal",
      title: "Montreal",
      description:
        "Cidade bilíngue com forte influência francesa, famosa por sua cena gastronômica e cultural.",
      image:
        "https://i.pinimg.com/1200x/f2/f9/34/f2f934d53f74a905ae733ea4ac405776.jpg",
    },
    {
      city: "Quebec City",
      title: "Quebec City",
      description:
        "Cidade histórica com arquitetura colonial francesa e o icônico Château Frontenac.",
      image:
        "https://i.pinimg.com/1200x/1c/d5/f7/1cd5f7da56b6f7ae6dafbed2e5997407.jpg",
    },
    {
      city: "Niagara Falls",
      title: "Niagara Falls",
      description:
        "Uma das cataratas mais famosas do mundo, na fronteira entre Canadá e EUA.",
      image:
        "https://i.pinimg.com/1200x/71/73/4a/71734aaf0238587ee26e618bbcf669c4.jpg",
    },
    {
      city: "Ottawa",
      title: "Ottawa",
      description:
        "A capital do Canadá, conhecida pelo Parlamento e museus nacionais.",
      image:
        "https://i.pinimg.com/1200x/c8/0f/28/c80f28ac941c30489e489d0cf1c3cc86.jpg",
    },
    {
      city: "Calgary",
      title: "Calgary",
      description:
        "Cidade próxima às Montanhas Rochosas, famosa pelo rodeio Calgary Stampede.",
      image:
        "https://i.pinimg.com/736x/79/2e/0e/792e0ef2b0330ef1ffee857de791ab30.jpg",
    },
    {
      city: "Banff",
      title: "Banff",
      description:
        "Localizado no Parque Nacional Banff, é um destino alpino com lagos cristalinos e montanhas imponentes.",
      image:
        "https://i.pinimg.com/736x/99/08/d8/9908d8dbc42f3362c90321991a7494b1.jpg",
    },
    {
      city: "Whistler",
      title: "Whistler",
      description:
        "Resort de montanha famoso por esqui, snowboard e paisagens deslumbrantes durante todo o ano.",
      image:
        "https://i.pinimg.com/1200x/2b/ad/ab/2badab8cb7a5db09989f0bf3e11030d9.jpg",
    },
  ],
  Portugal: [
    {
      city: "Lisboa",
      title: "Lisboa",
      description:
        "A capital portuguesa encanta com seus miradouros, bondinhos, o bairro de Alfama e o icônico Mosteiro dos Jerónimos em Belém.",
      image:
        "https://i.pinimg.com/1200x/47/b0/98/47b09888bed90612ea2c8512c8306fe2.jpg",
    },
    {
      city: "Porto",
      title: "Porto",
      description:
        "Famosa por suas caves de vinho do Porto e pela ponte Dom Luís I, a cidade combina arquitetura histórica e um clima acolhedor às margens do Douro.",
      image:
        "https://i.pinimg.com/736x/fc/5b/d7/fc5bd7c784cfd6c7f48dbbcd35129d71.jpg",
    },
    {
      city: "Sintra",
      title: "Sintra",
      description:
        "Patrimônio Mundial da UNESCO, Sintra é um conto de fadas real, com palácios coloridos, castelos e florestas misteriosas.",
      image:
        "https://i.pinimg.com/1200x/13/2a/a4/132aa4997a5de51893add9ef1b501908.jpg",
    },
    {
      city: "Coimbra",
      title: "Coimbra",
      description:
        "Cidade universitária histórica, lar de uma das universidades mais antigas da Europa e rica em tradições acadêmicas e musicais.",
      image:
        "https://i.pinimg.com/1200x/d2/6a/2f/d26a2fd6028002272bf2b1c08471b8ca.jpg",
    },
    {
      city: "Évora",
      title: "Évora",
      description:
        "No coração do Alentejo, Évora é um museu a céu aberto com ruínas romanas, capelas singulares e arquitetura medieval preservada.",
      image:
        "https://i.pinimg.com/736x/36/9f/9e/369f9e07379996b85dde2faf5b782309.jpg",
    },
    {
      city: "Algarve",
      title: "Algarve",
      description:
        "Região de praias paradisíacas, falésias douradas e mar azul-turquesa — o destino perfeito para relaxar sob o sol português.",
      image:
        "https://i.pinimg.com/1200x/e7/55/51/e75551c108c20955004a8ed49f629a02.jpg",
    },
    {
      city: "Madeira",
      title: "Madeira",
      description:
        "Ilha montanhosa no Atlântico, famosa por suas paisagens exuberantes, trilhas e o vinho Madeira.",
      image:
        "https://i.pinimg.com/1200x/c5/7a/e0/c57ae0f30eb01def97bcb71c41398ee4.jpg",
    },
    {
      city: "Açores",
      title: "Açores",
      description:
        "Arquipélago vulcânico com crateras, lagos e miradouros impressionantes — um paraíso para quem ama natureza e aventura.",
      image:
        "https://i.pinimg.com/1200x/17/54/08/17540891bd83b763f0cab62925ad25e6.jpg",
    },
    {
      city: "Braga",
      title: "Braga",
      description:
        "Uma das cidades mais antigas do país, Braga é rica em igrejas barrocas, jardins e espiritualidade, com destaque para o Santuário do Bom Jesus do Monte.",
      image:
        "https://i.pinimg.com/1200x/f7/57/a0/f757a0d2cc80431c8b2c980a422e3573.jpg",
    },
  ],
  France: [
    {
      city: "Paris",
      title: "Paris",
      description:
        "A Cidade Luz encanta com sua arte, gastronomia e monumentos icônicos como a Torre Eiffel, o Louvre e a Catedral de Notre-Dame.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tour%20Eiffel%20Wikimedia%20Commons.jpg",
    },
    {
      city: "Nice",
      title: "Nice",
      description:
        "Pérola da Riviera Francesa, Nice combina mar azul-turquesa, calçadões elegantes e um charme mediterrâneo vibrante.",
      image:
        "https://i.pinimg.com/1200x/c4/98/f6/c498f6662fdf462fed9772f0f14b15d1.jpg",
    },
    {
      city: "Lyon",
      title: "Lyon",
      description:
        "Capital gastronômica da França, Lyon oferece uma mistura de arquitetura renascentista, colinas históricas e bistrôs premiados.",
      image:
        "https://i.pinimg.com/736x/95/de/c0/95dec028d8464950f26b66da4660fe45.jpg",
    },
    {
      city: "Marselha",
      title: "Marselha",
      description:
        "Porta do Mediterrâneo, Marselha combina o antigo porto Vieux-Port com uma cena multicultural e vistas impressionantes do mar.",
      image:
        "https://i.pinimg.com/1200x/8e/50/de/8e50de6ad8c838ca1d1c6381da261e5f.jpg",
    },
    {
      city: "Bordeaux",
      title: "Bordeaux",
      description:
        "Destino imperdível para amantes do vinho, Bordeaux é uma cidade refinada rodeada por vinhedos mundialmente famosos.",
      image:
        "https://i.pinimg.com/736x/d6/16/c7/d616c7a7ec37241f2e4d977338c75f2b.jpg",
    },
    {
      city: "Estrasburgo",
      title: "Estrasburgo",
      description:
        "Com sua arquitetura de conto de fadas e atmosfera germânica, Estrasburgo é um charme às margens do Reno.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Strasbourg%20Petite%20France.jpg",
    },
    {
      city: "Mont Saint-Michel",
      title: "Mont Saint-Michel",
      description:
        "Ilha rochosa coroada por uma abadia medieval, o Mont Saint-Michel é um dos locais mais icônicos e fotogênicos da França.",
      image:
        "https://i.pinimg.com/1200x/6c/40/31/6c40312541b26916e11700d529c8fe9f.jpg",
    },
    {
      city: "Vale do Loire",
      title: "Vale do Loire",
      description:
        "Região repleta de castelos renascentistas, jardins e vinhedos — um verdadeiro passeio pela história real francesa.",
      image:
        "https://i.pinimg.com/1200x/ed/f7/ec/edf7eca7ad1af2906cb54a4e1db165c7.jpg",
    },
    {
      city: "Provence",
      title: "Provence",
      description:
        "Famosa por seus campos de lavanda, vilas medievais e gastronomia típica, a Provence é o retrato do charme do sul da França.",
      image:
        "https://i.pinimg.com/1200x/c5/d5/a7/c5d5a79e565d50f9046a687830ba6434.jpg",
    },
  ],
  Italy: [
    {
      city: "Roma",
      title: "Roma",
      description:
        "A capital italiana é um verdadeiro museu a céu aberto, lar do Coliseu, do Vaticano, da Fontana di Trevi e de séculos de hist��ria.",
      image:
        "https://i.pinimg.com/1200x/31/bc/52/31bc52ee9a8a14d88b49d8696c5fbdbe.jpg",
    },
    {
      city: "Veneza",
      title: "Veneza",
      description:
        "Construída sobre canais, Veneza encanta com suas gôndolas, arquitetura renascentista e a icônica Praça de São Marcos.",
      image:
        "https://i.pinimg.com/736x/9d/b5/ab/9db5ab78bbcd472e95d9fd6ea5a067cf.jpg",
    },
    {
      city: "Florença",
      title: "Florença",
      description:
        "Berço do Renascimento, Florença abriga obras de Michelangelo e Leonardo da Vinci, além da magnífica Catedral de Santa Maria del Fiore.",
      image:
        "https://i.pinimg.com/1200x/ec/1e/d8/ec1ed841147a7d73a85593999d40be64.jpg",
    },
    {
      city: "Milão",
      title: "Milão",
      description:
        "Centro mundial da moda e do design, Milão impressiona com sua catedral gótica, galerias luxuosas e o afresco ‘A Última Ceia’.",
      image:
        "https://i.pinimg.com/736x/93/81/1d/93811dfc0ff907fc94ad556ec0f2b381.jpg",
    },
    {
      city: "Nápoles",
      title: "Nápoles",
      description:
        "Vibrante e autêntica, Nápoles é a porta de entrada para Pompeia, o Vesúvio e a Costa Amalfitana — e o berço da pizza!",
      image:
        "https://i.pinimg.com/1200x/28/43/1d/28431d9e02a0340179813ff85a87b605.jpg",
    },
    {
      city: "Costa Amalfitana",
      title: "Costa Amalfitana",
      description:
        "Com falésias deslumbrantes, vilas coloridas e vistas para o Mediterrâneo, a Costa Amalfitana é um dos destinos mais românticos do mundo.",
      image:
        "https://i.pinimg.com/1200x/5f/ae/69/5fae69a5618759f61913fd83d24240dc.jpg",
    },
    {
      city: "Pisa",
      title: "Pisa",
      description:
        "Famosa por sua torre inclinada, Pisa é um marco icônico da engenharia e um símbolo mundial da Itália.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Leaning%20Tower%20of%20Pisa%20Italy.jpg",
    },
    {
      city: "Verona",
      title: "Verona",
      description:
        "Cidade de Romeu e Julieta, Verona é charmosa e histórica, com ruínas romanas e praças encantadoras.",
      image:
        "https://i.pinimg.com/736x/21/56/b1/2156b1e1a248f8794870b048d1442332.jpg",
    },
    {
      city: "Cinque Terre",
      title: "Cinque Terre",
      description:
        "Cinco vilas coloridas à beira-mar formam uma das paisagens mais pitorescas da Itália, ideais para trilhas e fotografia.",
      image:
        "https://i.pinimg.com/1200x/75/3e/7a/753e7ababcb9c14915bd3a5ae1623833.jpg",
    },
  ],
  Germany: [
    {
      city: "Berlim",
      title: "Berlim",
      description:
        "A capital alemã é vibrante e repleta de história, arte e inovação. O Muro de Berlim, o Portão de Brandemburgo e o Reichstag são ícones imperdíveis.",
      image:
        "https://i.pinimg.com/736x/79/05/6b/79056b286f85ce63bf3ed98455eacecb.jpg",
    },
    {
      city: "Munique",
      title: "Munique",
      description:
        "Lar da Oktoberfest, Munique combina tradição bávara com modernidade, cercada pelos Alpes e cheia de cervejarias lendárias.",
      image:
        "https://i.pinimg.com/736x/c0/0e/dd/c00edd38eee833601f1ff44c76e7980e.jpg",
    },
    {
      city: "Hamburgo",
      title: "Hamburgo",
      description:
        "Importante cidade portuária, Hamburgo encanta com seus canais, a moderna Elbphilharmonie e uma atmosfera cosmopolita.",
      image:
        "https://i.pinimg.com/1200x/82/3d/8a/823d8a6b1ea5094a4ec51f571dda54f4.jpg",
    },
    {
      city: "Colônia (Köln)",
      title: "Colônia (Köln)",
      description:
        "Famosa por sua imponente catedral gótica às margens do Reno, Colônia é uma cidade vibrante e cheia de festivais.",
      image:
        "https://i.pinimg.com/1200x/ba/8c/7f/ba8c7ffe4db0d31b5a5f9c9e955498e0.jpg",
    },
    {
      city: "Heidelberg",
      title: "Heidelberg",
      description:
        "Cidade universitária romântica, conhecida por seu castelo em ruínas e pela charmosa cidade velha às margens do rio Neckar.",
      image:
        "https://i.pinimg.com/1200x/ab/ca/b4/abcab409184b4ffad5e3941209f4a0c2.jpg",
    },
    {
      city: "Dresden",
      title: "Dresden",
      description:
        "Reconstruída após a Segunda Guerra, Dresden é uma joia barroca com igrejas e palácios deslumbrantes às margens do rio Elba.",
      image:
        "https://i.pinimg.com/1200x/6c/85/8a/6c858a199fa6e407f316b217ae8e4982.jpg",
    },
    {
      city: "Nuremberg (Nürnberg)",
      title: "Nuremberg (Nürnberg)",
      description:
        "Cheia de história medieval e mercados de Natal famosos, Nuremberg combina charme antigo e importância histórica moderna.",
      image:
        "https://i.pinimg.com/1200x/43/9e/4b/439e4bdf4941cde5003045869076571c.jpg",
    },
    {
      city: "Rota Romântica (Romantische Straße)",
      title: "Rota Romântica (Romantische Straße)",
      description:
        "Rota cênica que liga Würzburg a Füssen, passando por vilas medievais, castelos e paisagens dos Alpes bávaros.",
      image:
        "https://midias-turismo.eurodicas.com.br/wp-content/uploads/2025/02/rota-romantica-1.jpg.webp",
    },
    {
      city: "Castelo de Neuschwanstein",
      title: "Castelo de Neuschwanstein",
      description:
        "Inspirou o castelo da Disney e é um dos cartões-postais mais famosos do mundo, situado entre montanhas e lagos da Baviera.",
      image:
        "https://i.pinimg.com/1200x/d1/cd/d9/d1cdd94e017ded3d59db67ede40f4970.jpg",
    },
  ],
  Austria: [
    {
      city: "Viena (Wien)",
      title: "Viena (Wien)",
      description:
        "A elegante capital austríaca é o coração da antiga monarquia dos Habsburgos, repleta de palácios, museus, cafés históricos e uma atmosfera musical que ecoa por toda parte.",
      image:
        "https://i.pinimg.com/1200x/02/11/d7/0211d7732709cc61481f7419881b4e45.jpg",
    },
    {
      city: "Salzburgo (Salzburg)",
      title: "Salzburgo (Salzburg)",
      description:
        "Cidade natal de Mozart e cenário do filme 'A Noviça Rebelde', Salzburgo é famosa por sua arquitetura barroca, seu castelo e sua herança musical.",
      image:
        "https://i.pinimg.com/1200x/c6/9f/35/c69f3532eb9417a2e23813486a12127e.jpg",
    },
    {
      city: "Innsbruck",
      title: "Innsbruck",
      description:
        "No coração dos Alpes, Innsbruck combina esportes de inverno, beleza alpina e arquitetura histórica com o charme tirolês.",
      image:
        "https://i.pinimg.com/736x/ef/f4/a3/eff4a37d21bd4c0997d434f5faf16b9f.jpg",
    },
    {
      city: "Hallstatt",
      title: "Hallstatt",
      description:
        "Considerada uma das vilas mais bonitas do mundo, Hallstatt encanta com seu lago sereno, casas de madeira e montanhas que parecem abraçar a cidade.",
      image:
        "https://i.pinimg.com/1200x/ec/48/72/ec4872010ed997fe59632af6c348055d.jpg",
    },
    {
      city: "Graz",
      title: "Graz",
      description:
        "Com uma mistura única de arquitetura renascentista e moderna, Graz é vibrante, criativa e conhecida por sua gastronomia e vida universitária.",
      image:
        "https://i.pinimg.com/1200x/08/45/b5/0845b5e86122212059d2c23e08da57a6.jpg",
    },
    {
      city: "Zell am See",
      title: "Zell am See",
      description:
        "Destino perfeito para quem busca natureza e aventura, Zell am See combina lagos cristalinos, trilhas e esqui em meio a paisagens alpinas impressionantes.",
      image:
        "https://i.pinimg.com/736x/ec/7e/8c/ec7e8c10b97b1d5dc67a5a8b5228e4ee.jpg",
    },
    {
      city: "Wachau",
      title: "Wachau",
      description:
        "Região vinícola pitoresca às margens do rio Danúbio, com castelos, mosteiros e vilarejos que parecem parados no tempo.",
      image:
        "https://i.pinimg.com/1200x/6e/5f/4a/6e5f4ab52b043894fa24d1f8b67be9f7.jpg",
    },
    {
      city: "Linz",
      title: "Linz",
      description:
        "Cidade moderna às margens do Danúbio, Linz é conhecida por seu foco em arte contemporânea, tecnologia e festivais culturais inovadores.",
      image:
        "https://i.pinimg.com/1200x/ee/54/8d/ee548d9e29a05117527cbd608d97c38c.jpg",
    },
    {
      city: "Kitzbühel",
      title: "Kitzbühel",
      description:
        "Um dos resorts de esqui mais famosos da Europa, Kitzbühel oferece luxo, tradição tirolesa e paisagens de tirar o fôlego durante o ano inteiro.",
      image:
        "https://i.pinimg.com/1200x/79/ca/1a/79ca1a718c3637fb170fdd7830919f44.jpg",
    },
  ],
  Greece: [
    {
      city: "Atenas",
      title: "Atenas",
      description:
        "Capital da Grécia e berço da civilização ocidental, Atenas é um museu a céu aberto com monumentos icônicos como a Acrópole e o Partenon, além de uma vibrante vida urbana.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Acropolis%20of%20Athens.jpg",
    },
    {
      city: "Santorini",
      title: "Santorini",
      description:
        "Ilha vulcânica famosa por suas casas brancas com cúpulas azuis, vistas deslumbrantes do mar Egeu e pores do sol inesquecíveis sobre Oia.",
      image:
        "https://i.pinimg.com/1200x/26/09/9e/26099e34b7cb1f6e31ddeacf5a9872c1.jpg",
    },
    {
      city: "Mykonos",
      title: "Mykonos",
      description:
        "Conhecida por suas praias animadas, moinhos de vento e vida noturna intensa, Mykonos é o destino mais cosmopolita das ilhas gregas.",
      image:
        "https://i.pinimg.com/1200x/ac/75/27/ac75274ecc5e0201cc1754d1657ba16e.jpg",
    },
    {
      city: "Creta",
      title: "Creta",
      description:
        "A maior ilha grega oferece uma mistura fascinante de praias paradisíacas, montanhas, vilas tradicionais e sítios arqueológicos como o Palácio de Knossos.",
      image:
        "https://i.pinimg.com/1200x/cc/91/3c/cc913c36e71e1507c62334d3283747ca.jpg",
    },
    {
      city: "Rodes (Rhodes)",
      title: "Rodes (Rhodes)",
      description:
        "Famosa por suas muralhas medievais e praias ensolaradas, Rodes combina história, cultura e relaxamento em um só destino.",
      image:
        "https://i.pinimg.com/1200x/34/da/79/34da79c9b16c47e08ea3ff308eab514b.jpg",
    },
    {
      city: "Corfu",
      title: "Corfu",
      description:
        "Ilha verdejante no mar Jônico, Corfu encanta com sua mistura de influências venezianas, francesas e britânicas, além de praias e vilas pitorescas.",
      image:
        "https://i.pinimg.com/1200x/c2/14/d3/c214d355e2efd9d472ebd74533d4ee55.jpg",
    },
    {
      city: "Meteora",
      title: "Meteora",
      description:
        "Um dos locais mais impressionantes da Grécia continental, com mosteiros ortodoxos construídos sobre enormes formações rochosas.",
      image:
        "https://i.pinimg.com/1200x/9b/51/89/9b51898e11a6f6977a99504c68caf703.jpg",
    },
    {
      city: "Delphi",
      title: "Delphi",
      description:
        "Antigo centro espiritual do mundo grego, onde se localiza o famoso Oráculo de Delfos, cercado por montanhas e ruínas milenares.",
      image:
        "https://i.pinimg.com/736x/86/21/a7/8621a70d4128789f90c7be43bcb41002.jpg",
    },
    {
      city: "Nafplio",
      title: "Nafplio",
      description:
        "Primeira capital da Grécia moderna, Nafplio é uma cidade costeira romântica, com ruas de pedra, fortalezas venezianas e vista para o mar Egeu.",
      image:
        "https://i.pinimg.com/1200x/bd/c8/31/bdc831772cdb5b684ff61b2b43add6a4.jpg",
    },
  ],
  Switzerland: [
    {
      city: "Zurique",
      title: "Zurique",
      description:
        "Centro financeiro e cultural da Suíça, Zurique combina modernidade e charme histórico, com ruas antigas, museus de arte e vida noturna vibrante às margens do lago.",
      image:
        "https://i.pinimg.com/1200x/ad/62/e2/ad62e2b707e49617decdab77b2d462ff.jpg",
    },
    {
      city: "Genebra",
      title: "Genebra",
      description:
        "Sede de organizações internacionais, Genebra é cosmopolita, elegante e repleta de história, com o famoso Jet d’Eau e o Lago Léman.",
      image:
        "https://i.pinimg.com/1200x/ae/40/af/ae40af9eabb603b318a25975acfd4c32.jpg",
    },
    {
      city: "Lucerna",
      title: "Lucerna",
      description:
        "Com sua icônica Kapellbrücke (Ponte da Capela) e o Lago Lucerna cercado pelos Alpes, a cidade é um dos cartões-postais mais famosos do país.",
      image:
        "https://i.pinimg.com/736x/87/b9/fe/87b9fe774c1296d6b3eb27126abb8a6d.jpg",
    },
    {
      city: "Interlaken",
      title: "Interlaken",
      description:
        "Entre dois lagos cristalinos e rodeada por montanhas, Interlaken é o destino perfeito para esportes radicais e passeios panorâmicos pelos Alpes.",
      image:
        "https://i.pinimg.com/1200x/b9/0e/61/b90e61b253c1ee9f1d007095cc8e1308.jpg",
    },
    {
      city: "Zermatt",
      title: "Zermatt",
      description:
        "Lar do icônico Matterhorn, Zermatt é um dos destinos alpinos mais prestigiados do mundo, ideal para esqui e trilhas de verão.",
      image:
        "https://i.pinimg.com/1200x/c3/99/5b/c3995b16b119b0dfbd7f4a3817216162.jpg",
    },
    {
      city: "Berna",
      title: "Berna",
      description:
        "A capital suíça encanta com seu centro histórico medieval preservado, o Zytglogge (torre do relógio) e o rio Aar serpenteando a cidade.",
      image:
        "https://i.pinimg.com/1200x/cf/e6/46/cfe64681de513b2c953e41af355e2e4f.jpg",
    },
    {
      city: "Montreux",
      title: "Montreux",
      description:
        "Cidade às margens do Lago Léman, famosa por seu festival de jazz e o Castelo de Chillon, um dos monumentos mais visitados da Suíça.",
      image:
        "https://i.pinimg.com/1200x/51/3f/4d/513f4dca9a97f9d128964bf9b2e10bdf.jpg",
    },
    {
      city: "Lugano",
      title: "Lugano",
      description:
        "No sul do país, próxima à fronteira italiana, Lugano oferece um clima mais mediterrâneo, com palmeiras, montanhas e gastronomia incrível.",
      image:
        "https://www.qualviagem.com.br/wp-content/uploads/2016/08/iStock_12702541_SMALL.jpg",
    },
    {
      city: "Grindelwald",
      title: "Grindelwald",
      description:
        "Uma vila alpina pitoresca no coração das montanhas Jungfrau, ideal para trilhas, esqui e paisagens cinematográficas.",
      image:
        "https://i.pinimg.com/1200x/89/eb/95/89eb95c44f99156d323b6c4f56fc636b.jpg",
    },
  ],
  "United Kingdom": [
    {
      city: "Londres",
      title: "Londres",
      description:
        "A capital britânica é uma metrópole global repleta de ícones como o Big Ben, o Palácio de Buckingham, o London Eye e o Museu Britânico.",
      image:
        "https://i.pinimg.com/1200x/63/bc/26/63bc262afdbe0cbbfe5f0a23e67ee5eb.jpg",
    },
    {
      city: "Edimburgo",
      title: "Edimburgo",
      description:
        "Capital da Escócia, Edimburgo combina história medieval e charme literário, com o famoso Castelo de Edimburgo e o festival Fringe.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Edinburgh%20Castle%20from%20Princes%20Street%20Gardens.jpg",
    },
    {
      city: "Lago Ness (Loch Ness)",
      title: "Lago Ness (Loch Ness)",
      description:
        "Um dos lagos mais famosos do mundo, cercado por montanhas e lendas sobre o misterioso monstro Nessie, no coração das Highlands escocesas.",
      image:
        "https://i.pinimg.com/1200x/57/7e/5d/577e5d329334ea8baf351294457e6c47.jpg",
    },
    {
      city: "Stonehenge",
      title: "Stonehenge",
      description:
        "Um dos monumentos pré-históricos mais enigmáticos do planeta, localizado no condado de Wiltshire, na Inglaterra.",
      image:
        "https://i.pinimg.com/1200x/79/fa/fa/79fafaba2de702cbf1a83f065fd02a8a.jpg",
    },
    {
      city: "Liverpool",
      title: "Liverpool",
      description:
        "Cidade natal dos Beatles, Liverpool é um centro cultural com museus, pubs musicais e uma rica herança marítima.",
      image:
        "https://i.pinimg.com/1200x/90/9d/4e/909d4e512fa4c47ae932205fb2442827.jpg",
    },
    {
      city: "Oxford",
      title: "Oxford",
      description:
        "Famosa por sua universidade centenária, Oxford é uma cidade encantadora repleta de arquitetura gótica e tradição acadêmica.",
      image:
        "https://i.pinimg.com/1200x/42/11/cc/4211cc9592d7c220476035327f780662.jpg",
    },
    {
      city: "Bath",
      title: "Bath",
      description:
        "Cidade romana com banhos termais históricos e arquitetura georgiana elegante, reconhecida como Patrimônio Mundial da UNESCO.",
      image:
        "https://i.pinimg.com/1200x/f6/db/09/f6db093852413af738d055d6b2605fed.jpg",
    },
    {
      city: "Cardiff",
      title: "Cardiff",
      description:
        "A capital do País de Gales combina castelos medievais, cultura galesa e uma vibrante cena moderna à beira-mar.",
      image:
        "https://i.pinimg.com/1200x/e6/c0/1e/e6c01e98cfcfc81dea1fae3c196668b1.jpg",
    },
    {
      city: "Belfast",
      title: "Belfast",
      description:
        "Capital da Irlanda do Norte, famosa por sua história industrial e pelo Titanic Belfast, museu dedicado ao navio que ali foi construído.",
      image:
        "https://i.pinimg.com/1200x/6f/fd/cf/6ffdcf392155296ff52a2c157d943260.jpg",
    },
  ],
  Belgium: [
    {
      city: "Bruxelas (Brussels)",
      title: "Bruxelas (Brussels)",
      description:
        "A capital da Bélgica e sede da União Europeia, Bruxelas combina arquitetura grandiosa, arte moderna e o irresistível aroma de chocolate e waffles nas ruas.",
      image:
        "https://i.pinimg.com/736x/ab/88/32/ab8832f1607b19fa8af13d2be2d2efaa.jpg",
    },
    {
      city: "Bruges (Brugge)",
      title: "Bruges (Brugge)",
      description:
        "Conhecida como a 'Veneza do Norte', Bruges encanta com seus canais, construções medievais e atmosfera romântica que a torna um dos destinos mais visitados da Europa.",
      image:
        "https://i.pinimg.com/1200x/3f/41/c1/3f41c1fc8851b6a301872b8e31c3a65f.jpg",
    },
    {
      city: "Gante (Ghent)",
      title: "Gante (Ghent)",
      description:
        "Uma joia medieval com vida universitária vibrante, Gante mistura castelos, igrejas góticas e uma cena cultural efervescente às margens do rio Leie.",
      image:
        "https://i.pinimg.com/1200x/e3/14/81/e31481207732a83e5ae6c27b1f3ecb63.jpg",
    },
    {
      city: "Antuérpia (Antwerp)",
      title: "Antuérpia (Antwerp)",
      description:
        "Capital mundial dos diamantes e berço de Rubens, Antuérpia é um centro artístico e de moda com arquitetura impressionante e uma vibe cosmopolita.",
      image:
        "https://i.pinimg.com/1200x/70/b9/91/70b9913099c05a7f20708493c8321d20.jpg",
    },
    {
      city: "Leuven",
      title: "Leuven",
      description:
        "Cidade universitária com alma jovem e animada, Leuven é famosa pela cerveja Stella Artois e por sua rica herança acadêmica e arquitetônica.",
      image:
        "https://i.pinimg.com/1200x/ec/37/89/ec37895a3f2a92fee13f9c0393245b50.jpg",
    },
    {
      city: "Namur",
      title: "Namur",
      description:
        "Localizada na confluência dos rios Sambre e Meuse, Namur é conhecida por sua cidadela panorâmica e charme tranquilo no coração da Valônia.",
      image:
        "https://i.pinimg.com/1200x/38/36/97/383697c0a855c12053954f859310b859.jpg",
    },
    {
      city: "Liège",
      title: "Liège",
      description:
        "Importante cidade da Valônia com mistura de tradição e modernidade, Liège encanta com sua catedral, seu mercado La Batte e o famoso waffle local.",
      image:
        "https://i.pinimg.com/1200x/b2/ad/e8/b2ade8f7fea634e36f5cc0805894e401.jpg",
    },
    {
      city: "Mechelen",
      title: "Mechelen",
      description:
        "Entre Bruxelas e Antuérpia, Mechelen é um tesouro histórico com belas igrejas e uma atmosfera acolhedora, ideal para quem busca autenticidade belga.",
      image:
        "https://i.pinimg.com/1200x/93/17/63/9317637521d129bde6a85a231ff8a891.jpg",
    },
  ],
  Netherlands: [
    {
      city: "Amsterdã",
      title: "Amsterdã",
      description:
        "A capital holandesa é famosa por seus canais pitorescos, museus renomados como o Rijksmuseum e o Van Gogh Museum, além da vibrante vida noturna e cultural.",
      image:
        "https://i.pinimg.com/736x/f6/b3/71/f6b3713229e7f5fbd5ec6fc4ae5ec0bc.jpg",
    },
    {
      city: "Roterdã (Rotterdam)",
      title: "Roterdã (Rotterdam)",
      description:
        "Cidade moderna e inovadora, conhecida por sua arquitetura futurista, o porto mais movimentado da Europa e uma cena artística de ponta.",
      image:
        "https://i.pinimg.com/736x/b9/55/38/b955387b99fefd22ad40daccc113bf5b.jpg",
    },
    {
      city: "Haia (Den Haag)",
      title: "Haia (Den Haag)",
      description:
        "Sede do governo holandês e da Corte Internacional de Justiça, Haia mistura elegância, praias urbanas e arte clássica como a do Mauritshuis.",
      image:
        "https://i.pinimg.com/736x/87/47/59/874759f8e1c1cc07845e37434155d6bd.jpg",
    },
    {
      city: "Utrecht",
      title: "Utrecht",
      description:
        "Com canais únicos de dois níveis e uma atmosfera estudantil vibrante, Utrecht combina história medieval com inovação moderna.",
      image:
        "https://i.pinimg.com/736x/7c/6c/3d/7c6c3da88ac742487e0790921b21a355.jpg",
    },
    {
      city: "Giethoorn",
      title: "Giethoorn",
      description:
        "Conhecida como a 'Veneza do Norte', Giethoorn é uma vila encantadora sem ruas — o transporte é feito por barcos entre canais e casas de palha.",
      image:
        "https://i.pinimg.com/1200x/3d/3d/bc/3d3dbca7328846d8a3d063b97c33aa8d.jpg",
    },
    {
      city: "Haarlem",
      title: "Haarlem",
      description:
        "Próxima de Amsterdã, Haarlem é um charme histórico com ruas de paralelepípedo, canais, museus e o famoso campo de tulipas de Keukenhof nas proximidades.",
      image:
        "https://i.pinimg.com/1200x/1b/4e/6d/1b4e6d52fa52100a2a0670e59f632bcb.jpg",
    },
    {
      city: "Delft",
      title: "Delft",
      description:
        "Cidade conhecida por sua porcelana azul e branca e por ter sido lar do pintor Vermeer. Um destino tranquilo e repleto de charme holandês clássico.",
      image:
        "https://i.pinimg.com/1200x/ad/dd/a3/addda34daad7d0fb49c549bd552f2e31.jpg",
    },
    {
      city: "Leiden",
      title: "Leiden",
      description:
        "Cidade universitária com rica herança científica e cultural, museus fascinantes e canais históricos que inspiraram Rembrandt.",
      image:
        "https://i.pinimg.com/736x/3b/e9/18/3be91863e494f1cea4e94a214f50c5b1.jpg",
    },
    {
      city: "Eindhoven",
      title: "Eindhoven",
      description:
        "Centro da inovação e design na Holanda, Eindhoven é moderna, tecnológica e sede da Philips, combinando arte, luz e engenharia de ponta.",
      image:
        "https://i.pinimg.com/1200x/45/bf/fc/45bffc5d0d1a8f8bece2bc8716d0e3f9.jpg",
    },
  ],
  Croatia: [
    {
      city: "Dubrovnik",
      title: "Dubrovnik",
      description:
        "Conhecida como a 'Pérola do Adriático', Dubrovnik é uma cidade murada à beira-mar, famosa por suas ruas de pedra, muralhas históricas e por ter sido cenário de Game of Thrones.",
      image:
        "https://i.pinimg.com/1200x/2f/8d/ad/2f8dad12916fd18fe6cf53a7f19b95fc.jpg",
    },
    {
      city: "Split",
      title: "Split",
      description:
        "Centro vibrante da Dalmácia, Split combina ruínas romanas com uma atmosfera moderna, tendo o magnífico Palácio de Diocleciano como coração da cidade.",
      image:
        "https://i.pinimg.com/1200x/c4/22/49/c4224977a112b92adf3954759332f9f0.jpg",
    },
    {
      city: "Zagreb",
      title: "Zagreb",
      description:
        "A capital croata é um mix encantador de elegância austro-húngara, cafés charmosos e uma vida cultural intensa, repleta de museus e festivais.",
      image:
        "https://i.pinimg.com/736x/9d/5b/1c/9d5b1c503456003cdb71926bc795b8a9.jpg",
    },
    {
      city: "Parque Nacional dos Lagos de Plitvice",
      title: "Parque Nacional dos Lagos de Plitvice",
      description:
        "Um dos parques mais espetaculares da Europa, com 16 lagos interligados por cachoeiras e trilhas em meio a florestas exuberantes.",
      image:
        "https://i.pinimg.com/1200x/78/02/db/7802db7880cea88713c00e9b816e42c3.jpg",
    },
    {
      city: "Zadar",
      title: "Zadar",
      description:
        "Cidade costeira com ruínas romanas, arte moderna e o famoso Órgão do Mar, um instrumento que cria música com o movimento das ondas.",
      image:
        "https://i.pinimg.com/1200x/bc/43/ed/bc43ed7860ecbb0ca5849a2423c11bf8.jpg",
    },
    {
      city: "Rovinj",
      title: "Rovinj",
      description:
        "Um dos destinos mais românticos do Adriático, Rovinj encanta com suas ruelas coloridas, porto pitoresco e atmosfera mediterrânea.",
      image:
        "https://i.pinimg.com/736x/fd/96/7a/fd967a685b3746e76bb5901c61aa29d6.jpg",
    },
    {
      city: "Pula",
      title: "Pula",
      description:
        "Famosa por seu impressionante anfiteatro romano, Pula é uma mistura fascinante de história antiga e vida praiana moderna.",
      image:
        "https://i.pinimg.com/1200x/e1/c9/4f/e1c94f0f47fc25528443be77ceb86588.jpg",
    },
    {
      city: "Hvar",
      title: "Hvar",
      description:
        "A ilha mais badalada da Croácia, Hvar é sinônimo de praias paradisíacas, festas sofisticadas e vilas históricas banhadas por águas cristalinas.",
      image:
        "https://i.pinimg.com/1200x/77/b3/09/77b30939bf98e31252acd49a29e67193.jpg",
    },
    {
      city: "Korčula",
      title: "Korčula",
      description:
        "Conhecida como a 'pequena Dubrovnik', Korčula é uma ilha de charme medieval, cercada por vinhedos e lendas sobre Marco Polo.",
      image:
        "https://i.pinimg.com/1200x/64/2f/8a/642f8a117d0acf43b3485061f2714ccd.jpg",
    },
  ],
  Czechia: [
    {
      city: "Praga (Praha)",
      title: "Praga (Praha)",
      description:
        "A capital e joia da República Tcheca, Praga encanta com seu centro histórico medieval, a Ponte Carlos, o Castelo de Praga e a famosa Praça da Cidade Velha com o Relógio Astronômico.",
      image:
        "https://i.pinimg.com/1200x/00/38/9f/00389f19dd87d52c509dceecfc612474.jpg",
    },
    {
      city: "Český Krumlov",
      title: "Český Krumlov",
      description:
        "Uma cidade de conto de fadas no sul do país, com ruas de paralelepípedo, casas coloridas e um castelo magnífico que domina o rio Vltava.",
      image:
        "https://i.pinimg.com/1200x/79/c7/84/79c78415bc4a0a0e42622a4871246a0c.jpg",
    },
    {
      city: "Karlovy Vary",
      title: "Karlovy Vary",
      description:
        "Famosa por suas águas termais e arquitetura elegante, Karlovy Vary é um destino de bem-estar e luxo, conhecida por spas e pelo festival internacional de cinema.",
      image:
        "https://i.pinimg.com/1200x/82/fc/b6/82fcb610c850a5711e634f8e6c74fb80.jpg",
    },
    {
      city: "Kutná Hora",
      title: "Kutná Hora",
      description:
        "Patrimônio Mundial da UNESCO, Kutná Hora se destaca pela impressionante Igreja de Santa Bárbara e o Ossuário de Sedlec, decorado com ossos humanos.",
      image:
        "https://i.pinimg.com/1200x/87/e9/cc/87e9cc019a6dd49a88c0bfe05749f2bb.jpg",
    },
    {
      city: "Brno",
      title: "Brno",
      description:
        "A segunda maior cidade do país é vibrante, moderna e cheia de vida estudantil, com destaque para a fortaleza de Špilberk e a arquitetura funcionalista da Villa Tugendhat.",
      image:
        "https://i.pinimg.com/736x/bd/3a/96/bd3a9612f3e75f57f8b2993e32dc024d.jpg",
    },
    {
      city: "Olomouc",
      title: "Olomouc",
      description:
        "Um tesouro histórico pouco conhecido, Olomouc possui uma das praças mais bonitas da Europa e uma atmosfera universitária animada.",
      image:
        "https://i.pinimg.com/1200x/a4/33/b2/a433b2947a2f7121ff60b9c6011a1fac.jpg",
    },
    {
      city: "Telč",
      title: "Telč",
      description:
        "Pequena e encantadora, Telč é conhecida por sua praça principal renascentista, com fachadas coloridas e perfeitamente preservadas.",
      image:
        "https://i.pinimg.com/1200x/0b/65/ec/0b65ec42c40d74676d77fd29e7319ac7.jpg",
    },
    {
      city: "Pilsen (Plzeň)",
      title: "Pilsen (Plzeň)",
      description:
        "Berço da mundialmente famosa cerveja Pilsner, Pilsen é um paraíso para amantes de cerveja e história industrial, com uma bela catedral e a fábrica original da Pilsner Urquell.",
      image:
        "https://i.pinimg.com/1200x/93/54/7d/93547d95f279e3ac17d2820f9699c5ea.jpg",
    },
    {
      city: "Karlštejn",
      title: "Karlštejn",
      description:
        "Pequena vila próxima de Praga, famosa pelo majestoso Castelo de Karlštejn, construído por Carlos IV para guardar joias da coroa e relíquias sagradas.",
      image:
        "https://i.pinimg.com/1200x/2d/d2/80/2dd28046c9481deb4d77c93f5326cefd.jpg",
    },
  ],
  Hungary: [
    {
      city: "Budapeste (Budapest)",
      title: "Budapeste (Budapest)",
      description:
        "A capital da Hungria é dividida pelo rio Danúbio entre Buda e Peste, e encanta com sua arquitetura grandiosa, banhos termais, o Parlamento húngaro e a vista do Bastião dos Pescadores.",
      image:
        "https://i.pinimg.com/1200x/e6/42/5c/e6425cb781752f65ae04c190c25b4eda.jpg",
    },
    {
      city: "Lago Balaton",
      title: "Lago Balaton",
      description:
        "Conhecido como o 'Mar da Hungria', o Lago Balaton é o maior lago de água doce da Europa Central e um dos destinos de verão mais populares do país.",
      image:
        "https://i.pinimg.com/1200x/34/cf/46/34cf469cc30c473608ccda8cd8a28891.jpg",
    },
    {
      city: "Debrecen",
      title: "Debrecen",
      description:
        "Segunda maior cidade da Hungria, Debrecen é o centro cultural e religioso do leste do país, com bela arquitetura e o famoso Grande Templo Reformado.",
      image:
        "https://i.pinimg.com/1200x/63/70/68/637068b05bbd052f57900b1b7c1bdefe.jpg",
    },
    {
      city: "Eger",
      title: "Eger",
      description:
        "Cidade histórica cercada por vinhedos, Eger é famosa por seu castelo medieval, pelos banhos termais e pelo vinho tinto 'Sangue de Touro' (Egri Bikavér).",
      image:
        "https://i.pinimg.com/1200x/d4/9e/8c/d49e8c296e684cf1ecc210524fff3824.jpg",
    },
    {
      city: "Pécs",
      title: "Pécs",
      description:
        "Localizada ao sul do país, Pécs é um centro artístico e multicultural, conhecida por sua catedral românica e mosaicos paleocristãos tombados pela UNESCO.",
      image:
        "https://i.pinimg.com/1200x/12/52/63/1252639bd8e0d07f35adb727a7eb3b03.jpg",
    },
    {
      city: "Szentendre",
      title: "Szentendre",
      description:
        "Charmosa cidade às margens do Danúbio, Szentendre é famosa por suas ruelas coloridas, galerias de arte e atmosfera boêmia próxima a Budapeste.",
      image:
        "https://i.pinimg.com/1200x/f1/18/66/f11866acb6bb4979b696821fe859183e.jpg",
    },
    {
      city: "Szeged",
      title: "Szeged",
      description:
        "Conhecida como a 'Cidade do Sol', Szeged é vibrante e universitária, famosa por seu festival de teatro ao ar livre e por sua bela catedral neorromânica.",
      image:
        "https://i.pinimg.com/1200x/a3/67/fd/a367fd714668302106a5244d969ba99a.jpg",
    },
    {
      city: "Győr",
      title: "Győr",
      description:
        "Uma das cidades mais antigas da Hungria, Győr encanta com seu centro barroco bem preservado, igrejas históricas e localização estratégica entre Viena e Budapeste.",
      image:
        "https://i.pinimg.com/736x/46/9a/d0/469ad0263e78f8304c2089803e77c72e.jpg",
    },
    {
      city: "Hollókő",
      title: "Hollókő",
      description:
        "Pequena vila tradicional listada como Patrimônio Mundial da UNESCO, Hollókő preserva o estilo de vida rural húngaro com casas de madeira e cultura folclórica autêntica.",
      image:
        "https://i.pinimg.com/1200x/c5/28/5e/c5285ea161819af7abe8893cfdbfabcd.jpg",
    },
  ],
  Iceland: [
    {
      city: "Reykjavík",
      title: "Reykjavík",
      description:
        "A capital mais setentrional do mundo combina cultura moderna, arquitetura futurista e uma cena musical vibrante, com vista para montanhas e o mar do Norte.",
      image:
        "https://i.pinimg.com/1200x/47/44/a4/4744a4fa27485af2e219580faad0b79e.jpg",
    },
    {
      city: "Círculo Dourado (Golden Circle)",
      title: "Círculo Dourado (Golden Circle)",
      description:
        "Rota turística icônica que abrange o Parque Nacional Þingvellir, o gêiser Strokkur e a impressionante cachoeira Gullfoss — um trio imperdível da Islândia.",
      image:
        "https://i.pinimg.com/1200x/bb/c5/c7/bbc5c7d1ddad28f493de612296bf9062.jpg",
    },
    {
      city: "Blue Lagoon",
      title: "Blue Lagoon",
      description:
        "Spa geotermal mundialmente famoso com águas azul-turquesa ricas em sílica, perfeito para relaxar em meio a um cenário vulcânico surreal.",
      image:
        "https://i.pinimg.com/1200x/bf/49/33/bf4933a4d3bf1b23d7191f48aa1e4c6d.jpg",
    },
    {
      city: "Vík í Mýrdal",
      title: "Vík í Mýrdal",
      description:
        "Vila costeira famosa pela praia de areia preta de Reynisfjara, com formações rochosas basálticas e ondas poderosas do Atlântico Norte.",
      image:
        "https://i.pinimg.com/1200x/6c/63/3d/6c633d95c78b26a0a856bab1a4035ae8.jpg",
    },
    {
      city: "Jökulsárlón",
      title: "Jökulsárlón",
      description:
        "Lago glacial repleto de icebergs flutuantes vindos do glaciar Vatnajökull, oferecendo um dos cenários mais fotogênicos da Islândia.",
      image:
        "https://i.pinimg.com/736x/7a/5e/79/7a5e79bd7f6c762b9248dfcb0272be54.jpg",
    },
    {
      city: "Akureyri",
      title: "Akureyri",
      description:
        "Conhecida como a 'capital do norte', Akureyri é charmosa, cercada por montanhas e uma ótima base para explorar fiordes e avistar baleias.",
      image:
        "https://i.pinimg.com/736x/0a/54/6a/0a546adbbbe74b44adf766ae26b7f84e.jpg",
    },
    {
      city: "Landmannalaugar",
      title: "Landmannalaugar",
      description:
        "Região de montanhas coloridas e trilhas espetaculares nas Terras Altas islandesas, ideal para trekking e banhos em fontes termais naturais.",
      image:
        "https://i.pinimg.com/1200x/03/d0/cf/03d0cf2c4da6122575b1cdc9373242b7.jpg",
    },
    {
      city: "Dettifoss",
      title: "Dettifoss",
      description:
        "Considerada a cachoeira mais poderosa da Europa, Dettifoss impressiona com sua força brutal e o cenário lunar ao redor.",
      image:
        "https://i.pinimg.com/1200x/72/05/c1/7205c15784a5e6849f70bae62635bebd.jpg",
    },
    {
      city: "Snaefellsnes",
      title: "Snaefellsnes",
      description:
        "Península que reúne o melhor da Islândia em um só lugar — vulcões, glaciares, praias negras e o icônico monte Kirkjufell, cartão-postal do país.",
      image:
        "https://i.pinimg.com/1200x/53/73/11/53731153d47467e42657af89ced12bf7.jpg",
    },
  ],
  Australia: [
    {
      city: "Sydney",
      title: "Sydney",
      description:
        "Maior e mais icônica cidade australiana, Sydney encanta com sua famosa Ópera, a Harbour Bridge e praias lendárias como Bondi e Manly.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sydney%20Opera%20House%20and%20Harbour%20Bridge.jpg",
    },
    {
      city: "Melbourne",
      title: "Melbourne",
      description:
        "Capital cultural da Austrália, Melbourne é famosa por sua cena artística, cafés charmosos, eventos esportivos e o clima cosmopolita vibrante.",
      image:
        "https://i.pinimg.com/1200x/7e/2c/37/7e2c3712f9e3c22f6bac591e9a56a0b0.jpg",
    },
    {
      city: "Grande Barreira de Corais (Great Barrier Reef)",
      title: "Grande Barreira de Corais (Great Barrier Reef)",
      description:
        "Maior sistema de recifes de coral do mundo, a Grande Barreira é um paraíso de mergulho e biodiversidade marinha, visível até do espaço.",
      image:
        "https://i.pinimg.com/736x/3b/0e/d5/3b0ed5e9bcfa06fb2bbf9cc4d2b80b11.jpg",
    },
    {
      city: "Uluru (Ayers Rock)",
      title: "Uluru (Ayers Rock)",
      description:
        "Símbolo espiritual da Austrália, o monólito vermelho localizado no coração do deserto é sagrado para os povos aborígenes e muda de cor ao pôr do sol.",
      image:
        "https://i.pinimg.com/1200x/98/bb/91/98bb9100b5e14683e4aedc13203c88ab.jpg",
    },
    {
      city: "Cairns",
      title: "Cairns",
      description:
        "Porta de entrada para a Grande Barreira de Corais e para as florestas tropicais de Daintree, Cairns é o destino ideal para aventureiros e mergulhadores.",
      image:
        "https://i.pinimg.com/736x/db/07/90/db0790b5420e89cdd2cc9cad12f97a77.jpg",
    },
    {
      city: "Gold Coast",
      title: "Gold Coast",
      description:
        "Destino praiano famoso por suas ondas perfeitas, arranha-céus à beira-mar e parques temáticos que atraem turistas do mundo todo.",
      image:
        "https://i.pinimg.com/1200x/7c/2a/b2/7c2ab2ce8d652dcd5115831080866e66.jpg",
    },
    {
      city: "Perth",
      title: "Perth",
      description:
        "Capital da Austrália Ocidental, Perth combina praias tranquilas, vinícolas renomadas e uma cena cultural crescente às margens do rio Swan.",
      image:
        "https://i.pinimg.com/1200x/8b/65/cf/8b65cfe5fde99e392aba9dd17b585920.jpg",
    },
    {
      city: "Tasmania",
      title: "Tasmania",
      description:
        "Ilha australiana selvagem e exuberante, conhecida por seus parques nacionais, trilhas de aventura e pela fauna única — incluindo o diabo-da-tasmânia.",
      image:
        "https://i.pinimg.com/1200x/16/30/ed/1630ede581c7f24c6044d5351928297d.jpg",
    },
    {
      city: "Adelaide",
      title: "Adelaide",
      description:
        "Cidade charmosa e planejada, cercada por vinhedos e praias, Adelaide é famosa por seus festivais culturais e pela gastronomia sofisticada.",
      image:
        "https://i.pinimg.com/1200x/a1/d6/94/a1d69466a326dc7946ce8ed20bcb210d.jpg",
    },
  ],
  "New Zealand": [
    {
      city: "Auckland",
      title: "Auckland",
      description:
        "Maior cidade da Nova Zelândia, Auckland é cercada por vulcões adormecidos e belas baías, sendo o ponto de partida perfeito para explorar o país.",
      image:
        "https://i.pinimg.com/736x/d4/6c/a0/d46ca0d07fb887f260a9e1f419a3fc2a.jpg",
    },
    {
      city: "Queenstown",
      title: "Queenstown",
      description:
        "Considerada a capital mundial da aventura, Queenstown é famosa por esportes radicais, paisagens alpinas e o magnífico Lago Wakatipu.",
      image:
        "https://i.pinimg.com/1200x/33/7c/60/337c609a4cccd98b553ea3318ec8b734.jpg",
    },
    {
      city: "Rotorua",
      title: "Rotorua",
      description:
        "Conhecida pela atividade geotérmica e cultura maori vibrante, Rotorua impressiona com geysers, piscinas de lama quente e aldeias tradicionais.",
      image:
        "https://i.pinimg.com/1200x/b0/77/c9/b077c9d82b7fd3f1dd8a406f7f3fe46d.jpg",
    },
    {
      city: "Milford Sound",
      title: "Milford Sound",
      description:
        "Um dos lugares mais icônicos do país, o fiorde de Milford Sound é cercado por montanhas íngremes e cachoeiras espetaculares.",
      image:
        "https://i.pinimg.com/1200x/2f/b3/67/2fb36788971f85fa31798d3b966c7216.jpg",
    },
    {
      city: "Wellington",
      title: "Wellington",
      description:
        "A capital da Nova Zelândia combina arte, política e natureza, com museus premiados, colinas verdes e uma baía pitoresca.",
      image:
        "https://i.pinimg.com/1200x/2c/c7/c8/2cc7c865ed8c7d1f92b495d44db13f6a.jpg",
    },
    {
      city: "Christchurch",
      title: "Christchurch",
      description:
        "Conhecida como a 'Cidade Jardim', Christchurch se destaca pela arquitetura moderna, parques amplos e a resiliência pós-terremoto.",
      image:
        "https://i.pinimg.com/1200x/8b/7a/06/8b7a06537af57d79471d2b43c5b3c10f.jpg",
    },
    {
      city: "Taupo",
      title: "Taupo",
      description:
        "Lar do maior lago da Nova Zelândia, Taupo é um paraíso para esportes aquáticos, pesca e trilhas próximas ao Parque Nacional de Tongariro.",
      image:
        "https://i.pinimg.com/1200x/c6/3a/c4/c63ac4207957d11e7d069d832d757f5c.jpg",
    },
    {
      city: "Franz Josef Glacier",
      title: "Franz Josef Glacier",
      description:
        "Um dos poucos glaciares do mundo que se estende até uma floresta tropical, oferecendo trilhas e passeios de helicóptero deslumbrantes.",
      image:
        "https://i.pinimg.com/1200x/8c/76/83/8c7683c4f0b271bb7c3f6286436c8808.jpg",
    },
    {
      city: "Bay of Islands",
      title: "Bay of Islands",
      description:
        "Região tropical com mais de 140 ilhas, praias de águas turquesa e uma história rica na colonização da Nova Zelândia.",
      image:
        "https://i.pinimg.com/736x/8a/ad/1d/8aad1d6e7c0352fded62029d99d0a302.jpg",
    },
  ],
  Fiji: [
    {
      city: "Nadi",
      title: "Nadi",
      description:
        "Principal porta de entrada de Fiji, Nadi combina praias paradisíacas, resorts luxuosos e o impressionante Templo Sri Siva Subramaniya, o maior templo hindu do Hemisfério Sul.",
      image:
        "https://i.pinimg.com/1200x/0f/d1/fd/0fd1fd54e5bf5794c1899cbbd68e1456.jpg",
    },
    {
      city: "Ilhas Mamanuca",
      title: "Ilhas Mamanuca",
      description:
        "Um arquipélago de pequenas ilhas com águas cristalinas e recifes ideais para mergulho e snorkel — cenário de filmes como ‘O Náufrago’.",
      image:
        "https://i.pinimg.com/1200x/2b/57/23/2b57238d28ef8a6cf26d5263aa967a39.jpg",
    },
    {
      city: "Ilhas Yasawa",
      title: "Ilhas Yasawa",
      description:
        "Famosas por suas praias intocadas e águas azul-turquesa, as Yasawa são perfeitas para quem busca isolamento, natureza e hospitalidade local.",
      image:
        "https://i.pinimg.com/1200x/72/e0/ee/72e0eee23d65471d97374270d0625573.jpg",
    },
    {
      city: "Suva",
      title: "Suva",
      description:
        "A capital das Fiji, localizada na ilha de Viti Levu, mistura cultura, vida urbana e história — com museus, mercados e arquitetura colonial britânica.",
      image:
        "https://i.pinimg.com/1200x/3a/37/9a/3a379ac18bb82d096f5ca35acd75cefb.jpg",
    },
    {
      city: "Coral Coast",
      title: "Coral Coast",
      description:
        "Faixa litorânea repleta de resorts, vilas tradicionais e recifes coloridos, ideal para mergulhadores e viajantes que buscam relaxamento e cultura.",
      image:
        "https://i.pinimg.com/736x/20/45/07/204507a203cb20b60defaa9cb0accbe2.jpg",
    },
    {
      city: "Taveuni",
      title: "Taveuni",
      description:
        "Conhecida como a 'Ilha Jardim', Taveuni é um paraíso tropical de cachoeiras, florestas e trilhas, com destaque para o Bouma National Heritage Park.",
      image:
        "https://i.pinimg.com/736x/34/dd/fa/34ddfa3709c9c3f5bb518fc55d7aa5bd.jpg",
    },
    {
      city: "Vanua Levu",
      title: "Vanua Levu",
      description:
        "A segunda maior ilha de Fiji, com natureza exuberante, recifes de corais e uma atmosfera autêntica e menos turística.",
      image:
        "https://i.pinimg.com/1200x/e1/07/cb/e107cbd13af9284940e41ce6f89c943c.jpg",
    },
    {
      city: "Pacific Harbour",
      title: "Pacific Harbour",
      description:
        "Conhecido como o 'centro da aventura de Fiji', Pacific Harbour oferece mergulho com tubarões, rafting e muita adrenalina.",
      image:
        "https://i.pinimg.com/1200x/56/93/cd/5693cd8a78fdedb3febef963900eda7c.jpg",
    },
    {
      city: "Savusavu",
      title: "Savusavu",
      description:
        "Um charmoso vilarejo costeiro famoso por suas fontes termais, recifes vibrantes e atmosfera relaxada de ilha tropical.",
      image:
        "https://images.luxuryescapes.com/fl_progressive,q_auto:best,dpr_2.0/4j81rv692otsi0ahtv6",
    },
  ],
  Samoa: [
    {
      city: "Apia",
      title: "Apia",
      description:
        "A capital de Samoa, localizada na ilha de Upolu, mistura tradição e modernidade com mercados vibrantes, arquitetura colonial e o Museu Robert Louis Stevenson.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/62/df/32/immaculate-conception.jpg?w=1000&h=1000&s=1",
    },
    {
      city: "To Sua Ocean Trench",
      title: "To Sua Ocean Trench",
      description:
        "Uma das atrações mais icônicas de Samoa, esse buraco natural gigante forma uma piscina de água azul-turquesa cercada por vegetação tropical.",
      image:
        "https://i.pinimg.com/1200x/9b/52/d4/9b52d478bacb8dcb5bb698e0d2592f8c.jpg",
    },
    {
      city: "Lalomanu Beach",
      title: "Lalomanu Beach",
      description:
        "Considerada uma das praias mais lindas do Pacífico Sul, Lalomanu encanta com suas águas cristalinas e atmosfera relaxante.",
      image:
        "https://i.pinimg.com/736x/ec/d6/c7/ecd6c728acaf7f5f017838e83e97c037.jpg",
    },
    {
      city: "Papaseea Sliding Rocks",
      title: "Papaseea Sliding Rocks",
      description:
        "Formações rochosas naturais que funcionam como escorregadores, levando a piscinas refrescantes no meio da floresta tropical.",
      image:
        "https://i.pinimg.com/1200x/5d/3f/fd/5d3ffd7ec83f0b5c62fb0a0eed8ed632.jpg",
    },
    {
      city: "Piula Cave Pool",
      title: "Piula Cave Pool",
      description:
        "Uma caverna subterrânea com águas cristalinas e sagradas, perfeita para mergulho e relaxamento.",
      image:
        "https://i.pinimg.com/736x/01/91/c7/0191c7f768f46bb1cee298e0fdd818fc.jpg",
    },
    {
      city: "Alofaaga Blowholes",
      title: "Alofaaga Blowholes",
      description:
        "Impressionantes buracos naturais que jorram água do mar a vários metros de altura com a força das ondas.",
      image:
        "https://tripcarverbucket.s3.amazonaws.com/free_activities/Alofaanga_Blowholes_1_CREDIT_Samoa_Pocket_Guide_.jpg",
    },
    {
      city: "Togitogiga Waterfall",
      title: "Togitogiga Waterfall",
      description:
        "Cachoeira pitoresca dentro do Parque Nacional O Le Pupu-Pu'e, cercada por florestas e trilhas exuberantes.",
      image:
        "https://i.pinimg.com/736x/d9/30/03/d93003c9523a29de400104d43b017f50.jpg",
    },
    {
      city: "Manono Island",
      title: "Manono Island",
      description:
        "Ilha sem carros e com uma forte cultura local, ideal para imersão na vida tradicional samoana.",
      image:
        "https://i.pinimg.com/1200x/fe/bd/3f/febd3fa4bc28351311a7000df34d80fe.jpg",
    },
    {
      city: "Saleaula Lava Fields",
      title: "Saleaula Lava Fields",
      description:
        "Campos de lava solidificada de erupções antigas, onde ruínas de igrejas e aldeias contam a história da força da natureza.",
      image:
        "https://i.pinimg.com/736x/92/58/74/925874c766f696cf00b2fdb108b8f56c.jpg",
    },
  ],
  Tonga: [
    {
      city: "Nuku'alofa",
      title: "Nuku'alofa",
      description:
        "A capital do Reino de Tonga, localizada na ilha de Tongatapu, é o centro político e cultural do país, com o Palácio Real, mercados locais e belas igrejas.",
      image:
        "https://i.pinimg.com/1200x/14/fe/11/14fe115455ec52423940922a86fc4227.jpg",
    },
    {
      city: "Ha'apai Islands",
      title: "Ha'apai Islands",
      description:
        "Arquipélago de ilhas praticamente intocadas, com praias desertas e águas ideais para mergulho e observação de baleias jubarte.",
      image:
        "https://i.pinimg.com/736x/45/15/8e/45158e1b092eb930c5d167764b9ca7dd.jpg",
    },
    {
      city: "Vava'u Islands",
      title: "Vava'u Islands",
      description:
        "Famosas mundialmente por serem um dos melhores lugares do planeta para nadar com baleias jubarte, além de velejar e explorar cavernas marinhas.",
      image:
        "https://i.pinimg.com/736x/88/6d/92/886d92828492984ecba6fdabeb075c75.jpg",
    },
    {
      city: "Tongatapu",
      title: "Tongatapu",
      description:
        "A principal ilha do país abriga ruínas antigas, praias incríveis e locais sagrados, sendo o coração histórico e espiritual de Tonga.",
      image:
        "https://i.pinimg.com/1200x/dd/84/d5/dd84d542531cfb97509e3877e92e9818.jpg",
    },
    {
      city: "Mapu'a 'a Vaea Blowholes",
      title: "Mapu'a 'a Vaea Blowholes",
      description:
        "Fenômeno natural impressionante onde jatos de água do mar são expelidos por buracos na costa, criando uma cena espetacular.",
      image:
        "https://www.sophiesworld.net/wp-content/uploads/2011/09/6162104355_6999448401_z.jpg",
    },
    {
      city: "Eua Island",
      title: "Eua Island",
      description:
        "Uma das ilhas mais antigas do Pacífico, Eua é um refúgio natural de trilhas, falésias, cavernas e florestas tropicais.",
      image:
        "https://dxnews.com/upload/Image/Eua_A35RT.jpg",
    },
    {
      city: "Anahulu Cave",
      title: "Anahulu Cave",
      description:
        "Caverna impressionante com formações rochosas e uma piscina subterrânea de água doce, ideal para nadar em um ambiente único.",
      image:
        "https://i.pinimg.com/1200x/b5/f9/9e/b5f99ef451622914280a04cf19e35cfd.jpg",
    },
    {
      city: "Pangaimotu Island",
      title: "Pangaimotu Island",
      description:
        "Ilha próxima à capital, famosa por sua atmosfera relaxada, praias douradas e o icônico navio naufragado Royal Sunset.",
      image:
        "https://i.pinimg.com/1200x/20/7d/2d/207d2dbc1674f9611078ba76ced691c3.jpg",
    },
  ],
  "Papua New Guinea": [
    {
      city: "Port Moresby",
      title: "Port Moresby",
      description:
        "A capital e principal porta de entrada do país, Port Moresby mistura cultura local, mercados coloridos e o belo Parque Natural de Varirata.",
      image:
        "https://i.pinimg.com/1200x/df/1f/55/df1f5599f13fa4d277be656ac3a70443.jpg",
    },
    {
      city: "Kokoda Track",
      title: "Kokoda Track",
      description:
        "Uma das trilhas mais lendárias do mundo, atravessando florestas tropicais e montanhas, repleta de história da Segunda Guerra Mundial.",
      image:
        "https://i.pinimg.com/736x/9f/cc/a9/9fcca97030074d6b3c21a4b8818c6264.jpg",
    },
    {
      city: "Rabaul",
      title: "Rabaul",
      description:
        "Cidade costeira na ilha de New Britain, conhecida por seus vulcões ativos, mergulho em naufrágios e paisagens dramáticas.",
      image:
        "https://i.pinimg.com/1200x/70/71/c3/7071c3a17caacea3702c596902df6f6c.jpg",
    },
    {
      city: "Mount Hagen",
      title: "Mount Hagen",
      description:
        "Coração das terras altas, Mount Hagen é famoso por suas plantações de café, feiras tribais e o vibrante Mount Hagen Cultural Show.",
      image:
        "https://i.pinimg.com/1200x/e2/e8/c9/e2e8c96f101aaa3de724fdb87d3f630e.jpg",
    },
    {
      city: "Madang",
      title: "Madang",
      description:
        "Cidade costeira charmosa, ideal para mergulho e snorkel, com recifes de corais coloridos, cavernas marinhas e lagos serenos.",
      image:
        "https://i.pinimg.com/1200x/e6/ac/a5/e6aca5d153913fd13eb62218b587d108.jpg",
    },
    {
      city: "Tufi",
      title: "Tufi",
      description:
        "Um paraíso isolado entre fiordes e colinas verdejantes, Tufi é conhecido por mergulhos espetaculares e vilas tradicionais.",
      image:
        "https://www.aqua-firma.com/contentFiles/image/2023/11/papua-new-guinea-reef-rainforest.jpg",
    },
    {
      city: "Sepik River",
      title: "Sepik River",
      description:
        "Um dos maiores rios do país, o Sepik é uma imersão cultural, com aldeias tradicionais e esculturas tribais únicas.",
      image:
        "https://i.pinimg.com/736x/fc/16/34/fc163435c1a2eb2b42027824f9ca325b.jpg",
    },
    {
      city: "Alotau",
      title: "Alotau",
      description:
        "Porta de entrada para as Ilhas Milne Bay, Alotau é perfeita para quem busca cultura, praias remotas e mergulho de nível mundial.",
      image:
        "https://www.oceaniacruises.com/Images/Ports/Medium/61287/GUR.jpg",
    },
    {
      city: "Goroka",
      title: "Goroka",
      description:
        "Famosa pelo Goroka Show, festival cultural que celebra as tradições tribais com danças, pinturas corporais e trajes vibrantes.",
      image:
        "https://i.pinimg.com/1200x/21/af/e0/21afe03d3bd1ab21509f9dfec3f98285.jpg",
    },
  ],
  "Cook Islands": [
    {
      city: "Rarotonga",
      title: "Rarotonga",
      description:
        "A principal ilha e porta de entrada das Ilhas Cook, Rarotonga é cercada por recifes de coral, praias de areia branca e montanhas cobertas por floresta tropical — perfeita para caminhadas e mergulho.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Muri%20Beach%2C%20Rarotonga%2C%20Cook%20Islands.jpg",
    },
    {
      city: "Aitutaki",
      title: "Aitutaki",
      description:
        "Conhecida por sua impressionante lagoa azul-turquesa e ilhotas paradisíacas, Aitutaki é um dos lugares mais belos do Pacífico Sul — ideal para lua de mel e mergulho com snorkel.",
      image:
        "https://i.pinimg.com/1200x/07/dd/5b/07dd5bc35528fbbc12bc72bce416157d.jpg",
    },
    {
      city: "Atiu",
      title: "Atiu",
      description:
        "Ilha menos turística e cheia de charme natural, com cavernas de calcário, plantações de café e vilas tradicionais que preservam a cultura polinésia autêntica.",
      image:
        "https://i.pinimg.com/736x/9e/04/98/9e04982daed94945be6d81dd6e3f04c8.jpg",
    },
    {
      city: "Mangaia",
      title: "Mangaia",
      description:
        "Uma das ilhas mais antigas do Pacífico, Mangaia oferece paisagens dramáticas, cavernas de calcário e uma forte conexão com a herança cultural polinésia.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4E8iykSnw-a9KW3VhGb0JswsG1duspROHIOzNklFKV2b7NVyAd2kOvzo2Pa6R1VWKqM&usqp=CAU",
    },
    {
      city: "Mauke",
      title: "Mauke",
      description:
        "Chamada de “Ilha do Jardim”, Mauke encanta com suas flores tropicais, cavernas subterrâneas e atmosfera tranquila, ideal para quem busca isolamento e natureza.",
      image:
        "https://i.pinimg.com/1200x/3c/dc/b7/3cdcb771611213697dd433ccae6e78c5.jpg",
    },
    {
      city: "Mitiaro",
      title: "Mitiaro",
      description:
        "Uma pequena ilha de calcário com cavernas aquáticas cristalinas, lagoas interiores e hospitalidade polinésia autêntica — um verdadeiro refúgio remoto.",
      image:
        "https://i.pinimg.com/1200x/ca/f2/ad/caf2adbe6ce91a1723c97fa00adde0a2.jpg",
    },
    {
      city: "Manihiki",
      title: "Manihiki",
      description:
        "Conhecida como a 'Ilha das Pérolas Negras', Manihiki é o centro da indústria de pérolas das Ilhas Cook, com lagoas profundas e mergulhos excepcionais.",
      image:
        "https://i.pinimg.com/1200x/6f/69/5e/6f695e8587c1fda77e0b6835841adb26.jpg",
    },
    {
      city: "Penrhyn (Tongareva)",
      title: "Penrhyn (Tongareva)",
      description:
        "A maior lagoa das Ilhas Cook, Penrhyn é um paraíso intocado de ilhotas isoladas, recifes e águas translúcidas ideais para explorar de barco.",
      image:
        "https://i.pinimg.com/1200x/65/e7/35/65e73558e919a91ff3c6d3ba902db75f.jpg",
    },
    {
      city: "Palmerston",
      title: "Palmerston",
      description:
        "Uma ilha remota com uma comunidade única descendente de um único inglês e suas esposas polinésias — um destino raro e fascinante para aventureiros.",
      image:
        "https://i.pinimg.com/1200x/ee/05/88/ee058855699f472966b9673eb77a3cc1.jpg",
    },
  ],
  Vanuatu: [
    {
      city: "Port Vila (Efate)",
      title: "Port Vila (Efate)",
      description:
        "A capital de Vanuatu e principal porta de entrada do país. Port Vila combina paisagens tropicais, mercados locais vibrantes e resorts à beira-mar, com uma vista incrível da Baía de Mele.",
      image:
        "https://i.pinimg.com/1200x/08/6b/55/086b550cadf849b0b88b5f0aaed7a9af.jpg",
    },
    {
      city: "Ilha de Espiritu Santo",
      title: "Ilha de Espiritu Santo",
      description:
        "A maior ilha do arquipélago, famosa por suas praias imaculadas como Champagne Beach e pelas cavernas subaquáticas do Blue Hole — um paraíso para mergulhadores e aventureiros.",
      image:
        "https://i.pinimg.com/1200x/60/6f/14/606f1471ac34a1d13977f8d3d3e65a71.jpg",
    },
    {
      city: "Monte Yasur (Tanna)",
      title: "Monte Yasur (Tanna)",
      description:
        "Um dos vulcões mais acessíveis do mundo, o Monte Yasur oferece uma experiência única de observar erupções ativas de perto — um espetáculo natural impressionante.",
      image:
        "https://i.pinimg.com/1200x/ea/06/2a/ea062aa0d38032e99dc6f3cb781283ff.jpg",
    },
    {
      city: "Ilha de Tanna",
      title: "Ilha de Tanna",
      description:
        "Além do vulcão Yasur, Tanna é lar de vilas tradicionais, florestas tropicais e praias isoladas. Um mergulho profundo na cultura e natureza de Vanuatu.",
      image:
        "https://media.istockphoto.com/id/1195550350/pt/foto/seascape-view-in-sunny-weather-tanna-island-vanuatu.jpg?s=612x612&w=0&k=20&c=o5L0Ty9Peq7oM5SC-AJiOSKvLWnXpE6b6xF9H9mUvCQ=",
    },
    {
      city: "Champagne Beach",
      title: "Champagne Beach",
      description:
        "Com areia branca e águas azul-turquesa que literalmente borbulham como champanhe devido às bolhas vulcânicas, esta praia é uma das mais belas do Pacífico Sul.",
      image:
        "https://i.pinimg.com/736x/73/89/0f/73890f3713c51580515e0015a476a825.jpg",
    },
    {
      city: "Ilha de Pentecost",
      title: "Ilha de Pentecost",
      description:
        "Famosa por suas cerimônias de salto de torre (land diving), consideradas precursoras do bungee jump, e pela rica cultura tradicional preservada pelos nativos locais.",
      image:
        "https://media.istockphoto.com/id/2149691460/pt/foto/drone-view-of-sandy-beach-and-green-shore-near-turquoise-sea-tourist-settlement-sanma-vanuatu.jpg?s=612x612&w=0&k=20&c=3KU_NDM8SXFO7dPYF9UdxNq7k5ldKaXfu4qrqttYDvc=",
    },
    {
      city: "Blue Holes de Espiritu Santo",
      title: "Blue Holes de Espiritu Santo",
      description:
        "Piscinas naturais de águas cristalinas e azuladas, cercadas por florestas tropicais, perfeitas para nadar, mergulhar e relaxar em meio à natureza.",
      image:
        "https://i.pinimg.com/1200x/c9/ff/c5/c9ffc5c54f7dd305c53e28e572ea095d.jpg",
    },
    {
      city: "Mele Cascades",
      title: "Mele Cascades",
      description:
        "Uma série de belas cachoeiras próximas a Port Vila, onde é possível nadar em piscinas naturais e curtir um cenário de selva exuberante.",
      image:
        "https://i.pinimg.com/736x/33/53/7c/33537c4cc9443c0a88a687605deb6e06.jpg",
    },
  ],
  Palau: [
    {
      city: "Rock Islands (Ilhas de Rocha)",
      title: "Rock Islands (Ilhas de Rocha)",
      description:
        "Um dos maiores cartões-postais de Palau, as Rock Islands são formações de calcário cobertas de vegetação, cercadas por águas azul-turquesa ideais para caiaque, mergulho e snorkel.",
      image:
        "https://i.pinimg.com/736x/99/c1/a6/99c1a6be853a4d4ded702df51224d00c.jpg",
    },
    {
      city: "Jellyfish Lake",
      title: "Jellyfish Lake",
      description:
        "Um lago marinho único onde milhares de águas-vivas inofensivas nadam livremente — proporcionando uma das experiências de mergulho mais surreais do planeta.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Jellyfish%20Lake%20Palau.jpg",
    },
    {
      city: "Koror",
      title: "Koror",
      description:
        "Principal centro urbano de Palau, Koror oferece museus, resorts, restaurantes e acesso fácil às ilhas vizinhas, sendo o ponto de partida para a maioria das aventuras no arquipélago.",
      image:
        "https://www.outlooktravelmag.com/media/palau-1-1582549935.profileImage.2x-1536x884.webp",
    },
    {
      city: "Blue Corner",
      title: "Blue Corner",
      description:
        "Considerado um dos melhores pontos de mergulho do mundo, o Blue Corner é famoso pela abundância de tubarões, cardumes coloridos e corais vibrantes.",
      image:
        "https://i.pinimg.com/1200x/bd/83/8a/bd838aae9028e1433cc53be2e62e00e8.jpg",
    },
    {
      city: "Ngardmau Waterfall",
      title: "Ngardmau Waterfall",
      description:
        "A maior cachoeira de Palau, cercada por floresta tropical densa e trilhas naturais, perfeita para quem busca aventura e contato direto com a natureza.",
      image:
        "https://i.pinimg.com/1200x/b1/2c/36/b12c36c529d270b3c4181baaa9948248.jpg",
    },
    {
      city: "German Channel",
      title: "German Channel",
      description:
        "Canal artificial criado durante a ocupação alemã, hoje um hotspot de mergulho onde é possível avistar arraias-jamanta e uma rica vida marinha.",
      image:
        "https://i.pinimg.com/1200x/ec/48/b0/ec48b072e94249c1aa748e9ad62cd394.jpg",
    },
    {
      city: "Milky Way Lagoon",
      title: "Milky Way Lagoon",
      description:
        "Uma lagoa natural com águas esverdeadas e fundo de calcário branco, famoso por seu ‘banho de lama’ rejuvenescedor — um spa natural no meio do oceano.",
      image:
        "https://i.pinimg.com/1200x/d8/d7/97/d8d7976320733474e2793280d17f8236.jpg",
    },
    {
      city: "Long Beach (Koror)",
      title: "Long Beach (Koror)",
      description:
        "Uma das praias mais icônicas de Palau, famosa por aparecer apenas durante a maré baixa, formando uma faixa de areia que conecta pequenas ilhas em meio às águas cristalinas.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/8e/aa/85/long-beach-one-of-the.jpg?w=1200&h=-1&s=1",
    },
  ],
  "Federated States of Micronesia": [
    {
      city: "Nan Madol (Pohnpei)",
      title: "Nan Madol (Pohnpei)",
      description:
        "Conhecida como a 'Veneza do Pacífico', Nan Madol é uma antiga cidade construída sobre pequenas ilhotas artificiais, com ruínas de pedra e canais misteriosos que datam do século XIII.",
      image:
        "https://i.pinimg.com/1200x/c6/37/86/c6378683558a3834d745839d7546b2a6.jpg",
    },
    {
      city: "Pohnpei Island",
      title: "Pohnpei Island",
      description:
        "A ilha mais verde e montanhosa da Micronésia, lar de cachoeiras exuberantes, florestas tropicais e locais históricos, além de uma cultura vibrante e acolhedora.",
      image:
        "https://paradises.com/wp-content/uploads/2024/03/pohnpei1-jpg.webp",
    },
    {
      city: "Sokehs Rock (Pohnpei)",
      title: "Sokehs Rock (Pohnpei)",
      description:
        "Uma impressionante formação rochosa que lembra uma montanha gigante emergindo da selva — ponto de trilha popular com vistas panorâmicas de Pohnpei.",
      image:
        "https://i.pinimg.com/736x/d8/7e/a4/d87ea4757d8074555052783cdaaff4a8.jpg",
    },
    {
      city: "Chuuk Lagoon",
      title: "Chuuk Lagoon",
      description:
        "Um dos destinos de mergulho mais famosos do mundo, repleto de destroços de navios e aviões japoneses da Segunda Guerra Mundial, agora transformados em recifes artificiais.",
      image:
        "https://i.pinimg.com/736x/9c/46/67/9c4667a4f06143781884f6118e3cbb6e.jpg",
    },
    {
      city: "Yap Island",
      title: "Yap Island",
      description:
        "Conhecida por suas tradições culturais e pela moeda de pedra gigante chamada 'rai stones', Yap também oferece excelentes locais de mergulho e snorkel.",
      image:
        "https://i.pinimg.com/1200x/11/8d/f0/118df0b78f99075120c2d02c1b444c77.jpg",
    },
    {
      city: "Colonia (Yap)",
      title: "Colonia (Yap)",
      description:
        "A pequena capital de Yap combina cultura local, mercados tradicionais e acesso a belas praias e vilas preservadas.",
      image:
        "https://i.pinimg.com/736x/2b/42/95/2b429573c36a3db651ac2bc5192cc738.jpg",
    },
    {
      city: "Kosrae Island",
      title: "Kosrae Island",
      description:
        "A ilha mais oriental da Micronésia é um refúgio de tranquilidade com montanhas cobertas de floresta tropical, recifes intocados e sítios arqueológicos antigos.",
      image:
        "https://www.hideawayholidays.com.au/wp-content/uploads/2019/10/Micronesia_522px.jpg",
    },
    {
      city: "Utwe-Walung Marine Park (Kosrae)",
      title: "Utwe-Walung Marine Park (Kosrae)",
      description:
        "Uma reserva marinha espetacular, perfeita para caiaque e mergulho entre manguezais, corais e cardumes coloridos em águas cristalinas.",
      image:
        "https://sandee.com/_next/image?q=75&url=https%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMX57kLCoueFHNuJrVhwMqzVkW32Y_0J38_UC7I%3Ds1600-k-no&w=3840",
    },
    {
      city: "Ant Atoll (Pohnpei)",
      title: "Ant Atoll (Pohnpei)",
      description:
        "Um atol isolado e protegido pela UNESCO, com lagoas turquesa e vida marinha abundante — considerado um dos locais mais intocados do Pacífico.",
      image:
        "https://i.pinimg.com/736x/f3/eb/b9/f3ebb976d306a7c7e391e8aea7ce10eb.jpg",
    },
  ],
  Nauru: [
    {
      city: "Baía de Anibare",
      title: "Baía de Anibare",
      description:
        "Uma das áreas mais belas e tranquilas de Nauru, com praia de areia branca e mar azul-turquesa, perfeita para nadar, relaxar e apreciar o nascer do sol.",
      image:
        "https://unviajeepico.com/wp-content/uploads/2024/03/winston-chen-bjJU61GHALI-unsplash-1024x768.jpg",
    },
    {
      city: "Comand Ridge",
      title: "Comand Ridge",
      description:
        "O ponto mais alto da ilha, oferecendo vistas panorâmicas de Nauru. Também abriga bunkers e artefatos da Segunda Guerra Mundial, testemunhos do passado histórico do país.",
      image:
        "https://www.traveladventures.org/countries/nauru/images/command-ridge06.jpg",
    },
    {
      city: "Lago Buada",
      title: "Lago Buada",
      description:
        "Um lago interior cercado por vegetação tropical densa, localizado em uma antiga cratera de fosfato. Um oásis verde no coração da ilha.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/44/fc/d3/caption.jpg?w=1200&h=-1&s=1",
    },
    {
      city: "District of Aiwo",
      title: "District of Aiwo",
      description:
        "Centro industrial e portuário de Nauru, onde é possível ver de perto a história da mineração de fosfato e visitar áreas urbanas movimentadas da ilha.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Od%27n_Aiwo_Hotel_%2815223072800%29.jpg/1200px-Od%27n_Aiwo_Hotel_%2815223072800%29.jpg",
    },
  ],
  Kiribati: [
    {
      city: "Ilha de Tarawa (South Tarawa)",
      title: "Ilha de Tarawa (South Tarawa)",
      description:
        "Centro político e econômico de Kiribati, South Tarawa mistura vida local, história da Segunda Guerra Mundial e belas lagoas azul-turquesa. É o ponto de partida para explorar o país.",
      image:
        "https://i.pinimg.com/736x/16/d6/7c/16d67cccb2797215f039dca86b65d158.jpg",
    },
    {
      city: "Atol de Butaritari",
      title: "Atol de Butaritari",
      description:
        "Conhecido por sua vegetação exuberante, praias tranquilas e relevância histórica durante a Segunda Guerra Mundial. Ideal para relaxar e mergulhar na cultura local.",
      image:
        "https://i0.wp.com/rwayalkwn.com/app/uploads/2022/09/%D8%AC%D8%B2%D8%B1-%D9%83%D9%8A%D8%B1%D9%8A%D8%A8%D8%A7%D8%AA%D9%8A..jpg?fit=1110%2C484&ssl=1",
    },
    {
      city: "Atol de Kiritimati (Christmas Island)",
      title: "Atol de Kiritimati (Christmas Island)",
      description:
        "A maior ilha de coral do mundo e destino famoso para pesca esportiva, observação de aves e mergulho. Também é um dos primeiros lugares do planeta a ver o nascer do Ano Novo.",
      image:
        "https://i.pinimg.com/1200x/d3/24/b5/d324b547f530db347d1e607b984fd173.jpg",
    },
    {
      city: "Atol de Fanning (Tabuaeran)",
      title: "Atol de Fanning (Tabuaeran)",
      description:
        "Conhecido por suas águas cristalinas e recifes preservados, é um refúgio remoto e pacífico, perfeito para snorkeling e contato com a natureza pura.",
      image:
        "https://i.pinimg.com/736x/2f/2a/e9/2f2ae92b1ded7fc25b62348bb59d5079.jpg",
    },
  ],
  "Marshall Islands": [
    {
      city: "Majuro Atoll",
      title: "Majuro Atoll",
      description:
        "A capital das Ilhas Marshall e principal porta de entrada do país. Majuro combina praias paradisíacas, vida local vibrante e ótimos pontos para mergulho e pesca.",
      image:
        "https://i.pinimg.com/1200x/17/36/f0/1736f0ad83f5cc12c41e3f4cd30ed323.jpg",
    },
    {
      city: "Laura Beach (Majuro)",
      title: "Laura Beach (Majuro)",
      description:
        "A praia mais famosa de Majuro, conhecida por suas águas cristalinas, palmeiras e clima tranquilo — um refúgio popular entre moradores e visitantes.",
      image:
        "https://i.pinimg.com/1200x/74/d7/72/74d77207bdebb5dfcc54c13962dbcdbd.jpg",
    },
    {
      city: "Arno Atoll",
      title: "Arno Atoll",
      description:
        "Localizado próximo a Majuro, Arno é famoso por suas lagoas duplas e praias intocadas. Perfeito para mergulho, caiaque e imersão na vida insular tradicional.",
      image:
        "https://i.pinimg.com/1200x/80/32/18/803218944eb5d61215fb66fac8c63ce1.jpg",
    },
    {
      city: "Ailinglaplap Atoll",
      title: "Ailinglaplap Atoll",
      description:
        "Conhecido como o 'Coração das Marshall', o atol é famoso por sua beleza natural, tradições culturais e hospitalidade local.",
      image:
        "https://i0.wp.com/www.infomarshallislands.com/wp-content/uploads/2019/03/beran-aerial.jpg?resize=640%2C427&ssl=1",
    },
    {
      city: "Kwajalein Atoll",
      title: "Kwajalein Atoll",
      description:
        "Um dos maiores atóis do mundo, com história militar fascinante e lagoas de águas calmas ideais para esportes aquáticos e mergulho.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kwajalein%20Atoll%20Marshall%20Islands.jpg",
    },
  ],
  "New Caledonia": [
    {
      city: "Nouméa",
      title: "Nouméa",
      description:
        "A capital da Nova Caledônia é um ponto de fusão entre a cultura francesa e o charme do Pacífico. Possui belas praias como Anse Vata e Baie des Citrons, além de ótimos restaurantes e vida noturna vibrante.",
      image:
        "https://i.pinimg.com/736x/b6/0d/20/b60d20e35aceaff415fca3ca539d2784.jpg",
    },
    {
      city: "Ilha dos Pinheiros (Île des Pins)",
      title: "Ilha dos Pinheiros (Île des Pins)",
      description:
        "Conhecida como a 'joia do Pacífico', a Ilha dos Pinheiros encanta com praias de areia branca, águas turquesa e os emblemáticos pinheiros coloniais. A Baía de Kuto e a Baía de Kanuméra são imperdíveis.",
      image:
        "https://i.pinimg.com/736x/76/42/07/764207b4e5d56ac239fd03152bed671a.jpg",
    },
    {
      city: "Parque da Lagoa da Nova Caledônia",
      title: "Parque da Lagoa da Nova Caledônia",
      description:
        "Patrimônio Mundial da UNESCO, esta imensa lagoa abriga recifes de corais coloridos e rica biodiversidade marinha, sendo um paraíso para mergulho e snorkel.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/New%20Caledonia%20lagoon.jpg",
    },
    {
      city: "Grande Terre",
      title: "Grande Terre",
      description:
        "A ilha principal da Nova Caledônia oferece montanhas, florestas tropicais e paisagens áridas no norte. Ideal para trilhas, ecoturismo e imersão na cultura Kanak.",
      image:
        "https://cdn.britannica.com/23/147123-050-95C1E75F/Turtle-Bay-New-Caledonia.jpg",
    },
    {
      city: "Hienghène",
      title: "Hienghène",
      description:
        "Localizada na costa leste, Hienghène é famosa por suas formações rochosas de calcário negro, cachoeiras e vilas tradicionais Kanak. Um dos destinos mais fotogênicos do país.",
      image:
        "https://i.pinimg.com/1200x/45/b6/b5/45b6b5cb5731d19a3e6d0ddfc933f0fe.jpg",
    },
    {
      city: "Lifou (Ilhas Loyalty)",
      title: "Lifou (Ilhas Loyalty)",
      description:
        "A maior das Ilhas Loyalty, Lifou encanta com suas falésias, cavernas marinhas e vilarejos acolhedores. Um ótimo local para mergulhar entre recifes e jardins de coral.",
      image:
        "https://i.pinimg.com/736x/98/dd/9e/98dd9ee7221147dacb130e5edd51f333.jpg",
    },
    {
      city: "Ouvéa (Ilhas Loyalty)",
      title: "Ouvéa (Ilhas Loyalty)",
      description:
        "Muitas vezes chamada de 'ilha mais próxima do paraíso', Ouvéa tem uma das praias mais longas do Pacífico, com 25 km de areia branca e mar azul-turquesa cristalino.",
      image:
        "https://woody.cloudly.space/app/uploads/nouvelle-caledonie/2022/11/thumbs/Barefoot-Ouvea-%C2%A9-Dean-Cropp-Access-All-Angles-NCT3-1-1920x960-crop-1669158451.jpg",
    },
    {
      city: "Bourail",
      title: "Bourail",
      description:
        "Região popular entre surfistas e aventureiros, Bourail oferece praias como Poé Beach e a icônica formação natural de 'La Roche Percée', além de trilhas e esportes aquáticos.",
      image:
        "https://woody.cloudly.space/app/uploads/nouvelle-caledonie/2024/01/thumbs/Survol-du-Lagon-CAP-ULM-Bourail-2-1920x960-crop-1706131213.jpg",
    },
    {
      city: "Yaté e o Parque Provincial da Rivière Bleue",
      title: "Yaté e o Parque Provincial da Rivière Bleue",
      description:
        "Um paraíso ecológico com florestas densas, o famoso lago Yaté e trilhas que passam por pontes suspensas e árvores centenárias. Ideal para ecoturismo e fotografia.",
      image:
        "https://i.pinimg.com/1200x/32/b3/9a/32b39abad539a276d647c4832be6d8b5.jpg",
    },
  ],
  "French Polynesia": [
    {
      city: "Taiti (Papeete)",
      title: "Taiti (Papeete)",
      description:
        "A maior ilha da Polinésia Francesa e o coração cultural do arquipélago. Papeete oferece mercados vibrantes, gastronomia polinésia e paisagens montanhosas deslumbrantes, como o Monte Orohena.",
      image:
        "https://i.pinimg.com/1200x/e1/ed/50/e1ed50786349730d6e9e6bf7eeeb4ab8.jpg",
    },
    {
      city: "Bora Bora",
      title: "Bora Bora",
      description:
        "Conhecida como a 'pérola do Pacífico', Bora Bora é o destino mais famoso da Polinésia Francesa, com resorts sobre a água, lagoas azul-turquesa e o icônico Monte Otemanu ao fundo.",
      image:
        "https://i.pinimg.com/1200x/57/57/02/575702cbaedb61db904ca76c4361ab37.jpg",
    },
    {
      city: "Moorea",
      title: "Moorea",
      description:
        "A apenas 30 minutos de barco do Taiti, Moorea é um refúgio de natureza exuberante com picos verdes, baías profundas e praias perfeitas para mergulho e snorkeling.",
      image:
        "https://i.pinimg.com/736x/54/dc/e7/54dce7bc0b213e25066ea85b55973dcb.jpg",
    },
    {
      city: "Huahine",
      title: "Huahine",
      description:
        "Uma das ilhas mais autênticas da Polinésia Francesa, Huahine preserva tradições locais, ruínas arqueológicas e uma atmosfera tranquila cercada por uma lagoa cristalina.",
      image:
        "https://i.pinimg.com/1200x/0a/bb/f6/0abbf60f5a6d9ef16d38e5b55602a642.jpg",
    },
    {
      city: "Raiatea",
      title: "Raiatea",
      description:
        "Considerada o berço espiritual da Polinésia, abriga o sagrado Marae Taputapuatea, Patrimônio Mundial da UNESCO. Também é um excelente ponto para velejar e explorar ilhotas vizinhas.",
      image:
        "https://i.pinimg.com/1200x/ff/9c/6a/ff9c6a1f027b0a42412934a78bb89ac2.jpg",
    },
    {
      city: "Taha’a",
      title: "Taha’a",
      description:
        "Conhecida como a 'Ilha da Baunilha', Taha’a oferece plantações aromáticas, recifes de coral e pequenas ilhas desertas ideais para passeios de barco e mergulho.",
      image:
        "https://www.tahititourisme.com/app/uploads/iris-images/17278/vue-en-drone-de-taha-a-a-karl-shakur-1600x1400-f50_50.webp",
    },
    {
      city: "Rangiroa",
      title: "Rangiroa",
      description:
        "O segundo maior atol do mundo, Rangiroa é um paraíso para mergulhadores, com recifes repletos de vida marinha e águas tão transparentes que parecem irreais.",
      image:
        "https://i.pinimg.com/1200x/3c/ef/3a/3cef3a5a019d3c861edae49356e687e3.jpg",
    },
    {
      city: "Fakarava",
      title: "Fakarava",
      description:
        "Outro Patrimônio Mundial da UNESCO, Fakarava é um atol com um ecossistema preservado e uma das melhores experiências de mergulho do planeta, com tubarões, raias e corais coloridos.",
      image:
        "https://i.pinimg.com/1200x/30/cd/34/30cd34ae69f6fce1cbb6001c11b2da7b.jpg",
    },
    {
      city: "Tetiaroa",
      title: "Tetiaroa",
      description:
        "Antiga ilha particular do ator Marlon Brando, Tetiaroa é hoje um resort ecológico de luxo. Cercada por águas rasas e vida marinha abundante, é o epítome da exclusividade tropical.",
      image:
        "https://i.pinimg.com/1200x/7d/2a/bc/7d2abc514900a1ba8f5ab5eec9f7c22d.jpg",
    },
  ],
  Spain: [
    {
      city: "Barcelona",
      title: "Barcelona",
      description:
        "Cidade vibrante e artística, famosa pelas obras de Gaudí, como a Sagrada Família e o Parque Güell, além de praias e vida noturna intensa.",
      image:
        "https://i.pinimg.com/1200x/d2/2b/6a/d22b6ad766a357cd95efc317d4e9833a.jpg",
    },
    {
      city: "Madri",
      title: "Madri",
      description:
        "A capital espanhola combina elegância e cultura, com museus renomados como o Prado e o Reina Sofía, além de praças e palácios impressionantes.",
      image:
        "https://i.pinimg.com/1200x/17/3b/4c/173b4c95827d7394abec803afb27c4a9.jpg",
    },
    {
      city: "Sevilha",
      title: "Sevilha",
      description:
        "Coração da Andaluzia, Sevilha é sinônimo de flamenco, arquitetura mourisca e da icônica Catedral com a torre Giralda.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Seville%20Cathedral%20and%20Giralda.jpg",
    },
    {
      city: "Granada",
      title: "Granada",
      description:
        "Lar da magnífica Alhambra, Granada oferece vistas deslumbrantes da Sierra Nevada e um rico legado árabe.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Alhambra%20Granada%20Spain.jpg",
    },
    {
      city: "Valência",
      title: "Valência",
      description:
        "Cidade futurista à beira-mar, famosa pela Cidade das Artes e das Ciências, e pela autêntica paella valenciana.",
      image:
        "https://i.pinimg.com/1200x/b8/35/70/b83570228b50ecbe38571844ec25fb5f.jpg",
    },
    {
      city: "Bilbao",
      title: "Bilbao",
      description:
        "Símbolo da modernidade no País Basco, Bilbao é lar do icônico Museu Guggenheim e de uma cena gastronômica de alto nível.",
      image:
        "https://i.pinimg.com/1200x/b1/ad/85/b1ad851572db40b542400cc354a052ab.jpg",
    },
    {
      city: "Santiago de Compostela",
      title: "Santiago de Compostela",
      description:
        "Destino final do famoso Caminho de Santiago, a cidade é marcada por espiritualidade, história e uma imponente catedral.",
      image:
        "https://i.pinimg.com/1200x/a6/1d/08/a61d08e48c3e1b87c55f678a0217199e.jpg",
    },
    {
      city: "Toledo",
      title: "Toledo",
      description:
        "Antiga capital espanhola, Toledo é um labirinto medieval que mistura heranças cristãs, judaicas e islâmicas.",
      image:
        "https://i.pinimg.com/1200x/c9/e3/e1/c9e3e1390b4c020db5d8dc839bbcd02c.jpg",
    },
    {
      city: "Ilhas Baleares (Mallorca, Ibiza, Menorca)",
      title: "Ilhas Baleares (Mallorca, Ibiza, Menorca)",
      description:
        "Arquipélago paradisíaco no Mediterrâneo, com praias cristalinas, vida noturna animada e paisagens deslumbrantes.",
      image:
        "https://i.pinimg.com/1200x/e8/e7/b9/e8e7b9227cb2fe73978c5545fde0fd2b.jpg",
    },
  ],
  Argentina: [
    {
      city: "Buenos Aires",
      title: "Buenos Aires",
      description:
        "A capital da Argentina, famosa pela arquitetura europeia, tango, vida noturna vibrante e bairros icônicos como San Telmo e Recoleta.",
      image:
        "https://cdn2.paraty.es/parkroyal-corpo/images/29581ba3c89a845",
    },
    {
      city: "Bariloche",
      title: "Bariloche",
      description:
        "Localizada na Patagônia, é conhecida por suas montanhas, lagos cristalinos, esportes de inverno e pela produção de chocolates artesanais.",
      image:
        "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSikxuRPvJDkQP3sO0n-v9-2RPJ2WALGFqokbYt9Leaae_ipJ9SaGrgpVCNg8Im66DL5pGApj-OGfYBtZQT-Juh2kGviKeHrcZVVm3iBAA",
    },
    {
      city: "Mendoza",
      title: "Mendoza",
      description:
        "Região vinícola mais famosa da Argentina, com destaque para os vinhos Malbec e paisagens de vinhedos ao pé da Cordilheira dos Andes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mendoza%20Vineyard.jpg",
    },
    {
      city: "Ushuaia",
      title: "Ushuaia",
      description:
        "Conhecida como a cidade mais austral do mundo, é porta de entrada para a Antártida e famosa por paisagens geladas e passeios de barco.",
      image:
        "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQQWvChRqUSwGwF0VH4JFNq2xkKcG_cDzPr4KNM8Erh6vJmDEGOAZEcVgJC-oGeNalELR-JBRwjcHEGgIII-y6NniP18GniISfRyZ6FAQ",
    },
    {
      city: "El Calafate",
      title: "El Calafate",
      description:
        "Destino da Patagônia famoso pelo Parque Nacional Los Glaciares e o impressionante Glaciar Perito Moreno.",
      image:
        "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQP4VMkmmJ72bl8omypqimJJlplj9WrffdT_CiRD_ZhqG5BMseuP5eLuzAp6C-NNquWD7LId0AlVFVJwvxbNRdUbKUtuTY1zpDCJ6glSg",
    },
    {
      city: "Salta",
      title: "Salta",
      description:
        "Cidade colonial no noroeste argentino, famosa por igrejas hist��ricas, museus e paisagens montanhosas do Vale Calchaquí.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Salta%20Catedral.jpg",
    },
    {
      city: "Puerto Iguazú",
      title: "Puerto Iguazú",
      description:
        "Lar das Cataratas do Iguaçu, uma das Sete Maravilhas Naturais do Mundo, localizada na tríplice fronteira com Brasil e Paraguai.",
      image:
        "https://m.ahstatic.com/is/image/accorhotels/puerto-iguazu-como-ir-e-o-que-fazer-na-cidade-argentina-2024-1:16by9?fmt=webp&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.3&wid=1459&hei=820&qlt=80",
    },
    {
      city: "Mar del Plata",
      title: "Mar del Plata",
      description:
        "Principal cidade litorânea da Argentina, conhecida por suas praias, cassinos, festivais e vida noturna agitada.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mar%20del%20Plata%20beach.jpg",
    },
    {
      city: "Córdoba",
      title: "Córdoba",
      description:
        "Cidade histórica e universitária, com arquitetura colonial, serras próximas e rica vida cultural.",
      image:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSohukG6ZO3CqTc5lr_hHn_i0K-MVS69QAq1e00TcZhSTh8fGTrvAabVahGX2oShwZHx-p5ip7r26poxQi-LSjFGvXVCbjBsx6Fy5lkSA",
    },
  ],
  Chile: [
    {
      city: "Santiago",
      title: "Santiago",
      description:
        "A capital do Chile, localizada entre a Cordilheira dos Andes e o Oceano Pacífico, famosa por sua vida cultural, vinícolas próximas e centros de esqui.",
      image:
        "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npRjLqL5LMehwNjaN6eP1P80xkFYSSJXigb4rtFRhWY3gKW1aDD-l6S57kDehK4i_KSOxcX0BsTXLlESeOShaMKGedqv_hc3AZOQDrqd7zL8Ahy1tMJ-vf7V0b2EEgYvDLimbU=w675-h390-n-k-no",
    },
    {
      city: "Valparaíso",
      title: "Valparaíso",
      description:
        "Cidade portuária com morros coloridos, arte de rua vibrante e um importante patrimônio histórico e cultural.",
      image:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT7ynTp396YYcalURC7sl375v3B7WJc9Y1voJi9K7c_HpAgOKkhp0zkr3Wdjyje8n6C11D-mZZvokrjWpNhjIH4p-q_lWvONKxBjp072g",
    },
    {
      city: "Viña del Mar",
      title: "Viña del Mar",
      description:
        "Destino litorâneo elegante conhecido como 'Cidade Jardim', com praias, cassinos e o famoso Festival Internacional da Canção.",
      image:
        "https://turistik.com/wp-content/uploads/2023/06/tourvalpayvina-gal-gen-7.webp",
    },
    {
      city: "Atacama (San Pedro de Atacama)",
      title: "Atacama (San Pedro de Atacama)",
      description:
        "Um dos desertos mais áridos do mundo, famoso por paisagens lunares, salares, gêiseres e observação astronômica.",
      image:
        "https://www.brasildemochila.com/images/blog/san-pedro-de-atacama.jpg",
    },
    {
      city: "Ilha de Páscoa (Rapa Nui)",
      title: "Ilha de Páscoa (Rapa Nui)",
      description:
        "Uma das ilhas mais isoladas do mundo, famosa pelos misteriosos moais e pela cultura polinésia única.",
      image:
        "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQRoEBSTFbIOaC1aiPDCxPRaI_IM9w9--hZ-Cwd5qoh_HBVZ3mXFB7REFqS2wuWGQYGAKd2gwzl2FrYKuQ6lO7g-DRkz0T4fzPKleewPw",
    },
    {
      city: "Puerto Varas",
      title: "Puerto Varas",
      description:
        "Cidade charmosa às margens do Lago Llanquihue, com vista para vulcões nevados e influência cultural alemã.",
      image:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTbIau_Ayao8L_iXJYD4VvE998zhG35l6XqZiRXiOag027YhsELWxP1DBMfxC74wefm4xc2TXU_v_U8ETIf0VQUjk8DZwrL9xJQIiDW-A",
    },
    {
      city: "Torres del Paine",
      title: "Torres del Paine",
      description:
        "Parque nacional na Patag��nia chilena, conhecido por montanhas imponentes, lagos azul-turquesa e trilhas icônicas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Torres%20del%20Paine%20National%20Park.jpg",
    },
    {
      city: "La Serena",
      title: "La Serena",
      description:
        "Cidade litorânea histórica com belas praias, observatórios astronômicos e arquitetura colonial.",
      image:
        "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTLUNRn_p8Zh2BI109eGpDbAGuJz5U10Sl0QjUeL7lw2CZoWJIodM7K44dXes1ml2Vkq01q4cc7gCy9LUanNcs0U38MwAku0votEdJ2fQ",
    },
    {
      city: "Chiloé",
      title: "Chiloé",
      description:
        "Arquipélago com tradições únicas, casas coloridas sobre palafitas e igrejas de madeira consideradas Patrimônio Mundial da UNESCO.",
      image:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT1DQZmEaQfNOvkauGrHH4xn22a6gNdN55X19ygBroG3nl2Wn-chFbr4H2pEtX6aCLL3umA4oDDPXZ1CefbniscmuaptuhyBJOt-lEujA",
    },
  ],
  Bolivia: [
    {
      city: "La Paz",
      title: "La Paz",
      description:
        "A capital administrativa da Bolívia, localizada a mais de 3.600 metros de altitude, famosa pelo teleférico urbano e pelo Vale da Lua.",
      image:
        "https://content.r9cdn.net/rimg/dimg/bc/c4/40691bb8-city-13346-16d3f0364a4.jpg?width=1366&height=768&xhint=2771&yhint=1944&crop=true",
    },
    {
      city: "Sucre",
      title: "Sucre",
      description:
        "Capital constitucional da Bolívia, conhecida por sua arquitetura colonial bem preservada e charme histórico.",
      image:
        "https://luporai.com.br/wp-content/uploads/2022/07/20220526_152113-2-1024x577.jpg",
    },
    {
      city: "Santa Cruz de la Sierra",
      title: "Santa Cruz de la Sierra",
      description:
        "Principal centro econômico da Bolívia, com vida noturna vibrante e uma mistura de modernidade e tradição.",
      image:
        "https://i0.wp.com/guialugaresturisticos.com/wp-content/uploads/2020/04/Guembe-piscina2.jpg?w=800&ssl=1",
    },
    {
      city: "Uyuni",
      title: "Uyuni",
      description:
        "Famosa pelo Salar de Uyuni, o maior deserto de sal do mundo, que cria reflexos espetaculares na estação chuvosa.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Salar%20de%20Uyuni%20Bolivia.jpg",
    },
    {
      city: "Copacabana",
      title: "Copacabana",
      description:
        "Às margens do Lago Titicaca, é famosa pelo Santuário de Nossa Senhora de Copacabana e pela Isla del Sol.",
      image:
        "https://perderelrumbo.com/wp-content/uploads/2023/08/Copacabana-Bolivia-un-tesoro-a-orillas-del-titicaca_-768x512.jpg",
    },
    {
      city: "Cochabamba",
      title: "Cochabamba",
      description:
        "Cidade no centro da Bolívia, conhecida pelo Cristo de la Concordia e clima agradável.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/116156333.jpg?k=05c8ec05c7e107da2d90bc1bcef7f59b45862fa32d2558e79df25e1259ad996c&o=",
    },
    {
      city: "Tarija",
      title: "Tarija",
      description:
        "Região vinícola da Bolívia, famosa por seus vinhos e clima tranquilo nas montanhas.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/34863342.jpg?k=00712d97207ec1c484d409d153a28bd4df63c90dc611ea5f11e581a68907ce6f&o=&hp=1",
    },
    {
      city: "Oruro",
      title: "Oruro",
      description:
        "Cidade conhecida pelo Carnaval de Oruro, declarado Patrimônio Imaterial da Humanidade pela UNESCO.",
      image:
        "https://images.myguide-cdn.com/content/1/large/oruro-1425685.jpeg",
    },
  ],
  Ecuador: [
    {
      city: "Quito",
      title: "Quito",
      description:
        "A capital do Equador, localizada a 2.850 metros de altitude, famosa pelo centro histórico colonial, Patrimônio da UNESCO.",
      image:
        "https://i.pinimg.com/736x/df/0c/f4/df0cf452d068ec38cce3f6a26cb3721a.jpg",
    },
    {
      city: "Guayaquil",
      title: "Guayaquil",
      description:
        "Principal porto do país, com o Malecón 2000, vida noturna animada e acesso às Ilhas Galápagos.",
      image:
        "https://i.pinimg.com/1200x/b9/40/35/b94035f2dad4095b536add9ea5b2d97c.jpg",
    },
    {
      city: "Cuenca",
      title: "Cuenca",
      description:
        "Cidade colonial famosa por sua arquitetura, igrejas históricas e tradição dos chapéus Panamá.",
      image:
        "https://i.pinimg.com/1200x/f1/57/55/f15755a44e17043080972afb2af66009.jpg",
    },
    {
      city: "Galápagos",
      title: "Galápagos",
      description:
        "Arquipélago único, Patrimônio Natural da Humanidade, famoso por sua biodiversidade e estudos de Darwin.",
      image:
        "https://i.pinimg.com/736x/eb/c4/7f/ebc47f624a34134ff1ba359ebfb0a2fd.jpg",
    },
    {
      city: "Baños de Agua Santa",
      title: "Baños de Agua Santa",
      description:
        "Cidade turística famosa por cachoeiras, esportes de aventura e termas vulcânicas.",
      image:
        "https://i.pinimg.com/1200x/89/af/1a/89af1a76bb2979cea85d52e0b1d1b105.jpg",
    },
    {
      city: "Otavalo",
      title: "Otavalo",
      description:
        "Cidade conhecida pelo mercado indígena e tradições culturais andinas.",
      image:
        "https://i.pinimg.com/736x/4e/ba/7d/4eba7d94c2f88600cb69089527138fe8.jpg",
    },
    {
      city: "Montañita",
      title: "Montañita",
      description:
        "Praia famosa por surf, vida noturna e atmosfera jovem e descontraída.",
      image:
        "https://i.pinimg.com/1200x/85/0b/e4/850be40d44a3314f6a8dd6e3b8ea563e.jpg",
    },
    {
      city: "Loja",
      title: "Loja",
      description:
        "Cidade cultural conhecida por música, tradições artísticas e proximidade com a natureza.",
      image:
        "https://i.pinimg.com/736x/64/07/f2/6407f26d85d3c104a8595d297672f649.jpg",
    },
  ],
  Venezuela: [
    {
      city: "Caracas",
      title: "Caracas",
      description:
        "A capital da Venezuela, cercada pelo Parque Nacional El Ávila e rica em museus e vida urbana.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Caracas%20Venezuela.jpg",
    },
    {
      city: "Margarita",
      title: "Margarita",
      description:
        "Ilha caribenha famosa por praias paradisíacas, resorts e clima ensolarado.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Margarita%20Island%20Venezuela.jpg",
    },
    {
      city: "Los Roques",
      title: "Los Roques",
      description:
        "Arquipélago no Caribe, famoso por águas cristalinas, mergulho e vida marinha.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Los%20Roques%20Venezuela.jpg",
    },
    {
      city: "Mérida",
      title: "Mérida",
      description:
        "Cidade andina conhecida pelo teleférico mais alto e longo do mundo e paisagens montanhosas.",
      image:
        "https://i.pinimg.com/736x/cf/14/7b/cf147b28f2464c6461cfa880256cdb32.jpg",
    },
    {
      city: "Canaima",
      title: "Canaima",
      description:
        "Parque Nacional Canaima, famoso pelo Salto Ángel, a maior queda d’água do mundo.",
      image:
        "https://i.pinimg.com/1200x/27/25/62/272562814b8bad7ec0dc3b46897c204f.jpg",
    },
    {
      city: "Maracaibo",
      title: "Maracaibo",
      description:
        "Importante cidade venezuelana, conhecida pelo Lago de Maracaibo e o fenômeno natural Relâmpago do Catatumbo.",
      image:
        "https://i.pinimg.com/736x/c0/74/ef/c074efe69f9d4b185b15946048cc0a18.jpg",
    },
    {
      city: "Coro",
      title: "Coro",
      description:
        "Cidade colonial, Patrimônio Mundial da UNESCO, famosa por suas ruas históricas e casas coloridas.",
      image:
        "https://i.pinimg.com/1200x/8e/b2/5b/8eb25b7b9eae9d84288969ebb35c2e9b.jpg",
    },
    {
      city: "Puerto La Cruz",
      title: "Puerto La Cruz",
      description:
        "Cidade costeira com belas praias e porta de entrada para as Ilhas do Caribe venezuelano.",
      image:
        "https://i.pinimg.com/736x/02/a4/0d/02a40d12c4e0cebc1788c56d71e05edf.jpg",
    },
    {
      city: "Choroní",
      title: "Choroní",
      description:
        "Vila costeira charmosa no Caribe, cercada por montanhas e praias tropicais.",
      image:
        "https://i.pinimg.com/736x/5d/94/54/5d94544aa0f2b1119c56313edaadd522.jpg",
    },
  ],
  Peru: [
    {
      city: "Machu Picchu",
      title: "Machu Picchu",
      description:
        "A cidade perdida dos incas, Patrimônio Mundial da UNESCO e uma das Sete Maravilhas do Mundo Moderno.",
      image:
        "https://p2.trrsf.com/image/fget/cf/1548/0/images.terra.com/2022/12/26/142392359-shutterstock168497345.jpg",
    },
    {
      city: "Cusco",
      title: "Cusco",
      description:
        "Antiga capital do Império Inca, famosa por sua arquitetura colonial e ruínas próximas ao Vale Sagrado.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Plaza%20de%20Armas%20Cusco.jpg",
    },
    {
      city: "Lima",
      title: "Lima",
      description:
        "A capital do Peru, à beira do Pacífico, conhecida por sua gastronomia premiada e centro histórico colonial.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Lima%20Plaza%20Mayor.jpg",
    },
    {
      city: "Arequipa",
      title: "Arequipa",
      description:
        "A 'Cidade Branca', cercada por vulcões, com o impressionante Mosteiro de Santa Catalina e o Cânion do Colca.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Arequipa%20Peru.jpg",
    },
    {
      city: "Lago Titicaca (Puno)",
      title: "Lago Titicaca (Puno)",
      description:
        "O lago navegável mais alto do mundo, famoso pelas ilhas flutuantes dos Uros e tradições ancestrais.",
      image:
        "https://www.salkantaytrilha.com/blog/wp-content/uploads/2024/09/Puno-seus-misterios-e-as-ilhas-do-Titicaca.jpg",
    },
    {
      city: "Iquitos",
      title: "Iquitos",
      description:
        "Porta de entrada para a Amazônia peruana, acessível apenas por avião ou barco, com rica biodiversidade.",
      image:
        "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTeA8zQ12aiEFthOOe7SwAOVgeFPA7AVUFpg1DTDocJIgLwAhnN_d9GHUMJiY37FSmYsiqWoK_6SX5WY0dGAskz5LpgNqsWmCV2jVWdaA",
    },
    {
      city: "Paracas",
      title: "Paracas",
      description:
        "Famosa pela Reserva Nacional de Paracas e pelas Ilhas Ballestas, chamadas de 'Galápagos do Peru'.",
      image:
        "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSQgwuHKONqoRH_WFPiet6w1bthxwpiBIQvM3Le-uHsKpkrvNjqSFUZ51wJsgcweW1F1goK5Lk8XJW7Xa0Qs6r4KYpb2oqfHLgWiDJSHQ",
    },
    {
      city: "Huaraz",
      title: "Huaraz",
      description:
        "Cidade andina cercada pela Cordilheira Branca, ideal para trekking e aventuras em alta montanha.",
      image:
        "https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner/public/live_banner/Huaraz.jpg",
    },
  ],
  Colombia: [
    {
      city: "Cartagena das Índias",
      title: "Cartagena das Índias",
      description:
        "Cidade colonial murada à beira do Caribe, famosa por suas cores vibrantes, arquitetura histórica e praias próximas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cartagena%20de%20Indias%20Colombia.jpg",
    },
    {
      city: "Bogotá",
      title: "Bogotá",
      description:
        "A capital da Colômbia, localizada a 2.600 metros de altitude, com o famoso Museu do Ouro e o bairro histórico La Candelaria.",
      image:
        "https://media.istockphoto.com/id/1453256961/pt/foto/aerial-view-of-modern-bogota-cityscape-in-colombia-in-the-afternoon.jpg?s=612x612&w=0&k=20&c=NTKna8CCPrIAbJPdw0UKBHc8vmW_318ZRlZJkMwNsyI=",
    },
    {
      city: "Medellín",
      title: "Medellín",
      description:
        "Conhecida como a 'Cidade da Eterna Primavera', é moderna, inovadora e cercada por montanhas.",
      image:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/ff/86/68.jpg",
    },
    {
      city: "San Andrés",
      title: "San Andrés",
      description:
        "Ilha paradisíaca no Caribe colombiano, famosa pelo mar de sete cores e mergulhos incríveis.",
      image:
        "https://dicasdacolombia.com.br/wp-content/uploads/sites/22/2018/07/san-andres-colombia-passeios-jpg.webp",
    },
    {
      city: "Santa Marta",
      title: "Santa Marta",
      description:
        "Cidade litorânea histórica, porta de entrada para o Parque Tayrona e a Sierra Nevada de Santa Marta.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Santa%20Marta%20Colombia.jpg",
    },
    {
      city: "Parque Tayrona",
      title: "Parque Tayrona",
      description:
        "Parque nacional com praias selvagens, florestas tropicais e rica biodiversidade.",
      image:
        "https://www.descubraturismo.com.br/wp-content/uploads/2019/08/tudo-sobre-o-parque-tayrona-foto.jpg",
    },
    {
      city: "Cali",
      title: "Cali",
      description:
        "Capital mundial da salsa, famosa por sua vida noturna, festivais de dança e cultura afro-colombiana.",
      image:
        "https://i0.wp.com/passporterapp.com/pt/blog/wp-content/uploads/2024/08/O-que-fazer-em-Cali.jpg?resize=1140%2C708&ssl=1",
    },
    {
      city: "Villa de Leyva",
      title: "Villa de Leyva",
      description:
        "Cidade colonial preservada com ruas de pedra e uma das maiores praças da América Latina.",
      image:
        "https://mediaim.expedia.com/destination/1/aea1a89ec1f2cf2742d6b30fc85eb88b.jpg",
    },
    {
      city: "Guatapé",
      title: "Guatapé",
      description:
        "Vila colorida famosa pelo monólito El Peñol, que oferece uma das vistas mais impressionantes do país.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/8e/0a/63/colombia-and-experience.jpg?w=900&h=500&s=1",
    },
  ],
  Uruguay: [
    {
      city: "Montevidéu",
      title: "Montevidéu",
      description:
        "A capital do Uruguai, famosa pela Rambla à beira-mar, Cidade Velha e forte influência cultural.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Montevideo%20Panorama.jpg",
    },
    {
      city: "Punta del Este",
      title: "Punta del Este",
      description:
        "O balneário mais famoso do país, conhecido por suas praias badaladas, cassinos e vida noturna vibrante.",
      image:
        "https://melhoresmomentosdavida.com/wp-content/uploads/2022/07/onde-ficar-em-punta-del-este-3.jpg",
    },
    {
      city: "Colônia do Sacramento",
      title: "Colônia do Sacramento",
      description:
        "Cidade histórica com ruas de pedra e arquitetura colonial portuguesa, Patrimônio da UNESCO.",
      image:
        "https://www.civitatis.com/f/uruguay/colonia-del-sacramento/colonia-del-sacramento.jpg",
    },
    {
      city: "Cabo Polônio",
      title: "Cabo Polônio",
      description:
        "Vilarejo isolado sem energia elétrica convencional, famoso por dunas, leões marinhos e farol icônico.",
      image:
        "https://cdn-clubecandeias.s3.sa-east-1.amazonaws.com/uploads/featured_images/imagem_destaque_7109.jpeg",
    },
    {
      city: "Piriápolis",
      title: "Piriápolis",
      description:
        "Balneário com praias tranquilas, morros e um clima mais familiar que Punta del Este.",
      image:
        "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/177000/177108-Piriapolis.jpg",
    },
    {
      city: "La Paloma",
      title: "La Paloma",
      description:
        "Destino de surfistas e amantes da natureza, com praias extensas e atmosfera descontraída.",
      image:
        "https://buquebus.com/media/la_paloma-06.jpg",
    },
    {
      city: "José Ignacio",
      title: "José Ignacio",
      description:
        "Vilarejo sofisticado que virou point de luxo, famoso por pousadas elegantes e gastronomia refinada.",
      image:
        "https://simonde.com.br/wp-content/uploads/2018/07/vik-hoteis-retreats-playa-vik-jose-ignacio-uruguai-onde-ficar-dicas-uruguay-1200-3-1024x683.jpg.webp",
    },
    {
      city: "Salto",
      title: "Salto",
      description:
        "Cidade termal com águas quentes relaxantes e um dos principais destinos de turismo de bem-estar do país.",
      image:
        "https://www.oviajante.com/wp-content/uploads/2016/08/DSC_6197-Salto-Acuamania-e1471626512561.jpg",
    },
  ],
  Paraguay: [
    {
      city: "Assunção",
      title: "Assunção",
      description:
        "A capital do Paraguai, localizada às margens do Rio Paraguai, com arquitetura colonial, praças e vida cultural vibrante.",
      image:
        "https://media.gazetadopovo.com.br/2022/12/02123544/shutterstock_1223606968.png",
    },
    {
      city: "Ciudad del Este",
      title: "Ciudad del Este",
      description:
        "Cidade de fronteira com o Brasil, conhecida pelo comércio intenso e pela proximidade com as Cataratas do Iguaçu.",
      image:
        "https://media.gazetadopovo.com.br/2022/12/15113105/Shutterstock_1979868044-1280x720.jpg",
    },
    {
      city: "Encarnación",
      title: "Encarnación",
      description:
        "Famosa por suas praias às margens do Rio Paraná e pelo Carnaval, considerado o melhor do país.",
      image:
        "https://content.r9cdn.net/rimg/dimg/70/74/1ec65d41-city-43094-1694ed912ce.jpg?crop=true&width=1366&height=768&xhint=1350&yhint=977",
    },
    {
      city: "Saltos del Monday",
      title: "Saltos del Monday",
      description:
        "Impressionantes quedas d’água com mais de 40 metros de altura, localizadas próximas a Ciudad del Este.",
      image:
        "https://lp-cms-production.imgix.net/2019-06/e92149cf3a85ad5e88c45a6b83f51b21-parque-nacional-iguazu.jpg?fit=crop&ar=1%3A1&w=1200&auto=format&q=75",
    },
    {
      city: "Trinidad",
      title: "Trinidad",
      description:
        "Ruínas jesuíticas de Santísima Trinidad del Paraná, Patrimônio Mundial da UNESCO, testemunho da história colonial.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/db/7f/5d/piscina.jpg?w=1000&h=600&s=1",
    },
    {
      city: "Areguá",
      title: "Areguá",
      description:
        "Charmosa cidade colonial às margens do Lago Ypacaraí, famosa por seu artesanato em cerâmica e festival de morangos.",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipMMYQIru-4q3BFqtPhbKvPrsQdw8lz6x8YIM1_S=w397-h298-k-no",
    },
    {
      city: "Ybycuí",
      title: "Ybycuí",
      description:
        "Parque Nacional Ybycuí, com florestas subtropicais, trilhas e cachoeiras, ideal para ecoturismo.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/37/0d/93/alta-gracia-parque-hotel.jpg?w=600&h=400&s=1",
    },
  ],
  Guiana: [
    {
      city: "Georgetown",
      title: "Georgetown",
      description:
        "A capital da Guiana, famosa por sua arquitetura colonial de madeira e o Mercado de Stabroek.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Georgetown%20Guyana%20Stabroek%20Market.jpg",
    },
    {
      city: "Cataratas Kaieteur",
      title: "Cataratas Kaieteur",
      description:
        "Uma das maiores quedas d’água de queda única do mundo, localizada no coração da floresta amazônica.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kaieteur%20Falls%20Guyana.jpg",
    },
    {
      city: "Parque Nacional Iwokrama",
      title: "Parque Nacional Iwokrama",
      description:
        "Área protegida de floresta tropical, famosa por biodiversidade e experiências de ecoturismo.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Iwokrama%20Rainforest%20Guyana.jpg",
    },
    {
      city: "Lethem",
      title: "Lethem",
      description:
        "Cidade na fronteira com o Brasil, ponto de acesso ao interior guianense e rotas culturais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Lethem%20Guyana.jpg",
    },
    {
      city: "Shell Beach",
      title: "Shell Beach",
      description: "Praia remota famosa pela desova de tartarugas marinhas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Shell%20Beach%20Guyana.jpg",
    },
  ],
  "Guiana Francesa": [
    {
      city: "Cayenne",
      title: "Cayenne",
      description:
        "Capital da Guiana Francesa, conhecida por mercados coloridos e influência cultural francesa.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cayenne%20French%20Guiana.jpg",
    },
    {
      city: "Ilhas do Salut",
      title: "Ilhas do Salut",
      description: "Arquipélago famoso pela antiga prisão de Ilha do Diabo.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Devil%27s%20Island%20French%20Guiana.jpg",
    },
    {
      city: "Kourou",
      title: "Kourou",
      description:
        "Cidade que abriga o Centro Espacial da Guiana, base de lançamentos da ESA.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kourou%20Space%20Center.jpg",
    },
    {
      city: "Parque Amazônico da Guiana",
      title: "Parque Amazônico da Guiana",
      description:
        "Área protegida de floresta amazônica com rica biodiversidade.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Parc%20Amazonien%20French%20Guiana.jpg",
    },
    {
      city: "Saint-Laurent-du-Maroni",
      title: "Saint-Laurent-du-Maroni",
      description:
        "Cidade histórica com museu do antigo presídio e acesso ao Rio Maroni.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Saint-Laurent-du-Maroni%20French%20Guiana.jpg",
    },
  ],
  "Ilhas Malvinas": [
    {
      city: "Stanley",
      title: "Stanley",
      description:
        "A capital das Ilhas Malvinas, com museus sobre a Guerra das Malvinas e arquitetura britânica.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Stanley%20Falkland%20Islands.jpg",
    },
    {
      city: "Volunteer Point",
      title: "Volunteer Point",
      description: "Praia famosa por col��nias de pinguins-rei.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Volunteer%20Point%20Falklands.jpg",
    },
    {
      city: "West Falkland",
      title: "West Falkland",
      description:
        "Ilha com paisagens selvagens e avistamento de fauna marinha.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/West%20Falkland%20Islands.jpg",
    },
    {
      city: "Sea Lion Island",
      title: "Sea Lion Island",
      description: "Reserva natural com leões marinhos e aves marinhas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sea%20Lion%20Island%20Falklands.jpg",
    },
    {
      city: "Pebble Island",
      title: "Pebble Island",
      description: "Conhecida por praias longas e avifauna abundante.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pebble%20Island%20Falklands.jpg",
    },
  ],
  "Ilha de Páscoa": [
    {
      city: "Ahu Tongariki",
      title: "Ahu Tongariki",
      description:
        "O maior conjunto de moais da ilha, com 15 estátuas alinhadas frente ao mar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ahu%20Tongariki%20Easter%20Island.jpg",
    },
    {
      city: "Rano Raraku",
      title: "Rano Raraku",
      description:
        "Pedreira onde os moais eram esculpidos, com dezenas de estátuas inacabadas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Rano%20Raraku%20Easter%20Island.jpg",
    },
    {
      city: "Orongo",
      title: "Orongo",
      description:
        "Vila cerimonial ligada ao culto do Homem-Pássaro, com vistas espetaculares.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Orongo%20Easter%20Island.jpg",
    },
    {
      city: "Anakena",
      title: "Anakena",
      description: "Praia paradisíaca com moais restaurados e palmeiras.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Anakena%20Beach%20Easter%20Island.jpg",
    },
    {
      city: "Rano Kau",
      title: "Rano Kau",
      description: "Vulcão com lagoa no interior e miradouros impressionantes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Rano%20Kau%20Easter%20Island.jpg",
    },
  ],
  Galápagos: [
    {
      city: "Ilha Santa Cruz",
      title: "Ilha Santa Cruz",
      description:
        "Lar da Estação Científica Charles Darwin e tartarugas gigantes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Santa%20Cruz%20Island%20Galapagos.jpg",
    },
    {
      city: "Ilha Isabela",
      title: "Ilha Isabela",
      description:
        "A maior ilha do arquipélago, famosa por vulcões e diversidade de fauna.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Isabela%20Island%20Galapagos.jpg",
    },
    {
      city: "Ilha San Cristóbal",
      title: "Ilha San Cristóbal",
      description:
        "Ponto de entrada do arquipélago, com leões-marinhos e praias paradisíacas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/San%20Cristobal%20Galapagos.jpg",
    },
    {
      city: "Ilha Española",
      title: "Ilha Española",
      description:
        "Conhecida pela colônia de albatrozes e praias de areia branca.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Espanola%20Island%20Galapagos.jpg",
    },
    {
      city: "Ilha Floreana",
      title: "Ilha Floreana",
      description:
        "Histórica e repleta de vida marinha, popular para mergulho.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Floreana%20Island%20Galapagos.jpg",
    },
  ],
  Aruba: [
    {
      city: "Eagle Beach",
      title: "Eagle Beach",
      description:
        "Uma das praias mais famosas do Caribe, conhecida por sua areia branca e as icônicas árvores Divi-Divi.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Eagle%20Beach%20Aruba.jpg",
    },
    {
      city: "Palm Beach",
      title: "Palm Beach",
      description:
        "Praia movimentada com resorts de luxo, cassinos, vida noturna e esportes aquáticos.",
      image:
        "https://i.pinimg.com/1200x/0b/5f/d4/0b5fd4e97710a5773922b3e1a70f4c77.jpg",
    },
    {
      city: "Oranjestad",
      title: "Oranjestad",
      description:
        "A capital colorida de Aruba, com arquitetura colonial holandesa, lojas e vida cultural.",
      image:
        "https://i.pinimg.com/736x/3d/6c/51/3d6c5185efbf2e024d3623748adab14b.jpg",
    },
    {
      city: "Baby Beach",
      title: "Baby Beach",
      description:
        "Praia de águas rasas e cristalinas, ideal para famílias e snorkeling.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Baby%20Beach%20Aruba.jpg",
    },
    {
      city: "California Lighthouse",
      title: "California Lighthouse",
      description:
        "Farol histórico que oferece vistas panorâmicas da costa norte da ilha.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/California%20Lighthouse%20Aruba.jpg",
    },
    {
      city: "Alto Vista Chapel",
      title: "Alto Vista Chapel",
      description:
        "Capela histórica de Aruba, localizada em uma colina com vista para o mar.",
      image:
        "https://i.pinimg.com/1200x/b0/92/b1/b092b1969cc886d859a2c5f46054971a.jpg",
    },
    {
      city: "Natural Pool (Conchi)",
      title: "Natural Pool (Conchi)",
      description:
        "Piscina natural escondida entre rochas vulcânicas no Parque Arikok, acessível por trilha ou 4x4.",
      image:
        "https://i.pinimg.com/1200x/af/ef/34/afef34006c792514aa0e05e2d7ccf76d.jpg",
    },
    {
      city: "Bushiribana Gold Mill Ruins",
      title: "Bushiribana Gold Mill Ruins",
      description:
        "Ruínas de uma antiga mina de ouro do século XIX, um dos marcos históricos da ilha.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Bushiribana%20Gold%20Mill%20Ruins%20Aruba.jpg",
    },
  ],
  Bermuda: [
    {
      city: "Hamilton",
      title: "Hamilton",
      description:
        "A capital vibrante das Bermudas, conhecida por suas ruas coloridas, lojas, restaurantes e o porto movimentado.",
      image:
        "https://i.pinimg.com/736x/6c/15/93/6c1593067b9b5015f8d054f762290633.jpg",
    },
    {
      city: "St. George's",
      title: "St. George's",
      description:
        "Cidade histórica e Patrimônio Mundial da UNESCO, famosa por suas ruas coloniais e a St. Peter’s Church.",
      image:
        "https://i.pinimg.com/736x/4f/7b/ce/4f7bce0c0b127f373c6f8fc0ab05ac20.jpg",
    },
    {
      city: "Horseshoe Bay Beach",
      title: "Horseshoe Bay Beach",
      description:
        "Uma das praias mais famosas das Bermudas, com areias rosadas e mar azul-turquesa.",
      image:
        "https://i.pinimg.com/1200x/5a/c7/9f/5ac79f275736b97b7547bd8738c2ac8c.jpg",
    },
    {
      city: "Royal Naval Dockyard",
      title: "Royal Naval Dockyard",
      description:
        "Antiga base naval britânica transformada em complexo turístico com museus, lojas e atrações culturais.",
      image:
        "https://i.pinimg.com/1200x/cb/19/de/cb19de7ce1d1673c3582d9744cf64f89.jpg",
    },
    {
      city: "Crystal and Fantasy Caves",
      title: "Crystal and Fantasy Caves",
      description:
        "Cavernas com estalactites e lagos subterrâneos cristalinos, um dos pontos naturais mais visitados.",
      image:
        "https://i.pinimg.com/1200x/ec/07/9d/ec079d93971631752a7a5843d9951613.jpg",
    },
    {
      city: "Elbow Beach",
      title: "Elbow Beach",
      description:
        "Praia famosa por sua beleza natural e resorts de luxo, ideal para mergulho com snorkel.",
      image:
        "https://i.pinimg.com/736x/cc/bc/4c/ccbc4ce10dbbab1df2587ef7de057757.jpg",
    },
    {
      city: "Botanical Gardens",
      title: "Botanical Gardens",
      description:
        "Jardins botânicos em Paget Parish, com flora tropical, esculturas e estufas.",
      image:
        "https://i.pinimg.com/736x/18/e3/5c/18e35c5db1054dc444e2a05b537a4541.jpg",
    },
    {
      city: "Fort St. Catherine",
      title: "Fort St. Catherine",
      description:
        "Forte hist��rico do século XVII, com museu e vista para praias cristalinas.",
      image:
        "https://i.pinimg.com/1200x/96/af/48/96af48a387ea7b0c36ce51a6ee55c2c8.jpg",
    },
  ],
  Greenland: [
    {
      city: "Nuuk",
      title: "Nuuk",
      description:
        "A capital da Groenlândia, mistura modernidade com tradição inuíte e possui museus, arquitetura colorida e vistas para fiordes.",
      image:
        "https://guidetogreenland.com/wp-content/uploads/2020/04/Downtown-nuuk-at-dusk-with-store-malene-in-the-background-Guide-to-Greenland-scaled.jpg",
    },
    {
      city: "Ilulissat",
      title: "Ilulissat",
      description:
        "Famosa pelo Ilulissat Icefjord, Patrimônio Mundial da UNESCO, com enormes icebergs flutuantes.",
      image:
        "https://i.pinimg.com/1200x/5b/a1/2f/5ba12fd6b22e864cb281716453025ca8.jpg",
    },
    {
      city: "Kangerlussuaq",
      title: "Kangerlussuaq",
      description:
        "Ponto de acesso à calota de gelo da Groenlândia, ideal para trilhas e passeios sobre geleiras.",
      image:
        "https://i.pinimg.com/1200x/c8/9a/c5/c89ac5c7d4a0281e5a205f01a1cf31de.jpg",
    },
    {
      city: "Qaqortoq",
      title: "Qaqortoq",
      description:
        "A maior cidade do sul da Groenlândia, conhecida por esculturas ao ar livre e casas coloridas.",
      image:
        "https://i.pinimg.com/1200x/a6/26/c8/a626c89dc5fb3fb4619e89a633a7bc8d.jpg",
    },
    {
      city: "Sisimiut",
      title: "Sisimiut",
      description:
        "A segunda maior cidade, famosa por atividades de inverno como trenós puxados por cães e esqui.",
      image:
        "https://i.pinimg.com/1200x/57/e6/a6/57e6a6e75add5e22bf8eaafab5ced648.jpg",
    },
    {
      city: "Narsaq",
      title: "Narsaq",
      description:
        "Cidade pitoresca rodeada por montanhas, geleiras e fiordes, ideal para caminhadas e pesca.",
      image:
        "https://i.pinimg.com/736x/84/e4/b4/84e4b4695c5c96b414bafefa22988303.jpg",
    },
    {
      city: "Tasiilaq",
      title: "Tasiilaq",
      description:
        "A maior cidade da costa leste, cercada por montanhas e glaciares, famosa por paisagens intocadas.",
      image:
        "https://i.pinimg.com/736x/14/76/d0/1476d00bb1e210086b7a5c91010f1f0c.jpg",
    },
    {
      city: "Kulusuk",
      title: "Kulusuk",
      description:
        "Pequena vila tradicional inuíte na costa leste, porta de entrada para aventuras árticas.",
      image:
        "https://i.pinimg.com/1200x/e2/5c/ec/e25cec8ce8a07a341e61655688ea6d1d.jpg",
    },
    {
      city: "Uummannaq",
      title: "Uummannaq",
      description:
        "Cidade insular dominada pela impressionante montanha em formato de coração, ícone da Groenlândia.",
      image:
        "https://i.pinimg.com/1200x/25/dc/e5/25dce5725e0c174a7db301a4a93a333e.jpg",
    },
  ],
  "The Bahamas": [
    {
      city: "Nassau",
      title: "Nassau",
      description:
        "A capital das Bahamas, famosa por suas praias, resorts, arquitetura colonial e o movimentado Straw Market.",
      image:
        "https://i.pinimg.com/736x/87/0e/49/870e497ac19196763af437354f673bd1.jpg",
    },
    {
      city: "Paradise Island",
      title: "Paradise Island",
      description:
        "Conectada a Nassau por pontes, abriga o famoso resort Atlantis, cassinos e aquários gigantes.",
      image:
        "https://i.pinimg.com/1200x/be/9c/86/be9c86eac0cb3935f3f4efce25951553.jpg",
    },
    {
      city: "Exuma Cays",
      title: "Exuma Cays",
      description:
        "Arquipélago de ilhotas com águas cristalinas e os famosos porquinhos que nadam em Big Major Cay.",
      image:
        "https://i.pinimg.com/1200x/a7/e5/db/a7e5dbbc73f412d12d7729833b150706.jpg",
    },
    {
      city: "Grand Bahama",
      title: "Grand Bahama",
      description:
        "Uma das ilhas mais visitadas, com praias de areia branca, cavernas e parques naturais.",
      image:
        "https://i.pinimg.com/736x/fa/65/21/fa65210b2b1fb504ec6ae8b7dbe5f7e2.jpg",
    },
    {
      city: "Harbour Island",
      title: "Harbour Island",
      description:
        "Conhecida por sua praia de areia rosa (Pink Sands Beach) e charme caribenho autêntico.",
      image:
        "https://i.pinimg.com/736x/47/4e/1e/474e1e214b373e5547335bc19486781b.jpg",
    },
    {
      city: "Andros Island",
      title: "Andros Island",
      description:
        "Maior ilha das Bahamas, famosa por mergulho em recifes, blue holes e natureza selvagem.",
      image:
        "https://i.pinimg.com/1200x/7a/c5/9c/7ac59c029774131b2ae8010c4ca25da6.jpg",
    },
    {
      city: "Bimini",
      title: "Bimini",
      description:
        "Ilha próxima à Flórida, popular para pesca esportiva e mergulho em águas cristalinas.",
      image:
        "https://i.pinimg.com/736x/01/4c/c4/014cc4af57ec2f6eb35fa411ecf9b454.jpg",
    },
    {
      city: "Long Island",
      title: "Long Island",
      description:
        "Famosa pelo Dean’s Blue Hole, um dos buracos azuis mais profundos do mundo.",
      image:
        "https://i.pinimg.com/1200x/35/23/4e/35234eeace62f0e9140bbb6382d5f546.jpg",
    },
    {
      city: "Eleuthera",
      title: "Eleuthera",
      description:
        "Ilha estreita com quilômetros de praias intocadas, famosa por sua beleza natural e tranquilidade.",
      image:
        "https://i.pinimg.com/1200x/9d/c8/0a/9dc80a1afbd742e9da06a6a6e3f497a4.jpg",
    },
  ],
  "Puerto Rico": [
    {
      city: "San Juan",
      title: "San Juan",
      description:
        "A capital de Porto Rico, com a charmosa cidade velha (Old San Juan), muralhas históricas e forte El Morro.",
      image:
        "https://i.pinimg.com/736x/a9/f3/90/a9f390f9213b0672880d61a0e68802d7.jpg",
    },
    {
      city: "Vieques",
      title: "Vieques",
      description:
        "Ilha paradisíaca conhecida por suas praias intocadas e pela famosa Baía Bioluminescente.",
      image:
        "https://i.pinimg.com/1200x/a1/64/59/a164595a9be26c465f5b96f833bd5165.jpg",
    },
    {
      city: "Culebra",
      title: "Culebra",
      description:
        "Ilha caribenha com a famosa Playa Flamenco, considerada uma das mais belas do mundo.",
      image:
        "https://bigworldsmallgirl.com/wp-content/uploads/2022/03/best-beaches-in-puerto-rico-6-1170x776.jpg",
    },
    {
      city: "Ponce",
      title: "Ponce",
      description:
        "Conhecida como a 'Pérola do Sul', possui arquitetura neoclássica, museus e a famosa Plaza Las Delicias.",
      image:
        "https://i.pinimg.com/1200x/d4/86/9c/d4869cfb58ab8359aa1dc1706e6560aa.jpg",
    },
    {
      city: "Cabo Rojo",
      title: "Cabo Rojo",
      description:
        "Destino costeiro famoso por falésias, salinas e a icônica praia Playa Sucia.",
      image:
        "https://i.pinimg.com/1200x/8f/6a/5a/8f6a5a28367906083d34e34c99f4f240.jpg",
    },
    {
      city: "Rincón",
      title: "Rincón",
      description:
        "Paraíso dos surfistas, com ondas perfeitas e praias ideais para pôr do sol.",
      image:
        "https://i.pinimg.com/1200x/b3/35/d0/b335d0a93b5e42a2565857330f633ad4.jpg",
    },
    {
      city: "Arecibo",
      title: "Arecibo",
      description:
        "Famosa pelo antigo radiotelescópio e pela Cueva del Indio, com vistas incríveis do Atlântico.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/b7/e9/99/la-cueva-del-indio.jpg?w=500&h=400&s=1",
    },
    {
      city: "Isla Verde",
      title: "Isla Verde",
      description:
        "Região de resorts e praias badaladas próxima a San Juan, popular entre turistas internacionais.",
      image:
        "https://i.pinimg.com/1200x/fb/d6/b8/fbd6b86139bc31a18c62e0f5665e5f95.jpg",
    },
  ],
  Barbados: [
    {
      city: "Bridgetown",
      title: "Bridgetown",
      description:
        "A capital de Barbados, com arquitetura colonial, comércio vibrante e o histórico Garrison Savannah.",
      image:
        "https://i.pinimg.com/736x/0b/e6/98/0be698dfe58b3badbebcddbbdd1ef69e.jpg",
    },
    {
      city: "Carlisle Bay",
      title: "Carlisle Bay",
      description:
        "Baía de águas calmas e cristalinas, excelente para mergulho e snorkeling entre naufrágios.",
      image:
        "https://i.pinimg.com/1200x/85/97/74/8597749c2b8947176fcb6f3abe6b6fbb.jpg",
    },
    {
      city: "Bathsheba",
      title: "Bathsheba",
      description:
        "Vila costeira no leste da ilha, famosa pelas formações rochosas e ondas perfeitas para surf.",
      image:
        "https://i.pinimg.com/736x/33/38/9b/33389b188162c6d867648be147eabeb3.jpg",
    },
    {
      city: "Harrison’s Cave",
      title: "Harrison’s Cave",
      description:
        "Sistema de cavernas com estalactites, estalagmites e riachos subterrâneos acessíveis por bonde.",
      image:
        "https://i.pinimg.com/1200x/42/a9/c2/42a9c22f40f6332b82a7721bd2557c68.jpg",
    },
    {
      city: "Oistins",
      title: "Oistins",
      description:
        "Cidade costeira famosa pela Fish Fry, evento de sexta-feira com música, dança e frutos do mar.",
      image:
        "https://i.pinimg.com/736x/50/9d/8e/509d8e8e94a73cc9c0a7ecc6c7e7b9a9.jpg",
    },
    {
      city: "St. Lawrence Gap",
      title: "St. Lawrence Gap",
      description:
        "Área tur��stica animada, conhecida por bares, restaurantes e vida noturna intensa.",
      image:
        "https://i.pinimg.com/1200x/cc/39/10/cc39100b74d7857c713ebb6944640208.jpg",
    },
    {
      city: "Animal Flower Cave",
      title: "Animal Flower Cave",
      description:
        "Caverna marinha com piscinas naturais e vistas espetaculares do oceano Atlântico.",
      image:
        "https://i.pinimg.com/736x/c7/5b/1c/c75b1c90276c9cbc01be96cfc28c397d.jpg",
    },
    {
      city: "Crane Beach",
      title: "Crane Beach",
      description:
        "Praia considerada uma das mais bonitas do mundo, com areia rosada e mar azul-turquesa.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Crane%20Beach%20Barbados.jpg",
    },
    {
      city: "Andromeda Botanic Gardens",
      title: "Andromeda Botanic Gardens",
      description:
        "Jardim botânico exuberante em Bathsheba, com plantas tropicais raras e vistas para o mar.",
      image:
        "https://i.pinimg.com/1200x/1a/90/eb/1a90ebace8fe344fdd52cfa7054ce91f.jpg",
    },
  ],
  "Saint Martin": [
    {
      city: "Maho Beach",
      title: "Maho Beach",
      description:
        "Praia famosa por ficar colada ao Aeroporto Princess Juliana, onde aviões passam a poucos metros da areia.",
      image:
        "https://i.pinimg.com/736x/7a/a3/81/7aa381d2b8a9aa0dfcf99f7152a84b99.jpg",
    },
    {
      city: "Philipsburg",
      title: "Philipsburg",
      description:
        "Capital do lado holandês, conhecida pela Front Street, cassinos, duty-free e o Great Bay Beach.",
      image:
        "https://i.pinimg.com/1200x/a7/03/3c/a7033cc0dcf42fefc1a147d919008d4a.jpg",
    },
    {
      city: "Marigot",
      title: "Marigot",
      description:
        "Capital do lado francês, charmosa com mercados, boutiques e arquitetura colonial.",
      image:
        "https://i.pinimg.com/1200x/b9/1e/32/b91e32728f3f16c994341c03e213e4c4.jpg",
    },
    {
      city: "Orient Bay Beach",
      title: "Orient Bay Beach",
      description:
        "Praia popular no lado francês, conhecida por resorts, esportes aquáticos e áreas naturistas.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/4c/10/93/caption.jpg?w=1000&h=600&s=1",
    },
    {
      city: "Fort Louis",
      title: "Fort Louis",
      description:
        "Forte histórico construído pelos franceses em Marigot, com vistas panorâmicas da ilha.",
      image:
        "https://i.pinimg.com/1200x/cc/91/c0/cc91c09f89e287d512db6f5225a42970.jpg",
    },
    {
      city: "Simpson Bay",
      title: "Simpson Bay",
      description:
        "Área turística com marina, restaurantes e vida noturna agitada no lado holandês.",
      image:
        "https://i.pinimg.com/1200x/51/48/70/51487094387a059d9bb4f67c0292427f.jpg",
    },
    {
      city: "Grand Case",
      title: "Grand Case",
      description:
        "Vila gastronômica do lado francês, famosa por seus restaurantes de alta qualidade.",
      image:
        "https://i.pinimg.com/1200x/b0/5c/66/b05c661c5f8e8a7905ffce600bd97507.jpg",
    },
    {
      city: "Pinel Island",
      title: "Pinel Island",
      description:
        "Pequena ilha acessível de barco, com praias tranquilas, snorkel e bares à beira-mar.",
      image:
        "https://i.pinimg.com/1200x/d3/e3/40/d3e34034a2149df9bd28e551f8ff01c7.jpg",
    },
    {
      city: "Loterie Farm",
      title: "Loterie Farm",
      description:
        "Reserva natural com trilhas, tirolesas e piscinas, localizada no interior montanhoso da ilha.",
      image:
        "https://i.pinimg.com/736x/6d/f3/86/6df386fade41cad4115b8ced34b72458.jpg",
    },
  ],
  "Cayman Islands": [
    {
      city: "Seven Mile Beach",
      title: "Seven Mile Beach",
      description:
        "Praia icônica de areia branca e águas azul-turquesa, considerada uma das mais bonitas do Caribe.",
      image:
        "https://i.pinimg.com/1200x/7e/51/72/7e5172b6e8359920570ddad9554e2efa.jpg",
    },
    {
      city: "Stingray City",
      title: "Stingray City",
      description:
        "Banco de areia no mar onde visitantes podem interagir com arraias em seu habitat natural.",
      image:
        "https://i.pinimg.com/1200x/21/35/b6/2135b6b84b16fe11646e785db643e31d.jpg",
    },
    {
      city: "George Town",
      title: "George Town",
      description:
        "Capital das Ilhas Cayman, centro financeiro e cultural, com lojas, museus e portos de cruzeiros.",
      image:
        "https://i.pinimg.com/1200x/a0/7f/a7/a07fa767b9a736f06644d62d4a9925a7.jpg",
    },
    {
      city: "Rum Point",
      title: "Rum Point",
      description:
        "Praia relaxante em Grand Cayman, ideal para esportes aquáticos e saborear coquetéis tropicais.",
      image:
        "https://i.pinimg.com/736x/a6/b0/37/a6b037b6c329f84401b090d4241ff3e8.jpg",
    },
    {
      city: "Cayman Turtle Centre",
      title: "Cayman Turtle Centre",
      description:
        "Centro de preservação de tartarugas-verdes, onde visitantes podem aprender e interagir com os animais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cayman%20Turtle%20Centre.jpg",
    },
    {
      city: "Pedro St. James Castle",
      title: "Pedro St. James Castle",
      description:
        "Histórico casarão colonial do século XVIII, considerado o 'berço da democracia' nas Ilhas Cayman.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepfqwrErPPsYomGfrk4LHY5DMHV2v1BwSAilQjIY150idocnoG0BH_eeaH7c6Xpz9c8A&usqp=CAU",
    },
    {
      city: "Little Cayman",
      title: "Little Cayman",
      description:
        "Ilha paradisíaca e pouco habitada, famosa pelo mergulho no Bloody Bay Wall e praias desertas.",
      image:
        "https://i.pinimg.com/1200x/06/ff/81/06ff81c9182bb3c80ad66f0125619366.jpg",
    },
    {
      city: "Cayman Brac",
      title: "Cayman Brac",
      description:
        "Ilha com falésias dramáticas, cavernas e trilhas, além de ótimos pontos de mergulho.",
      image:
        "https://i.pinimg.com/1200x/ac/d0/38/acd03827759c0ad7671892975a9e181b.jpg",
    },
  ],
  Guadeloupe: [
    {
      city: "Pointe-à-Pitre",
      title: "Pointe-à-Pitre",
      description:
        "Principal cidade e centro econômico de Guadalupe, famosa pelos mercados coloridos e vida cultural.",
      image:
        "https://i.pinimg.com/736x/3f/3b/8c/3f3b8c62b1b4c94c036759ce4bdb97cb.jpg",
    },
    {
      city: "Parque Nacional de Guadalupe",
      title: "Parque Nacional de Guadalupe",
      description:
        "Área protegida em Basse-Terre, com florestas tropicais, trilhas e fauna diversificada.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Parc%20national%20de%20la%20Guadeloupe.jpg",
    },
    {
      city: "Vulcão La Soufrière",
      title: "Vulcão La Soufrière",
      description:
        "Vulcão ativo em Basse-Terre, conhecido como ‘La Vieille Dame���, com trilhas e vistas panorâmicas.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/5d/70/ca/la-soufriere-volcano.jpg?w=1000&h=-1&s=1",
    },
    {
      city: "Praia de Grande Anse",
      title: "Praia de Grande Anse",
      description:
        "Uma das mais belas praias de Guadalupe, com areias douradas e mar azul intenso em Deshaies.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/a5/3a/5f/grand-anse-beach.jpg?w=1200&h=-1&s=1",
    },
    {
      city: "Îles des Saintes",
      title: "Îles des Saintes",
      description:
        "Arquipélago ao sul de Guadalupe, conhecido por praias idílicas e vilas pitorescas.",
      image:
        "https://i.pinimg.com/1200x/7a/88/a8/7a88a8743c5dfd3b4dece59208124eeb.jpg",
    },
    {
      city: "Marie-Galante",
      title: "Marie-Galante",
      description:
        "Ilha de atmosfera tranquila, famosa por canaviais, praias isoladas e destilarias de rum.",
      image:
        "https://i.pinimg.com/736x/f0/b6/70/f0b6703d7e14ffad0783c6c4dc326d9c.jpg",
    },
    {
      city: "Deshaies",
      title: "Deshaies",
      description:
        "Vila charmosa no noroeste, conhecida por jardins botânicos e cenários da série ‘Death in Paradise’.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Deshaies%20Guadeloupe.jpg",
    },
    {
      city: "Reserva de Cousteau",
      title: "Reserva de Cousteau",
      description:
        "��rea marinha protegida em torno das Ilhas Pigeon, famosa pelo mergulho e snorkel.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ae/c1/d8/reserve-cousteau-et-ilets.jpg?w=1200&h=-1&s=1",
    },
    {
      city: "Praia de Sainte-Anne",
      title: "Praia de Sainte-Anne",
      description:
        "Praia movimentada e turística de areia branca, palmeiras e mercados locais.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/29/54/03/photo1jpg.jpg?w=300&h=-1&s=1",
    },
  ],
  Belize: [
    {
      city: "Ambergris Caye",
      title: "Ambergris Caye",
      description:
        "A ilha mais famosa de Belize, com praias paradisíacas, resorts e acesso direto à Barreira de Corais de Belize.",
      image:
        "https://i.pinimg.com/1200x/3b/4d/e1/3b4de1598a07fdab4925fcd6b21565c6.jpg",
    },
    {
      city: "Great Blue Hole",
      title: "Great Blue Hole",
      description:
        "O famoso buraco azul de Belize, um dos melhores pontos de mergulho do mundo, com águas profundas e vida marinha vibrante.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Great%20Blue%20Hole%20Belize.jpg",
    },
    {
      city: "Caye Caulker",
      title: "Caye Caulker",
      description:
        "Ilha charmosa com atmosfera descontraída e o lema 'Go Slow', perfeita para relaxar e praticar snorkel.",
      image:
        "https://i.pinimg.com/736x/dd/78/99/dd7899f146c1634833605e57eeb64a05.jpg",
    },
    {
      city: "Belize City",
      title: "Belize City",
      description:
        "Maior cidade do país, ponto de entrada para turistas, com arquitetura colonial e o Museu de Belize.",
      image:
        "https://i.pinimg.com/1200x/35/36/95/3536950db3b667f6c49cc39311de1f6d.jpg",
    },
    {
      city: "San Ignacio",
      title: "San Ignacio",
      description:
        "Cidade vibrante no interior, cercada por florestas tropicais, cavernas e ruínas maias como Xunantunich e Cahal Pech.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/23/62/cc/san-ignacio-resort-property.jpg?w=600&h=400&s=1",
    },
    {
      city: "Placencia",
      title: "Placencia",
      description:
        "Vilarejo costeiro famoso por suas praias e resorts à beira-mar, além de ser ótimo ponto para explorar ilhas próximas.",
      image:
        "https://i.pinimg.com/736x/d2/b2/e0/d2b2e092b127be12a7d23623905a6ad4.jpg",
    },
    {
      city: "Hopkins",
      title: "Hopkins",
      description:
        "Pequena vila garífuna conhecida por sua cultura vibrante, hospitalidade e proximidade com o Parque Nacional Bocawina.",
      image:
        "https://www.belizeandreams.com/_next/image?url=https%3A%2F%2Fmedia-bridge.thinkreservations.com%2FeyJidWNrZXQiOiJwcm9kdWN0aW9uLXRoaW5rcmVzZXJ2YXRpb25zLW1lZGlhLWJyaWRnZSIsImtleSI6InRoaW5rLXdlYi1tZWRpYS9ob3RlbHMvMTEyMTA3MTYzNTUwLzIzOTYyYzM3LTA5ODMtNGVlMi04ODU3LWYzOGVhYmNmMjViYS9ob3AtMDQuanBnIn0%3D&w=1920&q=75",
    },
    {
      city: "Altun Ha",
      title: "Altun Ha",
      description:
        "Um dos s��tios arqueológicos maias mais importantes de Belize, localizado perto da capital, Belmopan.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Altun%20Ha%20Belize.jpg",
    },
    {
      city: "Mountain Pine Ridge Forest Reserve",
      title: "Mountain Pine Ridge Forest Reserve",
      description:
        "Reserva natural com rios, cachoeiras, cavernas e trilhas, ideal para ecoturismo e contato com a natureza.",
      image:
        "https://i.pinimg.com/736x/59/f2/df/59f2dfbb6cef34350747268fede8d7ef.jpg",
    },
  ],
  Guatemala: [
    {
      city: "Antigua Guatemala",
      title: "Antigua Guatemala",
      description:
        "Antiga capital colonial com arquitetura espanhola preservada, ruínas históricas e ruas de paralelepípedo aos pés de vulcões.",
      image:
        "https://i.pinimg.com/736x/a5/44/8f/a5448fbfb58812a993adfce8f28d303d.jpg",
    },
    {
      city: "Lago de Atitlán",
      title: "Lago de Atitlán",
      description:
        "Um dos lagos mais bonitos do mundo, cercado por vulcões e vilas maias coloridas com mercados e tradições únicas.",
      image:
        "https://i.pinimg.com/736x/2b/bf/2f/2bbf2fd89cfe0c6b8c5b280f6f5cc37b.jpg",
    },
    {
      city: "Tikal",
      title: "Tikal",
      description:
        "Imenso sítio arqueológico maia no meio da selva, com pirâmides antigas e fauna exuberante ao redor.",
      image:
        "https://i.pinimg.com/1200x/e3/04/b2/e304b226973e583237d557cc21aca7b0.jpg",
    },
    {
      city: "Chichicastenango",
      title: "Chichicastenango",
      description:
        "Cidade famosa por seu mercado indígena colorido e pela Igreja de Santo Tomás, símbolo da fusão entre cultura maia e católica.",
      image:
        "https://i.pinimg.com/1200x/49/2d/4d/492d4d60cbf47e4325e236e03a8fa1bb.jpg",
    },
    {
      city: "Semuc Champey",
      title: "Semuc Champey",
      description:
        "Conjunto natural de piscinas turquesa sobre rochas calcárias, cercadas por floresta tropical — um dos lugares mais paradisíacos do país.",
      image:
        "https://i.pinimg.com/1200x/46/36/bc/4636bcd7ce8d958fe8139d2637636c5d.jpg",
    },
    {
      city: "Flores",
      title: "Flores",
      description:
        "Charmosa ilha no Lago Petén Itzá, base para explorar Tikal e outras ruínas maias da região norte.",
      image:
        "https://i.pinimg.com/736x/a7/72/65/a77265ccd9de9571ba865d834c3d7ebb.jpg",
    },
    {
      city: "Quetzaltenango (Xela)",
      title: "Quetzaltenango (Xela)",
      description:
        "Segunda maior cidade da Guatemala, cercada por montanhas e vulcões, famosa por suas escolas de espanhol e cultura autêntica.",
      image:
        "https://i.pinimg.com/1200x/06/26/8d/06268ddafd4e4122c3b9c6b107ef4dd4.jpg",
    },
    {
      city: "Pacaya Volcano",
      title: "Pacaya Volcano",
      description:
        "Vulcão ativo acessível para trilhas e tours de aventura, onde é possível ver fluxos de lava e vistas incríveis.",
      image:
        "https://i.pinimg.com/736x/40/cb/98/40cb985be64a15c2926bc4c6dce7d1d5.jpg",
    },
    {
      city: "Livingston",
      title: "Livingston",
      description:
        "Cidade costeira com forte influência garífuna, acessível apenas de barco, com praias tropicais e cultura vibrante.",
      image:
        "https://i.pinimg.com/1200x/6b/2c/ea/6b2ceadd751865ea31a66d39709b93fb.jpg",
    },
  ],
  "El Salvador": [
    {
      city: "San Salvador",
      title: "San Salvador",
      description:
        "Capital moderna do país, cercada por montanhas e vulcões, com museus, vida noturna e a impressionante Catedral Metropolitana.",
      image:
        "https://i.pinimg.com/1200x/f3/36/df/f336dfd391ba77c317759efe198445fd.jpg",
    },
    {
      city: "Santa Ana",
      title: "Santa Ana",
      description:
        "Cidade colonial charmosa próxima ao vulcão de mesmo nome e ao Lago Coatepeque, um dos cartões-postais do país.",
      image:
        "https://i.pinimg.com/1200x/e7/71/d9/e771d9534e1cb4cebf31a0974f9b1a0e.jpg",
    },
    {
      city: "Lago Coatepeque",
      title: "Lago Coatepeque",
      description:
        "Lago de cratera vulcânica com águas azul-turquesa, ideal para esportes aquáticos e relaxamento com vista panorâmica.",
      image:
        "https://i.pinimg.com/1200x/8f/95/c2/8f95c293e75563f4418b0e6b078f0b5c.jpg",
    },
    {
      city: "Suchitoto",
      title: "Suchitoto",
      description:
        "Cidade colonial pitoresca com ruas de pedra, arte local, boa gastronomia e o Lago Suchitlán ao lado.",
      image:
        "https://i.pinimg.com/1200x/8e/d0/fd/8ed0fde520086ba583ffdadea6321536.jpg",
    },
    {
      city: "El Tunco",
      title: "El Tunco",
      description:
        "Praia icônica entre surfistas do mundo todo, com bares, hostels e o pôr do sol mais famoso do país.",
      image:
        "https://i.pinimg.com/1200x/24/45/fe/2445fe3bd329f3deb1a70b86c6cd318d.jpg",
    },
    {
      city: "Ruta de las Flores",
      title: "Ruta de las Flores",
      description:
        "Rota turística entre vilarejos de montanha cobertos por flores, cafés e mercados artesanais — ideal para road trips.",
      image:
        "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/10/48/a8/81.jpg",
    },
    {
      city: "Parque Nacional El Boquerón",
      title: "Parque Nacional El Boquerón",
      description:
        "Localizado no topo do vulcão de San Salvador, oferece trilhas e mirantes com vista impressionante da cratera.",
      image:
        "https://i.pinimg.com/736x/ed/7b/0b/ed7b0b549343f6d6a78c71d8fee4d595.jpg",
    },
    {
      city: "Tazumal",
      title: "Tazumal",
      description:
        "Importante sítio arqueológico maia com pirâmides e ruínas bem preservadas, localizado na cidade de Chalchuapa.",
      image:
        "https://i.pinimg.com/736x/29/1c/b2/291cb214f8e75b1df4524253ab3c67c8.jpg",
    },
    {
      city: "El Imposible National Park",
      title: "El Imposible National Park",
      description:
        "Maior parque nacional do país, com trilhas, florestas tropicais e biodiversidade impressionante.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65UGLY2iihcPcNZHm2YvTXe-jnCXTpQmW0w&s",
    },
  ],
  Nicaragua: [
    {
      city: "Granada",
      title: "Granada",
      description:
        "Cidade colonial às margens do Lago Nicarágua, famosa por sua arquitetura colorida, catedrais e passeios pelas ilhas próximas.",
      image:
        "https://i.pinimg.com/736x/48/6c/03/486c03ce0a055ab06f3f47f61bcb3101.jpg",
    },
    {
      city: "León",
      title: "León",
      description:
        "Centro histórico e cultural com catedrais barrocas, arte urbana vibrante e acesso fácil ao vulcão Cerro Negro.",
      image:
        "https://i.pinimg.com/736x/b4/13/5e/b4135ed3d95fea2049a15d5ff17aa23f.jpg",
    },
    {
      city: "Isla de Ometepe",
      title: "Isla de Ometepe",
      description:
        "Ilha formada por dois vulcões no Lago Nicarágua, com trilhas, cachoeiras e uma natureza espetacular.",
      image:
        "https://i.pinimg.com/1200x/b1/79/7f/b1797f38febbfed3347cd82b22fee272.jpg",
    },
    {
      city: "San Juan del Sur",
      title: "San Juan del Sur",
      description:
        "Balneário popular entre surfistas e mochileiros, conhecido por suas praias e vida noturna animada.",
      image:
        "https://i.pinimg.com/1200x/3a/46/65/3a4665f14d951504238cc8e04d69e456.jpg",
    },
    {
      city: "Vulcão Masaya",
      title: "Vulcão Masaya",
      description:
        "Vulcão ativo acessível de carro, onde é possível observar a lava incandescente de seus mirantes noturnos.",
      image:
        "https://i.pinimg.com/736x/8b/d9/ad/8bd9ad3af69b149cea059b2c5577c5d8.jpg",
    },
    {
      city: "Corn Islands",
      title: "Corn Islands",
      description:
        "Duas ilhas paradisíacas no Caribe nicaraguense, com águas cristalinas, mergulho e clima tropical perfeito.",
      image:
        "https://i.pinimg.com/1200x/65/59/bf/6559bfa224040869e1bddaf6a9e4d186.jpg",
    },
    {
      city: "Matagalpa",
      title: "Matagalpa",
      description:
        "Região montanhosa no coração do país, conhecida pelo cultivo de café, trilhas ecológicas e clima agradável.",
      image:
        "https://i.pinimg.com/736x/9b/56/5d/9b565da7dd72497f4834a60225cbed0d.jpg",
    },
    {
      city: "Estelí",
      title: "Estelí",
      description:
        "Cidade conhecida por sua indústria de charutos, arte de rua e paisagens montanhosas ideais para ecoturismo.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1P4Jt9QCdbv1Unq4_D74uBSMdECb0UYM5SC8cPetzrDxYoq1QSgeEIGB2Dce8AZr3etQ&usqp=CAU",
    },
    {
      city: "Laguna de Apoyo",
      title: "Laguna de Apoyo",
      description:
        "Lago de cratera vulcânica entre Granada e Masaya, ótimo para natação, caiaque e relaxamento em meio à natureza.",
      image:
        "https://i.pinimg.com/736x/a2/56/58/a256582e6387666d2533a7532c493594.jpg",
    },
  ],
  Honduras: [
    {
      city: "Roatán",
      title: "Roatán",
      description:
        "A ilha mais famosa de Honduras, com praias paradisíacas, recifes de corais e um dos melhores pontos de mergulho do Caribe.",
      image:
        "https://i.pinimg.com/1200x/c2/db/87/c2db8756c022bd78ffa6c06654a444c4.jpg",
    },
    {
      city: "Utila",
      title: "Utila",
      description:
        "Pequena ilha próxima a Roatán, conhecida por mergulhos acessíveis, vida marinha rica e atmosfera mochileira descontraída.",
      image:
        "https://i.pinimg.com/1200x/6a/19/c3/6a19c3f3861273f14a60c75615ccdc3e.jpg",
    },
    {
      city: "Copán Ruinas",
      title: "Copán Ruinas",
      description:
        "Antigo centro maia com esculturas e hieróglifos detalhados — um dos sítios arqueológicos mais importantes da Mesoamérica.",
      image:
        "https://i.pinimg.com/1200x/f3/66/e9/f366e9572f31127d762fa5022e5214a2.jpg",
    },
    {
      city: "Tela",
      title: "Tela",
      description:
        "Cidade litorânea famosa por suas praias e pelo acesso ao Parque Nacional Punta Sal e Jardins Botânicos Lancetilla.",
      image:
        "https://i.pinimg.com/1200x/49/7c/ac/497cacdc6cd28b829ab37995bf084662.jpg",
    },
    {
      city: "La Ceiba",
      title: "La Ceiba",
      description:
        "Cidade vibrante na costa caribenha, ponto de partida para as Ilhas da Baía e o Parque Nacional Pico Bonito.",
      image:
        "https://i.pinimg.com/1200x/a1/40/29/a140296d3eeba25ff8dd0de83ec515c4.jpg",
    },
    {
      city: "Parque Nacional Pico Bonito",
      title: "Parque Nacional Pico Bonito",
      description:
        "Reserva natural com trilhas, cachoeiras e observação de aves — perfeita para ecoturismo e aventura.",
      image:
        "https://i.pinimg.com/1200x/cd/b3/f1/cdb3f1abead27e1dfb0a05ca7df2f8dd.jpg",
    },
    {
      city: "Trujillo",
      title: "Trujillo",
      description:
        "Cidade histórica com belas praias, ruínas coloniais e vistas espetaculares da Baía de Trujillo.",
      image:
        "https://i.pinimg.com/1200x/e7/e3/0b/e7e30b8b18a5f60bd32f006796fdc2ea.jpg",
    },
    {
      city: "Gracias",
      title: "Gracias",
      description:
        "Cidade colonial cercada por montanhas e próxima ao Parque Nacional Celaque, que abriga o pico mais alto de Honduras.",
      image:
        "https://i.pinimg.com/1200x/30/c0/40/30c04023320eb3f136d446110f2a81c4.jpg",
    },
    {
      city: "Comayagua",
      title: "Comayagua",
      description:
        "Antiga capital colonial com catedrais históricas, museus e tradições culturais fortes, especialmente na Semana Santa.",
      image:
        "https://i.pinimg.com/736x/6a/d9/1a/6ad91affed75345e7158062f7a75a7c9.jpg",
    },
  ],
  "Costa Rica": [
    {
      city: "Parque Nacional Manuel Antonio",
      title: "Parque Nacional Manuel Antonio",
      description:
        "Um dos destinos mais famosos da Costa Rica, combina praias paradisíacas, trilhas e rica fauna com macacos, preguiças e aves tropicais.",
      image:
        "https://i.pinimg.com/1200x/1b/b4/f7/1bb4f7959b62bca6cba3931812be0d7b.jpg",
    },
    {
      city: "Vulcão Arenal",
      title: "Vulcão Arenal",
      description:
        "Vulcão emblemático cercado por fontes termais, trilhas e o Lago Arenal, ideal para esportes aquáticos.",
      image:
        "https://i.pinimg.com/736x/2c/0f/81/2c0f81e8f6ef1b9d6af89b1d904a13bd.jpg",
    },
    {
      city: "Monteverde Cloud Forest",
      title: "Monteverde Cloud Forest",
      description:
        "Reserva biológica coberta por florestas de neblina, pontes suspensas e grande diversidade de espécies.",
      image:
        "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/96/51/42.jpg",
    },
    {
      city: "Tamarindo",
      title: "Tamarindo",
      description:
        "Praia vibrante na costa do Pacífico, famosa por surfe, vida noturna e pores do sol inesquecíveis.",
      image:
        "https://images.entercostarica.com/uploads/items/2443/w1024_item_2443_tamarindo_diria_resort_overview_72b02fafac.webp",
    },
    {
      city: "Parque Nacional Tortuguero",
      title: "Parque Nacional Tortuguero",
      description:
        "Conhecido como a 'Amazônia da Costa Rica', é acessível apenas de barco e abriga ninhos de tartarugas marinhas.",
      image:
        "https://media.istockphoto.com/id/1498249198/pt/foto/tortuguero-national-park-turtle-beach-coast-costa-rica.jpg?s=612x612&w=0&k=20&c=KfcWyCCFFKRN29Wq2G4cESXOze1Ehtbqmg_zPHm8o0g=",
    },
    {
      city: "Parque Nacional Corcovado",
      title: "Parque Nacional Corcovado",
      description:
        "Localizado na Península de Osa, abriga uma das maiores biodiversidades do planeta.",
      image:
        "https://media.istockphoto.com/id/1269289088/pt/foto/corcovado-national-park-costa-rica.jpg?s=612x612&w=0&k=20&c=7sHbiGu0DgO3FWycDLxrg31IlPaa0NC9ZHRjm5Z7Hm4=",
    },
    {
      city: "San José",
      title: "San José",
      description:
        "A capital do país, com museus, mercados e arquitetura histórica, além de ser ponto de partida para explorar o interior.",
      image:
        "https://i.pinimg.com/1200x/e4/c1/3e/e4c13e97f7169e8e4c52530018f59d3e.jpg",
    },
    {
      city: "Puerto Viejo de Talamanca",
      title: "Puerto Viejo de Talamanca",
      description:
        "Destino caribenho alternativo, com forte cultura afro-caribenha, praias e vida boêmia.",
      image:
        "https://i.pinimg.com/736x/cb/92/98/cb929894ac7825830f8bf340fa557cad.jpg",
    },
    {
      city: "Rincón de la Vieja",
      title: "Rincón de la Vieja",
      description:
        "Parque nacional com vulcões, cachoeiras e águas termais na região de Guanacaste.",
      image:
        "https://i.pinimg.com/1200x/03/e4/88/03e488f952ef6e9b60cf1f8744638d31.jpg",
    },
  ],
  Panama: [
    {
      city: "Cidade do Panamá",
      title: "Cidade do Panamá",
      description:
        "Capital moderna e vibrante, com arranha-céus, cassinos, o histórico Casco Viejo e o famoso Canal do Panamá.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Panama%20City%20skyline.jpg",
    },
    {
      city: "Canal do Panamá",
      title: "Canal do Panamá",
      description:
        "Uma das maiores obras de engenharia do mundo, conecta o Oceano Atlântico ao Pacífico e oferece centros de visitantes impressionantes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Panama%20Canal%20Miraflores%20Locks.jpg",
    },
    {
      city: "Casco Viejo",
      title: "Casco Viejo",
      description:
        "Centro histórico da Cidade do Panamá, com arquitetura colonial, praças charmosas e ótimos bares e restaurantes.",
      image:
        "https://i.pinimg.com/1200x/04/9e/e3/049ee3e50b66ccadf2ff318b10dde994.jpg",
    },
    {
      city: "Bocas del Toro",
      title: "Bocas del Toro",
      description:
        "Arquipélago caribenho com praias paradisíacas, águas cristalinas e vida noturna descontraída.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Bocas%20del%20Toro%20Panama.jpg",
    },
    {
      city: "San Blas (Guna Yala)",
      title: "San Blas (Guna Yala)",
      description:
        "Arquipélago com mais de 300 ilhas administradas pelo povo indígena Guna, ideal para quem busca natureza intocada.",
      image:
        "https://i.pinimg.com/1200x/85/80/b0/8580b04544d3045ac1f4c7db81f8d821.jpg",
    },
    {
      city: "Isla Taboga",
      title: "Isla Taboga",
      description:
        "Conhecida como 'Ilha das Flores', fica próxima à Cidade do Panamá e é destino popular para um bate-volta.",
      image:
        "https://i.pinimg.com/736x/3e/a7/14/3ea714fe456414a965de57703c7b261d.jpg",
    },
    {
      city: "Parque Nacional Coiba",
      title: "Parque Nacional Coiba",
      description:
        "Antiga colônia penal transformada em reserva marinha, considerada Patrimônio Mundial da UNESCO e um dos melhores pontos de mergulho do país.",
      image:
        "https://i.pinimg.com/1200x/97/fc/2c/97fc2c726383d51a00c12a4dc729badb.jpg",
    },
    {
      city: "Portobelo",
      title: "Portobelo",
      description:
        "Cidade histórica na costa caribenha, com fortes coloniais e ruínas que contam a história das rotas espanholas de ouro.",
      image:
        "https://i.pinimg.com/736x/87/f7/76/87f776db8275a98d348193831cea1d90.jpg",
    },
  ],
  Cuba: [
    {
      city: "Havana",
      title: "Havana",
      description:
        "A capital cubana é um museu a céu aberto, com carros clássicos, arquitetura colonial e o famoso Malecón à beira-mar.",
      image:
        "https://i.pinimg.com/1200x/88/41/7f/88417f9fffcd0c6896d2679e4bc60ff4.jpg",
    },
    {
      city: "Varadero",
      title: "Varadero",
      description:
        "Resort mais famoso de Cuba, com praias de areia branca, águas azul-turquesa e grandes resorts all-inclusive.",
      image:
        "https://i.pinimg.com/1200x/13/0e/ed/130eedd2e8e5c51a16aae4d3d9d583c4.jpg",
    },
    {
      city: "Trinidad",
      title: "Trinidad",
      description:
        "Cidade colonial belamente preservada, Patrimônio Mundial da UNESCO, com ruas de paralelepípedo e música ao vivo em cada esquina.",
      image:
        "https://i.pinimg.com/1200x/ab/32/ed/ab32edc863b784cbc5d3295b92623e06.jpg",
    },
    {
      city: "Viñales",
      title: "Viñales",
      description:
        "Vale cercado por montanhas e plantações de tabaco, ideal para quem quer conhecer o lado rural de Cuba.",
      image:
        "https://i.pinimg.com/1200x/c7/a6/2a/c7a62a333b993e97a14f8053cc37489d.jpg",
    },
    {
      city: "Cayo Coco",
      title: "Cayo Coco",
      description:
        "Ilha paradisíaca conectada por estrada ao continente, famosa por resorts de luxo e águas cristalinas.",
      image:
        "https://i.pinimg.com/736x/de/65/3b/de653b2697e1fafac26a5f209ba91725.jpg",
    },
    {
      city: "Santiago de Cuba",
      title: "Santiago de Cuba",
      description:
        "Segunda maior cidade do país, berço do son cubano e de tradições afro-caribenhas vibrantes.",
      image:
        "https://i.pinimg.com/1200x/d8/55/b5/d855b5065e4d27e7fad3b96c19197b98.jpg",
    },
    {
      city: "Cienfuegos",
      title: "Cienfuegos",
      description:
        "Conhecida como a 'Pérola do Sul', tem arquitetura neoclássica e influência francesa às margens do mar.",
      image:
        "https://i.pinimg.com/1200x/2e/06/9d/2e069d374a51959433a619e4d5e9061b.jpg",
    },
    {
      city: "Cayo Largo del Sur",
      title: "Cayo Largo del Sur",
      description:
        "Ilha paradisíaca no Mar do Caribe, com praias isoladas e recifes de coral ideais para mergulho.",
      image:
        "https://i.pinimg.com/736x/8c/c9/fe/8cc9fe214a3728573c4514a38d1c57b9.jpg",
    },
    {
      city: "Santa Clara",
      title: "Santa Clara",
      description:
        "Cidade histórica famosa pelo Mausoléu de Che Guevara e sua importância na Revolução Cubana.",
      image:
        "https://i.pinimg.com/736x/12/fc/70/12fc70a8c7daf8148a77d5337e387699.jpg",
    },
  ],
  Haiti: [
    {
      city: "Citadelle Laferrière",
      title: "Citadelle Laferrière",
      description:
        "Fortaleza monumental no topo de uma montanha em Milot, símbolo da independência haitiana e Patrimônio Mundial da UNESCO.",
      image:
        "https://i.pinimg.com/736x/00/1a/42/001a42f06a9373255a94f8afaa26cbf9.jpg",
    },
    {
      city: "Labadee",
      title: "Labadee",
      description:
        "Resort costeiro exclusivo da Royal Caribbean, com praias paradisíacas, esportes aquáticos e vistas espetaculares do Caribe.",
      image:
        "https://i.pinimg.com/736x/6a/e8/39/6ae839afe8ef3936177c46cc9c802d10.jpg",
    },
    {
      city: "Cap-Haïtien",
      title: "Cap-Haïtien",
      description:
        "Cidade histórica com arquitetura colonial e acesso a marcos culturais como a Citadelle e o Palácio Sans-Souci.",
      image:
        "https://i.pinimg.com/736x/5a/ac/0a/5aac0a659464cb2ee3dea330ec12ddef.jpg",
    },
    {
      city: "Jacmel",
      title: "Jacmel",
      description:
        "Cidade costeira artística famosa por seu carnaval, galerias e arquitetura colonial bem preservada.",
      image:
        "https://i.pinimg.com/1200x/0f/a4/ce/0fa4ce319625810342c43128b24e04d9.jpg",
    },
    {
      city: "Port-au-Prince",
      title: "Port-au-Prince",
      description:
        "Capital do país, com o Museu do Panteão Nacional Haitiano (MUPANAH), mercados vibrantes e intensa vida cultural.",
      image:
        "https://i.pinimg.com/1200x/d4/0c/bd/d40cbd168bf73ae2db9fcf2a556a1264.jpg",
    },
    {
      city: "Bassin Bleu",
      title: "Bassin Bleu",
      description:
        "Conjunto de piscinas naturais e cachoeiras de águas azul-turquesa, escondidas nas montanhas perto de Jacmel.",
      image:
        "https://i.pinimg.com/736x/ca/5d/ab/ca5dab54cee2608bfa3f2349fefcb025.jpg",
    },
    {
      city: "Île-à-Vache",
      title: "Île-à-Vache",
      description:
        "Ilha paradisíaca no sul do Haiti com praias desertas, resorts ecológicos e mar cristalino.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/77/72/05/abaka-bay-resort.jpg?w=600&h=-1&s=1",
    },
    {
      city: "Palácio Sans-Souci",
      title: "Palácio Sans-Souci",
      description:
        "Ruínas do palácio do rei Henri Christophe, um dos mais impressionantes monumentos históricos do Haiti.",
      image:
        "https://cdn.getyourguide.com/img/location/54ef3902e1e18.jpeg/99.jpg",
    },
  ],
  "Trinidad and Tobago": [
    {
      city: "Maracas Bay (Trinidad)",
      title: "Maracas Bay (Trinidad)",
      description:
        "Praia mais famosa de Trinidad, com areia dourada, mar azul e o tradicional sanduíche Bake & Shark.",
      image:
        "https://i.pinimg.com/1200x/b2/75/61/b27561dd8f98bb6fffd1dac9353476c5.jpg",
    },
    {
      city: "Port of Spain",
      title: "Port of Spain",
      description:
        "Capital vibrante de Trinidad, conhecida pelo Carnaval, arquitetura colonial e vida noturna animada.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Port%20of%20Spain%20Trinidad.jpg",
    },
    {
      city: "Pigeon Point (Tobago)",
      title: "Pigeon Point (Tobago)",
      description:
        "Praia cartão-postal de Tobago, com águas cristalinas, coqueiros e o famoso píer de madeira sobre o mar.",
      image:
        "https://i.pinimg.com/736x/63/95/e7/6395e7fe826ebce03e19f0e236e75947.jpg",
    },
    {
      city: "Store Bay (Tobago)",
      title: "Store Bay (Tobago)",
      description:
        "Praia popular em Tobago, próxima ao aeroporto, com águas calmas e saídas de barco para Buccoo Reef.",
      image:
        "https://i.pinimg.com/736x/db/ed/ef/dbedef31b1357ac2191ddca90e55a94d.jpg",
    },
    {
      city: "Buccoo Reef (Tobago)",
      title: "Buccoo Reef (Tobago)",
      description:
        "Recife de corais espetacular, ideal para snorkel e passeios de barco com fundo de vidro.",
      image:
        "https://i.pinimg.com/736x/3f/6f/ec/3f6fec0447f398de06a2e1d6604338ad.jpg",
    },
    {
      city: "Argyle Waterfall (Tobago)",
      title: "Argyle Waterfall (Tobago)",
      description:
        "Maior cachoeira de Tobago, com três quedas d’água e piscinas naturais em meio à floresta tropical.",
      image:
        "https://i.pinimg.com/1200x/11/e2/cd/11e2cdaf08931d7041cc988c4cdb0f4c.jpg",
    },
    {
      city: "Caroni Bird Sanctuary (Trinidad)",
      title: "Caroni Bird Sanctuary (Trinidad)",
      description:
        "Santuário natural de manguezais famoso pela presença do íbis-escarlate, ave nacional de Trinidad.",
      image:
        "https://i.pinimg.com/736x/a0/86/f5/a086f547b1a6a20c3492137d7e230155.jpg",
    },
    {
      city: "Fort King George (Tobago)",
      title: "Fort King George (Tobago)",
      description:
        "Forte histórico com vistas panorâmicas de Scarborough e um pequeno museu sobre a história colonial da ilha.",
      image:
        "https://i.pinimg.com/736x/ae/69/1a/ae691addadd34dbd1b75bdeefbc75d07.jpg",
    },
    {
      city: "Asa Wright Nature Centre (Trinidad)",
      title: "Asa Wright Nature Centre (Trinidad)",
      description:
        "Reserva ecológica nas montanhas do norte de Trinidad, excelente para observação de aves e trilhas.",
      image:
        "https://www.wildlifeworldwide.com/images/galleries/caribbean_trinidad_and_tobago_asa_wright_nature_experience_outdoor_dining_gallery.jpg",
    },
  ],
  "Dominican Republic": [
    {
      city: "Punta Cana",
      title: "Punta Cana",
      description:
        "Principal destino turístico do país, famoso por suas praias de areia branca, resorts luxuosos e mar azul-turquesa.",
      image:
        "https://i.pinimg.com/736x/8c/37/95/8c37956736a45093d33578b4dd1008f3.jpg",
    },
    {
      city: "Santo Domingo",
      title: "Santo Domingo",
      description:
        "Capital do país e Patrimônio Mundial da UNESCO, com arquitetura colonial, museus e vida noturna vibrante.",
      image:
        "https://i.pinimg.com/1200x/d8/be/c0/d8bec089b1bfa148398dcec877ec3f85.jpg",
    },
    {
      city: "Samaná",
      title: "Samaná",
      description:
        "Região paradisíaca com praias intocadas, cachoeiras e observação de baleias-jubarte entre janeiro e março.",
      image:
        "https://i.pinimg.com/736x/1d/c6/d2/1dc6d211f54627299433dea46020199f.jpg",
    },
    {
      city: "La Romana",
      title: "La Romana",
      description:
        "Destino de luxo com campos de golfe, resorts e a charmosa vila mediterrânea Altos de Chavón.",
      image:
        "https://i.pinimg.com/736x/e4/c8/36/e4c836183e614018755b097e490c4efb.jpg",
    },
    {
      city: "Bayahibe",
      title: "Bayahibe",
      description:
        "Vila costeira e ponto de partida para excursões à Ilha Saona, uma das praias mais lindas do Caribe.",
      image:
        "https://i.pinimg.com/1200x/b9/db/c3/b9dbc3636694de9235f1fbff467e60a4.jpg",
    },
    {
      city: "Isla Saona",
      title: "Isla Saona",
      description:
        "Ilha tropical protegida no Parque Nacional del Este, famosa por suas praias desertas e águas cristalinas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Isla%20Saona%20Dominican%20Republic.jpg",
    },
    {
      city: "Cabarete",
      title: "Cabarete",
      description:
        "Destino popular entre kitesurfistas e aventureiros, com atmosfera jovem e vibrante.",
      image:
        "https://i.pinimg.com/736x/10/11/0f/10110f0a1c168428b421e39dc406a0c3.jpg",
    },
    {
      city: "Puerto Plata",
      title: "Puerto Plata",
      description:
        "Cidade litorânea com o famoso teleférico do Monte Isabel de Torres e praias banhadas pelo Atlântico.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Puerto%20Plata%20Dominican%20Republic.jpg",
    },
    {
      city: "Jarabacoa",
      title: "Jarabacoa",
      description:
        "Destino de montanha conhecido como a 'Cidade da Eterna Primavera', ideal para trilhas, rafting e cachoeiras.",
      image:
        "https://i.pinimg.com/1200x/73/f4/82/73f482f6909af533d9584e59aa4a0e7b.jpg",
    },
  ],
  Jamaica: [
    {
      city: "Montego Bay",
      title: "Montego Bay",
      description:
        "Destino mais famoso da Jamaica, com resorts luxuosos, praias paradisíacas e o animado Hip Strip.",
      image:
        "https://i.pinimg.com/736x/25/6f/87/256f8712c9e75b351be00a0d4aba05d7.jpg",
    },
    {
      city: "Negril",
      title: "Negril",
      description:
        "Famosa por sua Seven Mile Beach e pores do sol lendários, é o paraíso do descanso e do reggae à beira-mar.",
      image:
        "https://i.pinimg.com/736x/b6/98/f4/b698f49a171df22833e7d2ba79baac61.jpg",
    },
    {
      city: "Ocho Rios",
      title: "Ocho Rios",
      description:
        "Destino turístico com belas cachoeiras, como Dunn’s River Falls, e atividades de aventura.",
      image:
        "https://i.pinimg.com/1200x/81/49/3d/81493d41263555e98eaa73f908fe3894.jpg",
    },
    {
      city: "Kingston",
      title: "Kingston",
      description:
        "Capital cultural da Jamaica, abriga o Museu Bob Marley e o coração pulsante da música reggae.",
      image:
        "https://i.pinimg.com/1200x/d6/42/54/d642541fe22e1177e442fb266f096190.jpg",
    },
    {
      city: "Port Antonio",
      title: "Port Antonio",
      description:
        "Região mais autêntica e verde da Jamaica, com praias tranquilas, cachoeiras e a icônica Blue Lagoon.",
      image:
        "https://i.pinimg.com/736x/f0/33/a5/f033a570d72da9de6e391ddba5d4f308.jpg",
    },
    {
      city: "Treasure Beach",
      title: "Treasure Beach",
      description:
        "Vila costeira relaxada, com pousadas locais e uma atmosfera boêmia e acolhedora.",
      image:
        "https://i.pinimg.com/1200x/13/9f/41/139f41749d1f2b3ef6dbddc67bc3e679.jpg",
    },
    {
      city: "Blue Mountains",
      title: "Blue Mountains",
      description:
        "Cadeia montanhosa coberta por florestas e plantações do famoso café Blue Mountain, ideal para trilhas e vistas panorâmicas.",
      image:
        "https://i.pinimg.com/736x/4c/a7/df/4ca7df87115f431b98ec5dc5bb657527.jpg",
    },
    {
      city: "Runaway Bay",
      title: "Runaway Bay",
      description:
        "Praias calmas, resorts e ótimos pontos de mergulho, ideal para famílias e casais.",
      image:
        "https://i.pinimg.com/1200x/ab/6e/39/ab6e39f7e8fb7973238a50cd6a817598.jpg",
    },
    {
      city: "Nine Mile",
      title: "Nine Mile",
      description:
        "Pequena vila nas montanhas onde nasceu e está enterrado Bob Marley — local de peregrinação para fãs do reggae.",
      image:
        "https://i.pinimg.com/736x/aa/32/74/aa3274ffce997b35ad8c2b943893ac81.jpg",
    },
  ],
  Mexico: [
    {
      city: "Cidade do México",
      title: "Cidade do México",
      description:
        "A capital do país, repleta de museus, arquitetura colonial e o imponente Zócalo.",
      image:
        "https://i.pinimg.com/736x/2d/a9/29/2da929a9aea8dae1c23a4a678d962632.jpg",
    },
    {
      city: "Cancún",
      title: "Cancún",
      description:
        "Destino caribenho famoso por praias paradisíacas, resorts e vida noturna vibrante.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cancun%20Beach.jpg",
    },
    {
      city: "Chichén Itzá",
      title: "Chichén Itzá",
      description:
        "Uma das novas maravilhas do mundo, antiga cidade maia com a icônica pirâmide de Kukulcán.",
      image:
        "https://i.pinimg.com/1200x/5d/b6/f5/5db6f597b4dce453120f8f1645c05d50.jpg",
    },
    {
      city: "Guadalajara",
      title: "Guadalajara",
      description:
        "Berço do mariachi e da tequila, famosa por sua cultura e arquitetura colonial.",
      image:
        "https://i.pinimg.com/1200x/88/8e/ed/888eedf120dc4b78eb517d10518e1ce1.jpg",
    },
    {
      city: "Tulum",
      title: "Tulum",
      description:
        "Cidade costeira com ruínas maias à beira-mar e praias de águas cristalinas.",
      image:
        "https://i.pinimg.com/736x/01/f4/63/01f463391c772f6dd30ebff3390d95f1.jpg",
    },
    {
      city: "Oaxaca",
      title: "Oaxaca",
      description:
        "Região cultural com culinária marcante, artesanato e sítios arqueológicos como Monte Albán.",
      image:
        "https://i.pinimg.com/736x/6d/d5/3c/6dd53c3002ec0eb7b662c382fe8fabd2.jpg",
    },
    {
      city: "Cabo San Lucas",
      title: "Cabo San Lucas",
      description:
        "Famoso pelo arco natural de pedra e resorts de luxo na península da Baixa Califórnia.",
      image:
        "https://i.pinimg.com/1200x/9b/7a/23/9b7a23a69fcbc8088807ac4e9a03c225.jpg",
    },
    {
      city: "Playa del Carmen",
      title: "Playa del Carmen",
      description:
        "Destino do Caribe mexicano com praias de areia branca e mergulho em recifes de corais.",
      image:
        "https://i.pinimg.com/736x/46/8a/9e/468a9eaeb672e08a636e716016235d90.jpg",
    },
    {
      city: "Mérida",
      title: "Mérida",
      description:
        "Capital de Yucatán, conhecida por sua herança colonial espanhola e proximidade com cenotes.",
      image:
        "https://i.pinimg.com/1200x/06/d7/3f/06d73f5634a3dea8d355e3cbdb21f195.jpg",
    },
  ],
  China: [
    {
      city: "Pequim (Beijing)",
      title: "Pequim (Beijing)",
      description:
        "Capital da China e centro histórico do país, lar da Cidade Proibida, do Templo do Céu e da Praça Tiananmen.",
      image:
        "https://i.pinimg.com/1200x/73/e3/56/73e35632ebf2255332d8abd6fbfb400c.jpg",
    },
    {
      city: "Xangai (Shanghai)",
      title: "Xangai (Shanghai)",
      description:
        "A metrópole mais moderna da China, famosa por sua arquitetura futurista, o Bund e o distrito de Pudong.",
      image:
        "https://i.pinimg.com/1200x/ac/1e/35/ac1e3544a885d553411e83642dca02be.jpg",
    },
    {
      city: "Xi’an",
      title: "Xi’an",
      description:
        "Antiga capital imperial e berço da civilização chinesa, famosa pelos Guerreiros de Terracota.",
      image:
        "https://i.pinimg.com/1200x/34/c8/fa/34c8fa78264bfc353d3b20997d86d24a.jpg",
    },
    {
      city: "Grande Muralha da China",
      title: "Grande Muralha da China",
      description:
        "Uma das Sete Maravilhas do Mundo, estendendo-se por milhares de quilômetros através de montanhas e vales.",
      image:
        "https://i.pinimg.com/736x/d8/f5/79/d8f579c57ae24802deea580b1bcef0fe.jpg",
    },
    {
      city: "Guilin",
      title: "Guilin",
      description:
        "Conhecida por suas formações de montanhas cársticas e o belíssimo Rio Li, é um dos destinos naturais mais icônicos da China.",
      image:
        "https://i.pinimg.com/736x/61/ee/bb/61eebb5f6f1ed7286feeb2be45fae73a.jpg",
    },
    {
      city: "Chengdu",
      title: "Chengdu",
      description:
        "Cidade natal dos pandas gigantes e famosa por sua gastronomia picante e atmosfera descontraída.",
      image:
        "https://i.pinimg.com/1200x/08/45/cc/0845cc38e44fa5259e41443e0009601c.jpg",
    },
    {
      city: "Suzhou",
      title: "Suzhou",
      description:
        "Famosa por seus jardins clássicos, canais e arquitetura tradicional, muitas vezes chamada de 'Veneza do Oriente'.",
      image:
        "https://i.pinimg.com/1200x/ea/42/68/ea4268a84d4138d479c92ec2eb688f77.jpg",
    },
    {
      city: "Hong Kong",
      title: "Hong Kong",
      description:
        "Região vibrante com horizonte espetacular, mercados noturnos, templos e o famoso Pico Victoria.",
      image:
        "https://i.pinimg.com/1200x/87/41/88/874188fa18f12a43d9cb0ecdbd032004.jpg",
    },
    {
      city: "Zhangjiajie",
      title: "Zhangjiajie",
      description:
        "Parque Nacional com formações rochosas que inspiraram as montanhas flutuantes de 'Avatar'. Um dos lugares mais surreais da Ásia.",
      image:
        "https://i.pinimg.com/1200x/f0/2e/0d/f02e0d0b46e5c2208d95d7dd781a3b0e.jpg",
    },
  ],
  India: [
    {
      city: "Taj Mahal (Agra)",
      title: "Taj Mahal (Agra)",
      description:
        "Símbolo máximo do amor eterno e uma das Sete Maravilhas do Mundo Moderno, o Taj Mahal é o monumento mais famoso da Índia.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Taj%20Mahal%20in%20Agra%2C%20India.jpg",
    },
    {
      city: "Jaipur",
      title: "Jaipur",
      description:
        "Conhecida como a 'Cidade Rosa', Jaipur encanta com seus palácios, fortes e o impressionante Hawa Mahal.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Hawa%20Mahal%20Jaipur%20India.jpg",
    },
    {
      city: "Nova Délhi",
      title: "Nova Délhi",
      description:
        "Capital vibrante da Índia, repleta de monumentos históricos como o Qutub Minar, o Forte Vermelho e o India Gate.",
      image:
        "https://i.pinimg.com/736x/33/c5/48/33c548e0167435a1555de2e0a3ff8743.jpg",
    },
    {
      city: "Varanasi",
      title: "Varanasi",
      description:
        "Cidade sagrada às margens do Rio Ganges, onde peregrinos realizam rituais milenares — um dos lugares mais espirituais do mundo.",
      image:
        "https://i.pinimg.com/1200x/59/09/8f/59098fabd1513e48f7449ae89f057a7a.jpg",
    },
    {
      city: "Kerala (Alleppey e Munnar)",
      title: "Kerala (Alleppey e Munnar)",
      description:
        "Conhecido como 'o próprio país de Deus', Kerala oferece cruzeiros pelos backwaters e plantações de chá em Munnar.",
      image:
        "https://i.pinimg.com/736x/56/f9/07/56f907b4774df90ee7655843d35beb91.jpg",
    },
    {
      city: "Goa",
      title: "Goa",
      description:
        "Antiga colônia portuguesa, famosa por suas praias tropicais, vida noturna animada e arquitetura colonial.",
      image:
        "https://i.pinimg.com/1200x/3e/4f/86/3e4f864d616e5408035d037c8ca50115.jpg",
    },
    {
      city: "Mumbai (Bombaim)",
      title: "Mumbai (Bombaim)",
      description:
        "Coração econômico e cinematográfico da Índia, lar da Bollywood e de marcos icônicos como o Gateway of India.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Gateway%20of%20India%20Mumbai.jpg",
    },
    {
      city: "Rishikesh",
      title: "Rishikesh",
      description:
        "Capital mundial do yoga, às margens do Ganges e cercada pelos Himalaias — mistura espiritualidade e aventura.",
      image:
        "https://i.pinimg.com/1200x/f2/ba/1c/f2ba1cde545fbdc7558cf63616dd8294.jpg",
    },
    {
      city: "Amritsar",
      title: "Amritsar",
      description:
        "Lar do Templo Dourado, o santuário mais sagrado do Sikhismo e um dos lugares mais pacíficos e belos da Índia.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Golden%20Temple%20Amritsar%20India.jpg",
    },
  ],
  Thailand: [
    {
      city: "Bangkok",
      title: "Bangkok",
      description:
        "A capital tailandesa combina templos espetaculares como o Wat Arun e o Grand Palace com arranha-céus modernos e mercados flutuantes.",
      image:
        "https://i.pinimg.com/1200x/c3/5b/7a/c35b7a434ab1a8a1ddf7a8c2cf8079d2.jpg",
    },
    {
      city: "Chiang Mai",
      title: "Chiang Mai",
      description:
        "Localizada no norte, é conhecida por seus templos antigos, natureza exuberante e o famoso festival das lanternas Yi Peng.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Wat%20Phra%20That%20Doi%20Suthep%20Chiang%20Mai.jpg",
    },
    {
      city: "Phuket",
      title: "Phuket",
      description:
        "A maior ilha da Tailândia e um dos principais destinos de praia do país, com vida noturna vibrante e resorts luxuosos.",
      image:
        "https://i.pinimg.com/1200x/ab/71/85/ab71853d08e18e48b999f97343b1df7d.jpg",
    },
    {
      city: "Krabi",
      title: "Krabi",
      description:
        "Famosa por suas falésias de calcário, praias paradisíacas e ilhas como Railay Beach e as Phi Phi Islands.",
      image:
        "https://i.pinimg.com/1200x/90/70/03/90700345cefc581242ee79628760a49e.jpg",
    },
    {
      city: "Ayutthaya",
      title: "Ayutthaya",
      description:
        "Antiga capital do Reino do Sião, hoje é um parque histórico com templos e ruínas impressionantes, Patrimônio Mundial da UNESCO.",
      image:
        "https://i.pinimg.com/1200x/6e/b8/3f/6eb83f8eb60e33678f3f853e0fce79c3.jpg",
    },
    {
      city: "Pattaya",
      title: "Pattaya",
      description:
        "Cidade costeira próxima a Bangkok, conhecida por suas praias, vida noturna e esportes aquáticos.",
      image:
        "https://i.pinimg.com/1200x/0a/90/c6/0a90c65a78471a710cf701c460669614.jpg",
    },
    {
      city: "Sukhothai",
      title: "Sukhothai",
      description:
        "Ber��o da primeira capital do antigo Reino de Sião, com ruínas e esculturas budistas em meio a lagos e jardins.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sukhothai%20Historical%20Park%20Thailand.jpg",
    },
    {
      city: "Koh Samui",
      title: "Koh Samui",
      description:
        "Ilha tropical com praias perfeitas, templos budistas e um clima ideal para relaxar ou explorar cachoeiras.",
      image:
        "https://i.pinimg.com/1200x/e6/22/b1/e622b19b34a939afe2c2c7de9c51c8e7.jpg",
    },
  ],
  Indonesia: [
    {
      city: "Ubud",
      title: "Ubud",
      description:
        "Centro cultural e espiritual de Bali, cercado por arrozais, templos e florestas tropicais. Famoso pelo Monkey Forest e seus retiros de yoga.",
      image:
        "https://i.pinimg.com/1200x/2f/3f/9b/2f3f9b9985340dc38c285a27c0991729.jpg",
    },
    {
      city: "Seminyak",
      title: "Seminyak",
      description:
        "Área sofisticada com resorts de luxo, beach clubs, lojas elegantes e uma das melhores cenas gastronômicas da ilha.",
      image:
        "https://i.pinimg.com/736x/f6/a8/d9/f6a8d939570081ba6905c10b8f7225de.jpg",
    },
    {
      city: "Canggu",
      title: "Canggu",
      description:
        "Destino moderno e descontraído, com praias ideais para surfe, cafés estilosos e uma comunidade vibrante de nômades digitais.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/7e/85/a1/finns-beach-party.jpg?w=900&h=500&s=1",
    },
    {
      city: "Uluwatu",
      title: "Uluwatu",
      description:
        "Conhecida por seus penhascos dramáticos, templos sagrados e ondas perfeitas para surfar. O pôr do sol no templo de Uluwatu é lendário.",
      image:
        "https://i.pinimg.com/1200x/10/39/d5/1039d58dc1b28f9f33cf7abd8748edd7.jpg",
    },
    {
      city: "Kuta",
      title: "Kuta",
      description:
        "Um dos destinos mais populares de Bali, com praias animadas, bares e um ambiente jovem e vibrante.",
      image:
        "https://i.pinimg.com/1200x/01/bc/43/01bc43460dd8cc8f1829d46d5a1e4497.jpg",
    },
    {
      city: "Nusa Penida",
      title: "Nusa Penida",
      description:
        "Ilha vizinha de Bali, famosa por suas falésias impressionantes e pela praia em formato de T-Rex em Kelingking Beach.",
      image:
        "https://i.pinimg.com/1200x/4d/35/85/4d358513a3e4729ac28894ddd1b9253a.jpg",
    },
    {
      city: "Mount Batur",
      title: "Mount Batur",
      description:
        "Vulcão ativo em Kintamani, um dos locais mais procurados para trilhas e nasceres do sol panorâmicos sobre o lago.",
      image:
        "https://i.pinimg.com/736x/13/0c/81/130c813304cdb510c7af6b2a9dc9150a.jpg",
    },
    {
      city: "Tanah Lot",
      title: "Tanah Lot",
      description:
        "Templo icônico construído sobre uma formação rochosa à beira-mar, um dos cartões-postais mais conhecidos de Bali.",
      image:
        "https://i.pinimg.com/1200x/c6/bb/f6/c6bbf67e6978d3765a411406fa866444.jpg",
    },
    {
      city: "Jimbaran",
      title: "Jimbaran",
      description:
        "Conhecida por suas praias calmas, resorts de luxo e restaurantes à beira-mar que servem frutos do mar ao pôr do sol.",
      image:
        "https://i.pinimg.com/1200x/80/f4/67/80f46799e77e8f4ed96572e5a432faee.jpg",
    },
  ],
  Malaysia: [
    {
      city: "Kuala Lumpur",
      title: "Kuala Lumpur",
      description:
        "A capital da Malásia é um centro cosmopolita famoso pelas Torres Petronas, mercados vibrantes e gastronomia de rua espetacular.",
      image:
        "https://i.pinimg.com/1200x/be/b5/c2/beb5c20d3379476696a237da0b296824.jpg",
    },
    {
      city: "Penang (George Town)",
      title: "Penang (George Town)",
      description:
        "Patrimônio Mundial da UNESCO, George Town é conhecida por sua arquitetura colonial, arte de rua e uma das melhores culinárias da Ásia.",
      image:
        "https://i.pinimg.com/1200x/60/bd/7d/60bd7dc5c7b69230db6f6c0382b43285.jpg",
    },
    {
      city: "Langkawi",
      title: "Langkawi",
      description:
        "Arquipélago de 99 ilhas com praias paradisíacas, florestas tropicais e o famoso Sky Bridge com vistas deslumbrantes.",
      image:
        "https://i.pinimg.com/1200x/da/51/4b/da514b2e27953b2d26d1696f7f67104a.jpg",
    },
    {
      city: "Cameron Highlands",
      title: "Cameron Highlands",
      description:
        "Região montanhosa coberta por plantações de chá, morangos e vilas coloniais — um refúgio fresco nas alturas.",
      image:
        "https://i.pinimg.com/736x/57/66/a4/5766a446c7302f4364e8891f065c88ab.jpg",
    },
    {
      city: "Borneo (Sabah e Sarawak)",
      title: "Borneo (Sabah e Sarawak)",
      description:
        "Selva exuberante com orangotangos, cavernas gigantes e o Monte Kinabalu, o ponto mais alto do Sudeste Asiático.",
      image:
        "https://i.pinimg.com/1200x/02/c1/f3/02c1f3717b39f0b4bea588ec96ce39d6.jpg",
    },
    {
      city: "Malaca (Melaka)",
      title: "Malaca (Melaka)",
      description:
        "Antiga cidade portuária com forte influência portuguesa, holandesa e britânica, repleta de história e charme.",
      image:
        "https://i.pinimg.com/1200x/94/39/2c/94392c85de73f77ad141dda15e1f923a.jpg",
    },
    {
      city: "Perhentian Islands",
      title: "Perhentian Islands",
      description:
        "Ilhas paradisíacas com águas cristalinas, perfeitas para mergulho e snorkeling, ideais para quem busca tranquilidade tropical.",
      image:
        "https://i.pinimg.com/1200x/2c/89/d3/2c89d3d0cf98cd6fe9000d1654d288ff.jpg",
    },
    {
      city: "Kota Kinabalu",
      title: "Kota Kinabalu",
      description:
        "Capital do estado de Sabah, serve como base para explorar parques nacionais, ilhas e o Monte Kinabalu.",
      image:
        "https://i.pinimg.com/1200x/b3/ce/6f/b3ce6fe076c2e33b501936c72a5eb15c.jpg",
    },
    {
      city: "Taman Negara",
      title: "Taman Negara",
      description:
        "Uma das florestas tropicais mais antigas do mundo, ideal para trilhas, passeios de barco e observação da fauna selvagem.",
      image:
        "https://i.pinimg.com/736x/49/86/59/498659fe5417ad658d2b7b3d7343d8ac.jpg",
    },
  ],
  Singapore: [
    {
      city: "Marina Bay Sands",
      title: "Marina Bay Sands",
      description:
        "Complexo icônico com hotel, shopping e o famoso SkyPark, que oferece uma vista panorâmica de Singapura.",
      image:
        "https://i.pinimg.com/736x/01/f6/8d/01f68d1be31ed0207e158230b2535283.jpg",
    },
    {
      city: "Gardens by the Bay",
      title: "Gardens by the Bay",
      description:
        "Parque futurista com estufas gigantes e as famosas árvores metálicas iluminadas à noite.",
      image:
        "https://i.pinimg.com/736x/a9/ff/8e/a9ff8e1de1bf4224891ed285fc773dc6.jpg",
    },
    {
      city: "Sentosa Island",
      title: "Sentosa Island",
      description:
        "Ilha resort com praias artificiais, o Universal Studios Singapore e diversas atrações turísticas.",
      image:
        "https://i.pinimg.com/1200x/37/85/d8/3785d8909b1fb522fe41dc93f0657a93.jpg",
    },
    {
      city: "Merlion Park",
      title: "Merlion Park",
      description:
        "Lar do símbolo de Singapura, a estátua do Merlion, com vista para Marina Bay e o horizonte moderno da cidade.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Merlion%20Park%20Singapore.jpg",
    },
    {
      city: "Chinatown",
      title: "Chinatown",
      description:
        "Bairro histórico vibrante, repleto de templos, mercados e uma mistura única de tradição e modernidade.",
      image:
        "https://i.pinimg.com/1200x/02/48/68/0248683f34c9ed287248a541c5697b92.jpg",
    },
    {
      city: "Little India",
      title: "Little India",
      description:
        "Colorido bairro indiano com templos, lojas e o incrível Mustafa Centre, aberto 24 horas.",
      image:
        "https://i.pinimg.com/1200x/f1/49/20/f14920c3a15c7c0c30d07d631db72af6.jpg",
    },
    {
      city: "Singapore Botanic Gardens",
      title: "Singapore Botanic Gardens",
      description:
        "Patrimônio Mundial da UNESCO com jardins tropicais e o famoso National Orchid Garden.",
      image:
        "https://cdn-imgix.headout.com/mircobrands-content/image/bfd57916ba91b7d3b7029c790eee0eb9-National%20Orchid%20Garden.jpg",
    },
    {
      city: "Clarke Quay",
      title: "Clarke Quay",
      description:
        "Área animada às margens do rio, repleta de bares, restaurantes e vida noturna vibrante.",
      image:
        "https://i.pinimg.com/1200x/df/d3/07/dfd307ae2a0bd3a2111835152cb7924a.jpg",
    },
    {
      city: "Orchard Road",
      title: "Orchard Road",
      description:
        "Principal avenida comercial de Singapura, com shoppings de luxo, cafés e lojas internacionais.",
      image:
        "https://i.pinimg.com/736x/2d/4d/84/2d4d84e1945eac70ad25d0ff36f1df76.jpg",
    },
  ],
  Vietnam: [
    {
      city: "Baía de Ha Long",
      title: "Baía de Ha Long",
      description:
        "Maravilha natural com milhares de ilhas de calcário e águas esverdeadas, considerada Patrimônio Mundial da UNESCO.",
      image:
        "https://i.pinimg.com/736x/72/dd/f6/72ddf698e154e9f8ae6f2e98fb0d3bae.jpg",
    },
    {
      city: "Hanói",
      title: "Hanói",
      description:
        "Capital vibrante que mistura arquitetura colonial francesa, templos antigos e vida urbana caótica e charmosa.",
      image:
        "https://i.pinimg.com/736x/f8/b1/66/f8b166287e51f263e8ce5f05b2c8d181.jpg",
    },
    {
      city: "Cidade de Ho Chi Minh (Saigon)",
      title: "Cidade de Ho Chi Minh (Saigon)",
      description:
        "Centro econômico e cultural do Vietnã, repleto de mercados, museus e arranha-céus modernos.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ho%20Chi%20Minh%20City%20Skyline%20at%20Night.jpg",
    },
    {
      city: "Hoi An",
      title: "Hoi An",
      description:
        "Cidade histórica famosa por suas lanternas coloridas, arquitetura preservada e charme �� beira do rio.",
      image:
        "https://i.pinimg.com/1200x/f5/3d/7d/f53d7d2b3edef915a0baaf49d807a3da.jpg",
    },
    {
      city: "Hue",
      title: "Hue",
      description:
        "Antiga capital imperial, repleta de templos, palácios e a impressionante Cidade Proibida de Hue.",
      image:
        "https://cdn.vietnamisawesome.com/wp-content/uploads/2023/06/best-time-to-visit-hue.jpeg",
    },
    {
      city: "Da Nang",
      title: "Da Nang",
      description:
        "Cidade moderna costeira com belas praias e a famosa Ponte Dourada sustentada por mãos gigantes.",
      image:
        "https://i.pinimg.com/1200x/be/e8/23/bee8230b37a73e30e3a6968c033651db.jpg",
    },
    {
      city: "Sapa",
      title: "Sapa",
      description:
        "Região montanhosa no norte do país, conhecida por seus terraços de arroz e trilhas entre vilarejos étnicos.",
      image:
        "https://i.pinimg.com/1200x/99/8b/52/998b52abe140979b469f69398de52e65.jpg",
    },
    {
      city: "Nha Trang",
      title: "Nha Trang",
      description:
        "Destino de praia popular com águas cristalinas, resorts e excelente mergulho.",
      image:
        "https://i.pinimg.com/1200x/a1/66/bd/a166bd0285f58463143b30176a11e828.jpg",
    },
    {
      city: "Delta do Mekong",
      title: "Delta do Mekong",
      description:
        "Região fértil repleta de canais, vilarejos flutuantes e mercados locais únicos no sul do Vietnã.",
      image:
        "https://i.pinimg.com/736x/37/37/fe/3737feda5378615337fe23ca86d736d4.jpg",
    },
  ],
  Philippines: [
    {
      city: "Palawan",
      title: "Palawan",
      description:
        "Ilha paradisíaca com lagoas turquesa, falésias de calcário e o famoso rio subterrâneo de Puerto Princesa.",
      image:
        "https://i.pinimg.com/1200x/be/83/ab/be83ab4ded682f59870f55af5e626e01.jpg",
    },
    {
      city: "Boracay",
      title: "Boracay",
      description:
        "Pequena ilha famosa por sua praia de areia branca e vida noturna vibrante.",
      image:
        "https://i.pinimg.com/736x/6b/97/74/6b9774920b37a1d25b75df66c8794dbb.jpg",
    },
    {
      city: "Cebu",
      title: "Cebu",
      description:
        "Destino que combina praias, mergulho, cachoeiras e cultura histórica no coração das Filipinas.",
      image:
        "https://i.pinimg.com/1200x/40/e1/d4/40e1d42779fbcc68db4f0fe363f050d5.jpg",
    },
    {
      city: "Manila",
      title: "Manila",
      description:
        "Capital frenética do país, com museus, igrejas históricas e uma mistura fascinante de tradição e modernidade.",
      image:
        "https://i.pinimg.com/1200x/13/b5/0a/13b50a3a04320e326a5ddf0c29ebc2be.jpg",
    },
    {
      city: "Bohol",
      title: "Bohol",
      description:
        "Conhecida pelas Colinas de Chocolate e pelos simpáticos tarsiers, os menores primatas do mundo.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Chocolate%20Hills%20Bohol%20Philippines.jpg",
    },
    {
      city: "Siargao",
      title: "Siargao",
      description:
        "Paraíso dos surfistas com ondas perfeitas e lagoas naturais de beleza hipnotizante.",
      image:
        "https://i.pinimg.com/1200x/22/b6/0b/22b60b63d43c29f0ad8b2035d2bb050f.jpg",
    },
    {
      city: "Baguio",
      title: "Baguio",
      description:
        "Cidade nas montanhas de clima ameno, famosa por seus jardins, parques e cultura artística.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Baguio%20City%20Philippines.jpg",
    },
    {
      city: "Vigan",
      title: "Vigan",
      description:
        "Cidade colonial espanhola preservada, com ruas de paralelepípedo e arquitetura histórica.",
      image:
        "https://i.pinimg.com/1200x/e9/8e/2f/e98e2f1ef222a723bcac806743b85d27.jpg",
    },
    {
      city: "Coron",
      title: "Coron",
      description:
        "Destino de mergulho mundialmente famoso, com naufrágios, lagoas secretas e águas cristalinas.",
      image:
        "https://i.pinimg.com/1200x/11/b2/26/11b22614a098b6ce9f2daae763b59afe.jpg",
    },
  ],
  "South Korea": [
    {
      city: "Seul",
      title: "Seul",
      description:
        "Capital vibrante com palácios reais, mercados tradicionais, vida noturna intensa e tecnologia por toda parte.",
      image:
        "https://i.pinimg.com/736x/83/89/52/83895264750bf768114d2c65459641db.jpg",
    },
    {
      city: "Busan",
      title: "Busan",
      description:
        "Cidade costeira com belas praias, templos nas montanhas e o famoso mercado de peixes Jagalchi.",
      image:
        "https://i.pinimg.com/736x/39/49/36/39493696161d83eb5bad405a24fe231e.jpg",
    },
    {
      city: "Ilha de Jeju",
      title: "Ilha de Jeju",
      description:
        "Destino natural com cachoeiras, cavernas de lava e o icônico Monte Hallasan, o ponto mais alto do país.",
      image:
        "https://i.pinimg.com/736x/ff/55/d8/ff55d83fb3fc0dfa9a01dca277b5d9cf.jpg",
    },
    {
      city: "Gyeongju",
      title: "Gyeongju",
      description:
        "Antiga capital do reino de Silla, conhecida como o ‘museu sem paredes’ por seus templos e tumbas reais.",
      image:
        "https://i.pinimg.com/1200x/24/38/2d/24382dffdf5cb59a94f89bfd1e7887d0.jpg",
    },
    {
      city: "Incheon",
      title: "Incheon",
      description:
        "Porta de entrada internacional do país, com ilhas, parques temáticos e a moderna Songdo City.",
      image:
        "https://i.pinimg.com/1200x/e0/be/50/e0be50a75952c87d11df49efca205544.jpg",
    },
    {
      city: "Suwon",
      title: "Suwon",
      description:
        "Cidade histórica famosa pela Fortaleza Hwaseong, Patrimônio Mundial da UNESCO.",
      image:
        "https://i.pinimg.com/1200x/85/4e/c9/854ec9409a3d652d3235513c423a3e5f.jpg",
    },
    {
      city: "Andong",
      title: "Andong",
      description:
        "Berço da cultura tradicional coreana, com vilarejos preservados e o festival de máscaras de Hahoe.",
      image:
        "https://i.pinimg.com/736x/ef/2b/37/ef2b37d0e051a8d734ed2a29c4733d95.jpg",
    },
    {
      city: "Gangneung",
      title: "Gangneung",
      description:
        "Cidade costeira famosa pelas praias do Mar do Leste, cafés à beira-mar e esportes de inverno próximos.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/95/e5/06/caption.jpg?w=1400&h=1400&s=1",
    },
  ],
  "Sri Lanka": [
    {
      city: "Colombo",
      title: "Colombo",
      description:
        "Capital vibrante e porta de entrada do país, mistura modernidade, cultura colonial e vida costeira.",
      image:
        "https://i.pinimg.com/736x/39/45/08/3945085935e9557b42f3beb7dba1dd6d.jpg",
    },
    {
      city: "Kandy",
      title: "Kandy",
      description:
        "Cidade sagrada no centro do país, lar do Templo do Dente de Buda e cercada por montanhas verdes.",
      image:
        "https://i.pinimg.com/1200x/4a/a2/a6/4aa2a645fc690426e433979ba11e2c9a.jpg",
    },
    {
      city: "Sigiriya",
      title: "Sigiriya",
      description:
        "Fortaleza rochosa impressionante, Patrimônio Mundial da UNESCO, com jardins e pinturas antigas.",
      image:
        "https://i.pinimg.com/736x/b5/f9/cc/b5f9cce095f1ff6cfa08168801dbe6e5.jpg",
    },
    {
      city: "Ella",
      title: "Ella",
      description:
        "Pequena cidade nas montanhas, famosa por suas paisagens de tirar o fôlego e plantações de chá.",
      image:
        "https://i.pinimg.com/1200x/76/87/14/768714b6a2e2e46875fe132876b83ffc.jpg",
    },
    {
      city: "Galle",
      title: "Galle",
      description:
        "Cidade costeira com uma fortaleza colonial holandesa bem preservada e charme histórico.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/24/05/e0/galle-fort.jpg?w=600&h=400&s=1",
    },
    {
      city: "Nuwara Eliya",
      title: "Nuwara Eliya",
      description:
        "Conhecida como ‘Pequena Inglaterra’, é uma região fria com plantações de chá e arquitetura colonial.",
      image:
        "https://i.pinimg.com/736x/f2/69/3b/f2693b3fc0e98e2a66d43762a8fd764b.jpg",
    },
    {
      city: "Anuradhapura",
      title: "Anuradhapura",
      description:
        "Antiga capital cingalesa, com ruínas de templos, estupas e estátuas de Buda milenares.",
      image:
        "https://i.pinimg.com/1200x/31/d7/c1/31d7c1ab248c72905d3c200e49c028bc.jpg",
    },
    {
      city: "Mirissa",
      title: "Mirissa",
      description:
        "Praia paradisíaca popular por observação de baleias, surf e pôr do sol inesquecível.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mirissa%20Beach%20Sri%20Lanka.jpg",
    },
    {
      city: "Yala National Park",
      title: "Yala National Park",
      description:
        "O parque mais famoso do país, conhecido pela grande população de leopardos e safáris impressionantes.",
      image:
        "https://i.pinimg.com/1200x/77/1e/40/771e403434bf1a5f92397ed4bb8d64b9.jpg",
    },
  ],
  Nepal: [
    {
      city: "Kathmandu",
      title: "Kathmandu",
      description:
        "Capital do Nepal, repleta de templos, stupas, mercados caóticos e rica herança cultural e espiritual.",
      image:
        "https://i.pinimg.com/1200x/52/be/04/52be040af36c41b82eb6c46a819d288b.jpg",
    },
    {
      city: "Pokhara",
      title: "Pokhara",
      description:
        "Cidade à beira do lago Phewa, ponto de partida para trilhas no Annapurna e famosa por suas vistas montanhosas.",
      image:
        "https://i.pinimg.com/1200x/22/6b/a0/226ba05aa857a308b95d8a3758394270.jpg",
    },
    {
      city: "Monte Everest (Região de Khumbu)",
      title: "Monte Everest (Região de Khumbu)",
      description:
        "Lar da montanha mais alta do mundo, com trilhas lendárias e vilas sherpas cheias de cultura.",
      image:
        "https://i.pinimg.com/736x/39/66/70/396670fbe62e0703667391ea71bc3def.jpg",
    },
    {
      city: "Lumbini",
      title: "Lumbini",
      description:
        "Local de nascimento de Buda, Patrimônio Mundial da UNESCO, com templos e jardins sagrados.",
      image:
        "https://i.pinimg.com/736x/1a/6d/c3/1a6dc3a1f3123f3f04d55025ef348b5b.jpg",
    },
    {
      city: "Bhaktapur",
      title: "Bhaktapur",
      description:
        "Cidade medieval bem preservada, famosa por sua arquitetura Newar e praças históricas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Bhaktapur%20Durbar%20Square%20Nepal.jpg",
    },
    {
      city: "Chitwan National Park",
      title: "Chitwan National Park",
      description:
        "Parque nacional com safáris para ver rinocerontes, tigres e elefantes em ambiente natural.",
      image:
        "https://i.pinimg.com/736x/00/de/15/00de15de8584c13456381891b641bc8d.jpg",
    },
    {
      city: "Patan (Lalitpur)",
      title: "Patan (Lalitpur)",
      description:
        "Cidade vizinha a Kathmandu, famosa por suas praças, templos hindus e arte tradicional Newar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Patan%20Durbar%20Square%20Nepal.jpg",
    },
    {
      city: "Nagarkot",
      title: "Nagarkot",
      description:
        "Ponto panorâmico nas montanhas, conhecido por oferecer vistas espetaculares do Himalaia ao amanhecer.",
      image:
        "https://i.pinimg.com/1200x/08/36/36/083636f4f5f0c29a4ec5008f3147da20.jpg",
    },
    {
      city: "Annapurna Circuit",
      title: "Annapurna Circuit",
      description:
        "Uma das trilhas mais famosas do mundo, cruzando vilas montanhosas, templos e paisagens de tirar o fôlego.",
      image:
        "https://i.pinimg.com/736x/c0/78/f0/c078f0b1c4d179849997a55c24ad88f3.jpg",
    },
  ],
  Mongolia: [
    {
      city: "Ulaanbaatar",
      title: "Ulaanbaatar",
      description:
        "Capital da Mongólia, mistura templos budistas, museus e modernidade em meio às montanhas.",
      image:
        "https://i.pinimg.com/1200x/56/20/bc/5620bc15d369ce0a18acf8da87c0cafa.jpg",
    },
    {
      city: "Deserto de Gobi",
      title: "Deserto de Gobi",
      description:
        "Um dos maiores desertos do mundo, famoso por suas dunas, fósseis de dinossauros e paisagens áridas impressionantes.",
      image:
        "https://i.pinimg.com/736x/13/10/80/131080fd199349e36a294c2f58a471e8.jpg",
    },
    {
      city: "Parque Nacional Terelj",
      title: "Parque Nacional Terelj",
      description:
        "Parque próximo a Ulaanbaatar com formações rochosas únicas, rios e tradições nômades vivas.",
      image:
        "https://i.pinimg.com/1200x/a2/28/b1/a228b111e04f9bd9d2bfe9947279d9f6.jpg",
    },
    {
      city: "Lago Khövsgöl",
      title: "Lago Khövsgöl",
      description:
        "Conhecido como o ‘irmão menor do Baikal’, é um lago cristalino cercado por montanhas e florestas.",
      image:
        "https://i.pinimg.com/1200x/36/d7/1c/36d71ce9c508a7279ea05da84f3d40ea.jpg",
    },
    {
      city: "Karakorum",
      title: "Karakorum",
      description:
        "Antiga capital do Império Mongol, abriga ruínas históricas e o famoso mosteiro Erdene Zuu.",
      image:
        "https://i.pinimg.com/1200x/f7/ce/14/f7ce14cc86ac16eb5a7e79a0d5730111.jpg",
    },
    {
      city: "Vale de Orkhon",
      title: "Vale de Orkhon",
      description:
        "Região Patrimônio Mundial da UNESCO com rios, cachoeiras e sítios arqueológicos do Império Mongol.",
      image:
        "https://i.pinimg.com/1200x/8c/59/20/8c5920011876a59eb31f2bb9e3b8e13e.jpg",
    },
    {
      city: "Deserto de Khongoryn Els",
      title: "Deserto de Khongoryn Els",
      description:
        "Famoso por suas enormes dunas de areia que produzem um som peculiar, conhecido como ‘dunas que cantam’.",
      image:
        "https://i.pinimg.com/736x/7c/82/e5/7c82e535f5693cb8ceba06f2904f8490.jpg",
    },
    {
      city: "Tsenkher Hot Springs",
      title: "Tsenkher Hot Springs",
      description:
        "Fontes termais naturais cercadas por montanhas, ideais para relaxar após longas jornadas.",
      image:
        "https://i.pinimg.com/1200x/05/bf/1d/05bf1d7ed1a2aff04decf394ad12e1a8.jpg",
    },
    {
      city: "Altai Tavan Bogd National Park",
      title: "Altai Tavan Bogd National Park",
      description:
        "Parque montanhoso no oeste do país, lar dos picos mais altos da Mongólia e glaciares impressionantes.",
      image:
        "https://i.pinimg.com/1200x/e4/fe/ec/e4feec4fc7ab1dafe9e8f3e38927af20.jpg",
    },
  ],
  Cambodia: [
    {
      city: "Angkor Wat",
      title: "Angkor Wat",
      description:
        "O maior templo religioso do mundo e símbolo do Camboja, famoso por seus entalhes e nasceres do sol mágicos.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Angkor%20Wat%20at%20sunrise.jpg",
    },
    {
      city: "Siem Reap",
      title: "Siem Reap",
      description:
        "Cidade base para explorar Angkor, repleta de cafés, mercados noturnos e vida cultural vibrante.",
      image:
        "https://i.pinimg.com/736x/a7/80/d8/a780d8559074f16f87c23f0d6a9747ce.jpg",
    },
    {
      city: "Phnom Penh",
      title: "Phnom Penh",
      description:
        "Capital do Camboja, combina templos budistas, palácios reais e memoriais da história recente do país.",
      image:
        "https://i.pinimg.com/736x/77/50/f5/7750f57659bbe6ad29add44d31743463.jpg",
    },
    {
      city: "Sihanoukville",
      title: "Sihanoukville",
      description:
        "Cidade costeira com belas praias, ilhas paradisíacas e resorts à beira-mar.",
      image:
        "https://i.pinimg.com/1200x/d2/7d/92/d27d92b9d768a5633e6717fc839a60e3.jpg",
    },
    {
      city: "Koh Rong",
      title: "Koh Rong",
      description:
        "Ilha tropical famosa por suas praias de areia branca, águas cristalinas e vida marinha exuberante.",
      image:
        "https://i.pinimg.com/1200x/f9/31/13/f93113c105c50139131ea81af47ed403.jpg",
    },
    {
      city: "Battambang",
      title: "Battambang",
      description:
        "Cidade charmosa com arquitetura colonial francesa, templos antigos e o famoso Bamboo Train.",
      image:
        "https://i.pinimg.com/736x/c7/b5/1e/c7b51ea0d76bdc6df3369a1d1169203c.jpg",
    },
    {
      city: "Kampot",
      title: "Kampot",
      description:
        "Cidade ribeirinha conhecida por sua atmosfera tranquila, plantações de pimenta e vistas do monte Bokor.",
      image:
        "https://i.pinimg.com/736x/67/7d/93/677d931368d881382d9bc82c0e822427.jpg",
    },
    {
      city: "Kep",
      title: "Kep",
      description:
        "Antiga estância litorânea francesa famosa por seus frutos do mar, especialmente o caranguejo com pimenta de Kampot.",
      image:
        "https://i.pinimg.com/1200x/3b/dd/c6/3bddc6a2f341ed20962fe6b9fb2540dd.jpg",
    },
    {
      city: "Tonlé Sap",
      title: "Tonlé Sap",
      description:
        "O maior lago do Sudeste Asiático, abriga vilas flutuantes e comunidades que vivem em harmonia com o ciclo das águas.",
      image:
        "https://i.pinimg.com/1200x/ab/b4/ae/abb4aece7138c4fd39928001d903203e.jpg",
    },
  ],
  Laos: [
    {
      city: "Luang Prabang",
      title: "Luang Prabang",
      description:
        "Patrimônio Mundial da UNESCO, esta cidade encantadora combina templos dourados, arquitetura colonial e o ritual diário dos monges budistas.",
      image:
        "https://i.pinimg.com/736x/85/5a/26/855a26fd7a3eb1800100cd12aa706325.jpg",
    },
    {
      city: "Vientiane",
      title: "Vientiane",
      description:
        "A capital do Laos oferece uma mistura relaxante de cultura budista, cafés à beira do rio Mekong e o icônico monumento Pha That Luang.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pha%20That%20Luang%20Vientiane.jpg",
    },
    {
      city: "Vang Vieng",
      title: "Vang Vieng",
      description:
        "Destino de aventura e natureza, famoso por seus rios, cavernas e formações cársticas cercadas por campos de arroz.",
      image:
        "https://ychef.files.bbci.co.uk/1280x720/p0k70kbw.jpg",
    },
    {
      city: "Plain of Jars (Planície dos Jarros)",
      title: "Plain of Jars (Planície dos Jarros)",
      description:
        "Sítio arqueológico misterioso com centenas de jarros de pedra milenares espalhados por colinas na região de Phonsavan.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/20171115_Plain_of_Jars_Site_1_Laos_2521_DxO.jpg",
    },
    {
      city: "Pakse",
      title: "Pakse",
      description:
        "Porta de entrada para o planalto de Bolaven, conhecido por suas cachoeiras espetaculares e plantações de café.",
      image:
        "https://static.rondreis.nl/rondreis-storage-production/media-22459-laos-vang-vieng-rivier-1-jpg/w640xh480/eyJidWNrZXQiOiJyb25kcmVpcy1zdG9yYWdlLXByb2R1Y3Rpb24iLCJrZXkiOiJtZWRpYVwvMjI0NTlcL0xhb3MtVmFuZy1WaWVuZy1yaXZpZXItMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo0ODB9fX0=",
    },
    {
      city: "Bolaven Plateau",
      title: "Bolaven Plateau",
      description:
        "Região montanhosa com clima ameno, cachoeiras imponentes e fazendas de café — um refúgio natural e sereno.",
      image:
        "https://i.pinimg.com/1200x/36/18/65/361865414837c0d6c1b7938c92771cc8.jpg",
    },
    {
      city: "Si Phan Don (4.000 Ilhas)",
      title: "Si Phan Don (4.000 Ilhas)",
      description:
        "Conjunto de ilhas no rio Mekong, com vilarejos tranquilos, cachoeiras e botes para avistar golfinhos de água doce.",
      image:
        "https://www.holidify.com/images/bgImages/SI-PHAN-DON.jpg",
    },
    {
      city: "Wat Phou",
      title: "Wat Phou",
      description:
        "Antigo templo Khmer em Champasak, anterior a Angkor Wat, com vistas magníficas e importância espiritual milenar.",
      image:
        "https://i.pinimg.com/736x/c9/dd/69/c9dd6901fc50e7f2384618ee227c0b0b.jpg",
    },
    {
      city: "Muang Ngoi Neua",
      title: "Muang Ngoi Neua",
      description:
        "Vila isolada acessível apenas de barco, rodeada por montanhas e rios, ideal para trilhas e imersão na vida rural laociana.",
      image:
        "https://i.pinimg.com/1200x/0b/5d/93/0b5d93d31c1196c381aefddad8d3bfb9.jpg",
    },
  ],
  Japan: [
    {
      city: "Tóquio",
      title: "Tóquio",
      description:
        "A capital do Japão é uma metrópole vibrante, onde a tecnologia futurista encontra tradições antigas. Destaques incluem Shibuya, Akihabara e o Templo Senso-ji em Asakusa.",
      image:
        "https://i.pinimg.com/1200x/51/69/ee/5169ee3fadd7915d8b5c7e3b55f745e7.jpg",
    },
    {
      city: "Quioto",
      title: "Quioto",
      description:
        "Antiga capital imperial, repleta de templos, jardins e gueixas. O Templo Kinkaku-ji e o Santuário Fushimi Inari são ícones imperdíveis.",
      image:
        "https://i.pinimg.com/736x/55/13/79/5513790fb957b84d6bedd845318e87ee.jpg",
    },
    {
      city: "Osaka",
      title: "Osaka",
      description:
        "Cidade animada conhecida por sua comida de rua, vida noturna e o impressionante Castelo de Osaka.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Osaka%20Castle%20Japan.jpg",
    },
    {
      city: "Monte Fuji",
      title: "Monte Fuji",
      description:
        "O símbolo mais famoso do Japão, uma montanha sagrada e Patrimônio Mundial da UNESCO, cercada por lagos e trilhas de tirar o fôlego.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Fuji%20from%20Lake%20Kawaguchi.jpg",
    },
    {
      city: "Nara",
      title: "Nara",
      description:
        "Primeira capital permanente do Japão, famosa pelos cervos sagrados e pelo Templo Todai-ji, que abriga um dos maiores Budas de bronze do mundo.",
      image:
        "https://i.pinimg.com/736x/a8/7a/1f/a87a1f312abda9075b202d31ff4db82e.jpg",
    },
    {
      city: "Hiroshima",
      title: "Hiroshima",
      description:
        "Cidade símbolo da paz, com o Parque Memorial e o Museu da Bomba Atômica, além do santuário flutuante de Itsukushima na ilha de Miyajima.",
      image:
        "https://i.pinimg.com/736x/ca/b3/98/cab398f885470b70f20395694c05c752.jpg",
    },
    {
      city: "Hakone",
      title: "Hakone",
      description:
        "Destino popular por suas águas termais, vistas do Monte Fuji e o Lago Ashi com seu icônico portal torii vermelho.",
      image:
        "https://i.pinimg.com/1200x/3c/a9/80/3ca980a464054f6bb2bfe59f3fd8f975.jpg",
    },
    {
      city: "Sapporo",
      title: "Sapporo",
      description:
        "Capital da ilha de Hokkaido, famosa pelo Festival da Neve, cervejas e pelas montanhas perfeitas para esportes de inverno.",
      image:
        "https://i.pinimg.com/1200x/64/89/86/648986498901a73ca08f9d91872566c9.jpg",
    },
    {
      city: "Okinawa",
      title: "Okinawa",
      description:
        "Arquipélago tropical com praias paradisíacas, cultura própria e heranças do antigo Reino Ryukyu.",
      image:
        "https://i.pinimg.com/1200x/66/3b/d7/663bd7a5bb1c9c5ef355a242faa5b28c.jpg",
    },
  ],
  "South Africa": [
    {
      city: "Cidade do Cabo (Cape Town)",
      title: "Cidade do Cabo (Cape Town)",
      description:
        "Uma das cidades mais bonitas do mundo, com o icônico Monte Table, praias incríveis e o vibrante V&A Waterfront.",
      image:
        "https://i.pinimg.com/736x/0f/93/99/0f939935ab953afeadbf76bec2066e78.jpg",
    },
    {
      city: "Parque Nacional Kruger",
      title: "Parque Nacional Kruger",
      description:
        "Um dos maiores e mais famosos parques de safári da África, lar dos Big Five e diversas espécies selvagens.",
      image:
        "https://i.pinimg.com/1200x/67/c4/e8/67c4e87845e323bd4f9b7a1cec99fd3e.jpg",
    },
    {
      city: "Johannesburgo",
      title: "Johannesburgo",
      description:
        "Centro econômico e cultural do país, com o Museu do Apartheid e o bairro moderno de Sandton.",
      image:
        "https://i.pinimg.com/1200x/e3/c9/5d/e3c95d5e09b310feb3ef3421021285f2.jpg",
    },
    {
      city: "Pretória",
      title: "Pretória",
      description:
        "Capital administrativa com belas avenidas floridas de jacarandás e marcos históricos importantes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pretoria%20Union%20Buildings.jpg",
    },
    {
      city: "Garden Route",
      title: "Garden Route",
      description:
        "Rota cênica ao longo da costa sul, com paisagens deslumbrantes, penhascos e florestas tropicais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Garden%20Route%20South%20Africa.jpg",
    },
    {
      city: "Durban",
      title: "Durban",
      description:
        "Cidade litorânea com praias douradas, clima tropical e uma mistura única de culturas africanas e indianas.",
      image:
        "https://i.pinimg.com/1200x/95/49/c7/9549c749ce2caf2699cc09009597a8e2.jpg",
    },
    {
      city: "Blyde River Canyon",
      title: "Blyde River Canyon",
      description:
        "Um dos maiores cânions do mundo, conhecido por suas formações rochosas impressionantes e vistas panorâmicas.",
      image:
        "https://i.pinimg.com/1200x/80/fa/b2/80fab28babe36dde4bbd686dda355730.jpg",
    },
    {
      city: "Stellenbosch",
      title: "Stellenbosch",
      description:
        "Região vinícola de prestígio próxima à Cidade do Cabo, com belas paisagens e degustações de vinhos premiados.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Stellenbosch%20Vineyards.jpg",
    },
    {
      city: "Robben Island",
      title: "Robben Island",
      description:
        "Ilha histórica onde Nelson Mandela ficou preso por 18 anos, hoje Patrimônio Mundial da UNESCO.",
      image:
        "https://i.pinimg.com/736x/1f/bb/a2/1fbba2f24a031fa06243ae337b1fc580.jpg",
    },
  ],
  Morocco: [
    {
      city: "Marrakech",
      title: "Marrakech",
      description:
        "Conhecida como a 'Cidade Vermelha', Marrakech encanta com sua medina vibrante, o mercado Jemaa el-Fna e os Jardins Majorelle.",
      image:
        "https://i.pinimg.com/1200x/e5/c9/fa/e5c9fa20ed67c26f31dd33528bb22d88.jpg",
    },
    {
      city: "Casablanca",
      title: "Casablanca",
      description:
        "A maior cidade do país, moderna e cosmopolita, famosa pela Mesquita Hassan II e pela atmosfera à beira-mar.",
      image:
        "https://i.pinimg.com/736x/26/83/70/26837083a6d1f0a8da528bda9f51ad17.jpg",
    },
    {
      city: "Fez (Fès)",
      title: "Fez (Fès)",
      description:
        "Antiga capital imperial e centro espiritual do Marrocos, com uma das medinas mais bem preservadas do mundo islâmico.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Fes%20medina.jpg",
    },
    {
      city: "Chefchaouen",
      title: "Chefchaouen",
      description:
        "A famosa 'Cidade Azul', com ruas e casas pintadas em tons de azul nas montanhas do Rif — um dos lugares mais fotogênicos do mundo.",
      image:
        "https://i.pinimg.com/1200x/57/9e/61/579e617c37a63bbfad2370b4924cf91c.jpg",
    },
    {
      city: "Deserto do Saara (Merzouga)",
      title: "Deserto do Saara (Merzouga)",
      description:
        "O deserto mais famoso do mundo, com dunas douradas, passeios de camelo e noites estreladas inesquecíveis.",
      image:
        "https://i.pinimg.com/1200x/af/99/13/af9913985d2d52f76e896eb344993e49.jpg",
    },
    {
      city: "Rabat",
      title: "Rabat",
      description:
        "Capital do país, com belos jardins, o Kasbah dos Oudaias e o majestoso Mausoléu de Mohammed V.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Hassan%20Tower%20Rabat.jpg",
    },
    {
      city: "Essaouira",
      title: "Essaouira",
      description:
        "Charmosa cidade costeira com muralhas, vento constante ideal para kitesurf e um centro histórico tombado pela UNESCO.",
      image:
        "https://i.pinimg.com/1200x/08/9c/69/089c6972f154397e810def6524f89f7b.jpg",
    },
    {
      city: "Ouarzazate",
      title: "Ouarzazate",
      description:
        "Conhecida como a 'Porta do Deserto', abriga estúdios de cinema e a famosa kasbah de Aït Benhaddou, Patrimônio Mundial.",
      image:
        "https://i.pinimg.com/1200x/6b/07/95/6b079573270d9d121f4e54719f8a9e84.jpg",
    },
    {
      city: "Vale do Dades",
      title: "Vale do Dades",
      description:
        "Um dos vales mais espetaculares do Atlas, com cânions, vilas berberes e estradas cênicas.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtf9z7JPPoWnE-gLAX2GdsqeU4ctzaibKSHYWaxF8FnKVQ1s1ktTduV5SOIAdybtU1RjA&usqp=CAU",
    },
  ],
  Egypt: [
    {
      city: "Cairo",
      title: "Cairo",
      description:
        "A vibrante capital egípcia, onde o antigo e o moderno se encontram. É o ponto de partida para visitar as Pirâmides de Gizé e o Museu Egípcio.",
      image:
        "https://i.pinimg.com/736x/41/62/08/416208aeaab12c38c9107a3562306d48.jpg",
    },
    {
      city: "Pirâmides de Gizé",
      title: "Pirâmides de Gizé",
      description:
        "O símbolo máximo do Egito, abrigando as Pirâmides de Quéops, Quéfren e Miquerinos, além da ic��nica Esfinge.",
      image:
        "https://i.pinimg.com/736x/55/5a/77/555a77d7ff0088c55932da65820755d2.jpg",
    },
    {
      city: "Luxor",
      title: "Luxor",
      description:
        "Conhecida como o maior museu a céu aberto do mundo, com templos grandiosos como Karnak e Luxor, além do Vale dos Reis.",
      image:
        "https://www.civitatis.com/f/egipto/egipto/guia/luxor-m.jpg",
    },
    {
      city: "Aswan",
      title: "Aswan",
      description:
        "Cidade ás margens do Nilo, famosa pela represa, ilhas pitorescas e o impressionante Templo de Philae.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Philae%20Temple%20Aswan.jpg",
    },
    {
      city: "Abu Simbel",
      title: "Abu Simbel",
      description:
        "Templos monumentais construídos por Ramsés II, esculpidos na rocha e alinhados com o sol de forma precisa.",
      image:
        "https://i.pinimg.com/736x/6a/34/40/6a344021469a92bd6d7a0a04b4c95781.jpg",
    },
    {
      city: "Alexandria",
      title: "Alexandria",
      description:
        "Cidade histórica à beira do Mediterrâneo, famosa pela antiga Biblioteca de Alexandria e o moderno Museu Nacional.",
      image:
        "https://i.pinimg.com/736x/db/4c/d6/db4cd6841a5cd7ebbfc47af20e38ce81.jpg",
    },
    {
      city: "Sharm El Sheikh",
      title: "Sharm El Sheikh",
      description:
        "Destino paradisíaco no Mar Vermelho, conhecido por seus resorts de luxo e mergulhos espetaculares em recifes de corais.",
      image:
        "https://i.pinimg.com/1200x/3f/c3/f5/3fc3f5b2a0a6a0a1631f190c8dbb28c2.jpg",
    },
    {
      city: "Hurghada",
      title: "Hurghada",
      description:
        "Outra joia do Mar Vermelho, com praias cristalinas, esportes aquáticos e vida noturna vibrante.",
      image:
        "https://i.pinimg.com/736x/b3/67/0f/b3670f261cea1e5f3b15e920b914a1bc.jpg",
    },
    {
      city: "Siwa Oasis",
      title: "Siwa Oasis",
      description:
        "Um oásis remoto no deserto ocidental, cercado por palmeiras e lagos salgados, com cultura berbere e ruínas antigas.",
      image:
        "https://i.pinimg.com/1200x/e4/3e/bd/e43ebdb576c0ef4571b50ed49c16e710.jpg",
    },
  ],
  Kenya: [
    {
      city: "Masai Mara",
      title: "Masai Mara",
      description:
        "Uma das reservas de vida selvagem mais famosas do mundo, palco da Grande Migração e lar dos Big Five.",
      image:
        "https://i.pinimg.com/736x/c6/1f/19/c61f19aceaa7daa6b7f266f2bb5360cf.jpg",
    },
    {
      city: "Nairobi",
      title: "Nairobi",
      description:
        "A capital queniana combina vida urbana moderna com natureza selvagem, incluindo o Parque Nacional de Nairobi e o Centro de Girafas.",
      image:
        "https://i.pinimg.com/1200x/8f/6d/c5/8f6dc5dc56c29cd7b725588ead87a321.jpg",
    },
    {
      city: "Mombaça",
      title: "Mombaça",
      description:
        "Cidade costeira histórica banhada pelo Índico, famosa pelas praias de areia branca e a antiga fortaleza portuguesa de Fort Jesus.",
      image:
        "https://lh3.googleusercontent.com/wJVJNCw6H2DUeSdiRUBNMLSoheDjFw-4CqTEH4ojDd2w8mmnZj5jcQkm29o3IAWM2GTuXwBFEPjj2haAAghbx-QIX_zwa14W6m38Fs6PYgv3wZq9WRBi7qNxCApKg32uabYK6Q7bySrJ0Go1RtSjEDq4IQ0EUDpMaAfS6Fd7lpw2I6Pnb1WmHHhT3hWKjtvIgKPXYIsGup96e7-pSfNMADoynmn9ZXzyLw3iXCQ6AR_CfuEnIEw_sNuIT2HGM38YFAfzvP0gXWwSCzccEoDoya1F5tBcpT6V51-bLNRkOIGGSFA1gQ2HaA_2uPsrlhnunotSfeBUL9sCdgOxe88ykJo9Ld3luClb0s1efgeil4yd8kndncCgCON8NdRw1wM2D69UZf8vPGo4iiYA_eM0kUyFwxswJ4eko8cZ9nB2Kjvhh6crPFToq5nDQSn9zyiMxnAJw009pDtpCnuiGKgbe-PzWFG68OO-3JSE4zqTiBBDfIMfukimo4IQhOyiv4uIhzHKB6LXu5zAA1la56DMqmDAllP0NbrBZHLuVtSzQJUBVKppNkqv6wqRaesgNynnhvDRz2cSRiw23oaBxsY7k_hBOlmTyTrf8ozHznLB-A0DCCRBH1jojA=w600-h345-no",
    },
    {
      city: "Lago Nakuru",
      title: "Lago Nakuru",
      description:
        "Conhecido por seus milhares de flamingos e rinocerontes, o lago é um paraíso para observadores de aves e amantes da natureza.",
      image:
        "https://i.pinimg.com/736x/80/17/49/801749f731cd913d85ed34a87c4c330d.jpg",
    },
    {
      city: "Monte Quênia",
      title: "Monte Quênia",
      description:
        "A segunda montanha mais alta da África, oferece trilhas espetaculares, paisagens alpinas e uma experiência mística para aventureiros.",
      image:
        "https://i.pinimg.com/1200x/3c/da/79/3cda7948a463a282db5818bf1ab1f46f.jpg",
    },
    {
      city: "Parque Nacional de Amboseli",
      title: "Parque Nacional de Amboseli",
      description:
        "Local icônico com vistas deslumbrantes do Monte Kilimanjaro e manadas de elefantes caminhando pelas planícies.",
      image:
        "https://i.pinimg.com/736x/80/91/a6/8091a67cb458de766444625887a33366.jpg",
    },
    {
      city: "Lamu",
      title: "Lamu",
      description:
        "Uma ilha histórica com ruas estreitas, arquitetura suahíli e uma atmosfera tranquila à beira do mar.",
      image:
        "https://i.pinimg.com/736x/fe/59/0a/fe590a07d57004e3f95e012351f26973.jpg",
    },
    {
      city: "Tsavo National Park",
      title: "Tsavo National Park",
      description:
        "Um dos maiores parques do mundo, dividido em Tsavo East e West, famoso por seus elefantes cobertos de poeira vermelha.",
      image:
        "https://i.pinimg.com/736x/08/94/f2/0894f20f5530a8604364bfc9a61c29c9.jpg",
    },
    {
      city: "Lago Naivasha",
      title: "Lago Naivasha",
      description:
        "Um belo lago de água doce cercado por colinas e vida selvagem, ideal para passeios de barco e observação de hipopótamos.",
      image:
        "https://i.pinimg.com/1200x/43/16/ed/4316ed0548adc4d01d9399e009872ffc.jpg",
    },
  ],
  Tanzania: [
    {
      city: "Serengeti National Park",
      title: "Serengeti National Park",
      description:
        "Um dos parques mais famosos do mundo, conhecido pela Grande Migração e pela abundância de leões, leopardos e elefantes.",
      image:
        "https://i.pinimg.com/736x/43/80/29/43802997ab25bb8f2c1eb1c8a0e54a60.jpg",
    },
    {
      city: "Monte Kilimanjaro",
      title: "Monte Kilimanjaro",
      description:
        "A montanha mais alta da África, com 5.895 metros de altitude, é um ícone de aventura e paisagens de tirar o fôlego.",
      image:
        "https://i.pinimg.com/1200x/a1/72/90/a172903fc95706b57e7ecb4ea4e3b898.jpg",
    },
    {
      city: "Zanzibar",
      title: "Zanzibar",
      description:
        "Ilha paradisíaca no Oceano Índico, famosa por suas praias de areia branca, águas cristalinas e pela charmosa Stone Town.",
      image:
        "https://i.pinimg.com/1200x/56/4c/f7/564cf7191497eeab3da0d29f6685e259.jpg",
    },
    {
      city: "Ngorongoro Crater",
      title: "Ngorongoro Crater",
      description:
        "Uma cratera vulcânica gigante que abriga uma das maiores concentrações de vida selvagem da África, Patrimônio Mundial da UNESCO.",
      image:
        "https://i.pinimg.com/1200x/fa/6d/9d/fa6d9d99a77d0f51910676f0b494ccf4.jpg",
    },
    {
      city: "Lake Manyara National Park",
      title: "Lake Manyara National Park",
      description:
        "Famoso por seus leões que sobem em árvores e por abrigar uma imensa população de flamingos nas margens do lago.",
      image:
        "https://i.pinimg.com/736x/5d/fa/9f/5dfa9f48973efb3d581aab8283ad0521.jpg",
    },
    {
      city: "Tarangire National Park",
      title: "Tarangire National Park",
      description:
        "Conhecido por seus majestosos baobás e grandes manadas de elefantes, é um dos parques mais pitorescos da Tanzânia.",
      image:
        "https://i.pinimg.com/1200x/65/7b/e1/657be1761dd32244bcf1627e33b323a0.jpg",
    },
    {
      city: "Arusha",
      title: "Arusha",
      description:
        "Cidade vibrante ao pé do Monte Meru, porta de entrada para os safáris do norte e um centro cultural importante.",
      image:
        "https://i.pinimg.com/1200x/af/ea/7b/afea7bf00ad67129fc42fa334be1bb4e.jpg",
    },
    {
      city: "Selous Game Reserve (Nyerere National Park)",
      title: "Selous Game Reserve (Nyerere National Park)",
      description:
        "Uma das maiores reservas de vida selvagem do mundo, com safáris de barco e paisagens intocadas.",
      image:
        "https://i.pinimg.com/1200x/24/8b/a9/248ba9c2c87aad6d87037f605bf4e896.jpg",
    },
    {
      city: "Mafia Island",
      title: "Mafia Island",
      description:
        "Um paraíso para mergulhadores, com recifes de corais coloridos, águas calmas e um ambiente muito mais tranquilo que Zanzibar.",
      image:
        "https://i.pinimg.com/736x/d8/a9/52/d8a95225afd978c1bf7a95c2da37f238.jpg",
    },
  ],
  Tunisia: [
    {
      city: "Túnis",
      title: "Túnis",
      description:
        "A capital do país combina a modernidade com a antiga Medina, repleta de mercados, mesquitas e palácios históricos.",
      image:
        "https://i.pinimg.com/1200x/76/41/40/7641408b9a81f1c0c115cc9a9dfa9283.jpg",
    },
    {
      city: "Cartago",
      title: "Cartago",
      description:
        "Antiga cidade fenícia e romana, Patrimônio Mundial da UNESCO, com ruínas impressionantes e vista para o mar.",
      image:
        "https://i.pinimg.com/1200x/a4/d4/46/a4d44617048281da89db374a4f8505d6.jpg",
    },
    {
      city: "Sidi Bou Said",
      title: "Sidi Bou Said",
      description:
        "Vilarejo costeiro conhecido por suas casas brancas e portas azuis, uma das paisagens mais icônicas da Tunísia.",
      image:
        "https://i.pinimg.com/736x/73/a4/59/73a459bfd36c1425811b077244c2f4a5.jpg",
    },
    {
      city: "Sousse",
      title: "Sousse",
      description:
        "Cidade histórica com uma bela Medina murada, praias mediterrâneas e o imponente Ribat de Sousse.",
      image:
        "https://www.revigorate.com/images/aerial-view-Great-Mosque-of-Sousse.jpg",
    },
    {
      city: "El Djem",
      title: "El Djem",
      description:
        "Lar do espetacular anfiteatro romano, um dos mais bem preservados do mundo e símbolo do passado grandioso da Tunísia.",
      image:
        "https://i.pinimg.com/736x/e3/c1/eb/e3c1eb3a1ce66a730dd08fbde4daefb6.jpg",
    },
    {
      city: "Tozeur",
      title: "Tozeur",
      description:
        "Oásis no deserto do Saara, rodeado por palmeiras e conhecido pelas paisagens surreais e arquitetura de tijolos de barro.",
      image:
        "https://i.pinimg.com/1200x/58/7e/48/587e48d0f2d2664e1c07ff9ab7122311.jpg",
    },
    {
      city: "Douz",
      title: "Douz",
      description:
        "Conhecida como a 'Porta do Saara', é o ponto de partida ideal para expedições de camelo pelas dunas do deserto.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/5a/0b/8c/caption.jpg?w=600&h=400&s=1",
    },
    {
      city: "Kairouan",
      title: "Kairouan",
      description:
        "Cidade sagrada do Islã e Patrimônio Mundial da UNESCO, famosa por sua Grande Mesquita e tapetes tradicionais.",
      image:
        "https://i.pinimg.com/1200x/da/b3/4a/dab34a2f08f6e8fdc6522fb2f0b9e4b6.jpg",
    },
    {
      city: "Djerba",
      title: "Djerba",
      description:
        "Ilha paradisíaca com praias de areia dourada, aldeias brancas e uma rica mistura de culturas árabes, berberes e judaicas.",
      image:
        "https://i.pinimg.com/1200x/e7/1a/df/e71adffee13764b4946e436cc9384b5e.jpg",
    },
  ],
  Namibia: [
    {
      city: "Deserto do Namibe (Namib Desert)",
      title: "Deserto do Namibe (Namib Desert)",
      description:
        "Um dos desertos mais antigos do mundo, com dunas gigantes e paisagens que parecem de outro planeta.",
      image:
        "https://i.pinimg.com/1200x/b2/2e/f9/b22ef932fa4adc872d494c73ba4f5998.jpg",
    },
    {
      city: "Sossusvlei",
      title: "Sossusvlei",
      description:
        "Área icônica do Deserto do Namibe, famosa por suas dunas vermelhas e o surreal Deadvlei, com árvores petrificadas.",
      image:
        "https://i.pinimg.com/736x/5a/35/e7/5a35e7a2033c44c3447f55566bea740c.jpg",
    },
    {
      city: "Parque Nacional Etosha",
      title: "Parque Nacional Etosha",
      description:
        "Um dos melhores lugares da África para safáris, lar de leões, elefantes, rinocerontes e vastos salares brancos.",
      image:
        "https://i.pinimg.com/736x/f7/00/3d/f7003dbdc5cb907e3847dcca94bcb503.jpg",
    },
    {
      city: "Swakopmund",
      title: "Swakopmund",
      description:
        "Charmosa cidade costeira com arquitetura alemã, esportes radicais nas dunas e o encontro entre o deserto e o mar.",
      image:
        "https://i.pinimg.com/1200x/e6/2f/59/e62f591221385638771de4fda5d508b8.jpg",
    },
    {
      city: "Walvis Bay",
      title: "Walvis Bay",
      description:
        "Importante cidade portuária famosa por seus flamingos, golfinhos e cruzeiros pela lagoa.",
      image:
        "https://i.pinimg.com/1200x/d0/0a/cc/d00acc6243e1053ed2481d61de539f97.jpg",
    },
    {
      city: "Windhoek",
      title: "Windhoek",
      description:
        "A capital da Namíbia combina cultura africana e influência germânica, com bons restaurantes e vida urbana tranquila.",
      image:
        "https://i.pinimg.com/1200x/ae/a5/20/aea5208902b254254fb0bb9590a89294.jpg",
    },
    {
      city: "Fish River Canyon",
      title: "Fish River Canyon",
      description:
        "O maior cânion da África, com paisagens imponentes e trilhas desafiadoras ao longo do rio seco.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Fish%20River%20Canyon%20Namibia.jpg",
    },
    {
      city: "Skeleton Coast",
      title: "Skeleton Coast",
      description:
        "Costa desértica e misteriosa repleta de naufrágios, leões-marinhos e um dos ambientes mais selvagens da Terra.",
      image:
        "https://i.pinimg.com/1200x/3a/8b/2e/3a8b2eb4f95b6caafeff2e14d83f0aea.jpg",
    },
    {
      city: "Damaraland",
      title: "Damaraland",
      description:
        "Região montanhosa com formações rochosas, gravuras rupestres milenares e elefantes adaptados ao deserto.",
      image:
        "https://i.pinimg.com/1200x/2e/16/cb/2e16cb84743a6e01d1cb6ac5963dc64e.jpg",
    },
  ],
  Seychelles: [
    {
      city: "Mahé",
      title: "Mahé",
      description:
        "A maior ilha do arquipélago, abriga a capital Victoria, praias deslumbrantes e o Parque Nacional Morne Seychellois.",
      image:
        "https://i.pinimg.com/1200x/7c/29/39/7c29392bdaa44df77bc93992046508aa.jpg",
    },
    {
      city: "Praslin",
      title: "Praslin",
      description:
        "Lar da lendária praia Anse Lazio e do Vallée de Mai, Patrimônio Mundial da UNESCO, onde cresce o coco-de-mer.",
      image:
        "https://i.pinimg.com/1200x/a9/73/54/a97354b36c7e79a0aa372e3937ef0a00.jpg",
    },
    {
      city: "La Digue",
      title: "La Digue",
      description:
        "Famosa pela praia Anse Source d’Argent, com formações graníticas únicas e um ambiente tranquilo sem carros.",
      image:
        "https://i.pinimg.com/736x/07/c7/9a/07c79abd29494d3c47523c5daf448744.jpg",
    },
    {
      city: "Victoria",
      title: "Victoria",
      description:
        "Uma das menores capitais do mundo, cheia de charme local, mercados coloridos e o icônico relógio da torre colonial.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Victoria%20Seychelles.jpg",
    },
    {
      city: "Curieuse Island",
      title: "Curieuse Island",
      description:
        "Ilha próxima de Praslin, conhecida por suas tartarugas gigantes e florestas de manguezais preservadas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Curieuse%20Island%20Seychelles.jpg",
    },
    {
      city: "Silhouette Island",
      title: "Silhouette Island",
      description:
        "Um refúgio natural com trilhas exuberantes, recifes de corais e montanhas cobertas por floresta tropical.",
      image:
        "https://i.pinimg.com/1200x/69/ca/02/69ca023e5d47cf769ad9884a81c9173d.jpg",
    },
    {
      city: "Aldabra Atoll",
      title: "Aldabra Atoll",
      description:
        "Um dos maiores atóis de coral do mundo e Patrimônio Mundial da UNESCO, lar de mais de 100 mil tartarugas gigantes.",
      image:
        "https://i.pinimg.com/736x/4f/d8/73/4fd873d375e268329f780ddd74d49906.jpg",
    },
    {
      city: "Fregate Island",
      title: "Fregate Island",
      description:
        "Uma ilha privada exclusiva, com praias imaculadas e iniciativas fortes de conservação ambiental.",
      image:
        "https://i.pinimg.com/736x/21/c7/48/21c748eb7e390ced5908c7674e3e098d.jpg",
    },
    {
      city: "Bird Island",
      title: "Bird Island",
      description:
        "Um santuário natural que abriga colônias de aves marinhas e oferece uma das melhores experiências de ecoturismo do arquipélago.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Bird%20Island%20Seychelles.jpg",
    },
  ],
  "United Arab Emirates": [
    {
      city: "Dubai",
      title: "Dubai",
      description:
        "O coração pulsante do luxo e da inovação, lar do Burj Khalifa, do deslumbrante Dubai Mall e das ilhas artificiais Palm Jumeirah.",
      image:
        "https://i.pinimg.com/1200x/13/cc/a5/13cca50f76fd036f98e624719482e9bd.jpg",
    },
    {
      city: "Abu Dhabi",
      title: "Abu Dhabi",
      description:
        "A capital do país, combina tradição e modernidade com atrações icônicas como a Mesquita Sheikh Zayed e o Louvre Abu Dhabi.",
      image:
        "https://i.pinimg.com/1200x/f5/c4/66/f5c466285a78c6da817056e181dccfe8.jpg",
    },
    {
      city: "Sharjah",
      title: "Sharjah",
      description:
        "Reconhecida como a capital cultural dos Emirados, oferece museus, arquitetura islâmica autêntica e um rico patrimônio histórico.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sharjah%20Corniche.jpg",
    },
    {
      city: "Al Ain",
      title: "Al Ain",
      description:
        "Conhecida como a 'Cidade Jardim', destaca-se por seus o��sis, o Jebel Hafeet e sítios arqueológicos milenares.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Al%20Ain%20Oasis.jpg",
    },
    {
      city: "Fujairah",
      title: "Fujairah",
      description:
        "Localizada na costa leste, é famosa por suas praias tranquilas, mergulho nos recifes e a histórica Mesquita Al-Bidyah.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Fujairah%20Beach.jpg",
    },
    {
      city: "Ras Al Khaimah",
      title: "Ras Al Khaimah",
      description:
        "Destino de aventura com montanhas, desertos e a tirolesa mais longa do mundo no Jebel Jais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Jebel%20Jais%20Ras%20Al%20Khaimah.jpg",
    },
    {
      city: "Ajman",
      title: "Ajman",
      description:
        "O menor dos emirados, conhecido por suas praias serenas, resorts à beira-mar e atmosfera mais tranquila.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ajman%20Beach.jpg",
    },
    {
      city: "Palm Jumeirah",
      title: "Palm Jumeirah",
      description:
        "A icônica ilha artificial em forma de palmeira, símbolo de Dubai, abriga resorts de luxo como o Atlantis The Palm.",
      image:
        "https://i.pinimg.com/736x/b3/35/f4/b335f481064e2ce9feb0936035d452bc.jpg",
    },
  ],
  Turkey: [
    {
      city: "Istambul",
      title: "Istambul",
      description:
        "Antiga capital dos impérios Bizantino e Otomano, Istambul é uma cidade vibrante que une Europa e Ásia, com ícones como a Basílica de Santa Sofia e a Mesquita Azul.",
      image:
        "https://i.pinimg.com/1200x/b8/90/31/b89031f1b3a95e028a38bd0c0302b867.jpg",
    },
    {
      city: "Capadócia",
      title: "Capadócia",
      description:
        "Região mágica famosa por suas formações rochosas únicas, cidades subterrâneas e passeios de balão ao nascer do sol.",
      image:
        "https://i.pinimg.com/1200x/04/c5/09/04c5090dc897a4f98ac7b5f80d3e0d24.jpg",
    },
    {
      city: "Pamukkale",
      title: "Pamukkale",
      description:
        "Conhecida pelas piscinas termais de travertino branco e pelas ruínas da antiga cidade de Hierápolis.",
      image:
        "https://i.pinimg.com/736x/55/ae/52/55ae527a97faa305bf760be532f1e59f.jpg",
    },
    {
      city: "Antalya",
      title: "Antalya",
      description:
        "Destino mediterrâneo com belas praias, resorts de luxo e o charmoso centro histórico de Kaleiçi.",
      image:
        "https://i.pinimg.com/1200x/c0/04/81/c00481b64e2cb4a70f7a306a09dcb934.jpg",
    },
    {
      city: "Ephesus",
      title: "Ephesus",
      description:
        "Uma das cidades antigas mais bem preservadas do Mediterrâneo, lar do Templo de Ártemis e da Biblioteca de Celso.",
      image:
        "https://i.pinimg.com/1200x/ac/b0/86/acb08602f88fd96980d46570109921d7.jpg",
    },
    {
      city: "Ankara",
      title: "Ankara",
      description:
        "A capital moderna da Turquia, centro político e cultural, onde está o Mausoléu de Atatürk, fundador da república.",
      image:
        "https://i.pinimg.com/736x/8b/26/20/8b2620ebd52fa8d6e6c5c27a61727c97.jpg",
    },
    {
      city: "Bodrum",
      title: "Bodrum",
      description:
        "Cidade costeira glamourosa com mar azul-turquesa, vida noturna animada e o Castelo de São Pedro.",
      image:
        "https://i.pinimg.com/1200x/cd/76/de/cd76def22995d9a7966eeff4dd2b49e9.jpg",
    },
    {
      city: "Göreme",
      title: "Göreme",
      description:
        "Localidade no coração da Capadócia, cercada por vales, cavernas e igrejas esculpidas em pedra.",
      image:
        "https://i.pinimg.com/1200x/10/f3/b2/10f3b2007344b477d945abe6ed8a8b12.jpg",
    },
    {
      city: "Fethiye",
      title: "Fethiye",
      description:
        "Famosa pela praia de Ölüdeniz, uma das mais bonitas do mundo, e pelas trilhas da antiga Rota Lícia.",
      image:
        "https://i.pinimg.com/1200x/0c/f5/bc/0cf5bc16cbee87b1a25c537ce86f25af.jpg",
    },
  ],
  "Saudi Arabia": [
    {
      city: "Riad",
      title: "Riad",
      description:
        "A capital moderna do reino, mistura arranha-céus futuristas com o charme histórico do Forte Masmak e do bairro Diriyah, berço da monarquia saudita.",
      image:
        "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/xlarge/33767fdd87f1fe247b0ce525d4298f1b.jpg",
    },
    {
      city: "Jidá",
      title: "Jidá",
      description:
        "Principal cidade costeira do Mar Vermelho, conhecida pelo calçadão Corniche, pela histórica Al-Balad e pelo icônico King Fahd Fountain.",
      image:
        "https://scth.scene7.com/is/image/scth/jeddah-waterfront-roshn-two:crop-760x570?defaultImage=jeddah-waterfront-roshn-two&wid=1000&hei=750",
    },
    {
      city: "Meca",
      title: "Meca",
      description:
        "Centro espiritual do Islã, abriga a Grande Mesquita e a Caaba, visitadas por milhões de peregrinos todos os anos durante o Hajj.",
      image:
        "https://sacredsites.com/images/middle_east/saudi_arabia/Mecca-Great-Mosque_H_01.webp",
    },
    {
      city: "Medina",
      title: "Medina",
      description:
        "Cidade sagrada que abriga a Mesquita do Profeta Maomé, um dos locais mais reverenciados do mundo islâmico.",
      image:
        "https://visiteomundo.com/wp-content/uploads/2020/09/medina-asia.jpg",
    },
    {
      city: "Abha",
      title: "Abha",
      description:
        "Localizada nas montanhas Asir, oferece clima ameno, paisagens verdes e arquitetura tradicional árabe em vilas como Rijal Alma.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/b1/51/34/cable-car.jpg?w=500&h=-1&s=1",
    },
    {
      city: "Al Khobar",
      title: "Al Khobar",
      description:
        "Cidade moderna à beira do Golfo Pérsico, famosa por seu Corniche, shoppings e o vibrante cenário urbano.",
      image:
        "https://i.pinimg.com/1200x/29/8e/ab/298eab4f9b8fb47ca9a6e48fdabda200.jpg",
    },
    {
      city: "Taif",
      title: "Taif",
      description:
        "Conhecida como a 'Cidade das Rosas', localizada nas montanhas, oferece clima agradável, plantações e festivais florais.",
      image:
        "https://www.remotelands.com/storage/media/5834/conversions/b220506035-banner-size.jpg",
    },
    {
      city: "Deserto do Rub' al Khali",
      title: "Deserto do Rub' al Khali",
      description:
        "O 'Quarto Vazio', uma das maiores extensões de deserto do planeta, oferece paisagens intocadas e experiências de safári únicas.",
      image:
        "https://i.pinimg.com/1200x/e2/4e/80/e24e80027b1f836067fb12870d3dbe50.jpg",
    },
  ],
  Israel: [
    {
      city: "Jerusalém",
      title: "Jerusalém",
      description:
        "Cidade sagrada para três religiões — judaísmo, cristianismo e islamismo — com marcos icônicos como o Muro das Lamentações, a Igreja do Santo Sepulcro e a Cúpula da Rocha.",
      image:
        "https://i.pinimg.com/1200x/77/bd/4b/77bd4bfaff60e9fcb1d1012175a620da.jpg",
    },
    {
      city: "Tel Aviv",
      title: "Tel Aviv",
      description:
        "Centro moderno e vibrante, famosa por suas praias, vida noturna, gastronomia e a arquitetura Bauhaus da Cidade Branca.",
      image:
        "https://t3.ftcdn.net/jpg/02/60/43/28/360_F_260432826_Yikrd4yhTFcTufWjjg36ZJVpl4fI4DsS.jpg",
    },
    {
      city: "Mar Morto",
      title: "Mar Morto",
      description:
        "O ponto mais baixo da Terra, conhecido por suas águas altamente salgadas e propriedades terapêuticas.",
      image:
        "https://i.pinimg.com/1200x/7c/89/7f/7c897f34902042deaaf3001a4f17690d.jpg",
    },
    {
      city: "Nazareth",
      title: "Nazareth",
      description:
        "Importante centro de peregrinação cristã, conhecida como a cidade onde Jesus passou sua infância.",
      image:
        "https://i.pinimg.com/1200x/2a/b0/bc/2ab0bcf58dbf9e2a5158bbb3bccb1984.jpg",
    },
    {
      city: "Haifa",
      title: "Haifa",
      description:
        "Cidade portuária multicultural ao norte, famosa pelos Jardins Bahá’í e vistas panorâmicas do Monte Carmelo.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Bahai%20Gardens%20Haifa.jpg",
    },
    {
      city: "Massada",
      title: "Massada",
      description:
        "Antiga fortaleza no deserto da Judeia, símbolo da resistência judaica, com ruínas impressionantes e vista sobre o Mar Morto.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Masada%20Israel.jpg",
    },
    {
      city: "Eilat",
      title: "Eilat",
      description:
        "Destino litorâneo no Mar Vermelho, famoso por mergulho, resorts e paisagens desérticas ao redor.",
      image:
        "https://i.pinimg.com/736x/81/b8/e0/81b8e0c8e720de11dad7b93323d897f1.jpg",
    },
    {
      city: "Belém",
      title: "Belém",
      description:
        "Local de nascimento de Jesus Cristo, abriga a Bas��lica da Natividade e é um dos centros espirituais mais visitados do mundo.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Church%20of%20the%20Nativity%20Bethlehem.jpg",
    },
    {
      city: "Cesaréia Marétima",
      title: "Cesaréia Marítima",
      description:
        "Cidade antiga fundada por Herodes, com impressionantes ruínas romanas à beira-mar e um anfiteatro preservado.",
      image:
        "https://i.pinimg.com/1200x/02/81/70/028170ddb13c858562129e22ddaf97cc.jpg",
    },
  ],
  Jordan: [
    {
      city: "Petra",
      title: "Petra",
      description:
        "A antiga cidade nabateia esculpida em rocha rosa é uma das 7 Maravilhas do Mundo Moderno, com destaque para o Tesouro (Al-Khazneh).",
      image:
        "https://i.pinimg.com/1200x/64/09/6f/64096f557fec8f808352ca7b52fbf029.jpg",
    },
    {
      city: "Amã",
      title: "Amã",
      description:
        "A capital da Jordânia combina modernidade e história, com o Teatro Romano, a Cidadela e cafés vibrantes no centro da cidade.",
      image:
        "https://i.pinimg.com/1200x/28/61/6c/28616c5aa4a9cd8945522fea0b89df80.jpg",
    },
    {
      city: "Wadi Rum",
      title: "Wadi Rum",
      description:
        "Deserto cinematográfico com paisagens surreais de arenito e granito, cenário de filmes como Lawrence da Arábia e Perdido em Marte.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Wadi%20Rum%20Jordan.jpg",
    },
    {
      city: "Jerash",
      title: "Jerash",
      description:
        "Uma das cidades romanas mais bem preservadas do mundo, com colunas, arcos e teatros que remontam à antiguidade clássica.",
      image:
        "https://i.pinimg.com/1200x/0e/62/7e/0e627ec63c55c017465568eb71536aae.jpg",
    },
    {
      city: "Aqaba",
      title: "Aqaba",
      description:
        "Principal cidade costeira do país, às margens do Mar Vermelho, oferece mergulho, resorts e belas vistas das montanhas do Sinai.",
      image:
        "https://i.pinimg.com/1200x/c5/60/dc/c560dc29f02bd2be4fa1c5dbe1abd951.jpg",
    },
    {
      city: "Madaba",
      title: "Madaba",
      description:
        "Conhecida pelos seus mosaicos bizantinos, incluindo o famoso Mapa de Madaba, o mais antigo mapa cartográfico da Terra Santa.",
      image:
        "https://i.pinimg.com/1200x/14/92/25/1492252e3a28159e7327fa0910dd712b.jpg",
    },
    {
      city: "Monte Nebo",
      title: "Monte Nebo",
      description:
        "Local bíblico de onde, segundo a tradição, Moisés avistou a Terra Prometida; oferece vistas panorâmicas do vale do Jordão.",
      image:
        "https://i.pinimg.com/1200x/04/aa/71/04aa710c86dbcaae73d929adad3d9386.jpg",
    },
    {
      city: "Castelo de Karak",
      title: "Castelo de Karak",
      description:
        "Fortaleza cruzada medieval impressionante, com túneis e muralhas que dominam o Vale do Jordão.",
      image:
        "https://i.pinimg.com/736x/15/c2/57/15c25774d5861d12c255fff45f551b4d.jpg",
    },
  ],
  Oman: [
    {
      city: "Mascate",
      title: "Mascate",
      description:
        "A capital omanita combina tradição e modernidade, com a Grande Mesquita do Sultão Qaboos, o mercado Muttrah Souq e o Palácio Al Alam.",
      image:
        "https://i.pinimg.com/736x/78/a1/dd/78a1ddd108ae2f0fb53cd371ee4b7e6d.jpg",
    },
    {
      city: "Nizwa",
      title: "Nizwa",
      description:
        "Antiga capital do sultanato, famosa por seu imponente forte, o mercado tradicional e as montanhas Hajar ao redor.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Nizwa%20Fort%20Oman.jpg",
    },
    {
      city: "Wahiba Sands",
      title: "Wahiba Sands",
      description:
        "Deserto impressionante de dunas alaranjadas que oferece experiências beduínas e acampamentos sob um céu estrelado inesquecível.",
      image:
        "https://i.pinimg.com/1200x/bb/b5/be/bbb5bec1e66e41565b1fdb65725e9185.jpg",
    },
    {
      city: "Sur",
      title: "Sur",
      description:
        "Cidade costeira histórica famosa pela construção tradicional de barcos dhow e pelas praias do Golfo de Omã.",
      image:
        "https://i.pinimg.com/1200x/22/e2/bc/22e2bcd828200d4895a9d4eb1f4c0548.jpg",
    },
    {
      city: "Salalah",
      title: "Salalah",
      description:
        "Localizada no sul do país, é um oásis tropical com cachoeiras e plantações de incenso, especialmente verdejante durante o monção (Khareef).",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/1d/e7/c7/7f/oman-salalah.jpg",
    },
    {
      city: "Jebel Shams",
      title: "Jebel Shams",
      description:
        "Conhecido como o 'Grand Canyon de Omã', oferece trilhas espetaculares e vistas panorâmicas de tirar o fôlego.",
      image:
        "https://i.pinimg.com/1200x/c4/70/fa/c470fa0bcf201d49b287481d21991f3d.jpg",
    },
    {
      city: "Bahla",
      title: "Bahla",
      description:
        "Cidade histórica cercada por muralhas e lar do Forte de Bahla, Patrimônio Mundial da UNESCO.",
      image:
        "https://i.pinimg.com/736x/78/43/a9/7843a9610f4258f205fc06736be9af24.jpg",
    },
    {
      city: "Wadi Shab",
      title: "Wadi Shab",
      description:
        "Um dos cânions mais belos do país, com trilhas, piscinas naturais e uma caverna escondida com cachoeira.",
      image:
        "https://i.pinimg.com/736x/09/7d/95/097d954401e545ba75ea1f6584263590.jpg",
    },
    {
      city: "Musandam",
      title: "Musandam",
      description:
        "Península montanhosa com fiordes espetaculares que lembram a Noruega, ideal para passeios de barco e mergulho.",
      image:
        "https://i.pinimg.com/1200x/ee/e9/4a/eee94a8f83c0020fcc4e2046c3e24ef3.jpg",
    },
  ],
  Qatar: [
    {
      city: "Doha",
      title: "Doha",
      description:
        "A capital do Qatar é um centro vibrante de cultura e inovação, com o Museu de Arte Islâmica, o Corniche e a icônica skyline futurista.",
      image:
        "https://i.pinimg.com/736x/18/73/75/1873759abb5fcb06ab0986ffb769ce93.jpg",
    },
    {
      city: "The Pearl-Qatar",
      title: "The Pearl-Qatar",
      description:
        "Ilha artificial de luxo com marinas, lojas de grife e restaurantes internacionais, símbolo da modernidade do país.",
      image:
        "https://i.pinimg.com/1200x/c5/a4/e5/c5a4e556ec1eb0187b8503865fd423f9.jpg",
    },
    {
      city: "Souq Waqif",
      title: "Souq Waqif",
      description:
        "Mercado tradicional no coração de Doha, com lojinhas, especiarias, artesanato e cafés típicos que preservam a alma árabe.",
      image:
        "https://i.pinimg.com/1200x/9f/cf/5b/9fcf5bf5f04e806d6f6d5832830ad7be.jpg",
    },
    {
      city: "Katara Cultural Village",
      title: "Katara Cultural Village",
      description:
        "Centro cultural à beira-mar que reúne teatros, galerias, restaurantes e eventos que celebram a herança e a arte do mundo árabe.",
      image:
        "https://i.pinimg.com/1200x/ba/50/b0/ba50b05d8d3254237472aec358cd5e63.jpg",
    },
    {
      city: "Al Zubarah",
      title: "Al Zubarah",
      description:
        "Antiga cidade fortificada e Patrimônio Mundial da UNESCO, importante sítio arqueológico que revela o passado mercantil do país.",
      image:
        "https://i.pinimg.com/736x/03/9d/ee/039dee2b7b5d1976786433145c4586b9.jpg",
    },
    {
      city: "Inland Sea (Khor Al Adaid)",
      title: "Inland Sea (Khor Al Adaid)",
      description:
        "Mar interior rodeado por dunas douradas, um fenômeno natural único acessível apenas por veículos 4x4.",
      image:
        "https://i.pinimg.com/1200x/23/d6/91/23d69164c49e7acf8b7eb74e82e31702.jpg",
    },
    {
      city: "Aspire Park",
      title: "Aspire Park",
      description:
        "Oásis verde em Doha com lagos artificiais, áreas para piquenique e vista para o icônico arranha-céu The Torch.",
      image:
        "https://i.pinimg.com/1200x/ac/42/14/ac42148fcbc0fa07e445bf29aebcbfa4.jpg",
    },
    {
      city: "National Museum of Qatar",
      title: "National Museum of Qatar",
      description:
        "Obra-prima arquitetônica projetada por Jean Nouvel, conta a história e o desenvolvimento do Qatar de forma interativa e imersiva.",
      image:
        "https://i.pinimg.com/1200x/b4/4d/19/b44d19edcfb88599d56c066d335458ea.jpg",
    },
    {
      city: "Al Wakrah",
      title: "Al Wakrah",
      description:
        "Cidade costeira charmosa com praias, museus e o Souq Al Wakrah, uma versão mais tranquila do mercado tradicional de Doha.",
      image:
        "https://i.pinimg.com/1200x/c4/a0/40/c4a040ed9c84224cadd879e8296ecd42.jpg",
    },
  ],
};

// Extra destinations provided by the user (mapped to our Destination type)
const extraRaw: {
  country: string;
  destinations: { name: string; description: string; image: string }[];
}[] = [
  {
    country: "Afghanistan",
    destinations: [
      {
        name: "Band-e Amir National Park",
        description:
          "Lagoas turquesa em um cenário de montanhas—um tesouro natural remoto e hipnotizante.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Band-e+Amir",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Band-e_Amir.jpg",
      },
    ],
  },
  {
    country: "Albania",
    destinations: [
      {
        name: "Berat (Cidade das Mil Janelaas)",
        description:
          "Encantos otomanos e vistas sobre o rio Osum — história gravada em pedra.",
        image: "https://commons.wikimedia.org/wiki/Special:Search?search=Berat",
      },
    ],
  },
  {
    country: "Algeria",
    destinations: [
      {
        name: "Sahara (oasis de Timimoun)",
        description:
          "Dunas infinitas, oasis vermelhos — o deserto que convida à aventura ��pica.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Timimoun",
      },
    ],
  },
  {
    country: "Andorra",
    destinations: [
      {
        name: "Vallnord e Grandvalira",
        description:
          "Montanhas perfeitas para esqui e trilhas — natureza compacta e pura nos Pirineus.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Andorra+mountains",
      },
    ],
  },
  {
    country: "Angola",
    destinations: [
      {
        name: "Parque Nacional da Kissama",
        description:
          "Selva, savana e safáris costeiros — vida selvagem surpreendente em expansão.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Kissama+National+Park",
      }
    ],
  },
  {
    country: "Antigua and Barbuda",
    destinations: [
      {
        name: "Dickenson Bay",
        description:
          "Praias de areia branca e mar cristalino — um paraíso caribenho clássico.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Dickenson+Bay",
      },
    ],
  },
  {
    country: "Argentina",
    destinations: [
      {
        name: "Iguazú Falls",
        description:
          "Uma cortina colossal de água — espetáculo natural que atrai e impressiona.",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/ed/a5/17/foz-do-iguacu.jpg?w=1400&h=800&s=1",
      },
    ],
  },
  {
    country: "Armenia",
    destinations: [
      {
        name: "Mosteiro de Geghard e Templo de Garni",
        description:
          "História esculpida na rocha e templos helenísticos — beleza espiritual e arquitetônica.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Geghard+Monastery",
      },
    ],
  },
  {
    country: "Austria",
    destinations: [
      {
        name: "Viena (palácios e música)",
        description:
          "Cafés elegantes, palácios imperiais e sinfonias — a capital da sofisticação cultural.",
        image:
          "https://i.pinimg.com/736x/fc/15/ce/fc15cee1282097e8665e00b10be034b7.jpg",
      },
    ],
  },
  {
    country: "Azerbaijan",
    destinations: [
      {
        name: "Baku e o Casco Antigo (Icherisheher)",
        description:
          "Combinação futurista de flame towers e ruas medievais — passado e futuro lado a lado.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Baku+Icherisheher",
      },
    ],
  },
  {
    country: "Bahamas",
    destinations: [
      {
        name: "Exuma Cays",
        description:
          "Águas cristalinas, porquinhos nadadores e praias perfeitas — luxo natural caribenho.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Exuma+Cays",
      },
    ],
  },
  {
    country: "Bahrain",
    destinations: [
      {
        name: "Manama e o Forte do Bahrain",
        description:
          "Mercados tradicionais e herança árabe com toques modernos — cultura concentrada.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Bahrain+Fort",
      },
    ],
  },
  {
    country: "Bangladesh",
    destinations: [
      {
        name: "Sundarbans",
        description:
          "Manguezais gigantescos, tigres de bengala e paisagens únicas do delta.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Sundarbans",
      },
    ],
  },
  {
    country: "Barbados",
    destinations: [
      {
        name: "Bathsheba",
        description:
          "Rochas dramáticas e ondas impressionantes — praia fotogênica e rústica.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Bathsheba+Barbados",
      },
    ],
  },
  {
    country: "Belarus",
    destinations: [
      {
        name: "Minsk e a arquitetura Sovietica",
        description:
          "Praças amplas e museus — mistura de história recente e vida urbana emergente.",
        image: "https://commons.wikimedia.org/wiki/Special:Search?search=Minsk",
      },
    ],
  },
  {
    country: "Belize",
    destinations: [
      {
        name: "Great Blue Hole",
        description:
          "Um círculo azul profundo no mar — mergulho entre lendas e formações subaquáticas.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Great+Blue+Hole",
      },
    ],
  },
  {
    country: "Benin",
    destinations: [
      {
        name: "Ouidah e o Caminho dos Escravos",
        description:
          "História poderosa e memória viva — turismo cultural e reflexivo.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Ouidah",
      },
    ],
  },
  {
    country: "Bhutan",
    destinations: [
      {
        name: "Monastério de Paro Taktsang (Ninho do Tigre)",
        description:
          "Um mosteiro pendurado na falésia — espiritualidade e vistas arrebatadoras.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Paro+Taktsang",
      },
    ],
  },
  {
    country: "Bosnia and Herzegovina",
    destinations: [
      {
        name: "Mostar (ponte Stari Most)",
        description:
          "Arquitetura otomana e uma ponte que revive histórias — charme balcânico intenso.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Mostar+Stari+Most",
      },
    ],
  },
  {
    country: "Botswana",
    destinations: [
      {
        name: "Delta do Okavango",
        description:
          "Safáris em canais e ilhas — vida selvagem em estado puro e exclusividade natural.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Okavango+Delta",
      },
    ],
  },
  {
    country: "Brazil",
    destinations: [
      {
        name: "Rio de Janeiro (Cristo Redentor e P��o de Aç��car)",
        description:
          "Praias icônicas, samba e vistas que definem a alma brasileira — pura energia.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Christ+the+Redeemer+Rio",
      },
    ],
  },
  {
    country: "Brunei",
    destinations: [
      {
        name: "Mesquita Sultan Omar Ali Saifuddien",
        description:
          "Opulência arquitetônica à beira-mar — símbolo do patrimônio muçulmano local.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Sultan+Omar+Ali+Saifuddien+Mosque",
      },
    ],
  },
  {
    country: "Bulgaria",
    destinations: [
      {
        name: "Sofia e Mosteiro de Rila",
        description:
          "Igrejas históricas e montanhas próximas — mistura de espiritualidade e trilhas.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Rila+Monastery",
      },
    ],
  },
  {
    country: "Burkina Faso",
    destinations: [
      {
        name: "Bobo-Dioulasso (cultura e música)",
        description:
          "Ritmos, mercados tradicionais e arquitetura africana autêntica.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Bobo-Dioulasso",
      },
    ],
  },
  {
    country: "Burundi",
    destinations: [
      {
        name: "Lago Tanganyika (costa burundesa)",
        description:
          "Águas profundas e vilarejos tranquilos — paisagens lacustres intocadas.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Lake+Tanganyika+Burundi",
      },
    ],
  },
  {
    country: "Cabo Verde",
    destinations: [
      {
        name: "Sal (Praia do Santa Maria)",
        description:
          "Areias douradas e vento perfeito para kitesurf — ilha feita para relaxar.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Santa+Maria+Beach+Sal",
      },
    ],
  },
  {
    country: "Cambodia",
    destinations: [
      {
        name: "Angkor Wat",
        description:
          "Templos monumentais emergindo da selva — herança Khmer que impressiona.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Angkor+Wat",
      },
    ],
  },
];

// Map aliases from provided names to the canonical names used by the world-atlas TopoJSON
const aliasToTopo: Record<string, string> = {
  "Cabo Verde": "Cape Verde",
  Bahamas: "The Bahamas",
};

function normalizeCountryName(name: string) {
  return aliasToTopo[name] || name;
}

function toDestination(d: {
  name: string;
  description: string;
  image: string;
}): Destination {
  return {
    city: d.name,
    title: d.name,
    description: d.description,
    image: d.image,
  };
}

// Build extra destinations keyed by normalized (TopoJSON) country name
const extraByCountry: Record<string, Destination[]> = extraRaw.reduce(
  (acc, item) => {
    const key = normalizeCountryName(item.country);
    const list = item.destinations.map(toDestination);
    acc[key] = (acc[key] || []).concat(list);
    return acc;
  },
  {} as Record<string, Destination[]>,
);

// Merge base and extra, concatenating arrays and de-duplicating by title|city
export const destinationsByCountry: Record<string, Destination[]> = Object.keys(
  {
    ...baseDestinations,
    ...extraByCountry,
  },
).reduce(
  (acc, country) => {
    const merged = [
      ...(baseDestinations[country] || []),
      ...(extraByCountry[country] || []),
    ];
    const seen = new Set<string>();
    acc[country] = merged.filter((d) => {
      const k = `${d.title}|${d.city}`.toLowerCase();
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
    return acc;
  },
  {} as Record<string, Destination[]>,
);

export const brazilRegionDestinations: Record<string, Destination[]> = {
  Norte: [
    {
      city: "Monte Roraima",
      title: "Monte Roraima",
      description:
        "Formação tepui mítica na tríplice fronteira (BR/VE/GY), alvo de trilhas e aventura.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Monte_Roraima%2C_Roraima.JPG",
    },
    {
      city: "Jalapão",
      title: "Jalapão",
      description:
        "Região de dunas, fervedouros e paisagens surreais — queridinha de ecoturistas aventureiros.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Jalap%C3%A3o_-_Tocantins_-_Brasil.jpg",
    },
    {
      city: "Ilha de Marajó",
      title: "Ilha de Marajó",
      description:
        "Maior ilha fluviomarítima do mundo — cultura marajoara, búfalos e praias ribeirinhas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ilha_de_Maraj%C3%B3.jpg",
    },
    {
      city: "Encontro das Águas",
      title: "Encontro das Águas",
      description:
        "Fenômeno onde o Rio Negro e o Solimões correm lado a lado sem se misturar por quilômetros.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Encontro_das_%C3%81guas_-_Manaus.jpg",
    },
    {
      city: "Teatro Amazonas (Manaus)",
      title: "Teatro Amazonas (Manaus)",
      description:
        "Ícone cultural do ciclo da borracha — casa de ��pera histórica e arquitetura impressionante.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Teatro_Amazonas%2C_Manaus_AM.jpg",
    },
    {
      city: "Pico da Neblina",
      title: "Pico da Neblina",
      description:
        "Ponto mais alto do Brasil — destino extremo para quem busca trekking e selva profunda.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pico_da_Neblina.jpg",
    },
    {
      city: "Alter do Chão",
      title: "Alter do Chão",
      description:
        "O famoso 'Caribe Amazônico' — praias de água doce com areias claras e águas cristalinas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Alter_do_Ch%C3%A3o.jpg",
    },
    {
      city: "Praia de Joanes (Ilha de Marajó)",
      title: "Praia de Joanes (Ilha de Marajó)",
      description:
        "Praia ribeirinha em Marajó, conhecida por cenários naturais e ruínas históricas no entorno.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Praia_Joanes.jpg",
    },
    {
      city: "Praia do Pesqueiro (Soure, Marajó)",
      title: "Praia do Pesqueiro (Soure, Marajó)",
      description:
        "Praia rústica e paradisíaca na Ilha de Marajó, destino popular entre visitantes da ilha.",
      image:
        "https://tudosobrepraias.com/wp-content/uploads/2025/05/Praia-do-Pesqueiro-Um-Pedacinho-do-Ceu-768x448.webp",
    },
    {
      city: "Praia de Fazendinha (Macapá)",
      title: "Praia de Fazendinha (Macapá)",
      description:
        "Balneário popular em Macapá, muito frequentado no verão local para banho e lazer.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Fim_de_tarde_na_Praia_de_Fazendinha.jpg",
    },
    {
      city: "Praia / Rio Arari (Cachoeira do Arari, Marajó)",
      title: "Praia / Rio Arari (Cachoeira do Arari, Marajó)",
      description:
        "Áreas de praias e rios em Cachoeira do Arari, com paisagens típicas de Marajó.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Rio_Arari.jpg",
    },
    {
      city: "Praia da Ponta Negra (Manaus)",
      title: "Praia da Ponta Negra (Manaus)",
      description:
        "Orla urbana no Rio Negro, conhecida pelo pôr do sol e infraestrutura turística local.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ponta-Negra-Manaus.jpg",
    },
  ],
  Nordeste: [
    {
      city: "Fernando de Noronha",
      title: "Fernando de Noronha",
      description:
        "Arquipélago paradisíaco com praias de águas cristalinas, vida marinha exuberante e paisagens deslumbrantes.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/91/EDUARDO_MURUCI_-_BAIA_DOS_PORCOS-%28recorte%29.jpg",
    },
    {
      city: "Lençóis Maranhenses",
      title: "Lençóis Maranhenses",
      description:
        "Parque Nacional com dunas de areia branca e lagoas de água doce, criando um cenário único no mundo.",
      image:
        "https://www.gov.br/turismo/pt-br/assuntos/noticias/parque-nacional-dos-lencois-maranhenses-e-reconhecido-como-patrimonio-natural-da-humanidade/CrditoguilhermespenglerShutterstock.png/@@images/5faf9a18-2c4d-49b2-bb40-990f2bb18803.png",
    },
    {
      city: "Chapada Diamantina",
      title: "Chapada Diamantina",
      description:
        "Região montanhosa com cavernas, cachoeiras e trilhas desafiadoras, ideal para ecoturismo.",
      image:
        "https://imgmd.net/images/c_limit%2Cw_1200/v1/guia/1618961/morro-do-pai-inacio.jpg",
    },
    {
      city: "Jericoacoara",
      title: "Jericoacoara",
      description:
        "Vila charmosa com dunas, lagoas e vida noturna animada, localizada no Ceará.",
      image:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRvXMI2A4byc6Uhdb7MQXZeVPFmJucj4Lhxh4yITJAqGqrpJdcOn4A6cMYiwaWBDfEin0XA1UqhXmXB6pHzjDi5lqqIu4ctUAYnmekN3A",
    },
    {
      city: "Porto de Galinhas",
      title: "Porto de Galinhas",
      description:
        "Praia famosa por suas piscinas naturais e rica vida marinha, situada em Pernambuco.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxOfB_oHVlgN2EEgZD26NE2mqvlKQs_AK8S_U40wouz2bF2j19Q7LWAs59hX50u2J_y02ByhFNGKvt6nWCkph5vDbReA9Eys2noL_l4r3sg",
    },
    {
      city: "Morro de São Paulo",
      title: "Morro de São Paulo",
      description:
        "Ilha com praias de águas claras, vida noturna agitada e ambiente descontraído, na Bahia.",
      image:
        "https://magazine.zarpo.com.br/wp-content/uploads/2023/04/Morro-de-Sao-Paulo-2-1.jpg",
    },
    {
      city: "Praia do Francês",
      title: "Praia do Francês",
      description:
        "Praia paradisíaca com águas mornas e tranquilas, ideal para relaxamento e esportes aquáticos.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4IMIHs8HqMClCmJaJRdJG5JVpchLk--7pW3QT1tAnwEpzXmcLxQgTlzxUzA&s",
    },
    {
      city: "Praia de Pajuçara",
      title: "Praia de Pajuçara",
      description:
        "Praia urbana com piscinas naturais acessíveis por jangada, localizada em Maceió, Alagoas.",
      image:
        "https://imgmd.net/images/c_limit%2Cw_800/v1/guia/1574629/praia-de-pajucara.jpg",
    },
    {
      city: "Praia do Forte",
      title: "Praia do Forte",
      description:
        "Praia tranquila com águas claras, ideal para famílias e observação de tartarugas marinhas.",
      image:
        "https://dicasdabahia.com.br/wp-content/uploads/sites/28/2022/04/praia-do-forte-e1649085484252-jpg.webp",
    },
    {
      city: "Praia de Genipabu",
      title: "Praia de Genipabu",
      description:
        "Praia famosa por suas dunas móveis e lagoas, localizada no Rio Grande do Norte.",
      image: "https://i.ytimg.com/vi/5iGb2uFKXTc/sddefault.jpg",
    },
    {
      city: "Praia de Morro Branco",
      title: "Praia de Morro Branco",
      description:
        "Praia com falésias coloridas e águas claras, situada no Ceará.",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2J2BclC62L_S7-atGMXOuWjE-RD_hi4OQce8x5cs2LKqOqM8HKqAGIwu6_A-ZYFqFEjHDLBsstRzDHdGtugQM1N03hGgPgpEEQDD9badtPT4jL373agbLZofYbpPwDAY-nI114wbCmOFu/s1600/plages-pertes-vue.jpg",
    },
    {
      city: "Praia de Carneiros",
      title: "Praia de Carneiros",
      description:
        "Praia paradisíaca com coqueiros e águas mornas, localizada em Tamandaré, Pernambuco.",
      image:
        "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS010o6V46r--L-SzEDBsUaOEcs-hqUgQT8BxY2apujuh_FmglTe6SjBXKPNXmFt9WCAsgPdBnPcWTVBjQZau4Z0kqRr86JGnKFjP_eIrY",
    },
  ],
  "Centro-Oeste": [
    {
      city: "Chapada dos Veadeiros",
      title: "Chapada dos Veadeiros",
      description:
        "Parque nacional com cachoeiras, cânions e trilhas em cerrado preservado.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cachoeira%20Santa%20B%C3%A1rbara%20-%20Chapada%20dos%20Veadeiros.jpg",
    },
    {
      city: "Caldas Novas",
      title: "Caldas Novas",
      description:
        "Maior complexo hidrotermal do mundo, águas quentes e parques aquáticos.",
      image:
        "https://www.gov.br/turismo/pt-br/assuntos/noticias/aguas-termais-saiba-de-onde-vem-as-aguas-aquecidas-da-cidade-de-rio-quente-go/design-sem-nome-50.png/@@images/e64f88d7-f072-4aec-a1c5-77323f8fc010.png",
    },
    {
      city: "Cidade de Goiás (Goiás Velho)",
      title: "Cidade de Goiás (Goiás Velho)",
      description:
        "Patrimônio histórico com arquitetura colonial preservada e museus.",
      image:
        "https://goias.gov.br/cultura/wp-content/uploads/sites/25/2016/08/cidade-de-goias-velho-foto-mantovani-fernandes7730-717.jpg",
    },
    {
      city: "Parque Nacional das Emas",
      title: "Parque Nacional das Emas",
      description:
        "Campos do cerrado, fauna rica e saf��ris noturnos em paisagens únicas.",
      image:
        "https://www.curtamais.com.br/uploads/midias/fc6182536048f9538cc1e609c58f0d14.jpg",
    },
    {
      city: "Cuiabá",
      title: "Cuiabá",
      description:
        "Porta de entrada para o Pantanal e Chapada dos Guimarães; cultura e gastronomia típicas.",
      image:
        "https://m.ahstatic.com/is/image/accorhotels/o-que-fazer-em-cuiaba-guia-completo-de-pontos-turisticos-2024-2:3by2?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.3&wid=335&hei=223&qlt=80",
    },
    {
      city: "Chapada dos Guimarães",
      title: "Chapada dos Guimarães",
      description: "Escarpas, mirantes e a icônica cachoeira Véu de Noiva.",
      image:
        "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/07/o-que-fazer-chapada-dos-guimaraes-dicas-capa.jpg",
    },
    {
      city: "Parque Nacional da Serra da Bodoquena",
      title: "Parque Nacional da Serra da Bodoquena",
      description:
        "Um paraíso escondido no coração do Mato Grosso do Sul, com cachoeiras cristalinas, cânions impressionantes e trilhas que revelam a essência do Cerrado e da Mata Atl��ntica.",
      image:
        "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrmoN67E27g3b7DBRE3UKfz4b3bTUMOPKz9WiDOV7qORKpGYQ-S6ogE8KjZm_Ucssoq5c-2cf0IejSsdfhS0BpAaKM9mlncla5SOLo7hW_4Nvh0xfUvM1_uUS2Mu-KoeZs273dXGsW2Cjsc=s680-w680-h510-rw",
    },
    {
      city: "Nobres (Aquário Encantado)",
      title: "Nobres (Aquário Encantado)",
      description:
        "Rios de águas cristalinas, flutuação e grutas como o Aquário Encantado.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPzHZyXqNRB6dJe7MxcktsqoedFYBNlbeBEepgZ=s680-w680-h510-rw",
    },
    {
      city: "Bonito",
      title: "Bonito",
      description:
        "Grutas e rios transparentes ideais para flutuação e mergulho.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNI5Qn4zkQwHsz-5XBzK628tFvR5Xzj0VE2SKdU=s680-w680-h510-rw",
    },
    {
      city: "Fazenda Ceita Corê",
      title: "Fazenda Ceita Corê",
      description:
        "A ��Terra de Meus Filhos’ oferece um dia completo de aventura e calmaria: trilha entre 7 cachoeiras, nascente cristalina do Rio Chapena, tirolesa, lago para flutuar ou remar, e estrutura acolhedora no receptivo para relaxar.",
      image:
        "https://www.viagensecaminhos.com/wp-content/uploads/2021/06/fazenda-ceita-core-bonito-ms.jpg",
    },
    {
      city: "Campo Grande",
      title: "Campo Grande",
      description:
        "Capital com cultura pantaneira, parques urbanos e boa gastronomia.",
      image:
        "https://wrhotel.com.br/wp-content/uploads/2023/10/parque-das-nacoes-indigenas.jpg",
    },
    {
      city: "Corumbá",
      title: "Corumbá",
      description:
        "Cidade histórica ��s margens do Rio Paraguai, porta de entrada do Pantanal sul.",
      image:
        "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrF9ZYsjRrVy0N1DSm4unipKZ1MUrxWWuf2L-ahk2iQB-cRa6ACP4-9qEJwjsbNue2GmgBb8fuTCPyNDm7fu1O35K5KDq-NSM5KJ9rrEpq9r8BLdqW0zZnrZCX5DgIarsNj0EHEuA=w540-h312-n-k-no",
    },
    {
      city: "Congresso Nacional",
      title: "Congresso Nacional",
      description:
        "Ícone modernista de Oscar Niemeyer e símbolo da capital federal.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Congresso%20Nacional%20Bras%C3%ADlia.jpg",
    },
    {
      city: "Catedral Metropolitana de Brasília",
      title: "Catedral Metropolitana de Brasília",
      description:
        "Obra-prima de Niemeyer com vitrais marcantes e arquitetura singular.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Catedral%20Metropolitana%20de%20Bras%C3%ADlia.jpg",
    },
    {
      city: "Lago Paranoá",
      title: "Lago Paranoá",
      description:
        "Lago urbano para esportes aquáticos, passeios e orlas agradáveis.",
      image:
        "https://www.quintoandar.com.br/guias/wp-content/uploads/2023/04/Lago-Paranoa.jpg",
    },
  ],
  Sudeste: [
    {
      city: "São Paulo (capital)",
      title: "São Paulo (capital)",
      description:
        "O coração pulsante do Brasil, onde cultura, gastronomia e negócios se encontram em uma metrópole vibrante e cosmopolita.",
      image:
        "https://www.gov.br/g20/pt-br/noticias/presente-e-futuro-das-cidades-maior-metropole-das-americas-sao-paulo-recebe-cupula-do-urban-20/@@images/image-2000-d280960f00b6ad7cbaae4cc620d0c389.jpeg",
    },
    {
      city: "Campos do Jordão",
      title: "Campos do Jordão",
      description:
        "A Suíça Brasileira, com clima ameno, arquitetura de estilo europeu e paisagens montanhosas que encantam o visitante.",
      image:
        "https://www.recantodossonhos.com.br/wp-content/uploads/2019/03/face.png",
    },
    {
      city: "Ilhabela",
      title: "Ilhabela",
      description:
        "Um paraíso tropical com praias paradisíacas, trilhas na Mata Atlântica e uma rica cultura caiçara.",
      image:
        "https://mediaim.expedia.com/destination/1/bfb7e46daa73ffe3206abbe43a384354.jpg",
    },
    {
      city: "Rio de Janeiro (capital)",
      title: "Rio de Janeiro (capital)",
      description:
        "Cidade maravilhosa, famosa por suas praias icônicas, o Cristo Redentor e o Pão de Aç��car, além de uma energia contagiante.",
      image:
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/03/1-cristo-redentor.jpg",
    },
    {
      city: "Paraty",
      title: "Paraty",
      description:
        "Uma joia colonial com ruas de pedra, casarões históricos e acesso a ilhas e praias deslumbrantes.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Paraty_05.JPG/1200px-Paraty_05.JPG",
    },
    {
      city: "Arraial do Cabo",
      title: "Arraial do Cabo",
      description:
        "Conhecida como o Caribe brasileiro, com águas cristalinas, praias de areia branca e excelente para mergulho.",
      image:
        "https://imgmd.net/images/v1/guia/1683209/arraial-do-cabo-190-c.jpg",
    },
    {
      city: "Belo Horizonte",
      title: "Belo Horizonte",
      description:
        "Capital de Minas Gerais, famosa por sua culinária, vida noturna e proximidade com cidades históricas.",
      image:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcShxhQ-6Ozrs1PiBmW3-CVCaAAaGCjZRlYWgN-GeshCiHzzgzg-KhPz9soN73UDz786p9n87CSgOl7hukmy77FHA01jXCGaG48ER7BKX7A",
    },
    {
      city: "Búzios",
      title: "Búzios",
      description:
        "Búzios é um destino encantador que combina praias paradisíacas, vida noturna vibrante e charme europeu. Com mais de 20 praias de águas cristalinas e uma atmosfera cosmopolita, é o lugar perfeito para relaxar, praticar esportes aquáticos ou explorar a gastronomia local.",
      image:
        "https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/08/Buzios-RJ-O-que-fazer-Capa.jpg",
    },
    {
      city: "Ouro Preto",
      title: "Ouro Preto",
      description:
        "Cidade histórica com arquitetura colonial preservada, igrejas barrocas e rica história da Inconfid��ncia Mineira.",
      image:
        "https://guiaviajarmelhor.com.br/wp-content/uploads/2023/08/dicas-guia-ouro-preto-mg6.png",
    },
    {
      city: "Capitólio",
      title: "Capitólio",
      description:
        "Conhecida como o 'Mar de Minas', com cânions impressionantes, cachoeiras e o Lago de Furnas.",
      image: "https://imgmd.net/images/v1/guia/1613817/canion-de-furnas.jpg",
    },
    {
      city: "Vitória",
      title: "Vitória",
      description:
        "Capital do Espírito Santo, com belas praias urbanas, rica cultura capixaba e excelente gastronomia.",
      image:
        "https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2018/09/Topo-Vit%C3%B3ria-2.jpg",
    },
    {
      city: "Vila Velha",
      title: "Vila Velha",
      description:
        "Cidade histórica com o Convento da Penha, praias tranquilas e rica tradição cultural.",
      image:
        "https://www.penaestrada.blog.br/wp-content/uploads/2020/12/o-que-fazer-em-vila-velha-09.jpg",
    },
    {
      city: "Guarapari",
      title: "Guarapari",
      description:
        "Famosa por suas praias com areias monazíticas e ��guas terapêuticas, ideal para relaxar.",
      image:
        "https://blog.blablacar.com.br/wp-content/uploads/2023/12/guarapari-es-1.jpg",
    },
    {
      city: "Domingos Martins",
      title: "Domingos Martins",
      description:
        "Cidade serrana com clima europeu, arquitetura de estilo germânico e rica cultura imigrante.",
      image:
        "https://ondeir360.com.br/wp-content/uploads/2024/02/domingos-martins02.jpg",
    },
    {
      city: "Petrópolis",
      title: "Petrópolis",
      description:
        "A Cidade Imperial do Rio de Janeiro, conhecida pelo Palácio Imperial, arquitetura histórica e clima serrano agradável.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/54/63/9d/palacio-quitandinha.jpg?w=1400&h=1400&s=1",
    },
  ],
  Sul: [
    {
      city: "Foz do Iguaçu",
      title: "Foz do Iguaçu",
      description:
        "Um dos destinos mais impressionantes do Brasil, famoso pelas majestosas Cataratas do Iguaçu e pela rica biodiversidade do Parque Nacional.",
      image:
        "https://www.hoteldelreyfoz.com.br/wp-content/uploads/2022/10/Cataratas-do-Iguacu_-min.png",
    },
    {
      city: "Curitiba",
      title: "Curitiba",
      description:
        "Capital elegante com planejamento urbano inovador, o Jardim Botânico e uma cena cultural vibrante que encanta turistas.",
      image: "https://imgmd.net/images/v1/guia/1684234/curitiba-185-c.jpg",
    },
    {
      city: "Ilha do Mel",
      title: "Ilha do Mel",
      description:
        "Ref��gio paradisíaco com praias de águas cristalinas, trilhas ecológicas e clima de natureza preservada.",
      image:
        "https://www.viagensecaminhos.com/wp-content/uploads/2017/08/ilha-do-mel-1.jpg",
    },
    {
      city: "Florianópolis",
      title: "Florianópolis",
      description:
        "A ‘Ilha da Magia��� encanta com praias incríveis, vida noturna animada e natureza exuberante.",
      image:
        "https://maisviagens.net.br/wp-content/uploads/2022/01/FLORIPA.jpg",
    },
    {
      city: "Balneário Camboriú",
      title: "Balneário Camboriú",
      description:
        "Cidade litor��nea famosa por suas praias urbanas, arranha-céus à beira-mar e entretenimento vibrante.",
      image:
        "https://blog.123milhas.com/wp-content/uploads/2022/07/balneario-camboriu-curiosidades-sobre-a-cidade-do-litoral-catarinense-conexao123.jpg",
    },
    {
      city: "Blumenau",
      title: "Blumenau",
      description:
        "Cidade com forte influência germânica, conhecida pelo Oktoberfest e sua arquitetura típica encantadora.",
      image:
        "https://blog.blablacar.com.br/wp-content/uploads/2023/11/blumenau-sc-4.jpg",
    },
    {
      city: "Bombinhas",
      title: "Bombinhas",
      description:
        "Praias cristalinas, mergulho e trilhas naturais fazem desta cidade um destino perfeito para ecoturismo.",
      image:
        "https://roccoimob.com/wp-content/uploads/2025/02/Novo-pier-com-roda-gigante-no-canto-grande-Uma-Nova-Visao-para-o-Turismo-de-Bombinhas-2.jpg",
    },
    {
      city: "Gramado",
      title: "Gramado",
      description:
        "Cidade charmosa de inverno, com arquitetura europeia, eventos natalinos e gastronomia diferenciada.",
      image:
        "https://cdn.folhadomate.com/wp-content/uploads/2020/09/mini_gramado.jpg",
    },
    {
      city: "Canela",
      title: "Canela",
      description:
        "Natureza exuberante com a famosa Cascata do Caracol, trilhas e clima serrano acolhedor.",
      image:
        "https://cdn-clubecandeias.s3.sa-east-1.amazonaws.com/uploads/2016/06/catedral-de-pedra-canela-rs-clube-candeias.jpg",
    },
    {
      city: "Londrina",
      title: "Londrina",
      description:
        "Cidade moderna do Paraná, com parques urbanos, vida cultural intensa e opções de lazer para toda a família.",
      image:
        "https://blog.arboimoveis.com.br/wp-content/uploads/2021/02/londrina.png",
    },
    {
      city: "Guaratuba",
      title: "Guaratuba",
      description:
        "Destino litorâneo encantador no Paraná, com praias de areia fina, águas calmas e natureza preservada. Perfeito para famílias, esportes aquáticos e contato com o ecoturismo, como trilhas e manguezais.",
      image:
        "https://www.viajeparana.com/sites/viaje-parana/arquivos_restritos/files/styles/share/public/imagem/2019-04/baia_de_guaratuba_-_foto_mjnatalino_29.jpg?itok=Z5uV1w37",
    },
    {
      city: "Praia do Rosa",
      title: "Praia do Rosa",
      description:
        "Considerada uma das praias mais belas do Brasil, a Praia do Rosa encanta com suas águas cristalinas, falésias impressionantes e ambiente ideal para surfe, ecoturismo e contato com a natureza. Um verdadeiro paraíso catarinense.",
      image:
        "https://guiaviajarmelhor.com.br/wp-content/uploads/2021/07/praia-do-rosa-sc-3.jpg",
    },
  ],
  "South Africa": [
    {
      city: "Cidade do Cabo (Cape Town)",
      title: "Cidade do Cabo (Cape Town)",
      description:
        "Uma das cidades mais bonitas do mundo, com o icônico Monte Table, praias incríveis e o vibrante V&A Waterfront.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cape%20Town%20aerial%20view.jpg",
    },
    {
      city: "Parque Nacional Kruger",
      title: "Parque Nacional Kruger",
      description:
        "Um dos maiores e mais famosos parques de safári da África, lar dos Big Five e diversas espécies selvagens.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kruger%20National%20Park%20Elephants.jpg",
    },
    {
      city: "Johannesburgo",
      title: "Johannesburgo",
      description:
        "Centro econômico e cultural do país, com o Museu do Apartheid e o bairro moderno de Sandton.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Johannesburg%20skyline%20at%20night.jpg",
    },
    {
      city: "Pretória",
      title: "Pretória",
      description:
        "Capital administrativa com belas avenidas floridas de jacarandás e marcos históricos importantes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pretoria%20Union%20Buildings.jpg",
    },
    {
      city: "Garden Route",
      title: "Garden Route",
      description:
        "Rota cênica ao longo da costa sul, com paisagens deslumbrantes, penhascos e florestas tropicais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Garden%20Route%20South%20Africa.jpg",
    },
    {
      city: "Durban",
      title: "Durban",
      description:
        "Cidade litorânea com praias douradas, clima tropical e uma mistura única de culturas africanas e indianas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Durban%20Beachfront.jpg",
    },
    {
      city: "Blyde River Canyon",
      title: "Blyde River Canyon",
      description:
        "Um dos maiores cânions do mundo, conhecido por suas formações rochosas impressionantes e vistas panorâmicas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Blyde%20River%20Canyon%20South%20Africa.jpg",
    },
    {
      city: "Stellenbosch",
      title: "Stellenbosch",
      description:
        "Região vinícola de prestígio próxima à Cidade do Cabo, com belas paisagens e degustaç��es de vinhos premiados.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Stellenbosch%20Vineyards.jpg",
    },
    {
      city: "Robben Island",
      title: "Robben Island",
      description:
        "Ilha histórica onde Nelson Mandela ficou preso por 18 anos, hoje Patrimônio Mundial da UNESCO.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Robben%20Island%20South%20Africa.jpg",
    },
  ],
  Morocco: [
    {
      city: "Marrakech",
      title: "Marrakech",
      description:
        "Conhecida como a 'Cidade Vermelha', Marrakech encanta com sua medina vibrante, o mercado Jemaa el-Fna e os Jardins Majorelle.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Jemaa%20el-Fna%20square%20Marrakech.jpg",
    },
    {
      city: "Casablanca",
      title: "Casablanca",
      description:
        "A maior cidade do país, moderna e cosmopolita, famosa pela Mesquita Hassan II e pela atmosfera à beira-mar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Hassan%20II%20Mosque%20Casablanca.jpg",
    },
    {
      city: "Fez (Fès)",
      title: "Fez (Fès)",
      description:
        "Antiga capital imperial e centro espiritual do Marrocos, com uma das medinas mais bem preservadas do mundo islâmico.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Fes%20medina.jpg",
    },
    {
      city: "Chefchaouen",
      title: "Chefchaouen",
      description:
        "A famosa 'Cidade Azul', com ruas e casas pintadas em tons de azul nas montanhas do Rif — um dos lugares mais fotogênicos do mundo.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Chefchaouen%20Blue%20City.jpg",
    },
    {
      city: "Deserto do Saara (Merzouga)",
      title: "Deserto do Saara (Merzouga)",
      description:
        "O deserto mais famoso do mundo, com dunas douradas, passeios de camelo e noites estreladas inesquecíveis.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sahara%20Desert%20Merzouga.jpg",
    },
    {
      city: "Rabat",
      title: "Rabat",
      description:
        "Capital do país, com belos jardins, o Kasbah dos Oudaias e o majestoso Mausoléu de Mohammed V.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Hassan%20Tower%20Rabat.jpg",
    },
    {
      city: "Essaouira",
      title: "Essaouira",
      description:
        "Charmosa cidade costeira com muralhas, vento constante ideal para kitesurf e um centro histórico tombado pela UNESCO.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Essaouira%20harbor.jpg",
    },
    {
      city: "Ouarzazate",
      title: "Ouarzazate",
      description:
        "Conhecida como a 'Porta do Deserto', abriga estúdios de cinema e a famosa kasbah de Aït Benhaddou, Patrimônio Mundial.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ait%20Benhaddou%20Ouarzazate.jpg",
    },
    {
      city: "Vale do Dades",
      title: "Vale do Dades",
      description:
        "Um dos vales mais espetaculares do Atlas, com cânions, vilas berberes e estradas cênicas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Dades%20Valley%20Morocco.jpg",
    },
  ],
  Egypt: [
    {
      city: "Cairo",
      title: "Cairo",
      description:
        "A vibrante capital egípcia, onde o antigo e o moderno se encontram. É o ponto de partida para visitar as Pirâmides de Gizé e o Museu Egípcio.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cairo%20Egypt%20skyline.jpg",
    },
    {
      city: "Pirâmides de Gizé",
      title: "Pirâmides de Gizé",
      description:
        "O símbolo máximo do Egito, abrigando as Pir��mides de Quéops, Quéfren e Miquerinos, além da icônica Esfinge.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pyramids%20of%20Giza%20Egypt.jpg",
    },
    {
      city: "Luxor",
      title: "Luxor",
      description:
        "Conhecida como o maior museu a céu aberto do mundo, com templos grandiosos como Karnak e Luxor, além do Vale dos Reis.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Luxor%20Temple%20Egypt.jpg",
    },
    {
      city: "Aswan",
      title: "Aswan",
      description:
        "Cidade às margens do Nilo, famosa pela represa, ilhas pitorescas e o impressionante Templo de Philae.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Philae%20Temple%20Aswan.jpg",
    },
    {
      city: "Abu Simbel",
      title: "Abu Simbel",
      description:
        "Templos monumentais construídos por Ramsés II, esculpidos na rocha e alinhados com o sol de forma precisa.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Abu%20Simbel%20Temples%20Egypt.jpg",
    },
    {
      city: "Alexandria",
      title: "Alexandria",
      description:
        "Cidade histórica à beira do Mediterrâneo, famosa pela antiga Biblioteca de Alexandria e o moderno Museu Nacional.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Alexandria%20Corniche.jpg",
    },
    {
      city: "Sharm El Sheikh",
      title: "Sharm El Sheikh",
      description:
        "Destino paradisíaco no Mar Vermelho, conhecido por seus resorts de luxo e mergulhos espetaculares em recifes de corais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sharm%20El%20Sheikh%20beach.jpg",
    },
    {
      city: "Hurghada",
      title: "Hurghada",
      description:
        "Outra joia do Mar Vermelho, com praias cristalinas, esportes aquáticos e vida noturna vibrante.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Hurghada%20Egypt%20coast.jpg",
    },
    {
      city: "Siwa Oasis",
      title: "Siwa Oasis",
      description:
        "Um oásis remoto no deserto ocidental, cercado por palmeiras e lagos salgados, com cultura berbere e ruínas antigas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Siwa%20Oasis%20Egypt.jpg",
    },
  ],
  Kenya: [
    {
      city: "Masai Mara",
      title: "Masai Mara",
      description:
        "Uma das reservas de vida selvagem mais famosas do mundo, palco da Grande Migração e lar dos Big Five.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Masai%20Mara%20National%20Reserve%20Kenya.jpg",
    },
    {
      city: "Nairobi",
      title: "Nairobi",
      description:
        "A capital queniana combina vida urbana moderna com natureza selvagem, incluindo o Parque Nacional de Nairobi e o Centro de Girafas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Nairobi%20skyline%20Kenya.jpg",
    },
    {
      city: "Mombaça",
      title: "Mombaça",
      description:
        "Cidade costeira histórica banhada pelo Índico, famosa pelas praias de areia branca e a antiga fortaleza portuguesa de Fort Jesus.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mombasa%20Old%20Town.jpg",
    },
    {
      city: "Lago Nakuru",
      title: "Lago Nakuru",
      description:
        "Conhecido por seus milhares de flamingos e rinocerontes, o lago é um paraíso para observadores de aves e amantes da natureza.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Nakuru%20Kenya.jpg",
    },
    {
      city: "Monte Quênia",
      title: "Monte Quênia",
      description:
        "A segunda montanha mais alta da África, oferece trilhas espetaculares, paisagens alpinas e uma experiência mística para aventureiros.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Kenya%20peaks.jpg",
    },
    {
      city: "Parque Nacional de Amboseli",
      title: "Parque Nacional de Amboseli",
      description:
        "Local icônico com vistas deslumbrantes do Monte Kilimanjaro e manadas de elefantes caminhando pelas planícies.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Amboseli%20National%20Park%20Elephants%20and%20Kilimanjaro.jpg",
    },
    {
      city: "Lamu",
      title: "Lamu",
      description:
        "Uma ilha histórica com ruas estreitas, arquitetura suahíli e uma atmosfera tranquila à beira do mar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Lamu%20Island%20Kenya.jpg",
    },
    {
      city: "Tsavo National Park",
      title: "Tsavo National Park",
      description:
        "Um dos maiores parques do mundo, dividido em Tsavo East e West, famoso por seus elefantes cobertos de poeira vermelha.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tsavo%20National%20Park%20Kenya.jpg",
    },
    {
      city: "Lago Naivasha",
      title: "Lago Naivasha",
      description:
        "Um belo lago de água doce cercado por colinas e vida selvagem, ideal para passeios de barco e observação de hipopótamos.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Naivasha%20Kenya.jpg",
    },
  ],
  Tanzania: [
    {
      city: "Serengeti National Park",
      title: "Serengeti National Park",
      description:
        "Um dos parques mais famosos do mundo, conhecido pela Grande Migração e pela abundância de leões, leopardos e elefantes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Serengeti%20National%20Park%20Tanzania.jpg",
    },
    {
      city: "Monte Kilimanjaro",
      title: "Monte Kilimanjaro",
      description:
        "A montanha mais alta da África, com 5.895 metros de altitude, é um ícone de aventura e paisagens de tirar o fôlego.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Kilimanjaro%20Tanzania.jpg",
    },
    {
      city: "Zanzibar",
      title: "Zanzibar",
      description:
        "Ilha paradisíaca no Oceano Índico, famosa por suas praias de areia branca, águas cristalinas e pela charmosa Stone Town.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Zanzibar%20beach%20Tanzania.jpg",
    },
    {
      city: "Ngorongoro Crater",
      title: "Ngorongoro Crater",
      description:
        "Uma cratera vulcânica gigante que abriga uma das maiores concentrações de vida selvagem da África, Patrimônio Mundial da UNESCO.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ngorongoro%20Crater%20Tanzania.jpg",
    },
    {
      city: "Lake Manyara National Park",
      title: "Lake Manyara National Park",
      description:
        "Famoso por seus leões que sobem em árvores e por abrigar uma imensa população de flamingos nas margens do lago.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Manyara%20National%20Park%20Tanzania.jpg",
    },
    {
      city: "Tarangire National Park",
      title: "Tarangire National Park",
      description:
        "Conhecido por seus majestosos baobás e grandes manadas de elefantes, é um dos parques mais pitorescos da Tanzânia.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tarangire%20National%20Park%20Baobab.jpg",
    },
    {
      city: "Arusha",
      title: "Arusha",
      description:
        "Cidade vibrante ao pé do Monte Meru, porta de entrada para os safáris do norte e um centro cultural importante.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Arusha%20Tanzania%20city.jpg",
    },
    {
      city: "Selous Game Reserve (Nyerere National Park)",
      title: "Selous Game Reserve (Nyerere National Park)",
      description:
        "Uma das maiores reservas de vida selvagem do mundo, com safáris de barco e paisagens intocadas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Selous%20Game%20Reserve%20Tanzania.jpg",
    },
    {
      city: "Mafia Island",
      title: "Mafia Island",
      description:
        "Um paraíso para mergulhadores, com recifes de corais coloridos, ���guas calmas e um ambiente muito mais tranquilo que Zanzibar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mafia%20Island%20Tanzania.jpg",
    },
  ],
};

export const countryDisplayName = (name: string) => {
  const map: Record<string, string> = {
    Brazil: "Brasil",
    "United States of America": "Estados Unidos",
    Canada: "Canadá",
    Mexico: "México",
    Bermuda: "Bermudas",
    Greenland: "Groenlândia",
    Aruba: "Aruba",
    Portugal: "Portugal",
    France: "França",
    Italy: "Itália",
    Spain: "Espanha",
    Argentina: "Argentina",
    Chile: "Chile",
    China: "China",
    India: "Índia",
    Japan: "Japão",
    Indonesia: "Indonésia",
    Thailand: "Tailândia",
    Philippines: "Filipinas",
    Vietnam: "Vietnã",
    Laos: "Laos",
    Nepal: "Nepal",
    "The Bahamas": "Bahamas",
    "Puerto Rico": "Porto Rico",
    Barbados: "Barbados",
    "Saint Martin": "Saint Martin",
    "Cayman Islands": "Ilhas Cayman",
    Guadeloupe: "Guadalupe",
    Belize: "Belize",
    Guatemala: "Guatemala",
    "El Salvador": "El Salvador",
    Nicaragua: "Nicarágua",
    Honduras: "Honduras",
    "Costa Rica": "Costa Rica",
    Panama: "Panamá",
    Cuba: "Cuba",
    Haiti: "Haiti",
    "Trinidad and Tobago": "Trinidad e Tobago",
    "Dominican Republic": "República Dominicana",
    Jamaica: "Jamaica",
    "Cape Verde": "Cabo Verde",
    "South Africa": "África do Sul",
    Morocco: "Marrocos",
    Egypt: "Egito",
    Kenya: "Quênia",
    Tanzania: "Tanzânia",
    Tunisia: "Tunísia",
    Namibia: "Namíbia",
    Seychelles: "Seicheles",
    "United Arab Emirates": "Emirados Árabes Unidos",
    Turkey: "Turquia",
    "Saudi Arabia": "Arábia Saudita",
    Israel: "Israel",
    Jordan: "Jordânia",
    Oman: "Omã",
    Qatar: "Catar",
    Malaysia: "Malásia",
    Singapore: "Singapura",
    "South Korea": "Coreia do Sul",
    "Sri Lanka": "Sri Lanka",
    Cambodia: "Camboja",
    Mongolia: "Mongólia",
  };
  return map[name] || name;
};
