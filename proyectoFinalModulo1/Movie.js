"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Profesional_1 = require("./Profesional");
var Movie = /** @class */ (function () {
    // Método constructor
    function Movie(title, releaseYear, nacionality, genre) {
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
        this.director = new Profesional_1.Profesional("", 0, 0, 0, false, "", 0, "");
        this.writer = new Profesional_1.Profesional("", 0, 0, 0, false, "", 0, "");
    }
    return Movie;
}());
exports.Movie = Movie;
