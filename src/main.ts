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
console.log(mixed);
console.log(numbers);
console.log(isStudent);

console.log(dog);

function saludar(nombre: string): string {
  return `Hola ${nombre}!`;
}

// arrow function
let suma:Function = (a: number,b: number): number =>  a + b;

console.log(suma(8,7));


console.log(saludar("Roy"));

const btnCount = document.getElementById("btnCount") as HTMLButtonElement;
let counter = document.getElementById("counter") as HTMLSpanElement;

let counterNum: number = 0;
const incrementCounter = () => {
  counterNum++;
  if (counter){
    counter.textContent = counterNum.toString();
  }
};


console.log(`Contador va en: ${counter}`);

