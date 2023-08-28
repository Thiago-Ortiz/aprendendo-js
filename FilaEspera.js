let op
let fila = []


do{
    let pacientes = ""
    for(i = 0; i < fila.length; i++ ){
        pacientes += ( (i+1) + " - " + fila[i] + "\n")

    }
    op = prompt(
        "Pacientes: \n" +
        pacientes + 

        "\n\nOpções: " +
        "\n1 - Novo paciente" + 
        "\n2 - Consultar paciente" + 
        "\n3 - Sair"
    )

    switch(op){
        case "1":
            fila.push(prompt("Nome do novo paciente: "))
            break

        case "2": 
            alert("Paciente a ser consultado: " + fila[0])
            fila.shift()

        case "3":break
    }

}while(op != "3"){

}