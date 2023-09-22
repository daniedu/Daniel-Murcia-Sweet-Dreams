const HeroTemplate = document.createElement("template");
HeroTemplate.innerHTML = `
<link rel="stylesheet" type="text/css" href="index.css" />
<section class="hero">
    <section class="hero-content">
      <div class="hero-hotel-image" src=" alt="Imagen de Hotel " />
      <div class="column">
        <h1 class="hero-welcome">Bienvenido a</h1>
        <h1 class="hero-welcome">Sweet Dreams</h1>
      </div>
    </section>
    <div class="hero-black-cover"></div>
  </section>
`;

class Hero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(HeroTemplate.content.cloneNode(true));
  }
}

customElements.define("hero-component", Hero);
