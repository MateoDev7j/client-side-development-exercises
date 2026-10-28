let limiteRgb = 255;
function rgbAleatorio(){
    return Math.floor(Math.random()*(limiteRgb-1)+1);
}
console.log(rgbAleatorio());
let div1=document.getElementById("div1");
let div2=document.getElementById("div2");
let div3=document.getElementById("div3");
let div4=document.getElementById("div4");
let div5=document.getElementById("div5");
let div6=document.getElementById("div6");
var rgbAleatoriocadena="";
let coloresRgb=[];
let misDiv=[div1,div2,div3,div4,div5,div6];
function definiendoColoresAleatorios(){
    rgbAleatoriocadena="rgb("+rgbAleatorio() +","+rgbAleatorio() +","+rgbAleatorio()+")";
    return rgbAleatoriocadena;
}
coloresRgb=[definiendoColoresAleatorios(),definiendoColoresAleatorios(),definiendoColoresAleatorios(),definiendoColoresAleatorios(),definiendoColoresAleatorios(),definiendoColoresAleatorios()]
for(let i=0;i<=5;i++){
    misDiv[i].style.backgroundColor= coloresRgb[Math.floor(Math.random()*coloresRgb.length)];
}
let rgbAdivinar="";
rgbAdivinar = misDiv[Math.floor(Math.random()*6-1)+1].style.backgroundColor;
document.getElementById("rgbtitulo").innerHTML+=rgbAdivinar;

function verificarRgbCorrecto(e){
    if(e.target.style.backgroundColor===rgbAdivinar){
        document.getElementById("resultadoRgb").innerHTML="Correcto";
    }
    else{
        document.getElementById("resultadoRgb").innerHTML="Incorrecto";
    }
}
for(let i=0;i<=5;i++){
    misDiv[i].addEventListener("click",verificarRgbCorrecto);
}

/**********************CALCULADORA***************************/
let b0=document.getElementById("btn0");
let b1=document.getElementById("btn1");
let b2=document.getElementById("btn2");
let b3=document.getElementById("btn3");
let b4=document.getElementById("btn4");
let b5=document.getElementById("btn5");
let b6=document.getElementById("btn6");
let b7=document.getElementById("btn7");
let b8=document.getElementById("btn8");
let b9=document.getElementById("btn9");
let bSumar=document.getElementById("btnSuma");
let bRestar=document.getElementById("btnResta");
let bMult=document.getElementById("btnPor");
let bDividir=document.getElementById("btnDiv");
let arrayBotones=[b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,bSumar,bRestar,bMult,bDividir];
function dibujarEnPantalla(e){
    let pantalla=document.getElementById("pantalla");
    pantalla.value+=e.target.innerText;
}
function limpiarPantalla(){
    let pantalla=document.getElementById("pantalla");
    pantalla.value="";
}
function resultadoOperaciones(){
    let pantalla=document.getElementById("pantalla");
    let cadenaPantalla=pantalla.value;
    if(cadenaPantalla.includes("+")){
        console.log("SUMA");
        cadenaPantalla.split("+");

    }
    else if(cadenaPantalla.includes("-")){
        console.log("RESTA");
        cadenaPantalla.split("-");
    }
    else if(cadenaPantalla.includes("×")){
        console.log("MULTIPLICACION");
        cadenaPantalla.split("×");
    }
    else if(cadenaPantalla.includes("÷")){
        console.log("DIVISION");
        cadenaPantalla.split("÷");
    }
}
for(let i=0;i<=13;i++){
    arrayBotones[i].addEventListener("click",dibujarEnPantalla);
}
document.getElementById("btnLimpiar").addEventListener("click",limpiarPantalla);
document.getElementById("btnResultado").addEventListener("click",resultadoOperaciones);

