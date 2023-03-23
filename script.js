const atacante = prompt("Qual o seu personagem atacante?")
const poderDeAtaque = prompt("Qual é o seu poder de ataque")

const defensor = prompt("Qual o seu personagem defensor?")
let vida = prompt("Quantos de vida do seu personagem?")
const poderDeDefesa = prompt("Qual o poder de defesa?")
const possuiEscudo = prompt("Ele possui escudo? (Sim/Não)")

let danoCausado = 0

if(poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
  danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
   danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

vida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de danos em " + defensor)
alert(atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
     defensor + "\nPontos de vida: " + vida +
     "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo " + possuiEscudo)
  
         
