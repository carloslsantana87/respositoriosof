export class Transacao{
    constructor(tipo, data, valor, cliTransferencia, tipovalor) {
        this.valor = valor;
        this.data = data;
        this.tipo = tipo;
        this.tipovalor = tipovalor;
        this.cliTransferencia = cliTransferencia;
    }
}