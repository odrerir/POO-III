import IPlataform from "../platforms/interfaces/IPlataform";
import Live from "./Live";

export default class AdvancedLive extends Live{
    constructor(plataform: IPlataform){
        super(plataform);
    }

    subtitles(): void{
        console.log("Legendas Atividas na Transmissão");
    }

    comments(): void{
        console.log("Comentarios Liberados na Transmissão");
    }
}