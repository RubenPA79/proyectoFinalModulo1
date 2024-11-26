
import { Profesional } from "./Profesional";
import { Movie } from "./Movie";
import { IMDb } from "./IMDb";

// Crear instancias de Professional para los actores y director
const actor1 = new Profesional("Pedro", 45, 75, 180, false, "Española", 2, "Actor");
const actor2 = new Profesional("Ana", 30, 60, 165, false, "Española", 0, "Actriz");
const director = new Profesional("Carlos", 50, 80, 175, false, "Española", 1, "Director");

// Crear instancias de películas
const movie1 = new Movie("Pelicula 1", 2022, "Española", "Drama");
movie1.actors = [actor1, actor2];
movie1.director = director;

const movie2 = new Movie("Pelicula 2", 2023, "Americana", "Acción");
movie2.actors = [actor1];
movie2.director = director;

// Crear una instancia de IMDb
const imdb = new IMDb([movie1, movie2]);

// Guardar las películas en un archivo JSON
imdb.escribirEnFicheroJSON("imdbBBDD.json");

// Leer el archivo JSON y crear una nueva instancia de IMDb
const imdbDesdeArchivo = IMDb.obtenerInstanciaIMDB("imdbBBDD.json");
console.log(imdbDesdeArchivo);
