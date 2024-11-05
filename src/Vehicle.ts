export class Vehicle {
    private brand: string;
    private model: string;
    protected year: number;
    protected color: string;

    constructor(brand: string, model: string, year: number, color: string){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    private rutinaDeInicio(){
        console.log("Iniciando los accesorios");        
    }

    startEngine(){
        console.log("Iniciando Coche");        
        this.rutinaDeInicio();
    }
    
    accelerate():void{
        console.log("Incrementando velocidad");
    }

    brake():void {
        console.log("Frenando...")
    }

    displayInfo():void {
        console.log(`Vehiculo marca: ${this.brand}`);
        console.log(`Vehiculo modelo: ${this.model}`);
        console.log(`Vehiculo año fabricacion: ${this.year}`);
        console.log(`Vehiculo color: ${this.color}`);
        
    }
}

export class Car extends Vehicle {
    private numDoors:number;
    private transmission:string;

    constructor(numDools: number,transmission:string,brand:string,model:string,year:number,color:string){
        super(brand,model,year,color);
        this.numDoors = numDools;
        this.transmission = transmission;
    }

    openTrunk(){
        console.log("Abriendo el maletero");        
    }

    closeTrunk(){
        console.log("Cerrando el maletero");        
    }

    showCar(){
        super.displayInfo();
        console.log(`Numero de puertas: ${this.numDoors}`);
        console.log(`Tipo de transmisión: ${this.transmission}`);
        console.log(this.year);
        console.log(this.color);        
    }
}