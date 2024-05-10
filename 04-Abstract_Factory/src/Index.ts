import Company from "./vehicle/Company";
import Client from "./vehicle/client/Clients";
import NineNineTransport from "./vehicle/factories/NineNineTransport";
import UberTransport from "./vehicle/factories/UberTransport";
import ITransporFactory from "./vehicle/factories/interfaces/ITransportFactory";

const currentCompany = Company.UBER;
let factory : ITransporFactory;
switch(currentCompany){
    case Company.UBER : 
        factory = new UberTransport();
        break;
    case Company.NINENINE : 
        factory = new NineNineTransport();
        break;
    default : 
        console.error("Companhia não definida!");
}
const client = new Client(factory);
client.startRoute();