let caja = document.getElementById("caja");
var offsetX, offsetY; 
caja.addEventListener("touchstart",(e)=>{
    e.preventDefault();
    console.log("tocas el div");
    caja.style.backgroundColor="green";
    offsetX=e.touches[0].clientX - caja.offsetLeft;
    offsetY=e.touches[0].clientY - caja.offsetTop;
});
caja.addEventListener("touchend",(e)=>{
    e.preventDefault();
    console.log("levantas el dedo");
    caja.style.backgroundColor="blue";
});
caja.addEventListener("touchmove",(e)=>{
    let toque = e.touches[0];
    
    console.log("x= "+toque.clientX + " Y= " + toque.clientY);
    caja.style.top=toque.clientY-offsetY+"px";
    caja.style.left=toque.clientX-offsetX+"px";
});
/*window.addEventListener("touchmove",(e)=>{
    let toque = e.touches[0];
    console.log("x= "+toque.clientX + " Y= " + toque.clientY);
    caja.style.top=toque.clientY+"px";
    caja.style.left=toque.clientX+"px";
    caja.style.margin="0px";
    
});*/
var startX, startY;
let span = document.getElementById("detectarMovimiento");
let caja2 = document.getElementById("caja2");
caja2.addEventListener("touchstart",(e)=>{
    e.preventDefault();
    console.log("tocas el div");
    caja2.style.backgroundColor="green";
    startX=e.touches[0].clientX;
    startY=e.touches[0].clientY;
});
caja2.addEventListener("touchend",(e)=>{
    e.preventDefault();
    console.log("levantas el dedo");
    caja2.style.backgroundColor="blue";
    let endX=e.changedTouches[0].clientX;
    let endY=e.changedTouches[0].clientY;

    let diffX = endX - startX;
    let diffY = endY - startY;

    if(diffX >50){
        span.innerHTML= 'Derecha';
    }
    if(diffX < -50){
        span.innerHTML= 'Izquierda';
    }
    if(diffY > 50){
        span.innerHTML= 'Abajo';
    }
    if(diffY < -50){
        span.innerHTML= 'Arriba';
    }

});


