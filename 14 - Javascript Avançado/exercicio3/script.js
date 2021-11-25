// "A média da Maria foi 8 parao total de 6 bimestres."

const aluno = {
  nome: 'Maria',
  sobrenome: 'da Silva',
  notas: [7, 10, 8, 5, 7, 9],
}

const totalBimestres = aluno.notas.length

const mediaFinal = aluno.notas.reduce((acc, curr) => {
  return acc + curr
  
}, 0)

const media = Math.round(mediaFinal / totalBimestres)

console.log(`A média da ${aluno.nome} foi ${media} para o total de ${totalBimestres} bimestres.`)