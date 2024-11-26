"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Profesional_1 = require("./Profesional");
var Movie_1 = require("./Movie");
var IMDb_1 = require("./IMDb");
// Crear instancias de Professional para los actores y director
var actor1 = new Profesional_1.Profesional("Pedro", 45, 75, 180, false, "Española", 2, "Actor");
var actor2 = new Profesional_1.Profesional("Ana", 30, 60, 165, false, "Española", 0, "Actriz");
var director = new Profesional_1.Profesional("Carlos", 50, 80, 175, false, "Española", 1, "Director");
// Crear instancias de películas
var movie1 = new Movie_1.Movie("Pelicula 1", 2022, "Española", "Drama");
movie1.actors = [actor1, actor2];
movie1.director = director;
var movie2 = new Movie_1.Movie("Pelicula 2", 2023, "Americana", "Acción");
movie2.actors = [actor1];
movie2.director = director;
// Crear una instancia de IMDb
var imdb = new IMDb_1.IMDb([movie1, movie2]);
// Guardar las películas en un archivo JSON
imdb.escribirEnFicheroJSON("imdbBBDD.json");
// Leer el archivo JSON y crear una nueva instancia de IMDb
var imdbDesdeArchivo = IMDb_1.IMDb.obtenerInstanciaIMDB("imdbBBDD.json");
console.log(imdbDesdeArchivo);
