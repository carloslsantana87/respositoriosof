
const prompt = require('prompt-sync')();

let aprovd = prompt('Entre com a média do aluno:');

// check the condition
let result = (aprovd >= 7) ? 'Aprovado!' : 'Reprovado!';

console.log(`O aluno foi ${result} na disciplina!`);