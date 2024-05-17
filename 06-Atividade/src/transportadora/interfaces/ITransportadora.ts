import Token from "../../util/Token";

export default interface ITransportadora{
    authToken(): Token;
    sendCorreios(): void;
    receiveCorreios(): void;
    
}