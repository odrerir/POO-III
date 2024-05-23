import Facebook from "./platforms/Facebook";
import IPlataform from "./platforms/interfaces/IPlataform";
import Twitch from "./platforms/Twitch";
import Youtube from "./platforms/Youtube";
import AdvancedLive from "./Transmissions/AdvancedLive";
import Live from "./Transmissions/Live";

function startLive(plataform : IPlataform){
}

function startAdvancedLive(plataform : IPlataform){
    console.log("Aguarde...");
    const live = new AdvancedLive(plataform);
    live.broadcasting();
    live.result();
    live.subtitles();
    live.comments();
    console.log("_______________");
}

//startLive(new Youtube);
//startLive(new Twitch);
startAdvancedLive(new Youtube);
startAdvancedLive(new Twitch);
startAdvancedLive(new Facebook);