let num         = 7;
let string      = '';

if(num > 1)
{
    for(let index = num; index >= 1; index -= 2)
    {
        string = '';

        for(let secondIndex = 1; secondIndex < index; secondIndex += 2)
        {
            string += ' ';
        }

        for(let thirdIndex = num; thirdIndex >= index; thirdIndex -= 1)
        {
            if( thirdIndex  === num     ||
                thirdIndex  === index   ||
                index       === 1       )
            {
                string += "*";
            }
            else
            {
                string += ' '; 
            }
        }

        console.log(string);
    }
}
else
{
    console.log("Erro número inválido!");
}
