const propiedadesEnAlquiler = [
  {
    titulo: "Apartamento en el centro de la ciudad",
    texto:
      "Este apartamento tiene 7 habitaciones esta ubicado en el corazion de la ciudad, cerca de todo",
    src: "/assets/img/1900xxs (1).webp",
    Ubicacion: "Lo Fontecilla, Estoril, Las Condes, RM (Metropolitana)",
    Dormitorios: "7 Habitaciones",
    Baños: "4 baños",
    Precio: 6100000,
    metrosCuadrados: "180 M² totales",
    PermitidoFumar: false,
    PermitidoMascotas: true,
  },
  {
    titulo: "Apartamento luminoso con vistas al bosque",
    texto: "Hermoso apartamento con espectaculer vista el bosques verdes",
    src: "/assets/img/alquiler-casas-lujo-1655200950.jpg",
    Ubicacion: "Lo Fontecilla, Estoril, Las Condes, RM (Metropolitana)",
    Dormitorios: "5 Habitaciones",
    Baños: "4 baños",
    Precio: 2800000,
    metrosCuadrados: "200 M² totales",
    permitidoFumar: true,
    permitidoMascotas: false,
  },
  {
    titulo: "Moderno apartamento con vista espectaculares",
    texto: "Elegante apartamento con vistas espectaculares hacia el mar",
    src: "/assets/img/1900xxs.webp",
    Ubicacion: "123 Main Street, Anytoen, CA 91234",
    Dormitorios: "3 Habitaciones",
    Baños: "4 baños",
    Precio: 2100000,
    metrosCuadrados: "150 M² totales",
    permitidoFumar: true,
    permitidoMascotas: true,
  },
  {
    titulo: "Apartamento en el centro de la ciudad",
    texto:
      "Este apartamento tiene 7 habitaciones esta ubicado en el corazion de la ciudad, cerca de todo",
    src: "/assets/img/1900xxs (1).webp",
    Ubicacion: "Lo Fontecilla, Estoril, Las Condes, RM (Metropolitana)",
    Dormitorios: "7 Habitaciones",
    Baños: "4 baños",
    Precio: 6100000,
    metrosCuadrados: "180 M² totales",
    PermitidoFumar: false,
    PermitidoMascotas: true,
  },
  {
    titulo: "Apartamento luminoso con vistas al bosque",
    texto: "Hermoso apartamento con espectaculer vista el bosques verdes",
    src: "/assets/img/alquiler-casas-lujo-1655200950.jpg",
    Ubicacion: "Lo Fontecilla, Estoril, Las Condes, RM (Metropolitana)",
    Dormitorios: "5 Habitaciones",
    Baños: "4 baños",
    Precio: 2800000,
    metrosCuadrados: "200 M² totales",
    permitidoFumar: true,
    permitidoMascotas: false,
  },
  {
    titulo: "Moderno apartamento con vista espectaculares",
    texto: "Elegante apartamento con vistas espectaculares hacia el mar",
    src: "/assets/img/1900xxs.webp",
    Ubicacion: "123 Main Street, Anytoen, CA 91234",
    Dormitorios: "3 Habitaciones",
    Baños: "4 baños",
    Precio: 2100000,
    metrosCuadrados: "150 M² totales",
    permitidoFumar: true,
    permitidoMascotas: true,
  },
];

propiedadesEnAlquiler.forEach((propiedad) => {
  propiedad.Precio = propiedad.Precio.toLocaleString("es-CL");
});

export default propiedadesEnAlquiler;
