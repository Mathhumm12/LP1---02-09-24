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

const numeroC = prompt('Digite o número')
const numeroB = prompt('Digite outro número')

let resultado = ((numeroC + numeroB)/2)
let normal = console.log(Math.round(resultado))
let baixo = console.log(Math.floor(resultado))
let cima = console.log(Math.ceil(resultado))

alert(`sua média arredondada normal é ${normal}. sume média arredondada para baixo é ${baixo} sua média arredondada para cima é ${cima}`)

