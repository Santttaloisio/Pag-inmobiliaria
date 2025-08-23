// Obtener el id de la URL
const params = new URLSearchParams(window.location.search);
const idProp = params.get("id");

// Contenedor del detalle
const contenedor = document.getElementById("detalle");

// Cargar JSON y mostrar la propiedad
fetch("/Pag-inmobiliaria/Propiedades.json")
  .then(res => {
    if (!res.ok) throw new Error("No se pudo cargar el archivo JSON");
    return res.json();
  })
  .then(data => {
    if (!Array.isArray(data)) throw new Error("El formato de datos no es válido");
    const propiedad = data.find(p => String(p.id) === String(idProp));
    if (propiedad) {
      contenedor.innerHTML = `
        <h2>${propiedad.nombre || "Sin nombre"}</h2>
        <img src="${propiedad.imagen || "#"}" alt="${propiedad.titulo || propiedad.nombre || ""}">
        <p>${propiedad.descripcion || "Sin descripción"}</p>
        <p><strong>Ubicación:</strong> ${propiedad.ubicacion || "No especificada"}</p>
        <p><strong>Precio:</strong> $${propiedad.precio || "No disponible"}</p>
      `;
    } else {
      contenedor.innerHTML = "<p>No se encontró la propiedad.</p>";
    }
  })
  .catch(err => {
    console.error(err);
    contenedor.innerHTML = "<p>Error al cargar la información.</p>";
  });
