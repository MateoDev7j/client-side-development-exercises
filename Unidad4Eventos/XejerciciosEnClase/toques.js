let caja = document.getElementById("caja");
var offsetX, offsetY; 
caja.addEventListener("touchstart",(e)=>{
    e.preventDefault();
    console.log("tocas el div");
    caja.style.backgroundColor="green";
    offsetX=e.touches[0].clientX - caja.offsetLeft;
    offsetY=e.touches[0].clientY - caja.offsetTop;
});
caja.addEventListener("touchend",(e)=>{
    e.preventDefault();
    console.log("levantas el dedo");
    caja.style.backgroundColor="blue";
});
caja.addEventListener("touchmove",(e)=>{
    let toque = e.touches[0];
    
    console.log("x= "+toque.clientX + " Y= " + toque.clientY);
    caja.style.top=toque.clientY-offsetY+"px";
    caja.style.left=toque.clientX-offsetX+"px";
});
/*window.addEventListener("touchmove",(e)=>{
    let toque = e.touches[0];
    console.log("x= "+toque.clientX + " Y= " + toque.clientY);
    caja.style.top=toque.clientY+"px";
    caja.style.left=toque.clientX+"px";
    caja.style.margin="0px";
    
});*/
var startX, startY;
let span = document.getElementById("detectarMovimiento");
let caja2 = document.getElementById("caja2");
caja2.addEventListener("touchstart",(e)=>{
    e.preventDefault();
    console.log("tocas el div");
    caja2.style.backgroundColor="green";
    startX=e.touches[0].clientX;
    startY=e.touches[0].clientY;
});
caja2.addEventListener("touchend",(e)=>{
    e.preventDefault();
    console.log("levantas el dedo");
    caja2.style.backgroundColor="blue";
    let endX=e.changedTouches[0].clientX;
    let endY=e.changedTouches[0].clientY;

    let diffX = endX - startX;
    let diffY = endY - startY;

    if(diffX >50){
        span.innerHTML= 'Derecha';
    }
    if(diffX < -50){
        span.innerHTML= 'Izquierda';
    }
    if(diffY > 50){
        span.innerHTML= 'Abajo';
    }
    if(diffY < -50){
        span.innerHTML= 'Arriba';
    }

});

//4. Pinch to Zoom (Multi-touch)
//Crea un contenedor con una imagen. Detecta cuando el usuario toca la pantalla 
//con dos dedos comprobando que e.touches.length === 2. Calcula la distancia entre 
//ambos puntos en tiempo real durante el evento touchmove. Si la distancia aumenta 
//respecto al toque inicial, aplica una propiedad CSS transform: scale() 
//para agrandar la imagen; si disminuye, redúcela.
const img = document.getElementById("foto");
let distInicial = 0;
let escalaActual = 1;

function distancia(t1, t2) {
    const dx = t1.clientX - t2.clientX;
    const dy = t1.clientY - t2.clientY;
    return Math.hypot(dx, dy);  // raíz de dx² + dy²
}

img.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) {
        e.preventDefault();
        distInicial = distancia(e.touches[0], e.touches[1]);
    }
});

img.addEventListener("touchmove", (e) => {
    if (e.touches.length === 2 && distInicial > 0) {
        e.preventDefault();
        const distActual = distancia(e.touches[0], e.touches[1]);
        escalaActual = distActual / distInicial;
        img.style.transform = `scale(${escalaActual})`;
    }
}, { passive: false });

img.addEventListener("touchend", () => {
    distInicial = 0;  
});

//Nivel Avanzado
//5. Toque Prolongado y Doble Toque (Gestos de tiempo)
//Crea un botón en pantalla que responda a interacciones basadas en tiempo:
//Doble Toque: Si lo tocas dos veces en menos de 300 milisegundos, cambia su forma a un círculo.
//Toque Prolongado (Long Press): Si mantienes el dedo presionado sobre él durante más de 1 segundo sin moverlo, haz que aparezca un menú contextual oculto.
//Pista: Deberás gestionar temporizadores usando setTimeout al inicio del toque y cancelarlos con clearTimeout en los eventos touchend o touchmove.
const botonPresionar = document.getElementById("botonPresionar");
const menuOculto = document.getElementById("menuOculto");
let timerLongPress = null;
let ultimoToque = 0;
const UMBRAL_DOBLE = 300;   // ms
const UMBRAL_LARGO = 1000;  // ms
let movido = false;

