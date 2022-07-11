const   angleFirst  = 100;
const   angleSecond = 30;
const   angleThird  = 50;


if(angleFirst > 0 && angleSecond > 0 && angleThird > 0)
{
    let angleSum = angleFirst + angleSecond + angleThird;

    if(angleSum === 180)
    {
        console.log(true);
    }
    else
    {
        console.log(false);
    }
}
else 
{
    console.log("Erro! Um dos valores comparados é inválido.");
}