const prompt = require('prompt-sync')();
var abrirMov;
const vagas = 2;
abrirMov = prompt("Deseja abrir o movimento: - S - Sim | N - Não        ").toUpperCase();
if (abrirMov == "S") {


    var area = [];
    for (var i = 1; i <= vagas; i++){
        
        area.push (i);
    }
    console.log("Iniciando movimento!");
   console.log(area);
    }else{
        
        throw new Error('Movimento não foi iniciado!');
    }







