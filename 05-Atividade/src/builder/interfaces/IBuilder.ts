import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";
import Sanduiche from "../products/Sanduiche";

export default interface IBuilder {
    reset(): void;
    getSanduiche(): Sanduiche;
    setSanduicheType(value: SanduicheType): void; 
    setbread(seats: Bread): void; 
    setProtein(protein: Protein): void; 
    setSalad(salad: Salad): void; 
    addSauces(sauces: Sauces): void;
  }