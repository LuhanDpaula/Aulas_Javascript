
/*
const leia = require('readline-sync');

let nota1 = leia.questionFloat("digite o valor da nota 1: ");
let nota2 = leia.questionFloat("digite o valor da nota 2: ");

function media(primeira_nota, segunda_nota)
{
    soma = primeira_nota + segunda_nota;
    media = soma/2;
    return media;
}

console.log("a média do aluno é: " + media(nota1, nota2));
*/

let nota1 = 0;
let nota2 = 0;
function ler_notas()
{
    const leia = require('readline-sync');

    nota1 = leia.questionFloat("digite o valor da nota 1: ");
    nota2 = leia.questionFloat("digite o valor da nota 2: ");
}



function media(primeira_nota, segunda_nota)
{
    soma = primeira_nota + segunda_nota;
    media = soma/2;
    return media;
}

ler_notas();
console.log("a média do aluno é: " + media(nota1, nota2));
