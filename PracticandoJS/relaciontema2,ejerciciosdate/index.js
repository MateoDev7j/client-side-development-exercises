//Nivel 1 – Creación y lectura de fechas
//Fecha actual
//Crea un objeto Date que represente la fecha y hora actual.
let fechaActual = new Date();
console.log(fechaActual);
//Fecha específica
//Crea un objeto Date con tu fecha de nacimiento (año, mes, día).
let fechaNacimiento = new Date(2006, 4, 9);
console.log(fechaNacimiento);
//Obtener partes de una fecha
//Dado un objeto Date, muestra:

//Año (getFullYear)
console.log(fechaNacimiento.getFullYear());
//Mes (getMonth)
console.log(fechaNacimiento.getMonth());
//Día (getDate)
console.log(fechaNacimiento.getDate());
//Día de la semana (getDay)
console.log(fechaNacimiento.getDay());
//Hora, minutos y segundos (getHours, getMinutes, getSeconds)
console.log(fechaNacimiento.getHours());
console.log(fechaNacimiento.getMinutes());
console.log(fechaNacimiento.getSeconds());
//Convertir a string
//Muestra la fecha actual en formato legible usando .toDateString() y .toTimeString().
console.log(fechaActual.toDateString());
console.log(fechaActual.toTimeString());
//Nivel 2 – Operaciones con fechas
//Sumar días
//Escribe una función que reciba una fecha y un número de días, y devuelva la nueva fecha resultante.
function fechaAdd(fecha, dias){
    fecha.setDate(fecha.getDate()+dias);
    return fecha;
}
console.log(fechaActual.toDateString());
fechaAdd(fechaActual, 5);
console.log(fechaActual.toDateString());
//Diferencia entre dos fechas
//Calcula cuántos días faltan desde hoy hasta el próximo 31 de diciembre.
let fechaCalcular = new Date(2026, 11, 31);
let diferencia = fechaCalcular-fechaActual;
console.log("la diferencia en milisegundos es "+diferencia);
let calcularMilisegundos= 24 * 60 * 60 * 1000;
let diasQueFaltan= Math.ceil(diferencia/calcularMilisegundos);
console.log("Faltan: "+diasQueFaltan);
//Comparar fechas
//Dadas dos fechas, determina cuál es anterior y cuál posterior.
if(fechaActual.getFullYear()==fechaCalcular.getFullYear()){
    if(fechaActual.getMonth()==fechaCalcular.getMonth()){
        if(fechaActual.getDate()>fechaCalcular.getDate()){
            console.log("fecha Actual es mayor");
        }
        else{
            console.log("Fecha post es mayor");
        }
    }
    else if(fechaActual.getMonth()>fechaCalcular.getMonth()){
        console.log("fecha Actual es mayor");
    }
    else{
        console.log("Fecha post es mayor");
    }
}
else if(fechaActual.getFullYear()>fechaCalcular.getFullYear()){
    console.log("fecha Actual es mayor");
}
else{
    console.log("Fecha post es mayor");
}
//Primer día del mes
//Crea una función que, dado un año y un mes, devuelva qué día de la semana fue el primer día de ese mes.
function devolverPrimerDia(año, mes){
    let nuevaFecha = new Date(año, mes, 1);
    let cadenaFecha = nuevaFecha.toDateString();
    return cadenaFecha;;
}
console.log(devolverPrimerDia(2006,6));
//Nivel 3 – Formateo y zonas horarias
//ISO string
//Convierte la fecha actual a formato ISO (.toISOString()).
console.log(fechaActual.toISOString());
//Fecha local y UTC
//Muestra la misma fecha en hora local y en UTC.
console.log(fechaActual.toUTCString());
//Formateo personalizado
//Escribe una función que reciba un objeto Date y devuelva un string con el formato:
//DD/MM/YYYY HH:mm:ss
function changeFormat(fecha){
    fecha = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), fecha.getHours(), fecha.getMinutes(), fecha.getSeconds()));
    return fecha;
}
console.log(changeFormat(fechaActual));
//Internacionalización
//Usa Intl.DateTimeFormat para mostrar la fecha actual en:

