let op

do {
    op = prompt(
        "Calculadora Geometrica: " + 
        "\n\n1 - Area do triangulo" + 
        "\n2 - Area do retangulo" + 
        "\n3 - Area do quadrado" + 
        "\n4 - Area do trapezio" + 
        "\n5 - Area do circulo" + 
        "\n6 - Sair"
    )
    
    switch(op){
        case "1":
            alert("Area do triangulo: " + Triangulo())
            break    

        case "2":
            alert("Area do retangulo: " + Retangulo())
            break

        case "3":
            alert("Area do quadrado: " +Quadrado())
            break

        case "4":
            alert("Area do trapezio: " +Trapezio())
            break

        case "5":
            alert("Area do circulo: " +Circulo())
            break

        case "6":
            break

    }

} while (op != "6");
 
function Triangulo(){
    const base = parseFloat(prompt("Base do triangulo: "))
    const altura = parseFloat(prompt("Altura do triangulo: "))
    return(
        (base * altura)/2
    )
}

function Retangulo(){
    const base = parseFloat(prompt("Base do retangulo: "))
    const altura = parseFloat(prompt("Altura do retangulo: "))
    return(
        (base * altura)
    )
}

function Quadrado(){
    const lado = parseFloat(prompt("Lado do quadrado: "))
    return(
        (lado*lado)
    )
}

function Trapezio(){
    const baseMaior = parseFloat(prompt("Base maior do trapezio: ")) 
    const baseMenor = parseFloat(prompt("Base menor do trapezio: "))
    const altura = parseFloat(prompt("Altura do trapezio: "))
    return(
        (baseMaior + baseMenor) * altura/2
    )
}

function Circulo(){
    const raio = parseFloat(prompt("Raio do circulo: "))
    return(
        raio*raio*3.14
    )
}