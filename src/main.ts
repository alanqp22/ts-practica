//import './style.css'
const age: number = 31;
let name: string = "Alan Quispe";
const isStudent: boolean = false;
const numbers: number[] = [5,4,7,4,1,5,9,6,8];
const mixed: (string|number)[] = [5,"sow",6,"bear"];

interface Persona {
  name: string;
  age: number;
  lastName?: string;
}

const personaUno: Persona = {
  name,
  age,
};

const dog: {name: string, age: number} = {
  name: "Rocky",
  age: 3
};

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
}

$btnSaludar.addEventListener("click", saludar);

// EJERCICIO 2 LISTA DE FRUTAS

// elementos DOM
const $inptFrut = document.getElementById("inptFrut") as HTMLInputElement;
const $btnAddFrut = document.getElementById("btnAddFrut") as HTMLButtonElement;
const $frutList = document.getElementById("listFrut") as HTMLUListElement;



const frutas: string[] = ["banana", "papaya", "limón","naranja","piña"];

const frutas2 = [
  {name: "banana", color: "yellow"},
  {name: "papaya", color: "orange"},
  {name: "lemon", color: "green"},
];

const addItemOnList = () => {
  if($inptFrut){
    const $frutItem = document.createElement("li");
    $frutItem.textContent = $inptFrut.value;
    $frutList.appendChild($frutItem);
  }
}

$btnAddFrut.addEventListener("click",addItemOnList);

frutas2.forEach(fruta => {
  console.log(fruta);
  const $frutItem = document.createElement("li");
  $frutItem.textContent = `${fruta.name} - ${fruta.color}`;
  $frutList.appendChild($frutItem);
});

