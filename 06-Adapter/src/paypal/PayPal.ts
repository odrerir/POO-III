import Token from "../Util/Token";
import IPayPalPayment from "./interfaces/IPaypalPayment";

export default class PayPal implements IPayPalPayment{
    
    private token: Token;

    authToken(): Token {
        return new Token();
    }

    sendPayment(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Enviando Pagamento Via PayPal.");
    }

    ReceivePayment(): void {
        console.log("Recebendo Pagamento Via PayPal.");
    }


}