import { Endereco } from "./Endereco";
import { Telefone } from "./Telefone";
import { Cliente } from "./Cliente";
import { Produto } from "./Produto";
import { Venda } from "./Venda";

class Index {
    // Declaração dos objetos
    produto1: Produto;
    telefone1: Telefone;
    endereco1: Endereco;
    cliente1: Cliente;
    venda1: Venda;

    // Construtor da classe Index
    constructor() {
        // Inicialização dos objetos
        this.produto1 = new Produto(101, "Notebook", 4, 432);
        this.telefone1 = new Telefone(42, 991272342, "Celular");
        this.endereco1 = new Endereco("Jasmim", "486", "Telêmaco Borba", "Paraná");
        this.cliente1 = new Cliente("Victor", "10180944902", "01082003", "masculino", this.endereco1, this.telefone1);
        this.venda1 = new Venda(1, "08042024", this.cliente1, this.produto1);
    }
}

// Exemplo de utilização
const index = new Index();
console.log(index.cliente1);
console.log(index.produto1);
console.log(index.telefone1);
console.log(index.endereco1);
console.log(index.venda1);
