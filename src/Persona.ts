export class Animal {
    
    private tipo: string;
    
    constructor(tipo: string){
        this.tipo = tipo;
    }

    getTipo(): string{
        return this.tipo;
    }

    showAnimal(): void{
        console.log(`Animal del tipo: ${this.tipo}`);
    }


}