const { saveFavoriteMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  while(favoriteCards.length > 4) favoriteCards.pop();
}

describe(' Testa a função saveFavoriteMagicCard', () => {

  afterEach(retrievesFavoriteCards);

  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(3);
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards).toHaveLength(5);
    expect(favoriteCards.at(-1)).toHaveProperty('name', 'Beacon of Immortality');
    await saveFavoriteMagicCard('130554');
    expect(favoriteCards).toHaveLength(6);
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);
    const namesArr = favoriteCards.map(({ name }) => name);
    expect(favoriteCards).toHaveLength(4);
    expect(namesArr).toStrictEqual(['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad']);
  });
});
