//🧩 Ejercicios de Eventos en JavaScript
//Estos ejercicios están diseñados para manejar eventos en JavaScript, sin usar todavía creación dinámica de contenido con el DOM.
//Cada minijuego tiene una interfaz HTML estática y los eventos controlan su comportamiento.

//🧱 Nivel 1: Eventos básicos (click, mouseover, keydown)
//1. Caza del color
//Objetivo: Hacer clic en el cuadrado del color indicado.
//Interfaz: 4 cuadrados de colores (HTML estático).
//JS: Mostrar el texto “Haz clic en el color rojo”.

//Si se hace clic en el color correcto → mensaje de acierto.
//Si se falla → mensaje de error.
//Eventos: click
let divCorrecto= document.getElementById("div1").addEventListener("click", clickCorrecto);
document.getElementById("div2").addEventListener("click",clickIncorrecto);
document.getElementById("div3").addEventListener("click",clickIncorrecto);
document.getElementById("div4").addEventListener("click",clickIncorrecto);
function clickCorrecto(){
    let resultado= document.getElementById("Resultado");
    resultado.innerHTML += '<span style="color: #39ff14;">Correcto</span>';
}
function clickIncorrecto(){
    let resultado= document.getElementById("Resultado");
    resultado.innerHTML += '<span style="color: red;">Incorrecto</span>';
}
var colorAleatorio1 = document.getElementById("colorAleatorio");
var colorRandom="";
var colorSolo="";
function generarOpAleatoria(){
    document.getElementById("colorAleatorioSpan").innerHTML="";
    colores=["rojo","azul","verde","amarillo"];
    let colorElegidoRandom= colores[Math.floor(Math.random()*4-0)+0];
    document.getElementById("colorAleatorioSpan").innerHTML += colorElegidoRandom;
    colorRandom= colorElegidoRandom; 
    console.log(colorRandom);
    colorSolo=colorRandom.trim();
}
generarOpAleatoria();



var divClickado="";
function clickAleatorioCorrecto(){

    divClickado = this.innerHTML.trim();

    if(divClickado===colorSolo){
        let resultado= document.getElementById("ResultadoAleatorio");
        resultado.innerHTML += '<span style="color: #39ff14;">Correcto</span>';
    }
    else{
        let resultado= document.getElementById("ResultadoAleatorio");
        resultado.innerHTML += '<span style="color: red;">Incorrecto</span>';
    }
}
document.getElementById("volverJugarColorAleatorio").addEventListener("click",generarOpAleatoria);

document.getElementById("div1.1").addEventListener("click", clickAleatorioCorrecto);

document.getElementById("div2.2").addEventListener("click", clickAleatorioCorrecto);
let div22 = document.getElementById("div2.2");
document.getElementById("div3.3").addEventListener("click", clickAleatorioCorrecto);
let div33 = document.getElementById("div3.3");
document.getElementById("div4.4").addEventListener("click", clickAleatorioCorrecto);
let div44 = document.getElementById("div4.4");
/*if('rojo'==colorSolo){
    let resultado= document.getElementById("Resultado");
    resultado.innerHTML += '<span style="color: #39ff14;">Correcto</span>';
}*/
//2. El botón cambiante
//Objetivo: Un botón cambia de color o texto al pasar el ratón o hacer clic.
//Interfaz: Un solo botón grande.JS:
//mouseover: cambia de color.
//mouseout: vuelve a su color original.
//click: cambia su texto (“¡Me hiciste clic!”).
//Eventos: mouseover, mouseout, click
function cambiarColor(){
    this.style.backgroundColor="blue"
}
function colorOriginal(){
    this.style.backgroundColor= "white";
}
function cambiarContenido(){
    this.innerHTML="Me hiciste click!!";
}
document.getElementById("btnCambiante").addEventListener("mouseover", cambiarColor);
document.getElementById("btnCambiante").addEventListener("mouseout", colorOriginal);
document.getElementById("btnCambiante").addEventListener("click", cambiarContenido);

//3. Sigue la instrucción
//Objetivo: Responder con el teclado a una instrucción.
//Interfaz: Texto que dice: “Presiona la tecla A”.
//JS: Detectar la tecla presionada y mostrar si fue la correcta.
//Eventos: keydown

function fueCorrecta(){
    let valor=this.value;
    if(event.key==="A"){
        let spanLetra= document.getElementById("letraCorrecta")
        spanLetra.innerHTML="Enhorabuena haz pulsado la letra correcta";
    }
    else{
        let spanLetra= document.getElementById("letraCorrecta")
        spanLetra.innerHTML="ERROR:letra incorrecta";
    }
}
document.getElementById("inputKey").addEventListener("keydown", fueCorrecta);

//🎮 Nivel 2: Reacción y precisión
//4. Juego de reflejos
//Objetivo: Hacer clic en el círculo solo cuando cambie de color.
//Interfaz: Un círculo centrado. JS:
//Cada 2–5 segundos el círculo cambia de gris a verde.
//Si el usuario hace clic cuando está verde → “¡Reflejos rápidos!”.
//Si hace clic antes → “Demasiado pronto”.
//Eventos: click, setTimeout


//setTimeout(()=>{this.style.backgroundColor="#39ff14";},2000);
let idDivCambiarColor = document.getElementById("circuloCambiante");
    setTimeout(() => {idDivCambiarColor.style.backgroundColor="rgb(79, 238, 51)";}, 3000);
    setTimeout(() => {idDivCambiarColor.style.backgroundColor="white";}, 0);