//Español (España)
console.log(new Intl.DateTimeFormat("es-ES").format(fechaActual));
//Inglés (EE.UU.)
console.log(new Intl.DateTimeFormat("en-US").format(fechaActual));
//Japonés
console.log(new Intl.DateTimeFormat(('ja-JP')).format(fechaActual));
//Nivel 4 – Retos aplicados
//Cuenta atrás
//Crea un programa que muestre en consola los días, horas, minutos y segundos que faltan para Año Nuevo.
function cuentaAtrasAñoNuevo() {
    const ahora = new Date();
    const añoProximo = ahora.getFullYear() + 1;
    const añoNuevo = new Date(`January 1, ${añoProximo} 00:00:00`);
    
    // Diferencia en milisegundos
    const diferencia = añoNuevo - ahora;

    // Conversiones matemáticas
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    console.log(`Faltan: ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos.`);
}
// function hola(){
//console.log("Hola")
//}
//setTimeout(hola, 5000);
//setInterval(hola, 5000);
/*MUESTRA HORA
function mostrarHora() {
    let horaActual= new Date();
    console.log(horaActual.toLocaleTimeString());

    document.getElementById("hora").innerHTML = horaActual.getHours();
    document.getElementById("minutos").innerHTML = horaActual.getMinutes();
    document.getElementById("segundos").innerHTML = horaActual.getSeconds();
}
setInterval(mostrarHora, 1000);
*****************
EN EL HTLM
*******************
<div id="hora"></div>
<div id="minutos"></div>
<div id="segundos"></div>
*/
// Ejecución
cuentaAtrasAñoNuevo();
//Edad exacta
//Escribe una función que reciba una fecha de nacimiento y calcule la edad exacta en años, meses y días.
function calcularEdadExacta(fechaNacimientoStr) {
    const nacimiento = new Date(fechaNacimientoStr);
    const hoy = new Date();

    let años = hoy.getFullYear() - nacimiento.getFullYear();
    let meses = hoy.getMonth() - nacimiento.getMonth();
    let dias = hoy.getDate() - nacimiento.getDate();

    // Ajuste si los días son negativos
    if (dias < 0) {
        // Obtenemos el último día del mes anterior
        const mesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
        dias += mesAnterior.getDate();
        meses--;
    }

    // Ajuste si los meses son negativos
    if (meses < 0) {
        meses += 12;
        años--;
    }

    return { años, meses, dias };
}

// Ejemplo de uso (Formato: AAAA-MM-DD)
console.log(calcularEdadExacta("1995-10-15"));

//Calendario simple
//Genera un array con todas las fechas de un mes específico (ej. septiembre 2025).
function generarCalendario(mes, año) {
    // Nota: En JavaScript los meses van de 0 (enero) a 11 (diciembre)
    // Si pasas septiembre como 9, restamos 1 para que sea indexado en 0 (8)
    const mesIndex = mes - 1; 
    const fechas = [];
    let fecha = new Date(año, mesIndex, 1);

    while (fecha.getMonth() === mesIndex) {
        // Guardamos una copia en formato texto legible
        fechas.push(fecha.toISOString().split('T')[0]);
        // Avanzamos al siguiente día
        fecha.setDate(fecha.getDate() + 1);
    }

    return fechas;
}

// Ejemplo de uso: Septiembre 2025
console.log(generarCalendario(9, 2025));
/******************************
 * ****************************
 */
//Próximo viernes 13
//Escribe un programa que encuentre la próxima fecha que sea viernes 13.
function proximoViernes13() {
    let fecha = new Date();
    
    // Si ya pasamos el día 13 de este mes, empezamos a buscar desde el próximo mes
    if (fecha.getDate() >= 13) {
        fecha.setMonth(fecha.getMonth() + 1);
    }
    
    // Fijamos el día en 13
    fecha.setDate(13);

    // Iteramos mes a mes hasta que el día de la semana sea Viernes (5 en JavaScript)
    while (fecha.getDay() !== 5) {
        fecha.setMonth(fecha.getMonth() + 1);
    }
    return fecha.toDateString(); 
}

// Ejecución
console.log(`El próximo viernes 13 será el: ${proximoViernes13()}`);
/**************************************
 * *************************************
 * *************************************
 * *************************************
 * */
//GEOLOCALICACION 
var latitud;
var longitud;
function mostrarPosicion(pos){
    console.log(pos);
    latitud = pos.coords.latitude;
    longitud = pos.coords.longitude;

    if (window.mapInstance) {
        window.mapInstance.remove();
    }
    
    var map = L.map('map').setView([latitud, longitud], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    //Dibujar linea 
    listaPuntos.push([latitud, longitud]);
    L.polyline(listaPuntos, {color: 'red'}).addTo(map);
}
//navigator.geolocation.getCurrentPosition(mostrarPosicion);
//51.505, -0.09
navigator.geolocation.getCurrentPosition(mostrarPosicion)

/*var map = L.map('map').setView([latitud, longitud], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);*/