import IDrink from "src/fastFood/drink/interfaces/IDrink";
import IFood from "src/fastFood/food/interfaces/IFood";

export default interface IDeliveryFactory{

    createDeliveryDrink: IDrink;
    createDeliveryFood: IFood;
}