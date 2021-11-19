
let count = 0
let counterHtml = document.querySelector('#counter')
let botaoMais = document.querySelector('#botaoMais')
let botaoMenos = document.querySelector('#botaoMenos')
let change = true
let interval = 0

botaoMais.onclick = function() {
    if(change === false) {
        clearInterval(interval)
    }
    interval = setInterval(function() {
        count++
        counterHtml.innerText = count
        botaoMenos.classList.remove('greenButton')
        botaoMais.classList.add('redButton')
        change = false
    }, 100)
}

botaoMenos.onclick = function() {
    if(change === false) {
        clearInterval(interval)
    }
    interval = setInterval(function() {
        count--
        counterHtml.innerText = count
        botaoMais.classList.remove('redButton')
        botaoMenos.classList.add('greenButton')
        change = false
    }, 100)
}