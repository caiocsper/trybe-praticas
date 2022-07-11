let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd_sum = 0;

for(let number of numbers)
{
    if(number % 2 !== 0)
    {
        odd_sum += 1;
    }
}

if(odd_sum > 0) 
{
    console.log("Número de valores ímpares:", odd_sum);
}
else
{
    console.log("Nenhum valor ímpar encontrado.");
}