/* 
1. Diseña una web que cree un array llamado clase que contenga informacion de una clase.
cada elemento del array debe ser una tupla de 4 campos: nombre, edad, nota primer
trimestre, nota segundo trimestre y nota tercer trimestre (todos separads por comas).Por
ejemplo: clase[0]="Angel Garcia, 20, 6, 7, 10";
*/
var clase=["Angel Garcia, 20, 6, 7, 10","David Ortega, 19, 3, 5, 9"];

/*
2. Escribe una funcion que dado un número de estudiante y un trimestre, devuelva su nota.
sobreescribe esa funcion de tal modo que si no se indica el trimestre se devuelva la nota
media de los examenes 
*/
function devolverNota(numero,trimestre=null){
    let arrayDeAlumnostring="";
    let indiceTrimestre=0;
    let resultado="";
    arrayDeAlumnostring= clase[numero].split(",");
    if (trimestre!=null){
        switch(trimestre){
            case 1:
                indiceTrimestre=2;
                break;
            case 2:
                indiceTrimestre=3;
                break;
            case 3:
                indiceTrimestre=4;
                break;
            default:
                console.log('Has introducido un trimestre no valido');
                break;
        }
        resultado=+'La nota del alumno '+ arrayDeAlumnostring[0]+' trimestre '+trimestre+' es de: '+arrayDeAlumnostring[indiceTrimestre];
    }
    else{
        let mediaExamenes=0;
        mediaExamenes=+arrayDeAlumnostring[2];
        mediaExamenes=+arrayDeAlumnostring[3];
        mediaExamenes=+arrayDeAlumnostring[4];
        mediaExamenes= mediaExamenes/3;
        resultado="La nota media de los examenes es: "+mediaExamenes;
    }
    return resultado;
}
/* 
3. Escribe una funcion quqe devuelva la edad media de los alumnos de la clase
*/
function edadMedia(){
    let arrayDeAlumnostring="";
    let edadAlumno=0;
    for(alumno of clase){
        arrayDeAlumnostring=alumno.split(",");
        edadAlumno=+arrayDeAlumnostring[1];
        arrayDeAlumnostring=[];
    }
    return 'La edad media de los alumnos es de: '+Math.floor(edadAlumno/clase.length);
}
/*
4. A veces para elegir un estudiante al que preguntar en clase nesecitamos hacerlo al azar.
escribe una funcion que aleatoriamente vaya devolviendo el nombre de un estudiante cada vez
*/
function devolverNombreAleatorio(){
    let indiceNombreAleatorio=Math.floor(Math.random()*(clase.length-0)+0);
    let arrayDeAlumnostring="";
    let nombreAleatorio="";
    arrayDeAlumnostring=clase[indiceNombreAleatorio].split();
    nombreAleatorio=arrayDeAlumnostring[0];
    return 'Nombre aleatorio: '+ nombreAleatorio;
}
/*
5. Crear una funcion llamado paresImpares que cree un array de 100 numeros aleatorios del 1 al 1000, Una vez
creado, mostrar el contenido y despues organizarlo de forma que esten juntos, los elementos pares y los impares
Despues, volver a mostrar el array.
*/
function paresImpares(){
    let arrayNumerosAleatorios=new Array(100);
    for(let i=0;i<=arrayNumerosAleatorios.length-1;i++){
        arrayNumerosAleatorios[i]=Math.floor(Math.random()*(1000-1)+1);
    }
    console.log(arrayNumerosAleatorios);
    
    let arrayPares=arrayNumerosAleatorios.filter((elemento)=>elemento%2==0);
    let arrayImpares=arrayNumerosAleatorios.filter((elemento)=>elemento%2!=0);
    let arrayFusionado=[...arrayPares, ...arrayImpares];
    console.log(arrayFusionado);
}
paresImpares();
/*
6. Utiliza arrays para resolver el siguiente problema: Una empresa paga a sus vendedores en
base a comisiones. Los vendedores reciben $200 por semana, mas el 9% de sus ventas
brutas de esa semana, Por ejemplo, un vendedor que gana en total $5000 en ventas en una 
semana recibe $200 mas el 9 por ciento de $5000 , o sea un total de $650
Diseña una web que permita dar de alta a vendedores, introducir sus ventas e indique cual
seria su sueldo final
*/
arrayVendedores=[];
function darDeAlta(nombre){
    numeroInsertarVendedor= arrayVendedores.length;
    arrayVendedores[numeroInsertarVendedor]={'nombre':nombre,'deAlta':true, 'ventas': 0};
}
function introducirVentas(nombre, numeroVentas){
    const indice= arrayVendedores.findIndex(vendedor=>vendedor&&vendedor.nombre=='nombre');//some devuelve true o false
    if(indice!==-1){
        arrayVendedores[indice].ventas=+numeroVentas;
    }
    else{
        console.log('El vendedor no existe ');
    }
}
function mostrarSueldoFinal(nombre){
    const indice= arrayVendedores.findIndex(vendedor=>vendedor&&vendedor.nombre=='nombre');//some devuelve true o false
    let sueldoFinal=0;
    if(indice!==-1){
        sueldoFinal=+200+(arrayVendedores[indice].ventas*0.09);
        console.log('El sueldo final del empleado '+nombre+ 'es de $'+sueldoFinal);
    }
    else{
        console.log('El vendedor no existe ');
    }
}

