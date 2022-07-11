let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log("Array desordenado: " + numbers);

for(let index = numbers.length - 1; index > 0; index--)
{
    // console.log("[",index,"]");
    for(let secondIndex = 0; secondIndex < index; secondIndex++)
    {
        // console.log("" + numbers);
        if(numbers[secondIndex] > numbers[secondIndex + 1])
        {
            let currentNum = numbers[secondIndex];
            numbers[secondIndex] = numbers[secondIndex + 1];
            numbers[secondIndex + 1] = currentNum;
        }
    }
}

console.log("Array ordenado: " + numbers);