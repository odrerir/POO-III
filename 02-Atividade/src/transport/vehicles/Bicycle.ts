import Ivehicle from "./interfaces/Ivehicle";

export default class Bicycle implements Ivehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Bicicleta: Iniciando o trajeto...");
    }

    getCargo(): void {
        console.log("bicicleta: pegou o pacote...");
    }

}