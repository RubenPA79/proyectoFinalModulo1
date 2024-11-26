"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profesional_1 = require("./profesional"); // Asegúrate de que el nombre del archivo coincide
// Crear una instancia de la clase Profesional
var actor1 = new profesional_1.Profesional("Pedro", 45, 75, 180, false, "Española", 2, "Actor");
// Imprimir las propiedades del objeto
console.log("Nombre: ".concat(actor1.getName()));
console.log("Edad: ".concat(actor1.getAge()));
console.log("Peso: ".concat(actor1.getWeight(), " kg"));
console.log("Altura: ".concat(actor1.getHeight(), " cm"));
console.log("Retirado: ".concat(actor1.getIsRetired()));
console.log("Nacionalidad: ".concat(actor1.getNationality()));
console.log("N\u00FAmero de Oscars: ".concat(actor1.getOscarsNumber()));
console.log("Profesi\u00F3n: ".concat(actor1.getProfession()));
