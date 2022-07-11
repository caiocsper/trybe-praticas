let num         = 5;
let string      = '';

if(num > 1)
{
    for(let index = 1; index <= num; index += 1)
    {
        string = '';

        for(let secondIndex = 0; secondIndex < num - index; secondIndex += 1)
        {
            string += ' ';
        }

        for(let thirdIndex = num; thirdIndex < num + index; thirdIndex += 1)
        {
            string += "*";
        }

        console.log(string);
    }
}
else
{
    console.log("Erro número inválido!");
}
