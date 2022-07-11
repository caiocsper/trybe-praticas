let word        = 'tryber';
let inverseWordArray = [];
let inverseWord = '';

for(let letter of word)
{
    inverseWordArray.unshift(letter);
}

for(let letter of inverseWordArray)
{
    inverseWord += letter;
}

console.log(inverseWord);