const nome1 = prompt("nome do primeiro personagem: ")
const ataque = parseInt(prompt("ataque do primeiro personagem: "))

const nome2 = prompt("nome do segundo personagem: ")
let vida = parseInt(prompt("vida do segundo personagem: "))
const defesa = parseInt(prompt("defesa do segundo personagem: "))
const escudo = (prompt("o personagem 2 tem escudo?(s/n) "))

let dano = 0

if(ataque>defesa&&escudo=="n"){
    dano = (ataque - defesa)
    vida = vida - dano
}else if(ataque>defesa&&escudo=="s"){
    dano =  ((ataque - defesa)/2)
    vida = vida - dano
}else{

}

alert(
    "Personagem 1: " + nome1 + "\n" + 
    "Ataque: " + ataque + "\n\n" + 
    "Personagem 2: " + nome2 + "\n" + 
    "Vida: " + vida + "\n" + 
    "Defesa: " + defesa + "\n" + 
    "Escudo: " + escudo + "\n\n" + 
    "Total de dano: " + dano
)
