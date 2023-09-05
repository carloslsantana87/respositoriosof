notaDoaluno = [ 9,8,7];
notaTurma = [[9,8,7],[7,6,7]];
var media;
notaDoaluno.unshift(10);

console.log(notaDoaluno)

console.log(notaTurma[1][2]);

console.log(notaDoaluno[1]);

notaTurmaobjetoaluno =[{nome: "Alex Lopes", notas: [9,9,10], matricula: 198788},
{nome: "carlos santana", notas: [9,9,10], matricula: 198788}];

console.log(notaTurmaobjetoaluno);

media = 0.0;

notaDoaluno.forEach(element => {
    media += element;
});

media /= notaDoaluno.length;

console.log(media)