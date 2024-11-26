"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesional = void 0;
var Profesional = /** @class */ (function () {
    // Constructor de la clase Profesional
    function Profesional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    // Métodos públicos para obtener las propiedades
    Profesional.prototype.getName = function () {
        return this.name;
    };
    Profesional.prototype.getAge = function () {
        return this.age;
    };
    Profesional.prototype.getWeight = function () {
        return this.weight;
    };
    Profesional.prototype.getHeight = function () {
        return this.height;
    };
    Profesional.prototype.getIsRetired = function () {
        return this.isRetired;
    };
    Profesional.prototype.getNationality = function () {
        return this.nationality;
    };
    Profesional.prototype.getOscarsNumber = function () {
        return this.oscarsNumber;
    };
    Profesional.prototype.getProfession = function () {
        return this.profession;
    };
    return Profesional;
}());
exports.Profesional = Profesional;
