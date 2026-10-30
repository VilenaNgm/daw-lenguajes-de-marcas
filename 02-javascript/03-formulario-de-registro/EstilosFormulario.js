document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formulario");
    const mensajeError = document.getElementById("mensajeError");

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos").value;
        const correo = document.getElementById("correo").value;
        const poblacion = document.getElementById("poblacion").value;
        const condiciones = document.getElementById("condiciones").checked;

        const sexoH = document.getElementById("sexo-h").checked;
        const sexoM = document.getElementById("sexo-m").checked;

        if (nombre.trim() === "") {
            mensajeError.innerText = "El nombre no puede estar vacío.";
            return;
        }

        if (apellidos.trim() === "") {
            mensajeError.innerText = "Los apellidos no pueden estar vacíos.";
            return;
        }

        if (!sexoH && !sexoM) {
            mensajeError.innerText = "Debes seleccionar un sexo.";
            return;
        }

        if (correo.trim() === "") {
            mensajeError.innerText = "El correo no puede estar vacío.";
            return;
        }

        if (!validarEmail(correo)) {
            mensajeError.innerText = "El formato del correo no es válido.";
            return;
        }

        if (poblacion === "") {
            mensajeError.innerText = "Debes seleccionar una población.";
            return;
        }

        if (!condiciones) {
            mensajeError.innerText = "Debes aceptar las condiciones.";
            return;
        }

        mensajeError.innerText = "";
        formulario.submit();
    });

    function validarEmail(email) { const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
        return re.test(String(email).toLowerCase()); }

});
