const n1 = prompt("informe o primeiro número: ")
const n2 = prompt("informe o segundo número: ")

const n3 = parseFloat(n1)
const n4 = parseFloat(n2)

alert(
    "soma: " + (n3+n4) + "\n" + 
    "subtração: " + (n1-n2) + "\n" +
    "multiplicação: " + (n1*n2) + "\n" +
    "divisão: " + (n1/n2)
)