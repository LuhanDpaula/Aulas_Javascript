// "desfazer" = pilha que guarda tudo que o usuário fez
let desfazer = [];

// "refazer" = pilha que guarda o que foi desfeito
let refazer = [];

// Função para digitar uma letra
function digitar(letra) {
  // "letra" = representa o que o usuário digitou
  desfazer.push(letra); // adiciona na pilha principal

  // sempre que digita algo novo, o refazer perde sentido
  refazer = []; // limpa a pilha de refazer
}

// Função para desfazer
function desfazerAcao() {
  // só executa se houver algo para desfazer
  if (desfazer.length > 0) {

    // "ultima" = última ação feita
    let ultima = desfazer.pop();

    // move para a pilha de refazer
    refazer.push(ultima);
  }
}

// Função para refazer
function refazerAcao() {
  // só executa se houver algo para refazer
  if (refazer.length > 0) {

    // "voltar" = ação que vai voltar
    let voltar = refazer.pop();

    // devolve para a pilha principal
    desfazer.push(voltar);
  }
}

// Simulação
digitar("A");
digitar("B");
digitar("C");

desfazerAcao(); // remove C
desfazerAcao(); // remove B
refazerAcao();  // volta B

// join('') junta as letras sem espaço
console.log("Conteúdo atual:", desfazer.join(''));