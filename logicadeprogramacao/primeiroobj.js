var minhaTv = new Object ();

minhaTv.marca = "lg";
minhaTv.modelo = "LDE5545";
minhaTv.tamanho = 55;

console.log(minhaTv);

var casa = {cor: "azul", preço: 20000, area: 345, quarto: 6, localização: "Afogados"};

console.log(casa);

function Banco(conta, saldo, tipo) {
    this.conta = conta;
    this.saldo = saldo; 
    this.tipo = tipo;   
}

var minhaConta = new Banco(2323, 100.5, "poupança");

function saldoValor() {
    console.log(this.saldo);
}

console.log(minhaConta.conta);
console.log(minhaConta);