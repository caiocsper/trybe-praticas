function palindromeChecker(string) {
  const reverseString = string.split("").reverse().join('');

  if (string === reverseString) {
    return true;
  }

  return false;
}

// console.log(palindromeChecker('arara'));

function highestValPosition(numberArray) {
  let highestVal = numberArray[0];
  let highestPos;

  for (let key in numberArray) {
    if (numberArray[key] > highestVal) {
      highestVal = numberArray[key];
      highestPos = key;
    }
  }

  return highestPos;
}

// console.log(highestValPosition([2, 3, 6, 7, 10, 1]));

function lowestValPosition(numberArray) {
  let lowestVal = numberArray[0];
  let lowestPos;

  for (let key in numberArray) {
    if (numberArray[key] < lowestVal) {
      lowestVal = numberArray[key];
      lowestPos = key;
    }
  }

  return lowestPos;
}

// console.log(lowestValPosition([2, 4, 6, 7, 10, 0, -3]));

function repeatingNumber(numberArray) {
  let mostRepeatedNumber;
  let firstCounter = 0;

  for (let key in numberArray) {
    
    for (let secondKey in numberArray) {
      let secondCounter = 0;

      if (numberArray[key] === numberArray[secondKey]) {
        secondCounter += 1;
      }

      if (secondCounter > firstCounter) {
        firstCounter = secondCounter;
        mostRepeatedNumber = numberArray[key];
      }
    }
  }

  return mostRepeatedNumber;
}

// console.log(repeatingNumber([2, 3, 2, 5, 8, 2, 3]));

function sumNumberFromOne(intNumber) {
  let sum = 0;

  if (intNumber < 1) {
    return false;
  }

  for (let index = 1; index <= intNumber; index += 1) {
    sum += index;
  }

  return sum;
}

// console.log(sumNumberFromOne(5));

function verifyWordEnding(word, wordEnd) {
  const wordReversed = word.split('').reverse();
  const wordEndReversed = wordEnd.split('').reverse();
  
  for (let index = 0; index < wordEndReversed.length; index += 1) {
    if(wordEndReversed[index] !== wordReversed[index]) {
      return false;
    }
  }

  return true;
}

console.log(verifyWordEnding('trybe', 'be'));