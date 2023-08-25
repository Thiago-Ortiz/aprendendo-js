const v1 = parseFloat(prompt("informe a velocidade do primeiro carro: "))
const v2 = parseFloat(prompt("informe a velocidade do segundo carro"))

if(v1<v2){
    alert("o segundo veiculo é mais rapido")
}else if(v2<v1){
    alert("o primeiro veiculo é mais rapido")
}else(
    alert("os veiculos possuem a mesma velocidade")
)

