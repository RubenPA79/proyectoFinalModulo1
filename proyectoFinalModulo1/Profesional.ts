export class Profesional {
  // Propiedades de clase Profesional
  public name: string;
  public age: number;
  public weight: number;
  public height: number;
  public isRetired: boolean;
  public nationality: string;
  public oscarsNumber: number;
  public profession: string;

  // Constructor de la clase Profesional
  constructor(
    name: string,
    age: number,
    weight: number,
    height: number,
    isRetired: boolean,
    nationality: string,
    oscarsNumber: number,
    profession: string
  ) {
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
  public getName(): string {
    return this.name;
  }
  public getAge(): number {
    return this.age;
  }
  public getWeight(): number {
    return this.weight;
  }
  public getHeight(): number {
    return this.height;
  }
  public getIsRetired(): boolean {
    return this.isRetired;
  }
  public getNationality(): string {
    return this.nationality;
  }
  public getOscarsNumber(): number {
    return this.oscarsNumber;
  }
  public getProfession(): string {
    return this.profession;
  }
}









