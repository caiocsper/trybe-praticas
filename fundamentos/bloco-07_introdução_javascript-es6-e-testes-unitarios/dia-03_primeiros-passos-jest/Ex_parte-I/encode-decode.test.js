const { encode, decode } = require('./encode-decode.js');

describe('A Função encode:', () => {
  it('Deve estar definida', () => {
    expect(encode).toBeDefined();
  });

  it('Deve ser uma de fato uma função', () => {
    expect(typeof encode).toBe('function');
  });

  it('Deve retornar a string com a vogal "a" convertida no número "1"', () => {
    expect(encode('ana')).toEqual('1n1');
  });

  it('Deve retornar a string com a vogal "e" convertida no número "2"', () => {
    expect(encode('ele')).toEqual('2l2');
  });

  it('Deve retornar a string com a vogal "i" convertida no número "3"', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });

  it('Deve retornar a string com a vogal "o" convertida no número "4"', () => {
    expect(encode('ovo')).toEqual('4v4');
  });

  it('Deve retornar a string com a vogal "u" convertida no número "5"', () => {
    expect(encode('nu')).toEqual('n5');
  });

  it('Deve retornar a string com o mesmo número de caracteres que a original', () => {
    expect(encode('trybe')).toHaveLength(5);
  });

  it('Deve disparar um erro para argumentos diferentes de string', () => {
    expect(() => encode(123)).toThrow();
    expect(() => encode(956)).toThrowError(new Error('parameter must be string'));
  });
});

describe('A Função decode:', () => {
  it('Deve estar definida', () => {
    expect(decode).toBeDefined();
  });

  it('Deve ser uma de fato uma função', () => {
    expect(typeof decode).toBe('function');
  });

  it('Deve retornar a string com o número "1" convertido na vogal "a"', () => {
    expect(decode('1n1')).toEqual('ana');
  });

  it('Deve retornar a string com o número "2" convertido na vogal "e"', () => {
    expect(decode('2l2')).toEqual('ele');
  });

  it('Deve retornar a string com o número "3" convertido na vogal "i"', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });

  it('Deve retornar a string com o número "4" convertido na vogal "o"', () => {
    expect(decode('4v4')).toEqual('ovo');
  });

  it('Deve retornar a string com o número "5" convertido na vogal "u"', () => {
    expect(decode('n5')).toEqual('nu');
  });

  it('Deve retornar a string com o mesmo número de caracteres que a original', () => {
    expect(decode('trybe')).toHaveLength(5);
  });

  it('Deve disparar um erro para argumentos diferentes de string', () => {
    expect(() => decode(123)).toThrow();
    expect(() => decode(956)).toThrowError(new Error('parameter must be string'));
  });
});