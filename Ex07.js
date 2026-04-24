// "corrida" = lista de corredores
let corrida = new LinkedList();

corrida.insertAtEnd("Corredor 1");
corrida.insertAtEnd("Corredor 2");
corrida.insertAtEnd("Corredor 3");

console.log("Passagem do bastão:");
corrida.printList();

// simula remoção de um corredor
console.log("Corredor 2 machucou!");
corrida.removeByValue("Corredor 2");

corrida.printList();