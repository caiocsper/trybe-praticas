let num         = 5;
let string      = '';

if(num > 1)
{
    for(let index = num; index >= 1; index -= 2)
    {
        string = '';

        for(let secondIndex = 1; secondIndex < num - index; secondIndex += 2)
        {
            string += ' ';
        }

        for(let thirdIndex = index; thirdIndex >= 1; thirdIndex -= 1)
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
