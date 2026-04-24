/*
// NUNCA ESQUEÇA O "const leia = require('readline-sync');"

console.log("Olá mundo");


let nome = leia.question("qual o seu nome?");

console.log("olá " + nome);
*/

// NUNCA ESQUEÇA O "const leia = require('readline-sync');"


/*
PARA INSERIR DADOS MANUALMENTE CASO EU ESQUEÇA

const leia = require('readline-sync');

let a = leia.questionInt("digite o valor de A: ");

ou pode ser let a = leia.questionFloat("digite o valor de A: ");
caso seja um número com vírgula

let b = leia.questionInt("digite o valor de B: ");

ai você só precisa chamar a função, sem colocar os parametros no console log
*/

function somar(a, b)
{
    let resultado = 0;
    resultado = a + b;
    return resultado;
}

console.log( somar(5, 4) );

















































