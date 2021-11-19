/*

Operadores lógicos

*/

let nota1 = prompt("Digite a primeira nota: ")
let nota2 = prompt("Digite a segunda nota: ")

let primeira = parseInt(nota1)
let segunda = parseInt(nota2)

let notaFinal = (primeira + segunda) / 2

if (notaFinal >= 5 && notaFinal === 10) {
    document.write('PARABÉNS! VOCÊ FOI APROVADO! SUA MÉDIA FOI: ' + notaFinal)
} else if (notaFinal >= 5 && notaFinal === 10) {
    document.write('UAU! VOCÊ FOI MUITO BEM APROVADO! SUA MÉDIA FOI: ' + notaFinal)
} else if (notaFinal < 5) {
    document.write('VOCÊ FOI REPROVADO... SUA MÉDIA FOI: ' + notaFinal)
} else if (notaFinal < 3 || notaFinal === 0) {
    document.write('VOCÊ FOI BEM MAL HEIN, ESTÁ REPROVADO... SUA MÉDIA FOI: ' + notaFinal)
}




