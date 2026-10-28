//Nivel 1 – Conversión y propiedades básicas
let str1 = "123";
let str2 = "3.14";
let str3 = "abc";
console.log(Number(str1), parseInt(str1), parseFloat(str1));     // 123, 123, 123
console.log(Number(str2), parseInt(str2), parseFloat(str2));     // 3.14, 3, 3.14
console.log(Number(str3), parseInt(str3), parseFloat(str3));     // NaN, NaN, NaN

//2. Comprobar si es entero
//Función nativa directa utilizando la validación de tipo solicitada:
console.log('Comprobamos si es entero');
function esEntero(valor) {
    return Number.isInteger(valor);
}
// Pruebas:
console.log(esEntero(10));    // true
console.log(esEntero(4.5));   // false
console.log(esEntero("5"));   // false (es un string, no un número entero)

//3. Not a Number (NaN)
//Analizamos el comportamiento estricto de Number.isNaN() con los casos propuestos:
console.log('Verificamos el metodo Number.isNaN()');
console.log(Number.isNaN(NaN));               //true (Es el valor NaN real)
console.log(Number.isNaN("hello"));          //false (Es un string, no es de tipo Number con valor NaN)
console.log(Number.isNaN(undefined));         //false (Es de tipo undefined)
console.log(Number.isNaN(0 / 0));           //true  (Matemáticamente una indeterminación 0/0 da como resultado NaN)
console.log(Number.isNaN(parseInt("abc")));   //true (Como parseInt("abc") devuelve NaN, la comprobación es verdadera)

//4. Valores infinitos
console.log('Comprobamos valores finitos con Number.isFinite()');
//Al realizar una división por cero en JavaScript, el motor del lenguaje no lanza un error, sino que genera un valor especial:
let resultado = 1 / 0; 
console.log(resultado); //Imprime:Infinity
//Comprobamos si es finito:
console.log(Number.isFinite(resultado));//false


//Número con decimales fijos (.toFixed())
//El método .toFixed(n) da formato a un número usando notación de punto fijo, donde n es la cantidad de decimales. Importante: Este método redondea el número si es necesario y devuelve un string.
let pi = 3.141592;
console.log('Comprobamos el .toFixed()');
console.log(pi.toFixed(2));//"3.14"(Redondea a 2 decimales)
console.log(pi.toFixed(4));//"3.1416"(Redondea a 4 decimales: el 5 sube a 6 por el 9 posterior)
console.log(pi.toFixed(6));//"3.141592"

//2.Representación exponencial (.toExponential())
//Este método devuelve una cadena que representa al número en notación científica (exponencial). El parámetro indica cuántos dígitos queremos después del punto decimal.
console.log('Comprobamos el .toExponential()');
let num = 123456;
console.log(num.toExponential(2)); // "1.23e+5"


//3. Conversión a string con base (.toString(base))
//Cuando pasas un argumento numérico al método .toString(), este cambia la base numérica (sistema de numeración) del resultado antes de convertirlo en cadena de texto.
let decimal = 255;
console.log('Conversion a string con base .toString(base)');
console.log(decimal.toString(2));  //"11111111" (Binario - Base 2)
console.log(decimal.toString(8));  //"377"      (Octal - Base 8)
console.log(decimal.toString(16)); //"ff"    (Hexadecimal - Base 16)


//Precisión controlada (.toPrecision())
//A diferencia de .toFixed(), que cuenta únicamente los decimales, .toPrecision(n) cuenta el número total de dígitos significativos (tanto de la parte entera como de la decimal combinadas). También devuelve un string.
let granDecimal = 123.456789;
console.log('probamos el .toPresicion() Devuelve un string controlando el total de cifras parecido a tofixed');
console.log(granDecimal.toPrecision(4)); // "123.5"   (4 cifras en total: 3 enteras y 1 decimal redondeada)
console.log(granDecimal.toPrecision(7)); // "123.4568" (7 cifras en total: 3 enteras y 4 decimales redondeadas)


