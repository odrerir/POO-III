import IConsole from "./interfaces/IConsole";

export default class Xbox implements IConsole{

    constructor(){
        this.configureGame();
        console.log("Xbox: Configurado com sucesso.");
    }

    configureGame(): void {
        this.authToken();
        console.log("Xbox: Configurando.");
    }
    authToken(): void {
        console.log("Xbox: Autorizando.");
    }
}