//Nivel Básico – Fundamentos de Arrays
//Objetivo: practicar creación, acceso, modificación y recorrido de arrays.

//Crear un array con los nombres de 5 frutas e imprimir la primera y última.
let frutas= ['Platano','Manzana','Sandia','Mango','Cereza']
//Métodos: length, acceso por índice [ ].
//Añadir y eliminar elementos al inicio y al final del array.

//Métodos: push(), pop(), unshift(), shift().
console.log(frutas.push("ChesseBurger"));
console.log(frutas.pop());
console.log(frutas.unshift("JAMON"));
console.log(frutas.shift());
console.log(frutas);

//Recorrer un array e imprimir sus elementos.
//Métodos: 
//for, 
console.log('************************con for tradicional************************');
for(let i=0;i<=frutas.length-1;i++){
    console.log(frutas[i]);
}
console.log('************************con for of************************');
//for...of, 
for(let elemento of frutas){
    console.log(elemento);
}
//forEach().
console.log('************************con foreach()************************');
frutas.forEach(function (elemento, indice, array) { 
//para que el foreach funcione el elemento es obligatorio
//pero el indice y array es opcional
  console.log(elemento);
});
console.log('************************con foreach() Con funcion flecha************************');
frutas.forEach((fruta) => {
  console.log(fruta);
});
//ejemplo usando el indice que es util tambn
console.log('************************con foreach() Con funcion flecha y usando indice************************');
frutas.forEach((fruta,indice) =>{
  console.log(`Índice ${indice}: ${fruta}`);
});

//Buscar un elemento en un array de números.
//Métodos: 
// indexOf(), 
console.log('***Usamos el metodo indexOf y buscamos Platano');
console.log(frutas.indexOf('Platano'));
//Devuelve la posicion del array si existe, si no existe devuelve -1
// includes().
console.log('***Usamos el metodo includes y buscamos Platano');
console.log(frutas.includes('Platano'));//tambien le puedes pedir desde que posicion buscar luego del valor en ambos metodos
//Devuelve true o false si esta o no esta
//Concatenar arrays y mostrar el resultado.
//Métodos: 
// concat()
console.log("***********USAMOS EL METODO CONCAT un array y hola**********");
const masfrutas= ["Frutilla","Granada"];
const combinado= frutas.concat(masfrutas,"hola");
console.log(combinado);
// spread operator ....
console.log("***********USAMOS EL METODO SPREAD ... **********");
//la ventaja del spread es que podemos añadir elementos como arrays o objetos en el orden
//que nosotros queramos
const compraSemanal=["Leche","Carne",...frutas,"Huevos"];
console.log(compraSemanal);

//Nivel Intermedio – Transformación y Filtrado
//Objetivo: aprender a transformar, filtrar y ordenar arrays.

//Duplicar los valores de un array numérico.
//Método: map().
console.log("USAMOS MAP PARA DUPLICAR LOS VALORES DE UN ARRAY NUMERICO");
const arrayNumerico=[1,2,3,4,5,6];
console.log(arrayNumerico);
arrayDuplicado=arrayNumerico.map((e)=>e*2);
//se usa mas para aplicar una funcion a cada elemento del array
//si tuviera una funcion duplicar no nesecito poner elmento seria asi:
// arrayDuplicado=arraynumerico.map(duplicar);
console.log(arrayDuplicado);
//Filtrar los números pares de un array.
//Método: filter().
console.log("USAMOS FILTER PARA SOLO OBTENER PARES DE UN ARRAY NUMERICO");
console.log(arrayNumerico);
const soloPares= arrayNumerico.filter(e=>e%2===0);
console.log(soloPares);
//Filter funciona similar que map, solo que crea un array nuevo seleccionando 
//no modifica todos si no que descarta posiciones q den false

//Sumar todos los valores de un array.
//Método: reduce().
console.log("USAMOS reduce PARA SOLO OBTENER la suma total DE UN ARRAY NUMERICO");
const total=arrayNumerico.reduce((acomulador, elemento)=>{
    //acomulador sera la variable donde se guarde cada elemento y se sume o concatene
    //elemento el elemento que esta iterando
    return acomulador+elemento;
},0);//0 es desde que numero se inicializa acomulador
console.log(total);
//Ordenar un array de nombres alfabéticamente y en orden inverso.
//Métodos: sort(),
console.log("USAMOS sort PARA ORDENAR UN ARRAY DE NOMBRES");
const nombres=['Juan','Ana','Marcos','Zara'];
console.log(nombres);
const nombresOrdenado=nombres.sort();
console.log(nombresOrdenado);
// reverse().
const nombresOrdenadoReversa= nombresOrdenado.reverse();
console.log(nombresOrdenadoReversa);
//Convertir un array en una cadena de texto separada por comas.
//Método: join().

console.log("USAMOS join PARA CONVERTIR EN STRING UN ARRAY");
const arrayCadena=["Hola","Buenos dias"];
console.log(arrayCadena);
const unicoPorComas=arrayCadena.join(",");
console.log(unicoPorComas);
//Dividir una cadena de texto en un array.
//Método: split().
let cadena = "Hola como estan";
console.log(cadena);
const cadenaArray=cadena.split(" ");
console.log(cadenaArray);
// Nivel Avanzado – Manipulación y Combinaciones
//Objetivo: combinar métodos y resolver problemas prácticos.

