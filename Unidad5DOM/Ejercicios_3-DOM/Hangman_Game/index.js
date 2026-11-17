//declaramos los elementos primero
const clave="b,a,r,c,e,l,o,n,a";
const lives=0;
const spanLives=document.getElementById("lives");
const letras = document.getElementsByClassName("letrasHtml");
let barcelona=clave.split(",");
window.onload = function(){
    for(let i=0;i<=barcelona.length;i++){
        if(i==0){
            
        }
        if(i==1){

        }
        if(i==2){

        }
        if(i==3){

        }
        if(i==4){
            
        }
        if(i==5){

        }
        if(i==6){

        }
        if(i==7){

        }
        if(i==8){

        }
        console.log(barcelona[i]);
    }
    for(let i=0;i<=letras.length;i++){
        letras[i].addEventListener("click",()=>{
            letras[i].style.backgroundColor="black";
        });
    }
}

