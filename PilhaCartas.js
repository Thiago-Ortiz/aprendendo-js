let op
let pilha = []

do{
    let cartas = ""
    for(i = 0; i < pilha.length; i++ ){
        cartas += ( (i+1) + " - " + pilha[i] + "\n")

    }
    op = prompt(
        "cartas: \n" +
        cartas + 

        "\n\nOpções: " +
        "\n1 - Adicionar carta" + 
        "\n2 - Puxar carta" + 
        "\n3 - Sair"
    )

    switch(op){
        case "1":
            pilha.push(prompt("Carta a ser adicionada: "))
            break

        case "2": 
            let carta = pilha.pop()
            alert("Carta puxada: " + carta)

        case "3":break
    }

}while(op != "3"){

}