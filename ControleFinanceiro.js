let op
let dinheiro = parseFloat(prompt("qual o valor inicial da conta?"))

do {
    op = prompt(
        "Total em Conta: " + dinheiro + 
        "\n\n1 - Adicionar dinheiro" + 
        "\n2- Remover dinheiro" + 
        "\n3 - Encerrar"

    )

    switch(op){
        case "1":
        dinheiro += parseFloat(prompt("insira o valor a ser adicionado: "))
        break

        case "2":    
        dinheiro -= parseFloat(prompt("insira o valor a ser removido: "))
        break

        case "3": break

        default: alert("opção invalida")
    }

} while (op != "3");