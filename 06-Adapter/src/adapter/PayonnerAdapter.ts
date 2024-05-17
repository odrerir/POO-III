import Payonner from "../Payonner/Payonner";
import IPayPalPayment from "../paypal/interfaces/IPaypalPayment";
import Token from "../Util/Token";

export default class PayonnerAdapter implements IPayPalPayment{
    constructor(private payonner: Payonner){
        
    }
    authToken(): Token {
        return new Token;
    }
    sendPayment(): void {
        this.payonner.sendPayment();
    }
    ReceivePayment(): void {
        this.payonner.receivePayment();
    }

}