window.onload= function(){

    var titrePage = document.createElement('h1')
    titrePage.className= "titrePage"
    titrePage.innerHTML = "Quelques bons auteurs de polars"
    document.getElementById('header').appendChild(titrePage)

    function createPolar(number){
        /*
         <h2 class="titre">Titre</h2>
            <p class="textePolar"></p>

        */
       var somePolar = dataPolars[number]

       var auteurPolar = document.createElement('h2')
       auteurPolar.className = "titre"
       auteurPolar.id= number + '-titre'
       auteurPolar.innerHTML = somePolar.auteur

       var containerPolar = document.createElement('div')
       containerPolar.className= "containerPolar"
       containerPolar.id= "containerPolar"

       var textePolar = document.createElement('p')
       textePolar.className = "textePolar"
       textePolar.id= number + "-textePolar"
       textePolar.innerHTML = somePolar.texte

       var image = document.createElement('img')
       image.src= somePolar.image
       image.alt= somePolar.auteur
       image.className= "imagePolar"
      

       document.getElementById('contenu').appendChild(auteurPolar)

       containerPolar.appendChild(image)
       containerPolar.appendChild(textePolar)
       /*document.getElementById('contenu').appendChild(image)
       document.getElementById('contenu').appendChild(textePolar)*/
        document.getElementById('contenu').appendChild(containerPolar)


    }
    for (let index = 0; index < dataPolars.length; index++) {
        createPolar(index)
        
    }
}