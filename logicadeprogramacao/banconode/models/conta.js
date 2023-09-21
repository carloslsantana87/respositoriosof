import { TIPOTRANSACAO } from "./tipotransacao.js";
import { Transacao } from "./transacao.js";

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
    depositar(valor){
        this.saldo += valor;
        let trans = new Transacao(TIPOTRANSACAO.creditar,new LocaleDateString(), valor, null, null, null, '+')
        this.trasacoes.push(trans);
    }
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            let trans = new Transacao(TIPOTRANSACAO.debitar,new LocaleDateString(), valor, null, null, null, '-')
            this.trasacoes.push(trans);
        } else{
            console.log('saldo insuficiente');
        }
    }
        
}