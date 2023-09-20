import { No } from "./no.js";

export class Listaencadeada {
    constructor (){

        this.contador = 0;
        this.cabeca = null;
    }
//equivalo ao unshift
    addNoinicio (conteudo) {
        let novoNo = new No(conteudo, null);
        if (this.cabeca === null) {
           this.cabeca = novoNo;
           this.contador++;
        } else {
            novoNo.proximo = this.cabeca;
            this.cabeca = novoNo;
            this.contador++;
        }
    }

}

addNonofim (conteudo) {

    let final = new No(conteudo, null)

}