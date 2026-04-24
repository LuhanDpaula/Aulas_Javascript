const leia = require('readline-sync');
/*
nomes =[];
// nomes =['João', 'Maria', 'José', 'Pedro', 'Matias'];

// nomes[0] = "Russwald"
nomes[1] = "João"
nomes[2] = "Maria"
nomes[3] = "José"
nomes[4] = "Pedro"
nomes[5] = "Matias"

// console.log(nomes);
console.table(nomes);
*/

nomes =[];

/*
for(let i=0; i<5; i++)
    nomes[i] = leia.question("digite seu nome: ");
console.table(nomes);
*/
for(let i=0; i<5; i++)
{
    msg = "Digite o nome na posicao " + i + ":";
    nomes[i] = leia.question(msg);
}

for(let i=0; i<5; i++)
    console.log(`o nome na posicao ${i} é ${nomes[i]}`);