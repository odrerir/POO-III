import Transport from "./Transport";
import Motorcycle from "./vehicles/Motorcycle";
import Ivehicle from "./vehicles/interfaces/Ivehicle";


export default class MotorcycleTransport extends Transport{

    protected createTransport(): Ivehicle {
        return new Motorcycle();
    }
}