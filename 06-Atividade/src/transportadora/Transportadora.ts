import Token from "../util/Token";
import ITransportadora from "./interfaces/ITransportadora";

export default class Transportadora implements ITransportadora{
    private token: Token;

    authToken(): Token {
        return new Token;
    }
    sendCorreios(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Enviando pacote via Transportadora");
    }
    receiveCorreios(): void {
        console.log("Recebendo pacote via Transportadora");
    }


}