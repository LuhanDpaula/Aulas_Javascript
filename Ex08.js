// "compras" = lista de itens
let compras = new LinkedList();

// adiciona no começo
compras.insertAtBeginning("Arroz");

// adiciona no final
compras.insertAtEnd("Feijão");
compras.insertAtEnd("Leite");

compras.printList();

// remove item específico
compras.removeByValue("Feijão");

compras.printList();

// busca item
let item = compras.find("Leite");

// operador ternário (if curto)
console.log(item ? "Item encontrado!" : "Não encontrado.");