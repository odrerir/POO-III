import SanduicheBuilder from "./builder/SanduicheBuilder";
import Director from "./directors/director";
import Sanduiche from "./products/Sanduiche";


// Cria um novo builder de sanduíches
const builder = new SanduicheBuilder();

// Cria um novo diretor passando o builder como parâmetro
const director = new Director(builder);

// Constrói um sanduíche tipo XSALADA
director.constructXSalada();
const xSalada: Sanduiche = builder.getSanduiche();
console.log("Criando um sanduíche...");
console.log("Tipo: " + xSalada.SanduicheType);
console.log("Pão: " + xSalada.bread);
console.log("Proteína: " + xSalada.protein);
console.log("Salada: " + xSalada.salad);
console.log("Molhos: " + xSalada.sauces.getSauces().join(", "));

// Constrói um sanduíche tipo HOTDOG
director.constructHotDog();
const hotDog: Sanduiche = builder.getSanduiche();
console.log("Criando um sanduíche...");
console.log("Tipo: " + hotDog.SanduicheType);
console.log("Pão: " + hotDog.bread);
console.log("Proteína: " + hotDog.protein);
console.log("Salada: " + hotDog.salad);
console.log("Molhos: " + hotDog.sauces.getSauces().join(", "));

