import Token from "../util/Token";
import Correios from "../correios/Correios";
import ITransportadora from "../transportadora/interfaces/ITransportadora";

export default class CorreiosAdapter implements ITransportadora{
    constructor(private correios: Correios){
    }

    sendCorreios(): void {
        this.correios.sendCorreios();
    }
    receiveCorreios(): void {
        this.correios.receiveCorreios();
    }
    authToken(): Token {
        return new Token;
    }

}