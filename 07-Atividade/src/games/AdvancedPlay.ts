import IConsole from "../plataforms/interfaces/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(private plataform : IConsole){
        super(plataform);
    }

    Challenge(): void {
        console.log("Iniciando Desafio.")
    }
}