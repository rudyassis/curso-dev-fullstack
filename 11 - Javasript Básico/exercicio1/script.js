

let nome = prompt('Digite seu nome: ')
let idade = prompt('Digite sua idade: ')

if(idade < 18) {
    document.write(`Olá ${nome}, Você é menor de idade!`)

}else if(idade > 18){
    document.write(`Olá ${nome}, Você é maior de idade!`)
}