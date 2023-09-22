const FooterTemplate = document.createElement("template");
FooterTemplate.innerHTML = `
<link rel="stylesheet" type="text/css" href="index.css" />
<section class="footer">
    <h1 class="footer-text">Contactanos</h1>
    <h1 class="footer-text">© 2023 Sweet Dreams</h1>
  </section>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(FooterTemplate.content.cloneNode(true));
  }
}

customElements.define("footer-component", Footer);
