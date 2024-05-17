import Token from "../util/Token";
import ICorreios from "./interfaces/ICorreios";

export default class Correios implements ICorreios{
    private token : Token;

    authToken(): Token {
        return new Token;
    }
    sendCorreios(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Enviando pacote via Correios");
    }
    receiveCorreios(): void {
        console.log("Recebendo pacote via Correios");
    }

}