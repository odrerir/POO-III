import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{

    startDelivery(): void {
        this.getFastFood();
        console.log("Iniciando pedido: HotDog")
    }
    getFastFood(): void {
        console.log("Enviando pedido: HotDog")
    }
    
}