

let toast = document.querySelector('.toast')

let botaoCadastrar = document.querySelector('#botaoCadastrar')

let tarefa = document.querySelector('input').innerText

botaoCadastrar.onclick = function() {
    toast.classList.add('visible')
    toast.innerHTML = `<div class='toast'>Tarefa ${tarefa} adicionada com sucesso!</div>`

    setTimeout(function(){
        toast.classList.remove('visible')
    }, 5000)
}