// primero Seleccionar Botones

const botonRojo = document.getElementById("rojo");
const botonAzul = document.getElementById("azul");
const botonVerde = document.getElementById("verde");
const botonAmarillo = document.getElementById("amarillo");

// Paso 2: seleccionar resultado

const resultado = document.getElementById("resultado");

// Paso 3: crear función para cambiar color

function cambiarColor(color) { // esta función recibirá: rojo, azul, verde, amarillo
    // Paso 4: eliminar clases anteriores
    //EJR: antes de aplicar una clase hay que eliminar la anterior
    // Esto limpia el body
    document.body.classList.remove("rojo","azul","verde","amarillo");

    // Paso 5: añadir nueva clase
    document.body.classList.add(color);

    // Paso 6: limpiar resultado
    resultado.innerHTML = "";

    // Paso 7: crear mensaje
    let p = document.createElement("p");

    // Paso 8: poner texto
    p.textContent = "El fondo es de color " + color;

    // Paso 9: insertarlo en HTML
    resultado.appendChild(p); // ahora aparece en la página
}


// Paso 10: activar botones

botonAmarillo.onclick = function() {
    cambiarColor("rojo"); // cuando haga click --> llama a la función
}
botonAzul.onclick = function(){
    cambiarColor("azul");
};

botonVerde.onclick = function(){
    cambiarColor("verde");
};

botonAmarillo.onclick = function(){
    cambiarColor("amarillo");
};
