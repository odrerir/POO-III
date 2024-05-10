import SanduicheType from '../components/SanduicheType';
import Bread from '../components/Bread';
import Protein from '../components/Protein';
import Salad from '../components/Salad';
import Sauces from '../components/Sauces';

export default class Sanduiche {
    private SanduicheType: SanduicheType;
    private bread: Bread;
    private protein: Protein;
    private salad: Salad;
    private sauces: Sauces;

    constructor() {
        this.SanduicheType = SanduicheType.XSALADA; 
        this.bread = Bread.PAO_FRANCES; 
        this.protein = Protein.HAMBURGUER;
        this.salad = Salad.LETTUCE; 
        this.sauces = new Sauces(); 
    }

    getSanduicheType(): SanduicheType {
        return this.SanduicheType;
    }

    setSanduicheType(type: SanduicheType): void {
        this.SanduicheType = type;
    }

    getBread(): Bread {
        return this.bread;
    }

    setBread(bread: Bread): void {
        this.bread = bread;
    }

    getProtein(): Protein {
        return this.protein;
    }

    setProtein(protein: Protein): void {
        this.protein = protein;
    }

    getSalad(): Salad {
        return this.salad;
    }

    setSalad(salad: Salad): void {
        this.salad = salad;
    }

    getSauces(): Sauces {
        return this.sauces;
    }

    addSauce(sauce: string): void {
        this.sauces.addSauce(sauce);
    }
}
