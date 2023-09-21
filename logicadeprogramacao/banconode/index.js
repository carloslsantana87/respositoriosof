import {Endereco} from "./models/endereco.js";
import {Agencia } from "./models/agencia.js";
import {Cliente} from "./models/cliente.js";
import {Conta } from "./models/conta.js";


console.log("Olá, Carlos");

let endagencia = new Endereco(pe, 50650455,"recife","rua da guilherme","recife");
let dadosag = new Agencia("softex", "rua da guilherme");
let clinovo = new Cliente("carlos", 021873244294);
let contegito = new Conta(clinovo, dadosag, endagencia);

contegito.depositar(200);
contegito.depositar(500);

console.log(contegito);