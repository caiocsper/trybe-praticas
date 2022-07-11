require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  it('Deve ser uma função', () => {
    expect.assertions(1);
    expect(getMagicCard).toBeInstanceOf(Function);
  });

  it('Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    expect.assertions(1);
    const response = await getMagicCard('130550');
    expect(response).toHaveProperty('name', "Ancestor's Chosen");
  });

  it('Deve invocar a função fetch ao executar a função getMagicCard com o parâmetro "130550"', async () => {
    expect.assertions(2);
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://api.magicthegathering.io/v1/cards/130550');
  });

  it('Deve retornar um objeto igual ao objeto card', async () => {
    expect.assertions(1);
    const response = await getMagicCard('130550');
    expect(response).toStrictEqual(card);
  });

  it('Deve invocar a função fetch ao executar a função getMagicCard com o parâmetro "130550"', async () => {
    expect.assertions(1);
    const response = await getMagicCard('idDesconhecido');
    expect(response).toEqual(new Error('Id is not found!'));
  });
});
