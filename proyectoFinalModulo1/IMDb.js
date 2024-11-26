"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMDb = void 0;
var Movie_1 = require("./Movie");
var fs = require("fs");
var IMDb = /** @class */ (function () {
    function IMDb(peliculas) {
        this.peliculas = peliculas;
    }
    // Método para guardar el objeto IMDb en un archivo JSON
    IMDb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var jsonData = JSON.stringify(this);
        fs.writeFileSync(nombreFichero, jsonData);
        console.log("Datos guardados en el archivo ".concat(nombreFichero));
    };
    // Método para leer un archivo JSON y crear un objeto IMDb
    IMDb.obtenerInstanciaIMDB = function (nombreFichero) {
        var jsonData = fs.readFileSync(nombreFichero, "utf-8");
        var data = JSON.parse(jsonData);
        var peliculas = data.peliculas.map(function (movie) {
            return new Movie_1.Movie(movie.title, movie.releaseYear, movie.nacionality, movie.genre);
        });
        return new IMDb(peliculas);
    };
    return IMDb;
}());
exports.IMDb = IMDb;
