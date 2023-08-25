const metros = parseFloat(prompt("insira o valor em metros: "))
let medida = prompt(
    "para qual medida gostaria de converter?\n"+
    "mm (milímetros)\n" + 
    "cm (centímetros)\n" + 
    "dm (decímetros)\n" +
    "dam (dacâmetros)\n" +
    "hm (hectômetros)\n" +
    "km (quilômetros)\n\n" +
    'ex: use "cm" para converter para centímetros'
)

switch(medida){
    case("mm"): alert(metros*1000 + " milímetros")
    break

    case("cm"): alert(metros*100 + " centímetros")
    break

    case("dm"): alert(metros*10 + " decímetros")
    break

    case("dam"): alert(metros/10 + " dacâmetros")
    break

    case("hm"): alert(metros/100 + " hectômetros")
    break

    case("cm"): alert(metros/1000 + " quilômetros")
    break

    default: alert("opção invalida")
    break
}