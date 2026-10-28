//Ejercicios de JavaScript: if-else y switch
//Parte 1: if y if-else
//1. Número positivo o negativo
//👉 Escribe un programa que:
//Pida un número (puede ser una variable fija).
//Muestre en consola si es positivo o negativo.
//const numeroPedir=parseInt(prompt('Ingresa una variable'));
//(numeroPedir>0)?console.log('El numero que ha ingresado es positivo'):console.log('El numero que ha ingresado es negativo');
//2. Mayor de edad
//👉 Escribe un programa que:
//Guarde tu edad en una variable.
//Use if-else para mostrar si eres mayor de edad (18 o más) o menor de edad.
var esmayor = 20;
if(esmayor>18)
    console.log('Eres mayor de edad');
else if(esmayor<0)
    console.log('Tu edad no puede ser negativa');
else
    console.log('Eres menor de edad');

//3. Número par o impar
//👉 Escribe un programa que:
//Guarde un número en una variable.
//Use un if-else para mostrar si es par o impar.
var esPar=20;
if(esPar%2==0)
    console.log('Es numero par');
else
    console.log('Es impar');

//4. Calificaciones
//👉 Escribe un programa que:
//Guarde una calificación del 0 al 10.
//Use if-else para mostrar:
//"Aprobado" si es 5 o más.
//"Reprobado" si es menor a 5.
var calificacion= 7;
if(calificacion>5)
    console.log('Aprobado');
else
    console.log('Reprobado');
//5. El mayor de dos números
//👉 Escribe un programa que:
//Guarde dos números en variables.
//Use if-else para mostrar cuál de los dos es mayor.
//Si son iguales, muestra "Son iguales".
var numero1=7;
var numero2=5;
if(numero1>numero2)
    console.log('El numero 1 es mayor que el 2');
else 
    console.log('El numero 2 es mayor que el 1');

//Parte 2: switch
//6. Día de la semana
//👉 Escribe un programa que:
//Guarde un número del 1 al 7 en una variable.
//Use switch para mostrar el día de la semana correspondiente.
//1 → Lunes
//2 → Martes
//3 → Miércoles
//4 → Jueves
//5 → Viernes
//6 → Sábado
//7 → Domingo
var numDel1al7=1;
switch(numDel1al7){
    case 1: 
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break; 
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Numero no valido');
    break;
}

//7. Menú de opciones
//👉 Escribe un programa que:
//Guarde un número del 1 al 3 en una variable.
//Use switch para mostrar:
//1 → "Opción A seleccionada"
//2 → "Opción B seleccionada"
//3 → "Opción C seleccionada"
//Otro → "Opción no válida"
var numDel1al3=1;
switch(numDel1al7){
    case 1: 
        console.log('Opción A seleccionada');
        break;
    case 2:
        console.log('Opción B seleccionada');
        break; 
    case 3:
        console.log('Opción C seleccionada');
        break;
    default:
        console.log('Opcion no vàlida');
    break;
}

//8. Semáforo
//👉 Escribe un programa que:
//Guarde un color en una variable ("rojo", "amarillo" o "verde").
//Use switch para mostrar:
//"Alto" si es rojo.
//"Precaución" si es amarillo.
//"Avanza" si es verde.
var colorSemaforo="rojo";
switch(colorSemaforo){
    case "rojo": 
        console.log('Alto');
        break;
    case "amarillo":
        console.log('Precaución');
        break; 
    case "verde":
        console.log('Avanza');
        break;
    default:
        console.log('Opcion no vàlida');
    break;
}

//9. Clasificación de frutas
//👉 Escribe un programa que:
//Guarde en una variable una fruta (por ejemplo "manzana" o "plátano").
//Use switch para mostrar si es:
//"Manzana" → "Es una manzana roja"
//"Plátano" → "Es un plátano amarillo"
//"Uva" → "Es una uva morada"
//Otro caso → "Fruta no reconocida"
var fruta="manzana";
switch(fruta){
    case "manzana": 
        console.log('Es una manzana roja');
        break;
    case "platano":
        console.log('Es un plátano amarillo');
        break; 
    case "uva":
        console.log('Es una uva morada');
        break;
    default:
        console.log('Fruta no reconocida');
    break;
}

