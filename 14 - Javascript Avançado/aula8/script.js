/*

    lOCAL STORAGE


*/

const tarefas = [
    { tarefa: 'estudar JS' },
    { tarefa: 'estudar node.js' },
    { tarefa: 'estudar react.js' }
]

const tarefasJson = JSON.stringify(tarefas)

localStorage.setItem('tarefas', tarefasJson) // joga o valor

const listaTarefasSalvas = localStorage.getItem('tarefas') // busca o valor, jogando numa variavel

const listaTarefasObj = JSON.parse(listaTarefasSalvas)

console.log(listaTarefasObj)