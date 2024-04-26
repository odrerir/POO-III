import Iitem from "./item/interfaces/Iitem";

export default abstract class Location{

    startItem() : void{
        const item = this.createItem();
        item.start();
    }
    protected abstract createItem(): Iitem;
}