/*
7. Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimension: 
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios.
*/
let arrayEjercicio7= new Array(10);
function establecerElementos0(){
    for(let i=0;i<=9;i++){
        arrayEjercicio7[i]=0;
    }
    return arrayEjercicio7;
}
console.log(establecerElementos0());
function anadir1(){
    let array=[];
    array=arrayEjercicio7.map(e=>e+1);
    return array;
}
console.log(anadir1());
function mostrarEspacios(){
    let cadena="";
    for(elemento of arrayEjercicio7){
        let i=0;
        cadena+= ` valor ${elemento} `;
        i++;
    }
    return cadena;
}
console.log(mostrarEspacios());
/*
8. Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento 
de dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los 
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los 
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000 
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.
*/
function lanzamientoDeDados(numeroDeLanzamientos){
    let dado1=0 ,dado2=0, sumadados=0, combinacion=false, combinaciones212=0,combinaciones7=0;
    for(let i=0;i<36000;i++){
        dado1= Math.floor(Math.random()*6)+1;
        dado2= Math.floor(Math.random()*6)+1;
        sumadados=dado1+dado2;
        if(sumadados===2 || sumadados===12){
            combinaciones212++;
        }
        else if(sumadados===7){
            combinaciones7++;
        }
    }
    return 'Las combinaciones de 2 y 12 son: '+combinaciones212+' y las de 7 son: '+combinaciones7;
}
console.log(lanzamientoDeDados());
/*
9. Mejora el ejercicio anterior para ademas mostrar una tabla bidimensional que muestre las
combinaciones (no solo la suma) que se han ido dando (Ahora si podemos usar arrays
bidimensionales)
*/
let arrayBidimensional;
/*
10. Una pequeña aerolínea acaba de comprar un programa para su nuevo sistema de reservas. 
Diseña la web encargada de asignar asientos en cada vuelo de avión de la aerolínea 
(capacidad: 10 plazas). Se debe pedir en primer lugar el tipo de asiento: "First" (asientos 1 al 5)
oy "Turista" (resto). Una vez escogido un asiento libre, se debe poder imprimir una 
tarjeta de embarque que indique la persona, el número de asiento y clase de éste (en una 
nueva ventana). Deben utilizarse arrays para solucionar el problema.
*/

/*
11. Utiliza una matriz de dos dimensiones para resolver el siguiente problema: Una empresa tiene cuatro vendedores (1 a 4) que venden cinco productos diferentes (1 a 5). Una vez al día, cada vendedor pasa en un estadillo con las ventas realizadas por producto. Cada hoja contiene
a) el número de vendedor,
b) el número de producto, y
c) el valor total de los productos vendidos ese día.
Así, cada vendedor pasa entre cero y cinco hojas de ventas por día. Supón que disponemos 
dee la información de todos los estadillos del último mes. Escribir un script que lee toda esta 
información de las ventas del mes pasado y resumir el total de ventas por vendedor por 
producto. Todos los totales deben estar almacenan en las ventas de matriz de dos 
dimensiones. Después de procesar toda la información para el mes pasado, mostrar los 
resultados en un formato de tabla XHTML, con cada una de las columnas que representan 
un vendedor y cada una de las filas que representan un producto diferente. Además se 
mostrará una última fila con las ventas acumuladas por vendedor, y una última columna con 
las ventas acumuladas por producto.
*/