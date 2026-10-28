/*
//ejercicio suma de numeros 
let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));

// Tu código aquí para mostrar suma, resta, multiplicación y división
document.write('SUMA: '+ (num1+num2 )+'<br>');
document.write('RESTA: '+(num1-num2)+'<br>');
document.write('MULTIPLICACION: '+(num1*num2)+'<br>');
document.write('DIVISION: '+(num1/num2)+'<br>');

//Ejercicio 2: Determinar par o impar
let numero = Number(prompt("Ingrese un número"));

// Usa un condicional para determinar si es par o impar
if(numero%2==0){
    document.write('<p>El numero es par </p><br>');
}
else{
    document.write('El numero es impar <br>');
}

//ejericicio 3: 
let a = Number(prompt("Número 1"));
let b = Number(prompt("Número 2"));
let c = Number(prompt("Número 3"));
// Escribe un condicional para encontrar el mayor
let mayor;
if(a>b){
    mayor =a;
}
else if(b>a && b>c){
    mayor =b;
}
else{
    mayor =c;
}
document.write('El mayor es: '+mayor);

//ejercicio 4
let num = Number(prompt("Ingrese un número"));
// Usa un bucle for para mostrar la tabla de multiplicar
document.write('<h1>TABLA DE MULTIPLICAR DEL NUMERO: '+num+'</h1><br>');
for(let i=1;i<=10;i++){
    document.write(num+'x'+i+'='+num*i+'<br>');

}
*/
//Ejercicio 5: Suma de números del 1 al N
let N = Number(prompt("Ingrese un número"));
let sumatotal=0;
// Usa un bucle for y una variable acumuladora para sumar
for(let i=1;i<N;i++){
    sumatotal+=i;
}
document.write('la sumatotal es: '+sumatotal);