function esClickCorrecto(){
    if(this.style.backgroundColor.trim()==="rgb(79, 238, 51)"){
        document.getElementById("clickCorrectoCirculo").innerHTML = "!Reflejos rapidos!";
    }
    else{
        document.getElementById("clickCorrectoCirculo").innerHTML = "Demasiado pronto";
    }
}
document.getElementById("circuloCambiante").addEventListener("click", esClickCorrecto);





//5. Atrapa el número correcto
//Objetivo: Elegir el número que diga el texto.
//Interfaz: Varios botones numerados del 1 al 9. JS:
//Mostrar “Haz clic en el número 7”.
//Validar el número presionado.
//Eventos: click
let numeros=[1,2,3,4,5,6,7,8,9];
let numeroAleatorio=document.getElementById("numAleatorio");
numeroAleatorio.innerHTML += numeros[Math.floor(Math.random()*9-1)+1];
let numeroSolo=parseInt(numeroAleatorio.innerHTML.slice(23,25).trim());
console.log(numeroSolo);
function verificarNumAleatorio(e){
    if(parseInt(this.innerHTML)===numeroSolo){
        document.getElementById("resultadoNumAleatorio").innerHTML+='<span style="color: #39ff14;">Correcto</span>';
        console.log("Correcto");
    }
    else{
        document.getElementById("resultadoNumAleatorio").innerHTML+='<span style="color: red;">Incorrecto</span>';
        console.log("Incorrecto");
        console.log(e.target)
    }
}

document.getElementById("btn1").addEventListener("click", verificarNumAleatorio);
document.getElementById("btn2").addEventListener("click", verificarNumAleatorio);
document.getElementById("btn3").addEventListener("click", verificarNumAleatorio);
document.getElementById("btn4").addEventListener("click", verificarNumAleatorio);
document.getElementById("btn5").addEventListener("click", verificarNumAleatorio);
document.getElementById("btn6").addEventListener("click", verificarNumAleatorio);
document.getElementById("btn7").addEventListener("click", verificarNumAleatorio);
document.getElementById("btn8").addEventListener("click", verificarNumAleatorio);
document.getElementById("btn9").addEventListener("click", verificarNumAleatorio);
//PARA SABER CUAL A CLICKEAR PARAMETRO EVENT Y EVENT TARGET
//Funcionaria asi funcion(e){
//  e.target; es lo mismo que this solo que obtiene solo el elemento que se clickea
// console.log(e.target.id Es igual a this.id)  
//}

//🕹️ Nivel 3: Coordinación y secuencias
//6. Simón dice (versión simple)
//Objetivo: Repetir una secuencia de colores.
//Interfaz: 4 botones de colores. JS:
//Mostrar un color que “parpadea”.
//El usuario debe hacer clic en ese color.
//Si acierta, pasa al siguiente nivel.
//Eventos: click, setTimeout
let idBotonParpadear1=document.getElementById("btnSimondice1");
let idBotonParpadear2=document.getElementById("btnSimondice2");
let idBotonParpadear3=document.getElementById("btnSimondice3");
let idBotonParpadear4=document.getElementById("btnSimondice4");

var idBotonAleatorio=null;
var array=null;
var puedoClickear=false;
function generarBotonParpadeanteAleatorio(){
    array=[idBotonParpadear1,idBotonParpadear2,idBotonParpadear3,idBotonParpadear4];
    idBotonAleatorio= array[Math.floor(Math.random()*4-0)+0];
}

function botonParpadeante(){
    setTimeout(() => {idBotonAleatorio.style.backgroundColor="rgb(79, 238, 51)";}, 1000);
    setTimeout(() => {idBotonAleatorio.style.backgroundColor="white";}, 2000);
    setTimeout(() => {idBotonAleatorio.style.backgroundColor="rgb(79, 238, 51)";}, 3000);
    setTimeout(() => {idBotonAleatorio.style.backgroundColor="white";}, 4000);
    setTimeout(() => {puedoClickear = true;}, 4000);
}
function siguienteRonda(){
    document.getElementById("resultadoSimonDice").innerHTML="";
    generarBotonParpadeanteAleatorio();
    botonParpadeante();
}
function verificarClickCorrectoSimonDice(e){
    if(!puedoClickear){
        return;
    }
    puedoClickear=false;
    if(e.target.id==idBotonAleatorio.id){
        document.getElementById("resultadoSimonDice").innerHTML+='<span style="color: #39ff14;">Correcto pasas de ronda</span>';
        setTimeout(siguienteRonda, 4000); 
    }
    else{
        document.getElementById("resultadoSimonDice").innerHTML+='<span style="color: red;">Incorrecto</span>';
    }
}
siguienteRonda();
idBotonParpadear1.addEventListener("click",verificarClickCorrectoSimonDice);
idBotonParpadear2.addEventListener("click",verificarClickCorrectoSimonDice);
idBotonParpadear3.addEventListener("click",verificarClickCorrectoSimonDice);
idBotonParpadear4.addEventListener("click",verificarClickCorrectoSimonDice);

//7. Carrera de botones
//Objetivo: Pulsar repetidamente un botón para “avanzar” una barra.
//Interfaz:
//Un botón “Correr”.
//Una barra de progreso (div con ancho variable).
//JS: Cada clic aumenta el ancho de la barra un poco.
//Eventos: click
let divCarreas=document.getElementById("divAnchoVariable");
let botonCarreras =document.getElementById("btnAvanzarCarreas");
function crecerDiv(){
    divCarreas
}
botonCarreras.addEventListener("click",crecerDiv);

