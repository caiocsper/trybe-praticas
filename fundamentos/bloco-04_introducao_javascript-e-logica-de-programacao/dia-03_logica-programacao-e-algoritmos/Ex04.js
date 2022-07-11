// Encontrar números primos de 0 a 50

let num = 50;
let count;

for(let index = 0; index <= 50; index += 1)
{   
    count = 0;
    if(index % 2 !== 0 || index === 2) {
        for(let secondIndex = 1; secondIndex <= index; secondIndex += 1)
        {
            if(index % secondIndex === 0)
            {
                count += 1;
            }
        }
    }

    if(count === 2) {
        console.log(index);
    }
}