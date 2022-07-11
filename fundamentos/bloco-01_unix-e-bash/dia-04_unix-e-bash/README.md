Parte I
    cat > skills2.txt
    *
        Popular o arquivo gerado pelo comando acima com, no mínimo, três palavras em linhas diferentes.
    *
    cat >> skills2.txt
    *
        Adicionar ao arquivo consultado pelo comando acima, no mínimo, cinco palavras em linhas diferentes.
    *
    wc -l skills2.txt
    sort skills2.txt | head -3 > top_skills.txt
    ls
    cat top_skills.txt
    cat > phrases2.txt
    *
        Popular o arquivo gerado pelo comando acima com, no mínimo, duas frases em linhas diferentes.
    *
    grep "br" -ic phrases2.txt
    grep "br" -ivc phrases2.txt
    cat >> phrases2.txt
    *
        Adicionar ao arquivo consultado pelo comando acima, no mínimo, duas palavras em linhas diferentes.
    *
    cat phrases2.txt countries.txt > bunch_of_things.txt
    ls
    cat bunch_of_things.txt
    sort bunch_of_things.txt
    sort -o bunch_of_things.txt bunch_of_things.txt
    ls
    cat bunch_of_things.txt
Parte II
    ls -l
    chmod 666 bunch_of_things.txt
    ls -l
    chmod 444 bunch_of_things.txt
    ls -l
    chmod 644 bunch_of_things.txt
    ls -l
Parte III
    ps
    sleep 30 &
    ps
    kill 59723
    sleep 30
    #
        Suspenda o processo via atalho do teclado
    #
    bg %1
    sleep 300 &
    sleep 200
    #
        Suspenda o processo via atalho do teclado
    #
    sleep 100
    #
        Suspenda o processo via atalho do teclado
    #
    jobs
    fg %2
    #
        Suspenda o processo via atalho do teclado
    #
    bg %3
    kill %1 %2 %3
    jobs
