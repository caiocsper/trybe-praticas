let weekDay = "quarta-feira";

if  (   weekDay === "segunda-feira" ||
        weekDay === "terça-feira" ||
        weekDay === "quarta-feira" ||
        weekDay === "quinta-feira" ||
        weekDay === "sexta-feira" ) 
{

    console.log("Oba, mais um dia de aprendizado na Trybe >:D");

} else if   (   weekDay === "sábado" ||
                weekDay === "domingo" ) 
{

    console.log("Finalmente, descanso merecido.")

} else {
    console.log("Erro");
}