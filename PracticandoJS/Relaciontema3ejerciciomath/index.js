/* EJERCICIOS MATH */
//Ejercicios con Math en JavaScript
//Nivel 1 – Básicos
//Número absoluto
//Escribe una función que reciba un número y devuelva su valor absoluto usando Math.abs.
function valorAbsoluto(numero) {
  return Math.abs(numero);
}
//Redondeo simple
//Pide al usuario un número decimal y muestra:
let numeroDecimal = parseFloat(prompt("Introduce un número decimal: "));
//Su valor redondeado (Math.round)
console.log("Valor redondeado:", Math.round(numeroDecimal));
//Su redondeo por exceso (Math.ceil)
console.log("Redondeo por exceso:", Math.ceil(numeroDecimal));
//Su redondeo por defecto (Math.floor)
console.log("Redondeo por defecto:", Math.floor(numeroDecimal));
//Potencias y raíces
//Calcula ( 5^3 ) con Math.pow.
console.log("5^3 =", Math.pow(5, 3));
//Calcula la raíz cuadrada de 81 con Math.sqrt.
console.log("Raíz cuadrada de 81 =", Math.sqrt(81));
//Valor máximo y mínimo
//Dado el array [10, -5, 3, 99, 42], encuentra el número más grande y el más pequeño usando Math.max y Math.min.7
let numeros = [10, -5, 3, 99, 42];
let maximo = Math.max(...numeros);
let minimo = Math.min(...numeros);
console.log("Número máximo:", maximo);
console.log("Número mínimo:", minimo);
/*************************
 * **********************
 * NIVEL 2/ALEATORIEDAD
 * **********************
*/
//Número aleatorio entre 0 y 1
//Genera un número aleatorio con Math.random y muéstralo.
let numeroAleatorio = Math.random();
console.log("Número aleatorio entre 0 y 1:", numeroAleatorio);
//Dado virtual (1–6)
//Usa Math.random y Math.floor para simular el lanzamiento de un dado que devuelva un número del 1 al 6.
let dado = Math.floor(Math.random() * 6) + 1;
console.log("Resultado del dado:", dado);
//Número aleatorio en un rango
//Crea una función que reciba dos números (min, max) y devuelva un número entero aleatorio en ese rango.
function numeroAleatorioEnRango(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Número aleatorio entre 10 y 20:", numeroAleatorioEnRango(10, 20));
/*********************
 * ***************************************
 * ** NIVEL 3 TRIGONOMETRIA Y LOGARITMOS**
 * ***************************************
 */
//Seno y coseno
//Calcula el seno y coseno de 45° (recuerda que Math.sin y Math.cos trabajan en radianes, no en grados).
let grados = 45;
let radianes = grados * (Math.PI / 180);
console.log("Seno de 45°:", Math.sin(radianes));
console.log("Coseno de 45°:", Math.cos(radianes));
//Tangente y arco tangente
console.log("Tangente de 60°:", Math.tan(60 * (Math.PI / 180)));
console.log("Arco tangente de 1:", Math.atan(1) * (180 / Math.PI));
//Calcula la tangente de 60°.
//Convierte un valor usando Math.atan a grados.
//Logaritmos
let tangente = Math.tan(60 * (Math.PI / 180));
console.log("Tangente de 60°:", tangente);
let arcoTangente = Math.atan(1) * (180 / Math.PI);
console.log("Arco tangente de 1:", arcoTangente);
//Calcula el logaritmo natural de 10 (Math.log).
console.log("Logaritmo natural de 10:", Math.log(10));
//Calcula el logaritmo en base 10 de 100 (Math.log10).
console.log("Logaritmo en base 10 de 100:", Math.log10(100));