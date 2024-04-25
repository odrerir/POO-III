import Ivehicle from "./interfaces/Ivehicle";

export default class Motorcycle implements Ivehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Moto iniciando o trajeto...")
    }
    getCargo(): void {
        console.log("Moto pegou a carga...")
    }
    
}