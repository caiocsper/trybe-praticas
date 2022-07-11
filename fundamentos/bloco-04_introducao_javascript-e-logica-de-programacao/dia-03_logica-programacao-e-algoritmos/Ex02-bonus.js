let num     = 5;
let string  = '';

if(num > 1)
{
    for(let index = 0; index < num; index += 1)
    {
        string += '*';
        
        console.log(string)
    }
}
else
{
    console.log("Erro número inválido!");
}
