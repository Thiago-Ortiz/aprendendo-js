const nome = prompt("qual o seu nome?")
let viajou = prompt("você ja visitou alguma cidade?(sim/não)")
var cidades = ""
let contagem = 0

while(viajou == "sim"){
    let cidade = prompt("qual foi a cidade? ")
    cidades += " - " + cidade + "\n"
    contagem++
    viajou = prompt("ja visitou alguma outra cidade?")
    
}

alert(
    nome + "\n" +
    "numero de cidades visitadas: " + contagem + "\n" +
    "cidades visitadas: \n" + cidades
    )