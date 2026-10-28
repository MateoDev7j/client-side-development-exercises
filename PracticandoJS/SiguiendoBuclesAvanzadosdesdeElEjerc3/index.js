/*3. Criba de Eratóstenes (Primos eficientes)
Dado un número entero 
N
, genera todos los números primos menores o iguales a 
N
 aplicando el algoritmo histórico de la criba de Eratóstenes. */
let n=parseInt(prompt("Ingresa el limite n"));
let numeroActual;
const array =new Array(n+1).fill(true);;
array[1]=false;
array[0]=false;
for(let i=2;Math.sqrt(n)>=i;i++){
    numeroActual=i;
    //console.log(i);
    for(let j=i*i;j<=n;j+=i){
        array[j]=false;
    }
}
for(let o=0;o<=array.length-1;o++){
    if(array[o]==true){
        console.log(o);   
    }
}
