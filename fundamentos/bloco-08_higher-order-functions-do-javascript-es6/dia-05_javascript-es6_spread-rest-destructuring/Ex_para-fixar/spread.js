// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Uva', 'Carambola'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite em pó', 'Granola', 'Cereal'];

const fruitSalad = (fruit, additional) => {
  return [ ...fruit, ...additional ];
};

console.log(fruitSalad(specialFruit, additionalItens));