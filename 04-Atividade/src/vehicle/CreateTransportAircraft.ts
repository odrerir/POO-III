import IAircraft from "./aircraft/interface/IAircraft";

export default class CreateTransportAircraft implements IAircraft{
    
    airplane(): IAircraft{
        startRoute(): void {
            this.getCargo();
            console.log("Bicicleta: Iniciando o trajeto...");
        }

        getCargo(): void {
            console.log("bicicleta: pegou o pacote...");
        }
    }
}