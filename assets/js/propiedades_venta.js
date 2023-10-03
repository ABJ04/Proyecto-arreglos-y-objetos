const propiedadesEnVenta = [
  {
    titulo: "Apartamento de lujo en zona exclusiva",
    texto:
      "Este apartamento de julo esta ubicado en una exclusiva zona residencial ",
    src: "/assets/img/alquiler-casas-lujo-1655200950.jpg",
    Ubicacion: "123 luxury lane, prestige suburb, CA 45678",
    Dormitorios: "4 Habitaciones",
    Baños: "4 Baños",
    Precio: 192303694,
    metrosCuadrados: "250 M² totales",
    permitidoFumar: false,
    permitidoMascotas: true,
  },
  {
    titulo: "Apartamento acogedor en la montaña",
    texto:
      " Este apartamento ecogedor esta situado en lo alto de una montala con imprecionantes vistas",
    src: "/assets/img/1900xxs.webp",
    Ubicacion: "789 Mountain Road, Summit peaks, CA 23456",
    Dormitorios: "4 Habitaciones",
    Baños: "5 Baños",
    Precio: 92303694,
    metrosCuadrados: "280 M² totales",
    permitidoFumar: true,
    permitidoMascotas: true,
  },
  {
    titulo: "Penthouse de lujo con terraza panoramica",
    texto:
      " Este penthouse de lujo ofrese una terraza panoramica con vistas espectaculares",
    src: "/assets/img/1900xxs (1).webp",
    Ubicacion: "567 Skylene Avenue, Skyview City, CA 56789",
    Dormitorios: "7 Habitaciones",
    Baños: "7 Baños",
    Precio: 650003694,
    metrosCuadrados: "480 M² totales",
    permitidoFumar: true,
    permitidoMascotas: false,
  },
  {
    titulo: "Apartamento de lujo en zona exclusiva",
    texto:
      "Este apartamento de julo esta ubicado en una exclusiva zona residencial ",
    src: "assets/img/alquiler-casas-lujo-1655200950.jpg",
    Ubicacion: "123 luxury lane, prestige suburb, CA 45678",
    Dormitorios: "4 Habitaciones",
    Baños: "4 Baños",
    Precio: 192303694,
    metrosCuadrados: "250 M² totales",
    permitidoFumar: false,
    permitidoMascotas: true,
  },
  {
    titulo: "Apartamento acogedor en la montaña",
    texto:
      " Este apartamento ecogedor esta situado en lo alto de una montala con imprecionantes vistas",
    src: "/assets/img/1900xxs.webp",
    Ubicacion: "789 Mountain Road, Summit peaks, CA 23456",
    Dormitorios: "4 Habitaciones",
    Baños: "5 Baños",
    Precio: 92303694,
    metrosCuadrados: "280 M² totales",
    permitidoFumar: true,
    permitidoMascotas: true,
  },
  {
    titulo: "Penthouse de lujo con terraza panoramica",
    texto:
      " Este penthouse de lujo ofrese una terraza panoramica con vistas espectaculares",
    src: "/assets/img/1900xxs (1).webp",
    Ubicacion: "567 Skylene Avenue, Skyview City, CA 56789",
    Dormitorios: "7 Habitaciones",
    Baños: "7 Baños",
    Precio: 650003694,
    metrosCuadrados: "480 M² totales",
    permitidoFumar: true,
    permitidoMascotas: false,
  },
];

propiedadesEnVenta.forEach((propiedad) => {
  propiedad.Precio = propiedad.Precio.toLocaleString("es-CL");
});

export default propiedadesEnVenta;
