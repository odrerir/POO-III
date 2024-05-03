import Transport from "./Transport";
import Car from "./vehicles/Car";
import Ivehicle from "./vehicles/interfaces/Ivehicle";


export default class CarTrasport extends Transport{

    protected createTransport(): Ivehicle {
        return new Car();
    }

}