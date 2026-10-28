class Game{
    constructor(jugador1,jugador2){
        this.jugador1=jugador1;
        this.jugador2=jugador2;
    }
    array= ['Piedra','Papel','Tijera'];
    jugador1= new Jugador();
    jugador2= new Jugador();
    ronda(){
        movJugador1=this.jugador1.movimiento()-1;
        movJugador2=this.jugador2.movimiento()-1;
        if(movJugador1==='Piedra' && movJugador2==='Papel'){
            console.log('Gana el jugador 2');
        }
        else if(movJugador1=='Piedra' && movJugador2=='Tijera'){
            console.log('Gana el jugador 1');
        }
        else if(movJugador1=='Piedra' && movJugador2=='Piedra'){
            console.log('Quedan empatados');
        }
    }
    
}
class Jugador{
    estado;
    victorias;
    constructor(estado, movimiento){
        this.estado=estado;
        this.movimientto=movimiento;
    }
    estadoJugador(){
        return 'El jugador tiene: '+this.registroVictorias()+' victorias y estado: '+this.estado;
    }
    registroVictorias(){
        return this.victorias;
    }
    movimiento(){
        return Math.floor(Math.random()*(3-1))+1;
    }
    setVictorias(victorias){
        this.victorias=+victorias;
    }
}