let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let max_number;

for(let number of numbers)
{
    if(number > max_number)
    {
        max_number = number;
    } else {
        if(numbers.indexOf(number) === 0)
        {
            max_number = number;
        }
    }
}

console.log(max_number);