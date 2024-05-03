import Ivehicle from "./interfaces/Ivehicle";

export default class Car implements Ivehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Iniciando o trajeto...");
    }
    getCargo(): void {
        console.log("Carro: Passageiros embarcados!");
        
    }


}