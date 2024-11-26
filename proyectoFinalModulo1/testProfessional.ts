import { Profesional } from "./profesional"; // Asegúrate de que el nombre del archivo coincide

// Crear una instancia de la clase Profesional
let actor1 = new Profesional(
  "Pedro",
  45,
  75,
  180,
  false,
  "Española",
  2,
  "Actor"
);

// Imprimir las propiedades del objeto
console.log(`Nombre: ${actor1.getName()}`);
console.log(`Edad: ${actor1.getAge()}`);
console.log(`Peso: ${actor1.getWeight()} kg`);
console.log(`Altura: ${actor1.getHeight()} cm`);
console.log(`Retirado: ${actor1.getIsRetired()}`);
console.log(`Nacionalidad: ${actor1.getNationality()}`);
console.log(`Número de Oscars: ${actor1.getOscarsNumber()}`);
console.log(`Profesión: ${actor1.getProfession()}`);
