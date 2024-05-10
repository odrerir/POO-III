import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{

    startDelivery(): void {
        this.getFastFood();
        console.log("Iniciando pedido: SoftDrink ")
    }
    getFastFood(): void {
        console.log("enviando pedido: SoftDrink")
    }
    
}