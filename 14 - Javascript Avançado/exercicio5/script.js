/*
  CRIAR UMA FUNÇÃO QUE RETORNE UMA PROMISSE
  A FUNÇÃO DEVERÁ LEVAR 10 SEGUNDOS PARA SER RESOLVIDA COM O MÉTODO resolve()
  ELA DEVE RESOLVER COM O TEXTO: 'OK, PROMISSE RESOLVIDA.'
  O TEXTO DEVE SER EXIBIDO NO CONSOLE 

*/
function job() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ok, parece que funcionou!')
    }, 10000)
  })
}

job().then(msg => console.log(msg))