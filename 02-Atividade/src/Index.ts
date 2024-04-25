import CarTrasport from "./transport/CarTransport";
import MotorcycleTransport from "./transport/MotorcycleTransport";
import Bicycletransport from "./transport/BicycleTransport";
import Transport from "./transport/Transport";

declare var process;

let transport : Transport;

if(process.argv.includes("uber")){
    transport = new CarTrasport();
}
else if(process.argv.includes("eats")){
    transport = new MotorcycleTransport();
}
else if(process.argv.includes("bike")){
    transport = new Bicycletransport();
}
else{
    console.log("Selecione o tipo correto de transporte!");
}
if(transport){
    transport.startTransport();
}