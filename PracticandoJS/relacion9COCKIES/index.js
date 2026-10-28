/*document.cookie;

document.cookie = "nombreUsuario = Jose";

document.cookie = "colorFondo = red";

document.cookie = "colorFondo=red expires=thu, 18 Dec 2013 12:00:00 UTC";*/
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function elegirRojo(){
    document.cookie="colorFondo=red";
    document.body.style.backgroundColor = "red";
}
function elegirVerde(){
    document.cookie="colorFondo=green";
    document.body.style.backgroundColor = "green";
}
var nombreMostrar;

nombreMostrar = getCookie("nombre");
if(!nombreMostrar){
    let nombreUsuario= prompt("Dime tu nombre");
    document.cookie = "nombre = "+nombreUsuario;
    nombreMostrar=nombreUsuario;
}
else{
    //nombreMostrar lo tengo que buscar en la cookie porque existe

}
document.getElementById("bienvenida").innerHTML = "Bienvenido "+nombreMostrar;

//Comprobar si el usuario eligio algun color de fondo
let bgColor = getCookie("colorFondo");
if(bgColor){
    document.body.style.backgroundColor = bgColor;
}
//Ejercicio 1 — Crear una cookie
//Crea una cookie llamada nombre cuyo valor sea tu nombre.
document.cookie = "nombre = Mateo";
//Después muestra por consola el contenido de:
//document.cookie
console.log(document.cookie);
//Objetivo
//Comprobar cómo se crea una cookie y cómo podemos consultar las cookies almacenadas por nuestra página.
console.log("Comprobar se consultan con document.cookie");
//Comprobación
//Abre las herramientas de desarrollador del navegador y busca dónde se almacenan las cookies de la página.
console.log("Se almacenan en aplicattion y en cookies");
/* ***************************** */
//Ejercicio 2 — Crear varias cookies
//Crea las siguientes cookies:
/* ****************************** */
//nombre = tu nombre
document.cookie = "nombre = Mateo";
//edad = tu edad
document.cookie = "edad = 20";
//ciudad = tu ciudad
document.cookie = "ciudad = Granada";
//Después muestra por consola todas las cookies.
console.log(document.cookie);
//El resultado debería ser parecido a:
//nombre=Juan; edad=25; ciudad=Granada
//Preguntas
//¿Cómo aparecen separadas las diferentes cookies?
//Aparecen separadas con ;
//¿Se muestran en el mismo orden en el que las has creado?
//si
//¿Qué ocurre si vuelves a cargar la página?
//se quedan guardadas
/********************************************************** */
//Ejercicio 3 — Modificar una cookie
//Crea inicialmente una cookie:
/************************************************************ */
//nombre = Juan
//Después modifica su valor para que sea:

//nombre = Pedro
//Muestra por consola el resultado final.

//Comprobación
//Comprueba en las herramientas de desarrollador que la cookie contiene finalmente:

//nombre = Pedro
//Pregunta
//¿Qué ocurre cuando creamos una cookie utilizando un nombre que ya existe?
//la machaca y se sobreescribe
/******************************************************************/
//Ejercicio 4 — Comprobar la persistencia
//Crea una cookie llamada:
/******************************************************************/
//usuario = tu nombre
//Después realiza las siguientes pruebas:
document.cookie = "usuario = Mateo";
//Recarga la página.
//Cierra la pestaña.
//Vuelve a abrir la página.
//Cierra completamente el navegador.
//Vuelve a abrir el navegador y accede de nuevo a la página.
//Comprueba en cada caso si la cookie sigue existiendo.
//Si las cookies siguen existiendo
//Pregunta
//¿Por qué crees que la cookie sigue existiendo aunque hayas cerrado la página?
//Porque almacena la cookie en las cookies de la pagina
/********************************************************************************
 * *************************************************************************** */
//Ejercicio 6 — Crear una función para obtener cookies
//Vamos a crear una función que podamos reutilizar para obtener cualquier cookie.

//Crea una función:

//obtenerCookie(nombre)
//La función debe recibir el nombre de una cookie y devolver su valor.
function obtenerCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
//Por ejemplo:

//console.log(obtenerCookie("nombre"));
//debería mostrar:
console.log(obtenerCookie("nombre"));
//Juan
//Y:
//console.log(obtenerCookie("ciudad"));
//debería mostrar:
console.log(obtenerCookie("ciudad"));
//Granada
//Si la cookie no existe, la función debe devolver:
console.log(obtenerCookie("altura"));
//null
//Pruebas
//Comprueba que funcionan estas llamadas:
//console.log(obtenerCookie("nombre"));
//console.log(obtenerCookie("edad"));
//console.log(obtenerCookie("ciudad"));
//console.log(obtenerCookie("direccion"));

/************************************** */ 
//Ejercicio 7 — Guardar el nombre del usuario
//Crea una página HTML con:
/************************************** */ 

//¿Cuál es tu nombre?
let nombreGuardar = prompt("Cual es tu nombre");
//[________________] [Guardar]
function guardarNombre(){
    
}
//Cuando el usuario escriba su nombre y pulse Guardar:

//Debes almacenar el nombre en una cookie.
//Debes mostrar en la página:
//¡Hola, Juan!
//Por ejemplo, si el usuario introduce Juan:

//¡Hola, Juan!
//Requisitos
//Debes utilizar:

//Un <input>.
//Un <button>.
//JavaScript.
//Una cookie.
//Un evento click.

function tiempo(){
    let hora = new Date();
    console.log(hora);
}
setInterval(()=> console.log(new Date())
/*{
    let hora = new Date();
    console.log(hora);
}*/, 1000 );
let nombres=[4,8,5,3];
console.log(nombres.sort((a,b)=>a-b));