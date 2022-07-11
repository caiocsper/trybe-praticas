const salarioBruto = 3000;
let INSS, IR, salarioBase, salarioLiquido;

if(salarioBruto >= 1212)
{
    if(salarioBruto > 5189.82)
    {
        INSS = 570.88;
    }
    else if(salarioBruto >= 2594.93 &&
            salarioBruto <= 5189.82  )
    {
        INSS = salarioBruto * 0.11;
    }
    else if(salarioBruto >= 1556.95 &&
            salarioBruto <= 2594.92  )
    {
        INSS = salarioBruto * 0.9;
    }
    else
    {
        INSS = salarioBruto * 0.8;
    }

    salarioBase = salarioBruto - INSS;

    if(salarioBase > 4664.68)
    {
        IR = salarioBase * 0.275 - 869.35;
    }
    else if(salarioBase >= 3751.06 &&
            salarioBase <= 4664.68  )
    {
        IR = salarioBase * 0.225 - 636.13;
    }
    else if(salarioBase >= 2826.66 &&
            salarioBase <= 3751.05  )
    {
        IR = salarioBase * 0.15 - 354.80;
    }
    else if(salarioBase >= 1903.99 &&
            salarioBase <= 2826.65  )
    {
        IR = salarioBase * 0.075 - 142.80;
    }
    else
    {
        IR = 0;
    }

    salarioLiquido = salarioBase - IR;

    console.log("O valor do salário líquido é de: R$",salarioLiquido);
}
else if (   salarioBruto > 0 &&
            salarioBruto < 1212 )
{
    console.log("O salário informado é abaixo do valor mínimo estipulado por lei.");
}
else
{
    console.log("O salário informado é inválido.");
}