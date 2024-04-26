import Iitem from "./item/interfaces/Iitem";
import Location from "./Location";
import Movie from "./item/Movie";

export default class MovieItem extends Location{
    
    protected createItem(): Iitem {
        return new Movie;
    }

}