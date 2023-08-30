const prompt = require('prompt-sync')();

num = parseInt(prompt("Digite o ano:       "));

function fatorial(num) {

    if (num > 0) {

        if (num == 1) {

            return 1;
    
        } else {
    
            return fatorial(((num - 1) * (num)));
        }

 
    } else {

        return undefined;
    }

       
}


console.log(`${num} = ${fatorial(num)}`);