const prompt = require('prompt-sync')();

const PI = 3.14;
var raio, area, volume;

raio = parseFloat(prompt("Digite o raio:       "));


function area (raio) {
    return ((4 * PI)*raio**2);
   
}

function volume (raio) {
    return ((4/3)*PI*raio**3);
}

//raio = parseFloat(prompt("Digite o raio:       "));

//area();
//volume();

console.log(area.retur);
console.log(volume);
