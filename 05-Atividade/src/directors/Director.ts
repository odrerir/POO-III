import IBuilder from '../builder/interfaces/IBuilder';
import SanduicheType from '../components/SanduicheType';
import Bread from '../components/Bread';
import Protein from '../components/Protein';
import Salad from '../components/Salad';
import Sauces from '../components/Sauces';

export default class Director {
    constructor(private builder: IBuilder) {}

    constructXSalada() {

        // Constrói um sanduíche tipo XSALADA
        this.builder.setSanduicheType(SanduicheType.XSALADA);
        this.builder.setBread(Bread.PAO_FRANCES);
        this.builder.setProtein(Protein.HAMBURGUER);
        this.builder.setSalad(Salad.LETTUCE);
        this.builder.addSauce(new Sauces("Maionese"));
        this.builder.addSauce(new Sauces("Katchup"));

        return this.builder.getSanduiche();
    }

    constructHotDog() {
        this.builder.reset(); 

        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(Bread.HOT_DOG);
        this.builder.setProtein(Protein.SALSICHA);
        this.builder.setSalad(Salad.CUCUMBER);
        this.builder.addSauce(new Sauces("Maionese"));
        this.builder.addSauce(new Sauces("Katchup"));

        return this.builder.getSanduiche();
    }
}
