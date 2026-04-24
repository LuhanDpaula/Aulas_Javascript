// "pedidos" = fila de pedidos dos clientes
let pedidos = new Fila();

pedidos.enqueue("Pedido do João");
pedidos.enqueue("Pedido da Maria");
pedidos.enqueue("Pedido da Carla");

// tempo fixo por atendimento
let tempoPorPedido = 2; // minutos

// "total" = soma do tempo total de espera
let total = 0;

while (!pedidos.isEmpty()) {

  // pega o primeiro pedido da fila
  let pedido = pedidos.dequeue();

  // soma o tempo de atendimento
  total += tempoPorPedido;

  console.log(`${pedido} atendido. Tempo acumulado: ${total} minutos`);
}