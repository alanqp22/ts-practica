//import './style.css'
import {Animal} from './Persona';
import { Vehicle, Car} from "./Vehicle";
const age: number = 31;
let name: string = "Alan Quispe";
// const isStudent: boolean = false;
// const numbers: number[] = [5,4,7,4,1,5,9,6,8];
// const mixed: (string|number)[] = [5,"sow",6,"bear"];

interface Persona {
  name: string;
  age: number;
  lastName?: string;
}

const personaUno: Persona = {
  name,
  age,
};

// const dog: {name: string, age: number} = {
//   name: "Rocky",
//   age: 3
// };

personaUno.name = "Diego";
personaUno.lastName = "Rios"
name = "Diego Rios";

console.log(personaUno);

console.log(age, name);

const $counter = document.getElementById("counter") as HTMLSpanElement;
const $btnIncrement = document.getElementById("btnIncrement") as HTMLButtonElement;

let counter: number = 0;

const incrementar = () => {
  counter++;
  if($counter){
    $counter.textContent = counter.toString();
  }
}

if($btnIncrement){
  $btnIncrement.addEventListener("click",incrementar);
}

// FUNCIONALIDAD 'SALUDADOR'
const $btnSaludar = document.getElementById("btnSaludar") as HTMLButtonElement;
const $inptName = document.getElementById("inptName") as HTMLInputElement;
const $saludo = document.getElementById("saludo") as HTMLSpanElement;

const saludar = () => {
  let inptName:string = "";
  if($inptName){
    inptName = $inptName.value;
  }
  if($saludo){
    $saludo.textContent = `Hola que tal ${inptName}!`;    
  }
  $inptName.value = "";
}

$btnSaludar.addEventListener("click", saludar);

// EJERCICIO 2 LISTA DE FRUTAS

// elementos DOM
const $inptFrut = document.getElementById("inptFrut") as HTMLInputElement;
const $inptColor = document.getElementById("inptColor") as HTMLInputElement;
// const $btnAddFrut = document.getElementById("btnAddFrut") as HTMLButtonElement;
const $frutList = document.getElementById("listFrut") as HTMLUListElement;
const $frmAddFrut = document.getElementById("frmAddFruts") as HTMLFormElement;

interface Frut {
  name: string,
  color: string,
}

const frutas: Frut[] = [
  {name: "banana", color: "yellow"},
  {name: "papaya", color: "orange"},
  {name: "lemon", color: "green"},
];

$frmAddFrut.addEventListener("submit",(e)=>{
  e.preventDefault();
  frutas.push({
    name: $inptFrut.value,
    color: $inptColor.value,
  });
  $frmAddFrut.reset();
  renderFrut();   
});


function renderFrut(){
  $frutList.innerHTML = "";
  frutas.forEach(fruta => {
    const $frutItem = document.createElement("li");
    $frutItem.textContent = `${fruta.name} - ${fruta.color}`;
    $frutList.appendChild($frutItem);
  });
  
}

renderFrut();

// FUNCIONES
let parser = function(){
  return `Hola esto es algo interesante para compartir`;
}
console.log(parser());

let mediamovil = (a:number, b:number, c:number = 45): number => {
  if (c == 0) {
    c = 45;
  }
  return (a+b+c)/3;
}

let res1 = mediamovil(5,7);
let res2 = mediamovil(5,6,0);
let res3 = mediamovil(8,5,23);

console.log(`Resultado 1: ${res1}`);
console.log(`Resultado 2: ${res2}`);
console.log(`Resultado 3: ${res3}`);


// CLASES Y OBJETOS
class Calculator {
  private ans: number;

  constructor(){
    this.ans = 0;
  }

  add(x:number){
    this.ans += x;
  }

  sub(x:number){
    this.ans -= x;
  }

  getAns():number{
    return this.ans;
  }
}

let myCalcu = new Calculator();
myCalcu.add(5);
myCalcu.add(56);
myCalcu.add(34);
myCalcu.sub(11);
console.log(myCalcu.getAns());

// CLASE ANIMAL
let perro = new Animal("Marino");
perro.showAnimal();
console.log(perro.getTipo());


// CLASE VEHICULO Y CLASE HIJA CAR
let miVechiculo = new Vehicle("Toyota","Toyota Corolla",2020,"black");
miVechiculo.displayInfo();

console.log("Mi Vehículo:");

let miAuto = new Car(4,"Mecanico","Mitsubishi","Montero",2015,"White");
miAuto.showCar()