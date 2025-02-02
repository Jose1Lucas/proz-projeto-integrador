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
    descricao: "Considerado a sede da Liga Árabe 🏛️.",
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
