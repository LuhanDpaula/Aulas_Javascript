// "trem" = lista de vagões conectados
let trem = new DoublyLinkedList();

// append = adiciona no final
trem.append("Vagão 1");
trem.append("Vagão 2");

// prepend = adiciona no começo
trem.prepend("Locomotiva");

console.log("Trem normal:");
trem.traverse(); // percorre do início ao fim

console.log("Trem reverso:");
trem.traverseReverse(); // percorre do fim ao início