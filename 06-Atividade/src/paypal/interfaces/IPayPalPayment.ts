import Token from "../../Util/Token";

export default interface IPayPalPayment{
    
    authToken(): Token;
    sendPayment(): void;
    ReceivePayment(): void;
}