module.exports = {
    mascotas: [
      { tipo: "perro", nombre: "BURRO", dueno: "Chuy" },
      { tipo: "perro", nombre: "BurrOO", dueno: "Chuya" },
      { tipo: "perro", nombre: "BurrooO", dueno: "Chuy" },
      { tipo: "perro", nombre: "BurroO", dueno: "Chuya" },
      { tipo: "perro", nombre: "Burro", dueno: "Chuy" },
    ],

    veterinarias: [
      { nombre: "Sergio", apellido: "Manicllas", documento: "666" },
      { nombre: "Francisco", apellido: "Mancillas", documento: "616" },
      { nombre: "Carlos", apellido: "Mancillas", documento: "696" },
      { nombre: "Oribe", apellido: "Peralta", documento: "6969" },
    ],

    duenos: [
      { nombre: "Javier", apellido: "Hernandez", documento: "14" },
      { nombre: "Cristiano", apellido: "Ronaldo", documento: "07" },
      { nombre: "El bicho", apellido: "Madre mia", documento: "9" },
      { nombre: "CR7", apellido: "AY MI MADRE", documento: "7" },
    ],

    consultas: [
      {
        mascota: 0,
        veterinaria: 0,
        fechaCreacion: new Date(),
        fechaEdicion: new Date(),
        historia: "",
        diagnostico: "",
      },
    ],
  };