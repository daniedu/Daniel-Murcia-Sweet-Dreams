const NavigationTemplate = document.createElement("template");
NavigationTemplate.innerHTML = `
<link rel="stylesheet" type="text/css" href="index.css" />
<div class="hamburger-menu">
      <div class="fixed-topbar">
        <img src="./imagenes/RecortedLogo.jpg" class="logo" />
        <div class="row">
          <div class="line">|</div>
          <a class="menu__item" onclick="scrollToY(440); return false;" href="#">Quienes Somos</a>
          <div class="line">|</div>
          <a class="menu__item"  onclick="scrollToY(1040); return false;" href="#">Ofertas y Planes</a>
          <div class="line">|</div>
          <a class="menu__item"  onclick="scrollToY(1800); return false;" href="#">Habitaciones</a>
          <div class="line">|</div>
          <a class="menu__item"  onclick="scrollToY(2400); return false;" href="#">Eventos</a>
          <div class="line">|</div>
          <a class="menu__item"  onclick="scrollToY(3600); return false;" href="#">Restaurantes</a>
          <div class="line">|</div>
          <a class="menu__item"  onclick="scrollToY(4300); return false;" href="#">huespedes</a>
          <div class="line">|</div>
        </div>
      </div>
    </div>

`;

class Navigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(NavigationTemplate.content.cloneNode(true));
  }
}

customElements.define("navigation-component", Navigation);
