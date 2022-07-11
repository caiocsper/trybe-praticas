//Ex 1
function convertRomanNumerals(numeralsString) {
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const numeralsArray = numeralsString.split("");
  let numberTotal = 0;
  let lastNumber = 0;
  
  for (let index = 0; index < numeralsArray.length; index += 1) {
    for (let secondKey in numerals) {
        switch (numeralsArray[index]) {
          case secondKey:
            if (lastNumber < numerals[secondKey] && index > 0) {
              // Substrai 2 vezes porque adicionamos um valor indesejado e queriamos diminuir o valor.
              numberTotal += numerals[secondKey] - lastNumber * 2;
            } else {
              // Acaba adicionando valor indesejado, pois cada algorismo é avaliado individualmente em relação ao anterior.
              numberTotal += numerals[secondKey];
            }
            
            lastNumber = numerals[secondKey];
            break;
        }
    }
  }

  return numberTotal;
}

// console.log(convertRomanNumerals("MCMLXXXIX"));

//Ex 2
function arrayOfNumbers(vector) {
  let evenNumArray = [];

  for (let key in vector) {
    for (let secondKey in vector[key]) {
      if (vector[key][secondKey] % 2 === 0) {
        evenNumArray.push(vector[key][secondKey]);
      }
    }
  }

  return evenNumArray;
}

// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
// console.log(arrayOfNumbers(vector));

//Ex 3
function fruitBasketCalculator(basket) {
  let fruitBasket = {
    Melancia: 0,
    Abacate: 0,
    Jaca: 0,
    Pera: 0,
    Uva: 0,
    Laranja: 0,
    Banana: 0,
  }

  let returnMessage = `Sua cesta possui: `;

  for (let key in basket) {
    for (let property in fruitBasket) {
      switch (basket[key]) {
        case property:
          fruitBasket[property] += 1;
          break;
      }
    }
  }

  for (let property in fruitBasket) {
    returnMessage += `${fruitBasket[property]} ${property}s, `
  }

  return returnMessage;
}

/* const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

console.log(fruitBasketCalculator(basket)); */


//Ex 4 e 5
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};
//Ex 4
console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar}° andar, apartamento ${moradores.blocoDois[1].apartamento}`);
//Ex 5
for (let property in moradores) {
  for (let key in moradores[property]) {
    console.log(`${moradores[property][key].nome} ${moradores[property][key].sobrenome}`);
  }
}