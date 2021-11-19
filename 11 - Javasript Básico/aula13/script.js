/*

laço FOR OF

*/

let clientes = [
    {
        nome: 'Rudiney',
        idade: 38,
        linguagens: ['javascript', 'python', 'sql']
    },
    {
        nome: 'Aline',
        idade: 34,
        linguagens: ['r', 'python', 'sql']
    },
    {
        nome: 'Antonio',
        idade: 54,
        linguagens: ['c#', 'c++', 'c']
    }
]

let htmlClientes = ''

for(let cliente of clientes) {
    
    let listaLinguagens = ''

    for(let linguagem of cliente.linguagens){
        listaLinguagens += `<li>${linguagem}</li>`
    }
    
    htmlClientes += `
        <li>
            <b>Nome:</b> ${cliente.nome} <br>
            <b>Idade:</b> ${cliente.idade} <br>
            <b>Linguagens</b><br>
            <ul>
                ${listaLinguagens}
            </ul>
        </li>
    `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes


