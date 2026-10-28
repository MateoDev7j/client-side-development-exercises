//EJERCICIO 1 
/*var nombre = "Mateo";
console.log(nombre);

//EJERCICIO 2
let edad = 20;
console.log(edad);
edad = 21;
console.log(edad);

//EJERCICIO 3 
const pais = "España";
pais = "Francia";

//EJERCICIO 4 
{
    var x = 10;
}
console.log(x);
{
    let y = 20;
}
console.log(y);

//jercicios de JavaScript: if-else y switch
//Parte 1: if y if-else
//1. Número positivo o negativo
num = prompt("");
console.log(num);
if(num>0){
    console.log("Positivo");
} else {
    console.log("Negativo");
}

//2. Mayor de edad
edad = prompt("");
console.log(edad);
if(edad>=18){
    console.log("Eres mayor de edad");
} else {
    console.log("No eres mayor de edad");
}

//3. Número par o impar
num = parseInt(prompt(""));
if (num %2==0){
    console.log("El número es par");
}
else if (num %2!=0){
    console.log("El número es impar");
}
else {
    console.log("El número es cero");
}

//4. Calificaciones
calificacion = parseInt(prompt("Ingresa calificación: "));
if(calificacion>=5 && calificacion<=10){
    console.log("Aprobado");
}
else if (calificacion<5){
    console.log("Reprobado");
}
else{
    console.log("calificacion invalida");
}

//5. El mayor de dos números
numero1 = parseInt(prompt("Ingresa el primer numero"));
numero2 = parseInt(prompt("Ingresa el segundo numero"));
if  (numero1==numero2){
    console.log("Los numeros son iguales");
}
else if (numero1>numero2){
    console.log("El primer numero es mayor");
}
else{
    console.log("El segundo numero es mayor");
}
    
//PARTE 2 SWTICH
//6. Día de la semana
dia = parseInt(prompt("Ingresa un numero del 1 al 7"));
switch(dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Numero no valido");
}
        
//8. Semáforo
var color = prompt ("Ingresa un color rojo amarillo o verde");
switch(color){
    case "rojo":
        console.log("Alto");
        break;
    case "amarillo":
        console.log("Precaucion");
        break;
    case "verde":
        console.log("Avanza");
        break;
    default:
        console.log("Color no válido");
}
        
//9. Clasificación de frutas
var fruta = prompt("Ingresa una fruta manzana o platano");
switch(fruta){
    case "manzana":
        console.log("Es una Manzana roja");
        break;
    case "platano":
        console.log("Es un platano amarillo");
        break;
        case "uva":
            console.log("Es una uva morada");
            break;
    default:
        console.log("Fruta no válida");
}
//10. Mini-reto
var notaEscolar = prompt("Ingresa tu nota Escolar)").toLowerCase();
switch(notaEscolar){
    case "a":
        console.log("Excelente");
        break;
    case "b":
        console.log("Muy bien");
        break;
    case "c":
        console.log("Bien");
        break;
    case "d":
        console.log("Regular");
        break;
    case "f":
        console.log("Reprobado");
        break;
    default:
        console.log("Nota no válida");
}
//Ejercicios de Bucles en JavaScript
//Parte 1: for
//1. Contar del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
    
//2. Suma de números
let suma = 0;
for (let i = 1; i <= 5; i++) {
    suma+= i;
    console.log(i);
    console.log("la suma "+suma);
}
    
//3. Tabla de multiplicar
let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));
for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}
    
//Parte 2: while
//4. Contador descendente
let contador =10;
while ( contador >=1 ) {
    console.log(contador);
    contador--;
}
    
//5. Suma hasta 20
let suma =0;
while (suma <=20){
    for (let i =1 ;suma <= 20; i++){
        suma += i;
    }
    console.log("La suma de números es de  " + suma);
}
    
//Parte 3: do-while
//6. Pedir contraseña
let contraseña;
do{
    if(contraseña !== undefined && contraseña !== "1234") {
        console.log("Contraseña incorrecta. Intenta de nuevo.");
    }
    contraseña = prompt("Ingresa la contraseña (1234):");
    
}
while(contraseña !== "1234");

//7. Contador con do-while
let contador = 0;
do{
    console.log(contador);
    contador++;
}while(contador !=5);

for(let i=0;i<=6;i++){
    document.write("<h"+i+">TITULO CON H"+i+"</h"+i+">");
}
// probamos con json 
let listaAlumnos = [
    {
        nombre: "Alvaro",
        edad: 20
    },
    {
        nombre: "Adrian",
        edad: 21
    },
    {
        nombre: "Sara",
        edad: 19
    }
]
for (let alumno of listaAlumnos)
    document.write(alumno.nombre+ "tiene" + alumno.edad+ "años <br>");

//bucle con document write
for (let i=0;i<=10;i++)
    document.write("Vuelta "+ i +"<br>");
//4.10 cabecera con bucle h1-2-3
for(let i=0;i<=6;i++){
    document.write("<h"+i+">Cabecera h"+i+"</h"+i+">");
}
    
//4.11
let numeroColumnas = parseInt(prompt("Escribe el numero de columnas"));
let alto = parseInt(prompt("Escribe el alto"));
let ancho = parseInt(prompt("Escribe el ancho"));
document.write(`<table border = ”0” cellspacing = ”2” bgcolor =”black” width= ”200”>`);
document.write(`<tr bgcolor = ”white” height = "`+alto+`">"`);
for(let i=1;i<=numeroColumnas;i++){
    document.write(`<td bgcolor="white" width="`+ancho+`">&nbsp;</td>`);
}
document.write("</tr>");
document.write("</tr>");

//4.12
let numeroColumnas = parseInt(prompt("Escribe el numero de columnas"));
let alto = parseInt(prompt("Escribe el alto"));
let ancho = parseInt(prompt("Escribe el ancho"));
document.write(`<table border = ”0” cellspacing = ”2” bgcolor =”black” width= ”200”>`);
document.write(`<tr bgcolor = ”white” height = "`+alto+`">"`);
for(let i=1;i<=numeroColumnas;i++){
    if(i%2==0){
        document.write(`<td bgcolor="white" width="`+ancho+`">&nbsp;</td>`);
    }
    else{
        document.write(`<td bgcolor="black" width="`+ancho+`">&nbsp;</td>`);

    }
}
document.write("</tr>");
document.write("</tr>");

//4.13 Adapta el ejercicio anterior con while
let numeroColumnas = parseInt(prompt("Escribe el numero de columnas"));
let alto = parseInt(prompt("Escribe el alto"));
let ancho = parseInt(prompt("Escribe el ancho"));
document.write(`<table border = ”0” cellspacing = ”2” bgcolor =”black” width= ”200”>`);
document.write(`<tr bgcolor = ”white” height = "`+alto+`">"`);
let i=1;
while(i<=numeroColumnas){
    
    document.write(`<td bgcolor="white" width="`+ancho+`">&nbsp;</td>`);
    i++;
}
document.write("</tr>");
document.write("</tr>");

//4.14 adapta el ejercicio 4.12 usando while 
let numeroColumnas = parseInt(prompt("Escribe el numero de columnas"));
let alto = parseInt(prompt("Escribe el alto"));
let ancho = parseInt(prompt("Escribe el ancho"));
document.write(`<table border = ”0” cellspacing = ”2” bgcolor =”black” width= ”200”>`);
document.write(`<tr bgcolor = ”white” height = "`+alto+`">"`);
let i=1;
while(i<=numeroColumnas){
    if(i%2==0){
        document.write(`<td bgcolor="white" width="`+ancho+`">&nbsp;</td>`);
        i++;
    }
    else{
        document.write(`<td bgcolor="black" width="`+ancho+`">&nbsp;</td>`);
        i++;
    }
}
document.write("</tr>");
document.write("</tr>");

//4.15 jugador 1 y jugador 2
let num_adivinar;
let num;
num_adivinar= parseInt(prompt("Jugador 1 Escribe un numero"));
while(num_adivinar!=num){
    num = parseInt(prompt("Jugador 2 Adivina el numero"));
    if(num>num_adivinar){
        alert('El número es menor');
    }
    else if(num<num_adivinar){
        alert('El número es mayor');
    }
    else{
        alert('Haz acertado el numero');
    }
}
    
//4.16 Adaptar el 4.15 a do WHILE
let num_adivinar;
let num;
num_adivinar= parseInt(prompt("Jugador 1 Escribe un numero"));
do{
    num = parseInt(prompt("Jugador 2 Adivina el numero"));
    if(num>num_adivinar){
        alert('El número es menor');
    }
    else if(num<num_adivinar){
        alert('El número es mayor');
    }
    else{
        alert('Haz acertado el numero');
    }
}while(num_adivinar!=num);

//4.17
//Hacer un programa en JavaScript que usando
//dos bucles anidados for imprima por pantalla
//todas las tablas de multiplicar.
for(let i=1;i<=10;i++){
    document.write('<h1>tabla del '+i+': </h1><br>');
    for(let o=1;o<=10;o++){
        document.write(o+'x'+i+'='+o*i+'<br>');
    }
}
//4.18
//pedimos 4 valores 
let nColumnas= parseInt(prompt("Escrube el numero de Columnas"));
let nFilas= parseInt(prompt("Escrube el numero de Filas"));
let alto= parseInt(prompt("Escrube el alto"));
let ancho= parseInt(prompt("Escrube el ancho"));
document.write('<table border = "0" cellspacing= "2" bgcolor = "black" width="200">');
for(let i=1;i<=nFilas;i++){
    document.write('<tr bgcolor = "white" height = "'+alto+'">');
    for(let j=1;j<=nColumnas;j++){
        document.write('<td width = "'+ancho+'"> &nbsp;</td>');
    }
    document.write('</tr>');
}
document.write('</table>');

//4.19
//Pedimos el ancho que sera igual al alto para hacer un ajedrez de 8x8 
//en un for anidado
let ancho = parseInt(prompt("Escribe el ancho"));
let alto = ancho;
let numAj=8;
document.write('<table border = "0" cellspacing= "2" bgcolor = "black" width="200">');
for(let i=1;i<=numAj;i++){
        document.write('<tr bgcolor = "black" height = "'+alto+'">');
    for(let j=1;j<=numAj;j++){
        if((i + j) % 2 === 0)
            document.write('<td bgcolor="white" width = "'+ancho+'"> &nbsp;</td>');
        else 
            document.write('<td bgcolor="black" width = "'+ancho+'"> &nbsp;</td>');
    }
    document.write('</tr>');
}
document.write('</table>');

//Relación de Ejercicios Avanzados de Bucles en JavaScript

let n;
do {
    n=parseInt(prompt("Ingresa un numero impar: "));
    if (n % 2 == 0) 
        alert("Debe ser impar");
} while (n % 2 == 0);
function dibujarRombo(n) {
    const mitad = Math.floor(n/2);

    for (let i = 0; i < n; i++) {

        const espacios = Math.abs(mitad - i);
        const asteriscos = n - 2 * espacios;

        let fila = "";

        for (let j = 0; j < espacios; j++) {
            fila = fila + " ";
        }

        for (let j = 0; j < asteriscos; j++) {
            fila = fila + "*";
        }
        console.log(fila);
    }
}
dibujarRombo(n);
*/
//2. Ordenación manual (Algoritmo de Burbuja)
//Dado un array de números desordenados, ordénalo de menor a mayor sin utilizar Array.prototype.sort().
//Ejemplo de entrada: [5, 2, 9, 1, 5, 6]
//Salida esperada: [1, 2, 5, 5, 6, 9]
//Pista: Utiliza bucles for anidados para comparar elementos adyacentes e intercambiar sus posiciones (swapping) si están desordenados
const numeros = [5, 2, 9, 1, 5, 6];
const numerosOrdenado = new Array(6);
let posicion;
for(let vuelta=0;vuelta<=numeros.length-1;vuelta++){
    for(let i=0;i<=numeros.length-1-vuelta;i++){

    }
    if(numeros[i]>numeros[i+1]){
        posicion=i;
        numerosOrdenado[posicion+1]=numeros[i];
    }
    else if(numeros[i]<numeros[i-1]){
        numerosOrdenado[posicion-1]=numeros[i];
    }
    else{
        numerosOrdenado[posicion]=numeros[i];
    }
}
console.log(numerosOrdenado);