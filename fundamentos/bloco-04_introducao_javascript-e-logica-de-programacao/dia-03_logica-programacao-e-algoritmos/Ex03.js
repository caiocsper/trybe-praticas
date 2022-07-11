let array               = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWordCount     = 0;
let smallerWordCount    = undefined;
let biggerWord          = '';
let smallerWord         = '';


for(let key of array)
{   
    let letterCount = 0;

    for(let word of key)
    {
        letterCount += 1;
    }
    
    if(key === array[0]) {
        smallerWordCount = letterCount;
    }

    if(letterCount > biggerWordCount) {
        biggerWord      = key;
        biggerWordCount = letterCount;
    }

    if(letterCount < smallerWordCount) {
        smallerWord         = key;
        smallerWordCount    = letterCount
    }
}

console.log(smallerWord);
console.log(biggerWord);