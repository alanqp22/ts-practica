import './style.css'
const age : number = 31;
const name : string = "Alan Quispe"

interface Persona {
  name: string;
  age: number;
  lastName?: string;  
}

const personaUno: Persona = {
  name,
  age,
};

personaUno.lastName = "Rios"

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