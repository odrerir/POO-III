import SanduicheType from "../components/SanduicheType";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Sauces from "../components/Sauces";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./interfaces/IBuilder";
import Salad from "../components/Salad";

export default class SanduicheBuilder implements IBuilder {
  
  private sanduiche = new Sanduiche();
  reset(): void {
    this.sanduiche = new Sanduiche();
  }
  getSanduiche() {
    const result: Sanduiche = this.sanduiche;
    this.reset();
    return result;
  }
  setSanduicheType(SanduicheType: SanduicheType) {
    this.sanduiche.sanduicheType = SanduicheType;
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
  addSauce(sauce: Sauces) {
    this.sanduiche.addSauce(sauce);
  }
}
