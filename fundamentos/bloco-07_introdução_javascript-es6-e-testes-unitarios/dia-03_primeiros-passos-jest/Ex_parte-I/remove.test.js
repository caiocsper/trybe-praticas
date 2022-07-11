const myRemove = require('./remove.js');

describe('A Função myRemove:', () => {
  it('Deve estar definida', () => {
    expect(myRemove).toBeDefined();
  });

  it('Deve ser uma de fato uma função', () => {
    expect(typeof myRemove).toBe('function');
  });

  it('Deve remover um item de um array, caso este item exista no array, e retornar o array sem tal item', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});