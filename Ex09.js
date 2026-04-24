// "playlist" = lista de músicas
let playlist = new LinkedList();

playlist.insertAtEnd("Música A");
playlist.insertAtEnd("Música B");
playlist.insertAtEnd("Música C");

playlist.printList();

// remove música específica
playlist.removeByValue("Música B");

playlist.printList();

// busca música
let musica = playlist.find("Música C");

// "musica.value" = valor dentro do nó
console.log(musica ? "Tocando: " + musica.value : "Música não encontrada");