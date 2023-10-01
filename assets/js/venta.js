import propiedadesEnVenta from "./propiedades_venta.js";

const crearCarta = (Propiedades, venta) => {
  const section = document.getElementById(venta);

  const propiedadesVenta = Propiedades.slice(0, 7);

  propiedadesVenta.forEach((Propiedades) => {
    const {
      src,
      titulo,
      texto,
      Ubicacion,
      Dormitorios,
      Baños,
      Precio,
      metrosCuadrados,
      permitidoFumar,
      permitidoMascotas,
    } = Propiedades;

    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");
    card.innerHTML = `
    <div class="card">
     <div class="card-img">
            <img src="${src}" alt="Imagen propiedad 1" />
          </div>
          <div>
            <h2 class="card-titulo">${titulo}</h2>
            <p class="card-texto">${texto}</p>
            <p>
              <i
                class="fa-solid fa-location-dot icono-ubicacion"
                style="color: #000000"
              ></i
              >${Ubicacion}
            </p>
            <section class="descripcion-detalle">
              <p>
                <i
                  class="fa-solid fa-bed icono-dormitorio"
                  style="color: #000000"
                ></i
                >${Dormitorios} <small>|</small>
              </p>
              <p>
                <i
                  class="fa-solid fa-kaaba icono-metrosCuadrados"
                  style="color: #000000"
                ></i
                >${metrosCuadrados} <small>|</small>
              </p>
              <p>
                <i
                  class="fa-solid fa-bath icono-baño"
                  style="color: #000000"
                ></i
                >${Baños}
              </p>
            </section>

            <p class="icono-precio">$ ${Precio}</p>
            
            <p class="${permitidoFumar ? "text-success " : "text-danger"}">  
            <i class="fas ${
              permitidoFumar ? "fa-solid fa-smoking " : "fa-solid fa-ban"
            }" style="margin-left: 10px;"></i>
            ${permitidoFumar ? "Permitido fumar " : "No se permite fumar"}
          </p>
          
          <p class="${permitidoMascotas ? "text-success" : "text-danger"}">
            <i class="fas ${
              permitidoMascotas ? "fa-solid fa-cat" : "fa-solid fa-ban"
            }" style="margin-left: 10px;"></i>
            ${
              permitidoMascotas
                ? "Se permiten mascotas"
                : "No se permiten mascotas"
            }
          </p>
          
          </div> 
    </div>
    `;
    section.appendChild(card);
  });
};

const init = () => {
  crearCarta(propiedadesEnVenta, "ventaid");
};

window.addEventListener("load", init);
