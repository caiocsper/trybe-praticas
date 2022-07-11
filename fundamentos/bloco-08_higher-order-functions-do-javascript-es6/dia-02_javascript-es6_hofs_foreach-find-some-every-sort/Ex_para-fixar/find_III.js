const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const findMusic = (arr, id) => arr.find(ele => ele.id === id);

// Logs
console.log(findMusic(musicas, '31031685')); // true scenario // element found somewhere in the array => returns the found element
console.log(findMusic(musicas, '2')); // false scenario // element not found thus undefined => returns undefined