//Validador de números
//Escribe una función que reciba una cadena y devuelva:
//Si es un número válido
//Si es entero o decimal
console.log('Retos aplicados nivel 3');
function validarNumero(cadena) {
    //Convertimos a número usando Number() para analizar la cadena completa
    let numero = Number(cadena);
    //Si la conversión da NaN o la cadena está vacía/solo tiene espacios, no es un número válido
    if (Number.isNaN(numero) || cadena.trim() === "") {
        return "No es un número válido";
    }
    //Si pasó la validación, comprobamos si es entero o decimal
    if (Number.isInteger(numero)){
        return "Es un número válido: Entero";
    } else{
        return "Es un número válido: Decimal";
    }
}
console.log(validarNumero("123"));      // "Es un número válido: Entero"
console.log(validarNumero("3.1416"));   // "Es un número válido: Decimal"
console.log(validarNumero("abc"));      // "No es un número válido"
console.log(validarNumero("45.0"));     // "Es un número válido: Entero" (JavaScript evalúa 45.0 como entero)
console.log(validarNumero("   "));      // "No es un número válido"
console.log('*****MATH*************');

//Nivel 1 – Básicos Número absoluto
function obtenerAbsoluto(numero) {
    return Math.abs(numero);
}
//ejemplo obtenerAbsoluto(-15) ->15

//Redondeo simple
//let numeroUsuario = parseFloat(prompt("Introduce un número decimal:"));
let numeroUsuario=14.1;
console.log("Redondeo común (Math.round):", Math.round(numeroUsuario));
console.log("Por exceso / arriba (Math.ceil):", Math.ceil(numeroUsuario));
console.log("Por defecto / abajo (Math.floor):", Math.floor(numeroUsuario));

//Potencias y raíces
let potencia = Math.pow(5, 3);
console.log("5 elevado a 3 es:", potencia); // 125
let raiz = Math.sqrt(81);
console.log("La raíz cuadrada de 81 es:", raiz); // 9


//Valor máximo y mínimo
//Para pasar un array de forma nativa a Math.max o Math.min sin usar métodos modernos, recurrimos al operador de propagación (spread operator ...):
let valores = [10, -5, 3, 99, 42];
let maximo = Math.max(...valores);
let minimo = Math.min(...valores);
console.log("El número más grande es:", maximo); // 99
console.log("El número más pequeño es:", minimo); // -5

//Nivel 2 – Aleatoriedad
//Número aleatorio entre 0 y 1
let aleatorioBase = Math.random();
console.log("Número entre 0 y 1 (no incl.):", aleatorioBase);
//Math.floor(Math.random() * (max - min + 1) + min);

//Dado virtual (1–6)
// Math.random() * 6 da un rango de [0, 5.999...]. 
// Math.floor() lo baja a enteros [0, 5] y el + 1 cambia el rango a [1, 6].
let lanzamientoDado = Math.floor(Math.random() * 6) + 1;
console.log("Resultado del dado:", lanzamientoDado);


