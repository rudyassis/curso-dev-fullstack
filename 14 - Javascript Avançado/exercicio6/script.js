/*
  EXERCICIO 6 - LOADING

*/


const formulario = document.querySelector('#formulario')
const botaoEnviar = document.querySelector('#botao-enviar')
const message = document.querySelector('#message')
const spinner = document.querySelector('#spinner')
const result = document.querySelector('#result')



function transform(text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text)
    }, 10000)
  })
}

formulario.onsubmit = e => {
  e.preventDefault()

  const inputMsg = message.value

  botaoEnviar.classList.add('hidden')
  spinner.classList.remove('hidden')

  transform(inputMsg).then(text => {
    formulario.classList.add('hidden')
    result.innerHTML = text
  })
}