//10. Mini-reto 🎯
//👉 Escribe un programa que:
//Guarde una nota escolar (A, B, C, D, F).
//Use switch para mostrar un mensaje:
//"Excelente" si es A
//"Muy bien" si es B
//"Bien" si es C
//"Suficiente" si es D
//"Reprobado" si es F
var calf="A";
switch(calf){
    case "A": 
        console.log('Excelente');
        break;
    case "B":
        console.log('Muy bien');
        break; 
    case "C":
        console.log('Bien');
        break;
    case "D":
        console.log('Suficiente');
        break;
    case "F":
        console.log('Reprobado');
        break;
    default:
        console.log('Eso no es una calificacion');
    break;
}
/**********************************************
 * *********************************************
 * *********************************************
 */
console.log('*************************************TERNARIOS*****************************************');
//1. Par o Impar
//Crea una función o expresión que determine si un número entero es par o impar.
//Ejemplo de entrada: 7
//Salida esperada: "Impar"
//Reto: Resuélvelo en una sola línea utilizando el operador de módulo %.
function verificarPar(numero){
    return numero%2==0?console.log('Par'):console.log('Impar'); 
}
console.log(verificarPar(7));

//2. Asignador de Descuentos (Ternario encadenado)
//Calcula el porcentaje de descuento a aplicar según los puntos acumulados por un cliente:
//Más de 100 puntos →20%
//Entre 50 y 100 puntos →10%
//Menos de 50 puntos →0%
//Ejemplo de entrada: puntos = 75
//Salida esperada: 10
var puntosCliente=75;
console.log('El descuento por '+puntosCliente+' es de:'+(puntosCliente>100?20:puntosCliente>=50 && puntosCliente<100?10:puntosCliente<50?0:'puntos negativos'));

//Reto: Aplica una estructura de ternarios anidados cuidando la legibilidad.
//3. Validador de Acceso
//Determina si un usuario cumple los requisitos para subir a una atracción de parque temático.
//La regla exige tener al menos 18 años O medir más de 160 cm.
//Ejemplo de entrada: edad = 16, altura = 170
//Salida esperada: "Acceso permitido"
//Reto: Combina operadores lógicos (||, &&) dentro de la condición evaluada.
var edadValidador=16;
var alturaValidador=170;
console.log(edadValidador>18 || alturaValidador > 160 ? 'Acceso permitido':'Acceso no permitido');


//4. Valor por Defecto con Fallback
//Dada una variable username que puede contener una cadena de texto o los valores null / undefined, 
//asigna el nombre de usuario o la cadena "Invitado" si no está definido.
//Ejemplo de entrada: username = null
//Salida esperada: "Invitado"
var username=null;
console.log(username!=null?'Bienvenido '+username:'Bienvenido invitado');

//5. Conversor de Calificaciones
//Dada una nota numérica entre 0 y 10, devuelve la calificación cualitativa equivalente:
//Nota ≥9→"Sobresaliente"
//Nota ≥7→"Notable"
//Nota ≥5→"Aprobado"
//Nota <5→"Suspenso"
//Ejemplo de entrada: 8.5
//Salida esperada: "Notable"
var notaConversor=8.5;
console.log(notaConversor>=9?"Sobresaliente":notaConversor>=7?"Notable":notaConversor>=5?"Aprobado":notaConversor<5?"Suspenso":"Nota no valida");

//Reto: Formatea la secuencia de ternarios encadenados de forma vertical e intuitiva.
//6. Calculadora de Gastos de Envío
//Dado el valor total de una cesta de compra, calcula el importe final. 
//Si la compra es superior a 50€,
//el envío es gratuito (0€); en caso contrario, se aplican 4.95€ de gastos de envío.
//Ejemplo de entrada: totalCompra = 35
//Salida esperada: 39.95
//Reto: Realiza la suma/operación aritmética directamente en el retorno del ternario.
var totalCompra=35;
var gastosDeEnvio=4.95;
console.log(totalCompra>50?
    totalCompra:totalCompra<=50?
    totalCompra+gastosDeEnvio:"");

