/* EJERCICIO1 */
var validarMayuscula = new RegExp(/[A-Z]]/);
var validarCaracteresEspeciales = new RegExp(/[!@#$%^&]+]/);
var validarCorreo = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
var validarTarjetaCredito = new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/);
var validarLongitud = new RegExp(/{,8}/);
var validarNumero = new RegExp(/[0-9]+/);
/* EJERCICIO 2 */

/* ejercicio 3 */
let contenidoUsername= document.getElementById("username");
let btnValidar= document.getElementById("validarUsername");
function validarUser(){
    let contenido=contenidoUsername.value;

    const regexMayus = new RegExp(/[A-Z]/);
    const regexMinus= new RegExp(/[a-<]/);
    const regexMin8charcacters= new RegExp(/^[a-zA-Z]{8,}$/);
    
    if(regexMayus.test(contenido)){
        document.getElementById("resultado").innerHTML="<span style=\"color:green;\">Correcto</span>";
    }
    else if(regexMinus.test(contenido)){
        document.getElementById("resultado").innerHTML="<span style=\"color:red;\">Incorrecto</span>";
    }
}
btnValidar.addEventListener('keydown',validarUser);
function validarMayus(){

}
function validarMinus(){

}
function validar6characters(){
    }