class oCopo //DEFINE CÓMO Y QUÉ PUEDE HACER
// Cada copo tiene:
// una posición (x, y)
// un tamaño
// un identificador
// un elemento HTML asociado
{ constructor(tam, id){ // el constructor se ejecuta cada vez que se crea un copo nuevo
this.x = 0; // posición horizontal - se inicia en 0, pero luego se cambia
this.y = 0; // posición vertical
this.size = tam; // tamaño del copo (en píxeles)
this.nombre = id // identificador único
this.obj = document.createElement("div"); // aquí se crea un nuevo elemento HTLM <div>
this.obj.setAttribute('id',id); this.obj.innerText="*";  // el copo se representa con carácter * (en este caso)
this.obj.style.position = "absolute"; // permite colocar el elemento en cualquier punto de la pantalla   usando top y left
this.obj.style.fontSize = tam+"px"; // tamaño proporcional al copo
this.obj.style.color = "white"; // color blanco
document.body.appendChild(this.obj) // aquí el copo pasa a formar parte de HTML y se muestra en la página
} 


dibujar(x,y){ // aquí inicializamos un método, este método mueve el copo
this.x = x; // actualizamos las coordenadas horizontal
this.y = y; // actualizamos las coordenadas vertical
this.obj.style.top = this.y+"px"; // top - distancia desde arriba
this.obj.style.left = this.x+"px"; // left - distancia de la izquierda
}
}

function iniCopos(num, anc, alto){ // esta función crea todos los copos iniciales
var copos = new Array(num); // crea un array que almacenará los copos
var tam, x, y;
for (let i = 0; i<num; i++) // se repite tantas veces como copos queremos
{
tam = Math.round(Math.random()*10)+ 8; // genera un tamaño aleatorio entre 8-18 px
copos[i] = new oCopo(tam, "c"+i); // crea un nuevo copo y lo guarda en el array
x = parseInt(Math.random()*anc); // posición inicial aleatoria…
y = parseInt(Math.random()*alto); //…dentro del tamaño visible de la pantalla
copos[i].dibujar(x,y);  // coloca el copo en su posición inicial
}
return copos; // devuelve el array con todos los copos creados
}


function iniNevada(num, vel) // se ejecuta al cargar la página
{
var ancho = document.body.offsetWidth-10; // obtiene el ancho del ducumento
var alto = window.innerHeight-10; // obtiene la altura visible de la ventana
var losCopos = iniCopos(num, ancho, alto) // crea copos
nevar(losCopos, ancho,alto, vel); // inicia la animación
}
function nevar(copos, coposAncho, coposAlto, vel) // esta función hace que caigan continuamente.
{
var x, y;
for (let i = 0; i < copos.length; i++) // recorre todos los copos
{
y = copos[i].y; // obtiene su posición actual, horizontal
x = copos[i].x; // obtiene su posición actual, vertical
if (Math.random() > 0.5) // movimiento vertical, simula caída irregular, cada copo baja distinto
y += parseInt(Math.random()+1); 
y += parseInt(Math.random()+2);
if (y >= (coposAlto - copos[i].size)) // cuando llega al final de la pantalla
{ 
y = Math.round(Math.random()*10); // vuelve arriba y cambia de posición horizontal
x  =parseInt(Math.random()*coposAncho-1);
}
copos[i].dibujar(x,y); // redibuja el copo en su nueva posición
}
setTimeout(nevar, vel, copos, coposAncho, coposAlto, vel);
 //→ // llama de nuevo a la función
 //→ // vel controla la velocidad
 //→ // produce el efecto de animación


 }
