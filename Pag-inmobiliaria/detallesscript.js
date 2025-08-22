// Obtener el id de la URL
const params = new URLSearchParams(window.location.search);
const idProp = params.get("id");

// Contenedor del detalle
const contenedor = document.getElementById("detalle");

// Cargar JSON y mostrar la propiedad
fetch("/Pag-inmobiliaria/Propiedades.json")
  .then(res => res.json())
  .then(data => {
    const propiedad = data.find(p => p.id == idProp);
    if (propiedad) {
      contenedor.innerHTML = `
        <h2>${propiedad.nombre}</h2>
        <img src="${propiedad.imagen}" alt="${propiedad.titulo}">
        <p>${propiedad.descripcion}</p>
        <p><strong>Ubicación:</strong> ${propiedad.ubicacion}</p>
        <p><strong>Precio:</strong> $${propiedad.precio}</p>
      `;
    } else {
      contenedor.innerHTML = "<p>No se encontró la propiedad.</p>";
    }
  })
  .catch(err => {
    console.error(err);
    contenedor.innerHTML = "<p>Error al cargar la información.</p>";
  });
