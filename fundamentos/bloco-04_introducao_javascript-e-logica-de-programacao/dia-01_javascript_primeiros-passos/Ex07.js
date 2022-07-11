let gradePercentage = 81;


if( gradePercentage >= 90 &&
    gradePercentage <= 100  )
{
    console.log("A");
}
else if(gradePercentage >= 80 &&
        gradePercentage < 90    )
{
    console.log("B");
}
else if(gradePercentage >= 70 &&
        gradePercentage < 80    )
{
    console.log("C");
}
else if(gradePercentage >= 60 &&
        gradePercentage < 70    )
{
    console.log("D");
}
else if(gradePercentage >= 50 &&
        gradePercentage < 60  )
{
    console.log("E");
}
else if(gradePercentage < 50 &&
        gradePercentage >= 0    )
{
    console.log("F");
}
else
{
    console.log("Erro, porcentagem inválida.");
}
