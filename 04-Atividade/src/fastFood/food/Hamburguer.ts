import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{

    startDelivery(): void {
        this.getFastFood();
        console.log("Iniciando pedido: Hamburguer")
    }
    getFastFood(): void {
        console.log("Enviando pedido: Hamburguer")
    }
    
}