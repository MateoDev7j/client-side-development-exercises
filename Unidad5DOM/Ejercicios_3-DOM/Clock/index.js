/* LOGICA DE RELOJ */
window.onload = function(){
    let segundos=0;
    let decimas=0;
    let Interval;
    let minutos=0;
    let spanMinutos = null;
    //capturamos los eventos una sola vez
    const spanSegundos = document.getElementById("segundos");
    const spanDecimas = document.getElementById("decimas");
    const btnStart = document.getElementById("start");
    const btnStop = document.getElementById("stop");
    const btnReset = document.getElementById("reset");
    //evento para iniciar
    btnStart.addEventListener("click",()=>{
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    });
    //evento para detener
    btnStop.addEventListener("click",()=>{
        clearInterval(Interval);
    });
    //evento para reiniciar
    btnReset.addEventListener("click",()=>{
        clearInterval(Interval);
        segundos=0;
        decimas=0;
        minutos=0;
        spanSegundos.textContent= "00";
        spanDecimas.textContent= "00";
        if (spanMinutos) {
            spanMinutos.remove();
            spanMinutos = null;
        }
    });
    function startTimer(){

        decimas++;

        if(decimas <= 9){
            spanDecimas.textContent= "0" + decimas;
        }
        if(decimas > 9){
            spanDecimas.textContent= decimas;
        }
        if(decimas > 99){
            segundos++;
            spanSegundos.textContent= "0" + segundos;
            decimas=0;
            spanDecimas.textContent= "00";
        }
        if(segundos > 9){
            spanSegundos.textContent = segundos;
        }
        if(segundos > 59){
            minutos++;
            segundos=0;
            spanSegundos.textContent = "00";
            if (!spanMinutos) {
                spanMinutos = document.createElement("span");
                spanSegundos.insertAdjacentElement('beforebegin', spanMinutos);
            }
            spanMinutos.textContent = (minutos <= 9 ? "0" + minutos : minutos) + ":";

        }
    }
}