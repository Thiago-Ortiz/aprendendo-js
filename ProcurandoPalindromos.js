const st1 = prompt("escreva a palavra para saber se é palindromo: ")
let st2 = ""

for( let i = st1.length-1; i>=0; i--){
    st2 += st1[i]
}

if(st1 == st2){
    alert(st1 + " é um palindromo")
}else{
    alert("palavra inserida: " + st1 + "\npalavra invertida: " + st2)
}
