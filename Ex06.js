// duas filas separadas
let filaNormal = new Fila();
let filaPreferencial = new Fila();

// função para adicionar na fila
function enfileirar(nome, idade) {

  // "nome" = nome do cliente
  // "idade" = usado para decidir prioridade

  if (idade >= 60) {
    filaPreferencial.enqueue(nome); // prioridade
  } else {
    filaNormal.enqueue(nome); // normal
  }
}

// função de atendimento
function atender() {

  // se houver alguém na fila preferencial
  if (!filaPreferencial.isEmpty()) {
    return filaPreferencial.dequeue();
  } 
  // senão atende a fila normal
  else {
    return filaNormal.dequeue();
  }
}

// adicionando pessoas
enfileirar("Dona Maria", 65);
enfileirar("Carlos", 30);
enfileirar("Seu João", 70);
enfileirar("Ana", 25);

// enquanto ainda houver alguém
while (!filaNormal.isEmpty() || !filaPreferencial.isEmpty()) {
  console.log("Atendendo:", atender());
}