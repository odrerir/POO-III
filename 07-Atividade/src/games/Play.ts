import IConsole from "../plataforms/interfaces/IConsole";
import IGames from "./interfaces/IGames";

export default class Play implements IGames{

    constructor(private plataform : IConsole){}

    playing(): void {
        console.log("Iniciando jogo.");
    }
    result(): void {
        console.log("Jogando o jogo.");
    }

}