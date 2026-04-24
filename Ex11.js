// "editor" = representa o texto digitado
let editor = new DoublyLinkedList();

// inserindo letras por posição
editor.insertAt("H", 0);
editor.insertAt("e", 1);
editor.insertAt("l", 2);
editor.insertAt("l", 3);
editor.insertAt("o", 4);

editor.traverse(); // mostra "Hello"

// remove posição 1 (letra 'e')
editor.removeAt(1);

editor.traverse(); // mostra "Hllo"