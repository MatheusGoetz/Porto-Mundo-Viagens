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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Statue%20of%20Liberty%20in%20New%20York%20City.jpg",
    },
    {
      city: "Los Angeles",
      title: "Los Angeles",
      description:
        "Centro da indústria cinematográfica de Hollywood, também conhecida por praias e vida cultural vibrante.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Hollywood%20Sign%20(Los%20Angeles).jpg",
    },
    {
      city: "Las Vegas",
      title: "Las Vegas",
      description:
        "Cidade do entretenimento e cassinos, com shows e vida noturna intensos no famoso Las Vegas Strip.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Las%20Vegas%20Strip.jpg",
    },
    {
      city: "San Francisco",
      title: "San Francisco",
      description: "Famosa pela Golden Gate Bridge, bondinhos e a Ilha de Alcatraz.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/GoldenGateBridge-001.jpg",
    },
    {
      city: "Miami",
      title: "Miami",
      description:
        "Destino tropical nos EUA, famoso por suas praias, vida noturna e influência cultural latina.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ocean%20Drive%20in%20Miami%20Beach.jpg",
    },
    {
      city: "Chicago",
      title: "Chicago",
      description:
        "Cidade às margens do Lago Michigan, conhecida por sua arquitetura, blues e pizza deep dish.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Chicago%20skyline%20from%20North%20Avenue%20Beach.jpg",
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
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/US%20Capitol%20west%20side.JPG",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Toronto%20-%20ON%20-%20Toronto%20skyline%20viewed%20from%20Centre%20Island.jpg",
    },
    {
      city: "Vancouver",
      title: "Vancouver",
      description:
        "Cidade costeira entre montanhas e o oceano, conhecida por sua beleza natural e qualidade de vida.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Vancouver%20skyline%20from%20Stanley%20Park.jpg",
    },
    {
      city: "Montreal",
      title: "Montreal",
      description:
        "Cidade bilíngue com forte influência francesa, famosa por sua cena gastronômica e cultural.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Montreal%20skyline%20at%20night.jpg",
    },
    {
      city: "Quebec City",
      title: "Quebec City",
      description:
        "Cidade histórica com arquitetura colonial francesa e o icônico Château Frontenac.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Quebec%20City%20-%20Chateau%20Frontenac.jpg",
    },
    {
      city: "Niagara Falls",
      title: "Niagara Falls",
      description:
        "Uma das cataratas mais famosas do mundo, na fronteira entre Canadá e EUA.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Niagara%20Falls%20from%20Skylon%20Tower.jpg",
    },
    {
      city: "Ottawa",
      title: "Ottawa",
      description:
        "A capital do Canadá, conhecida pelo Parlamento e museus nacionais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Parliament%20Hill%20in%20Ottawa.jpg",
    },
    {
      city: "Calgary",
      title: "Calgary",
      description:
        "Cidade próxima às Montanhas Rochosas, famosa pelo rodeio Calgary Stampede.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Downtown%20Calgary%20from%20Scotsman%27s%20Hill.jpg",
    },
    {
      city: "Banff",
      title: "Banff",
      description:
        "Localizado no Parque Nacional Banff, é um destino alpino com lagos cristalinos e montanhas imponentes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Louise%20(Banff%20National%20Park).jpg",
    },
    {
      city: "Whistler",
      title: "Whistler",
      description:
        "Resort de montanha famoso por esqui, snowboard e paisagens deslumbrantes durante todo o ano.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Whistler%20Village.jpg",
    },
  ],
  Portugal: [
    {
      city: "Lisboa",
      title: "Lisboa",
      description: "A capital portuguesa encanta com seus miradouros, bondinhos, o bairro de Alfama e o icônico Mosteiro dos Jerónimos em Belém.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lisbon%20Baixa%20Chiado%20view.jpg",
    },
    {
      city: "Porto",
      title: "Porto",
      description: "Famosa por suas caves de vinho do Porto e pela ponte Dom Luís I, a cidade combina arquitetura histórica e um clima acolhedor às margens do Douro.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Porto%20city%20view%20from%20Vila%20Nova%20de%20Gaia.jpg",
    },
    {
      city: "Sintra",
      title: "Sintra",
      description: "Patrimônio Mundial da UNESCO, Sintra é um conto de fadas real, com palácios coloridos, castelos e florestas misteriosas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pena%20Palace%20Sintra%20Portugal.jpg",
    },
    {
      city: "Coimbra",
      title: "Coimbra",
      description: "Cidade universitária histórica, lar de uma das universidades mais antigas da Europa e rica em tradições acadêmicas e musicais.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/University%20of%20Coimbra%20Portugal.jpg",
    },
    {
      city: "Évora",
      title: "Évora",
      description: "No coração do Alentejo, Évora é um museu a céu aberto com ruínas romanas, capelas singulares e arquitetura medieval preservada.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Evora%20Roman%20Temple%20Portugal.jpg",
    },
    {
      city: "Algarve",
      title: "Algarve",
      description: "Região de praias paradisíacas, falésias douradas e mar azul-turquesa — o destino perfeito para relaxar sob o sol português.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lagos%20Algarve%20Ponta%20da%20Piedade.jpg",
    },
    {
      city: "Madeira",
      title: "Madeira",
      description: "Ilha montanhosa no Atlântico, famosa por suas paisagens exuberantes, trilhas e o vinho Madeira.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Madeira%20Island%20Portugal%20cliffs.jpg",
    },
    {
      city: "Açores",
      title: "Açores",
      description: "Arquipélago vulcânico com crateras, lagos e miradouros impressionantes — um paraíso para quem ama natureza e aventura.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/S%C3%A3o%20Miguel%20Sete%20Cidades%20Azores.jpg",
    },
    {
      city: "Braga",
      title: "Braga",
      description: "Uma das cidades mais antigas do país, Braga é rica em igrejas barrocas, jardins e espiritualidade, com destaque para o Santuário do Bom Jesus do Monte.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bom%20Jesus%20do%20Monte%20Braga%20Portugal.jpg",
    },
  ],
  France: [
    {
      city: "Paris",
      title: "Paris",
      description: "A Cidade Luz encanta com sua arte, gastronomia e monumentos icônicos como a Torre Eiffel, o Louvre e a Catedral de Notre-Dame.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tour%20Eiffel%20Wikimedia%20Commons.jpg",
    },
    {
      city: "Nice",
      title: "Nice",
      description: "Pérola da Riviera Francesa, Nice combina mar azul-turquesa, calçadões elegantes e um charme mediterrâneo vibrante.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nice%20France%20Promenade%20des%20Anglais.jpg",
    },
    {
      city: "Lyon",
      title: "Lyon",
      description: "Capital gastronômica da França, Lyon oferece uma mistura de arquitetura renascentista, colinas históricas e bistrôs premiados.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lyon%20Panorama%20Fourvi%C3%A8re.jpg",
    },
    {
      city: "Marselha",
      title: "Marselha",
      description: "Porta do Mediterrâneo, Marselha combina o antigo porto Vieux-Port com uma cena multicultural e vistas impressionantes do mar.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Old%20Port%20of%20Marseille%20France.jpg",
    },
    {
      city: "Bordeaux",
      title: "Bordeaux",
      description: "Destino imperdível para amantes do vinho, Bordeaux é uma cidade refinada rodeada por vinhedos mundialmente famosos.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bordeaux%20Place%20de%20la%20Bourse.jpg",
    },
    {
      city: "Estrasburgo",
      title: "Estrasburgo",
      description: "Com sua arquitetura de conto de fadas e atmosfera germânica, Estrasburgo é um charme às margens do Reno.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Strasbourg%20Petite%20France.jpg",
    },
    {
      city: "Mont Saint-Michel",
      title: "Mont Saint-Michel",
      description: "Ilha rochosa coroada por uma abadia medieval, o Mont Saint-Michel é um dos locais mais icônicos e fotogênicos da França.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mont%20Saint-Michel%20France%20at%20high%20tide.jpg",
    },
    {
      city: "Vale do Loire",
      title: "Vale do Loire",
      description: "Região repleta de castelos renascentistas, jardins e vinhedos — um verdadeiro passeio pela história real francesa.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ch%C3%A2teau%20de%20Chambord%20Loire%20Valley.jpg",
    },
    {
      city: "Provence",
      title: "Provence",
      description: "Famosa por seus campos de lavanda, vilas medievais e gastronomia típica, a Provence é o retrato do charme do sul da França.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Provence%20Lavender%20Fields%20France.jpg",
    },
  ],
  Italy: [
    {
      city: "Roma",
      title: "Roma",
      description: "A capital italiana é um verdadeiro museu a céu aberto, lar do Coliseu, do Vaticano, da Fontana di Trevi e de séculos de hist��ria.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Colosseum%20in%20Rome%20Italy%20April%202007.jpg",
    },
    {
      city: "Veneza",
      title: "Veneza",
      description: "Construída sobre canais, Veneza encanta com suas gôndolas, arquitetura renascentista e a icônica Praça de São Marcos.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Venice%20Grand%20Canal%20and%20Santa%20Maria%20della%20Salute.jpg",
    },
    {
      city: "Florença",
      title: "Florença",
      description: "Berço do Renascimento, Florença abriga obras de Michelangelo e Leonardo da Vinci, além da magnífica Catedral de Santa Maria del Fiore.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Florence%20Duomo%20Santa%20Maria%20del%20Fiore.jpg",
    },
    {
      city: "Milão",
      title: "Milão",
      description: "Centro mundial da moda e do design, Milão impressiona com sua catedral gótica, galerias luxuosas e o afresco ‘A Última Ceia’.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Milan%20Cathedral%20Duomo%20di%20Milano.jpg",
    },
    {
      city: "Nápoles",
      title: "Nápoles",
      description: "Vibrante e autêntica, Nápoles é a porta de entrada para Pompeia, o Vesúvio e a Costa Amalfitana — e o berço da pizza!",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Napoli%20panorama%20Vesuvio.jpg",
    },
    {
      city: "Costa Amalfitana",
      title: "Costa Amalfitana",
      description: "Com falésias deslumbrantes, vilas coloridas e vistas para o Mediterrâneo, a Costa Amalfitana é um dos destinos mais românticos do mundo.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Positano%20Amalfi%20Coast%20Italy.jpg",
    },
    {
      city: "Pisa",
      title: "Pisa",
      description: "Famosa por sua torre inclinada, Pisa é um marco icônico da engenharia e um símbolo mundial da Itália.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Leaning%20Tower%20of%20Pisa%20Italy.jpg",
    },
    {
      city: "Verona",
      title: "Verona",
      description: "Cidade de Romeu e Julieta, Verona é charmosa e histórica, com ruínas romanas e praças encantadoras.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Verona%20Arena%20Italy.jpg",
    },
    {
      city: "Cinque Terre",
      title: "Cinque Terre",
      description: "Cinco vilas coloridas à beira-mar formam uma das paisagens mais pitorescas da Itália, ideais para trilhas e fotografia.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cinque%20Terre%20Vernazza%20Italy.jpg",
    },
  ],
  Germany: [
    {
      city: "Berlim",
      title: "Berlim",
      description: "A capital alemã é vibrante e repleta de história, arte e inovação. O Muro de Berlim, o Portão de Brandemburgo e o Reichstag são ícones imperdíveis.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Brandenburg%20Gate%20Berlin%20Germany.jpg",
    },
    {
      city: "Munique",
      title: "Munique",
      description: "Lar da Oktoberfest, Munique combina tradição bávara com modernidade, cercada pelos Alpes e cheia de cervejarias lendárias.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Marienplatz%20Munich%20Germany.jpg",
    },
    {
      city: "Hamburgo",
      title: "Hamburgo",
      description: "Importante cidade portuária, Hamburgo encanta com seus canais, a moderna Elbphilharmonie e uma atmosfera cosmopolita.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hamburg%20Elbphilharmonie%20and%20harbour.jpg",
    },
    {
      city: "Colônia (Köln)",
      title: "Colônia (Köln)",
      description: "Famosa por sua imponente catedral gótica às margens do Reno, Colônia é uma cidade vibrante e cheia de festivais.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cologne%20Cathedral%20Germany.jpg",
    },
    {
      city: "Heidelberg",
      title: "Heidelberg",
      description: "Cidade universitária romântica, conhecida por seu castelo em ruínas e pela charmosa cidade velha às margens do rio Neckar.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Heidelberg%20Castle%20Germany.jpg",
    },
    {
      city: "Dresden",
      title: "Dresden",
      description: "Reconstruída após a Segunda Guerra, Dresden é uma joia barroca com igrejas e palácios deslumbrantes às margens do rio Elba.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dresden%20skyline%20at%20night.jpg",
    },
    {
      city: "Nuremberg (Nürnberg)",
      title: "Nuremberg (Nürnberg)",
      description: "Cheia de história medieval e mercados de Natal famosos, Nuremberg combina charme antigo e importância histórica moderna.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nuremberg%20castle%20view.jpg",
    },
    {
      city: "Rota Romântica (Romantische Straße)",
      title: "Rota Romântica (Romantische Straße)",
      description: "Rota cênica que liga Würzburg a Füssen, passando por vilas medievais, castelos e paisagens dos Alpes bávaros.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rothenburg%20ob%20der%20Tauber%20Germany.jpg",
    },
    {
      city: "Castelo de Neuschwanstein",
      title: "Castelo de Neuschwanstein",
      description: "Inspirou o castelo da Disney e é um dos cartões-postais mais famosos do mundo, situado entre montanhas e lagos da Baviera.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Neuschwanstein%20Castle%20Bavaria%20Germany.jpg",
    },
  ],
  Austria: [
    {
      city: "Viena (Wien)",
      title: "Viena (Wien)",
      description: "A elegante capital austríaca é o coração da antiga monarquia dos Habsburgos, repleta de palácios, museus, cafés históricos e uma atmosfera musical que ecoa por toda parte.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Schönbrunn%20Palace%20Vienna.jpg",
    },
    {
      city: "Salzburgo (Salzburg)",
      title: "Salzburgo (Salzburg)",
      description: "Cidade natal de Mozart e cenário do filme 'A Noviça Rebelde', Salzburgo é famosa por sua arquitetura barroca, seu castelo e sua herança musical.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hohensalzburg%20Fortress%20Salzburg.jpg",
    },
    {
      city: "Innsbruck",
      title: "Innsbruck",
      description: "No coração dos Alpes, Innsbruck combina esportes de inverno, beleza alpina e arquitetura histórica com o charme tirolês.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Innsbruck%20Old%20Town%20and%20Alps.jpg",
    },
    {
      city: "Hallstatt",
      title: "Hallstatt",
      description: "Considerada uma das vilas mais bonitas do mundo, Hallstatt encanta com seu lago sereno, casas de madeira e montanhas que parecem abraçar a cidade.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hallstatt%20village%20Austria.jpg",
    },
    {
      city: "Graz",
      title: "Graz",
      description: "Com uma mistura única de arquitetura renascentista e moderna, Graz é vibrante, criativa e conhecida por sua gastronomia e vida universitária.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Graz%20Old%20Town%20view.jpg",
    },
    {
      city: "Zell am See",
      title: "Zell am See",
      description: "Destino perfeito para quem busca natureza e aventura, Zell am See combina lagos cristalinos, trilhas e esqui em meio a paisagens alpinas impressionantes.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Zell%20am%20See%20Lake%20Austria.jpg",
    },
    {
      city: "Wachau",
      title: "Wachau",
      description: "Região vinícola pitoresca às margens do rio Danúbio, com castelos, mosteiros e vilarejos que parecem parados no tempo.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Wachau%20Valley%20Danube%20Austria.jpg",
    },
    {
      city: "Linz",
      title: "Linz",
      description: "Cidade moderna às margens do Danúbio, Linz é conhecida por seu foco em arte contemporânea, tecnologia e festivais culturais inovadores.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Linz%20city%20view%20Danube.jpg",
    },
    {
      city: "Kitzbühel",
      title: "Kitzbühel",
      description: "Um dos resorts de esqui mais famosos da Europa, Kitzbühel oferece luxo, tradição tirolesa e paisagens de tirar o fôlego durante o ano inteiro.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kitzbühel%20winter%20Austria.jpg",
    },
  ],
  Greece: [
    {
      city: "Atenas",
      title: "Atenas",
      description: "Capital da Grécia e berço da civilização ocidental, Atenas é um museu a céu aberto com monumentos icônicos como a Acrópole e o Partenon, além de uma vibrante vida urbana.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Acropolis%20of%20Athens.jpg",
    },
    {
      city: "Santorini",
      title: "Santorini",
      description: "Ilha vulcânica famosa por suas casas brancas com cúpulas azuis, vistas deslumbrantes do mar Egeu e pores do sol inesquecíveis sobre Oia.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Santorini%20Oia%20sunset.jpg",
    },
    {
      city: "Mykonos",
      title: "Mykonos",
      description: "Conhecida por suas praias animadas, moinhos de vento e vida noturna intensa, Mykonos é o destino mais cosmopolita das ilhas gregas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mykonos%20windmills%20Greece.jpg",
    },
    {
      city: "Creta",
      title: "Creta",
      description: "A maior ilha grega oferece uma mistura fascinante de praias paradisíacas, montanhas, vilas tradicionais e sítios arqueológicos como o Palácio de Knossos.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Knossos%20palace%20Crete.jpg",
    },
    {
      city: "Rodes (Rhodes)",
      title: "Rodes (Rhodes)",
      description: "Famosa por suas muralhas medievais e praias ensolaradas, Rodes combina história, cultura e relaxamento em um só destino.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rhodes%20Old%20Town%20Greece.jpg",
    },
    {
      city: "Corfu",
      title: "Corfu",
      description: "Ilha verdejante no mar Jônico, Corfu encanta com sua mistura de influências venezianas, francesas e britânicas, além de praias e vilas pitorescas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Corfu%20Old%20Town%20Greece.jpg",
    },
    {
      city: "Meteora",
      title: "Meteora",
      description: "Um dos locais mais impressionantes da Grécia continental, com mosteiros ortodoxos construídos sobre enormes formações rochosas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Meteora%20monasteries%20Greece.jpg",
    },
    {
      city: "Delphi",
      title: "Delphi",
      description: "Antigo centro espiritual do mundo grego, onde se localiza o famoso Oráculo de Delfos, cercado por montanhas e ruínas milenares.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Delphi%20ruins%20Greece.jpg",
    },
    {
      city: "Nafplio",
      title: "Nafplio",
      description: "Primeira capital da Grécia moderna, Nafplio é uma cidade costeira romântica, com ruas de pedra, fortalezas venezianas e vista para o mar Egeu.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nafplio%20harbour%20Greece.jpg",
    },
  ],
  Switzerland: [
    {
      city: "Zurique",
      title: "Zurique",
      description: "Centro financeiro e cultural da Suíça, Zurique combina modernidade e charme histórico, com ruas antigas, museus de arte e vida noturna vibrante às margens do lago.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Zürich%20Grossmünster%20and%20Limmat.jpg",
    },
    {
      city: "Genebra",
      title: "Genebra",
      description: "Sede de organizações internacionais, Genebra é cosmopolita, elegante e repleta de história, com o famoso Jet d’Eau e o Lago Léman.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jet%20d%27Eau%20Geneva%20view.jpg",
    },
    {
      city: "Lucerna",
      title: "Lucerna",
      description: "Com sua icônica Kapellbrücke (Ponte da Capela) e o Lago Lucerna cercado pelos Alpes, a cidade é um dos cartões-postais mais famosos do país.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lucerne%20Kapellbrücke%20and%20Water%20Tower.jpg",
    },
    {
      city: "Interlaken",
      title: "Interlaken",
      description: "Entre dois lagos cristalinos e rodeada por montanhas, Interlaken é o destino perfeito para esportes radicais e passeios panorâmicos pelos Alpes.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Interlaken%20aerial%20view.jpg",
    },
    {
      city: "Zermatt",
      title: "Zermatt",
      description: "Lar do icônico Matterhorn, Zermatt é um dos destinos alpinos mais prestigiados do mundo, ideal para esqui e trilhas de verão.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Matterhorn%20Zermatt%20sunset.jpg",
    },
    {
      city: "Berna",
      title: "Berna",
      description: "A capital suíça encanta com seu centro histórico medieval preservado, o Zytglogge (torre do relógio) e o rio Aar serpenteando a cidade.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bern%20Old%20Town%20view.jpg",
    },
    {
      city: "Montreux",
      title: "Montreux",
      description: "Cidade às margens do Lago Léman, famosa por seu festival de jazz e o Castelo de Chillon, um dos monumentos mais visitados da Suíça.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chillon%20Castle%20Montreux.jpg",
    },
    {
      city: "Lugano",
      title: "Lugano",
      description: "No sul do país, próxima à fronteira italiana, Lugano oferece um clima mais mediterrâneo, com palmeiras, montanhas e gastronomia incrível.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lugano%20Lake%20and%20city%20view.jpg",
    },
    {
      city: "Grindelwald",
      title: "Grindelwald",
      description: "Uma vila alpina pitoresca no coração das montanhas Jungfrau, ideal para trilhas, esqui e paisagens cinematográficas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Grindelwald%20Bernese%20Oberland.jpg",
    },
  ],
  "United Kingdom": [
    {
      city: "Londres",
      title: "Londres",
      description: "A capital britânica é uma metrópole global repleta de ícones como o Big Ben, o Palácio de Buckingham, o London Eye e o Museu Britânico.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Houses%20of%20Parliament%20London%20-%20Feb%202007.jpg",
    },
    {
      city: "Edimburgo",
      title: "Edimburgo",
      description: "Capital da Escócia, Edimburgo combina história medieval e charme literário, com o famoso Castelo de Edimburgo e o festival Fringe.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Edinburgh%20Castle%20from%20Princes%20Street%20Gardens.jpg",
    },
    {
      city: "Lago Ness (Loch Ness)",
      title: "Lago Ness (Loch Ness)",
      description: "Um dos lagos mais famosos do mundo, cercado por montanhas e lendas sobre o misterioso monstro Nessie, no coração das Highlands escocesas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Loch%20Ness%20Urquhart%20Castle%20view.jpg",
    },
    {
      city: "Stonehenge",
      title: "Stonehenge",
      description: "Um dos monumentos pré-históricos mais enigmáticos do planeta, localizado no condado de Wiltshire, na Inglaterra.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Stonehenge2007%2007%2029.jpg",
    },
    {
      city: "Liverpool",
      title: "Liverpool",
      description: "Cidade natal dos Beatles, Liverpool é um centro cultural com museus, pubs musicais e uma rica herança marítima.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Liverpool%20Waterfront%202015.jpg",
    },
    {
      city: "Oxford",
      title: "Oxford",
      description: "Famosa por sua universidade centenária, Oxford é uma cidade encantadora repleta de arquitetura gótica e tradição acadêmica.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Oxford%20Radcliffe%20Camera%20from%20St%20Marys%20Church.jpg",
    },
    {
      city: "Bath",
      title: "Bath",
      description: "Cidade romana com banhos termais históricos e arquitetura georgiana elegante, reconhecida como Patrimônio Mundial da UNESCO.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roman%20Baths%20Bath%20England%20-%20July%202006.jpg",
    },
    {
      city: "Cardiff",
      title: "Cardiff",
      description: "A capital do País de Gales combina castelos medievais, cultura galesa e uma vibrante cena moderna à beira-mar.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cardiff%20Castle%20keep%20and%20walls.jpg",
    },
    {
      city: "Belfast",
      title: "Belfast",
      description: "Capital da Irlanda do Norte, famosa por sua história industrial e pelo Titanic Belfast, museu dedicado ao navio que ali foi construído.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Titanic%20Belfast%20Building%202012.jpg",
    },
  ],
  Belgium: [
    {
      city: "Bruxelas (Brussels)",
      title: "Bruxelas (Brussels)",
      description: "A capital da Bélgica e sede da União Europeia, Bruxelas combina arquitetura grandiosa, arte moderna e o irresistível aroma de chocolate e waffles nas ruas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Grand%20Place%20Brussels%20Belgium.jpg",
    },
    {
      city: "Bruges (Brugge)",
      title: "Bruges (Brugge)",
      description: "Conhecida como a 'Veneza do Norte', Bruges encanta com seus canais, construções medievais e atmosfera romântica que a torna um dos destinos mais visitados da Europa.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bruges%20canals%20Belgium.jpg",
    },
    {
      city: "Gante (Ghent)",
      title: "Gante (Ghent)",
      description: "Uma joia medieval com vida universitária vibrante, Gante mistura castelos, igrejas góticas e uma cena cultural efervescente às margens do rio Leie.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ghent%20Graslei%20and%20Korenlei.jpg",
    },
    {
      city: "Antuérpia (Antwerp)",
      title: "Antuérpia (Antwerp)",
      description: "Capital mundial dos diamantes e berço de Rubens, Antuérpia é um centro artístico e de moda com arquitetura impressionante e uma vibe cosmopolita.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Antwerp%20Cathedral%20of%20Our%20Lady.jpg",
    },
    {
      city: "Leuven",
      title: "Leuven",
      description: "Cidade universitária com alma jovem e animada, Leuven é famosa pela cerveja Stella Artois e por sua rica herança acadêmica e arquitetônica.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Leuven%20Town%20Hall%20Belgium.jpg",
    },
    {
      city: "Namur",
      title: "Namur",
      description: "Localizada na confluência dos rios Sambre e Meuse, Namur é conhecida por sua cidadela panorâmica e charme tranquilo no coração da Valônia.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Namur%20Citadel%20Belgium.jpg",
    },
    {
      city: "Dinant",
      title: "Dinant",
      description: "Encravada entre falésias e o rio Meuse, Dinant é uma das cidades mais fotogênicas da Bélgica e berço do inventor do saxofone, Adolphe Sax.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dinant%20Belgium%20view.jpg",
    },
    {
      city: "Liège",
      title: "Liège",
      description: "Importante cidade da Valônia com mistura de tradição e modernidade, Liège encanta com sua catedral, seu mercado La Batte e o famoso waffle local.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Liege%20Guillemins%20station%20Belgium.jpg",
    },
    {
      city: "Mechelen",
      title: "Mechelen",
      description: "Entre Bruxelas e Antuérpia, Mechelen é um tesouro histórico com belas igrejas e uma atmosfera acolhedora, ideal para quem busca autenticidade belga.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mechelen%20St%20Rumbold%27s%20Cathedral.jpg",
    },
  ],
  Netherlands: [
    {
      city: "Amsterdã",
      title: "Amsterdã",
      description: "A capital holandesa é famosa por seus canais pitorescos, museus renomados como o Rijksmuseum e o Van Gogh Museum, além da vibrante vida noturna e cultural.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Amsterdam%20canals%20at%20night.jpg",
    },
    {
      city: "Roterdã (Rotterdam)",
      title: "Roterdã (Rotterdam)",
      description: "Cidade moderna e inovadora, conhecida por sua arquitetura futurista, o porto mais movimentado da Europa e uma cena artística de ponta.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rotterdam%20Erasmusbrug%20bridge.jpg",
    },
    {
      city: "Haia (Den Haag)",
      title: "Haia (Den Haag)",
      description: "Sede do governo holandês e da Corte Internacional de Justiça, Haia mistura elegância, praias urbanas e arte clássica como a do Mauritshuis.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Hague%20Binnenhof%20reflections.jpg",
    },
    {
      city: "Utrecht",
      title: "Utrecht",
      description: "Com canais únicos de dois níveis e uma atmosfera estudantil vibrante, Utrecht combina história medieval com inovação moderna.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Utrecht%20Oudegracht%20canal.jpg",
    },
    {
      city: "Giethoorn",
      title: "Giethoorn",
      description: "Conhecida como a 'Veneza do Norte', Giethoorn é uma vila encantadora sem ruas — o transporte é feito por barcos entre canais e casas de palha.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Giethoorn%20Netherlands%20village.jpg",
    },
    {
      city: "Haarlem",
      title: "Haarlem",
      description: "Próxima de Amsterdã, Haarlem é um charme histórico com ruas de paralelepípedo, canais, museus e o famoso campo de tulipas de Keukenhof nas proximidades.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Haarlem%20city%20center%20Netherlands.jpg",
    },
    {
      city: "Delft",
      title: "Delft",
      description: "Cidade conhecida por sua porcelana azul e branca e por ter sido lar do pintor Vermeer. Um destino tranquilo e repleto de charme holandês clássico.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Delft%20canals%20Netherlands.jpg",
    },
    {
      city: "Leiden",
      title: "Leiden",
      description: "Cidade universitária com rica herança científica e cultural, museus fascinantes e canais históricos que inspiraram Rembrandt.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Leiden%20canals%20Netherlands.jpg",
    },
    {
      city: "Eindhoven",
      title: "Eindhoven",
      description: "Centro da inovação e design na Holanda, Eindhoven é moderna, tecnológica e sede da Philips, combinando arte, luz e engenharia de ponta.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Eindhoven%20city%20center.jpg",
    },
  ],
  Croatia: [
    {
      city: "Dubrovnik",
      title: "Dubrovnik",
      description: "Conhecida como a 'Pérola do Adriático', Dubrovnik é uma cidade murada à beira-mar, famosa por suas ruas de pedra, muralhas históricas e por ter sido cenário de Game of Thrones.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dubrovnik%20Old%20Town%20Croatia.jpg",
    },
    {
      city: "Split",
      title: "Split",
      description: "Centro vibrante da Dalmácia, Split combina ruínas romanas com uma atmosfera moderna, tendo o magnífico Palácio de Diocleciano como coração da cidade.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Split%20Croatia%20Diocletian%27s%20Palace.jpg",
    },
    {
      city: "Zagreb",
      title: "Zagreb",
      description: "A capital croata é um mix encantador de elegância austro-húngara, cafés charmosos e uma vida cultural intensa, repleta de museus e festivais.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Zagreb%20Cathedral%20Croatia.jpg",
    },
    {
      city: "Parque Nacional dos Lagos de Plitvice",
      title: "Parque Nacional dos Lagos de Plitvice",
      description: "Um dos parques mais espetaculares da Europa, com 16 lagos interligados por cachoeiras e trilhas em meio a florestas exuberantes.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Plitvice%20Lakes%20National%20Park%20Croatia.jpg",
    },
    {
      city: "Zadar",
      title: "Zadar",
      description: "Cidade costeira com ruínas romanas, arte moderna e o famoso Órgão do Mar, um instrumento que cria música com o movimento das ondas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Zadar%20Sea%20Organ%20Croatia.jpg",
    },
    {
      city: "Rovinj",
      title: "Rovinj",
      description: "Um dos destinos mais românticos do Adriático, Rovinj encanta com suas ruelas coloridas, porto pitoresco e atmosfera mediterrânea.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rovinj%20Old%20Town%20Croatia.jpg",
    },
    {
      city: "Pula",
      title: "Pula",
      description: "Famosa por seu impressionante anfiteatro romano, Pula é uma mistura fascinante de história antiga e vida praiana moderna.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pula%20Arena%20Croatia.jpg",
    },
    {
      city: "Hvar",
      title: "Hvar",
      description: "A ilha mais badalada da Croácia, Hvar é sinônimo de praias paradisíacas, festas sofisticadas e vilas históricas banhadas por águas cristalinas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hvar%20Harbor%20Croatia.jpg",
    },
    {
      city: "Korčula",
      title: "Korčula",
      description: "Conhecida como a 'pequena Dubrovnik', Korčula é uma ilha de charme medieval, cercada por vinhedos e lendas sobre Marco Polo.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Korcula%20Old%20Town%20Croatia.jpg",
    },
  ],
  Czechia: [
    {
      city: "Praga (Praha)",
      title: "Praga (Praha)",
      description: "A capital e joia da República Tcheca, Praga encanta com seu centro histórico medieval, a Ponte Carlos, o Castelo de Praga e a famosa Praça da Cidade Velha com o Relógio Astronômico.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Prague%20Charles%20Bridge%20Czech%20Republic.jpg",
    },
    {
      city: "Český Krumlov",
      title: "Český Krumlov",
      description: "Uma cidade de conto de fadas no sul do país, com ruas de paralelepípedo, casas coloridas e um castelo magnífico que domina o rio Vltava.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cesky%20Krumlov%20Czech%20Republic.jpg",
    },
    {
      city: "Karlovy Vary",
      title: "Karlovy Vary",
      description: "Famosa por suas águas termais e arquitetura elegante, Karlovy Vary é um destino de bem-estar e luxo, conhecida por spas e pelo festival internacional de cinema.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Karlovy%20Vary%20Czech%20Republic.jpg",
    },
    {
      city: "Kutná Hora",
      title: "Kutná Hora",
      description: "Patrimônio Mundial da UNESCO, Kutná Hora se destaca pela impressionante Igreja de Santa Bárbara e o Ossuário de Sedlec, decorado com ossos humanos.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sedlec%20Ossuary%20Kutna%20Hora%20Czech%20Republic.jpg",
    },
    {
      city: "Brno",
      title: "Brno",
      description: "A segunda maior cidade do país é vibrante, moderna e cheia de vida estudantil, com destaque para a fortaleza de Špilberk e a arquitetura funcionalista da Villa Tugendhat.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Brno%20Spilberk%20Castle%20Czech%20Republic.jpg",
    },
    {
      city: "Olomouc",
      title: "Olomouc",
      description: "Um tesouro histórico pouco conhecido, Olomouc possui uma das praças mais bonitas da Europa e uma atmosfera universitária animada.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Olomouc%20Holy%20Trinity%20Column%20Czech%20Republic.jpg",
    },
    {
      city: "Telč",
      title: "Telč",
      description: "Pequena e encantadora, Telč é conhecida por sua praça principal renascentista, com fachadas coloridas e perfeitamente preservadas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Telc%20Main%20Square%20Czech%20Republic.jpg",
    },
    {
      city: "Pilsen (Plzeň)",
      title: "Pilsen (Plzeň)",
      description: "Berço da mundialmente famosa cerveja Pilsner, Pilsen é um paraíso para amantes de cerveja e história industrial, com uma bela catedral e a fábrica original da Pilsner Urquell.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pilsen%20Cathedral%20Czech%20Republic.jpg",
    },
    {
      city: "Karlštejn",
      title: "Karlštejn",
      description: "Pequena vila próxima de Praga, famosa pelo majestoso Castelo de Karlštejn, construído por Carlos IV para guardar joias da coroa e relíquias sagradas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Karlstejn%20Castle%20Czech%20Republic.jpg",
    },
  ],
  Spain: [
    {
      city: "Barcelona",
      title: "Barcelona",
      description: "Cidade vibrante e artística, famosa pelas obras de Gaudí, como a Sagrada Família e o Parque Güell, além de praias e vida noturna intensa.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sagrada%20Familia%20Barcelona%20Spain.jpg",
    },
    {
      city: "Madri",
      title: "Madri",
      description: "A capital espanhola combina elegância e cultura, com museus renomados como o Prado e o Reina Sofía, além de praças e palácios impressionantes.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Plaza%20Mayor%20Madrid%20Spain.jpg",
    },
    {
      city: "Sevilha",
      title: "Sevilha",
      description: "Coração da Andaluzia, Sevilha é sinônimo de flamenco, arquitetura mourisca e da icônica Catedral com a torre Giralda.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Seville%20Cathedral%20and%20Giralda.jpg",
    },
    {
      city: "Granada",
      title: "Granada",
      description: "Lar da magnífica Alhambra, Granada oferece vistas deslumbrantes da Sierra Nevada e um rico legado árabe.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Alhambra%20Granada%20Spain.jpg",
    },
    {
      city: "Valência",
      title: "Valência",
      description: "Cidade futurista à beira-mar, famosa pela Cidade das Artes e das Ciências, e pela autêntica paella valenciana.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/City%20of%20Arts%20and%20Sciences%20Valencia.jpg",
    },
    {
      city: "Bilbao",
      title: "Bilbao",
      description: "Símbolo da modernidade no País Basco, Bilbao é lar do icônico Museu Guggenheim e de uma cena gastronômica de alto nível.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Guggenheim%20Museum%20Bilbao%20Spain.jpg",
    },
    {
      city: "Santiago de Compostela",
      title: "Santiago de Compostela",
      description: "Destino final do famoso Caminho de Santiago, a cidade é marcada por espiritualidade, história e uma imponente catedral.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cathedral%20of%20Santiago%20de%20Compostela%20Spain.jpg",
    },
    {
      city: "Toledo",
      title: "Toledo",
      description: "Antiga capital espanhola, Toledo é um labirinto medieval que mistura heranças cristãs, judaicas e islâmicas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Toledo%20Spain%20panorama.jpg",
    },
    {
      city: "Ilhas Baleares (Mallorca, Ibiza, Menorca)",
      title: "Ilhas Baleares (Mallorca, Ibiza, Menorca)",
      description: "Arquipélago paradisíaco no Mediterrâneo, com praias cristalinas, vida noturna animada e paisagens deslumbrantes.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ibiza%20old%20town%20and%20harbour.jpg",
    },
  ],
  Argentina: [
    {
      city: "Buenos Aires",
      title: "Buenos Aires",
      description: "A capital da Argentina, famosa pela arquitetura europeia, tango, vida noturna vibrante e bairros icônicos como San Telmo e Recoleta.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Obelisco%20de%20Buenos%20Aires%20(2).jpg",
    },
    {
      city: "Bariloche",
      title: "Bariloche",
      description: "Localizada na Patagônia, é conhecida por suas montanhas, lagos cristalinos, esportes de inverno e pela produção de chocolates artesanais.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bariloche%20Lake.jpg",
    },
    {
      city: "Mendoza",
      title: "Mendoza",
      description: "Região vinícola mais famosa da Argentina, com destaque para os vinhos Malbec e paisagens de vinhedos ao pé da Cordilheira dos Andes.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mendoza%20Vineyard.jpg",
    },
    {
      city: "Ushuaia",
      title: "Ushuaia",
      description: "Conhecida como a cidade mais austral do mundo, é porta de entrada para a Antártida e famosa por paisagens geladas e passeios de barco.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ushuaia%20Harbor.jpg",
    },
    {
      city: "El Calafate",
      title: "El Calafate",
      description: "Destino da Patagônia famoso pelo Parque Nacional Los Glaciares e o impressionante Glaciar Perito Moreno.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Perito%20Moreno%20Glacier%20(3).jpg",
    },
    {
      city: "Salta",
      title: "Salta",
      description: "Cidade colonial no noroeste argentino, famosa por igrejas hist��ricas, museus e paisagens montanhosas do Vale Calchaquí.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Salta%20Catedral.jpg",
    },
    {
      city: "Puerto Iguazú",
      title: "Puerto Iguazú",
      description: "Lar das Cataratas do Iguaçu, uma das Sete Maravilhas Naturais do Mundo, localizada na tríplice fronteira com Brasil e Paraguai.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Iguazu%20Falls%20Argentina%20side.jpg",
    },
    {
      city: "Mar del Plata",
      title: "Mar del Plata",
      description: "Principal cidade litorânea da Argentina, conhecida por suas praias, cassinos, festivais e vida noturna agitada.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mar%20del%20Plata%20beach.jpg",
    },
    {
      city: "Córdoba",
      title: "Córdoba",
      description: "Cidade histórica e universitária, com arquitetura colonial, serras próximas e rica vida cultural.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/C%C3%B3rdoba%20Cathedral%20Argentina.jpg",
    },
  ],
  Chile: [
    {
      city: "Santiago",
      title: "Santiago",
      description: "A capital do Chile, localizada entre a Cordilheira dos Andes e o Oceano Pacífico, famosa por sua vida cultural, vinícolas próximas e centros de esqui.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Santiago%20de%20Chile%20Cityscape.jpg",
    },
    {
      city: "Valparaíso",
      title: "Valparaíso",
      description: "Cidade portuária com morros coloridos, arte de rua vibrante e um importante patrimônio histórico e cultural.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Valparaiso%20Cerro%20Concepcion.jpg",
    },
    {
      city: "Viña del Mar",
      title: "Viña del Mar",
      description: "Destino litorâneo elegante conhecido como 'Cidade Jardim', com praias, cassinos e o famoso Festival Internacional da Canção.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vina%20del%20Mar%20beach.jpg",
    },
    {
      city: "Atacama (San Pedro de Atacama)",
      title: "Atacama (San Pedro de Atacama)",
      description: "Um dos desertos mais áridos do mundo, famoso por paisagens lunares, salares, gêiseres e observação astronômica.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Valle%20de%20la%20Luna%20Atacama.jpg",
    },
    {
      city: "Ilha de Páscoa (Rapa Nui)",
      title: "Ilha de Páscoa (Rapa Nui)",
      description: "Uma das ilhas mais isoladas do mundo, famosa pelos misteriosos moais e pela cultura polinésia única.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Moai%20statues%20Easter%20Island.jpg",
    },
    {
      city: "Puerto Varas",
      title: "Puerto Varas",
      description: "Cidade charmosa às margens do Lago Llanquihue, com vista para vulcões nevados e influência cultural alemã.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Puerto%20Varas%20and%20Osorno%20Volcano.jpg",
    },
    {
      city: "Torres del Paine",
      title: "Torres del Paine",
      description: "Parque nacional na Patag��nia chilena, conhecido por montanhas imponentes, lagos azul-turquesa e trilhas icônicas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Torres%20del%20Paine%20National%20Park.jpg",
    },
    {
      city: "La Serena",
      title: "La Serena",
      description: "Cidade litorânea histórica com belas praias, observatórios astronômicos e arquitetura colonial.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Serena%20Coquimbo%20Chile.jpg",
    },
    {
      city: "Chiloé",
      title: "Chiloé",
      description: "Arquipélago com tradições únicas, casas coloridas sobre palafitas e igrejas de madeira consideradas Patrimônio Mundial da UNESCO.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Palafitos%20de%20Castro%20Chiloe.jpg",
    },
  ],
  Bolivia: [
    {
      city: "La Paz",
      title: "La Paz",
      description: "A capital administrativa da Bolívia, localizada a mais de 3.600 metros de altitude, famosa pelo teleférico urbano e pelo Vale da Lua.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Paz%20Bolivia%20Cityscape.jpg",
    },
    {
      city: "Sucre",
      title: "Sucre",
      description: "Capital constitucional da Bolívia, conhecida por sua arquitetura colonial bem preservada e charme histórico.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sucre%20Bolivia%20Plaza%2025%20de%20Mayo.jpg",
    },
    {
      city: "Santa Cruz de la Sierra",
      title: "Santa Cruz de la Sierra",
      description: "Principal centro econômico da Bolívia, com vida noturna vibrante e uma mistura de modernidade e tradição.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Santa%20Cruz%20de%20la%20Sierra%20Bolivia.jpg",
    },
    {
      city: "Uyuni",
      title: "Uyuni",
      description: "Famosa pelo Salar de Uyuni, o maior deserto de sal do mundo, que cria reflexos espetaculares na estação chuvosa.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Salar%20de%20Uyuni%20Bolivia.jpg",
    },
    {
      city: "Potosí",
      title: "Potosí",
      description: "Antiga cidade mineradora, conhecida pelas minas de prata do Cerro Rico e sua história colonial.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Potosi%20Bolivia.jpg",
    },
    {
      city: "Copacabana",
      title: "Copacabana",
      description: "Às margens do Lago Titicaca, é famosa pelo Santuário de Nossa Senhora de Copacabana e pela Isla del Sol.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Copacabana%20Bolivia.jpg",
    },
    {
      city: "Cochabamba",
      title: "Cochabamba",
      description: "Cidade no centro da Bol��via, conhecida pelo Cristo de la Concordia e clima agradável.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cochabamba%20Bolivia%20Christo%20de%20la%20Concordia.jpg",
    },
    {
      city: "Tarija",
      title: "Tarija",
      description: "Região vinícola da Bolívia, famosa por seus vinhos e clima tranquilo nas montanhas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tarija%20Bolivia%20Plaza.jpg",
    },
    {
      city: "Oruro",
      title: "Oruro",
      description: "Cidade conhecida pelo Carnaval de Oruro, declarado Patrimônio Imaterial da Humanidade pela UNESCO.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Oruro%20Carnival%20Bolivia.jpg",
    },
  ],
  Ecuador: [
    {
      city: "Quito",
      title: "Quito",
      description: "A capital do Equador, localizada a 2.850 metros de altitude, famosa pelo centro histórico colonial, Patrimônio da UNESCO.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Quito%20Ecuador%20Cityscape.jpg",
    },
    {
      city: "Guayaquil",
      title: "Guayaquil",
      description: "Principal porto do país, com o Malecón 2000, vida noturna animada e acesso às Ilhas Galápagos.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Guayaquil%20Ecuador.jpg",
    },
    {
      city: "Cuenca",
      title: "Cuenca",
      description: "Cidade colonial famosa por sua arquitetura, igrejas históricas e tradição dos chapéus Panamá.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cuenca%20Ecuador%20Cathedral.jpg",
    },
    {
      city: "Galápagos",
      title: "Galápagos",
      description: "Arquipélago único, Patrimônio Natural da Humanidade, famoso por sua biodiversidade e estudos de Darwin.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Galapagos%20Islands%20Ecuador.jpg",
    },
    {
      city: "Baños de Agua Santa",
      title: "Baños de Agua Santa",
      description: "Cidade turística famosa por cachoeiras, esportes de aventura e termas vulcânicas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Banos%20Ecuador%20Waterfall.jpg",
    },
    {
      city: "Otavalo",
      title: "Otavalo",
      description: "Cidade conhecida pelo mercado indígena e tradições culturais andinas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Otavalo%20Market%20Ecuador.jpg",
    },
    {
      city: "Mindo",
      title: "Mindo",
      description: "Destino ecológico nos Andes, famoso por observação de aves, cachoeiras e florestas nubladas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mindo%20Ecuador.jpg",
    },
    {
      city: "Montañita",
      title: "Montañita",
      description: "Praia famosa por surf, vida noturna e atmosfera jovem e descontraída.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Montanita%20Ecuador.jpg",
    },
    {
      city: "Loja",
      title: "Loja",
      description: "Cidade cultural conhecida por música, tradições artísticas e proximidade com a natureza.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Loja%20Ecuador.jpg",
    },
  ],
  Venezuela: [
    {
      city: "Caracas",
      title: "Caracas",
      description: "A capital da Venezuela, cercada pelo Parque Nacional El Ávila e rica em museus e vida urbana.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Caracas%20Venezuela.jpg",
    },
    {
      city: "Margarita",
      title: "Margarita",
      description: "Ilha caribenha famosa por praias paradisíacas, resorts e clima ensolarado.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Margarita%20Island%20Venezuela.jpg",
    },
    {
      city: "Los Roques",
      title: "Los Roques",
      description: "Arquipélago no Caribe, famoso por águas cristalinas, mergulho e vida marinha.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Los%20Roques%20Venezuela.jpg",
    },
    {
      city: "Mérida",
      title: "Mérida",
      description: "Cidade andina conhecida pelo teleférico mais alto e longo do mundo e paisagens montanhosas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Merida%20Venezuela.jpg",
    },
    {
      city: "Canaima",
      title: "Canaima",
      description: "Parque Nacional Canaima, famoso pelo Salto Ángel, a maior queda d’água do mundo.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Salto%20Angel%20Venezuela.jpg",
    },
    {
      city: "Maracaibo",
      title: "Maracaibo",
      description: "Importante cidade venezuelana, conhecida pelo Lago de Maracaibo e o fenômeno natural Relâmpago do Catatumbo.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Maracaibo%20Venezuela.jpg",
    },
    {
      city: "Coro",
      title: "Coro",
      description: "Cidade colonial, Patrimônio Mundial da UNESCO, famosa por suas ruas históricas e casas coloridas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Coro%20Venezuela.jpg",
    },
    {
      city: "Puerto La Cruz",
      title: "Puerto La Cruz",
      description: "Cidade costeira com belas praias e porta de entrada para as Ilhas do Caribe venezuelano.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Puerto%20La%20Cruz%20Venezuela.jpg",
    },
    {
      city: "Choroní",
      title: "Choroní",
      description: "Vila costeira charmosa no Caribe, cercada por montanhas e praias tropicais.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Choroni%20Venezuela.jpg",
    },
  ],
  Peru: [
    {
      city: "Machu Picchu",
      title: "Machu Picchu",
      description: "A cidade perdida dos incas, Patrimônio Mundial da UNESCO e uma das Sete Maravilhas do Mundo Moderno.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Machu%20Picchu%20Peru.jpg",
    },
    {
      city: "Cusco",
      title: "Cusco",
      description: "Antiga capital do Império Inca, famosa por sua arquitetura colonial e ruínas próximas ao Vale Sagrado.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Plaza%20de%20Armas%20Cusco.jpg",
    },
    {
      city: "Lima",
      title: "Lima",
      description: "A capital do Peru, à beira do Pacífico, conhecida por sua gastronomia premiada e centro histórico colonial.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lima%20Plaza%20Mayor.jpg",
    },
    {
      city: "Arequipa",
      title: "Arequipa",
      description: "A 'Cidade Branca', cercada por vulcões, com o impressionante Mosteiro de Santa Catalina e o Cânion do Colca.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Arequipa%20Peru.jpg",
    },
    {
      city: "Lago Titicaca (Puno)",
      title: "Lago Titicaca (Puno)",
      description: "O lago navegável mais alto do mundo, famoso pelas ilhas flutuantes dos Uros e tradições ancestrais.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Titicaca%20Puno.jpg",
    },
    {
      city: "Nazca",
      title: "Nazca",
      description: "Conhecida pelas misteriosas Linhas de Nazca, enormes geoglifos visíveis apenas do alto.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nazca%20Lines%20Monkey.jpg",
    },
    {
      city: "Iquitos",
      title: "Iquitos",
      description: "Porta de entrada para a Amazônia peruana, acessível apenas por avião ou barco, com rica biodiversidade.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Iquitos%20Amazon%20Peru.jpg",
    },
    {
      city: "Paracas",
      title: "Paracas",
      description: "Famosa pela Reserva Nacional de Paracas e pelas Ilhas Ballestas, chamadas de 'Galápagos do Peru'.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Paracas%20Peru.jpg",
    },
    {
      city: "Huaraz",
      title: "Huaraz",
      description: "Cidade andina cercada pela Cordilheira Branca, ideal para trekking e aventuras em alta montanha.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Huascaran%20Huaraz.jpg",
    },
  ],
  Colombia: [
    {
      city: "Cartagena das Índias",
      title: "Cartagena das Índias",
      description: "Cidade colonial murada à beira do Caribe, famosa por suas cores vibrantes, arquitetura histórica e praias próximas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cartagena%20de%20Indias%20Colombia.jpg",
    },
    {
      city: "Bogotá",
      title: "Bogotá",
      description: "A capital da Colômbia, localizada a 2.600 metros de altitude, com o famoso Museu do Ouro e o bairro histórico La Candelaria.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bogota%20Panorama.jpg",
    },
    {
      city: "Medellín",
      title: "Medellín",
      description: "Conhecida como a 'Cidade da Eterna Primavera', é moderna, inovadora e cercada por montanhas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Medellin%20City.jpg",
    },
    {
      city: "San Andrés",
      title: "San Andrés",
      description: "Ilha paradisíaca no Caribe colombiano, famosa pelo mar de sete cores e mergulhos incríveis.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/San%20Andres%20Island%20Colombia.jpg",
    },
    {
      city: "Santa Marta",
      title: "Santa Marta",
      description: "Cidade litorânea histórica, porta de entrada para o Parque Tayrona e a Sierra Nevada de Santa Marta.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Santa%20Marta%20Colombia.jpg",
    },
    {
      city: "Parque Tayrona",
      title: "Parque Tayrona",
      description: "Parque nacional com praias selvagens, florestas tropicais e rica biodiversidade.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tayrona%20National%20Park%20Colombia.jpg",
    },
    {
      city: "Cali",
      title: "Cali",
      description: "Capital mundial da salsa, famosa por sua vida noturna, festivais de dança e cultura afro-colombiana.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cali%20Colombia%20Panorama.jpg",
    },
    {
      city: "Villa de Leyva",
      title: "Villa de Leyva",
      description: "Cidade colonial preservada com ruas de pedra e uma das maiores praças da América Latina.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Villa%20de%20Leyva%20Main%20Square.jpg",
    },
    {
      city: "Guatapé",
      title: "Guatapé",
      description: "Vila colorida famosa pelo monólito El Peñol, que oferece uma das vistas mais impressionantes do país.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Guatape%20El%20Penol.jpg",
    },
  ],
  Uruguay: [
    {
      city: "Montevidéu",
      title: "Montevidéu",
      description: "A capital do Uruguai, famosa pela Rambla à beira-mar, Cidade Velha e forte influência cultural.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Montevideo%20Panorama.jpg",
    },
    {
      city: "Punta del Este",
      title: "Punta del Este",
      description: "O balneário mais famoso do país, conhecido por suas praias badaladas, cassinos e vida noturna vibrante.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Punta%20del%20Este%20Beach.jpg",
    },
    {
      city: "Col��nia do Sacramento",
      title: "Colônia do Sacramento",
      description: "Cidade histórica com ruas de pedra e arquitetura colonial portuguesa, Patrimônio da UNESCO.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Colonia%20del%20Sacramento%20Street.jpg",
    },
    {
      city: "Cabo Polônio",
      title: "Cabo Polônio",
      description: "Vilarejo isolado sem energia elétrica convencional, famoso por dunas, leões marinhos e farol icônico.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cabo%20Polonio%20Uruguay.jpg",
    },
    {
      city: "Piri��polis",
      title: "Piri��polis",
      description: "Balneário com praias tranquilas, morros e um clima mais familiar que Punta del Este.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Piriapolis%20Uruguay.jpg",
    },
    {
      city: "La Paloma",
      title: "La Paloma",
      description: "Destino de surfistas e amantes da natureza, com praias extensas e atmosfera descontraída.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Paloma%20Uruguay.jpg",
    },
    {
      city: "José Ignacio",
      title: "José Ignacio",
      description: "Vilarejo sofisticado que virou point de luxo, famoso por pousadas elegantes e gastronomia refinada.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jose%20Ignacio%20Lighthouse.jpg",
    },
    {
      city: "Paysandú",
      title: "Paysandú",
      description: "Cidade às margens do Rio Uruguai, famosa por termas, turismo histórico e eventos culturais.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Paysandu%20Uruguay.jpg",
    },
    {
      city: "Salto",
      title: "Salto",
      description: "Cidade termal com águas quentes relaxantes e um dos principais destinos de turismo de bem-estar do país.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Salto%20Thermal%20Pools.jpg",
    },
  ],
  Paraguay: [
    {
      city: "Assunção",
      title: "Assunção",
      description: "A capital do Paraguai, localizada às margens do Rio Paraguai, com arquitetura colonial, praças e vida cultural vibrante.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio%20de%20los%20L%C3%B3pez%20Asunci%C3%B3n.jpg",
    },
    {
      city: "Ciudad del Este",
      title: "Ciudad del Este",
      description: "Cidade de fronteira com o Brasil, conhecida pelo comércio intenso e pela proximidade com as Cataratas do Iguaçu.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ciudad%20del%20Este%20Skyline.jpg",
    },
    {
      city: "Encarnación",
      title: "Encarnación",
      description: "Famosa por suas praias às margens do Rio Paraná e pelo Carnaval, considerado o melhor do país.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Encarnacion%20Beach%20Paraguay.jpg",
    },
    {
      city: "Saltos del Monday",
      title: "Saltos del Monday",
      description: "Impressionantes quedas d’água com mais de 40 metros de altura, localizadas próximas a Ciudad del Este.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Saltos%20del%20Monday%20Paraguay.jpg",
    },
    {
      city: "Trinidad",
      title: "Trinidad",
      description: "Ruínas jesuíticas de Santísima Trinidad del Paraná, Patrimônio Mundial da UNESCO, testemunho da história colonial.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Trinidad%20Jesuit%20Ruins%20Paraguay.jpg",
    },
    {
      city: "Jesús de Tavarangüe",
      title: "Jesús de Tavarangüe",
      description: "Outro importante sítio jesuítico, preservado e reconhecido pela UNESCO, parte do circuito missioneiro.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jesus%20de%20Tavarangue%20Ruins.jpg",
    },
    {
      city: "Filadélfia (Chaco)",
      title: "Filadélfia (Chaco)",
      description: "Cidade no coração do Chaco paraguaio, conhecida por sua cultura menonita e paisagens ��ridas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Filadelfia%20Chaco%20Paraguay.jpg",
    },
    {
      city: "Areguá",
      title: "Areguá",
      description: "Charmosa cidade colonial às margens do Lago Ypacaraí, famosa por seu artesanato em cerâmica e festival de morangos.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Aregua%20Paraguay.jpg",
    },
    {
      city: "Ybycuí",
      title: "Ybycuí",
      description: "Parque Nacional Ybycuí, com florestas subtropicais, trilhas e cachoeiras, ideal para ecoturismo.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ybycui%20National%20Park.jpg",
    },
  ],
  Guiana: [
    {
      city: "Georgetown",
      title: "Georgetown",
      description: "A capital da Guiana, famosa por sua arquitetura colonial de madeira e o Mercado de Stabroek.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Georgetown%20Guyana%20Stabroek%20Market.jpg",
    },
    {
      city: "Cataratas Kaieteur",
      title: "Cataratas Kaieteur",
      description: "Uma das maiores quedas d’água de queda única do mundo, localizada no coração da floresta amazônica.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kaieteur%20Falls%20Guyana.jpg",
    },
    {
      city: "Parque Nacional Iwokrama",
      title: "Parque Nacional Iwokrama",
      description: "Área protegida de floresta tropical, famosa por biodiversidade e experiências de ecoturismo.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Iwokrama%20Rainforest%20Guyana.jpg",
    },
    {
      city: "Lethem",
      title: "Lethem",
      description: "Cidade na fronteira com o Brasil, ponto de acesso ao interior guianense e rotas culturais.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lethem%20Guyana.jpg",
    },
    {
      city: "Shell Beach",
      title: "Shell Beach",
      description: "Praia remota famosa pela desova de tartarugas marinhas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shell%20Beach%20Guyana.jpg",
    },
  ],
  Suriname: [
    {
      city: "Paramaribo",
      title: "Paramaribo",
      description: "A capital do Suriname, com arquitetura colonial holandesa e diversidade cultural.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Paramaribo%20Suriname.jpg",
    },
    {
      city: "Palumeu",
      title: "Palumeu",
      description: "Vila indígena e destino de ecoturismo na floresta amazônica.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Palumeu%20Suriname.jpg",
    },
    {
      city: "Brownsberg",
      title: "Brownsberg",
      description: "Parque Natural com trilhas, cachoeiras e avistamento de aves.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Brownsberg%20Suriname.jpg",
    },
    {
      city: "Galibi",
      title: "Galibi",
      description: "Área costeira protegida, famosa por tartarugas marinhas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Galibi%20Beach%20Suriname.jpg",
    },
    {
      city: "Central Suriname Nature Reserve",
      title: "Central Suriname Nature Reserve",
      description: "Patrimônio da UNESCO, uma das maiores reservas florestais do mundo.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Central%20Suriname%20Nature%20Reserve.jpg",
    },
  ],
  "Guiana Francesa": [
    {
      city: "Cayenne",
      title: "Cayenne",
      description: "Capital da Guiana Francesa, conhecida por mercados coloridos e influência cultural francesa.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cayenne%20French%20Guiana.jpg",
    },
    {
      city: "Ilhas do Salut",
      title: "Ilhas do Salut",
      description: "Arquipélago famoso pela antiga prisão de Ilha do Diabo.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Devil%27s%20Island%20French%20Guiana.jpg",
    },
    {
      city: "Kourou",
      title: "Kourou",
      description: "Cidade que abriga o Centro Espacial da Guiana, base de lançamentos da ESA.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kourou%20Space%20Center.jpg",
    },
    {
      city: "Parque Amazônico da Guiana",
      title: "Parque Amazônico da Guiana",
      description: "Área protegida de floresta amazônica com rica biodiversidade.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Parc%20Amazonien%20French%20Guiana.jpg",
    },
    {
      city: "Saint-Laurent-du-Maroni",
      title: "Saint-Laurent-du-Maroni",
      description: "Cidade histórica com museu do antigo presídio e acesso ao Rio Maroni.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Saint-Laurent-du-Maroni%20French%20Guiana.jpg",
    },
  ],
  "Ilhas Malvinas": [
    {
      city: "Stanley",
      title: "Stanley",
      description: "A capital das Ilhas Malvinas, com museus sobre a Guerra das Malvinas e arquitetura britânica.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Stanley%20Falkland%20Islands.jpg",
    },
    {
      city: "Volunteer Point",
      title: "Volunteer Point",
      description: "Praia famosa por col��nias de pinguins-rei.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Volunteer%20Point%20Falklands.jpg",
    },
    {
      city: "West Falkland",
      title: "West Falkland",
      description: "Ilha com paisagens selvagens e avistamento de fauna marinha.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/West%20Falkland%20Islands.jpg",
    },
    {
      city: "Sea Lion Island",
      title: "Sea Lion Island",
      description: "Reserva natural com leões marinhos e aves marinhas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sea%20Lion%20Island%20Falklands.jpg",
    },
    {
      city: "Pebble Island",
      title: "Pebble Island",
      description: "Conhecida por praias longas e avifauna abundante.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pebble%20Island%20Falklands.jpg",
    },
  ],
  "Ilha de Páscoa": [
    {
      city: "Ahu Tongariki",
      title: "Ahu Tongariki",
      description: "O maior conjunto de moais da ilha, com 15 estátuas alinhadas frente ao mar.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ahu%20Tongariki%20Easter%20Island.jpg",
    },
    {
      city: "Rano Raraku",
      title: "Rano Raraku",
      description: "Pedreira onde os moais eram esculpidos, com dezenas de estátuas inacabadas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rano%20Raraku%20Easter%20Island.jpg",
    },
    {
      city: "Orongo",
      title: "Orongo",
      description: "Vila cerimonial ligada ao culto do Homem-Pássaro, com vistas espetaculares.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Orongo%20Easter%20Island.jpg",
    },
    {
      city: "Anakena",
      title: "Anakena",
      description: "Praia paradisíaca com moais restaurados e palmeiras.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Anakena%20Beach%20Easter%20Island.jpg",
    },
    {
      city: "Rano Kau",
      title: "Rano Kau",
      description: "Vulcão com lagoa no interior e miradouros impressionantes.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rano%20Kau%20Easter%20Island.jpg",
    },
  ],
  "Galápagos": [
    {
      city: "Ilha Santa Cruz",
      title: "Ilha Santa Cruz",
      description: "Lar da Estação Científica Charles Darwin e tartarugas gigantes.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Santa%20Cruz%20Island%20Galapagos.jpg",
    },
    {
      city: "Ilha Isabela",
      title: "Ilha Isabela",
      description: "A maior ilha do arquipélago, famosa por vulcões e diversidade de fauna.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Isabela%20Island%20Galapagos.jpg",
    },
    {
      city: "Ilha San Cristóbal",
      title: "Ilha San Cristóbal",
      description: "Ponto de entrada do arquipélago, com leões-marinhos e praias paradisíacas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/San%20Cristobal%20Galapagos.jpg",
    },
    {
      city: "Ilha Española",
      title: "Ilha Española",
      description: "Conhecida pela colônia de albatrozes e praias de areia branca.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Espanola%20Island%20Galapagos.jpg",
    },
    {
      city: "Ilha Floreana",
      title: "Ilha Floreana",
      description: "Histórica e repleta de vida marinha, popular para mergulho.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Floreana%20Island%20Galapagos.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Palm%20Beach%20Aruba.jpg",
    },
    {
      city: "Oranjestad",
      title: "Oranjestad",
      description:
        "A capital colorida de Aruba, com arquitetura colonial holandesa, lojas e vida cultural.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Oranjestad%20Aruba%20downtown.jpg",
    },
    {
      city: "Arikok National Park",
      title: "Arikok National Park",
      description:
        "Parque nacional que cobre quase 20% da ilha, com cavernas, trilhas e formações rochosas únicas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Arikok%20National%20Park%20Aruba.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Alto%20Vista%20Chapel%20Aruba.jpg",
    },
    {
      city: "Natural Pool (Conchi)",
      title: "Natural Pool (Conchi)",
      description:
        "Piscina natural escondida entre rochas vulcânicas no Parque Arikok, acessível por trilha ou 4x4.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Natural%20Pool%20Conchi%20Aruba.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Hamilton%20Bermuda%20Harbor.jpg",
    },
    {
      city: "St. George's",
      title: "St. George's",
      description:
        "Cidade histórica e Patrimônio Mundial da UNESCO, famosa por suas ruas coloniais e a St. Peter’s Church.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/St.%20George%27s%20Bermuda.jpg",
    },
    {
      city: "Horseshoe Bay Beach",
      title: "Horseshoe Bay Beach",
      description:
        "Uma das praias mais famosas das Bermudas, com areias rosadas e mar azul-turquesa.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Horseshoe%20Bay%20Beach%20Bermuda.jpg",
    },
    {
      city: "Royal Naval Dockyard",
      title: "Royal Naval Dockyard",
      description:
        "Antiga base naval britânica transformada em complexo turístico com museus, lojas e atrações culturais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Royal%20Naval%20Dockyard%20Bermuda.jpg",
    },
    {
      city: "Crystal and Fantasy Caves",
      title: "Crystal and Fantasy Caves",
      description:
        "Cavernas com estalactites e lagos subterrâneos cristalinos, um dos pontos naturais mais visitados.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Crystal%20Cave%20-%20Bermuda.jpg",
    },
    {
      city: "Gibb’s Hill Lighthouse",
      title: "Gibb’s Hill Lighthouse",
      description:
        "Farol histórico de ferro fundido, com vista panorâmica das ilhas Bermudas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Gibb%27s%20Hill%20Lighthouse%20Bermuda.jpg",
    },
    {
      city: "Elbow Beach",
      title: "Elbow Beach",
      description:
        "Praia famosa por sua beleza natural e resorts de luxo, ideal para mergulho com snorkel.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Elbow%20Beach%20Bermuda.jpg",
    },
    {
      city: "Botanical Gardens",
      title: "Botanical Gardens",
      description:
        "Jardins botânicos em Paget Parish, com flora tropical, esculturas e estufas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Bermuda%20Botanical%20Gardens.jpg",
    },
    {
      city: "Fort St. Catherine",
      title: "Fort St. Catherine",
      description:
        "Forte hist��rico do século XVII, com museu e vista para praias cristalinas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Fort%20St.%20Catherine%20Bermuda.jpg",
    },
  ],
  Greenland: [
    {
      city: "Nuuk",
      title: "Nuuk",
      description:
        "A capital da Groenlândia, mistura modernidade com tradição inuíte e possui museus, arquitetura colorida e vistas para fiordes.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nuuk%20-%20Greenland.jpg",
    },
    {
      city: "Ilulissat",
      title: "Ilulissat",
      description:
        "Famosa pelo Ilulissat Icefjord, Patrimônio Mundial da UNESCO, com enormes icebergs flutuantes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ilulissat%20Icefjord%20Greenland.jpg",
    },
    {
      city: "Kangerlussuaq",
      title: "Kangerlussuaq",
      description:
        "Ponto de acesso à calota de gelo da Groenlândia, ideal para trilhas e passeios sobre geleiras.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kangerlussuaq%20Greenland.jpg",
    },
    {
      city: "Qaqortoq",
      title: "Qaqortoq",
      description:
        "A maior cidade do sul da Groenlândia, conhecida por esculturas ao ar livre e casas coloridas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Qaqortoq%20Greenland.jpg",
    },
    {
      city: "Sisimiut",
      title: "Sisimiut",
      description:
        "A segunda maior cidade, famosa por atividades de inverno como trenós puxados por cães e esqui.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sisimiut%20-%20Greenland.jpg",
    },
    {
      city: "Narsaq",
      title: "Narsaq",
      description:
        "Cidade pitoresca rodeada por montanhas, geleiras e fiordes, ideal para caminhadas e pesca.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Narsaq%20-%20Greenland.jpg",
    },
    {
      city: "Tasiilaq",
      title: "Tasiilaq",
      description:
        "A maior cidade da costa leste, cercada por montanhas e glaciares, famosa por paisagens intocadas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tasiilaq%20-%20Greenland.jpg",
    },
    {
      city: "Kulusuk",
      title: "Kulusuk",
      description:
        "Pequena vila tradicional inuíte na costa leste, porta de entrada para aventuras árticas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kulusuk%20village%20-%20Greenland.jpg",
    },
    {
      city: "Uummannaq",
      title: "Uummannaq",
      description:
        "Cidade insular dominada pela impressionante montanha em formato de coração, ícone da Groenlândia.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Uummannaq%20Mountain%20-%20Greenland.jpg",
    },
  ],
  "The Bahamas": [
    {
      city: "Nassau",
      title: "Nassau",
      description:
        "A capital das Bahamas, famosa por suas praias, resorts, arquitetura colonial e o movimentado Straw Market.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Nassau%20Bahamas%20harbor.jpg",
    },
    {
      city: "Paradise Island",
      title: "Paradise Island",
      description:
        "Conectada a Nassau por pontes, abriga o famoso resort Atlantis, cassinos e aquários gigantes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Atlantis%20Paradise%20Island%20Bahamas.jpg",
    },
    {
      city: "Exuma Cays",
      title: "Exuma Cays",
      description:
        "Arquipélago de ilhotas com águas cristalinas e os famosos porquinhos que nadam em Big Major Cay.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Swimming%20pigs%20Exuma%20Bahamas.jpg",
    },
    {
      city: "Grand Bahama",
      title: "Grand Bahama",
      description:
        "Uma das ilhas mais visitadas, com praias de areia branca, cavernas e parques naturais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Grand%20Bahama%20Island%20beach.jpg",
    },
    {
      city: "Harbour Island",
      title: "Harbour Island",
      description:
        "Conhecida por sua praia de areia rosa (Pink Sands Beach) e charme caribenho autêntico.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pink%20Sands%20Beach%20Harbour%20Island.jpg",
    },
    {
      city: "Andros Island",
      title: "Andros Island",
      description:
        "Maior ilha das Bahamas, famosa por mergulho em recifes, blue holes e natureza selvagem.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20Hole%20Andros%20Bahamas.jpg",
    },
    {
      city: "Bimini",
      title: "Bimini",
      description:
        "Ilha próxima à Flórida, popular para pesca esportiva e mergulho em águas cristalinas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Bimini%20Bahamas%20beach.jpg",
    },
    {
      city: "Long Island",
      title: "Long Island",
      description:
        "Famosa pelo Dean’s Blue Hole, um dos buracos azuis mais profundos do mundo.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Dean%27s%20Blue%20Hole%20Long%20Island%20Bahamas.jpg",
    },
    {
      city: "Eleuthera",
      title: "Eleuthera",
      description:
        "Ilha estreita com quilômetros de praias intocadas, famosa por sua beleza natural e tranquilidade.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Eleuthera%20Bahamas%20beach.jpg",
    },
  ],
  "Puerto Rico": [
    {
      city: "San Juan",
      title: "San Juan",
      description:
        "A capital de Porto Rico, com a charmosa cidade velha (Old San Juan), muralhas históricas e forte El Morro.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Old%20San%20Juan%20Puerto%20Rico.jpg",
    },
    {
      city: "El Yunque",
      title: "El Yunque",
      description:
        "Única floresta tropical do sistema de parques nacionais dos EUA, com cachoeiras e trilhas exuberantes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/El%20Yunque%20Rainforest%20Puerto%20Rico.jpg",
    },
    {
      city: "Vieques",
      title: "Vieques",
      description:
        "Ilha paradisíaca conhecida por suas praias intocadas e pela famosa Baía Bioluminescente.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Vieques%20Puerto%20Rico%20Bioluminescent%20Bay.jpg",
    },
    {
      city: "Culebra",
      title: "Culebra",
      description:
        "Ilha caribenha com a famosa Playa Flamenco, considerada uma das mais belas do mundo.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Flamenco%20Beach%20Culebra%20Puerto%20Rico.jpg",
    },
    {
      city: "Ponce",
      title: "Ponce",
      description:
        "Conhecida como a 'Pérola do Sul', possui arquitetura neoclássica, museus e a famosa Plaza Las Delicias.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ponce%20Puerto%20Rico%20Plaza%20Las%20Delicias.jpg",
    },
    {
      city: "Cabo Rojo",
      title: "Cabo Rojo",
      description:
        "Destino costeiro famoso por falésias, salinas e a icônica praia Playa Sucia.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cabo%20Rojo%20Puerto%20Rico.jpg",
    },
    {
      city: "Rincón",
      title: "Rincón",
      description:
        "Paraíso dos surfistas, com ondas perfeitas e praias ideais para pôr do sol.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Rincon%20Puerto%20Rico%20surf%20beach.jpg",
    },
    {
      city: "Arecibo",
      title: "Arecibo",
      description:
        "Famosa pelo antigo radiotelescópio e pela Cueva del Indio, com vistas incríveis do Atlântico.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cueva%20del%20Indio%20Arecibo%20Puerto%20Rico.jpg",
    },
    {
      city: "Isla Verde",
      title: "Isla Verde",
      description:
        "Região de resorts e praias badaladas próxima a San Juan, popular entre turistas internacionais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Isla%20Verde%20Beach%20Puerto%20Rico.jpg",
    },
  ],
  Barbados: [
    {
      city: "Bridgetown",
      title: "Bridgetown",
      description:
        "A capital de Barbados, com arquitetura colonial, comércio vibrante e o histórico Garrison Savannah.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Bridgetown%20Barbados%20harbor.jpg",
    },
    {
      city: "Carlisle Bay",
      title: "Carlisle Bay",
      description:
        "Baía de águas calmas e cristalinas, excelente para mergulho e snorkeling entre naufrágios.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Carlisle%20Bay%20Barbados.jpg",
    },
    {
      city: "Bathsheba",
      title: "Bathsheba",
      description:
        "Vila costeira no leste da ilha, famosa pelas formações rochosas e ondas perfeitas para surf.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Bathsheba%20Beach%20Barbados.jpg",
    },
    {
      city: "Harrison’s Cave",
      title: "Harrison’s Cave",
      description:
        "Sistema de cavernas com estalactites, estalagmites e riachos subterrâneos acessíveis por bonde.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Harrison%27s%20Cave%20Barbados.jpg",
    },
    {
      city: "Oistins",
      title: "Oistins",
      description:
        "Cidade costeira famosa pela Fish Fry, evento de sexta-feira com música, dança e frutos do mar.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Oistins%20Barbados.jpg",
    },
    {
      city: "St. Lawrence Gap",
      title: "St. Lawrence Gap",
      description:
        "Área tur��stica animada, conhecida por bares, restaurantes e vida noturna intensa.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/St.%20Lawrence%20Gap%20Barbados.jpg",
    },
    {
      city: "Animal Flower Cave",
      title: "Animal Flower Cave",
      description:
        "Caverna marinha com piscinas naturais e vistas espetaculares do oceano Atlântico.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Animal%20Flower%20Cave%20Barbados.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Andromeda%20Botanic%20Gardens%20Barbados.jpg",
    },
  ],
  "Saint Martin": [
    {
      city: "Maho Beach",
      title: "Maho Beach",
      description:
        "Praia famosa por ficar colada ao Aeroporto Princess Juliana, onde avi��es passam a poucos metros da areia.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Maho%20Beach%20St%20Maarten.jpg",
    },
    {
      city: "Philipsburg",
      title: "Philipsburg",
      description:
        "Capital do lado holandês, conhecida pela Front Street, cassinos, duty-free e o Great Bay Beach.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Philipsburg%20Sint%20Maarten.jpg",
    },
    {
      city: "Marigot",
      title: "Marigot",
      description:
        "Capital do lado francês, charmosa com mercados, boutiques e arquitetura colonial.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Marigot%20Saint%20Martin.jpg",
    },
    {
      city: "Orient Bay Beach",
      title: "Orient Bay Beach",
      description:
        "Praia popular no lado francês, conhecida por resorts, esportes aquáticos e áreas naturistas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Orient%20Bay%20Saint%20Martin.jpg",
    },
    {
      city: "Fort Louis",
      title: "Fort Louis",
      description:
        "Forte histórico construído pelos franceses em Marigot, com vistas panorâmicas da ilha.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Fort%20Louis%20Saint%20Martin.jpg",
    },
    {
      city: "Simpson Bay",
      title: "Simpson Bay",
      description:
        "Área turística com marina, restaurantes e vida noturna agitada no lado holandês.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Simpson%20Bay%20Sint%20Maarten.jpg",
    },
    {
      city: "Grand Case",
      title: "Grand Case",
      description:
        "Vila gastronômica do lado francês, famosa por seus restaurantes de alta qualidade.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Grand%20Case%20Saint%20Martin.jpg",
    },
    {
      city: "Pinel Island",
      title: "Pinel Island",
      description:
        "Pequena ilha acessível de barco, com praias tranquilas, snorkel e bares à beira-mar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pinel%20Island%20Saint%20Martin.jpg",
    },
    {
      city: "Loterie Farm",
      title: "Loterie Farm",
      description:
        "Reserva natural com trilhas, tirolesas e piscinas, localizada no interior montanhoso da ilha.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Loterie%20Farm%20Saint%20Martin.jpg",
    },
  ],
  "Cayman Islands": [
    {
      city: "Seven Mile Beach",
      title: "Seven Mile Beach",
      description:
        "Praia icônica de areia branca e águas azul-turquesa, considerada uma das mais bonitas do Caribe.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Seven%20Mile%20Beach%20Grand%20Cayman.jpg",
    },
    {
      city: "Stingray City",
      title: "Stingray City",
      description:
        "Banco de areia no mar onde visitantes podem interagir com arraias em seu habitat natural.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Stingray%20City%20Grand%20Cayman.jpg",
    },
    {
      city: "George Town",
      title: "George Town",
      description:
        "Capital das Ilhas Cayman, centro financeiro e cultural, com lojas, museus e portos de cruzeiros.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/George%20Town%20Grand%20Cayman.jpg",
    },
    {
      city: "Rum Point",
      title: "Rum Point",
      description:
        "Praia relaxante em Grand Cayman, ideal para esportes aquáticos e saborear coquetéis tropicais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Rum%20Point%20Grand%20Cayman.jpg",
    },
    {
      city: "Cayman Turtle Centre",
      title: "Cayman Turtle Centre",
      description:
        "Centro de preservação de tartarugas-verdes, onde visitantes podem aprender e interagir com os animais.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cayman%20Turtle%20Centre.jpg",
    },
    {
      city: "Pedro St. James Castle",
      title: "Pedro St. James Castle",
      description:
        "Histórico casarão colonial do século XVIII, considerado o 'berço da democracia' nas Ilhas Cayman.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pedro%20St.%20James%20Castle.jpg",
    },
    {
      city: "Cayman Crystal Caves",
      title: "Cayman Crystal Caves",
      description:
        "Sistema de cavernas em meio à floresta tropical com estalactites, estalagmites e lago subterrâneo.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cayman%20Crystal%20Caves.jpg",
    },
    {
      city: "Little Cayman",
      title: "Little Cayman",
      description:
        "Ilha paradisíaca e pouco habitada, famosa pelo mergulho no Bloody Bay Wall e praias desertas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Little%20Cayman%20beach.jpg",
    },
    {
      city: "Cayman Brac",
      title: "Cayman Brac",
      description:
        "Ilha com falésias dramáticas, cavernas e trilhas, além de ótimos pontos de mergulho.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cayman%20Brac%20cliffs.jpg",
    },
  ],
  Guadeloupe: [
    {
      city: "Pointe-à-Pitre",
      title: "Pointe-à-Pitre",
      description:
        "Principal cidade e centro econômico de Guadalupe, famosa pelos mercados coloridos e vida cultural.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pointe-a-Pitre%20Guadeloupe.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Soufriere%20Guadeloupe.jpg",
    },
    {
      city: "Praia de Grande Anse",
      title: "Praia de Grande Anse",
      description:
        "Uma das mais belas praias de Guadalupe, com areias douradas e mar azul intenso em Deshaies.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Grande-Anse%20Deshaies%20Guadeloupe.jpg",
    },
    {
      city: "Îles des Saintes",
      title: "Îles des Saintes",
      description:
        "Arquipélago ao sul de Guadalupe, conhecido por praias idílicas e vilas pitorescas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Iles%20des%20Saintes.jpg",
    },
    {
      city: "Marie-Galante",
      title: "Marie-Galante",
      description:
        "Ilha de atmosfera tranquila, famosa por canaviais, praias isoladas e destilarias de rum.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Marie-Galante%20beach.jpg",
    },
    {
      city: "Deshaies",
      title: "Deshaies",
      description:
        "Vila charmosa no noroeste, conhecida por jardins botânicos e cenários da série ‘Death in Paradise’.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Deshaies%20Guadeloupe.jpg",
    },
    {
      city: "Reserva de Cousteau",
      title: "Reserva de Cousteau",
      description:
        "��rea marinha protegida em torno das Ilhas Pigeon, famosa pelo mergulho e snorkel.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Reserve%20Cousteau%20Guadeloupe.jpg",
    },
    {
      city: "Praia de Sainte-Anne",
      title: "Praia de Sainte-Anne",
      description:
        "Praia movimentada e turística de areia branca, palmeiras e mercados locais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sainte-Anne%20Guadeloupe.jpg",
    },
  ],
  Belize: [
    {
      city: "Ambergris Caye",
      title: "Ambergris Caye",
      description:
        "A ilha mais famosa de Belize, com praias paradisíacas, resorts e acesso direto �� Barreira de Corais de Belize.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ambergris%20Caye%20Belize.jpg",
    },
    {
      city: "Great Blue Hole",
      title: "Great Blue Hole",
      description:
        "O famoso buraco azul de Belize, um dos melhores pontos de mergulho do mundo, com águas profundas e vida marinha vibrante.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Great%20Blue%20Hole%20Belize.jpg",
    },
    {
      city: "Caye Caulker",
      title: "Caye Caulker",
      description:
        "Ilha charmosa com atmosfera descontraída e o lema 'Go Slow', perfeita para relaxar e praticar snorkel.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Caye%20Caulker%20Belize.jpg",
    },
    {
      city: "Belize City",
      title: "Belize City",
      description:
        "Maior cidade do país, ponto de entrada para turistas, com arquitetura colonial e o Museu de Belize.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Belize%20City%20Skyline.jpg",
    },
    {
      city: "San Ignacio",
      title: "San Ignacio",
      description:
        "Cidade vibrante no interior, cercada por florestas tropicais, cavernas e ruínas maias como Xunantunich e Cahal Pech.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/San%20Ignacio%20Belize.jpg",
    },
    {
      city: "Placencia",
      title: "Placencia",
      description:
        "Vilarejo costeiro famoso por suas praias e resorts à beira-mar, além de ser ótimo ponto para explorar ilhas próximas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Placencia%20Belize.jpg",
    },
    {
      city: "Hopkins",
      title: "Hopkins",
      description:
        "Pequena vila garífuna conhecida por sua cultura vibrante, hospitalidade e proximidade com o Parque Nacional Bocawina.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Hopkins%20Village%20Belize.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mountain%20Pine%20Ridge%20Forest%20Reserve%20Belize.jpg",
    },
  ],
  Guatemala: [
    {
      city: "Antigua Guatemala",
      title: "Antigua Guatemala",
      description:
        "Antiga capital colonial com arquitetura espanhola preservada, ruínas históricas e ruas de paralelepípedo aos pés de vulcões.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Antigua%20Guatemala%20city%20view%20with%20Volcano%20Agua.jpg",
    },
    {
      city: "Lago de Atitlán",
      title: "Lago de Atitlán",
      description:
        "Um dos lagos mais bonitos do mundo, cercado por vulcões e vilas maias coloridas com mercados e tradições únicas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Atitlan%20Guatemala.jpg",
    },
    {
      city: "Tikal",
      title: "Tikal",
      description:
        "Imenso sítio arqueológico maia no meio da selva, com pirâmides antigas e fauna exuberante ao redor.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tikal%20Temple%20I%20Guatemala.jpg",
    },
    {
      city: "Chichicastenango",
      title: "Chichicastenango",
      description:
        "Cidade famosa por seu mercado indígena colorido e pela Igreja de Santo Tomás, símbolo da fusão entre cultura maia e católica.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Chichicastenango%20market%20Guatemala.jpg",
    },
    {
      city: "Semuc Champey",
      title: "Semuc Champey",
      description:
        "Conjunto natural de piscinas turquesa sobre rochas calcárias, cercadas por floresta tropical — um dos lugares mais paradisíacos do país.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Semuc%20Champey%20Guatemala.jpg",
    },
    {
      city: "Flores",
      title: "Flores",
      description:
        "Charmosa ilha no Lago Petén Itzá, base para explorar Tikal e outras ruínas maias da região norte.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Flores%20Island%20Guatemala.jpg",
    },
    {
      city: "Quetzaltenango (Xela)",
      title: "Quetzaltenango (Xela)",
      description:
        "Segunda maior cidade da Guatemala, cercada por montanhas e vulcões, famosa por suas escolas de espanhol e cultura autêntica.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Quetzaltenango%20Guatemala.jpg",
    },
    {
      city: "Pacaya Volcano",
      title: "Pacaya Volcano",
      description:
        "Vulcão ativo acessível para trilhas e tours de aventura, onde é possível ver fluxos de lava e vistas incríveis.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pacaya%20Volcano%20Guatemala.jpg",
    },
    {
      city: "Livingston",
      title: "Livingston",
      description:
        "Cidade costeira com forte influência garífuna, acessível apenas de barco, com praias tropicais e cultura vibrante.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Livingston%20Guatemala.jpg",
    },
  ],
  "El Salvador": [
    {
      city: "San Salvador",
      title: "San Salvador",
      description:
        "Capital moderna do país, cercada por montanhas e vulc��es, com museus, vida noturna e a impressionante Catedral Metropolitana.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/San%20Salvador%20El%20Salvador%20skyline.jpg",
    },
    {
      city: "Santa Ana",
      title: "Santa Ana",
      description:
        "Cidade colonial charmosa próxima ao vulcão de mesmo nome e ao Lago Coatepeque, um dos cart��es-postais do país.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Santa%20Ana%20El%20Salvador.jpg",
    },
    {
      city: "Lago Coatepeque",
      title: "Lago Coatepeque",
      description:
        "Lago de cratera vulcânica com águas azul-turquesa, ideal para esportes aquáticos e relaxamento com vista panorâmica.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Coatepeque%20El%20Salvador.jpg",
    },
    {
      city: "Suchitoto",
      title: "Suchitoto",
      description:
        "Cidade colonial pitoresca com ruas de pedra, arte local, boa gastronomia e o Lago Suchitlán ao lado.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Suchitoto%20El%20Salvador.jpg",
    },
    {
      city: "El Tunco",
      title: "El Tunco",
      description:
        "Praia icônica entre surfistas do mundo todo, com bares, hostels e o pôr do sol mais famoso do país.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/El%20Tunco%20beach%20El%20Salvador.jpg",
    },
    {
      city: "Ruta de las Flores",
      title: "Ruta de las Flores",
      description:
        "Rota turística entre vilarejos de montanha cobertos por flores, cafés e mercados artesanais — ideal para road trips.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ruta%20de%20las%20Flores%20El%20Salvador.jpg",
    },
    {
      city: "Parque Nacional El Boquerón",
      title: "Parque Nacional El Boquerón",
      description:
        "Localizado no topo do vulcão de San Salvador, oferece trilhas e mirantes com vista impressionante da cratera.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/El%20Boqueron%20San%20Salvador%20volcano.jpg",
    },
    {
      city: "Tazumal",
      title: "Tazumal",
      description:
        "Importante sítio arqueológico maia com pirâmides e ruínas bem preservadas, localizado na cidade de Chalchuapa.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tazumal%20El%20Salvador.jpg",
    },
    {
      city: "El Imposible National Park",
      title: "El Imposible National Park",
      description:
        "Maior parque nacional do país, com trilhas, florestas tropicais e biodiversidade impressionante.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/El%20Imposible%20National%20Park%20El%20Salvador.jpg",
    },
  ],
  Nicaragua: [
    {
      city: "Granada",
      title: "Granada",
      description:
        "Cidade colonial às margens do Lago Nicarágua, famosa por sua arquitetura colorida, catedrais e passeios pelas ilhas próximas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Granada%20Nicaragua%20cathedral.jpg",
    },
    {
      city: "León",
      title: "León",
      description:
        "Centro histórico e cultural com catedrais barrocas, arte urbana vibrante e acesso fácil ao vulcão Cerro Negro.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Leon%20Cathedral%20Nicaragua.jpg",
    },
    {
      city: "Isla de Ometepe",
      title: "Isla de Ometepe",
      description:
        "Ilha formada por dois vulc��es no Lago Nicarágua, com trilhas, cachoeiras e uma natureza espetacular.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ometepe%20Island%20Nicaragua.jpg",
    },
    {
      city: "San Juan del Sur",
      title: "San Juan del Sur",
      description:
        "Balneário popular entre surfistas e mochileiros, conhecido por suas praias e vida noturna animada.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/San%20Juan%20del%20Sur%20Nicaragua.jpg",
    },
    {
      city: "Vulcão Masaya",
      title: "Vulcão Masaya",
      description:
        "Vulcão ativo acessível de carro, onde é possível observar a lava incandescente de seus mirantes noturnos.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Masaya%20Volcano%20Nicaragua.jpg",
    },
    {
      city: "Corn Islands",
      title: "Corn Islands",
      description:
        "Duas ilhas paradisíacas no Caribe nicaraguense, com águas cristalinas, mergulho e clima tropical perfeito.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Big%20Corn%20Island%20Nicaragua.jpg",
    },
    {
      city: "Matagalpa",
      title: "Matagalpa",
      description:
        "Região montanhosa no coração do país, conhecida pelo cultivo de café, trilhas ecológicas e clima agradável.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Matagalpa%20Nicaragua.jpg",
    },
    {
      city: "Estelí",
      title: "Estelí",
      description:
        "Cidade conhecida por sua indústria de charutos, arte de rua e paisagens montanhosas ideais para ecoturismo.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Esteli%20Nicaragua.jpg",
    },
    {
      city: "Laguna de Apoyo",
      title: "Laguna de Apoyo",
      description:
        "Lago de cratera vulcânica entre Granada e Masaya, ótimo para natação, caiaque e relaxamento em meio à natureza.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Laguna%20de%20Apoyo%20Nicaragua.jpg",
    },
  ],
  Honduras: [
    {
      city: "Roatán",
      title: "Roatán",
      description:
        "A ilha mais famosa de Honduras, com praias paradisíacas, recifes de corais e um dos melhores pontos de mergulho do Caribe.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roatan%20Honduras%20beach.jpg",
    },
    {
      city: "Utila",
      title: "Utila",
      description:
        "Pequena ilha próxima a Roatán, conhecida por mergulhos acessíveis, vida marinha rica e atmosfera mochileira descontraída.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Utila%20Honduras.jpg",
    },
    {
      city: "Copán Ruinas",
      title: "Cop��n Ruinas",
      description:
        "Antigo centro maia com esculturas e hieróglifos detalhados — um dos sítios arqueológicos mais importantes da Mesoamérica.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Copan%20Ruins%20Honduras.jpg",
    },
    {
      city: "Tela",
      title: "Tela",
      description:
        "Cidade litorânea famosa por suas praias e pelo acesso ao Parque Nacional Punta Sal e Jardins Botânicos Lancetilla.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tela%20Honduras%20beach.jpg",
    },
    {
      city: "La Ceiba",
      title: "La Ceiba",
      description:
        "Cidade vibrante na costa caribenha, ponto de partida para as Ilhas da Baía e o Parque Nacional Pico Bonito.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Ceiba%20Honduras.jpg",
    },
    {
      city: "Parque Nacional Pico Bonito",
      title: "Parque Nacional Pico Bonito",
      description:
        "Reserva natural com trilhas, cachoeiras e observação de aves — perfeita para ecoturismo e aventura.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pico%20Bonito%20National%20Park%20Honduras.jpg",
    },
    {
      city: "Trujillo",
      title: "Trujillo",
      description:
        "Cidade histórica com belas praias, ruínas coloniais e vistas espetaculares da Baía de Trujillo.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Trujillo%20Honduras%20bay.jpg",
    },
    {
      city: "Gracias",
      title: "Gracias",
      description:
        "Cidade colonial cercada por montanhas e próxima ao Parque Nacional Celaque, que abriga o pico mais alto de Honduras.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Gracias%20Honduras.jpg",
    },
    {
      city: "Comayagua",
      title: "Comayagua",
      description:
        "Antiga capital colonial com catedrais históricas, museus e tradições culturais fortes, especialmente na Semana Santa.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Comayagua%20Honduras%20Cathedral.jpg",
    },
  ],
  "Costa Rica": [
    {
      city: "Parque Nacional Manuel Antonio",
      title: "Parque Nacional Manuel Antonio",
      description:
        "Um dos destinos mais famosos da Costa Rica, combina praias paradisíacas, trilhas e rica fauna com macacos, preguiças e aves tropicais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Manuel%20Antonio%20National%20Park%20Costa%20Rica.jpg",
    },
    {
      city: "Vulcão Arenal",
      title: "Vulcão Arenal",
      description:
        "Vulcão emblemático cercado por fontes termais, trilhas e o Lago Arenal, ideal para esportes aquáticos.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Arenal%20Volcano%20Costa%20Rica.jpg",
    },
    {
      city: "Monteverde Cloud Forest",
      title: "Monteverde Cloud Forest",
      description:
        "Reserva biológica coberta por florestas de neblina, pontes suspensas e grande diversidade de espécies.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Monteverde%20Cloud%20Forest%20Costa%20Rica.jpg",
    },
    {
      city: "Tamarindo",
      title: "Tamarindo",
      description:
        "Praia vibrante na costa do Pacífico, famosa por surfe, vida noturna e pores do sol inesquecíveis.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tamarindo%20Beach%20Costa%20Rica.jpg",
    },
    {
      city: "Parque Nacional Tortuguero",
      title: "Parque Nacional Tortuguero",
      description:
        "Conhecido como a 'Amazônia da Costa Rica', é acessível apenas de barco e abriga ninhos de tartarugas marinhas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tortuguero%20National%20Park%20Costa%20Rica.jpg",
    },
    {
      city: "Parque Nacional Corcovado",
      title: "Parque Nacional Corcovado",
      description:
        "Localizado na Península de Osa, abriga uma das maiores biodiversidades do planeta.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Corcovado%20National%20Park%20Costa%20Rica.jpg",
    },
    {
      city: "San José",
      title: "San José",
      description:
        "A capital do país, com museus, mercados e arquitetura histórica, além de ser ponto de partida para explorar o interior.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/San%20Jose%20Costa%20Rica%20downtown.jpg",
    },
    {
      city: "Puerto Viejo de Talamanca",
      title: "Puerto Viejo de Talamanca",
      description:
        "Destino caribenho alternativo, com forte cultura afro-caribenha, praias e vida boêmia.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Puerto%20Viejo%20de%20Talamanca%20Costa%20Rica.jpg",
    },
    {
      city: "Rincón de la Vieja",
      title: "Rincón de la Vieja",
      description:
        "Parque nacional com vulcões, cachoeiras e águas termais na região de Guanacaste.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Rincon%20de%20la%20Vieja%20National%20Park%20Costa%20Rica.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Casco%20Viejo%20Panama%20City.jpg",
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
      city: "Boquete",
      title: "Boquete",
      description:
        "Cidade nas montanhas de Chiriquí, conhecida por plantações de café, trilhas e o Vulcão Barú.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Boquete%20Panama.jpg",
    },
    {
      city: "San Blas (Guna Yala)",
      title: "San Blas (Guna Yala)",
      description:
        "Arquipélago com mais de 300 ilhas administradas pelo povo indígena Guna, ideal para quem busca natureza intocada.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/San%20Blas%20Islands%20Panama.jpg",
    },
    {
      city: "Isla Taboga",
      title: "Isla Taboga",
      description:
        "Conhecida como 'Ilha das Flores', fica próxima à Cidade do Panamá e é destino popular para um bate-volta.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Isla%20Taboga%20Panama.jpg",
    },
    {
      city: "Parque Nacional Coiba",
      title: "Parque Nacional Coiba",
      description:
        "Antiga colônia penal transformada em reserva marinha, considerada Patrimônio Mundial da UNESCO e um dos melhores pontos de mergulho do país.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Coiba%20National%20Park%20Panama.jpg",
    },
    {
      city: "Portobelo",
      title: "Portobelo",
      description:
        "Cidade histórica na costa caribenha, com fortes coloniais e ruínas que contam a história das rotas espanholas de ouro.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Portobelo%20Panama%20fortress.jpg",
    },
  ],
  Cuba: [
    {
      city: "Havana",
      title: "Havana",
      description:
        "A capital cubana é um museu a céu aberto, com carros clássicos, arquitetura colonial e o famoso Malecón à beira-mar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Havana%20Cuba%20Capitol%20and%20Classic%20Car.jpg",
    },
    {
      city: "Varadero",
      title: "Varadero",
      description:
        "Resort mais famoso de Cuba, com praias de areia branca, águas azul-turquesa e grandes resorts all-inclusive.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Varadero%20Beach%20Cuba.jpg",
    },
    {
      city: "Trinidad",
      title: "Trinidad",
      description:
        "Cidade colonial belamente preservada, Patrimônio Mundial da UNESCO, com ruas de paralelepípedo e música ao vivo em cada esquina.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Trinidad%20Cuba%20Plaza%20Mayor.jpg",
    },
    {
      city: "Viñales",
      title: "Viñales",
      description:
        "Vale cercado por montanhas e plantações de tabaco, ideal para quem quer conhecer o lado rural de Cuba.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Vinales%20Valley%20Cuba.jpg",
    },
    {
      city: "Cayo Coco",
      title: "Cayo Coco",
      description:
        "Ilha paradisíaca conectada por estrada ao continente, famosa por resorts de luxo e águas cristalinas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cayo%20Coco%20beach%20Cuba.jpg",
    },
    {
      city: "Santiago de Cuba",
      title: "Santiago de Cuba",
      description:
        "Segunda maior cidade do país, berço do son cubano e de tradições afro-caribenhas vibrantes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Santiago%20de%20Cuba%20Cathedral.jpg",
    },
    {
      city: "Cienfuegos",
      title: "Cienfuegos",
      description:
        "Conhecida como a 'Pérola do Sul', tem arquitetura neoclássica e influência francesa às margens do mar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cienfuegos%20Cuba%20city%20view.jpg",
    },
    {
      city: "Cayo Largo del Sur",
      title: "Cayo Largo del Sur",
      description:
        "Ilha paradisíaca no Mar do Caribe, com praias isoladas e recifes de coral ideais para mergulho.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cayo%20Largo%20del%20Sur%20Cuba.jpg",
    },
    {
      city: "Santa Clara",
      title: "Santa Clara",
      description:
        "Cidade hist��rica famosa pelo Mausoléu de Che Guevara e sua importância na Revolução Cubana.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Santa%20Clara%20Che%20Guevara%20Mausoleum%20Cuba.jpg",
    },
  ],
  Haiti: [
    {
      city: "Citadelle Laferrière",
      title: "Citadelle Laferrière",
      description:
        "Fortaleza monumental no topo de uma montanha em Milot, símbolo da independência haitiana e Patrimônio Mundial da UNESCO.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Citadelle%20Laferri%C3%A8re%20Haiti.jpg",
    },
    {
      city: "Labadee",
      title: "Labadee",
      description:
        "Resort costeiro exclusivo da Royal Caribbean, com praias paradisíacas, esportes aquáticos e vistas espetaculares do Caribe.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Labadee%20Haiti%20beach.jpg",
    },
    {
      city: "Cap-Haïtien",
      title: "Cap-Haïtien",
      description:
        "Cidade histórica com arquitetura colonial e acesso a marcos culturais como a Citadelle e o Palácio Sans-Souci.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cap-Haitien%20Haiti.jpg",
    },
    {
      city: "Jacmel",
      title: "Jacmel",
      description:
        "Cidade costeira artística famosa por seu carnaval, galerias e arquitetura colonial bem preservada.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Jacmel%20Haiti%20seaside.jpg",
    },
    {
      city: "Port-au-Prince",
      title: "Port-au-Prince",
      description:
        "Capital do país, com o Museu do Panteão Nacional Haitiano (MUPANAH), mercados vibrantes e intensa vida cultural.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Port-au-Prince%20Haiti%20skyline.jpg",
    },
    {
      city: "Bassin Bleu",
      title: "Bassin Bleu",
      description:
        "Conjunto de piscinas naturais e cachoeiras de águas azul-turquesa, escondidas nas montanhas perto de Jacmel.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Bassin%20Bleu%20Haiti.jpg",
    },
    {
      city: "Île-à-Vache",
      title: "Île-à-Vache",
      description:
        "Ilha paradisíaca no sul do Haiti com praias desertas, resorts ecológicos e mar cristalino.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ile-a-Vache%20Haiti.jpg",
    },
    {
      city: "Palácio Sans-Souci",
      title: "Palácio Sans-Souci",
      description:
        "Ruínas do palácio do rei Henri Christophe, um dos mais impressionantes monumentos históricos do Haiti.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Palais%20Sans-Souci%20Haiti.jpg",
    },
    {
      city: "Parc Macaya",
      title: "Parc Macaya",
      description:
        "Parque Nacional localizado nas montanhas do sul, com florestas nubladas, biodiversidade rica e trilhas ecológicas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Parc%20National%20Macaya%20Haiti.jpg",
    },
  ],
  "Trinidad and Tobago": [
    {
      city: "Maracas Bay (Trinidad)",
      title: "Maracas Bay (Trinidad)",
      description:
        "Praia mais famosa de Trinidad, com areia dourada, mar azul e o tradicional sanduíche Bake & Shark.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Maracas%20Bay%20Trinidad.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pigeon%20Point%20Tobago.jpg",
    },
    {
      city: "Store Bay (Tobago)",
      title: "Store Bay (Tobago)",
      description:
        "Praia popular em Tobago, próxima ao aeroporto, com águas calmas e saídas de barco para Buccoo Reef.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Store%20Bay%20Tobago.jpg",
    },
    {
      city: "Buccoo Reef (Tobago)",
      title: "Buccoo Reef (Tobago)",
      description:
        "Recife de corais espetacular, ideal para snorkel e passeios de barco com fundo de vidro.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Buccoo%20Reef%20Tobago.jpg",
    },
    {
      city: "Argyle Waterfall (Tobago)",
      title: "Argyle Waterfall (Tobago)",
      description:
        "Maior cachoeira de Tobago, com três quedas d’água e piscinas naturais em meio à floresta tropical.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Argyle%20Waterfall%20Tobago.jpg",
    },
    {
      city: "Caroni Bird Sanctuary (Trinidad)",
      title: "Caroni Bird Sanctuary (Trinidad)",
      description:
        "Santuário natural de manguezais famoso pela presença do íbis-escarlate, ave nacional de Trinidad.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Caroni%20Bird%20Sanctuary%20Trinidad.jpg",
    },
    {
      city: "Fort King George (Tobago)",
      title: "Fort King George (Tobago)",
      description:
        "Forte histórico com vistas panorâmicas de Scarborough e um pequeno museu sobre a história colonial da ilha.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Fort%20King%20George%20Tobago.jpg",
    },
    {
      city: "Asa Wright Nature Centre (Trinidad)",
      title: "Asa Wright Nature Centre (Trinidad)",
      description:
        "Reserva ecológica nas montanhas do norte de Trinidad, excelente para observação de aves e trilhas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Asa%20Wright%20Nature%20Centre%20Trinidad.jpg",
    },
  ],
  "Dominican Republic": [
    {
      city: "Punta Cana",
      title: "Punta Cana",
      description:
        "Principal destino turístico do país, famoso por suas praias de areia branca, resorts luxuosos e mar azul-turquesa.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Punta%20Cana%20beach%20Dominican%20Republic.jpg",
    },
    {
      city: "Santo Domingo",
      title: "Santo Domingo",
      description:
        "Capital do país e Patrimônio Mundial da UNESCO, com arquitetura colonial, museus e vida noturna vibrante.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Santo%20Domingo%20Colonial%20Zone.jpg",
    },
    {
      city: "Samaná",
      title: "Samaná",
      description:
        "Região paradisíaca com praias intocadas, cachoeiras e observação de baleias-jubarte entre janeiro e março.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Samana%20Bay%20Dominican%20Republic.jpg",
    },
    {
      city: "La Romana",
      title: "La Romana",
      description:
        "Destino de luxo com campos de golfe, resorts e a charmosa vila mediterrânea Altos de Chavón.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Altos%20de%20Chavon%20La%20Romana%20Dominican%20Republic.jpg",
    },
    {
      city: "Bayahibe",
      title: "Bayahibe",
      description:
        "Vila costeira e ponto de partida para excursões à Ilha Saona, uma das praias mais lindas do Caribe.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Bayahibe%20Dominican%20Republic.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cabarete%20beach%20Dominican%20Republic.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Jarabacoa%20Dominican%20Republic.jpg",
    },
  ],
  Jamaica: [
    {
      city: "Montego Bay",
      title: "Montego Bay",
      description:
        "Destino mais famoso da Jamaica, com resorts luxuosos, praias paradisíacas e o animado Hip Strip.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Montego%20Bay%20Jamaica.jpg",
    },
    {
      city: "Negril",
      title: "Negril",
      description:
        "Famosa por sua Seven Mile Beach e pores do sol lendários, é o paraíso do descanso e do reggae à beira-mar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Negril%20Seven%20Mile%20Beach%20Jamaica.jpg",
    },
    {
      city: "Ocho Rios",
      title: "Ocho Rios",
      description:
        "Destino turístico com belas cachoeiras, como Dunn’s River Falls, e atividades de aventura.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Dunns%20River%20Falls%20Ocho%20Rios%20Jamaica.jpg",
    },
    {
      city: "Kingston",
      title: "Kingston",
      description:
        "Capital cultural da Jamaica, abriga o Museu Bob Marley e o coração pulsante da música reggae.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kingston%20Jamaica%20downtown.jpg",
    },
    {
      city: "Port Antonio",
      title: "Port Antonio",
      description:
        "Região mais autêntica e verde da Jamaica, com praias tranquilas, cachoeiras e a icônica Blue Lagoon.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20Lagoon%20Port%20Antonio%20Jamaica.jpg",
    },
    {
      city: "Treasure Beach",
      title: "Treasure Beach",
      description:
        "Vila costeira relaxada, com pousadas locais e uma atmosfera boêmia e acolhedora.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Treasure%20Beach%20Jamaica.jpg",
    },
    {
      city: "Blue Mountains",
      title: "Blue Mountains",
      description:
        "Cadeia montanhosa coberta por florestas e plantações do famoso café Blue Mountain, ideal para trilhas e vistas panorâmicas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20Mountains%20Jamaica.jpg",
    },
    {
      city: "Runaway Bay",
      title: "Runaway Bay",
      description:
        "Praias calmas, resorts e ótimos pontos de mergulho, ideal para famílias e casais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Runaway%20Bay%20Jamaica.jpg",
    },
    {
      city: "Nine Mile",
      title: "Nine Mile",
      description:
        "Pequena vila nas montanhas onde nasceu e est�� enterrado Bob Marley — local de peregrinação para fãs do reggae.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Nine%20Mile%20Bob%20Marley%20Mausoleum%20Jamaica.jpg",
    },
  ],
  Mexico: [
    {
      city: "Cidade do México",
      title: "Cidade do México",
      description:
        "A capital do país, repleta de museus, arquitetura colonial e o imponente Zócalo.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio%20de%20Bellas%20Artes%20-%20Ciudad%20de%20M%C3%A9xico.jpg",
    },
    {
      city: "Cancún",
      title: "Cancún",
      description:
        "Destino caribenho famoso por praias paradisíacas, resorts e vida noturna vibrante.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cancun%20Beach.jpg",
    },
    {
      city: "Chichén Itzá",
      title: "Chichén Itzá",
      description:
        "Uma das novas maravilhas do mundo, antiga cidade maia com a icônica pirâmide de Kukulcán.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Chichen%20Itza%20-%20El%20Castillo.jpg",
    },
    {
      city: "Guadalajara",
      title: "Guadalajara",
      description:
        "Berço do mariachi e da tequila, famosa por sua cultura e arquitetura colonial.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Catedral%20de%20Guadalajara.jpg",
    },
    {
      city: "Tulum",
      title: "Tulum",
      description:
        "Cidade costeira com ruínas maias à beira-mar e praias de águas cristalinas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tulum%20ruins%20and%20beach.jpg",
    },
    {
      city: "Oaxaca",
      title: "Oaxaca",
      description:
        "Região cultural com culinária marcante, artesanato e sítios arqueológicos como Monte Albán.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mont%C3%A9%20Alb%C3%A1n%20ruins%20-%20Oaxaca.jpg",
    },
    {
      city: "Cabo San Lucas",
      title: "Cabo San Lucas",
      description:
        "Famoso pelo arco natural de pedra e resorts de luxo na península da Baixa Califórnia.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/El%20Arco%20de%20Cabo%20San%20Lucas.jpg",
    },
    {
      city: "Playa del Carmen",
      title: "Playa del Carmen",
      description:
        "Destino do Caribe mexicano com praias de areia branca e mergulho em recifes de corais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Playa%20del%20Carmen%20beach.jpg",
    },
    {
      city: "Mérida",
      title: "Mérida",
      description:
        "Capital de Yucatán, conhecida por sua herança colonial espanhola e proximidade com cenotes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Catedral%20de%20M%C3%A9rida%20-%20Yucat%C3%A1n.jpg",
    },
  ],
  China: [
    {
      city: "Pequim (Beijing)",
      title: "Pequim (Beijing)",
      description:
        "Capital da China e centro histórico do país, lar da Cidade Proibida, do Templo do Céu e da Praça Tiananmen.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Forbidden%20City%20Beijing%20China.jpg",
    },
    {
      city: "Xangai (Shanghai)",
      title: "Xangai (Shanghai)",
      description:
        "A metrópole mais moderna da China, famosa por sua arquitetura futurista, o Bund e o distrito de Pudong.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Shanghai%20skyline%20at%20night%20from%20the%20Bund.jpg",
    },
    {
      city: "Xi’an",
      title: "Xi’an",
      description:
        "Antiga capital imperial e berço da civilização chinesa, famosa pelos Guerreiros de Terracota.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Terracotta%20Army%20Xi%27an%20China.jpg",
    },
    {
      city: "Grande Muralha da China",
      title: "Grande Muralha da China",
      description:
        "Uma das Sete Maravilhas do Mundo, estendendo-se por milhares de quilômetros através de montanhas e vales.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Great%20Wall%20of%20China%20at%20Mutianyu.jpg",
    },
    {
      city: "Guilin",
      title: "Guilin",
      description:
        "Conhecida por suas formações de montanhas cársticas e o belíssimo Rio Li, é um dos destinos naturais mais icônicos da China.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Li%20River%20Guilin%20China.jpg",
    },
    {
      city: "Chengdu",
      title: "Chengdu",
      description:
        "Cidade natal dos pandas gigantes e famosa por sua gastronomia picante e atmosfera descontraída.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Giant%20Panda%20Chengdu%20Research%20Base.jpg",
    },
    {
      city: "Suzhou",
      title: "Suzhou",
      description:
        "Famosa por seus jardins clássicos, canais e arquitetura tradicional, muitas vezes chamada de 'Veneza do Oriente'.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Suzhou%20classical%20garden%20China.jpg",
    },
    {
      city: "Hong Kong",
      title: "Hong Kong",
      description:
        "Região vibrante com horizonte espetacular, mercados noturnos, templos e o famoso Pico Victoria.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Hong%20Kong%20Victoria%20Harbour%20night.jpg",
    },
    {
      city: "Zhangjiajie",
      title: "Zhangjiajie",
      description:
        "Parque Nacional com formaç��es rochosas que inspiraram as montanhas flutuantes de 'Avatar'. Um dos lugares mais surreais da Ásia.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Zhangjiajie%20National%20Forest%20Park%20China.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/India%20Gate%20New%20Delhi%20India.jpg",
    },
    {
      city: "Varanasi",
      title: "Varanasi",
      description:
        "Cidade sagrada às margens do Rio Ganges, onde peregrinos realizam rituais milenares — um dos lugares mais espirituais do mundo.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Varanasi%20ghats%20on%20the%20Ganges.jpg",
    },
    {
      city: "Kerala (Alleppey e Munnar)",
      title: "Kerala (Alleppey e Munnar)",
      description:
        "Conhecido como 'o próprio país de Deus', Kerala oferece cruzeiros pelos backwaters e plantações de chá em Munnar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Alleppey%20Backwaters%20Kerala%20India.jpg",
    },
    {
      city: "Goa",
      title: "Goa",
      description:
        "Antiga colônia portuguesa, famosa por suas praias tropicais, vida noturna animada e arquitetura colonial.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Palolem%20Beach%20Goa%20India.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Rishikesh%20Lakshman%20Jhula%20Bridge.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Wat%20Arun%20Bangkok%20Thailand.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Patong%20Beach%20Phuket%20Thailand.jpg",
    },
    {
      city: "Krabi",
      title: "Krabi",
      description:
        "Famosa por suas falésias de calcário, praias paradisíacas e ilhas como Railay Beach e as Phi Phi Islands.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Railay%20Beach%20Krabi%20Thailand.jpg",
    },
    {
      city: "Ayutthaya",
      title: "Ayutthaya",
      description:
        "Antiga capital do Reino do Sião, hoje é um parque histórico com templos e ruínas impressionantes, Patrimônio Mundial da UNESCO.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ayutthaya%20Historical%20Park%20Thailand.jpg",
    },
    {
      city: "Pattaya",
      title: "Pattaya",
      description:
        "Cidade costeira próxima a Bangkok, conhecida por suas praias, vida noturna e esportes aquáticos.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pattaya%20Bay%20Thailand.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Koh%20Samui%20Beach%20Thailand.jpg",
    },
    {
      city: "Pai",
      title: "Pai",
      description:
        "Pequena cidade nas montanhas do norte, famosa por suas paisagens naturais, atmosfera alternativa e cachoeiras.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pai%20Canyon%20Mae%20Hong%20Son%20Thailand.jpg",
    },
  ],
  Indonesia: [
    {
      city: "Ubud",
      title: "Ubud",
      description:
        "Centro cultural e espiritual de Bali, cercado por arrozais, templos e florestas tropicais. Famoso pelo Monkey Forest e seus retiros de yoga.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ubud%20rice%20terraces%20Bali%20Indonesia.jpg",
    },
    {
      city: "Seminyak",
      title: "Seminyak",
      description:
        "Área sofisticada com resorts de luxo, beach clubs, lojas elegantes e uma das melhores cenas gastronômicas da ilha.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Seminyak%20Beach%20Bali%20Indonesia.jpg",
    },
    {
      city: "Canggu",
      title: "Canggu",
      description:
        "Destino moderno e descontraído, com praias ideais para surfe, cafés estilosos e uma comunidade vibrante de nômades digitais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Canggu%20Beach%20Bali%20Indonesia.jpg",
    },
    {
      city: "Uluwatu",
      title: "Uluwatu",
      description:
        "Conhecida por seus penhascos dramáticos, templos sagrados e ondas perfeitas para surfar. O pôr do sol no templo de Uluwatu é lendário.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Uluwatu%20Temple%20Bali%20Indonesia.jpg",
    },
    {
      city: "Kuta",
      title: "Kuta",
      description:
        "Um dos destinos mais populares de Bali, com praias animadas, bares e um ambiente jovem e vibrante.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kuta%20Beach%20Bali%20Indonesia.jpg",
    },
    {
      city: "Nusa Penida",
      title: "Nusa Penida",
      description:
        "Ilha vizinha de Bali, famosa por suas falésias impressionantes e pela praia em formato de T-Rex em Kelingking Beach.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kelingking%20Beach%20Nusa%20Penida%20Indonesia.jpg",
    },
    {
      city: "Mount Batur",
      title: "Mount Batur",
      description:
        "Vulcão ativo em Kintamani, um dos locais mais procurados para trilhas e nasceres do sol panorâmicos sobre o lago.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Batur%20Bali%20Indonesia.jpg",
    },
    {
      city: "Tanah Lot",
      title: "Tanah Lot",
      description:
        "Templo icônico construído sobre uma formação rochosa à beira-mar, um dos cartões-postais mais conhecidos de Bali.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tanah%20Lot%20Temple%20Bali%20Indonesia.jpg",
    },
    {
      city: "Jimbaran",
      title: "Jimbaran",
      description:
        "Conhecida por suas praias calmas, resorts de luxo e restaurantes à beira-mar que servem frutos do mar ao pôr do sol.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Jimbaran%20Beach%20Bali%20Indonesia.jpg",
    },
  ],
  Malaysia: [
    {
      city: "Kuala Lumpur",
      title: "Kuala Lumpur",
      description:
        "A capital da Malásia é um centro cosmopolita famoso pelas Torres Petronas, mercados vibrantes e gastronomia de rua espetacular.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Petronas%20Towers%20Kuala%20Lumpur%20Malaysia.jpg",
    },
    {
      city: "Penang (George Town)",
      title: "Penang (George Town)",
      description:
        "Patrimônio Mundial da UNESCO, George Town é conhecida por sua arquitetura colonial, arte de rua e uma das melhores culinárias da Ásia.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/George%20Town%20Penang%20Street%20Art.jpg",
    },
    {
      city: "Langkawi",
      title: "Langkawi",
      description:
        "Arquipélago de 99 ilhas com praias paradisíacas, florestas tropicais e o famoso Sky Bridge com vistas deslumbrantes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Langkawi%20Sky%20Bridge%20Malaysia.jpg",
    },
    {
      city: "Cameron Highlands",
      title: "Cameron Highlands",
      description:
        "Região montanhosa coberta por plantações de chá, morangos e vilas coloniais — um refúgio fresco nas alturas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cameron%20Highlands%20tea%20plantations%20Malaysia.jpg",
    },
    {
      city: "Borneo (Sabah e Sarawak)",
      title: "Borneo (Sabah e Sarawak)",
      description:
        "Selva exuberante com orangotangos, cavernas gigantes e o Monte Kinabalu, o ponto mais alto do Sudeste Asiático.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Kinabalu%20Sabah%20Malaysia.jpg",
    },
    {
      city: "Malaca (Melaka)",
      title: "Malaca (Melaka)",
      description:
        "Antiga cidade portuária com forte influência portuguesa, holandesa e britânica, repleta de história e charme.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Stadthuys%20Melaka%20Malaysia.jpg",
    },
    {
      city: "Perhentian Islands",
      title: "Perhentian Islands",
      description:
        "Ilhas paradisíacas com águas cristalinas, perfeitas para mergulho e snorkeling, ideais para quem busca tranquilidade tropical.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Perhentian%20Islands%20Malaysia.jpg",
    },
    {
      city: "Kota Kinabalu",
      title: "Kota Kinabalu",
      description:
        "Capital do estado de Sabah, serve como base para explorar parques nacionais, ilhas e o Monte Kinabalu.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kota%20Kinabalu%20waterfront%20Malaysia.jpg",
    },
    {
      city: "Taman Negara",
      title: "Taman Negara",
      description:
        "Uma das florestas tropicais mais antigas do mundo, ideal para trilhas, passeios de barco e observação da fauna selvagem.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Taman%20Negara%20Rainforest%20Malaysia.jpg",
    },
  ],
  Singapore: [
    {
      city: "Marina Bay Sands",
      title: "Marina Bay Sands",
      description:
        "Complexo icônico com hotel, shopping e o famoso SkyPark, que oferece uma vista panorâmica de Singapura.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Marina%20Bay%20Sands%20Hotel%20Singapore.jpg",
    },
    {
      city: "Gardens by the Bay",
      title: "Gardens by the Bay",
      description:
        "Parque futurista com estufas gigantes e as famosas árvores metálicas iluminadas à noite.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Gardens%20by%20the%20Bay%20Singapore%20Supertree%20Grove.jpg",
    },
    {
      city: "Sentosa Island",
      title: "Sentosa Island",
      description:
        "Ilha resort com praias artificiais, o Universal Studios Singapore e diversas atrações turísticas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sentosa%20Island%20Singapore%20Beach.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Chinatown%20Singapore%20Pagoda%20Street.jpg",
    },
    {
      city: "Little India",
      title: "Little India",
      description:
        "Colorido bairro indiano com templos, lojas e o incrível Mustafa Centre, aberto 24 horas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Little%20India%20Singapore%20Serangoon%20Road.jpg",
    },
    {
      city: "Singapore Botanic Gardens",
      title: "Singapore Botanic Gardens",
      description:
        "Patrimônio Mundial da UNESCO com jardins tropicais e o famoso National Orchid Garden.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Singapore%20Botanic%20Gardens%20Orchid%20Garden.jpg",
    },
    {
      city: "Clarke Quay",
      title: "Clarke Quay",
      description:
        "Área animada às margens do rio, repleta de bares, restaurantes e vida noturna vibrante.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Clarke%20Quay%20Singapore%20Riverside%20at%20Night.jpg",
    },
    {
      city: "Orchard Road",
      title: "Orchard Road",
      description:
        "Principal avenida comercial de Singapura, com shoppings de luxo, cafés e lojas internacionais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Orchard%20Road%20Singapore%20Night.jpg",
    },
  ],
  Vietnam: [
    {
      city: "Baía de Ha Long",
      title: "Baía de Ha Long",
      description:
        "Maravilha natural com milhares de ilhas de calcário e águas esverdeadas, considerada Patrimônio Mundial da UNESCO.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ha%20Long%20Bay%20Vietnam%202018.jpg",
    },
    {
      city: "Hanói",
      title: "Hanói",
      description:
        "Capital vibrante que mistura arquitetura colonial francesa, templos antigos e vida urbana caótica e charmosa.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Hanoi%20Old%20Quarter%20Vietnam.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Hoi%20An%20Ancient%20Town%20Vietnam%20Night.jpg",
    },
    {
      city: "Hue",
      title: "Hue",
      description:
        "Antiga capital imperial, repleta de templos, palácios e a impressionante Cidade Proibida de Hue.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Hue%20Imperial%20City%20Vietnam.jpg",
    },
    {
      city: "Da Nang",
      title: "Da Nang",
      description:
        "Cidade moderna costeira com belas praias e a famosa Ponte Dourada sustentada por mãos gigantes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Golden%20Bridge%20Ba%20Na%20Hills%20Da%20Nang%20Vietnam.jpg",
    },
    {
      city: "Sapa",
      title: "Sapa",
      description:
        "Região montanhosa no norte do país, conhecida por seus terraços de arroz e trilhas entre vilarejos étnicos.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sapa%20Rice%20Terraces%20Vietnam.jpg",
    },
    {
      city: "Nha Trang",
      title: "Nha Trang",
      description:
        "Destino de praia popular com águas cristalinas, resorts e excelente mergulho.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Nha%20Trang%20Beach%20Vietnam.jpg",
    },
    {
      city: "Delta do Mekong",
      title: "Delta do Mekong",
      description:
        "Região fértil repleta de canais, vilarejos flutuantes e mercados locais únicos no sul do Vietnã.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mekong%20Delta%20Floating%20Market%20Vietnam.jpg",
    },
  ],
  Philippines: [
    {
      city: "Palawan",
      title: "Palawan",
      description:
        "Ilha paradisíaca com lagoas turquesa, falésias de calcário e o famoso rio subterrâneo de Puerto Princesa.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/El%20Nido%20Palawan%20Philippines%20Lagoon.jpg",
    },
    {
      city: "Boracay",
      title: "Boracay",
      description:
        "Pequena ilha famosa por sua praia de areia branca e vida noturna vibrante.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Boracay%20White%20Beach%20Philippines.jpg",
    },
    {
      city: "Cebu",
      title: "Cebu",
      description:
        "Destino que combina praias, mergulho, cachoeiras e cultura histórica no coração das Filipinas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kawasan%20Falls%20Cebu%20Philippines.jpg",
    },
    {
      city: "Manila",
      title: "Manila",
      description:
        "Capital frenética do país, com museus, igrejas históricas e uma mistura fascinante de tradição e modernidade.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Manila%20Skyline%20at%20Night.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Siargao%20Cloud%209%20Surfing%20Philippines.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Vigan%20Calle%20Crisologo%20Philippines.jpg",
    },
    {
      city: "Coron",
      title: "Coron",
      description:
        "Destino de mergulho mundialmente famoso, com naufrágios, lagoas secretas e águas cristalinas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Coron%20Kayangan%20Lake%20Palawan%20Philippines.jpg",
    },
  ],
  "South Korea": [
    {
      city: "Seul",
      title: "Seul",
      description:
        "Capital vibrante com palácios reais, mercados tradicionais, vida noturna intensa e tecnologia por toda parte.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Seoul%20Skyline%20at%20Night%20South%20Korea.jpg",
    },
    {
      city: "Busan",
      title: "Busan",
      description:
        "Cidade costeira com belas praias, templos nas montanhas e o famoso mercado de peixes Jagalchi.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Haeundae%20Beach%20Busan%20South%20Korea.jpg",
    },
    {
      city: "Ilha de Jeju",
      title: "Ilha de Jeju",
      description:
        "Destino natural com cachoeiras, cavernas de lava e o icônico Monte Hallasan, o ponto mais alto do país.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Jeju%20Island%20Hallasan%20South%20Korea.jpg",
    },
    {
      city: "Gyeongju",
      title: "Gyeongju",
      description:
        "Antiga capital do reino de Silla, conhecida como o ‘museu sem paredes’ por seus templos e tumbas reais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Bulguksa%20Temple%20Gyeongju%20South%20Korea.jpg",
    },
    {
      city: "Incheon",
      title: "Incheon",
      description:
        "Porta de entrada internacional do país, com ilhas, parques temáticos e a moderna Songdo City.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Songdo%20City%20Incheon%20South%20Korea.jpg",
    },
    {
      city: "Suwon",
      title: "Suwon",
      description:
        "Cidade histórica famosa pela Fortaleza Hwaseong, Patrimônio Mundial da UNESCO.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Hwaseong%20Fortress%20Suwon%20South%20Korea.jpg",
    },
    {
      city: "Andong",
      title: "Andong",
      description:
        "Berço da cultura tradicional coreana, com vilarejos preservados e o festival de máscaras de Hahoe.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Hahoe%20Village%20Andong%20South%20Korea.jpg",
    },
    {
      city: "DMZ (Zona Desmilitarizada)",
      title: "DMZ (Zona Desmilitarizada)",
      description:
        "Fronteira entre as duas Coreias, onde é possível visitar pontos de observação e túneis históricos.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/DMZ%20South%20Korea%20Panmunjom.jpg",
    },
    {
      city: "Gangneung",
      title: "Gangneung",
      description:
        "Cidade costeira famosa pelas praias do Mar do Leste, cafés à beira-mar e esportes de inverno próximos.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Gyeongpo%20Beach%20Gangneung%20South%20Korea.jpg",
    },
  ],
  "Sri Lanka": [
    {
      city: "Colombo",
      title: "Colombo",
      description:
        "Capital vibrante e porta de entrada do país, mistura modernidade, cultura colonial e vida costeira.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Colombo%20Skyline%20Sri%20Lanka.jpg",
    },
    {
      city: "Kandy",
      title: "Kandy",
      description:
        "Cidade sagrada no centro do país, lar do Templo do Dente de Buda e cercada por montanhas verdes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Temple%20of%20the%20Tooth%20Kandy%20Sri%20Lanka.jpg",
    },
    {
      city: "Sigiriya",
      title: "Sigiriya",
      description:
        "Fortaleza rochosa impressionante, Patrimônio Mundial da UNESCO, com jardins e pinturas antigas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sigiriya%20Rock%20Sri%20Lanka.jpg",
    },
    {
      city: "Ella",
      title: "Ella",
      description:
        "Pequena cidade nas montanhas, famosa por suas paisagens de tirar o fôlego e plantações de chá.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ella%20Nine%20Arches%20Bridge%20Sri%20Lanka.jpg",
    },
    {
      city: "Galle",
      title: "Galle",
      description:
        "Cidade costeira com uma fortaleza colonial holandesa bem preservada e charme histórico.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Galle%20Fort%20Sri%20Lanka.jpg",
    },
    {
      city: "Nuwara Eliya",
      title: "Nuwara Eliya",
      description:
        "Conhecida como ‘Pequena Inglaterra’, é uma região fria com plantações de chá e arquitetura colonial.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Nuwara%20Eliya%20Tea%20Plantations%20Sri%20Lanka.jpg",
    },
    {
      city: "Anuradhapura",
      title: "Anuradhapura",
      description:
        "Antiga capital cingalesa, com ruínas de templos, estupas e estátuas de Buda milenares.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Anuradhapura%20Ruwanwelisaya%20Dagoba%20Sri%20Lanka.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Yala%20National%20Park%20Leopard%20Sri%20Lanka.jpg",
    },
  ],
  Nepal: [
    {
      city: "Kathmandu",
      title: "Kathmandu",
      description:
        "Capital do Nepal, repleta de templos, stupas, mercados caóticos e rica herança cultural e espiritual.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Boudhanath%20Stupa%20Kathmandu%20Nepal.jpg",
    },
    {
      city: "Pokhara",
      title: "Pokhara",
      description:
        "Cidade à beira do lago Phewa, ponto de partida para trilhas no Annapurna e famosa por suas vistas montanhosas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Phewa%20Lake%20Pokhara%20Nepal.jpg",
    },
    {
      city: "Monte Everest (Região de Khumbu)",
      title: "Monte Everest (Região de Khumbu)",
      description:
        "Lar da montanha mais alta do mundo, com trilhas lendárias e vilas sherpas cheias de cultura.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Everest%20Nepal%20from%20Gokyo%20Ri.jpg",
    },
    {
      city: "Lumbini",
      title: "Lumbini",
      description:
        "Local de nascimento de Buda, Patrimônio Mundial da UNESCO, com templos e jardins sagrados.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Maya%20Devi%20Temple%20Lumbini%20Nepal.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Chitwan%20National%20Park%20Nepal%20Rhino.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Nagarkot%20Sunrise%20View%20Nepal.jpg",
    },
    {
      city: "Annapurna Circuit",
      title: "Annapurna Circuit",
      description:
        "Uma das trilhas mais famosas do mundo, cruzando vilas montanhosas, templos e paisagens de tirar o fôlego.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Annapurna%20Circuit%20Trail%20Nepal.jpg",
    },
  ],
  Mongolia: [
    {
      city: "Ulaanbaatar",
      title: "Ulaanbaatar",
      description:
        "Capital da Mongólia, mistura templos budistas, museus e modernidade em meio às montanhas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ulaanbaatar%20City%20Center%20Mongolia.jpg",
    },
    {
      city: "Deserto de Gobi",
      title: "Deserto de Gobi",
      description:
        "Um dos maiores desertos do mundo, famoso por suas dunas, fósseis de dinossauros e paisagens áridas impressionantes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Khongoryn%20Els%20Dunes%20Gobi%20Desert%20Mongolia.jpg",
    },
    {
      city: "Parque Nacional Terelj",
      title: "Parque Nacional Terelj",
      description:
        "Parque próximo a Ulaanbaatar com formações rochosas únicas, rios e tradições nômades vivas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Gorkhi-Terelj%20National%20Park%20Mongolia.jpg",
    },
    {
      city: "Lago Khövsgöl",
      title: "Lago Khövsgöl",
      description:
        "Conhecido como o ‘irmão menor do Baikal’, é um lago cristalino cercado por montanhas e florestas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Khovsgol%20Lake%20Mongolia.jpg",
    },
    {
      city: "Karakorum",
      title: "Karakorum",
      description:
        "Antiga capital do Império Mongol, abriga ruínas históricas e o famoso mosteiro Erdene Zuu.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Erdene%20Zuu%20Monastery%20Karakorum%20Mongolia.jpg",
    },
    {
      city: "Vale de Orkhon",
      title: "Vale de Orkhon",
      description:
        "Região Patrimônio Mundial da UNESCO com rios, cachoeiras e sítios arqueológicos do Império Mongol.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Orkhon%20Valley%20Mongolia.jpg",
    },
    {
      city: "Deserto de Khongoryn Els",
      title: "Deserto de Khongoryn Els",
      description:
        "Famoso por suas enormes dunas de areia que produzem um som peculiar, conhecido como ‘dunas que cantam’.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Khongoryn%20Els%20Singing%20Dunes%20Mongolia.jpg",
    },
    {
      city: "Tsenkher Hot Springs",
      title: "Tsenkher Hot Springs",
      description:
        "Fontes termais naturais cercadas por montanhas, ideais para relaxar após longas jornadas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tsenkher%20Hot%20Springs%20Mongolia.jpg",
    },
    {
      city: "Altai Tavan Bogd National Park",
      title: "Altai Tavan Bogd National Park",
      description:
        "Parque montanhoso no oeste do país, lar dos picos mais altos da Mongólia e glaciares impressionantes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Altai%20Tavan%20Bogd%20Mountains%20Mongolia.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pub%20Street%20Siem%20Reap%20Cambodia.jpg",
    },
    {
      city: "Phnom Penh",
      title: "Phnom Penh",
      description:
        "Capital do Camboja, combina templos budistas, palácios reais e memoriais da história recente do país.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Phnom%20Penh%20Royal%20Palace.jpg",
    },
    {
      city: "Sihanoukville",
      title: "Sihanoukville",
      description:
        "Cidade costeira com belas praias, ilhas paradisíacas e resorts à beira-mar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Otres%20Beach%20Sihanoukville%20Cambodia.jpg",
    },
    {
      city: "Koh Rong",
      title: "Koh Rong",
      description:
        "Ilha tropical famosa por suas praias de areia branca, águas cristalinas e vida marinha exuberante.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Koh%20Rong%20Beach%20Cambodia.jpg",
    },
    {
      city: "Battambang",
      title: "Battambang",
      description:
        "Cidade charmosa com arquitetura colonial francesa, templos antigos e o famoso Bamboo Train.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Battambang%20Bamboo%20Train%20Cambodia.jpg",
    },
    {
      city: "Kampot",
      title: "Kampot",
      description:
        "Cidade ribeirinha conhecida por sua atmosfera tranquila, plantações de pimenta e vistas do monte Bokor.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kampot%20River%20Cambodia.jpg",
    },
    {
      city: "Kep",
      title: "Kep",
      description:
        "Antiga estância litorânea francesa famosa por seus frutos do mar, especialmente o caranguejo com pimenta de Kampot.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kep%20Beach%20Cambodia.jpg",
    },
    {
      city: "Tonlé Sap",
      title: "Tonlé Sap",
      description:
        "O maior lago do Sudeste Asiático, abriga vilas flutuantes e comunidades que vivem em harmonia com o ciclo das águas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tonle%20Sap%20Floating%20Village%20Cambodia.jpg",
    },
  ],
  Laos: [
    {
      city: "Luang Prabang",
      title: "Luang Prabang",
      description:
        "Patrimônio Mundial da UNESCO, esta cidade encantadora combina templos dourados, arquitetura colonial e o ritual diário dos monges budistas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Luang%20Prabang%20cityscape.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Vang%20Vieng%20Laos%20karst%20mountains.jpg",
    },
    {
      city: "Plain of Jars (Planície dos Jarros)",
      title: "Plain of Jars (Planície dos Jarros)",
      description:
        "Sítio arqueológico misterioso com centenas de jarros de pedra milenares espalhados por colinas na região de Phonsavan.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Plain%20of%20Jars%20Site%201%20Laos.jpg",
    },
    {
      city: "Pakse",
      title: "Pakse",
      description:
        "Porta de entrada para o planalto de Bolaven, conhecido por suas cachoeiras espetaculares e plantações de café.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pakse%20Laos%20bridge%20over%20Mekong.jpg",
    },
    {
      city: "Bolaven Plateau",
      title: "Bolaven Plateau",
      description:
        "Região montanhosa com clima ameno, cachoeiras imponentes e fazendas de café — um refúgio natural e sereno.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tad%20Fane%20Waterfall%20Bolaven%20Plateau%20Laos.jpg",
    },
    {
      city: "Si Phan Don (4.000 Ilhas)",
      title: "Si Phan Don (4.000 Ilhas)",
      description:
        "Conjunto de ilhas no rio Mekong, com vilarejos tranquilos, cachoeiras e botes para avistar golfinhos de água doce.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Si%20Phan%20Don%20Laos%20Mekong%20Islands.jpg",
    },
    {
      city: "Wat Phou",
      title: "Wat Phou",
      description:
        "Antigo templo Khmer em Champasak, anterior a Angkor Wat, com vistas magníficas e importância espiritual milenar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Wat%20Phou%20Champasak%20Laos.jpg",
    },
    {
      city: "Muang Ngoi Neua",
      title: "Muang Ngoi Neua",
      description:
        "Vila isolada acessível apenas de barco, rodeada por montanhas e rios, ideal para trilhas e imersão na vida rural laociana.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Muang%20Ngoi%20Neua%20Laos.jpg",
    },
  ],
  Japan: [
    {
      city: "Tóquio",
      title: "Tóquio",
      description:
        "A capital do Jap��o é uma metrópole vibrante, onde a tecnologia futurista encontra tradições antigas. Destaques incluem Shibuya, Akihabara e o Templo Senso-ji em Asakusa.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tokyo%20Shibuya%20crossing%20at%20night.jpg",
    },
    {
      city: "Quioto",
      title: "Quioto",
      description:
        "Antiga capital imperial, repleta de templos, jardins e gueixas. O Templo Kinkaku-ji e o Santuário Fushimi Inari são ícones imperdíveis.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kinkaku-ji%20Golden%20Pavilion%20Kyoto.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Todaiji%20Temple%20Nara%20Japan.jpg",
    },
    {
      city: "Hiroshima",
      title: "Hiroshima",
      description:
        "Cidade símbolo da paz, com o Parque Memorial e o Museu da Bomba Atômica, além do santuário flutuante de Itsukushima na ilha de Miyajima.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Itsukushima%20Shrine%20torii%20gate%20Miyajima%20Japan.jpg",
    },
    {
      city: "Hakone",
      title: "Hakone",
      description:
        "Destino popular por suas águas termais, vistas do Monte Fuji e o Lago Ashi com seu icônico portal torii vermelho.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Ashi%20Hakone%20Japan.jpg",
    },
    {
      city: "Sapporo",
      title: "Sapporo",
      description:
        "Capital da ilha de Hokkaido, famosa pelo Festival da Neve, cervejas e pelas montanhas perfeitas para esportes de inverno.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sapporo%20Snow%20Festival%20Odori%20Park.jpg",
    },
    {
      city: "Okinawa",
      title: "Okinawa",
      description:
        "Arquipélago tropical com praias paradisíacas, cultura própria e heranças do antigo Reino Ryukyu.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Okinawa%20beach%20Japan.jpg",
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
        "O símbolo máximo do Egito, abrigando as Pirâmides de Quéops, Quéfren e Miquerinos, além da ic��nica Esfinge.",
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
        "Um paraíso para mergulhadores, com recifes de corais coloridos, águas calmas e um ambiente muito mais tranquilo que Zanzibar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mafia%20Island%20Tanzania.jpg",
    },
  ],
  Tunisia: [
    {
      city: "Túnis",
      title: "Túnis",
      description:
        "A capital do país combina a modernidade com a antiga Medina, repleta de mercados, mesquitas e palácios históricos.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tunis%20Medina%20Tunisia.jpg",
    },
    {
      city: "Cartago",
      title: "Cartago",
      description:
        "Antiga cidade fenícia e romana, Patrimônio Mundial da UNESCO, com ruínas impressionantes e vista para o mar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Carthage%20Ruins%20Tunisia.jpg",
    },
    {
      city: "Sidi Bou Said",
      title: "Sidi Bou Said",
      description:
        "Vilarejo costeiro conhecido por suas casas brancas e portas azuis, uma das paisagens mais icônicas da Tunísia.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sidi%20Bou%20Said%20Tunisia.jpg",
    },
    {
      city: "Sousse",
      title: "Sousse",
      description:
        "Cidade histórica com uma bela Medina murada, praias mediterrâneas e o imponente Ribat de Sousse.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sousse%20Tunisia%20Medina.jpg",
    },
    {
      city: "El Djem",
      title: "El Djem",
      description:
        "Lar do espetacular anfiteatro romano, um dos mais bem preservados do mundo e símbolo do passado grandioso da Tunísia.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/El%20Djem%20Amphitheatre%20Tunisia.jpg",
    },
    {
      city: "Tozeur",
      title: "Tozeur",
      description:
        "Oásis no deserto do Saara, rodeado por palmeiras e conhecido pelas paisagens surreais e arquitetura de tijolos de barro.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tozeur%20Oasis%20Tunisia.jpg",
    },
    {
      city: "Douz",
      title: "Douz",
      description:
        "Conhecida como a 'Porta do Saara', é o ponto de partida ideal para expedições de camelo pelas dunas do deserto.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Douz%20Sahara%20Tunisia.jpg",
    },
    {
      city: "Kairouan",
      title: "Kairouan",
      description:
        "Cidade sagrada do Islã e Patrimônio Mundial da UNESCO, famosa por sua Grande Mesquita e tapetes tradicionais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kairouan%20Great%20Mosque.jpg",
    },
    {
      city: "Djerba",
      title: "Djerba",
      description:
        "Ilha paradisíaca com praias de areia dourada, aldeias brancas e uma rica mistura de culturas árabes, berberes e judaicas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Djerba%20Island%20Tunisia.jpg",
    },
  ],
  Namibia: [
    {
      city: "Deserto do Namibe (Namib Desert)",
      title: "Deserto do Namibe (Namib Desert)",
      description:
        "Um dos desertos mais antigos do mundo, com dunas gigantes e paisagens que parecem de outro planeta.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Namib%20Desert%20Namibia.jpg",
    },
    {
      city: "Sossusvlei",
      title: "Sossusvlei",
      description:
        "Área icônica do Deserto do Namibe, famosa por suas dunas vermelhas e o surreal Deadvlei, com árvores petrificadas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sossusvlei%20Namibia.jpg",
    },
    {
      city: "Parque Nacional Etosha",
      title: "Parque Nacional Etosha",
      description:
        "Um dos melhores lugares da África para safáris, lar de leões, elefantes, rinocerontes e vastos salares brancos.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Etosha%20National%20Park%20Namibia.jpg",
    },
    {
      city: "Swakopmund",
      title: "Swakopmund",
      description:
        "Charmosa cidade costeira com arquitetura alemã, esportes radicais nas dunas e o encontro entre o deserto e o mar.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Swakopmund%20Namibia.jpg",
    },
    {
      city: "Walvis Bay",
      title: "Walvis Bay",
      description:
        "Importante cidade portuária famosa por seus flamingos, golfinhos e cruzeiros pela lagoa.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Walvis%20Bay%20Lagoon%20Namibia.jpg",
    },
    {
      city: "Windhoek",
      title: "Windhoek",
      description:
        "A capital da Namíbia combina cultura africana e influência germânica, com bons restaurantes e vida urbana tranquila.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Windhoek%20Namibia%20skyline.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Skeleton%20Coast%20Namibia.jpg",
    },
    {
      city: "Damaraland",
      title: "Damaraland",
      description:
        "Região montanhosa com formações rochosas, gravuras rupestres milenares e elefantes adaptados ao deserto.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Damaraland%20Namibia.jpg",
    },
  ],
  Seychelles: [
    {
      city: "Mahé",
      title: "Mahé",
      description:
        "A maior ilha do arquipélago, abriga a capital Victoria, praias deslumbrantes e o Parque Nacional Morne Seychellois.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mahe%20Island%20Seychelles.jpg",
    },
    {
      city: "Praslin",
      title: "Praslin",
      description:
        "Lar da lendária praia Anse Lazio e do Vallée de Mai, Patrimônio Mundial da UNESCO, onde cresce o coco-de-mer.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Anse%20Lazio%20Praslin%20Seychelles.jpg",
    },
    {
      city: "La Digue",
      title: "La Digue",
      description:
        "Famosa pela praia Anse Source d’Argent, com formações graníticas únicas e um ambiente tranquilo sem carros.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Anse%20Source%20d%27Argent%20La%20Digue%20Seychelles.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Silhouette%20Island%20Seychelles.jpg",
    },
    {
      city: "Aldabra Atoll",
      title: "Aldabra Atoll",
      description:
        "Um dos maiores atóis de coral do mundo e Patrimônio Mundial da UNESCO, lar de mais de 100 mil tartarugas gigantes.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Aldabra%20Atoll%20Seychelles.jpg",
    },
    {
      city: "Fregate Island",
      title: "Fregate Island",
      description:
        "Uma ilha privada exclusiva, com praias imaculadas e iniciativas fortes de conservação ambiental.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Fregate%20Island%20Seychelles.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Dubai%20Skyline%20at%20Night.jpg",
    },
    {
      city: "Abu Dhabi",
      title: "Abu Dhabi",
      description:
        "A capital do país, combina tradição e modernidade com atrações icônicas como a Mesquita Sheikh Zayed e o Louvre Abu Dhabi.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sheikh%20Zayed%20Mosque%20Abu%20Dhabi.jpg",
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
      city: "Umm Al Quwain",
      title: "Umm Al Quwain",
      description:
        "Um emirado pacato e autêntico, ideal para observar flamingos, explorar ilhas e relaxar longe do turismo em massa.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Umm%20Al%20Quwain%20Mangroves.jpg",
    },
    {
      city: "Palm Jumeirah",
      title: "Palm Jumeirah",
      description:
        "A icônica ilha artificial em forma de palmeira, símbolo de Dubai, abriga resorts de luxo como o Atlantis The Palm.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Palm%20Jumeirah%20from%20the%20air.jpg",
    },
  ],
  Turkey: [
    {
      city: "Istambul",
      title: "Istambul",
      description:
        "Antiga capital dos impérios Bizantino e Otomano, Istambul é uma cidade vibrante que une Europa e Ásia, com ícones como a Basílica de Santa Sofia e a Mesquita Azul.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Hagia%20Sophia%20Istanbul%20-%202019.jpg",
    },
    {
      city: "Capadócia",
      title: "Capadócia",
      description:
        "Região mágica famosa por suas formações rochosas únicas, cidades subterrâneas e passeios de balão ao nascer do sol.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cappadocia%20balloons%20sunrise%202018.jpg",
    },
    {
      city: "Pamukkale",
      title: "Pamukkale",
      description:
        "Conhecida pelas piscinas termais de travertino branco e pelas ruínas da antiga cidade de Hierápolis.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pamukkale%20travertines%20Turkey.jpg",
    },
    {
      city: "Antalya",
      title: "Antalya",
      description:
        "Destino mediterrâneo com belas praias, resorts de luxo e o charmoso centro histórico de Kaleiçi.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Antalya%20old%20harbor.jpg",
    },
    {
      city: "Ephesus",
      title: "Ephesus",
      description:
        "Uma das cidades antigas mais bem preservadas do Mediterrâneo, lar do Templo de Ártemis e da Biblioteca de Celso.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Library%20of%20Celsus%20Ephesus%20Turkey.jpg",
    },
    {
      city: "Ankara",
      title: "Ankara",
      description:
        "A capital moderna da Turquia, centro político e cultural, onde está o Mausoléu de Atatürk, fundador da república.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Anitkabir%20Ankara%20Turkey.jpg",
    },
    {
      city: "Bodrum",
      title: "Bodrum",
      description:
        "Cidade costeira glamourosa com mar azul-turquesa, vida noturna animada e o Castelo de São Pedro.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Bodrum%20Castle%20Turkey.jpg",
    },
    {
      city: "Göreme",
      title: "Göreme",
      description:
        "Localidade no coração da Capadócia, cercada por vales, cavernas e igrejas esculpidas em pedra.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Goreme%20National%20Park%20Turkey.jpg",
    },
    {
      city: "Fethiye",
      title: "Fethiye",
      description:
        "Famosa pela praia de Ölüdeniz, uma das mais bonitas do mundo, e pelas trilhas da antiga Rota Lícia.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Oludeniz%20lagoon%20Fethiye%20Turkey.jpg",
    },
  ],
  "Saudi Arabia": [
    {
      city: "Riad",
      title: "Riad",
      description:
        "A capital moderna do reino, mistura arranha-céus futuristas com o charme histórico do Forte Masmak e do bairro Diriyah, berço da monarquia saudita.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Riyadh%20Skyline%20at%20Night.jpg",
    },
    {
      city: "Jidá",
      title: "Jidá",
      description:
        "Principal cidade costeira do Mar Vermelho, conhecida pelo calçadão Corniche, pela histórica Al-Balad e pelo icônico King Fahd Fountain.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Jeddah%20Corniche%20Saudi%20Arabia.jpg",
    },
    {
      city: "Meca",
      title: "Meca",
      description:
        "Centro espiritual do Islã, abriga a Grande Mesquita e a Caaba, visitadas por milhões de peregrinos todos os anos durante o Hajj.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kaaba%20Mecca%20Saudi%20Arabia.jpg",
    },
    {
      city: "Medina",
      title: "Medina",
      description:
        "Cidade sagrada que abriga a Mesquita do Profeta Maomé, um dos locais mais reverenciados do mundo islâmico.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Prophet%27s%20Mosque%20Medina%20Saudi%20Arabia.jpg",
    },
    {
      city: "AlUla",
      title: "AlUla",
      description:
        "Região desértica com formações rochosas surreais e o sítio arqueológico de Hegra (Madain Saleh), Patrimônio Mundial da UNESCO.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Hegra%20AlUla%20Saudi%20Arabia.jpg",
    },
    {
      city: "Abha",
      title: "Abha",
      description:
        "Localizada nas montanhas Asir, oferece clima ameno, paisagens verdes e arquitetura tradicional árabe em vilas como Rijal Alma.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Abha%20mountains%20Saudi%20Arabia.jpg",
    },
    {
      city: "Al Khobar",
      title: "Al Khobar",
      description:
        "Cidade moderna à beira do Golfo Pérsico, famosa por seu Corniche, shoppings e o vibrante cenário urbano.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Al%20Khobar%20Corniche%20Saudi%20Arabia.jpg",
    },
    {
      city: "Taif",
      title: "Taif",
      description:
        "Conhecida como a 'Cidade das Rosas', localizada nas montanhas, oferece clima agradável, plantações e festivais florais.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Taif%20mountains%20Saudi%20Arabia.jpg",
    },
    {
      city: "Deserto do Rub' al Khali",
      title: "Deserto do Rub' al Khali",
      description:
        "O 'Quarto Vazio', uma das maiores extensões de deserto do planeta, oferece paisagens intocadas e experiências de safári únicas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Rub%27%20al%20Khali%20Saudi%20Arabia.jpg",
    },
  ],
  Israel: [
    {
      city: "Jerusalém",
      title: "Jerusalém",
      description:
        "Cidade sagrada para três religiões — judaísmo, cristianismo e islamismo — com marcos icônicos como o Muro das Lamentações, a Igreja do Santo Sepulcro e a Cúpula da Rocha.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Jerusalem%20Old%20City%20Panorama.jpg",
    },
    {
      city: "Tel Aviv",
      title: "Tel Aviv",
      description:
        "Centro moderno e vibrante, famosa por suas praias, vida noturna, gastronomia e a arquitetura Bauhaus da Cidade Branca.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tel%20Aviv%20Beach%20and%20Skyline.jpg",
    },
    {
      city: "Mar Morto",
      title: "Mar Morto",
      description:
        "O ponto mais baixo da Terra, conhecido por suas águas altamente salgadas e propriedades terapêuticas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Dead%20Sea%20Israel.jpg",
    },
    {
      city: "Nazareth",
      title: "Nazareth",
      description:
        "Importante centro de peregrinação cristã, conhecida como a cidade onde Jesus passou sua infância.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Nazareth%20Israel%20view.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Eilat%20Israel%20Red%20Sea.jpg",
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
      city: "Cesaréia Mar���tima",
      title: "Cesaréia Marítima",
      description:
        "Cidade antiga fundada por Herodes, com impressionantes ruínas romanas à beira-mar e um anfiteatro preservado.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Caesarea%20Maritima%20Roman%20Ruins.jpg",
    },
  ],
  Jordan: [
    {
      city: "Petra",
      title: "Petra",
      description:
        "A antiga cidade nabateia esculpida em rocha rosa é uma das 7 Maravilhas do Mundo Moderno, com destaque para o Tesouro (Al-Khazneh).",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Al-Khazneh%20Petra%20Jordan.jpg",
    },
    {
      city: "Amã",
      title: "Amã",
      description:
        "A capital da Jordânia combina modernidade e história, com o Teatro Romano, a Cidadela e cafés vibrantes no centro da cidade.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Amman%20Citadel%20Jordan.jpg",
    },
    {
      city: "Mar Morto",
      title: "Mar Morto",
      description:
        "Compartilhado com Israel, é o ponto mais baixo da Terra e famoso por suas águas extremamente salgadas e propriedades terapêuticas.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Dead%20Sea%20Jordan.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Jerash%20Roman%20Ruins%20Jordan.jpg",
    },
    {
      city: "Aqaba",
      title: "Aqaba",
      description:
        "Principal cidade costeira do país, às margens do Mar Vermelho, oferece mergulho, resorts e belas vistas das montanhas do Sinai.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Aqaba%20Jordan%20Red%20Sea.jpg",
    },
    {
      city: "Madaba",
      title: "Madaba",
      description:
        "Conhecida pelos seus mosaicos bizantinos, incluindo o famoso Mapa de Madaba, o mais antigo mapa cartográfico da Terra Santa.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Madaba%20Mosaic%20Map%20Jordan.jpg",
    },
    {
      city: "Monte Nebo",
      title: "Monte Nebo",
      description:
        "Local bíblico de onde, segundo a tradição, Moisés avistou a Terra Prometida; oferece vistas panorâmicas do vale do Jordão.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Nebo%20Jordan.jpg",
    },
    {
      city: "Castelo de Karak",
      title: "Castelo de Karak",
      description:
        "Fortaleza cruzada medieval impressionante, com túneis e muralhas que dominam o Vale do Jordão.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Karak%20Castle%20Jordan.jpg",
    },
  ],
  Oman: [
    {
      city: "Mascate",
      title: "Mascate",
      description:
        "A capital omanita combina tradição e modernidade, com a Grande Mesquita do Sultão Qaboos, o mercado Muttrah Souq e o Palácio Al Alam.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sultan%20Qaboos%20Grand%20Mosque%20Muscat%20Oman.jpg",
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
        "https://commons.wikimedia.org/wiki/Special:FilePath/Wahiba%20Sands%20Oman.jpg",
    },
    {
      city: "Sur",
      title: "Sur",
      description:
        "Cidade costeira histórica famosa pela construção tradicional de barcos dhow e pelas praias do Golfo de Omã.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sur%20Oman%20Dhow%20Shipyard.jpg",
    },
    {
      city: "Salalah",
      title: "Salalah",
      description:
        "Localizada no sul do país, é um oásis tropical com cachoeiras e plantações de incenso, especialmente verdejante durante o monção (Khareef).",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Salalah%20Oman%20Khareef.jpg",
    },
    {
      city: "Jebel Shams",
      title: "Jebel Shams",
      description:
        "Conhecido como o 'Grand Canyon de Omã', oferece trilhas espetaculares e vistas panorâmicas de tirar o fôlego.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Jebel%20Shams%20Oman.jpg",
    },
    {
      city: "Bahla",
      title: "Bahla",
      description:
        "Cidade histórica cercada por muralhas e lar do Forte de Bahla, Patrimônio Mundial da UNESCO.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Bahla%20Fort%20Oman.jpg",
    },
    {
      city: "Wadi Shab",
      title: "Wadi Shab",
      description:
        "Um dos cânions mais belos do país, com trilhas, piscinas naturais e uma caverna escondida com cachoeira.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Wadi%20Shab%20Oman.jpg",
    },
    {
      city: "Musandam",
      title: "Musandam",
      description:
        "Península montanhosa com fiordes espetaculares que lembram a Noruega, ideal para passeios de barco e mergulho.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Musandam%20Fjords%20Oman.jpg",
    },
  ],
  Qatar: [
    {
      city: "Doha",
      title: "Doha",
      description:
        "A capital do Qatar �� um centro vibrante de cultura e inovação, com o Museu de Arte Islâmica, o Corniche e a icônica skyline futurista.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Doha%20Skyline%20at%20Night.jpg",
    },
    {
      city: "The Pearl-Qatar",
      title: "The Pearl-Qatar",
      description:
        "Ilha artificial de luxo com marinas, lojas de grife e restaurantes internacionais, símbolo da modernidade do país.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Pearl%20Qatar%20Doha.jpg",
    },
    {
      city: "Souq Waqif",
      title: "Souq Waqif",
      description:
        "Mercado tradicional no coração de Doha, com lojinhas, especiarias, artesanato e cafés típicos que preservam a alma árabe.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Souq%20Waqif%20Doha%20Qatar.jpg",
    },
    {
      city: "Katara Cultural Village",
      title: "Katara Cultural Village",
      description:
        "Centro cultural à beira-mar que reúne teatros, galerias, restaurantes e eventos que celebram a herança e a arte do mundo árabe.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Katara%20Cultural%20Village%20Doha%20Qatar.jpg",
    },
    {
      city: "Al Zubarah",
      title: "Al Zubarah",
      description:
        "Antiga cidade fortificada e Patrimônio Mundial da UNESCO, importante sítio arqueológico que revela o passado mercantil do país.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Al%20Zubarah%20Fort%20Qatar.jpg",
    },
    {
      city: "Inland Sea (Khor Al Adaid)",
      title: "Inland Sea (Khor Al Adaid)",
      description:
        "Mar interior rodeado por dunas douradas, um fenômeno natural único acessível apenas por veículos 4x4.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Khor%20Al%20Adaid%20Qatar.jpg",
    },
    {
      city: "Aspire Park",
      title: "Aspire Park",
      description:
        "Oásis verde em Doha com lagos artificiais, áreas para piquenique e vista para o icônico arranha-céu The Torch.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Aspire%20Park%20Doha%20Qatar.jpg",
    },
    {
      city: "National Museum of Qatar",
      title: "National Museum of Qatar",
      description:
        "Obra-prima arquitetônica projetada por Jean Nouvel, conta a história e o desenvolvimento do Qatar de forma interativa e imersiva.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/National%20Museum%20of%20Qatar%20Doha.jpg",
    },
    {
      city: "Al Wakrah",
      title: "Al Wakrah",
      description:
        "Cidade costeira charmosa com praias, museus e o Souq Al Wakrah, uma versão mais tranquila do mercado tradicional de Doha.",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Al%20Wakrah%20Souq%20Qatar.jpg",
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
      },
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
          "https://commons.wikimedia.org/wiki/Special:Search?search=Iguazu+Falls",
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
    country: "Australia",
    destinations: [
      {
        name: "Grande Barreira de Corais",
        description:
          "Mundo submarino espetacular — recifes vívidos e biodiversidade de tirar o fôlego.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Search?search=Great+Barrier+Reef",
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
        image: "https://commons.wikimedia.org/wiki/Special:Search?search=Vienna",
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
        image: "https://commons.wikimedia.org/wiki/Special:Search?search=Sundarbans",
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
    country: "Belgium",
    destinations: [
      {
        name: "Bruges (cidade medieval)",
        description:
          "Canais românticos, ruelas de pedra e chocolates artesanais — conto de fadas europeu.",
        image: "https://commons.wikimedia.org/wiki/Special:Search?search=Bruges",
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
        image: "https://commons.wikimedia.org/wiki/Special:Search?search=Ouidah",
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
          "Opulência arquitetônica à beira-mar ��� símbolo do patrimônio muçulmano local.",
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
        description: "Ritmos, mercados tradicionais e arquitetura africana autêntica.",
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
        image: "https://commons.wikimedia.org/wiki/Special:Search?search=Angkor+Wat",
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

function toDestination(d: { name: string; description: string; image: string }): Destination {
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
  {} as Record<string, Destination[]>
);

// Merge base and extra, concatenating arrays and de-duplicating by title|city
export const destinationsByCountry: Record<string, Destination[]> = Object.keys({
  ...baseDestinations,
  ...extraByCountry,
}).reduce((acc, country) => {
  const merged = [...(baseDestinations[country] || []), ...(extraByCountry[country] || [])];
  const seen = new Set<string>();
  acc[country] = merged.filter((d) => {
    const k = `${d.title}|${d.city}`.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  return acc;
}, {} as Record<string, Destination[]>);

export const brazilRegionDestinations: Record<string, Destination[]> = {
  Norte: [
    {
      city: "Monte Roraima",
      title: "Monte Roraima",
      description: "Formação tepui mítica na tríplice fronteira (BR/VE/GY), alvo de trilhas e aventura.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Monte_Roraima%2C_Roraima.JPG",
    },
    {
      city: "Jalapão",
      title: "Jalapão",
      description: "Região de dunas, fervedouros e paisagens surreais — queridinha de ecoturistas aventureiros.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jalap%C3%A3o_-_Tocantins_-_Brasil.jpg",
    },
    {
      city: "Ilha de Marajó",
      title: "Ilha de Marajó",
      description: "Maior ilha fluviomarítima do mundo — cultura marajoara, búfalos e praias ribeirinhas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ilha_de_Maraj%C3%B3.jpg",
    },
    {
      city: "Encontro das Águas",
      title: "Encontro das Águas",
      description: "Fenômeno onde o Rio Negro e o Solimões correm lado a lado sem se misturar por quilômetros.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Encontro_das_%C3%81guas_-_Manaus.jpg",
    },
    {
      city: "Teatro Amazonas (Manaus)",
      title: "Teatro Amazonas (Manaus)",
      description: "Ícone cultural do ciclo da borracha — casa de ��pera histórica e arquitetura impressionante.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Teatro_Amazonas%2C_Manaus_AM.jpg",
    },
    {
      city: "Pico da Neblina",
      title: "Pico da Neblina",
      description: "Ponto mais alto do Brasil — destino extremo para quem busca trekking e selva profunda.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pico_da_Neblina.jpg",
    },
    {
      city: "Alter do Chão",
      title: "Alter do Chão",
      description: "O famoso 'Caribe Amazônico' — praias de água doce com areias claras e águas cristalinas.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Alter_do_Ch%C3%A3o.jpg",
    },
    {
      city: "Praia de Joanes (Ilha de Marajó)",
      title: "Praia de Joanes (Ilha de Marajó)",
      description: "Praia ribeirinha em Marajó, conhecida por cenários naturais e ruínas históricas no entorno.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Praia_Joanes.jpg",
    },
    {
      city: "Praia do Pesqueiro (Soure, Marajó)",
      title: "Praia do Pesqueiro (Soure, Marajó)",
      description: "Praia rústica e paradisíaca na Ilha de Marajó, destino popular entre visitantes da ilha.",
      image: "https://tudosobrepraias.com/wp-content/uploads/2025/05/Praia-do-Pesqueiro-Um-Pedacinho-do-Ceu-768x448.webp",
    },
    {
      city: "Praia de Fazendinha (Macapá)",
      title: "Praia de Fazendinha (Macapá)",
      description: "Balneário popular em Macapá, muito frequentado no verão local para banho e lazer.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fim_de_tarde_na_Praia_de_Fazendinha.jpg",
    },
    {
      city: "Praia / Rio Arari (Cachoeira do Arari, Marajó)",
      title: "Praia / Rio Arari (Cachoeira do Arari, Marajó)",
      description: "Áreas de praias e rios em Cachoeira do Arari, com paisagens típicas de Marajó.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rio_Arari.jpg",
    },
    {
      city: "Praia da Ponta Negra (Manaus)",
      title: "Praia da Ponta Negra (Manaus)",
      description: "Orla urbana no Rio Negro, conhecida pelo pôr do sol e infraestrutura turística local.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ponta-Negra-Manaus.jpg",
    },
  ],
  Nordeste: [
    {
      city: "Fernando de Noronha",
      title: "Fernando de Noronha",
      description: "Arquipélago paradisíaco com praias de águas cristalinas, vida marinha exuberante e paisagens deslumbrantes.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/91/EDUARDO_MURUCI_-_BAIA_DOS_PORCOS-%28recorte%29.jpg",
    },
    {
      city: "Lençóis Maranhenses",
      title: "Lençóis Maranhenses",
      description: "Parque Nacional com dunas de areia branca e lagoas de água doce, criando um cenário único no mundo.",
      image: "https://www.gov.br/turismo/pt-br/assuntos/noticias/parque-nacional-dos-lencois-maranhenses-e-reconhecido-como-patrimonio-natural-da-humanidade/CrditoguilhermespenglerShutterstock.png/@@images/5faf9a18-2c4d-49b2-bb40-990f2bb18803.png",
    },
    {
      city: "Chapada Diamantina",
      title: "Chapada Diamantina",
      description: "Região montanhosa com cavernas, cachoeiras e trilhas desafiadoras, ideal para ecoturismo.",
      image: "https://imgmd.net/images/c_limit%2Cw_1200/v1/guia/1618961/morro-do-pai-inacio.jpg",
    },
    {
      city: "Jericoacoara",
      title: "Jericoacoara",
      description: "Vila charmosa com dunas, lagoas e vida noturna animada, localizada no Ceará.",
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRvXMI2A4byc6Uhdb7MQXZeVPFmJucj4Lhxh4yITJAqGqrpJdcOn4A6cMYiwaWBDfEin0XA1UqhXmXB6pHzjDi5lqqIu4ctUAYnmekN3A",
    },
    {
      city: "Porto de Galinhas",
      title: "Porto de Galinhas",
      description: "Praia famosa por suas piscinas naturais e rica vida marinha, situada em Pernambuco.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxOfB_oHVlgN2EEgZD26NE2mqvlKQs_AK8S_U40wouz2bF2j19Q7LWAs59hX50u2J_y02ByhFNGKvt6nWCkph5vDbReA9Eys2noL_l4r3sg",
    },
    {
      city: "Morro de São Paulo",
      title: "Morro de São Paulo",
      description: "Ilha com praias de águas claras, vida noturna agitada e ambiente descontraído, na Bahia.",
      image: "https://magazine.zarpo.com.br/wp-content/uploads/2023/04/Morro-de-Sao-Paulo-2-1.jpg",
    },
    {
      city: "Praia do Francês",
      title: "Praia do Francês",
      description: "Praia paradisíaca com águas mornas e tranquilas, ideal para relaxamento e esportes aquáticos.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4IMIHs8HqMClCmJaJRdJG5JVpchLk--7pW3QT1tAnwEpzXmcLxQgTlzxUzA&s",
    },
    {
      city: "Praia de Pajuçara",
      title: "Praia de Pajuçara",
      description: "Praia urbana com piscinas naturais acessíveis por jangada, localizada em Maceió, Alagoas.",
      image: "https://imgmd.net/images/c_limit%2Cw_800/v1/guia/1574629/praia-de-pajucara.jpg",
    },
    {
      city: "Praia do Forte",
      title: "Praia do Forte",
      description: "Praia tranquila com águas claras, ideal para famílias e observação de tartarugas marinhas.",
      image: "https://dicasdabahia.com.br/wp-content/uploads/sites/28/2022/04/praia-do-forte-e1649085484252-jpg.webp",
    },
    {
      city: "Praia de Genipabu",
      title: "Praia de Genipabu",
      description: "Praia famosa por suas dunas móveis e lagoas, localizada no Rio Grande do Norte.",
      image: "https://i.ytimg.com/vi/5iGb2uFKXTc/sddefault.jpg",
    },
    {
      city: "Praia de Morro Branco",
      title: "Praia de Morro Branco",
      description: "Praia com falésias coloridas e águas claras, situada no Ceará.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2J2BclC62L_S7-atGMXOuWjE-RD_hi4OQce8x5cs2LKqOqM8HKqAGIwu6_A-ZYFqFEjHDLBsstRzDHdGtugQM1N03hGgPgpEEQDD9badtPT4jL373agbLZofYbpPwDAY-nI114wbCmOFu/s1600/plages-pertes-vue.jpg",
    },
    {
      city: "Praia de Carneiros",
      title: "Praia de Carneiros",
      description: "Praia paradisíaca com coqueiros e águas mornas, localizada em Tamandaré, Pernambuco.",
      image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS010o6V46r--L-SzEDBsUaOEcs-hqUgQT8BxY2apujuh_FmglTe6SjBXKPNXmFt9WCAsgPdBnPcWTVBjQZau4Z0kqRr86JGnKFjP_eIrY",
    },
  ],
  "Centro-Oeste": [
    {
      city: "Chapada dos Veadeiros",
      title: "Chapada dos Veadeiros",
      description: "Parque nacional com cachoeiras, cânions e trilhas em cerrado preservado.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cachoeira%20Santa%20B%C3%A1rbara%20-%20Chapada%20dos%20Veadeiros.jpg",
    },
    {
      city: "Caldas Novas",
      title: "Caldas Novas",
      description: "Maior complexo hidrotermal do mundo, águas quentes e parques aquáticos.",
      image: "https://www.gov.br/turismo/pt-br/assuntos/noticias/aguas-termais-saiba-de-onde-vem-as-aguas-aquecidas-da-cidade-de-rio-quente-go/design-sem-nome-50.png/@@images/e64f88d7-f072-4aec-a1c5-77323f8fc010.png",
    },
    {
      city: "Cidade de Goiás (Goiás Velho)",
      title: "Cidade de Goiás (Goiás Velho)",
      description: "Patrimônio histórico com arquitetura colonial preservada e museus.",
      image: "https://goias.gov.br/cultura/wp-content/uploads/sites/25/2016/08/cidade-de-goias-velho-foto-mantovani-fernandes7730-717.jpg",
    },
    {
      city: "Parque Nacional das Emas",
      title: "Parque Nacional das Emas",
      description: "Campos do cerrado, fauna rica e saf��ris noturnos em paisagens únicas.",
      image: "https://www.curtamais.com.br/uploads/midias/fc6182536048f9538cc1e609c58f0d14.jpg",
    },
    {
      city: "Cuiabá",
      title: "Cuiabá",
      description: "Porta de entrada para o Pantanal e Chapada dos Guimarães; cultura e gastronomia típicas.",
      image: "https://m.ahstatic.com/is/image/accorhotels/o-que-fazer-em-cuiaba-guia-completo-de-pontos-turisticos-2024-2:3by2?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.3&wid=335&hei=223&qlt=80",
    },
    {
      city: "Chapada dos Guimarães",
      title: "Chapada dos Guimarães",
      description: "Escarpas, mirantes e a icônica cachoeira Véu de Noiva.",
      image: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/07/o-que-fazer-chapada-dos-guimaraes-dicas-capa.jpg",
    },
    {
      city: "Parque Nacional da Serra da Bodoquena",
      title: "Parque Nacional da Serra da Bodoquena",
      description: "Um paraíso escondido no coração do Mato Grosso do Sul, com cachoeiras cristalinas, cânions impressionantes e trilhas que revelam a essência do Cerrado e da Mata Atl��ntica.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrmoN67E27g3b7DBRE3UKfz4b3bTUMOPKz9WiDOV7qORKpGYQ-S6ogE8KjZm_Ucssoq5c-2cf0IejSsdfhS0BpAaKM9mlncla5SOLo7hW_4Nvh0xfUvM1_uUS2Mu-KoeZs273dXGsW2Cjsc=s680-w680-h510-rw",
    },
    {
      city: "Nobres (Aquário Encantado)",
      title: "Nobres (Aquário Encantado)",
      description: "Rios de águas cristalinas, flutuação e grutas como o Aquário Encantado.",
      image: "https://lh3.googleusercontent.com/p/AF1QipPzHZyXqNRB6dJe7MxcktsqoedFYBNlbeBEepgZ=s680-w680-h510-rw",
    },
    {
      city: "Bonito",
      title: "Bonito",
      description: "Grutas e rios transparentes ideais para flutuação e mergulho.",
      image: "https://lh3.googleusercontent.com/p/AF1QipNI5Qn4zkQwHsz-5XBzK628tFvR5Xzj0VE2SKdU=s680-w680-h510-rw",
    },
    {
      city: "Fazenda Ceita Corê",
      title: "Fazenda Ceita Corê",
      description: "A ‘Terra de Meus Filhos’ oferece um dia completo de aventura e calmaria: trilha entre 7 cachoeiras, nascente cristalina do Rio Chapena, tirolesa, lago para flutuar ou remar, e estrutura acolhedora no receptivo para relaxar.",
      image: "https://www.viagensecaminhos.com/wp-content/uploads/2021/06/fazenda-ceita-core-bonito-ms.jpg",
    },
    {
      city: "Campo Grande",
      title: "Campo Grande",
      description: "Capital com cultura pantaneira, parques urbanos e boa gastronomia.",
      image: "https://wrhotel.com.br/wp-content/uploads/2023/10/parque-das-nacoes-indigenas.jpg",
    },
    {
      city: "Corumbá",
      title: "Corumbá",
      description: "Cidade histórica ��s margens do Rio Paraguai, porta de entrada do Pantanal sul.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrF9ZYsjRrVy0N1DSm4unipKZ1MUrxWWuf2L-ahk2iQB-cRa6ACP4-9qEJwjsbNue2GmgBb8fuTCPyNDm7fu1O35K5KDq-NSM5KJ9rrEpq9r8BLdqW0zZnrZCX5DgIarsNj0EHEuA=w540-h312-n-k-no",
    },
    {
      city: "Congresso Nacional",
      title: "Congresso Nacional",
      description: "Ícone modernista de Oscar Niemeyer e símbolo da capital federal.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Congresso%20Nacional%20Bras%C3%ADlia.jpg",
    },
    {
      city: "Catedral Metropolitana de Brasília",
      title: "Catedral Metropolitana de Brasília",
      description: "Obra-prima de Niemeyer com vitrais marcantes e arquitetura singular.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Catedral%20Metropolitana%20de%20Bras%C3%ADlia.jpg",
    },
    {
      city: "Lago Paranoá",
      title: "Lago Paranoá",
      description: "Lago urbano para esportes aquáticos, passeios e orlas agradáveis.",
      image: "https://www.quintoandar.com.br/guias/wp-content/uploads/2023/04/Lago-Paranoa.jpg",
    }
  ],
  Sudeste: [
    {
      city: "São Paulo (capital)",
      title: "São Paulo (capital)",
      description: "O coração pulsante do Brasil, onde cultura, gastronomia e negócios se encontram em uma metrópole vibrante e cosmopolita.",
      image: "https://www.gov.br/g20/pt-br/noticias/presente-e-futuro-das-cidades-maior-metropole-das-americas-sao-paulo-recebe-cupula-do-urban-20/@@images/image-2000-d280960f00b6ad7cbaae4cc620d0c389.jpeg",
    },
    {
      city: "Campos do Jordão",
      title: "Campos do Jordão",
      description: "A Suíça Brasileira, com clima ameno, arquitetura de estilo europeu e paisagens montanhosas que encantam o visitante.",
      image: "https://www.recantodossonhos.com.br/wp-content/uploads/2019/03/face.png",
    },
    {
      city: "Ilhabela",
      title: "Ilhabela",
      description: "Um paraíso tropical com praias paradisíacas, trilhas na Mata Atlântica e uma rica cultura caiçara.",
      image: "https://mediaim.expedia.com/destination/1/bfb7e46daa73ffe3206abbe43a384354.jpg",
    },
    {
      city: "Rio de Janeiro (capital)",
      title: "Rio de Janeiro (capital)",
      description: "Cidade maravilhosa, famosa por suas praias icônicas, o Cristo Redentor e o Pão de Aç��car, além de uma energia contagiante.",
      image: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/03/1-cristo-redentor.jpg",
    },
    {
      city: "Paraty",
      title: "Paraty",
      description: "Uma joia colonial com ruas de pedra, casarões históricos e acesso a ilhas e praias deslumbrantes.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Paraty_05.JPG/1200px-Paraty_05.JPG",
    },
    {
      city: "Arraial do Cabo",
      title: "Arraial do Cabo",
      description: "Conhecida como o Caribe brasileiro, com águas cristalinas, praias de areia branca e excelente para mergulho.",
      image: "https://imgmd.net/images/v1/guia/1683209/arraial-do-cabo-190-c.jpg",
    },
    {
      city: "Belo Horizonte",
      title: "Belo Horizonte",
      description: "Capital de Minas Gerais, famosa por sua culinária, vida noturna e proximidade com cidades históricas.",
      image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcShxhQ-6Ozrs1PiBmW3-CVCaAAaGCjZRlYWgN-GeshCiHzzgzg-KhPz9soN73UDz786p9n87CSgOl7hukmy77FHA01jXCGaG48ER7BKX7A",
    },
    {
      city: "Búzios",
      title: "Búzios",
      description: "Búzios é um destino encantador que combina praias paradisíacas, vida noturna vibrante e charme europeu. Com mais de 20 praias de águas cristalinas e uma atmosfera cosmopolita, é o lugar perfeito para relaxar, praticar esportes aquáticos ou explorar a gastronomia local.",
      image: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/08/Buzios-RJ-O-que-fazer-Capa.jpg",
    },
    {
      city: "Ouro Preto",
      title: "Ouro Preto",
      description: "Cidade histórica com arquitetura colonial preservada, igrejas barrocas e rica história da Inconfid��ncia Mineira.",
      image: "https://guiaviajarmelhor.com.br/wp-content/uploads/2023/08/dicas-guia-ouro-preto-mg6.png",
    },
    {
      city: "Capitólio",
      title: "Capitólio",
      description: "Conhecida como o 'Mar de Minas', com cânions impressionantes, cachoeiras e o Lago de Furnas.",
      image: "https://imgmd.net/images/v1/guia/1613817/canion-de-furnas.jpg",
    },
    {
      city: "Vitória",
      title: "Vitória",
      description: "Capital do Espírito Santo, com belas praias urbanas, rica cultura capixaba e excelente gastronomia.",
      image: "https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2018/09/Topo-Vit%C3%B3ria-2.jpg",
    },
    {
      city: "Vila Velha",
      title: "Vila Velha",
      description: "Cidade histórica com o Convento da Penha, praias tranquilas e rica tradição cultural.",
      image: "https://www.penaestrada.blog.br/wp-content/uploads/2020/12/o-que-fazer-em-vila-velha-09.jpg",
    },
    {
      city: "Guarapari",
      title: "Guarapari",
      description: "Famosa por suas praias com areias monazíticas e ��guas terapêuticas, ideal para relaxar.",
      image: "https://blog.blablacar.com.br/wp-content/uploads/2023/12/guarapari-es-1.jpg",
    },
    {
      city: "Domingos Martins",
      title: "Domingos Martins",
      description: "Cidade serrana com clima europeu, arquitetura de estilo germânico e rica cultura imigrante.",
      image: "https://ondeir360.com.br/wp-content/uploads/2024/02/domingos-martins02.jpg",
    },
    {
      city: "Petrópolis",
      title: "Petrópolis",
      description: "A Cidade Imperial do Rio de Janeiro, conhecida pelo Palácio Imperial, arquitetura histórica e clima serrano agradável.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/54/63/9d/palacio-quitandinha.jpg?w=1400&h=1400&s=1",
    }
  ],
  Sul: [
    {
      city: "Foz do Iguaçu",
      title: "Foz do Iguaçu",
      description: "Um dos destinos mais impressionantes do Brasil, famoso pelas majestosas Cataratas do Iguaçu e pela rica biodiversidade do Parque Nacional.",
      image: "https://www.hoteldelreyfoz.com.br/wp-content/uploads/2022/10/Cataratas-do-Iguacu_-min.png",
    },
    {
      city: "Curitiba",
      title: "Curitiba",
      description: "Capital elegante com planejamento urbano inovador, o Jardim Botânico e uma cena cultural vibrante que encanta turistas.",
      image: "https://imgmd.net/images/v1/guia/1684234/curitiba-185-c.jpg",
    },
    {
      city: "Ilha do Mel",
      title: "Ilha do Mel",
      description: "Ref��gio paradisíaco com praias de águas cristalinas, trilhas ecológicas e clima de natureza preservada.",
      image: "https://www.viagensecaminhos.com/wp-content/uploads/2017/08/ilha-do-mel-1.jpg",
    },
    {
      city: "Florianópolis",
      title: "Florianópolis",
      description: "A ‘Ilha da Magia��� encanta com praias incríveis, vida noturna animada e natureza exuberante.",
      image: "https://maisviagens.net.br/wp-content/uploads/2022/01/FLORIPA.jpg",
    },
    {
      city: "Balneário Camboriú",
      title: "Balneário Camboriú",
      description: "Cidade litor��nea famosa por suas praias urbanas, arranha-céus à beira-mar e entretenimento vibrante.",
      image: "https://blog.123milhas.com/wp-content/uploads/2022/07/balneario-camboriu-curiosidades-sobre-a-cidade-do-litoral-catarinense-conexao123.jpg",
    },
    {
      city: "Blumenau",
      title: "Blumenau",
      description: "Cidade com forte influência germânica, conhecida pelo Oktoberfest e sua arquitetura típica encantadora.",
      image: "https://blog.blablacar.com.br/wp-content/uploads/2023/11/blumenau-sc-4.jpg",
    },
    {
      city: "Bombinhas",
      title: "Bombinhas",
      description: "Praias cristalinas, mergulho e trilhas naturais fazem desta cidade um destino perfeito para ecoturismo.",
      image: "https://roccoimob.com/wp-content/uploads/2025/02/Novo-pier-com-roda-gigante-no-canto-grande-Uma-Nova-Visao-para-o-Turismo-de-Bombinhas-2.jpg",
    },
    {
      city: "Gramado",
      title: "Gramado",
      description: "Cidade charmosa de inverno, com arquitetura europeia, eventos natalinos e gastronomia diferenciada.",
      image: "https://cdn.folhadomate.com/wp-content/uploads/2020/09/mini_gramado.jpg",
    },
    {
      city: "Canela",
      title: "Canela",
      description: "Natureza exuberante com a famosa Cascata do Caracol, trilhas e clima serrano acolhedor.",
      image: "https://cdn-clubecandeias.s3.sa-east-1.amazonaws.com/uploads/2016/06/catedral-de-pedra-canela-rs-clube-candeias.jpg",
    },
    {
      city: "Londrina",
      title: "Londrina",
      description: "Cidade moderna do Paraná, com parques urbanos, vida cultural intensa e opções de lazer para toda a família.",
      image: "https://blog.arboimoveis.com.br/wp-content/uploads/2021/02/londrina.png",
    },
    {
      city: "Guaratuba",
      title: "Guaratuba",
      description: "Destino litorâneo encantador no Paraná, com praias de areia fina, águas calmas e natureza preservada. Perfeito para famílias, esportes aquáticos e contato com o ecoturismo, como trilhas e manguezais.",
      image: "https://www.viajeparana.com/sites/viaje-parana/arquivos_restritos/files/styles/share/public/imagem/2019-04/baia_de_guaratuba_-_foto_mjnatalino_29.jpg?itok=Z5uV1w37",
    },
    {
      city: "Praia do Rosa",
      title: "Praia do Rosa",
      description: "Considerada uma das praias mais belas do Brasil, a Praia do Rosa encanta com suas águas cristalinas, falésias impressionantes e ambiente ideal para surfe, ecoturismo e contato com a natureza. Um verdadeiro paraíso catarinense.",
      image: "https://guiaviajarmelhor.com.br/wp-content/uploads/2021/07/praia-do-rosa-sc-3.jpg",
    }
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
