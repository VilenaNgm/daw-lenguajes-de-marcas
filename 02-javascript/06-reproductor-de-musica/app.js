const tituloCancion = document.querySelector('.reproductor-musica h1');
const nombreArtista = document.querySelector('.reproductor-musica p');

const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');

const inconoControl = document.getElementById('iconoControl');
const botonReproducirPausar = document.querySelector('.controles button.boton-reproducir-pausar');

const botonAtras = document.querySelector('.controles button.atras');
const botonAdelante = document.querySelector('.controles button.adelante');

/* ARRAYS */

const canciones = [
    {
        titulo: 'Another Kid & Pratzapp',
        nombre: 'Kyoto',
        fuente: 'music/Another Kid & Pratzapp - Kyoto (freetouse.com).mp3'
    },
    {
        titulo: 'Aylex',
        nombre: 'Snap Attack',
        fuente: 'music/Aylex - Snap Attack (freetouse.com).mp3'
    },
    {
        titulo: 'Chill Pulse',
        nombre: 'Jingle Bell Rock',
        fuente: 'music/Chill Pulse - Jingle Bell Rock (freetouse.com).mp3'
    },
    {
        titulo: 'Dagored',
        nombre: 'Happiness In My Soul',
        fuente: 'music/Dagored - Happiness In My Soul (freetouse.com).mp3'
    },
    {
        titulo: 'shandr',
        nombre: 'Fever',
        fuente: 'music/shandr - Fever (freetouse.com).mp3'
    },
];

let indiceCancionActual = 0;

/* FUNCIONES */

function actualizarInfoCancion() {
    tituloCancion.textContent = canciones[indiceCancionActual].titulo;
    nombreArtista.textContent = canciones[indiceCancionActual].nombre;
    cancion.src = canciones[indiceCancionActual].fuente;
    cancion.addEventListener('loadedmetadata', function() {});
};

botonReproducirPausar.addEventListener('click', reproducirPausar);

function reproducirPausar() {

    if(cancion.paused) {
        reproducirCancion();
    } else {
        pausarcancion();
    }
};

function reproducirCancion() {
    cancion.play();
    inconoControl.classList.add('bi-pause-fill');
    inconoControl.classList.remove('bi-play-fill');
};

function pausarcancion() {
    cancion.pause();
    inconoControl.classList.add('bi-play-fill');
    inconoControl.classList.remove('bi-pause-fill');
};

cancion.addEventListener('timeupdate', function(){
    if(!cancion.paused) {
        progreso.value = cancion.currentTime;
    };
});

progreso.addEventListener('input', function() {
    cancion.currentTime = progreso.value;
});

// progreso.addEventListener('change', () => {
//     reproducirCancion();
// });

botonAdelante.addEventListener('click', function() {
    indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
});

botonAtras.addEventListener('click', function() {
    indiceCancionActual = (indiceCancionActual - 1 + canciones.length) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
});

actualizarInfoCancion();