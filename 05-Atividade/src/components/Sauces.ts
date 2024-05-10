export default class Sauces {
    private sauces: string[] = [];

    constructor(sauces: string[] = []) {
        this.sauces = sauces;
    }

    addSauce(sauce: string) {
        this.sauces.push(sauce);
    }

    getSauces(): string[] {
        return this.sauces;
    }
}
