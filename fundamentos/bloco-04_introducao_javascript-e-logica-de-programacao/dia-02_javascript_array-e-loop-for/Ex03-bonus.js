let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for(let index = 0; index < numbers.length; index++)
{
    if(index + 1 == numbers.length) {
        newNumbers.push(numbers[index] * 2);
    } else {
        newNumbers.push(numbers[index] * numbers[index + 1]);
    }
}

console.log(newNumbers);