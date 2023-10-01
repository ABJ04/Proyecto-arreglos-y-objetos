const propiedadesEnVenta = [
  {
    titulo: "Apartamento de lujo en zona exclusiva",
    texto:
      "Este apartamento de julo esta ubicado en una exclusiva zona residencial ",
    src: "https://hips.hearstapps.com/hmg-prod/images/alquiler-casas-lujo-1655200950.jpg?resize=1200:*",
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
    src: "https://img.jamesedition.com/listing_images/2022/07/06/11/28/11/a717f7b2-7092-4998-96aa-5ab6040e59fa/je/1900xxs.jpg",
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
    src: "https://img.jamesedition.com/listing_images/2023/07/03/14/05/35/578759bd-81f6-46d6-acec-95587e4431d4/je/1900xxs.jpg",
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
    src: "https://hips.hearstapps.com/hmg-prod/images/alquiler-casas-lujo-1655200950.jpg?resize=1200:*",
    Ubicacion: "123 luxury lane, prestige suburb, CA 45678",
    Dormitorios: "4 Habitaciones",
    Baños: "4 Baños",
    Precio: 192303694,
    metrosCuadrados: "250 M² totales",
    permitidoFumar: false,
    permitidoMascotas: false,
  },
  {
    titulo: "Apartamento acogedor en la montaña",
    texto:
      " Este apartamento ecogedor esta situado en lo alto de una montala con imprecionantes vistas",
    src: "https://img.jamesedition.com/listing_images/2022/07/06/11/28/11/a717f7b2-7092-4998-96aa-5ab6040e59fa/je/1900xxs.jpg",
    Ubicacion: "789 Mountain Road, Summit peaks, CA 23456",
    Dormitorios: "4 Habitaciones",
    Baños: "5 Baños",
    Precio: 92303694,
    metrosCuadrados: "280 M² totales",
    permitidoFumar: false,
    permitidoMascotas: true,
  },
  {
    titulo: "Penthouse de lujo con terraza panoramica",
    texto:
      " Este penthouse de lujo ofrese una terraza panoramica con vistas espectaculares",
    src: "https://img.jamesedition.com/listing_images/2023/07/03/14/05/35/578759bd-81f6-46d6-acec-95587e4431d4/je/1900xxs.jpg",
    Ubicacion: "567 Skylene Avenue, Skyview City, CA 56789",
    Dormitorios: "7 Habitaciones",
    Baños: "7 Baños",
    Precio: 650003694,
    metrosCuadrados: "480 M² totales",
    permitidoFumar: false,
    permitidoMascotas: true,
  },
];

propiedadesEnVenta.forEach((propiedad) => {
  propiedad.Precio = propiedad.Precio.toLocaleString("es-CL");
});

export default propiedadesEnVenta;
