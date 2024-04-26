import Iitem from "./item/interfaces/Iitem";
import Location from "./Location";
import Game from "./item/Game";

export default class GameItem extends Location{
    
    protected createItem(): Iitem {
        return new Game;
    }

}