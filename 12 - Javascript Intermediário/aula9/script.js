

let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento) {
    evento.preventDefault()

    let inputNome = document.forms['formCadastro']['nome']

    let inputEmail = document.forms['formCadastro']['email']

    let inputCidade = document.forms['formCadastro']['cidade']

    let temErro = false

    if(!inputNome.value) {
        temErro = true
        inputNome.classList.add('inputError')

        let span = inputNome.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamente'
    } else {
        inputNome.classList.remove('inputError')

        let span = inputNome.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!inputEmail.value) {
        temErro = true
        inputEmail.classList.add('inputError')

        let span = inputEmail.nextSibling.nextSibling
        span.innerText = 'Digite o e-mail corretamente'

    } else {
        inputEmail.classList.remove('inputError')

        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!inputCidade.value) {
        temErro = true
        inputCidade.classList.add('inputError')

        let span = inputCidade.nextSibling.nextSibling
        span.innerText = 'Selecione uma cidade'

    } else {
        inputCidade.classList.remove('inputError')

        let span = inputCidade.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!temErro) {
        formulario.submit()
    }

}