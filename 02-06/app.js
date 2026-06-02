async function obtenerPersonajes() {
  "https://rickandmortyapi.com/api/character/20"
}

obtenerPersonajes();
const url =
  "https://rickandmortyapi.com/api/character/1",

const headers = {
  "Content-Type": "application/json",
};

async function obtenerPersonajes() {
    "https://rickandmortyapi.com/api/location/20"

  try {

    console.log("Consultando API...");

    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    const data = await response.json();

    console.log("Respuesta de la API:");
    console.log(data);

    console.table(data);

  } catch (error) {

    console.log("Error:");
    console.log(error);

  }
}

obtenerEstudiantes();