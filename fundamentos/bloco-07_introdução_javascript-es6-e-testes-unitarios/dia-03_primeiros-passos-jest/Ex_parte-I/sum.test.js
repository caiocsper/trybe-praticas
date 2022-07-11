const sum = require('./sum.js');

describe('A Função sum:', () => {
  it('Deve estar definida', () => {
    expect(sum).toBeDefined();
  });

  it('Deve ser uma de fato uma função', () => {
    expect(typeof sum).toBe('function');
  });

  it('Deve retornar a soma de seus argumentos', () => {
    expect(sum(4, 5)).toEqual(9);
    expect(sum(0, 0)).toEqual(0);
  });

  it('Deve disparar um erro caso pelo menos um de seus argumentos não seja um valor númerico', () => {
    expect(() => sum(4, "5")).toThrow();
    expect(() => sum(4, "5")).toThrowError(new Error('parameters must be numbers'));
  });
});