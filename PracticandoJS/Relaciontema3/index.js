/*Ejercicios con Number en JavaScript
Nivel 1 – Conversión y propiedades básicas*/
//Conversión a número
//Convierte las cadenas "123", "3.14" y "abc" en números usando Number(), parseInt() y parseFloat(). Explica la diferencia en los resultados.
/*let numero1 =parseFloat("123");
let numero2=parseInt("3.14");
let numero3=Number("abc");


console.log(numero1+" "+numero2+" "+numero3+" ");


//Comprobar si es entero
//Escribe una función que reciba un valor y devuelva true si es un número entero (Number.isInteger) y false en caso contrario.
function comprobarEntero(a){
    return Number.isInteger(a);
}
console.log(comprobarEntero(numero2));


//Not a Number
//Prueba qué devuelve Number.isNaN con los valores: NaN, "hello", undefined, 0/0, parseInt("abc").
console.log(Number.isNaN(numero3));
let prueba=NaN;
let prueba2="hello";
console.log(Number.isNaN(prueba));
console.log(Number.isNaN(prueba2));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(0/0));


//Valores infinitos
//Divide 1 entre 0 y comprueba si el resultado es infinito (Number.isFinite).
console.log(Number.isFinite(1/0));


//NIVEL 2 – Métodos de instancia
//Número con decimales fijos
//Dado el número 3.141592, muéstralo con 2, 4 y 6 decimales usando .toFixed.
let numero = 3.141592;
console.log(numero.toFixed(2));
console.log(numero.toFixed(4));
console.log(numero.toFixed(6));
//Representación exponencial
//Convierte 123456 a notación científica con .toExponential(2).
let numero1 = 123456;
console.log(numero1.toExponential(2));
//Conversión a string con base
//Convierte el número 255 a:
let numero2= 255;
//Binario
console.log(numero2.toString(2));
//Octal
console.log(numero2.toString(8));
//Hexadecimal
console.log(numero2.toString(16));
//usando .toString(base).
//Precisión controlada
//Usa .toPrecision para representar 123.456789 con 4 y 7 cifras significativas.
let numero3= 123.456789;
console.log(numero3.toPrecision(4));
console.log(numero3.toPrecision(7));
//Nivel 3 – Retos aplicados
//Validador de números
//Escribe una función que reciba una cadena y devuelva:
cad="cadena";
function validarNumeros(cad){
    let esvalido=true;
    let numeroaValidar= Number(cad);
    if(Number.isNaN(numeroaValidar)){
        esvalido=false;
    }
    return esvalido;
}
console.log(validarNumeros(cad));
//Si es un número válido
//Si es entero o decimal
*/
/*
***********************************
EJERCICIOS CON STRING JAVASSCRIPT
***********************************
*/
//Nivel 1 – Manipulación básica
//Longitud de un string
//Declara la cadena "JavaScript" y muestra cuántos caracteres tiene usando .length.
let cadena="JavaScript";
console.log(cadena.length);
//Acceso a caracteres
//Obtén el primer y último carácter de la cadena "Hola mundo".
let cadena1 = "Hola mundo";
console.log(cadena1.length);
console.log(cadena1.charAt(0)+ " "+cadena1.charAt(9))
//Mayúsculas y minúsculas
//Convierte la frase "Programar es divertido" a:
let frase = "Programar es divertido";
console.log(frase);
//Mayúsculas (.toUpperCase())
console.log(frase.toUpperCase());
//Minúsculas (.toLowerCase())
console.log(frase.toLowerCase());
//Concatenación
//Une las cadenas "Hola" y "Mundo" usando el operador + y el método .concat.
let concat1 = "Hola";
let concat2 = "Mundo";
console.log(concat1+concat2+" y con concat es "+concat1.concat(concat2));
//Nivel 2 – Búsqueda y extracción
//Índices de caracteres
//Encuentra en qué posición aparece la primera y la última vez la letra "o" en "Hola mundo".
let holaMundo = "Hola Mundo";
console.log(holaMundo.indexOf("o"));
console.log(holaMundo.indexOf("o", 2));
//Subcadenas
//Dada la cadena "JavaScript es genial", extrae "JavaScript" y "genial" usando .substring y .slice.
let cadena2 = "JavaScript es genial";
console.log(cadena2.substring(0,10));
console.log(cadena2.substring(14,cadena2.length))
console.log(cadena2.slice(14));
//Reemplazo de texto
//Reemplaza "perro" por "gato" en la frase "El perro corre rápido".
let cadena3 = "El perro corre rapido";
console.log(cadena3.replace("perro", "gato"));
//Incluye o empieza con
//Verifica si la cadena "Frontend Developer":
let cadena4 = "Frontend Developer";
//Incluye "end" (.includes)
console.log(cadena4.includes("end")?"si":"no");
//Empieza con "Front" (.startsWith)
console.log(cadena4.startsWith("Front")?"si":"no");
//Termina con "per" (.endsWith)
console.log(cadena4.endsWith("per")?"si":"no");
//Nivel 3 – Transformaciones avanzadas
//Dividir un string
//Convierte la frase "rojo,verde,azul,amarillo" en un array usando .split.
let cadena5 = "rojo,verde,azul,amarillo";
let colores= cadena5.split(",");
console.log(colores[2]);
//Repetir texto
//Repite la palabra "Hola" 5 veces con .repeat.
let cadena6 = "Hola ";
console.log(cadena6.repeat(5));
//Eliminar espacios
//Elimina los espacios al inicio y al final de la cadena "   Hola mundo   " usando .trim.
let cadena7 = "     Hola mundo     ";
console.log(cadena7.trim());
//Padding
//Rellena el número "7" a la izquierda con ceros hasta tener "007" usando .padStart.
let numcadena = "7";
console.log(numcadena.padStart(3, "0"));
//Nivel 4 – Retos aplicados
//Contar vocales
//Escribe una función que cuente cuántas vocales hay en una cadena.
function contarVocales(cadena){
    let contarvocales= 0;
    const vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ"; 
    for(let i=0;i<cadenavocales.length;i++){
        let letraActual = cadena[i];
        if (vocales.includes(letraActual)) {
            contarvocales++; 
        }
        return contarvocales;
    }
}
//Palíndromo
//Crea una función que verifique si una palabra (ej. "radar") es un palíndromo.
let cadena8 = "radar";
function verificarPolindromo(cadena){
    for(let i=0;i>cadena8.length;i++){
        let letraActual= cadena[i];
        if(){

        }
        
    }
}
//Invertir string
//Invierte la cadena "JavaScript" para que quede "tpircSavaJ".
let cadena9= "tpircSavaJ";
let cadenaInvertida = cadena9.split("").reverse().join(""); 
console.log(cadenaInvertida);
//Capitalizar frase
//Escribe una función que convierta "hola mundo desde javascript" en "Hola Mundo Desde Javascript".
function convertirMayuscula(cadena){
    for(let i=0;i>cadena.length;i++){
        
    }
    return ;
}
//Ocultar parte de un string
//Dado un número de tarjeta "1234567812345678", muéstralo como "************5678".

//Contador de palabras
//Dada la frase "El lenguaje JavaScript es muy poderoso", cuenta cuántas palabras tiene