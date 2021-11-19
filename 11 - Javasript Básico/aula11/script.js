/*

Switch

*/


let diaSemana = 4

let nomeDiaSemana

switch(diaSemana) {
    case 0:
        nomeDiaSemana = 'DOMINGO'
        break;
    
    case 1:
        nomeDiaSemana = 'SEGUNDA-FEIRA'
        break;
    
    case 2:
        nomeDiaSemana = 'TERÇA-FEIRA'
        break;

    case 3:
        nomeDiaSemana = 'QUARTA-FEIRA'   
        break;

    case 4:
        nomeDiaSemana = 'QUINTA-FEIRA'
        break;
    
    case 5:
        nomeDiaSemana = 'SEXTA-FEIRA'
        break;
    
    case 6:
        nomeDiaSemana = 'SÁBADO'
        break;
}

document.write(`HOJE É ${nomeDiaSemana}`)


