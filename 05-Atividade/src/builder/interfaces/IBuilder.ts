import Bread from "../../components/Bread";
import Protein from "../../components/Protein";
import Salad from "../../components/Salad";
import SanduicheType from "../../components/SanduicheType";
import Sauces from "../../components/Sauces";
import Sanduiche from "../../products/Sanduiche";

export default interface IBuilder{
    reset(): void;
    getSanduiche(): Sanduiche;
    setSanduicheType(SanduicheType: SanduicheType): any;
    setBread(bread: Bread): any;
    setProtein(protein: Protein): any;
    setSalad(salad: Salad): any;
    addSauce(sauce: Sauces): any;
}