//Eliminar duplicados de un array.
//Métodos: filter(), indexOf(), o Set.
const arrayDuplicaos=['javier','javier','samuel','marcos','jorge','jorge'];
console.log(arrayDuplicaos);
const arraySinDuplicados=arrayDuplicaos.filter((elemento, indice, array)=>{console.log(array);
                                                            return array.indexOf(elemento)===indice});
//en filter tambien nos podemos traer el elemento a iterar, el indice de posicion
//y el array completo
console.log(arraySinDuplicados);
console.log('Probamos con set');
console.log(arrayDuplicaos);
const arraySinDuplicadosYset= new Set(arrayDuplicaos);
//SET es para almacenar valores, no admite duplicados
const arrayLimpio= [...arraySinDuplicadosYset];
console.log(arrayLimpio);

//Encontrar el número mayor y menor en un array.
//Métodos: Math.max(), Math.min(), spread operator ....
const arrayNumMayorMenor =[1,2,3,4,5,6,7,8,9,10];
console.log('Conseguimos el mayor y menor de un array con metodos Math.max() y Math.min()');
const numMayorDelArray = Math.max(...arrayNumMayorMenor);
console.log(`El numero mayor del array es: ${numMayorDelArray}`);
const numMenorDelArray= Math.min(...arrayNumMayorMenor);
//el operador spread nos permite almacenar los numeros del array en el math max
//porque Math.max o min funcionan por numeros separados por comas ,
//no entiende arrays sin ... devolveria NaN
console.log(`El numero mayor del array es: ${numMenorDelArray}`);
//Aplanar un array de arrays.
//Ejemplo: [[1,2],[3,4]] → [1,2,3,4]
//Método: flat().
console.log('Mostramos array bidimensional y lo aplanamos con flat()');
const arrayBidimensional=[[1,2],[3,4]];
console.log(arrayBidimensional);
const arrayAplanado=arrayBidimensional.flat(Infinity);
console.log(arrayAplanado);
//si tenemos muchos arrays de arrays el infinity lo comvierte super plano
//si tuvieramos [[[2,3][1,2],[1]] flat(2) devuelve [[2,3][1]]

//Contar cuántas veces aparece un elemento en un array.
//Métodos: reduce() o forEach().
console.log('Contamos cuantas veces aparece un elemento en un array Con foreach()');
let contadorJavier=0
arrayDuplicaos.forEach((nombre,indice,array)=>{
  if(nombre=='javier'){
    contadorJavier++;console.log(contadorJavier)}});
//const arrayDuplicaos=['javier','javier','samuel','marcos','jorge','jorge'];

console.log('Contamos cuantas veces aparece un elemento en un array con reduce()');
let contadorJorge=0;
arrayDuplicaos.reduce((acomulador,elemento,array)=>{
  if(elemento=='jorge'){return acomulador+1;return console.log(acomulador);}
},0);
//Transformar un array de objetos en un array de una sola propiedad.
//const personas = [
//  { nombre: "Ana", edad: 23 },
//  { nombre: "Luis", edad: 30 }
//];
// Resultado esperado: ["Ana", "Luis"]
//Método: map().
const personas = [
  { nombre : "Ana", edad: 23},
  { nombre : "Luis", edad: 30}
]
console.log(personas);
const arrayNuevoPersonas=personas.map(persona=>persona.nombre);
console.log(arrayNuevoPersonas);
//Combinar dos arrays (por ejemplo, de nombres y edades) en uno de objetos.
//Método: map().
const nombresCombinar=['Ana','Luis'];
const edadesCombinar=[23,30];
const arrayCombinado=nombresCombinar.map((elemento,indice,array)=>{
  return {
    nombre: elemento,
    edad: edadesCombinar[indice]
  }
});
console.log(arrayCombinado[0]);
console.log(arrayCombinado[1]);


//Ordenar un array de objetos según una propiedad.
//const usuarios = [
//  { nombre: "Ana", edad: 25 },
//  { nombre: "Luis", edad: 30 },
//  { nombre: "Marta", edad: 20 }
//];
//usuarios.sort((a, b) => a.edad - b.edad);
console.log('***************Ordenamos un arraay de objetos segun una propiedad *****************');
const usuarios1 = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 20 }
];
usuarios1.sort((a, b) => a.edad - b.edad);
for(elemento of usuarios1){
  console.log(elemento);
}
//Extraer elementos únicos y ordenarlos de menor a mayor.
//Métodos: Set, sort().
console.log('*******Extraemos elementos unicos y los ordenamos de menor a mayor');
const arrayExtraerUnicos=[41,2,22,2,3,24,75,6,7,7,8,9,10];
console.log(arrayExtraerUnicos);
const elementosUnicos= new Set(arrayExtraerUnicos);
const arraySoloUnicos=[...elementosUnicos];
console.log(arraySoloUnicos);
console.log('Los ordenamos de menor a mayor');
const arraySoloUnicosOrdenado = arraySoloUnicos.sort((a,b)=>a-b);
console.log(arraySoloUnicosOrdenado);
//Usar encadenado de metodos: Dado un array de numeros, debes calcular la suma de los cuadrados de los numeros pares.
//Metodos: map(), filter(), reduce() en cadena
const arrayNumerosEncadenado=[15,1,20,22,78,5,5];
const arrayNumerosEncadenadoMetodo=arrayNumerosEncadenado.filter((elemento)=>{
  return elemento%2==0;
}).map((elemento, indice, array)=>{
  return Math.pow(elemento,2);
}).reduce((acomulador,elemento)=>{
  return acomulador+elemento;
},0);
console.log(arrayNumerosEncadenado);
console.log(arrayNumerosEncadenadoMetodo);
