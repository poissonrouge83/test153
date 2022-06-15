//fonction animation sur texte bienvenue
const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim,  {
  loop: false,
  deleteSpeed: 20
})

typewriter 
.pauseFor(500)
.changeDelay(20)
.typeString('<strong>Vous êtes un professionel?</strong><br>')
.pauseFor(300)
.typeString('<strong> Vous avez des locaux a entretenir?</strong><br>')
.pauseFor(300)
.typeString('<strong> Alors, n\'hesitez plus!</strong><br>')
.pauseFor(300)
.typeString('<strong> Confiez nous vos Etablissements!</strong><br>')
.pauseFor(1000)
.deleteChars(15)
.typeString('<strong style="color: #0af248;"> Bureaux!</strong>')
.pauseFor(1000)
.deleteChars(10)
.typeString('<strong style="color: #f20aac;"> Snacs!</strong>')
.pauseFor(1000)
.deleteChars(7)
.typeString('<strong style="color: #0aa1f2;"> Restaurants!</strong>')
.pauseFor(1000)
.deleteChars(14)
.typeString('<strong style="color: #ebcf00;"> Locations de vacances!</strong>')
.pauseFor(1000)
.deleteChars(22)
.typeString('<strong style="color: #990af2;">Résidences!</strong>')
.pauseFor(1000)
.deleteChars(12)
.typeString('<strong style="color: rgb(235, 132, 0);"> Entreprises chéries!</strong>')
.start()