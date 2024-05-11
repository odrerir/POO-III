import SanduicheType from '../components/SanduicheType';
import Bread from '../components/Bread';
import Protein from '../components/Protein';
import Salad from '../components/Salad';
import Sauces from '../components/Sauces';

export default class Sanduiche {
    private _sanduicheType : SanduicheType;
    private _bread: Bread;
    private _protein: Protein;
    private _salad: Salad;
    private _sauces: Sauce[] = [];

	public get sanduicheType(): SanduicheType {
		return this._sanduicheType;
	}

	public get bread(): Bread {
		return this._bread;
	}

	public get protein(): Protein {
		return this._protein;
	}

	public get salad(): Salad {
		return this._salad;
	}

	public get sauces(): Sauce[]  {
		return this._sauces;
	}

	public set sanduicheType(value: SanduicheType) {
		this._sanduicheType = value;
	}

	public set bread(value: Bread) {
		this._bread = value;
	}

	public set protein(value: Protein) {
		this._protein = value;
	}

	public set salad(value: Salad) {
		this._salad = value;
	}

	public set sauces(value: Sauce[] ) {
		this._sauces = value;
	}
    public addSauce(sauce: Sauce){
        this.sauces.push(sauce);
    }
}
