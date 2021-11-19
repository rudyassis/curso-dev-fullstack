/*

string
number
boolean
array
object
undefined
null

*/

// string
let nome = 'Rudy' 
console.log(nome)
// string - concatenada
let sobrenome = 'Assis'
//console.log(nome + ' ' + sobrenome)

// string literal
console.log(`${nome} ${sobrenome}`)

// number int

let idade = 38
console.log(idade)
console.log(idade + 10)

// number float
let porcentagem = 10.3
console.log(porcentagem + ' %')

// boolean (true ou false)

let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

// array

let habilidades = ['Javascript', 'React', 'Python']
console.log(habilidades)
console.log(habilidades.length)
console.log(habilidades[0])

// object

let pessoa = {
    nome: 'Fulano',
    sobrenome: 'da Silva',
    idade: 25,
    habilidades: ['C#', 'Java', 'C++']
}

console.log(pessoa.nome)
console.log(pessoa.habilidades[0])

// undefined (sem definição)

let endereco
console.log(endereco)

// null

let cidade = null
console.log(cidade)