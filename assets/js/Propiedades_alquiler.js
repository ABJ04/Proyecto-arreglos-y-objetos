const propiedadesEnAlquiler = [
  {
    titulo: "Apartamento en el centro de la ciudad",
    texto:
      "Este apartamento tiene 7 habitaciones esta ubicado en el corazion de la ciudad, cerca de todo",
    src: "https://img.jamesedition.com/listing_images/2023/07/03/14/05/35/578759bd-81f6-46d6-acec-95587e4431d4/je/1900xxs.jpg",
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
    src: "https://hips.hearstapps.com/hmg-prod/images/alquiler-casas-lujo-1655200950.jpg?resize=1200:*",
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
    src: "https://img.jamesedition.com/listing_images/2022/07/06/11/28/11/a717f7b2-7092-4998-96aa-5ab6040e59fa/je/1900xxs.jpg",
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
    src: "https://img.jamesedition.com/listing_images/2023/07/03/14/05/35/578759bd-81f6-46d6-acec-95587e4431d4/je/1900xxs.jpg",
    Ubicacion: "Lo Fontecilla, Estoril, Las Condes, RM (Metropolitana)",
    Dormitorios: "7 Habitaciones",
    Baños: "4 baños",
    Precio: 6100000,
    metrosCuadrados: "180 M² totales",
    permitidoFumar: false,
    permitidoMascotas: true,
  },
  {
    titulo: "Apartamento luminoso con vistas al bosque",
    texto: "Hermoso apartamento con espectaculer vista el bosques verdes",
    src: "https://hips.hearstapps.com/hmg-prod/images/alquiler-casas-lujo-1655200950.jpg?resize=1200:*",
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
    src: "https://img.jamesedition.com/listing_images/2022/07/06/11/28/11/a717f7b2-7092-4998-96aa-5ab6040e59fa/je/1900xxs.jpg",
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
