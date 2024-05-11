import SanduicheBuilder from "./builder/SanduicheBuilder";
import Sanduiche from "./products/Sanduiche";
import Director from "./directors/Director";

// Cria um novo builder de sanduíches
const builder = new SanduicheBuilder();

// Cria um novo diretor passando o builder como parâmetro
const director = new Director(builder);

// Constrói um sanduíche tipo XSALADA
director.constructXSalada();
const xSalada: Sanduiche = builder.getSanduiche();
console.log("Criando um sanduíche...");
console.log("Tipo: " + xSalada.getSanduicheType());
console.log("Pão: " + xSalada.getBread());
console.log("Proteína: " + xSalada.getProtein());
console.log("Salada: " + xSalada.getSalad());
console.log("Molhos: " + xSalada.getSauces().map(sauce => sauce.getName()).join(", "));

// Constrói um sanduíche tipo HOTDOG
director.constructHotDog();
const hotDog: Sanduiche = builder.getSanduiche();
console.log("Criando um sanduíche...");
console.log("Tipo: " + hotDog.getSanduicheType());
console.log("Pão: " + hotDog.getBread());
console.log("Proteína: " + hotDog.getProtein());
console.log("Salada: " + hotDog.getSalad());
console.log("Molhos: " + hotDog.getSauces().map(sauce => sauce.getName()).join(", "));
