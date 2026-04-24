class node
{
    constructor(dados, proximo = null)
    {
        this.dados = dados;
        this.proximo = proximo;
    }
}

class ListaEncadeada
{
    constructor()
    {
        this.cabeca = null;
        this.tamanho = 0;
    }

    //inserir no primeiro nó
    inserirPrimeiro(dados)
    {
        this.cabeca = new node(dados, this.cabeca);
        this.tamanho++;
    }

    //inserir no ultimo nó
    inserirUltimo(dados)
    {
        let noh = new node(dados);
        let atual;

        //se estiver vazio, vira cabeça
        if(!this.cabeca)
        {
            this.cabeca = noh;
        }
        else
        {
            atual = this.cabeca;

            while(atual.proximo)
            {
                atual = atual.proximo;
            }

            atual.proximo = noh;
        }
        this.tamanho++;
    }

    //inserir no indice
    inserirEm(dados, indice)
    {
        // se o indice tá fora de alcance (não existe)
        if(indice > 0 && indice > this.tamanho)
        {
            return;
        }
        
        //se for no primeiro indice
        if(indice === 0)
        {
            this.cabeca = new node(dados, this.cabeca);
            return;
        }

        const noh = new node(dados);
        let atual, anterior;

        //deixar o atual como primeiro
        atual = this.cabeca;
        let count = 0;

        while(count < indice)
        {
            anterior = atual; //node antes do indice
            count++;
            atual = atual.proximo; //node depois
        }

        noh.proximo = atual;
        anterior.proximo = noh;

        this.tamanho++;
    } 

    //chegar em indice
    chegarEm(indice)
    {
        let atual = this.cabeca;
        let count = 0;
        
        while(atual)
        {
            if(count == indice)
            {
                console.log(atual.dados);
            }
            count++;
            atual = atual.proximo;
        }
        return null;
    }

    // remover no indice
    removerEm(indice)
    {
        if(indice > 0 && indice > this.tamanho)
        {
            return;
        }

        let atual = this.cabeca;
        let anterior;
        let count = 0;

        //remove o primeiro
        if(indice === 0)
        {
            this.head = atual.proximo; // coloca a cabeca aonde tá o próximo node
        }
        else
        {
            while(count < indice)
            {
                count++;
                anterior = atual;
                atual = atual.proximo;
            }

            anterior.proximo = atual.proximo;
        }
        this.tamanho--;
    } 

    //limpar lista
    limparLista()
    {
        this.cabeca = null; // se tirar a cabeça o resto do corpo some
        this.tamanho = 0;
    }

    //imprimir dados da lista
    imprimirDados()
    {
        let atual = this.cabeca;

        while(atual)
        {
            console.log(atual.dados);
            atual = atual.proximo;
        }
    }
}


const LE = new ListaEncadeada();

const leia = require('readline-sync');

LE.inserirPrimeiro(100);
LE.inserirPrimeiro(200);
LE.inserirPrimeiro(300);
LE.inserirUltimo(400);

// LE.removerEm(3);

LE.limparLista();

LE.imprimirDados();

/*
console.log("____________");
let index = leia.questionInt("qual posicao voce quer checar?: ");
console.log(`valor da posicao ${index}: `);
LE.chegarEm(index);
*/