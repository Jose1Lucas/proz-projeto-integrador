document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menuContent = document.querySelector(".menu-content");

  menuIcon.addEventListener("click", () => {
    menuContent.classList.toggle("menu-active");
  });

  // Fecha o menu se o usuário clicar fora do menu em telas pequenas.
  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".navbar") &&
      !event.target.closest(".menu-content") &&
      window.innerWidth < 769
    ) {
      menuContent.classList.remove("menu-active");
    }
  });
});

function mostrarInformacoes(tipo) {
  // Esconde todas as seções
  const mitologias = document.querySelectorAll(
    ".mitologia-grega, .mitologia-romana"
  );
  mitologias.forEach((el) => (el.style.display = "none"));

  // Mostra a mitologia selecionada
  if (tipo === "grega") {
    document.querySelector(".mitologia-grega").style.display = "block";
  } else if (tipo === "romana") {
    document.querySelector(".mitologia-romana").style.display = "block";
  }
}

const locais = [
  {
    nome: "Atenas",
    x: 756,
    y: 434,
    descricao:
      "Atenas - Berço da democracia, centro da filosofia 📜(Sócrates, Platão, Aristóteles) e das artes 🎭 (Partenon, Teatro de Dionísio).",
  },
  {
    nome: "Roma",
    x: 532,
    y: 329,
    descricao:
      "Roma - Capital do Império Romano, lar do Coliseu 🏟️, do Fórum Romano e do Panteão 🏛️.",
  },

  {
    nome: "Alexandria",
    x: 884,
    y: 600,
    descricao:
      "Alexandria - Fundada por Alexandre, abrigava a lendária Biblioteca de Alexandria 📖 e o Farol (uma das Sete Maravilhas).",
  },

  {
    nome: "Cairo",
    x: 914,
    y: 625,
    descricao: "Cairo - Considerado a sede da Liga Árabe 🏛️.",
  },
  {
    nome: "Tel Aviv-Yafo",
    x: 987,
    y: 578,
    descricao:
      "Tel Aviv-Yafo - É a segunda cidade mais turística de Israel graças às suas praias 🏝️.",
  },
  {
    nome: "Amman",
    x: 1009,
    y: 580,
    descricao:
      "Amã - É o principal centro comercial, financeiro 💰 da Jordânia.",
  },
  {
    nome: "Damascus",
    x: 1015,
    y: 542,
    descricao:
      "Damasco - Muitos estudiosos acreditam que, entre as cidades antigas do mundo, Damasco é talvez a mais antiga continuamente habitada.",
  },
  {
    nome: "Beirut",
    x: 1003,
    y: 532,
    descricao:
      "Beirute - Conhecida na Antiguidade como Berytus, grande centro de estudos do Direito Romano.",
  },
  {
    nome: "Ankara",
    x: 944,
    y: 381,
    descricao:
      "Ancara - Tem uma torre do relógio 🕚 escondida dentro da Cidadela de Ankara, um dos marcos históricos mais antigos da região.",
  },
  {
    nome: "Benghazi",
    x: 683,
    y: 578,
    descricao:
      "Bengasi - Tem uma forte influência grega e romana, já que foi uma colônia da Grécia Antiga 🏛️ no período ptolomaico.",
  },
  {
    nome: "Instanbul",
    x: 865,
    y: 349,
    descricao:
      "Istambul - É a única cidade no mundo que está localizada em dois continentes 🗺️: Ásia e Europa.",
  },
  {
    nome: "Tripoli",
    x: 542,
    y: 560,
    descricao: "Trípoli é o centro da região mais densamente povoada da Líbia.",
  },
  {
    nome: "Tunis",
    x: 480,
    y: 461,
    descricao: "Tunes - Foi fundada pelos líbios no século IX a.C.",
  },
  {
    nome: "Marrakesh",
    x: 108,
    y: 593,
    descricao:
      "Marrakech - A cidade é conhecida pela tonalidade avermelhada de suas construções, que vêm da cor da argila usada nas paredes. Essa característica fez com que fosse apelidada de 'Cidade Vermelha' ♦️ ou 'Cidade de Ouro' 🪙.",
  },
  {
    nome: "Casablanca",
    x: 115,
    y: 543,
    descricao:
      "Casablanca - É a terceira maior cidade turística ✈️ do Marrocos.",
  },
  {
    nome: "Rabat",
    x: 133,
    y: 531,
    descricao:
      "Rabat - É uma cidade moderna 🌆 e cosmopolita, com uma bela orla marítima, parques e espaços culturais 🎭.",
  },
  {
    nome: "Oran",
    x: 260,
    y: 487,
    descricao: "Orã - É a segunda maior cidade da Argélia 📍.",
  },
  {
    nome: "Seville",
    x: 148,
    y: 446,
    descricao:
      "Sevilha - A Catedral de Sevilha foi registrada como Patrimônio Mundial da UNESCO 🌍.",
  },
  {
    nome: "Algiers",
    x: 336,
    y: 463,
    descricao:
      "Argel - É uma cidade com influências francesas e árabes, que apresenta arquitetura moderna e locais históricos 🏛️.",
  },
  {
    nome: "Constantine",
    x: 406,
    y: 471,
    descricao:
      "Constantina - A cidade foi invadida ⚔️ e governada por romanos, otomanos e franceses.",
  },
  {
    nome: "Naples",
    x: 563,
    y: 352,
    descricao:
      "Nápoles - Tem uma das paradas de metrô 🚉 mais bonitas da Europa.",
  },
  {
    nome: "Budapest",
    x: 661,
    y: 163,
    descricao: "Budapeste - O maior prédio da Hungria, O Parlamento Húngaro.",
  },
  {
    nome: "Barcelona",
    x: 317,
    y: 340,
    descricao:
      "Barcelona - Tem um dos maiores estádios do mundo, O Camp Nou 🏟️.",
  },
  {
    nome: "Prague",
    x: 571,
    y: 85,
    descricao:
      "Praga - O Orloj, o famoso relógio 🕰️ astronômico de Praga, foi instalado em 1410 e ainda funciona.",
  },
  {
    nome: "Donetsk",
    x: 1050,
    y: 151,
    descricao:
      "Donetsk - Coração industrial da União Soviética, especialmente na mineração de carvão e na siderurgia ⛏️.",
  },
  {
    nome: "Lisbon",
    x: 84,
    y: 410,
    descricao:
      "Lisboa - Segundo a lenda, Lisboa foi fundada pelo herói grego Ulisses 🏹 durante suas viagens narradas na Odisseia. O nome antigo da cidade, Olissipo, teria origem nessa história mitológica.",
  },
  {
    nome: "Valencia",
    x: 263,
    y: 389,
    descricao:
      "Valencia - O Cortes Valencianas, criado no século XIII 📜, foi um dos primeiros parlamentos da Europa.",
  },
  {
    nome: "Porto",
    x: 93,
    y: 347,
    descricao:
      "Porto - Teve um papel fundamental no movimento liberal de Portugal. ",
  },
  {
    nome: "Madrid",
    x: 197,
    y: 367,
    descricao:
      "Madrid - O Metrô de Madrid 🚉, inaugurado em 1919, foi o primeiro sistema de metrô da Espanha e um dos primeiros da Europa.",
  },
  {
    nome: "Bilbao",
    x: 212,
    y: 287,
    descricao: "Bilbao - O berço do nacionalismo basco 🚩.",
  },
  {
    nome: "Nantes",
    x: 239,
    y: 171,
    descricao:
      "Nantes - Está intimamente ligada ao oceano Atlântico, tanto geograficamente 🌍 quanto culturalmente.",
  },
  {
    nome: "Paris",
    x: 317,
    y: 122,
    descricao:
      "Paris -  O lema da cidade, 'Fluctuat nec mergitur' ⚖️, significa 'Balança, mas não afunda'.",
  },
  {
    nome: "Toulouse",
    x: 300,
    y: 277,
    descricao:
      "Toulouse - é chamada de La Ville Rose 🌸 ('Cidade Rosa') devido à cor dos tijolos 🧱 de terracota usados na construção de seus edifícios históricos.",
  },
  {
    nome: "Marseille",
    x: 385,
    y: 285,
    descricao: "Marselha - A cidade mais antiga da França.",
  },
  {
    nome: "Lyon",
    x: 372,
    y: 217,
    descricao: "Lyon - Capital da Resistência Francesa 🕊️.",
  },
  {
    nome: "Torino",
    x: 430,
    y: 237,
    descricao:
      "Torino - O Berço da FIAT 🚗 e da Indústria Automobilística Italiana 🏭.",
  },
  {
    nome: "Milan",
    x: 462,
    y: 225,
    descricao:
      "Milão - A cidade é um dos principais centros econômicos 💵 da Europa.",
  },
  {
    nome: "Brussels",
    x: 362,
    y: 57,
    descricao:
      "Bruxelas - Cerca de 30% da população de Bruxelas é estrangeira.",
  },
  {
    nome: "Cologne",
    x: 414,
    y: 57,
    descricao:
      "Colônia - A Catedral de Colônia ⛪ levou mais de 600 anos para ser concluída.",
  },
  {
    nome: "Munich",
    x: 511,
    y: 142,
    descricao: "Munique - É a terceira maior 🏆 cidade da Alemanha.",
  },
  {
    nome: "Fankfurt",
    x: 449,
    y: 82,
    descricao: "Fankfurt - O Coração Financeiro 📈 da Europa.",
  },
  {
    nome: "Zagreb",
    x: 603,
    y: 212,
    descricao: "Zagrebe - O Parque Maksimir, um dos mais antigos da Europa.",
  },
  {
    nome: "Vienna",
    x: 608,
    y: 142,
    descricao:
      "Vienna - O Café Vienense ☕ é Patrimônio Cultural Imaterial da Humanidade.",
  },
  {
    nome: "Belgrade",
    x: 690,
    y: 243,
    descricao: "Belgrade - Uma das cidades mais antigas da Europa.",
  },
  {
    nome: "Sofia",
    x: 749,
    y: 304,
    descricao:
      "Sofia - A Catedral Alexander Nevsky, um dos maiores símbolos de Sofia, é uma das maiores igrejas ortodoxas do mundo.",
  },
  {
    nome: "Lviv",
    x: 763,
    y: 90,
    descricao: "Lviv - Um centro cultural e intelectual 🎭.",
  },
  {
    nome: "Bucharest",
    x: 810,
    y: 257,
    descricao:
      "Bucarest - Já foi chamada de 'Paris do Leste' devido à sua arquitetura elegante 🏙️.",
  },
  {
    nome: "Zagreb",
    x: 603,
    y: 212,
    descricao: "Zagrebe - O Parque Maksimir, um dos mais antigos da Europa.",
  },
  {
    nome: "Odessa",
    x: 904,
    y: 193,
    descricao: "Odessa - Um dos maiores portos do Mar Negro 🚢.",
  },
  {
    nome: "Sevastopol",
    x: 961,
    y: 252,
    descricao: "Sevastopol - Um dos portos navais mais importantes ⚓.",
  },
  {
    nome: "Kyiv",
    x: 898,
    y: 73,
    descricao: "Kyiv - A cidade mais antiga da Ucrânia 🏛️.",
  },
];

