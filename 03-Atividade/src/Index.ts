import GameItem from "./location/GameItem";
import MovieItem from "./location/MovieItem";
import Location from "./location/Location";

declare var process;

let location : Location;

if(process.argv.includes("game")){
    location = new GameItem;
}
else if(process.argv.includes("movie")){
    location = new MovieItem;
}
else{
    console.log("Selecione o tipo correto!");
}
if(location){
    location.startItem();
}