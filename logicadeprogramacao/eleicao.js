//const prompt = require('prompt-sync')();

//Legenda
const CANDIDATOS = {
    aneNome: "Cleidiane Nunes",
    aneNumero: 889,
    jorgeNome: "Jorge Braga",
    jorgeNumero: 847,
    renanNome: "Renan Souza",
    renanNumero: 515,
    brancoNome: "Branco",
    brancoNum: 0,
    nuloNome: "Nulo"
}

//Zereisma
var qtdVotosAne = 0;
var qtdVotosJorge = 0;
var qtdVotosRenan = 0;
var qtdVotosBranco = 0;
var qtdVotosNulos = 0;

//Início da eleição
do {

    do {
        var testeLetra = false;
        let voto = prompt(`         Bem-vindo a votação!
        Candidatos:
            ${CANDIDATOS.aneNome} : ${CANDIDATOS.aneNumero}
            ${CANDIDATOS.jorgeNome} : ${CANDIDATOS.jorgeNumero}
            ${CANDIDATOS.renanNome} : ${CANDIDATOS.renanNumero}
            ${CANDIDATOS.brancoNome} : ${CANDIDATOS.brancoNum}
        Vote:`);
        //erro
        alert(String(voto).length);

        for(let i = 0 ; i < voto.length ; i++){
            if (isNaN(Number(voto[i]))) {
                testeLetra = true;
                break;
            }
        }

        for (const i in voto) {
            if (isNaN(Number(voto[i]))) {
                testeLetra = true;
            }
        }
        alert(testeLetra);
    } while (testeLetra);

} while (false);