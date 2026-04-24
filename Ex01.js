// "stack" = nome em inglês para PILHA
// usamos esse nome porque é exatamente a estrutura usada (LIFO)
let stack = [];

// "cartas" = lista com os valores que vamos empilhar
// nome escolhido porque representa exatamente o que os dados são
let cartas = ['A', 'B', 'C', 'D', 'E'];

// Empilhando (push = colocar no topo da pilha)
for (let carta of cartas) {
  // "carta" é o nome da variável porque cada item do array é uma carta
  stack.push(carta);
}

console.log("Pilha completa:", stack);

// Desempilhando (pop = tirar do topo)
while (stack.length > 0) {
  // stack.length > 0 = enquanto ainda existir carta na pilha
  console.log("Retirando carta:", stack.pop());
}