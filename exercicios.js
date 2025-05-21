// 1. Arrow function contarPares
const contarPares = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

console.log("Exercício 1: Contar números pares até 10");
contarPares(10);
console.log("-------------------");

// 2. Desestruturação de objeto
const livro = {
  titulo: "JavaScript Essencial",
  autor: "Alana Souza",
  ano: 2024,
  sinopse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  editora: "Mundo Dev"
};

const { titulo, ano } = livro;
console.log("Exercício 2: Desestruturação");
console.log(`Título: ${titulo}`);
console.log(`Ano: ${ano}`);
console.log("-------------------");  

// 3. Operador spread
const frutas = ["maçã", "banana"];
const frutasAdicionais = ["laranja", "abacaxi"];
const todasAsFrutas = [...frutas, ...frutasAdicionais];

console.log("Exercício 3: Operador spread");
console.log("Array original:", frutas);
console.log("Todas as frutas:", todasAsFrutas);
console.log("-------------------");

// 4. Arrow function com condição AND
const verificarAcesso = (idade, temIngresso) => {
  if (idade >= 18 && temIngresso) {
    console.log("Acesso permitido");
  } else {
    console.log("Acesso negado");
  }
};

console.log("Exercício 4: Verificar acesso");
console.log("Caso 1: 20 anos, com ingresso");
verificarAcesso(20, true);
console.log("Caso 2: 17 anos, com ingresso");
verificarAcesso(17, true);
console.log("Caso 3: 20 anos, sem ingresso");
verificarAcesso(20, false);
console.log("-------------------");

// 5. Arrow function com condição OR
const exibirAviso = (estaChovendo, semGuardaChuva) => {
  if (estaChovendo || semGuardaChuva) {
    console.log("Leve um guarda-chuva!");
  } else {
    console.log("Tudo certo, pode sair tranquilo");
  }
};

console.log("Exercício 5: Exibir aviso");
console.log("Caso 1: Está chovendo, tem guarda-chuva");
exibirAviso(true, false);
console.log("Caso 2: Não está chovendo, sem guarda-chuva");
exibirAviso(false, true);
console.log("Caso 3: Não está chovendo, tem guarda-chuva");
exibirAviso(false, false);
