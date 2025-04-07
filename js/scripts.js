document.addEventListener("DOMContentLoaded", () => {
    console.log("Recetario Digital cargado");

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Previene el envío real del formulario

        // Validación simple
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !email || !mensaje) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Si la validación es correcta, muestra un mensaje de éxito:
        alert("¡Gracias por tu mensaje!");
        console.log("Formulario enviado:", { nombre, email, mensaje });

        // Opcional: Puedes limpiar el formulario después de enviarlo
        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
    });
});

//

const recetas = [
    {
        titulo: "Receta Ejemplo 1",
        descripcion: "Descripción breve de la receta 1.",
        enlace: "#"
    },
    {
        titulo: "Receta Ejemplo 2",
        descripcion: "Descripción breve de la receta 2.",
        enlace: "#"
    }
    // Agrega más recetas según necesites
];

const recetasContainer = document.querySelector("#recetas .row");
if (recetasContainer) {
    recetas.forEach(receta => {
        const col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `
        <div class="card mb-4 shadow-sm">
          <div class="card-body">
            <h3 class="card-title">${receta.titulo}</h3>
            <p class="card-text">${receta.descripcion}</p>
            <a href="${receta.enlace}" class="btn btn-primary">Ver detalle</a>
          </div>
        </div>
      `;
        recetasContainer.appendChild(col);
    });
}
