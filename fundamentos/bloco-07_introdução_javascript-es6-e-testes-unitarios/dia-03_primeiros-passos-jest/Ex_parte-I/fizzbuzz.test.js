const myFizzBuzz = require('./fizzbuzz.js');

describe('A Função myFizzBuzz:', () => {
  it('Deve estar definida', () => {
    expect(myFizzBuzz).toBeDefined();
  });

  it('Deve ser uma de fato uma função', () => {
    expect(typeof myFizzBuzz).toBe('function');
  });

  it('Deve retornar "fizzbuzz" para um argumento numérico divisivel por 5 e 3', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Deve retornar "fizz" para um argumento numérico divisivel por 3 mas não 5', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Deve retornar "buzz" para um argumento numérico divisivel por 5 mas não 3', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it('Deve retornar o próprio argumento para números não divisivéis por 5 ou 3', () => {
    expect(myFizzBuzz(11)).toEqual(11);
  });

  it('Deve retornar false argumento não numéricos', () => {
    expect(myFizzBuzz('11')).toBe(false);
  });
});