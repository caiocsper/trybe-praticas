const numFirst  = 2;
const numSecond = 1;
const numThird  = 5;

if( numFirst > numSecond &&
    numFirst > numFirst     ) 
{
    console.log("O maior número é:", numFirst);
} 
else if(numSecond > numFirst &&
        numSecond > numThird    )
{
    console.log("O maior número é:", numSecond);
} 
else if(numThird > numFirst &&
        numThird > numSecond    )
{
    console.log("O maior número é:", numThird);
}
else
{
    console.log("Todos números comparados são iguais.");
}