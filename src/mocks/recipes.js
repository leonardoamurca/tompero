const recipes = [
  {
    id: "1",
    author: "Carlos Alberto de Nóbrega",
    title: "Brigadeiro",
    description:
      "O brigadeiro é o clássico dos doces, podendo ser consumido enroladinho, de colher, dentro de receitas e até na panela. A receita tradicional leva chocolate em pó, leite condensado e margarina.",
    ingredients:
      "1 lata de leite condensado; 3 ou 4 colheres de chá de chocolate em pó; 1 colher de manteiga; Granulado (opcional)",
    directions:
      "Em uma panela, coloque o Leite MOÇA com o Chocolate em Pó DOIS FRADES e a manteiga.; Misture bem e leve ao fogo baixo, mexendo sempre até desprender do fundo da panela (cerca de 10 minutos). ; Retire do fogo, passe para um prato untado com manteiga e deixe esfriar. ; Com as mãos untadas, enrole em bolinhas e passe-as no granulado. Sirva em forminhas de papel.",
    picture:
      "https://i0.statig.com.br/bancodeimagens/dx/gn/yo/dxgnyo752rcs4yt1jdz86v8rb.jpg",
  },
  {
    id: "2",
    author: "Rodrigo Hilbert",
    title: "Miojo",
    description:
      "Pra quem gosta, o miojo é um verdadeiro salva-vidas. Fácil de fazer, ele combina perfeitamente com a fome do almoço, do jantar e da larica da noite ou pós-balada.",
    ingredients:
      "1 embalagem de miojo sabor legumes; 1 xícara (chá) de brócolis cozidos e temperados; ½ xícara (chá) de queijo branco em cubos; 1 colher (sobremesa) de alho; 1 colher (sopa) de tomate picado; 1 colher (café) de azeite",
    directions:
      "Prepare o miojo conforme as instruções da embalagem e reserve.; Refogue o alho no azeite e acrescente os brócolis e o tomate.; Em seguida, misture o miojo pronto na panela com os ingredientes.; Jogue os cubos de queijo por cima e sirva.",
    picture:
      "https://www.guiadasemana.com.br/contentFiles/system/pictures/2015/8/141685/original/brocolis-com-queijo-branco.jpg",
  },
  {
    id: "3",
    author: "Ana Maria Braga",
    title: "Omelete japonesa (tamagoyaki)",
    description:
      "Uma omelete em forma de rolinhos, bem aerada e com bastante queijo é uma refeição. Sirva com arroz se quiser “fazer render” ou com uma saladinha se não quiser muitas calorias.",
    ingredients:
      "6 ovos; 2 colheres (sopa) de leite; Sal e pimenta-do-reino; 50 g de recheio de sua preferência; Manteiga para untar.",
    directions:
      "Com um batedor de arame (fouet), bata os ovos com o leite.; Tempere com sal e pimenta-do-reino a gosto e coe a mistura.; Adicione o recheio de sua preferência (frios, queijo, tomate, salsa, nirá ou cebolinha japonesa, cebolinha verde etc.).; Numa frigideira quadrada untada com manteiga sobre fogo baixo, coloque 1 concha da mistura e incline a frigideira para espalhar por todo o fundo.; Quando secar por baixo, enrole a omelete e deixe-a em um canto da frigideira.; Unte novamente a frigideira e coloque mais 1 concha da mistura, forrando todo o fundo (até por baixo da omelete reservada).; Espere secar por baixo e enrole juntamente com a omelete pronta.",
    picture:
      "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2018/11/omelete-japonesa-tamagoyaki-1024x576.jpg",
  },
  {
    id: "4",
    author: "Palmirinha",
    title: "Macarrão com molho de queijo e ervas",
    description:
      "Macarrão sempre salva. Se você cozinhar demais fica mole, fica ruim. Para uma melhor experiência veja como nunca mais errar o ponto do macarrão  e depois siga a receita à risca.",
    ingredients:
      "500 g de fusilli (parafuso); Sal; 1 e 3/4 de xícara (chá) da água do cozimento do macarrão; 400 g de creme de leite; 400 g de queijo prato ralado gross; 100 g de parmesão ralado fino; 1/2 xícara (chá) de folhas de salsinha; 1/2 xícara (chá) de folhas de manjericão; 2 colheres (chá) de páprica picante; 1 colher (chá) de pimenta-caiena",
    directions:
      'Cozinhe o macarrão em água fervente abundante com sal até o ponto desejado, mas, quando ficar "al dente", retire a água especificada nos ingredientes.; Bata os demais ingredientes no liquidificador até ficar homogêneo e ajuste o sal.; Escorra o macarrão e sirva com o molho.',
    picture:
      "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2018/11/macarrao-com-molho-de-queijo-e-ervas-1024x576.jpg",
  },
  {
    id: "5",
    author: "Érick Jacquin",
    title: "Nhoque fácil (sem glúten)",
    description:
      "Tem batatas e amido de milho em casa? Já dá pra fazer um nhoque! O molho pode ser pronto ou caseiro. Vai do gosto do freguês.",
    ingredients:
      "4 colheres (sopa) de margarina; 2 colheres (chá) de alho picado; 6 colheres (sopa) de cebola bem picadinha;1 kg de batatas cozidas e espremidas; 1 xícara (chá) de amido de milho; 2 gemas; 1 sachê de tempero a gosto; Salsa picadinha e sal a gosto; Molho de sua preferência",
    directions:
      "Derreta a margarina e refogue bem o alho e a cebola. Em fogo baixo e mexendo sempre, adicione a batata espremida, o amido, as gemas, o tempero e salsa e sal a gosto e cozinhe até incorporar e desgrudar do fundo da panela (uns 5 minutos). Deixe amornar.; Em superfície lisa, enrole porções da massa, fazendo rolinhos compridos (se necessário, polvilhe amido de milho), e corte os nhoques. Sirva com o molho de sua preferência bem quente.",
    picture:
      "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/04/Nhoque-facil-sem-gluten-1024x439.jpg",
  },
  {
    id: "6",
    author: "Mãe Diná",
    title: "Panquequinha de clara recheada com carne",
    description:
      "Dá para não saber cozinhar e ser light, né? Ao invés de jejum faça essa receita fácil de panqueca de claras e recheie com carne ou proteína texturizada de soja.",
    ingredients:
      "9 claras; ½ xícara (chá) de fécula de batata; ¾ de xícara (chá) de água; ½ colher (chá) de pimenta Tabasco®; Sal e pimenta-do-reino; 1 colher (sopa) de óleo; Recheio de carne moída refogada + queijo e presunto; Molho de sua preferência",
    directions:
      "Misture as claras com a fécula de batata, a água e a pimenta e tempere com sal e pimenta-do-reino a gosto.; Bata bem com um batedor de arame fouet e retire a espuma que se forma com uma escumadeira.; Aqueça uma panquequeira ou frigideira antiaderente untada com óleo e despeje uma porção da massa, de modo a forrar todo o fundo.; Deixe dourar por baixo por cerca de 1 minuto (levante com uma espátula e verifique) e retire do fogo.; Mantenha as panquecas cobertas com um pano à medida que for preparando.; Coloque uma porção do recheio no centro de cada disco de massa e enrole. Sirva com o molho de sua preferência.",
    picture:
      "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2016/11/panquequinha-de-clara-recheada-com-carne-2941.jpg",
  },
  {
    id: "7",
    author: "Dona Benta",
    title: "Pão de queijo de liquidificador",
    description:
      "Do copo do liquidificador diretamente para as forminhas e pro forno. Se isso não é facilidade não sei o que é. Receita barata e sem erro!",
    ingredients:
      "1/2 copo (tipo de requeijão) de óleo; 1 copo de leite; 2 ovos; 1 copo de polvilho doce; 1 copo de polvilho azedo; 2 colheres (sopa) de queijo ralado; 1 colher (chá) rasa de sal; Margarina para untar",
    directions:
      "Bata os ingredientes no liquidificador, começando pelos líquidos, até homogeneizar.; Distribua em forminhas de empada untadas com margarina, sem encher completamente, e leve ao forno médio preaquecido (180ºC) por cerca de 30 minutos ou até dourarem.",
    picture:
      "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/03/pao-de-queijo-dos-sonhos.jpg",
  },
  {
    id: "8",
    author: "Leo",
    title: "Lasanha de Miojo",
    description:
      "O que falar dessa maravilha? Algo como “Deus me livre, quem me dera”. Tente não oferecer para as visitas",
    ingredients:
      "2 pacotes (160 g) de macarrão instantaneo.;  Água fervente; 350g de molho de tomate; 170g de requeijão; 180 ml de água; 100g de presunto fatiado picado; 100g de muçarela ralada; Parmesão ralado a gosto",
    directions:
      "Retire o macarrão da embalagem e, com cuidado, separe as 2 placas com uma faca. Coloque as 4 placas em uma tigela e cubra com água fervente. Deixe hidratar por 2 minutos e retire com cuidado para não quebrar. Reserve.; Misture o molho de tomate com o requeijão e a água. Em um refratário (22 x 16 cm), forre o fundo com uma porção desse molho e coloque 2 placas de macarrão lado a lado.; Espalhe o presunto e a muçarela, regue com metade do molho e encerre com as placas de macarrão restantes. Cubra com o molho restante e salpique parmesão a gosto.; Leve ao forno alto preaquecido (250°C) por cerca de 20 minutos ou até gratinar. Sirva em seguida.",
    picture:
      "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/10/lasanha-de-macarrao-instantaneo-6132.jpg",
  },
];

export { recipes };
