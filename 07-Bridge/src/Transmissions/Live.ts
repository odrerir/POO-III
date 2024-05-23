import IPlataform from "../platforms/interfaces/IPlataform";
import ITransmission from "./interfaces/ITransmission";

export default class Live implements ITransmission{
    constructor(private plataform : IPlataform){}

    broadcasting(): void {
        console.log("Iniciando a transmissão.");
    }
    result(): void {
        console.log("******* NO AR *******");
    }

}