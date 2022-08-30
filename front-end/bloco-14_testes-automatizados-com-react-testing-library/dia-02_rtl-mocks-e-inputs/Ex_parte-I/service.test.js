const service = require('./service');

describe('A funções de service devem: ', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    const mockFunction = jest
      .spyOn(service, 'RNGZeroToOneHundred')
      .mockReturnValue(10);

    expect.assertions(4);
    expect(mockFunction).not.toHaveBeenCalled();
    expect(mockFunction()).toEqual(10);
    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it("Testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    const mockFunction = jest
      .spyOn(service, 'RNGZeroToOneHundred')
      .mockImplementationOnce((a, b) => a / b);

    expect.assertions(5);
    expect(mockFunction).not.toHaveBeenCalled();
    expect(mockFunction(10, 2)).toEqual(5);
    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith(10, 2);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
    const mockFunction = jest
      .spyOn(service, 'RNGZeroToOneHundred')
      .mockImplementationOnce((a, b, c) => a * b * c);

    expect.assertions(5);
    expect(mockFunction).not.toHaveBeenCalled();
    expect(mockFunction(5, 1, 5)).toEqual(25);
    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith(5, 1, 5);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it("mockando função que recebe um parâmetro e retorna seu dobro", () => {
    const mockFunction = jest
      .spyOn(service, 'RNGZeroToOneHundred')
      .mockImplementationOnce((a) => a * 2);

    expect.assertions(5);
    expect(mockFunction).not.toHaveBeenCalled();
    expect(mockFunction(5)).toEqual(10);
    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith(5);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('Mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    const mockFunction = jest
      .spyOn(service, 'strToUpper')
      .mockImplementationOnce((str) => str.toLowerCase());

    expect.assertions(5);
    expect(mockFunction).not.toHaveBeenCalled();
    expect(mockFunction('ESTUDAR')).toBe('estudar');
    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith('ESTUDAR');
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it("mockando função que recebe um parâmetro e retorna a última letra", () => {
    const mockFunction = jest
      .spyOn(service, 'strFirstLetter')
      .mockImplementationOnce((str) => str.at(-1));

    expect.assertions(5);
    expect(mockFunction).not.toHaveBeenCalled();
    expect(mockFunction('ESTUDAR')).toBe('R');
    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith('ESTUDAR');
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it("mockando função que recebe 3 parâmetros e os concatena", () => {
    const mockFunction = jest
      .spyOn(service, 'strConcat')
      .mockImplementationOnce((str, ...restStr) => str.concat(...restStr));

    expect.assertions(5);
    expect(mockFunction).not.toHaveBeenCalled();
    expect(mockFunction('Ca', 'i', 'o')).toBe('Caio');
    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith('Ca', 'i', 'o');
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it("restaurando a primeira função e verifica se ela retorna em caixa alta", () => {
    expect.assertions(5);
    expect(service.strToUpper).not.toHaveBeenCalled();
    expect(service.strToUpper('lowercase')).toBe('LOWERCASE');
    expect(service.strToUpper).toHaveBeenCalled();
    expect(service.strToUpper).toHaveBeenCalledWith('lowercase');
    expect(service.strToUpper).toHaveBeenCalledTimes(1);
  })

  test("testando requisição caso a promise resolva", async () => {
    const mockFunction = jest
      .spyOn(service, 'fetchDog')
      .mockResolvedValue('request success');

    mockFunction();
    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledTimes(1);
    await expect(mockFunction()).resolves.toBe('request success');
    expect(mockFunction).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    const mockFunction = jest
      .spyOn(service, 'fetchDog')
      .mockRejectedValue('request failed');

    expect(mockFunction).not.toHaveBeenCalled();
    await expect(mockFunction).rejects.toMatch("request failed");
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
