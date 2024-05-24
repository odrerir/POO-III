import IConsole from "./interfaces/IConsole";

export default class Playstation implements IConsole{

    constructor(){
        this.configureGame();
        console.log("Playstation: Configurado com sucesso.");
    }

    configureGame(): void {
        this.authToken();
        console.log("Playstation: Configurando.");
    }
    authToken(): void {
        console.log("Playstation: Autorizando.");
    }

}