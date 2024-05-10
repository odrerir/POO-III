import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Sauces from "../components/Sauces";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./interfaces/IBuilder";

export default class SanduicheBuilder implements IBuilder {
    setbread(seats: Bread): void {
        throw new Error("Method not implemented.");
    }
    private sanduiche = new Sanduiche();
    reset(): void {
      this.sanduiche = new Sanduiche();
    }
    getSanduiche(){
      const result: Sanduiche = this.sanduiche;
      this.reset();
      return result;
    }
    setSanduicheType(value: Sanduiche) {
      this.sanduiche.SanduicheType = value;
    }
    setBread(bread: Bread) {
      this.sanduiche.bread = bread;
    }
    setProtein(protein: Protein) {
      this.sanduiche.protein = protein;
    }
    setSalad(salad: Salad) {
      this.sanduiche.salad = salad;
    }
    addSauces(sauces: string[]): void {
        const saucesObj = new Sauces(sauces);
        this.sanduiche.setSauces(saucesObj);
    }
  }