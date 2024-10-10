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