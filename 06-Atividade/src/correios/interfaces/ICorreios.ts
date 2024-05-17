import Token from "../../util/Token";

export default interface ICorreios{

    authToken(): Token;
    sendCorreios(): void;
    receiveCorreios(): void;
    
}