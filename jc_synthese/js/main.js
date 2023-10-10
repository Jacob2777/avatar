let personnage = document.querySelector(".personnage")

function changementTexte(){
    let texte = document.querySelector(".texte")
    let texteTempsReel = document.querySelector(".texte-temps-reel")

    texte.addEventListener("input", e => {
        texteTempsReel.textContent = texte.value + " "  
    })
}

function changementBordure(){
    let moins = document.querySelector(".moins")
    let plus = document.querySelector(".plus")
    let tailleBordure = document.querySelector(".taille-bordure")
    let bordureLargeur = 1
    
    plus.addEventListener("click", e => {
        if (bordureLargeur < 10){
            bordureLargeur += 1
            personnage.style.border = `${bordureLargeur}px solid black`
            tailleBordure.textContent = bordureLargeur + "px"
        }
    })
    
    moins.addEventListener("click", e => {
        if(bordureLargeur > 1){
            bordureLargeur -= 1
            tailleBordure.textContent = bordureLargeur + "px"
            personnage.style.border = `${bordureLargeur}px solid black`
        }
    })
}

function changementForme() {
    let formePersonnage = document.querySelector(".forme")
    let valeurForme = formePersonnage.value;
  
    if (valeurForme === "cercle") {
      personnage.style.borderRadius = "50%";
    } else if (valeurForme === "carre") {
      personnage.style.borderRadius = "0px";
    } else {
      personnage.style.borderRadius = "20px";
    }
  }

  function changementYeux(){
    let oeilDroit = document.querySelector(".oeil-droit")
    let oeilGauche = document.querySelector(".oeil-gauche")
    
    let yeux1 = document.querySelector(".yeux-un")
    let yeux2 = document.querySelector(".yeux-deux")
    let yeux3 = document.querySelector(".yeux-trois")
    
    yeux1.addEventListener("click", e => {
        oeilDroit.style.borderRadius = "50%"
        oeilGauche.style.borderRadius = "50%"
    })

    yeux2.addEventListener("click", e => {
        oeilDroit.style.borderRadius = "0px"
        oeilGauche.style.borderRadius = "0px"
    })

    yeux3.addEventListener("click", e => {
        oeilDroit.style.borderRadius = "10px"
        oeilGauche.style.borderRadius = "10px"
    })
  }

  function ChangementNoeudPapillon(){
    let noeudPapillonPartieDroite = document.querySelector(".partie-droite")
    let noeudPapillonPartieGauche = document.querySelector(".partie-gauche")
    let noeudPapillonAvec = document.querySelector(".oui")
    let noeudPapillonSans = document.querySelector(".non")

    noeudPapillonAvec.addEventListener("click", e =>{
        noeudPapillonPartieDroite.style.display = "block"
        noeudPapillonPartieGauche.style.display = "block"
    })

    noeudPapillonSans.addEventListener("click", e =>{
        noeudPapillonPartieDroite.style.display = "none"
        noeudPapillonPartieGauche.style.display = "none"
    })
  }

  setInterval(function() {
        personnage.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    }, 5000);
  
changementTexte()
changementBordure()
changementForme()
changementYeux()
ChangementNoeudPapillon()