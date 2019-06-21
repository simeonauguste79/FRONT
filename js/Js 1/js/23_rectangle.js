var bouton = document.getElementById('toggle-rectangle');
//Recherche du rectangle dans l'arbre DOM
var rectangle = document.querySelector('.rectangle');
/******************2-FONCTION************************************************************************************/ 
/*1_Fonction du click sur le bouton
 */
//La methode .toggle() va ajoouter ou supprimer la class(tel un interrupteur)
function surClicBouton(){
rectangle.classList.toggle('hide');

}
// Fonction au double-click sur le rectangle.
function auDoubleClicRectangle(){
rectangle.classList.toggle('good');
}
// A l'entrée du survol .add() va ajouter la class CSS
function auSurvolSourisRectangle(){
rectangle.classList.add('important');
// A la sortie du survol du rectangle
// La methode .remove( va ajouter ) la class CSS
function asortieSourisrectangle(){
    rectangle.classList.remove('good');
    rectangle.classList.remove('important');
}
}
// ECOUTEURS D'EVENEMENTS 
// 2nd parametre: La fonction à executer
// Installation d'un gestionnaire d'évenement au clic sur le bouton
bouton.addEventListener('click', surClicBouton);
// Instalateur d'un bouton à double clik sur le rectangle
rectangle.addEventListener('dblclick' , auDoubleClicRectangle);
// Installation d'un gestionnaire d'événement au survol sur le rectangle.
rectangle.addEventListener('mouseover', auSurvolSourisRectangle);
// Installation d'un gestionnaire d'événement à la sortie du survol sur le rectangle
//La methode "addEventListener" met en place une fonction à appeler chaque fois que l'événement specifié est remis à la cible. Les cibles courantes sont un "element", le "Document" lui même et une "window", mais elle peut être tout objet prenant en charge les évenements "comme XMLhttpRequest"