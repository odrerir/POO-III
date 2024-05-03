import Transport from "./Transport";
import Ivehicle from "./vehicles/interfaces/Ivehicle";
import Bicycle from "./vehicles/bicycle";

export default class Bicycletransport extends Transport{

    protected createTransport(): Ivehicle {
        return new Bicycle();
    }

}