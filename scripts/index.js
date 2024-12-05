class Section extends HTMLElement {
  constructor() {
    super();

    // Cria um Shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Pega os atributos definidos na tag HTML
    const imgSrc = this.getAttribute("img-src");
    const imgAlt = this.getAttribute("img-alt");
    const content = this.innerHTML; // Permite definir o conteúdo diretamente no HTML

    // Cria os elementos HTML
    const container = document.createElement("div");
    container.className = "section";

    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = imgAlt;

    const paragraph = document.createElement("p");
    paragraph.innerHTML = content;

    // Adiciona os elementos ao container
    container.appendChild(img);
    container.appendChild(paragraph);

    // Adiciona os estilos no Shadow DOM
    const style = document.createElement("style");
    style.textContent = `
    .section {
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        margin: 10px;
        padding: 20px;
        width: 300px;
        }
    .section img {
        width: 100%;
        border-radius: 8px;
        margin-bottom: 15px;
        }
    .section p {
        font-size: 14px;
        color: #555;
        text-align: justify;
        }
    .section .highlight {
        font-weight: bold;
        }
      `;

    // Adiciona os elementos ao Shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}

// Registra o custom element
customElements.define("custom-section", Section);
