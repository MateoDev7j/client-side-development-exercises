//DEPURACION 5 Y 6
let nombre = "Ana"
console.log(nombre);//las comillas en ana
//2
let edad = 20;
console.log(edad);
//variable edad no existe en console.log
//3
let a = 5;
let b = 10;
if (a == b) {//doble igual if
  console.log("a es igual a b");
}
//4
let i = 0;
while (i > 5) {//bucle infinito
  console.log(i);
}
//5
function saludar() {
  return console.log("Hola " + nombre); //function sin return
}
saludar();
//6
let frutas = ["manzana", "banana", "pera"];
console.log(frutas[2]);//posicion 3 no existe
//7
let persona = { nombre: "Ana", edad: 25 };
console.log(persona.nombre.toUpperCase());//apellido no existe
//8
let a = 5;
let b = "10";
console.log(a + b);//no suma concatena 510
//9 
let nota = 8;
if (nota > 5);
{
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
//10
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i <= numeros.length; i++) {
  console.log(numeros[i]);
}
//1.2
let numero = 10;
if (numero > 5) {
  numero == 20;
}
console.log(numero);
//1.3
let ciudad = "Madrid";
console.log(Ciudad);
//1.4
let i = 1;
while (i > 5) {
  console.log(i);
  i++;
}
//1.5
let saludo = "Hola";
let nombre = "Luis";
console.log(saludo + , nombre);
//1.6
let dias = ["Lunes", "Martes", "Miércoles"];
console.log(dias[3]);
//1.7
let usuario = { nombre: "Ana", edad: 25 };
console.log(usuario.nombre.toLowerCasee());
//1.8
let edad = 18;
if (edad = 18) {
  console.log("Tienes 18 años");
}
//1.9
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++); {
  console.log(numeros[i]);
}
//1.10
let palabra = "javascript";
for (let i = 0; i <= palabra.length; i++) {
  console.log(palabra[i]);
}


//ejercicio 1 de 6.1
 function sumarPares(numeros) {
  let total = 0;
  
  for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] % 2 == 0) {//falta un igual en la condicional
      total += numeros[i];
    }
  }
  
  return total;
}

// Prueba de ejecución:
const misNumeros = [2, 7, 4, 11, 8];
console.log("Resultado obtenido:", sumarPares(misNumeros)); 
// Resultado esperado: 14 (2 + 4 + 8)
//2 6.1
const carrito = [
  { nombre: "Teclado", precio: 30, aplicarDescuento: false },
  { nombre: "Ratón", precio: 15, aplicarDescuento: true },
  { nombre: "Monitor", precio: 200, aplicarDescuento: true },
  { nombre: "Alfombrilla", precio: 10, aplicarDescuento: false }
];

function calcularTotalCarrito(lista) {
  let total = 0;
  
  for (let i = 0; i < lista.length; i++) {
    let producto = lista[i];
    let precioFinal = producto.precio;

    if (producto.aplicarDescuento) {
      precioFinal = precioFinal - (precioFinal * 0.10); // 10% de descuento
    }

    total = total + precioFinal;
  }

  return total;
}

console.log("Total del carrito:", calcularTotalCarrito(carrito));
// Revisa si el tipo de dato o las operaciones son las correctas.
//3 6.1
function procesarRegistro(nombre, edadTexto, esEstudiante) {
  // Conversión y validación de edad
  let edad = edadTexto;
  
  if (edad >= 18) {
    let mensajeAcceso = "Acceso concedido a mayores de edad";
  } else {
    let mensajeAcceso = "Acceso restringido a menores";
  }

  console.log(mensajeAcceso);

  // Verificación de descuento por estudiante
  if (esEstudiante == true) {
    console.log("Se ha aplicado el descuento de estudiante.");
  }

  // Recorrido de verificación de historial
  const historialIntentos = [1, 2, 3];
  for (let i = 0; i <= historialIntentos.length; i++) {
    console.log("Verificando intento número: " + historialIntentos[i]);
  }
}

// Caso de prueba
procesarRegistro("Ana", "20", "true");