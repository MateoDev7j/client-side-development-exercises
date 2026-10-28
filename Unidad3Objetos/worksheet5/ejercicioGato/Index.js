class Cat{
    tiredness;
    hunger;
    happiness;
    constructor(){
        this.tiredness;
        this.hunger;
        this.happiness;
    }
    feed(amount=2){
    this.hunger =-amount;
        return `Has alimentado al gato el hambre ha disminuido: ${this.hunger}`;
    }
    sleep(amount=3){
        this.tiredness=-amount;
        return `El gato ha dormido sus cansancio ha disminuido: ${this.tiredness}`;
    }
    pet(amount=2){
        this.happiness =+ amount;
        return `Has acariciado al gato su felicidad ha incrementado: ${this.happiness}`;
    }
    status(){
        if(this.hunger>=7){
            console.log(`El gato esta rugiendo de hambre ${this.hunger}`);
        }
        else if(this.hunger<=3){
            console.log(`El gato esta lleno de hambre ${this.hunger}`);
        }
        else{
            console.log(`El gato no le molestaria que le des de comer ${this.hunger}`);
        }
        if(this.tiredness>=7){
            console.log(`El gato esta muy cansado nesecita dormir ${this.tiredness}`);
        }
        else if(this.tiredness<=3){
            console.log(`El gato esta lleno de energia ${this.tiredness}`);
        }
        else {
            console.log(`El gato no le molestaria dormir`);
        }
        if(this.happiness>=7){
            console.log(`El gato esta muy feliz ${this.happiness}`);
        }
        else if(this.happiness<=3){
            console.log(`El gato esta triste acaricialo ${this.happiness}`);
        }
        else {
            console.log(`El gato esta normal ${this.happiness}`);
        }
    }


}