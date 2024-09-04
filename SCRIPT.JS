let numero = 4.7
//arredonda normal
console.log(Math.round(numero))
//arrendonda pra cima
console.log(Math.ceil(numero))
//arredonda pra baixo
console.log(Math.floor(numero))
//potencia
console.log(Math.pow(5, 2))
//raiz
console.log(Math.sqrt(54))
//absoluto positivo
console.log(Math.abs(-5))
//maior e menor numero 
console.log(Math.min(7, 45, 89, 2, 125))
console.log(Math.max(7, 45, 89, 2, 125))

let numeroAleatorio = Math.random()
console.log(numeroAleatorio)




//const base = prompt("Digite a base da potência")
//const expoente = prompt("Digite o expoente")

//let resultado = Math.pow(base, expoente)
//window.alert(`O resultado da potenciação é ${resultado}`)


const numero1 = prompt("Digite um número")
const numero2 = prompt("Digite um número")
const numero3 = prompt("Digite um número")
const numero4 = prompt("Digite um número")
 
//Mostra o maios e o manor número
let menor = (Math.min(numero1, numero2, numero3, numero4))
let maior = (Math.max(numero1, numero2, numero3, numero4))
 
alert(`O maior número é ${maior} e o menor número é ${menor}`)