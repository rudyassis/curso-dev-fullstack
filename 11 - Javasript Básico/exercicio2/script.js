

let nome = prompt('Digite seu nome: ')
let idade = prompt('Digite sua idade: ')

if(nome === 'Thomas Anderson' || nome === 'thomas anderson'){
    if(idade < 18) {
        document.write(`Olá ${nome}, Você é menor de idade! e você é personagem do filme Matrix!`)
    
    }else if(idade > 18){
        document.write(`Olá ${nome}, Você é maior de idade! e você é personagem do filme Matrix!`)
    }
    
    
} else {
    if(idade < 18) {
        document.write(`Olá ${nome}, Você é menor de idade!`)
    
    }else if(idade > 18){
        document.write(`Olá ${nome}, Você é maior de idade!`)
    }
}

