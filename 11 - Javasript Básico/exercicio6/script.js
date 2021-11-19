
let listaAtores = [

    {
  
      nome: 'Keanu Reeves',
  
      personagem: 'Neo',
  
      filme: 'The Matrix',
  
    },
  
    {
  
      nome: 'David Prowse',
  
      personagem: 'Darth Vader',
  
      filme: 'Star Wars Episódios IV-VI',
  
    },
  
    {
  
      nome: 'Bruce Wayne',
  
      personagem: 'Batman',
  
      filme: 'Batman - O Início'
  
    },
  
  ]

  let htmlAtores = ''
  

  for(let ator of listaAtores){

    htmlAtores += `
        <h1>Nome: ${ator.nome} </h1><br>
        <h2>Interpreta o personagem ${ator.personagem} no filme ${ator.filme}</h2>`
    
        for(let box = 0; box < 3; box++){

        }
    
  }


document.getElementById().innerHTML = htmlAtores




