/*console.log("Navegador (User Agent):", navigator.userAgent);
console.log("Idioma:", navigator.language);
console.log("Plataforma:", navigator.platform);
console.log("Resolución de pantalla:", screen.width + " x " + screen.height);
*/
document.getElementById("infNavegador").innerHTML = "<ul><li>Navegador (User Agent): " + 
navigator.userAgent+"</li><br>"+"<li>Idioma: " + navigator.language + 
"</li><br><li>Plataforma: " + navigator.platform + "</li><br><li>Resolución de pantalla: " + 
screen.width + " x " + screen.height+"</li></ul>";

document.getElementById("navegacion").innerHTML = window.location.href;

function redireccionar() {
    window.location.href = "https://www.google.com";
}
document.getElementById("infPantalla").innerHTML = "Resolución total: " + screen.width + " x " + screen.height
+"<br>Resolución disponible: " + screen.availWidth + " x " + screen.availHeight+
"<br>Orientacion: " + screen.orientation.type + "<br>Profundidad de color: " + screen.colorDepth + " bits"+
"<br>Profundidad de pixel: " + screen.pixelDepth + " bits";