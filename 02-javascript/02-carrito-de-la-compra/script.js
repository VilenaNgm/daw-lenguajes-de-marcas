// 1. Primero
// Se crea un array de tres productos (en los apuntes)
// const productos - es uan constante llamada productos
// [] define el array (una lista)
// {} cada producto es un objeto
// Hay que mostrar de cada producto:
//  Nombre, Descripción, nº de unidades, €/unidad, Subtotal (ud*€)

const productos = [
{ nombre: "Teclado", descripcion: "Teclado mecánico", unidades: 2, precio:
50 },
{ nombre: "Ratón", descripcion: "Ratón inalámbrico", unidades: 1, precio:
25 },
{ nombre: "Monitor", descripcion: "Monitor 24 pulgadas", unidades: 1,
precio: 180 }
];

// 2. Segundo
// Ahora hay que buscar el DIV del HTML con id="productos"
// Lo guardo en una variable para poder usarlo
// document - representa la página HTML
// getElemenById("productos") - busca el elemento que tenga ese id
// una vez encontrado lo guardamos en la variable contenedorProductos

const contenedorProductos = document.getElementById("productos");

// 3. Tercero
// Hay que recorrer el Array y creamos los productos
// Se recorre el array del producto usando forEach

productos.forEach(function(producto) {

    // ahora, se crea un DIV para cada producto
    const divProducto = document.createElement("div");

    // se calcula el subtotal (ud*€)
    const subtotal = producto.unidades * producto.precio;

    // se crea el contenido HTML dentro del DIV 
    // IMPORTANTE hay que añadir ` antes y despues`
    // sirve para texto con variables y varias líneas
    // ${} - para meter variables dentro del texto (template string)
    // asi se usa comillas invertidas `para poder usarr ${}
    // <hr> - Horizontal Rule - es una etiqueta HTML que dibuja una línea separadora automáticamente.
    divProducto.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Descripción: ${producto.descripcion}</p>
        <p>Unidades: ${producto.unidades}</p>
        <p>Precio por unidad: ${producto.precio}€</p>
        <p>Subtotal: ${subtotal}€</p>
        <hr> 
`;
        // se añade el DIV del producto dentro del contenedor principal
        contenedorProductos.appendChild(divProducto);
        });

// 4. Cuarto
// se crea una función que recibe el array productos
function calcularTotal (productos) {

    // variable para guardar el total sin IVa
    let totalSinIVA = 0;

    // recorrer el array
    productos.forEach(function(producto) {

        // suma de cada subtotal (ud*€)
        totalSinIVA += producto.unidades * producto.precio;
    });

    // calcular el IVA (21%)
    const iva = totalSinIVA * 0.21;

    // calcular el total con IVA
    const totalConIVA = totalSinIVA + iva;

    // Devolvemos el total final, sin y con
    return {
        sinIVA: totalSinIVA,
        iva: iva,
        conIVA: totalConIVA
    };

}

// 5. Quinto
// Hay que mostrar el total en la página

// hay que llaar a la función y guardamos el resultado
    const totalFinal = calcularTotal(productos);

    // buscar el div del total
    const divTotal = document.getElementById("total");

    // se muestrta el resultado final en el HTML
    //.toFixed(2) - me muestra solo dos decimales 
    divTotal.innerHTML = `
    <h2>Total sin IVA: ${totalFinal.sinIVA}€<h2>
    <h3>IVA (21%): ${totalFinal.iva.toFixed(2)}€</h3> 
    <h2>Total con IVA: ${totalFinal.conIVA.toFixed(2)}€</h2>
    `;