//7. Normalizador de Rangos (Clamp)
//Dado un valor val, restringe su rango para que se mantenga entre [0,100]. 
// Si es menor que 0, devuelve 0; 
// si es mayor que 100, devuelve 100; en cualquier otro caso, devuelve el propio valor.
//Ejemplo de entrada: val = 145
//Salida esperada: 100
//Reto: Implementa la lógica de acotación (clamp) en una sola línea utilizando dos ternarios.
var val = 145;
console.log(val<0?0:(val>100?100:val));
console.log('****************BUCLES PARTE1********************');
//Ejercicios de Bucles en JavaScript
//Parte 1: for
//1. Contar del 1 al 10
//👉 Escribe un programa que:
//Use un bucle for para mostrar los números del 1 al 10 en consola.
for(let i=1;i<=10;i++){
    console.log(i);
}
//2. Suma de números
//👉 Escribe un programa que:
//Use un bucle for para sumar todos los números del 1 al 5.
//Muestra el resultado en consola.
console.log('Bucle para sumar todos los numeros del 1 al 5');
let sumatotal=0;
for(let i=1;i<=5;i++){
    sumatotal=sumatotal+i;
    console.log(sumatotal);
}
//3. Tabla de multiplicar
//👉 Escribe un programa que:
//Guarde un número en una variable.
//Use un bucle for para mostrar su tabla de multiplicar del 1 al 10.
let numeroTabladeMultiplicar=5;
console.log('Tabla de multiplicar del numero '+numeroTabladeMultiplicar);
for(let i=1;i<=10;i++){
    console.log(numeroTabladeMultiplicar+'x'+i+' = '+numeroTabladeMultiplicar*i);
}

//Parte 2: while
//4. Contador descendente
//👉 Escribe un programa que:
//Use un bucle while para contar de 10 a 1.
//Muestra cada número en consola.
console.log('Contador descendente del 10 al 1 con while');
let i=10;
while(i>=1){
    console.log(i);
    i--;
}

//5. Suma hasta 20
//👉 Escribe un programa que:
//Use un bucle while para sumar números comenzando desde 1 hasta que la suma sea mayor o igual a 20.
//Muestra la suma final.
console.log('Mostrando hasta que la suma sea mayor o igual a 20');
let sumaTotalWhile=1;
let contador=1;
while(sumaTotalWhile<=20){
    sumaTotalWhile=sumaTotalWhile+contador;
    contador++;
    console.log(sumaTotalWhile);
}

//Parte 3: do-while
//6. Pedir contraseña
//👉 Escribe un programa que:
//Pida un valor (puede ser una variable simulando entrada).
//Use un bucle do-while para repetir hasta que la contraseña sea "1234".
//Muestra un mensaje "Contraseña correcta" cuando termine.
/*
let contraseyaCorrectaDoWhile=1234;
do{
    contraseyaDoWhile=parseInt(prompt('Introduce tu contraseña 1234'));
    console.log('Contraseña incorrecta');
}while(contraseyaDoWhile!=contraseyaCorrectaDoWhile);
console.log('Contraseña correcta ');*/
//7. Contador con do-while
//👉 Escribe un programa que:
//Use un bucle do-while para contar del 1 al 5.
//Muestra los números en consola.
let limite5DoWhile=6;
let contadorContarDoWhile=1;
console.log('Contamos con do while del 1 al 5');
do{
    console.log(contadorContarDoWhile);
    contadorContarDoWhile++;
}while(contadorContarDoWhile!=limite5DoWhile);
//Ejercicio 4.10.
//Escribir un programa que muestre la frase “Cabecera h” seguido del número.
//Las frases deben estar formateadas con las etiquetas adecuadas. El
//resultado debe ser el siguiente
for(let i=1;i<=6;i++){
    document.write('<h'+i+'>Cabecera h'+i+'</h'+i+'>');
}
//EJERCICIO 4.11
let numColumnasDwrite=4;
let altoDwrite=50;
let anchoDwrite=50;
document.write('<table border="0" cellspacing ="2" bgcolor ="black" width ="200">');
document.write('<tr bgcolor="white" height ="'+altoDwrite+'" bgcolor ="white">');
for(let i=1;i<=numColumnasDwrite;i++){
    document.write('<td width="'+anchoDwrite+'" bgcolor ="white">&nbsp;</td>');
}
document.write('</tr>');
document.write('</table>');
//EJERCICIO 4.12
document.write("<br>");
document.write('<table border="0" cellspacing ="2" bgcolor ="black" width ="200">');
document.write('<tr bgcolor="white" height ="'+altoDwrite+'" bgcolor =”white”>');
for(let i=1;i<=numColumnasDwrite;i++){
    if(i%2==0)
        document.write('<td width="'+anchoDwrite+'" bgcolor ="white">&nbsp;</td>');
    else
        document.write('<td width="'+anchoDwrite+'" bgcolor ="black">&nbsp;</td>');
}
document.write('</tr>');
document.write('</table>');
//EJERCICIO 4.13
document.write("<br>");
let contadorDwrite=1;
document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor="white" height="' + altoDwrite + '">');
while (contadorDwrite <= numColumnasDwrite) {
    document.write('<td width="' + anchoDwrite + '" bgcolor="white">&nbsp;</td>');
    contadorDwrite++;
}
document.write('</tr>');
document.write("<br>");
contadorDwrite = 1; 
document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor="white" height="' + altoDwrite + '">');
while (contadorDwrite <= numColumnasDwrite) {
    if(contadorDwrite%2==0){
        document.write('<td width="' + anchoDwrite + '" bgcolor="white">&nbsp;</td>');
    }
    else{
        document.write('<td width="' + anchoDwrite + '" bgcolor="black">&nbsp;</td>');
    }
    contadorDwrite++;
}

