const leia = require('readline-sync');


nomes = [];

for(i=0; i<3; i++)
{
    nomes[i] = [];
    for(j=0; j<2; j++)
    {
        msg = `digite o nome da linha ${i} e coluna ${j}:`;
        nomes[i][j] = leia.question(msg);
    }
}
console.table(nomes);