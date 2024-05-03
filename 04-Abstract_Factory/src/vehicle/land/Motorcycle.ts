import ILandVehicle from "./interface/ILandVehicle";

export default class Motorcyle implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando o trajeto Moto...");
    }
    getCargo(): void {
        console.log("Já pegamos a encomenda!");
    }
}