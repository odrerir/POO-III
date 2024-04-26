import Iitem from "./interfaces/Iitem"

export default class Game implements Iitem{
    start(): void {
        this.getDescription();
        console.log("Game: Procurando jogo");
    }
    getDescription(): void {
        console.log("Game: descricao do jogo...");
    }

}