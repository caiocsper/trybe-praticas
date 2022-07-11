const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = ( arr ) => arr.reduce(( acc, cur ) => ( /[A|a]/g.test(cur) ? acc + cur.split(/[b-z]|[B-Z]/g).join('').length : acc ), 0);

console.log(containsA(names));