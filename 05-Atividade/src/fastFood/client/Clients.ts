import IDeliveryFactory from "../deliverys/interfaces/IDeliveryFactory";
import IDrink from "../drink/interfaces/IDrink";
import IFood from "../food/interfaces/IFood";

export default class Clients{

    private drink : IDrink;
    private food : IFood;

    constructor(factory: IDeliveryFactory){
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();
    }

    startDelivery() : void{
        this.drink.startDelivery();
        this.food.startDelivery();
    }
}