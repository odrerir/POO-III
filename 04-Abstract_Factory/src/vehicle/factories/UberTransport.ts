import Airplane from "../aerial/Airplane";
import IAircraft from "../aerial/interface/IAircraft";
import Car from "../land/Cars";
import ILandVehicle from "../land/interface/ILandVehicle";
import ITransporFactory from "./interfaces/ITransportFactory";

export default class UberTransport implements ITransporFactory{
    createTransportVehicle(): ILandVehicle {
       return new Car();
    }
    createTransportAircraft(): IAircraft {
       return new Airplane();
    }
}
