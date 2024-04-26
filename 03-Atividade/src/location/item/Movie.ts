import Iitem from "./interfaces/Iitem"

export default class Movie implements Iitem{
    start(): void {
        this.getDescription();
        console.log("Movie: Procurando filme");
    }
    getDescription(): void {
        console.log("Movie: descricao do filme...");
    }

}