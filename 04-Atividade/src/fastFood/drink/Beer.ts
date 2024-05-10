import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{

    startDelivery(): void {
        this.getFastFood();
        console.log("Iniciando pedido: Beer")
    }
    getFastFood(): void {
        console.log("Enviando pedido: berr")
    }
    
}