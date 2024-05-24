import AdvancedPlay from "./games/AdvancedPlay";
import Playstation from "./plataforms/Playstation";
import Xbox from "./plataforms/Xbox";
import IConsole from "./plataforms/interfaces/IConsole";

function startAdvancedPlay(plataform : IConsole){
    console.log("Carregando...");
    const play = new AdvancedPlay(plataform);
    play.playing();
    play.result();
    play.Challenge();
    console.log("______________________");
};

startAdvancedPlay(new Playstation);
startAdvancedPlay(new Xbox);

