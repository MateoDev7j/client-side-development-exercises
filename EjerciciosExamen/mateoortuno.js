function ejercicio1(edad,autorizacion){
    if(edad>18 && autorizacion){
        console.log('Acceso permitido');
    }
    else if(edad>18 && !autorizacion){
        console.log('falta autorizacion')
    }
    else{
        console.log('Acceso denegado')
    }
}
// ejercicio 2
const numeros=[12,7,24,3,18,9,30];
let contadorMayores15=[];
let sumatotal=0;
function ejercicio2(numeros){
    let conteoMayor15=0;
    for(let i=0;i<=numeros.length;i++){

        sumatotal=sumatotal+numeros[i];
        console.log(sumatotal);
        if(numeros[i]%2==0){
            console.log('Pares: '+numeros[i]);
        }
        if(numeros[i]>15){
            contadorMayores15[conteoMayor15]=numeros[i];
            conteoMayor15++;
        }
        
    }
    console.log('Numeros mayores que 15:');
    console.log(contadorMayores15);
    console.log('Sumatoria de todos los numeros');
}
ejercicio2(numeros);
//EJERCICIO3
function ejercicio3(){
    let confirmado=true;
    do{
        let lanzamientoDado = Math.floor(Math.random() * 6) + 1;
        alert("Resultado del dado:"+ lanzamientoDado);
        confirmado=confirm('Lanzar denuevo');
    }while(confirmado);
}
ejercicio3();
//EJERCICIO4 
function ejercicio4(){
    let añoDnacimiento = parseInt(prompt('Ingresa año de nacimiento'));
    let fechaActual = new Date();
    getTime()

}
//EJERCICIO5 
function ejercicio5(){
    function obtenerCookie(nombre) {
    //Convertimos el string de cookies en un array cortando por los "; "
    let listaCookies = document.cookie.split(";");
    //Recorremos el array con un bucle para buscar nuestra cookie
    for (let i = 0; i < listaCookies.length; i++) {
        //Limpiamos los espacios en blanco que puedan quedar a los lados
        let cookieActual = listaCookies[i].trim();
        
        //Comprobamos si la cookie actual empieza con el nombre que buscamos seguido de "="
        if (cookieActual.indexOf(nombre + "=") === 0) {
            //Extraemos el valor cortando el string justo después del "="
            return cookieActual.substring(nombre.length + 1);
        }
    }
    //Si termina el bucle y no la encuentra, devuelve null
    return null;
}

}