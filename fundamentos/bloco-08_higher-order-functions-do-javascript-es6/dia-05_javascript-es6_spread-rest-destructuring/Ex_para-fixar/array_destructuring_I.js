const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]);

const [ greet, greetFunc ] = saudacoes;
greetFunc(greet);
// Produza o mesmo resultado acima, porém utilizando array destructuring