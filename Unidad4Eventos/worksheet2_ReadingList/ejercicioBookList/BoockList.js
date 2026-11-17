class BockList extends Boock{
    boocksreaded;
    boocksnotreadedyet;
    nextBoock;
    currentBoock;
    lastBoock;
    boocks=[];
    constructor(){
        this.boocksreaded;
        this.boocksnotreadedyet;
        this.nextBoock = new Boock();
        this.currentBoock= new Boock();
        this.lastBoock= new Boock();
        this.boocks;
    }
    //Añadimos libros al array
    add(boock){
        for(libro of this.boocks){
            if(libro!=null){
                this.boocks[libro]=boock;
            }
            else{
                return 'No se pudo añadir el libro';
            }
        }
    }
    finishCurrentBook(boock){
        boock.read="read";
        boock.readDate=new Date(Date.now());
        this.lastBoock=boock;
        this.currentBoock=this.nextBoock;
    
        for(libro of this.boocks){
            if(libro.read!='read'){
                this.nextBoock=libro; 
            }
        }
    }
}
