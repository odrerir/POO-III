import IAircraft from "../aerial/interface/IAircraft";
import ITransporFactory from "../factories/interfaces/ITransportFactory";
import ILandVehicle from "../land/interface/ILandVehicle";

export default class Client{
    private vehicle : ILandVehicle;
    private aircraft : IAircraft;

    constructor(factory: ITransporFactory){

        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
   
    }

    startRoute() : void{
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }
}