botonPresionar.addEventListener("touchstart", (e) => {
    e.preventDefault();
    movido = false;

    // Long press: programar
    timerLongPress = setTimeout(() => {
        if (!movido) {
            menuOculto.style.display = "block";
        }
    }, UMBRAL_LARGO);

    // Doble toque
    const ahora = Date.now();
    if (ahora - ultimoToque < UMBRAL_DOBLE) {
        botonPresionar.style.borderRadius = "50%";  
        ultimoToque = 0;                   
    } else {
        ultimoToque = ahora;
    }
});

botonPresionar.addEventListener("touchmove", () => {
    movido = true;
    clearTimeout(timerLongPress);  
});

botonPresionar.addEventListener("touchend", () => {
    clearTimeout(timerLongPress);
});


//6. Carrusel Magnético (Deslizamiento continuo)
//Crea una fila horizontal de tarjetas que desborde el ancho de la pantalla. 
// Usa touchstart y touchmove para mover el contenedor hacia los lados 
// siguiendo el dedo del usuario. Al soltar (touchend), calcula la posición 
// actual y aplica una transición CSS para que la tarjeta más cercana se 
// deslice automáticamente hasta el centro de la pantalla (efecto snap), 
// imitando el comportamiento nativo de las galerías móviles.
const carrusel = document.getElementById("carrusel");
const tarjetas = [...carrusel.children];
let startX = 0;
let translateInicial = 0;
let translateActual = 0;
const ANCHO_TARJETA = 220; 
const ANCHO_PANTALLA = window.innerWidth;

function aplicarTranslate(x) {
    translateActual = x;
    carrusel.style.transform = `translateX(${x}px)`;
}

carrusel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    translateInicial = translateActual;
    carrusel.style.transition = "none";  
});

carrusel.addEventListener("touchmove", (e) => {
    const dx = e.touches[0].clientX - startX;
    aplicarTranslate(translateInicial + dx);
}, { passive: true });

carrusel.addEventListener("touchend", (e) => {
    
    const centroPantalla = ANCHO_PANTALLA / 2;
    let mejor = 0;
    let mejorDist = Infinity;
    tarjetas.forEach((t, i) => {
        
        const centroTarjeta = t.offsetLeft + t.offsetWidth / 2 + translateActual;
        const d = Math.abs(centroTarjeta - centroPantalla);
        if (d < mejorDist) { mejorDist = d; mejor = i; }
    });

    
    const target = -tarjetas[mejor].offsetLeft + centroPantalla - tarjetas[mejor].offsetWidth / 2;

    carrusel.style.transition = "transform 0.3s ease-out";
    aplicarTranslate(target);
});



//7. Zonas de Caída (Touch Drag & Drop)
//Dibuja un círculo arrastrable y dos "cajas" vacías en diferentes partes de la pantalla. Arrastra el círculo con touchmove. El reto principal ocurre en el touchend: a diferencia del ratón, los eventos de toque no detectan por defecto sobre qué elemento estás soltando el dedo.
//Pista: Deberás usar el método document.elementFromPoint(x, y) pasándole las coordenadas del toque final para detectar si debajo hay una caja en ese instante exacto, y si es así, acoplar el círculo en su interior.






/******************************************************/
window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;
  // Do stuff...
}
function onClick() {
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    // Handle iOS 13+ devices.
    DeviceMotionEvent.requestPermission()
      .then((state) => {
        if (state === 'granted') {
          window.addEventListener('devicemotion', handleOrientation);
        } else {
          console.error('Request to access the orientation was rejected');
        }
      })
      .catch(console.error);
  } else {
    // Handle regular non iOS 13+ devices.
    window.addEventListener('devicemotion', handleOrientation);
  }
}
function mostrarOrientacion(){
    document.getElementById("contenedor-orientacion").innerHTML= e.alpha + " - " + e.beta;
}
