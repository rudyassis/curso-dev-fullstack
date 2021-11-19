

let contador = document.querySelector('#contador')

let count = 0

let botaoMais = document.querySelector('#botaoMais')
let botaoMenos = document.querySelector('#botaoMenos')

botaoMais.onclick = function() {
    count++
}

botaoMenos.onclick = function() {
    count--
}

contador.innerHTML('count')