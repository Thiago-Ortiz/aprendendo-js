const num = parseInt(prompt("de que número você deseja a tabuada?"))
let tabuada = ""

for(i=1; i<=20;i++){
    tabuada += num + " x " + i + " = " + (i*num) + "\n"
}


alert(
    "Tabuada do " + num + ": \n" + tabuada
    
)