let op

let imoveis = []

do {
    let quantidade = imoveis.length
    op = prompt(
        "Cadastro de imoveis: " +
        "\n\nQuantidade de imoveis cadastrados: " + quantidade + 
        "\n\nOpções: " +
        "\n1 - Salvar um novo imovel" + 
        "\n2 - Mostrar imoveis salvos" + 
        "\n3 - Sair"
    )

    switch(op){
        case "1": 
            const imovel = {}

            imovel.proprietario = prompt("Nome do proprietario:")
            imovel.quartos = prompt("Quantidade de quartos: ")
            imovel.banheiros = prompt("Quantidade de banheiros: ")
            imovel.garagem = prompt("Possue garagem: (s/n)")
            imoveis.push(imovel)
            break

        case "2":
            for(i = 0; i < quantidade; i++){
                alert(
                    "Imovel " + (i+1) + ": " +
                    "\nProprietario: " + imoveis[i].proprietario + 
                    "\nQuartos: " + imoveis[i].quartos + 
                    "\nBanheiros: " + imoveis[i].banheiros + 
                    "\nGaragem: " + imoveis[i].garagem 
                )
            }
            break

        case "3":
            break
    }



} while (op != "3")