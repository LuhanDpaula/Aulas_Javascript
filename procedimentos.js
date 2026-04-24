/*
function descobre_idade(ano_atual, ano_nascimento)
{
    return ano_atual - ano_nascimento;
}


function diz_idade(idade)
{
    msg = `você tem ${idade} anos!`;
    console.log(msg);
}


diz_idade( descobre_idade(2026, 2006) );
*/

const leia = require('readline-sync');

function descobre_idade(ano_atual, ano_nascimento)
{
    ano_atual = leia.questionInt("digite o ano atual: ")
    ano_nascimento = leia.questionInt("digite seu ano de nascimento: ")
    return ano_atual - ano_nascimento;
}


function diz_idade(idade)
{
    let msg = `você tem ${idade} anos!`;
    console.log(msg);
}


diz_idade( descobre_idade() );