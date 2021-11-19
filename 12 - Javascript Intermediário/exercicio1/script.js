

let count = 0
let counterHtml = document.querySelector('#counter')
let botaoMais = document.querySelector('#botaoMais')
let botaoMenos = document.querySelector('#botaoMenos')

botaoMais.onclick = function() {
    count++
    counterHtml.innerText = count
}

botaoMenos.onclick = function() {
    count--
    counterHtml.innerText = count
}