import IPlataform from "./interfaces/IPlataform";

export default class Facebook implements IPlataform{
    constructor(){
        this.configureRMTP();
        console.log("Facebook: Plataforma Configurada");
    }
    configureRMTP(): void {
       this.authToken();
       console.log("Facebook: Configurando Broadcasting");
    }
    authToken(): void {
        console.log("Facebook: Autorizando a plataforma.");
    }
}