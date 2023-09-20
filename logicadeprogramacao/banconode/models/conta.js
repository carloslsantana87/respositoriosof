export class Conta{
    constructor(cliente, numero, agencia, saldo){
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;      
        this.agencia = agencia;
        this.datacriacao = new Date().toLocaleDateString(); 
        this.status = true;
        this.trasacoes = []
    }
}