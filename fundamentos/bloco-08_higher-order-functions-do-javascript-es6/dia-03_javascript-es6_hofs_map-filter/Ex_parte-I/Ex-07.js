const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

/**
 **  @description Regex criados para o exercício
 **    @versao 01
 **      Expressão: /\w\x2e(?=\s)/g
 **        Explicação: \w - encontra digito(numero ou letra maiúcula ou minúscula) // \x2e - encontra ponto // \s encontra espaços vazios // x(?=y) encontra x caso y esteja logo em seguida de x
 **        Problemas: Encontra qualquer ocorrência de um digito e um ponto seguido de espaço vazio.
 **                    Não avalia desde o inicio da string, só avalia a partir da primeira ocorrência da expressão então "dasdsadaJ. R. R. Tolkien" ignora o texto antes de dasdsada
 **        Aplicação: Para utilizar neste exericio necessita desenvolver uma logica para comparar 3 ocorrencias desta expressão.
 **        Exemplo de aplicação: const authorWith3DotsOnName = arr => arr.find(ele => ele.author.name.match(regexp).length === 3).name;
 **
 **    @Versão 02
 **      Expressão: /[A-Z][.](?=\s)/g
 **        Explicação: [A-Z] - encontra letra maiúscula // [.] - encontra ponto // \s encontra espaços vazios // x(?=y) encontra x caso y esteja logo em seguida de x
 **        Problemas: Mesmo problema da primeira versão porém agora só considera letras maiúsculas e está com uma legibilidade melhor.
 **        Aplicação: Para utilizar neste exericio necessita desenvolver uma logica para comparar 3 ocorrencias desta expressão.
 **        Exemplo de aplicação: const authorWith3DotsOnName = arr => arr.find(ele => ele.author.name.match(regexp).length === 3).name;
 **
 **    @Versão 03
 **      Expressão: /[A-Z](?=[.](?=\s))/g
 **        Explicação: [A-Z] - encontra letra maiúscula // [.] - encontra ponto // \s encontra espaços vazios // x(?=y) encontra x caso y esteja logo em seguida de x
 **        Problemas: Mesmo problema da primeira e segunda versão porém agora só considera letras maiusculas seguidas de ponto que são seguidos de espaço vazio.
 **        Aplicação: Para utilizar neste exericio necessita desenvolver uma logica para comparar 3 ocorrencias desta expressão.
 **        Exemplo de aplicação: const authorWith3DotsOnName = arr => arr.find(ele => ele.author.name.match(regexp).length === 3).name;
 **
 **    @Versão 04
 **      Expressão: /(?:[A-Z][.]\s){3}/g
 **        Explicação: () - seleciona tudo dentro de parenteses como um grupo // (?:) - define o grupo como não capturavel (isso é opcional) // 
 **                    {} - define tamanho qual de ocorrencias para a expressao do grupo que antecede os {} (definido como 3 porque o exercicio pede com 3 iniciais)
 **        Problemas: Agora só considera as 3 primeiras ocorrencias CONSECUTIVAS de UMA letra maiscula seguida por UM ponto seguido UM por espaço vazio.
 **                    Consertou: Problema de considerar outras ocorrencias da expressão fora as 3 primeiras
 **                    Consertou: Problema de considerar ocorrências não consecutivas.
 **                    Persiste: Problema de não avaliar desde o inicio da string.
 **        Aplicação: Para utilizar neste exericio necessita desenvolver uma logica para comparar se uma string atende ao critérios da expressão e caso atenda retorne um valor booleano.
 **        Exemplo de aplicação: const authorWith3DotsOnName = arr => arr.find(ele => regexp.test(ele.author.name)).name;
 **
 **    @Versão Final
 **      Expressão: /^(?:[A-Z][.]\s){3}/g
 **        Explicação: ^ - define que a expressão que segue so se aplicará a partir no inicio da string
 **        Problemas: Agora resolveu todos problemas, so encontra o padrão definido se a string começar com um grupo de três ocorrências CONSECUTIVAS de letra maiúscula seguida de ponto e espaço vazio.
 **        Aplicação: Para utilizar neste exericio necessita desenvolver uma logica para comparar se uma string atende ao critérios da expressão e caso atenda retorne um valor booleano.
 **        Exemplo de aplicação: const authorWith3DotsOnName = arr => arr.find(ele => regexp.test(ele.author.name)).name;
**
**    @consideracoes Só explicando oq observei, entendi e apliquei. Versão final funciona perfeitamente e ta o mais legível que consegui deixar
**/

const expectedResult = 'O Senhor dos Anéis';
const regexp = /^(?:[A-Z][.]\s){3}/g;

const authorWith3DotsOnName = arr => arr.find(ele => regexp.test(ele.author.name)).name;
console.log(authorWith3DotsOnName(books));

/* const dotsOnName = arr => arr.find(ele => ele.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3).name;
console.log(dotsOnName(books)); */