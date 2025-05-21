export const exerciseData = [
  {
    id: 1,
    title: "Contar Números Pares",
    description: "Arrow function que exibe todos os números pares de 0 até n usando um laço for.",
    code: `const contarPares = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

// Exemplo de uso
contarPares(10);`,
  },
  {
    id: 2,
    title: "Desestruturação de Objeto",
    description: "Extrair propriedades de um objeto usando desestruturação.",
    code: `const livro = {
  titulo: "JavaScript Essencial",
  autor: "Alana Souza",
  ano: 2024,
  sinopse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  editora: "Mundo Dev"
};

// Desestruturação
const { titulo, ano } = livro;
console.log(\`Título: \${titulo}\`);
console.log(\`Ano: \${ano}\`);`,
  },
  {
    id: 3,
    title: "Operador Spread",
    description: "Criar um novo array combinando arrays existentes com o operador spread.",
    code: `const frutas = ["maçã", "banana"];
const frutasAdicionais = ["laranja", "abacaxi"];

// Usando o operador spread
const todasAsFrutas = [...frutas, ...frutasAdicionais];
console.log(todasAsFrutas);`,
  },
  {
    id: 4,
    title: "Verificar Acesso",
    description: "Arrow function que verifica se uma pessoa tem acesso baseado na idade e ingresso.",
    code: `const verificarAcesso = (idade, temIngresso) => {
  if (idade >= 18 && temIngresso) {
    console.log("Acesso permitido");
  } else {
    console.log("Acesso negado");
  }
};

// Exemplos
verificarAcesso(20, true);  // Acesso permitido
verificarAcesso(17, true);  // Acesso negado
verificarAcesso(20, false); // Acesso negado`,
  },
  {
    id: 5,
    title: "Exibir Aviso",
    description: "Arrow function que exibe um aviso baseado nas condições climáticas e equipamento.",
    code: `const exibirAviso = (estaChovendo, semGuardaChuva) => {
  if (estaChovendo || semGuardaChuva) {
    console.log("Leve um guarda-chuva!");
  } else {
    console.log("Tudo certo, pode sair tranquilo");
  }
};

// Exemplos
exibirAviso(true, false);  // Leve um guarda-chuva!
exibirAviso(false, true);  // Leve um guarda-chuva!
exibirAviso(false, false); // Tudo certo, pode sair tranquilo`,
  },
]
