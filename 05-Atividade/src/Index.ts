import SanduicheBuilder from "./builder/SanduicheBuilder";
import Sanduiche from "./products/Sanduiche";
import Director from "./directors/Director";

const builder = new SanduicheBuilder();

const director = new Director(builder);

// Constrói um sanduíche tipo XSALADA
director.constructXSalada();
const xSalada: Sanduiche = builder.getSanduiche();

console.log("Criando um sanduíche XSalada...");
console.log("Tipo: " + xSalada.sanduicheType);
console.log("Pão: " + xSalada.bread);
console.log("Proteína: " + xSalada.protein);
console.log("Salada: " + xSalada.salad);
console.log("Molhos:");
xSalada.sauces.forEach((sauce) => { console.log("- " + sauce); });

// Constrói um sanduíche tipo HOTDOG
director.constructHotDog();
const hotDog: Sanduiche = builder.getSanduiche();

console.log("Criando um sanduíche Hot Dog...");
console.log("Tipo: " + hotDog.sanduicheType);
console.log("Pão: " + hotDog.bread);
console.log("Proteína: " + hotDog.protein);
console.log("Salada: " + hotDog.salad);
console.log("Molhos:");
hotDog.sauces.forEach((sauce) => { console.log("- " + sauce); });
