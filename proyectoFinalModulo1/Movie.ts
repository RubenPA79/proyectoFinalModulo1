
import { Profesional } from "./Profesional";

export class Movie {
  // Atributos públicos
  public title: string;
  public releaseYear: number;
  public actors: Profesional[];
  public nacionality: string;
  public director: Profesional;
  public writer: Profesional;
  public language: string;
  public plataforma: string;
  public isMCU: boolean;
  public mainCharacterName: string;
  public producer: string;
  public distributor: string;
  public genre: string;

  // Método constructor
  constructor(title: string, releaseYear: number, nacionality: string, genre: string) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.nacionality = nacionality;
    this.genre = genre;

    // Inicializando valores por defecto
    this.actors = [];
    this.language = "";
    this.plataforma = "";
    this.isMCU = false;
    this.mainCharacterName = "";
    this.producer = "";
    this.distributor = "";
    this.director = new Profesional("", 0, 0, 0, false, "", 0, "");
    this.writer = new Profesional("", 0, 0, 0, false, "", 0, "");
  }
}