document.write('</tr>');
document.write("<br>");
document.write("<br>");
//EJERCICIO 4.19 BUCLES ANIDADOS
/*
let tamano = parseInt(prompt("Introduce el ancho y alto de la celda en píxeles:", "50"));
document.write('<table border="0" cellspacing="0" cellpadding="0">');
for (let fila = 1; fila <= 8; fila++) {
    document.write('<tr>');
    for (let columna = 1; columna <= 8; columna++) {
        let colorCasilla = ((fila + columna) % 2 === 0) ? 'black' : 'white';
        document.write('<td width="' + tamano + '" height="' + tamano + '" bgcolor="' + colorCasilla + '">&nbsp;</td>');
    }
    document.write('</tr>'); 
}
document.write('</table>');
document.write("<br>");*/
//BUCLES AVANZADOS
console.log('Dibujando rombo de 5 solo impares');
let n = 5; 
for (let i =1;i <=n; i+= 2) {
    let fila = "";
    let espacios = (n- i)/ 2;
    for (let j =0;j <espacios;j++) {
        fila += " ";
    }
    for (let k= 0;k< i;k++) {
        fila +="*";
    }
    console.log(fila);
}
for (let i= n- 2; i>=1; i-= 2) {
    let fila = "";
    let espacios = (n -i)/ 2;
    for (let j= 0; j <espacios;j++) {
        fila += " ";
    }
    for (let k =0; k< i;k++) {
        fila += "*";
    }
    console.log(fila);
}
//ORDENACION MANUAL ALGORITMO BURBUJA
console.log('ALGORITMO BURBUJA');
let arr=[5, 2, 1, 6, 9, 5];
let ns =arr.length;
for (let i = 0;i <n -1; i++) {
    for (let j = 0; j < ns-1-i; j++) {
        if (arr[j] >arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] =temp;
        }     
    }
}
console.log(arr);
//CRIBA NUMEROS EFICIENTES
console.log('CRIBA');
let N = 30;
let esPrimo = [];
for (let i = 0; i <= N; i++) {
    esPrimo[i] = true;
}

esPrimo[0] = false;
esPrimo[1] = false;


for (let i = 2; i * i <= N; i++) {
    if (esPrimo[i] === true) {
        for (let j = i * i; j <= N; j += i) {
            esPrimo[j] = false;
        }
    }
}
let primos = [];
let contadorCriba = 0;
for (let i = 2; i <= N; i++) {
    if (esPrimo[i] === true) {
        primos[contadorCriba] = i;
        contadorCriba++;
    }
}

console.log(primos); 



