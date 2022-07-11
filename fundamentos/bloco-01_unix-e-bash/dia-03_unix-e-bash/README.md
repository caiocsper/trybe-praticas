Parte I
    mkdir unix_tests
    cd unix_tests
    touch trybe.txt
    cp trybe.txt trybe_backup.txt
    mv trybe.txt arquivo.txt
    ls
    mkdir backup
    mv trybe_backup.txt backup/
    ls -R
    mkdir backup2
    mv backup/trybe_backup.txt backup2
    ls -R
    rmdir backup
    mv backup2 backup
    ls -R
    pwd
    ls
    rm -r backup
    ls
    clear
    touch skills.txt
    #
        Popular o arquivo criado na linha acima com, no minimo, seis palavras em linhas diferentes.
    #
    head -5 skills.txt
    tail -4 skills.txt
    rm *.txt
    ls

Parte II
    curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
    ls
    cat countries.txt
    less countries.txt
    grep "Brazil" countries.txt
    grep "brazil" -i countries.txt
    cat > phrases.txt
    #
        Popular o arquivo criado pela linhas de comando acima com, no mínimo, duas frases em linhas diferentes.
    #
    grep "fox" -iv phrases.txt
    wc -w phrases.txt
    wc -l phrases.txt
    touch empty.tbt empty.pdf
    ls
    ls *.txt
    ls *.tbt *.txt
    man ls
