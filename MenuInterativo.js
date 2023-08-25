let op

do {
    op = prompt(
        "Escolha uma opção:\n " + 
        "\n1 - Opção Um" +
        "\n2 - Opção Dois" +
        "\n3 - Opção Três" + 
        "\n4 - Opção Quatro" + 
        "\n5 - Encerrar"
    )
    
    switch(op){
        case "1": alert("opção 1")
        break

        case "2": alert("opção 2")
        break

        case "3": alert("opção 3")
        break

        case "4": alert("opção 4")
        break

        case "5":break

        default: alert("opção invalida")
        break
    }


} while (op != 5);