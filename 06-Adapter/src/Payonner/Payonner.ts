import Token from "../Util/Token";
import IPayonnerPayment from "./interfaces/IPayonnerPayment";

export default class Payonner implements IPayonnerPayment{
    private token: Token;

    authToken(): Token {
        return new Token;
    }
    sendPayment(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Enviando pagamento via Payonner");
    }
    receivePayment(): void {
        console.log("Recebendo Pagamento Via Payonner.");
    }

}