const tooltip = document.getElementById("tooltip");

function mostrarTooltip(event) {
  const cidade = event.target.id;
  const local = locais.find((l) => l.nome === cidade);

  if (local) {
    tooltip.textContent = local.descricao;
    tooltip.style.display = "block";

    tooltip.style.left = event.pageX + 10 + "px";
    tooltip.style.top = event.pageY + 10 + "px";
  }
}

document.addEventListener("click", (event) => {
  if (!event.target.closest("#mapa-svg") && !event.target.closest("circle")) {
    tooltip.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("../img/map.svg")
    .then((response) => response.text())
    .then((svgContent) => {
      document.getElementById("map-container").innerHTML = svgContent;
      const svg = document.querySelector("svg");
      svg.setAttribute("id", "mapa-svg");

      locais.forEach((local) => {
        // Criar um novo círculo
        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        circle.setAttribute("cx", local.x);
        circle.setAttribute("cy", local.y);
        circle.setAttribute("r", "5");
        circle.setAttribute("id", local.nome);
        circle.setAttribute("fill", "#A34A28");
        circle.style.cursor = "pointer";

        // Adiciona o evento de clique
        circle.addEventListener("click", mostrarTooltip);

        // Adiciona o círculo ao SVG
        svg.appendChild(circle);
      });
    });
  //.catch((error) => console.error("Erro ao carregar o SVG:", error));
});
