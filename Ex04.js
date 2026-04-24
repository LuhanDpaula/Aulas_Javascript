// "fila" = representa uma fila (FIFO)
let fila = new Fila();

// enqueue = entrar na fila (final)
fila.enqueue("Lucas");
fila.enqueue("Ana");
fila.enqueue("João");

// enquanto a fila não estiver vazia
while (!fila.isEmpty()) {

  // "tempo" = tempo aleatório de brincadeira
  let tempo = Math.floor(Math.random() * 3000) + 1000;

  // dequeue = remove o primeiro da fila
  console.log(`Brincando: ${fila.dequeue()} por ${tempo}ms`);
}