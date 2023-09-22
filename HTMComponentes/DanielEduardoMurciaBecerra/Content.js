const Eventos = `<div class="column">
<div id="eventos"></div>
<h1 class="centered-title">EVENTOS</h1>
<div class="underline"></div>
<section class="row">
  <p class="title-content-text eventos">
    Sweet Dreams es el lugar ideal para la realización de eventos
    especiales. Nuestras instalaciones incluyen salones de banquetes y
    salas de reuniones totalmente equipadas, con capacidad para albergar
    desde pequeñas reuniones de negocios hasta grandes eventos sociales.
    Nuestro dedicado equipo de eventos en Sweet Dreams se esfuerza por
    hacer que cada ocasión sea memorable y exitosa, cuidando cada detalle
    para que nuestros huéspedes tengan experiencias inolvidables.
  </p>
  <div class="eventos-image" src/>
</section>
<section class="row">
  <div class="tarjeta-evento">
    <img
      class="imagen-evento"
      src="./imagenes/evento-casamiento.jpg"
      alt="Evento Nombre"
    />
    <h3>Fecha del Evento: 20 de Diciembre, 2023</h3>
    <p>
      Descripción breve del evento. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </p>
    <a href="#" class="boton-saber-mas">Saber Más</a>
  </div>
  <div class="tarjeta-evento">
    <img
      class="imagen-evento"
      src="./imagenes/evento-carro.jpg"
      alt="Evento Nombre"
    />
    <h3>Fecha del Evento: 2 de Enero, 2023</h3>
    <p>
      Descripción breve del evento. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </p>
    <a href="#" class="boton-saber-mas">Saber Más</a>
  </div>
</section>
</div>`;

const Habitaciones = `<div class="column">
<div id="habitaciones"></div>
<h1 class="centered-title">HABITACIONES</h1>
<div class="underline"></div>
<section class="row">
  <div class="habitaciones-image" ></div>
  <p class="title-content-text habitaciones">
    En Sweet Dreams, te ofrecemos una amplia gama de habitaciones y suites
    de lujo, cuidadosamente diseñadas y equipadas con comodidades
    modernas. Cada una de nuestras habitaciones está meticulosamente
    decorada para proporcionar el máximo confort y relajación a nuestros
    huéspedes, con detalles de diseño y un nivel de atención al cliente
    inigualables.
  </p>
</section>
</div>`;

const Huespedes = `<div class="column">
<div id="huespedes"></div>
<h1 class="centered-title">HUESPEDES</h1>
<div class="underline"></div>
<section class="row">
  <p class="title-content-text huespedes">
    En Sweet Dreams, hemos tenido el honor de recibir a huéspedes de
    renombre de todo el mundo. Desde viajeros de negocios que buscan
    comodidad hasta celebridades en busca de privacidad, y familias que
    desean una experiencia de alojamiento excepcional, hemos acogido a
    todos con los brazos abiertos. Nuestra cadena de hoteles se
    enorgullece de su compromiso con la excelencia y la satisfacción del
    cliente, lo que ha llevado a que muchos de nuestros huéspedes regresen
    una y otra vez. En Sweet Dreams, creemos que el descanso de calidad y
    la hospitalidad excepcional son fundamentales para una estadía
    perfecta. Nuestra misión es superar las expectativas de nuestros
    huéspedes en cada visita, brindando servicios de clase mundial y
    creando recuerdos inolvidables.
  </p>
  <div class="huespedes-image" ></div>
</section>
</div>`;

const OfertasPlanes = `<div class="column">
<div id="ofertas-planes"></div>
<h1 class="centered-title">OFERTAS Y PLANES</h1>
<div class="underline"></div>
<section class="row">
  <p class="title-content-text ofertas-planes">
    Sweet Dreams se enorgullece de ofrecer a sus clientes una amplia
    variedad de ofertas y planes diseñados para satisfacer las necesidades
    de todo tipo de viajeros. Desde ofertas especiales para escapadas
    románticas hasta paquetes de negocios personalizados, la cadena de
    hoteles Sweet Dreams se esfuerza por brindar experiencias únicas a sus
    huéspedes. Además, Sweet Dreams ofrece tarifas especiales para
    estadías prolongadas y promociones estacionales para que los viajeros
    puedan disfrutar al máximo de su estancia.
  </p>
  <div class="offers-image" ></div>
</section>
</div>`;

const QuienesSomos = `<div class="column">
<div id="quienes-somos"></div>
<h1 class="centered-title">QUIENES SOMOS</h1>
<div class="underline"></div>
<section class="row">
  <div class="services-image" ></div>
  <p class="title-content-text quienes-somos">
    Sweet Dreams es una prestigiosa cadena de hoteles de 5 estrellas con
    una impresionante trayectoria de 25 años en la industria hotelera
    colombiana. Desde su inicio, Sweet Dreams se ha destacado por ofrecer
    a sus huéspedes experiencias de alojamiento excepcionales y servicios
    de alta calidad.
  </p>
</section>
</div>`;

const Restaurantes = `<div class="column">
<div id="restaurantes"></div>
<h1 class="centered-title">RESTAURANTE O GASTRONOMIA</h1>
<div class="underline"></div>
<section class="row">
  <div class="restaurante-image" ></div>
  <p class="title-content-text restaurante">
    En Sweet Dreams, nuestro restaurante ofrece una experiencia
    gastronómica excepcional. Nuestros huéspedes pueden disfrutar de una
    amplia variedad de platos gourmet preparados por chefs de renombre.
    Además, ofrecemos opciones de comida internacional y local para
    satisfacer todos los gustos. Ya sea que prefieras cenar en nuestro
    elegante restaurante o desees la comodidad de servicio a la
    habitación, estamos comprometidos a complacer tus papilas gustativas.
  </p>
</section>
</div>`;
const ContentTemplate = document.createElement("template");
ContentTemplate.innerHTML = `
<link rel="stylesheet" type="text/css" href="index.css" />
${QuienesSomos}
${OfertasPlanes}
${Habitaciones}
${Eventos}
${Restaurantes}
${Huespedes}
`;

class Content extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(ContentTemplate.content.cloneNode(true));
  }
}

customElements.define("content-component", Content);
