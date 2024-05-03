import IAircraft from "src/vehicle/aerial/interface/IAircraft";
import ILandVehicle from "src/vehicle/land/interface/ILandVehicle";

export default interface ITransporFactory{
    createTransportVehicle(): ILandVehicle;
    createTransportAircraft() : IAircraft;
}