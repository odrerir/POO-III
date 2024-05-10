import Clients from "./fastFood/client/Clients";
import Company from "./fastFood/Company";
import AiqfomeDelivery from "./fastFood/deliverys/AiqfomeDelivery";
import IFoodDelivery from "./fastFood/deliverys/IFoodDelivery";
import IDeliveryFactory from "./fastFood/deliverys/interfaces/IDeliveryFactory";

const currentCompany = Company.IFOOD;

let factory : IDeliveryFactory;

switch(currentCompany){
    case Company.AIQFOME : 
        factory = new AiqfomeDelivery();
        break;
    case Company.IFOOD : 
        factory = new IFoodDelivery();
        break;
    default : 
        console.error("Companhia não definida!");
}
const client = new Clients(factory);
client.startDelivery();