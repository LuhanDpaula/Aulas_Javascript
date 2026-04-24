// "modulos" = representa os módulos empilhados
let modulos = [];

// push = adicionar no topo
modulos.push("Módulo Alpha");
modulos.push("Módulo Beta");
modulos.push("Módulo Gama");

console.log("Ordem de retorno:");

// enquanto houver módulos
while (modulos.length > 0) {
  // pop remove o último que entrou
  console.log("Retornando:", modulos.pop());
}