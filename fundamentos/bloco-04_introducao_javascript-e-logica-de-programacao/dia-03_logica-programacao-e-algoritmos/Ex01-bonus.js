let num = 5;

if(num > 1)
{
    for(let index = 0; index < num; index += 1)
    {
        let string = '';

        for(let index = 0; index < num; index += 1)
        {
            string += '*';
        }
        
        console.log(string)
    }
}
else
{
    console.log("Erro número inválido!");
}
