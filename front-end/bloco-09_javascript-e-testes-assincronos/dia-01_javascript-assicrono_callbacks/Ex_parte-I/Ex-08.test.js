const getPokemonDetails = require('./Ex-08');

describe('insert', () => {
  it('insert', (done) => {
    getPokemonDetails((pokemon) => pokemon.name === 'Bulbassaur',
    (error, message) => {
      if (error) {
        done(error);
      } else {
        expect(message).toBe('Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf');
        done();
      }
    });
  })
});