//Número aleatorio en un rango
function aleatorioEnRango(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Ejemplo: aleatorioEnRango(10, 20) -> Devuelve un entero entre 10 y 20 incluidos.
console.log('numero aleatorio entre 10 y 20 es : '+aleatorioEnRango(10,20));


//Nivel 3 – Trigonometría y logaritmos Seno y coseno
//Las funciones trigonométricas en JavaScript exigen que el ángulo sea ingresado en radianes. Convertimos multiplicando por Math.PI / 180:
let grados = 45;
let radianes = grados * (Math.PI / 180);
let seno = Math.sin(radianes);
let coseno = Math.cos(radianes);
console.log("Seno de 45°:", seno);   // ~0.7071
console.log("Coseno de 45°:", coseno); // ~0.7071


//Tangente y arco tangente
// 1. Tangente de 60°
let radianes60 = 60 * (Math.PI / 180);
let tangente = Math.tan(radianes60);
console.log("Tangente de 60°:", tangente); // ~1.7320
// 2. Arco tangente convertido a grados
let valorAtan = Math.atan(1); // Devuelve el ángulo en radianes
let gradosAtan = valorAtan * (180 / Math.PI);
console.log("Arco tangente de 1 en grados:", gradosAtan); //45°


//Logaritmos
let logNatural = Math.log(10);
console.log("Logaritmo natural (base e) de 10:", logNatural); // ~2.3025


//Nivel 4 – Retos aplicados juego: adivina el número
/*
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intento;
let acertado = false;
while (!acertado) {
    intento = parseInt(prompt("Adivina el número secreto (entre 1 y 100):"));
    
    if (isNaN(intento)) {
        alert("Por favor, introduce un número válido.");
    } else if (intento < numeroSecreto) {
        alert("El número secreto es MAYOR.");
    } else if (intento > numeroSecreto) {
        alert("El número secreto es MENOR.");
    } else {
        alert("¡Felicidades! Has acertado el número.");
        acertado = true;
    }
}
*/


//Distancia entre dos puntos
function calcularDistancia(x1, y1, x2, y2) {
    let diferenciaX = x2 - x1;
    let diferenciaY = y2 - y1;
    // Elevamos al cuadrado de forma tradicional con Math.pow y extraemos raíz con Math.sqrt
    return Math.sqrt(Math.pow(diferenciaX, 2) + Math.pow(diferenciaY, 2));
}
console.log(calcularDistancia(0,0,3,4));
// Ejemplo de prueba: calcularDistancia(0, 0, 3, 4) -> Devuelve 5


//Simulación de ruleta
// Una ruleta tradicional incluye los números del 0 al 36 (37 números totales)
let numeroGanador = Math.floor(Math.random() * 37);
console.log("El número ganador de la ruleta es el:", numeroGanador);



//Generador de contraseñas simples
//Como las directrices prohíben el uso de .repeat(), construimos el string iterando manualmente con un bucle for convencional:
function generarContrasena() {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let contrasena = "";
    let longitudLetras = caracteres.length;
    for (let i = 0; i < 8; i++) {
        //Obtenemos un índice aleatorio válido para la cadena de caracteres
        let indiceAleatorio = Math.floor(Math.random() * longitudLetras);
        //Concatenamos el carácter extraído en la posición aleatoria
        contrasena += caracteres.charAt(indiceAleatorio);
    }
    return contrasena;
}

console.log("Tu nueva contraseña aleatoria es:", generarContrasena());


// EJERCICIOS DATE 
console.log('EJERCICIOS CON DATE');
//Nivel 1 – Creación y lectura de fechas
//Fecha actual
let ahora = new Date();
console.log("Fecha actual:", ahora);


//Fecha específica
// Ejemplo: 9 de mayo de 2006 -> El mes 4 es mayo
let miNacimiento = new Date(2006, 4, 9);
console.log("Fecha de nacimiento:", miNacimiento);


//Obtener partes de una fecha
console.log('************Obtenemos partes de una fecha************');
let fecha = new Date();
console.log("Año:", fecha.getFullYear());
console.log("Mes (0-11):", fecha.getMonth());
console.log("Día del mes (1-31):", fecha.getDate());
console.log("Día de la semana (0=Dom, 6=Sáb):", fecha.getDay());
console.log("Hora:", fecha.getHours());
console.log("Minutos:", fecha.getMinutes());
console.log("Segundos:", fecha.getSeconds());


//Convertir a string
console.log('Convertimos a string fecha actual: ');
let fechaActual = new Date();
console.log("Solo fecha legible:", fechaActual.toDateString());
console.log("Solo hora legible:", fechaActual.toTimeString());


//Nivel 2 – Operaciones con fechas
//Sumar días
function sumarDias(fechaOriginal, dias) {//fechaOriginal tiene que ser tipo date
    let copiaFecha = new Date(fechaOriginal.getTime());//getTime nos da milisegundos desde 1970...
    copiaFecha.setDate(copiaFecha.getDate() + dias);
    return copiaFecha;
}
console.log('Sumamos dos dias a la fecha actual');
console.log(sumarDias(fechaActual,2));



//Diferencia entre dos fechas
let hoy = new Date();
// 11 es diciembre
let finDeAno = new Date(hoy.getFullYear(), 11, 31); 
let diferenciaMilisegundos = finDeAno.getTime() - hoy.getTime();
// Convertimos milisegundos a días enteros
let diasFaltantes = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

console.log(`Faltan ${diasFaltantes} días para el 31 de diciembre.`);



//Comparar fechas
function compararFechas(fechaA, fechaB) {
    if (fechaA.getTime() < fechaB.getTime()) {
        console.log("La primera fecha es anterior.");
    } else if (fechaA.getTime() > fechaB.getTime()) {
        console.log("La primera fecha es posterior.");
    } else {
        console.log("Ambas fechas son idénticas.");
    }
}


//Primer día del mes
function primerDiaDelMes(anio, mes) {
    let primerDia = new Date(anio, mes, 1);
    return primerDia.getDay(); // 0 = Domingo, 1 = Lunes, etc.
}


//Nivel 3 – Formateo y zonas horarias
//ISO string
console.log('Formateamos con toISOString()');
console.log("Formato ISO:", new Date().toISOString());


//Fecha local y UTC
let f = new Date();
console.log("Hora local:", f.toString());
console.log("Hora UTC:", f.toUTCString());


//Formateo personalizado
//Al no poder usar métodos avanzados de strings, rellenamos los ceros a la izquierda mediante operadores ternarios:
function formatearFecha(date) {
    let dia = date.getDate();
    let mes = date.getMonth() + 1;//ajustamos base 0
    let anio = date.getFullYear();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();
    //rellenandow manual de ceros a la izquierda en una sola línea
    let dStr = dia < 10 ? '0' + dia : dia;
    let mStr = mes < 10 ? '0' + mes : mes;
    let hStr = hora < 10 ? '0' + hora : hora;
    let minStr = minutos < 10 ? '0' + minutos : minutos;
    let sStr = segundos < 10 ? '0' + segundos : segundos;
    return dStr + "/" + mStr + "/" + anio + " " + hStr + ":" + minStr + ":" + sStr;
}

//Internacionalización
let hoyIntl = new Date();
console.log("Español (España):", new Intl.DateTimeFormat('es-ES').format(hoyIntl));
console.log("Inglés (EE.UU.):", new Intl.DateTimeFormat('en-US').format(hoyIntl));
console.log("Japonés:", new Intl.DateTimeFormat('ja-JP').format(hoyIntl));



//Nivel 4 – Retos aplicados
//Cuenta atrás
let hoyCuenta = new Date();
let anoNuevo = new Date(hoyCuenta.getFullYear() + 1, 0, 1);
let msFaltantes = anoNuevo.getTime() - hoyCuenta.getTime();
let dias = Math.floor(msFaltantes / (1000 *60*60* 24));
let horas = Math.floor((msFaltantes %(1000 * 60*60* 24))/(1000* 60 * 60));
let minutos = Math.floor((msFaltantes %(1000 * 60 * 60))/(1000* 60));
let segundos = Math.floor((msFaltantes %(1000 *60)) /1000);

console.log(`Faltan: ${dias}d ${horas}h ${minutos}m ${segundos}s para Año Nuevo.`);



//Edad exacta
function calcularEdadExacta(fechaNacimiento) {
    let hoyActual = new Date();
    let anios = hoyActual.getFullYear() - fechaNacimiento.getFullYear();
    let meses = hoyActual.getMonth() - fechaNacimiento.getMonth();
    let dias = hoyActual.getDate() - fechaNacimiento.getDate();
    //si los días son negativos, pedimos prestados días del mes anterior
    if (dias < 0) {
        meses--;
        //obtenemos los días totales del mes anterior
        let ultimoDiaMesAnterior = new Date(hoyActual.getFullYear(), hoyActual.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
    }
    
    //sii los meses son negativos, ajustamos el año
    if (meses < 0) {
        anios--;
        meses += 12;
    }
    
    return { anios: anios, meses: meses, dias: dias };
}
console.log(calcularEdadExacta(miNacimiento));


//Calendario simple
function generarCalendario(anio, mes) {
    let fechas = [];
    let contador = 0;
    let fechaIteracion = new Date(anio, mes, 1);
    //iteramos mientras sigamos dentro del mismo mes
    while (fechaIteracion.getMonth() === mes) {
        fechas[contador] = new Date(fechaIteracion.getTime());
        contador++;
        //avanzamos al siguiente día automáticamente
        fechaIteracion.setDate(fechaIteracion.getDate() + 1);
    }
    
    return fechas;
}
// Ejemplo: generarCalendario(2025, 8); // Septiembre 2025 (mes 8)



//Próximo viernes 13
function buscarProximoViernes13() {
    let fechaBusqueda = new Date(); // Fecha actual del sistema
    
    while (true) {
        // Si el día del mes es 13, comprobamos si cae viernes
        if (fechaBusqueda.getDate() === 13) {
            if (fechaBusqueda.getDay() === 5) { // 5 equivale a Viernes
                return new Date(fechaBusqueda.getTime());
            }
        }
        // Avanzamos día a día
        fechaBusqueda.setDate(fechaBusqueda.getDate() + 1);
    }
}

console.log("El próximo viernes 13 será el:", buscarProximoViernes13().toDateString());

//Enunciado del Proyecto: Reloj Digital
//🎯 Objetivo
//El objetivo de este mini-proyecto es practicar el uso del objeto Date en JavaScript, comprendiendo cómo trabajar con fechas y horas en tiempo real.
//📌 Descripción
//Vas a desarrollar una aplicación web sencilla que muestre un reloj digital en vivo.\
//📂 Requisitos
//Mostrar la hora actual en tiempo real, actualizándose cada segundo.
//Mostrar la fecha actual en un formato legible (ejemplo: lunes, 25 de septiembre de 2025).
//🔧 Pistas técnicas
//Usa el objeto Date y sus métodos principales:
//new Date()
//getHours(), getMinutes(), getSeconds()
//toLocaleDateString() y toLocaleString()
//Usa setInterval() para actualizar el reloj cada segundo.
//Diseña la interfaz con HTML y CSS para que sea clara y atractiva, como en el siguiente ejemplo:
//image
//⭐ Retos adicionales (opcionales)
//Personalizar el diseño del reloj con estilos más creativos.
// 1. Creamos la función que se encargará de actualizar el reloj
function actualizarReloj() {
    //Creamos la fecha DENTRO para que obtenga la hora exacta en cada segundo
    let ahora = new Date();
    //Formateamos la hora (puedes usar tu lógica o toLocaleTimeString)
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    //Truco extra: Añadir un cero a la izquierda si el número es menor de 10 (ej: "05" en vez de "5")
    if (horas < 10) horas = '0' + horas;
    if (minutos < 10) minutos = '0' + minutos;
    if (segundos < 10) segundos = '0' + segundos;
    let textoHora = `${horas} : ${minutos} : ${segundos}`;
    //Modificamos el HTML directamente desde dentro de la función
    document.getElementById('relojDate').innerHTML = '<span>' + textoHora + '</span>';
}
//Llamamos a setInterval pasando el NOMBRE de la función (sin paréntesis)
//Esto le dice a JavaScript: "Ejecuta esta función cada 1000 milisegundos"
setInterval(actualizarReloj, 1000);
//Opcional: Llamamos a la función una vez al principio 
//para que el reloj no aparezca vacío durante el primer segundo de carga
actualizarReloj();
/* METODOS IMPORANTES PARA VERIFICAR 
if("geolocation" in navigator){
  console.log("El navegador soporta Geolocalización");
}else{
  console.log("No soportado. Usa un navegador más moderno.");
}
//Sintaxis: navigator.geolocation.getCurrentPosition(exito, error, opciones);
navigator.geolocation.getCurrentPosition(
  (position) => {
    // 1. Callback de Éxito: Nos devuelve el objeto 'position'
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const precision = position.coords.accuracy; // En metros
    console.log(`Latitud: ${lat}, Longitud: ${lon}, Precisión: ${precision}m`);
  },
  (error) => {
    // 2. Callback de Error: Manejo de denegación o fallos (¡Súper importante para examen!)
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log("El usuario no dio permiso para acceder a su ubicación.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("La información de ubicación no está disponible.");
        break;
      case error.TIMEOUT:
        console.log("Se agotó el tiempo de espera para obtener la ubicación.");
        break;
    }
  },
  {
    // 3. Objeto de Opciones (Opcional)
    enableHighAccuracy: true, // Fuerza a usar GPS en lugar de antenas/Wi-Fi (gasta más batería)
    timeout: 5000,            // Tiempo máximo de espera en milisegundos (5 segundos)
    maximumAge: 0             // No usar ubicaciones guardadas en caché, pedir una fresca
  }
);
3. Métodos 2 y 3: watchPosition() y clearWatch() (Tiempo Real)
Estos dos métodos trabajan en pareja, igual que el setInterval y clearInterval que acabas de practicar con el reloj.
• watchPosition() vigila la ubicación y ejecuta la función de éxito cada vez que el dispositivo detecta un cambio de posición (ideal para apps de running o mapas en movimiento) MDN Web Docs.
• clearWatch() detiene el rastreo para que el dispositivo deje de consumir batería MDN Web Docs.
javascript
// 1. Iniciamos el rastreo y guardamos su ID único en una variable
const idRastreo = navigator.geolocation.watchPosition(
  (position) => {
    console.log(`Nueva ubicación: ${position.coords.latitude}, ${position.coords.longitude}`);
  },
  (error) => {
    console.log("Error en el rastreo: ", error.message);
  },
  { enableHighAccuracy: true }
);
// 2. Cuando el usuario decida parar el rastreo (ej: al pulsar un botón "Detener")
function detenerRastreo() {
  navigator.geolocation.clearWatch(idRastreo);
  console.log("Rastreo detenido con éxito.");
}
 */
console.log('************COKIES****************');
//Ejercicios de JavaScript: Cookies
//Introducción
//En estos ejercicios vamos a trabajar con cookies en JavaScript.
//Una cookie permite almacenar pequeños datos en el navegador del usuario para poder recuperarlos posteriormente.
//Durante los ejercicios aprenderás a:
//Crear cookies.
//Consultar cookies.
//Modificar cookies.
//Eliminar cookies.
//Establecer una fecha de caducidad.
//Utilizar cookies junto con HTML y JavaScript.
//Crear una pequeña aplicación que recuerde información del usuario.

//Ejercicio 1 — Crear una cookie
//Crea una cookie llamada nombre cuyo valor sea tu nombre.
//Después muestra por consola el contenido de:
//document.cookie
//Objetivo
//Comprobar cómo se crea una cookie y cómo podemos consultar las cookies almacenadas por nuestra página.
//Comprobación
//Abre las herramientas de desarrollador del navegador y busca dónde se almacenan las cookies de la página.
//document.cookie="nombre = mateo";


//Ejercicio 2 — Crear varias cookies
//Crea las siguientes cookies:
//nombre = tu nombre
//document.cookie="nombre = mateo";
//edad = tu edad
document.cookie="edad = 20";
//ciudad = tu ciudad
document.cookie="ciudad = granada";
//Después muestra por consola todas las cookies.
//El resultado debería ser parecido a:
//nombre=Juan; edad=25; ciudad=Granada
console.log(document.cookie);
//Preguntas
//¿Cómo aparecen separadas las diferentes cookies?
//aparecen separads por punto y coma ;
//¿Se muestran en el mismo orden en el que las has creado?
//Si se muestarn en el orden que he creado
//¿Qué ocurre si vuelves a cargar la página?
//Siguen apareciendo las cookies

//Ejercicio 3 — Modificar una cookie
//Crea inicialmente una cookie:
//nombre = Juan
//document.cookie="nombre = Juan";
//Después modifica su valor para que sea:
//nombre = Pedro
//Muestra por consola el resultado final.
//Comprobación
//document.cookie = "nombre=Juan";
// Para modificarla, simplemente la reescribimos usando la misma clave:
//document.cookie = "nombre=Pedro"; 
console.log(document.cookie); // Muestra: "nombre=Pedro"
//Comprueba en las herramientas de desarrollador que la cookie contiene finalmente:
//nombre = Pedro
//Pregunta
//¿Qué ocurre cuando creamos una cookie utilizando un nombre que ya existe?
//Lo sobreescribe o machaca


//Ejercicio 4 — Comprobar la persistencia
//Crea una cookie llamada:
//usuario = tu nombre
//Después realiza las siguientes pruebas
//Recarga la página.
//Cierra la pestaña.
//Vuelve a abrir la página.
//Cierra completamente el navegador.
//Vuelve a abrir el navegador y accede de nuevo a la página.
//Comprueba en cada caso si la cookie sigue existiendo.
//Pregunta
//¿Por qué crees que la cookie sigue existiendo aunque hayas cerrado la página?
document.cookie="usuario=mateo";


//Ejercicio 5 — Buscar una cookie
//Tenemos las siguientes cookies:
//document.cookie = "nombre=Juan";
//document.cookie = "ciudad=Granada";
//document.cookie = "edad=25";
//document.cookie devuelve todas las cookies juntas.
//Crea un programa que permita obtener únicamente el valor de la cookie nombre.
//El resultado debe ser:
//Juan
//Pista
//Puedes utilizar:
//split()
//para separar una cadena de texto.
//Por ejemplo:
//let texto = "nombre=Juan; ciudad=Granada; edad=25";
//let datos = texto.split(";");
//Comprueba qué contiene datos.

//Ejercicio 5 y 6 — Buscar y crear una función para obtener cookies

//Este es un clásico de examen. Como document.cookie devuelve un único string largo separado por puntos y comas (ej: "nombre=Juan; ciudad=Granada; edad=25"), usamos split() y trim() para procesarlo de forma limpia.
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

// Pruebas en consola:
console.log(obtenerCookie("nombre"));    // "Juan"
console.log(obtenerCookie("direccion")); // null

//Ejercicio 7 — Guardar el nombre del usuario
//Crea una página HTML con:
//¿Cuál es tu nombre?
//[________________] [Guardar]
//Cuando el usuario escriba su nombre y pulse Guardar:
//Debes almacenar el nombre en una cookie.
//Debes mostrar en la página:
//¡Hola, Juan!
//Por ejemplo, si el usuario introduce Juan:
//¡Hola, Juan!
//Requisitos
//Debes utilizar:
//Un <input>.
//Un <button>.
//JavaScript.
//Una cookie.
//Un evento click.
function guardarNombre() {
    //Accedemos al input y guardamos lo que el usuario escribió usando .value
    let nombreEscrito = document.getElementById("nombreUsuario").value;
    // Validación opcional: comprobar que no esté vacío
    if (nombreEscrito.trim() !== "") {
        //Almacenamos el nombre en la cookie
        document.cookie = "nombre=" + nombreEscrito + "; max-age=86400;"; 
        //Accedemos al div vacío y modificamos su contenido con .innerHTML
        document.getElementById("resultadoSaludo").innerHTML = "<h3>¡Hola, " + nombreEscrito + "!</h3>";
    }
}

//Ejercicio 8 — Recuperar el nombre
//Modifica el ejercicio anterior.
//Cuando se cargue la página:
//Si existe la cookie nombre
//Debe aparecer:
//¡Bienvenido de nuevo, Juan!
//Si no existe
//Debe aparecer:
//No conocemos tu nombre.
//El programa debe comprobar la existencia de la cookie al cargar la página.
//Realiza las siguientes pruebas:
//Borra las cookies de la página.
//Abre la página.
//Comprueba que aparece "No conocemos tu nombre".
//Introduce tu nombre.
//Recarga la página.
//Comprueba que aparece el mensaje de bienvenida.
let nombreCookie = obtenerCookie("nombre");
 /*if (nombreCookie) {
        //Si la cookie existe, vaciamos el formulario y ponemos el saludo de bienvenida
        document.getElementById('bloqueRegistro').innerHTML = ''; 
        document.getElementById('resultadoSaludo').innerHTML = '<h3>¡Bienvenido de nuevo, ' + nombreCookie + '!</h3>';
    }else {
    //si no existe, avisamos en pantalla
    document.getElementById('resultadoSaludo').innerHTML = '<p>No conocemos tu nombre.</p>';
}
    */
//Ejercicio 9 — Cambiar el nombre
//Amplía el ejercicio anterior.
//La página debe tener:
//Nombre: [________________]
//[Guardar nombre]
//Si el usuario introduce un nombre diferente y pulsa el botón, la cookie debe actualizarse.
//Por ejemplo:
//Primero:
//Nombre: Juan
//Después:
//Nombre: María
//Al recargar la página debe aparecer:
//¡Bienvenida de nuevo, María!
nombreCookie=obtenerCookie('nombre');
if (nombreCookie) {
    // Si ya existe un nombre, NO borramos el formulario.
    // Solo pintamos el saludo de bienvenida arriba para que vea que lo recordamos.
    document.getElementById('resultadoSaludo').innerHTML = '<h3>¡Bienvenido/a de nuevo, ' + nombreCookie + '!</h3>';
    
    // Opcional: Rellenamos el input con el nombre actual para que sepa cuál está guardado
    document.getElementById('nombreUsuario').value = nombreCookie;
} else {
    document.getElementById('resultadoSaludo').innerHTML = '<p>No conocemos tu nombre.</p>';
}
//Ejercicio 10 — Borrar el nombre
//Añade un segundo botón:
//[Guardar nombre] [Borrar nombre]
//El botón Borrar nombre debe eliminar la cookie nombre.
//Después de eliminarla, la página debe mostrar:
//No conocemos tu nombre.
//Comprobación
//Después de pulsar Borrar nombre:
//Comprueba el contenido de document.cookie.
//Comprueba las cookies desde las herramientas de desarrollador.
//Recarga la página.
//Comprueba que el nombre ya no aparece.
function eliminarNombre(){
    //PARA ELIMINAR COOKIES TENEMOS DOS OPCIONES CON MAX-AGE=0
    //O CAMBIAMOS LA EXPIRES= A UNA FECHA PASADA
    //document.cookie = "nombreDeLaCookie=; max-age=0; path=/";
    //document.cookie = "nombreDeLaCookie=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    document.cookie = "nombre=; max-age=0";
}


//Ejercicio 11 — Cookie con fecha de caducidad
//Hasta ahora nuestras cookies no tenían una fecha de caducidad explícita.
//Crea una cookie llamada:
//nombre
//que tenga una duración de 1 día.
//Para calcular fechas puedes utilizar el objeto:
//Date
//Prueba
//Comprueba en las herramientas de desarrollador:
//El nombre de la cookie.
//Su valor.
//Su fecha de caducidad.
let fechaHoyExpires= new Date();
fechaHoyExpires.setDate(fechaHoyExpires.getDate()+1);
let cadenaUtcFechaExpires=fechaHoyExpires.toUTCString();
document.cookie="nombreCaducidad=nombreExpirar; expires="+cadenaUtcFechaExpires;

//Ejercicio 12 — Cookie que dura 30 segundos
//Modifica el ejercicio anterior para crear una cookie que dure solamente 30 segundos.
//Realiza esta prueba:
//Crea la cookie.
//Comprueba que existe.
//Espera 30 segundos.
//Recarga la página.
//Comprueba si sigue existiendo.
//Pregunta
//¿Qué ocurre con la cookie cuando supera su fecha de caducidad?
let fechaHoyExpires1= new Date();
fechaHoyExpires1.setSeconds(fechaHoyExpires1.getSeconds()+30);
let cadenaUtcFechaExpires1=fechaHoyExpires1.toUTCString();
//document.cookie = "caducaen30sec=expiraen30secs; max-age=30;";
document.cookie="caducaen30sec=expiraen30secs; expires="+cadenaUtcFechaExpires1;

//Ejercicio 13 — Miniaplicación: "Bienvenido a mi página"
//Crea una pequeña aplicación que recuerde el nombre del usuario.
//La primera vez que entre en la página debe aparecer:
//¿Cuál es tu nombre?
//[________________] [Guardar]
//Cuando introduzca su nombre:
//¡Hola, Juan!
//El nombre debe almacenarse en una cookie.
//Segunda visita
//Si el usuario vuelve a entrar en la página y la cookie todavía existe, debe aparecer:
//¡Hola de nuevo, Juan!
//No debe volver a pedirle el nombre.
//Cambiar el nombre
//Debe existir un botón:
//[Cambiar nombre]
//Al pulsarlo, el usuario podrá introducir un nuevo nombre.
//Borrar el nombre
//Debe existir también un botón:
//[Borrar nombre]
//Al pulsarlo:
//Se elimina la cookie.
//Desaparece el mensaje de bienvenida.
//Vuelve a aparecer el formulario para introducir el nombre.
//Reto final
//Añade a la aplicación una cookie llamada:
//visitas
//Cada vez que el usuario visite la página, el contador debe aumentar en uno.
//Por ejemplo:
//Hola, Juan.
//Esta es tu visita número 5.
//Si el usuario cierra el navegador y vuelve a entrar, el contador debe continuar desde el valor anterior.
//Requisitos
//La aplicación final debe utilizar al menos estas dos cookies:
//nombre
//visitas
//Y debe permitir:
//Guardar el nombre.
//Recuperar el nombre.
//Modificar el nombre.
//Borrar el nombre.
//Contabilizar las visitas.
//Mantener la información al recargar la página.
