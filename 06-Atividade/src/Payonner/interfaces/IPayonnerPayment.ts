import Token from "../../Util/Token";

export default interface IPayonnerPayment{
    authToken(): Token;
    sendPayment(): void;
    receivePayment(): void;
    
}