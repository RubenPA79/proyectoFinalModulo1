
import { Profesional } from "./Profesional";
import { Movie } from "./Movie";
import * as fs from "fs";

export class IMDb {
  public peliculas: Movie[];

  constructor(peliculas: Movie[]) {
    this.peliculas = peliculas;
  }

  // Método para guardar el objeto IMDb en un archivo JSON
  public escribirEnFicheroJSON(nombreFichero: string): void {
    const jsonData = JSON.stringify(this);
    fs.writeFileSync(nombreFichero, jsonData);
    console.log(`Datos guardados en el archivo ${nombreFichero}`);
  }

  // Método para leer un archivo JSON y crear un objeto IMDb
  public static obtenerInstanciaIMDB(nombreFichero: string): IMDb {
    const jsonData = fs.readFileSync(nombreFichero, "utf-8");
    const data = JSON.parse(jsonData);
    const peliculas = data.peliculas.map(
      (movie: any) =>
        new Movie(movie.title, movie.releaseYear, movie.nacionality, movie.genre)
    );
    return new IMDb(peliculas);
  }
}
