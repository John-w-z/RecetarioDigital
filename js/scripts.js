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
