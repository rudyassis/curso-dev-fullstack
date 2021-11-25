/*

    JSON

    JAVASCRIPT  OBJECT NOTATION


*/

const objeto = {
    nome: 'Fulano',
    idade: 23,
}

// transformando em objeto JSON
const json = JSON.stringify(objeto)

// decodificando para objeto Javascript
const jsonParseado = JSON.parse(json)

console.log(jsonParseado.idade)