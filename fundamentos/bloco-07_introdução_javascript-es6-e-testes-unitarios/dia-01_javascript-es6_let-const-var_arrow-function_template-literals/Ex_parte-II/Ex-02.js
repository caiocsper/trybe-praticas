const longestWord = sentence => {
  const words = sentence.split(' ');
  let biggestWord = '';

  for (let index = 0; index < words.length; index += 1) {
    if(biggestWord.length < words[index].length) {
      biggestWord = words[index];
    }
  }

  return biggestWord;
};

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));