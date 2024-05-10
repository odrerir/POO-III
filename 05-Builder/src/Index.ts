import VehicleBuilder from "./vehicles/builders/VehicleBuilder";
import Director from "./vehicles/directors/Directors";
import Vehicle from "./vehicles/products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);
director.constructSedanCar();

const sedan: Vehicle = builder.getVehicle();
console.log("Criando um veículo...");
console.log("Tipo: " + sedan.vehicleType);
console.log("Rodas: " + sedan.wheelsTotal);
director.constructTruck();

const truck: Vehicle = builder.getVehicle();
console.log("Criando um veículo...");
console.log("Tipo: " + truck.vehicleType);
console.log("Rodas: " + truck.wheelsTotal);
director.constructMotorcyle();

const motorcycle: Vehicle = builder.getVehicle();
console.log("Criando um veículo...");
console.log("Tipo: " + motorcycle.vehicleType);
console.log("Rodas: " + motorcycle.wheelsTotal);
