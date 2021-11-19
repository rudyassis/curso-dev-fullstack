
function aparecerNome() {

    let nome = prompt('Digite seu nome: ')
    let idade = prompt('Digite sua idade: ')

    if(nome === '' || idade === ''){
        alert('Preencha os dados corretamente!')

    }else {

        if(nome === 'Thomas Anderson' || nome === 'thomas anderson'){
            if(idade < 18) {
                document.querySelector('#resultado').innerHTML = (`Olá ${nome}, Você é menor de idade!`)
                document.querySelector('#matrix').innerHTML = ('Você é personagem do filme Matrix!')
            }else if(idade > 18){
                document.querySelector('#resultado').innerHTML = (`Olá ${nome}, Você é maior de idade!`)
                document.querySelector('#matrix').innerHTML = ('Você é personagem do filme Matrix!')
            }
            
            
        }else {
            if(idade < 18) {
                document.querySelector('#resultado').innerHTML = (`Olá ${nome}, Você é menor de idade!`)
        
            
            }else if(idade > 18){
                document.querySelector('#resultado').innerHTML = (`Olá ${nome}, Você é maior de idade!`)
        
            }
        }

    }
    
}