// "historico" = páginas visitadas
let historico = new DoublyLinkedList();

historico.append("google.com");
historico.append("youtube.com");
historico.append("github.com");

console.log("Últimos acessos (ordem reversa):");

// mostra do mais recente para o mais antigo
historico.traverseReverse();

console.log("Buscando 'github.com':");

// find retorna índice
let idx = historico.find("github.com");

// se encontrou (índice >= 0)
console.log(idx >= 0 ? `Encontrado no índice ${idx}` : "Não encontrado");