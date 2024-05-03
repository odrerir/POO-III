import Helicopter from "../aerial/Helicopter";
import IAircraft from "../aerial/interface/IAircraft";
import Motorcyle from "../land/Motorcycle";
import ILandVehicle from "../land/interface/ILandVehicle";
import ITransporFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransporFactory{
    createTransportVehicle(): ILandVehicle {
        return new Motorcyle();
    }
    createTransportAircraft(): IAircraft {
       return new Helicopter();
    }
}