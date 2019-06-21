//alert('ok');
//Aller chercher switcher l'image lorqu'on clique dessus
//Il faut commencer par declarer cette variable
var monImage = document.querySelector('img');
console.log(monImage);
//queryselector selectionne une liaison css donc image
//on selectionne alors dans le document la prémiere image du document.
/*querySelector all recupererait toutes les images contrairement à queryselector*/
//var monImage = document.querySelectorAll('img')[0];
/*addEvenListener pour ajouter un écouteur de click sur l'image*/

 /*addEventListener attent deux actions
1_L'evenement ==> le click
2_Changer la source de l'image
*/
// <a ==> est une balise et href="#" ==> est un attribut
monImage.addEventListener('click' , function(){
/*On va recuperer dans une variable maSrc, la valeur actuelle de l'attribut src de mon image
On va utiliser la methode getAttribute()
La question est quel est l'argument attendu pour cette methode ?

*/
//alert('click');
var maSrc = monImage.getAttribute('src');
console.log(monImage);

/*
Si la valeur de maSrc est égale à 'image/logo_firefox.png'(sa source), ALORS tu fais une alerte
alerte('je suis l'image 1') SINON
alerte(masrc + "n'est pasl'image 1" )

*/


/*if(condition){
    instruction 1;
}
else{
instruction 2;*/


/*if(maSrc === 'img/logo_firefox_1.png'){
    alert("je suis l'image 1, ma source est " + maSrc);
}
else{
alert("Je ne suis pas l'image 1");
}*/

/*Seconde version, on va intervertir les images, au lieu de getAttribute on aura setAttribut
qui attend deux arguments.
1_La source
2_Sa nouvelle valeur, ce sera l'image firfox2
On veut remplacer la source par la deuxième image
*/

if(maSrc === 'img/logo_firefox_1.png'){
    alert("je suis l'image 1, ma source est " + maSrc);
    monImage.setAttribute('src', 'img/logo_firefox_2.png');
}
else{
alert("Je ne suis pas l'image 1");
//ici on veut remplacer par la source de la deuxieme image
monImage.setAttribute('src', 'img/logo_firefox_1.png');
}
});

/*******LA FONCTION D'INVERSION DES IMAGES*********/


/*
Dans le code précedent on a fait:
1_ Quand on click sur l'image (dans la fonction addEventlistener)
2_on utilise la structure conditionnelle if else pour voir si la valeur de l'attribut src est égale au chemin de l'image originale.
3_Si c'est le cas, on échange la valeur de cet attribut en lui indiquant le chemin vers la seconde image
4_Si ça n'est pas le cas (ce qui signifie que l'image a été changée), la valeur de l'attribut src revient à sa valeur initiale.
*/


/***********AJOUTER UN MESSAGE D'ACCUEIL PERSONNALISE*******/

/*On va changer le titre de la page pour inclure un message pour le visiteur du site . Ce message sera conservé quand le l'utilisateur quittera le site et s'il y revient.
On va conserver ce message dans le cache du navigateur en utilisant l'API.
Webstorage
Au final on ajoutera une option sur le bouton, pour pouvoir changer l'utilisateur et le message d'accueuil si besoin il y a.

//PREMIERE ETAPE
=======> Recuperer dans une variable mon titre le premier h1 du document



*/

var monTitre = document.querySelector('h1');
console.log(monTitre);

//ETAPE 2 CREER LE BOUTON

/*Recuperre dans une variable monBoutton
la premiere balise button du document
*/
var monBoutton = document.querySelector('button');
//ON VA ENSUITE PREPARER LA FONTION MESSAGE D4ACCUEIL
/*
Invoquer, declen,cher plus tard*/

function definiNomUtilisateur(){
var monNom = prompt('Ecrire ton prenom');
//On va stacker dans le cash du navigateur
localStorage.setItem('nomUtilisateur', monNom);
/*c'est cette operation qui permet de stocker le nom dans le cash du navigateur*/
monTitre.textContent = "Bienvenue"  +  monNom;
/*
Faire intervenir monTitre et l'associer à mon à travers une contenation avec monTitre.textContent = "Bienvenue" + monNom;
*/
}

/*La suite va écrire: tester si le nom n'est pas dans le cash d, s'il n'y est pa, on demande avec propmt son nom à l'utilisateur (decleche la fonction definirNomUtilisateur)
S'il y est, si le nom y est, on le recupere dans le titre.

ON VA FAIRE CE TEST APRES
Au click sur le bouton, invoquer la fonction definirNomUtilisateur()
*/

if(!localStorage.getItem ('nomUtilisateur')){
definiNomUtilisateur();
}
else{
var nomEnregistre = localStorage.getItem('nomUtiisateur');
monTitre.textContent = "Bienvenue à nouveau" + nomEnregistre;
}


monBoutton.addEventListener('click', function(){
definiNomUtilisateur(); 


//Pour tester, il faut vider localStorage
//localStorage.clear();

})
/*Le bloc if else utilise l'operateur de negation NO (le point d'exclamation) pour verifier si le navigateur possède une donnée appélée nomUtlisateur ou pas.
SINON, la fonctionla definrNomUtilisateur() est invoquée pour créer cette donnée
Pour finir, on definit le contenu de textContent pour le titre avec une concatenationde chaîne suivie du nom de l'utilisateur.
Enfin, on associe le gestionnaire d'événement click au boutton.
Quand l'utilisateur cliquera sur le bouton, ça declenchera l'execution de la fonction definiNomUtilisateur;
Ce bouton permet donc à l'utilisateur de modifier de modifier le nom s'il le souhaite.c


*/
//EXPLICATION DE LA FONCTION

/*
Cette fonction utiliseune boîte de dialogue prompt qu'elle utulise comme une alerte qu'elle denonce dans une variable
Dans notrer exemple, on demande à l'utilisateur de saisir son nom ensuite nous appellons l'API localStorage qui permet de stocker des données dans le navaigateur afin de les utiliser ulterieurement.
Nous utilisons la fonction setitem de cette API pour stocker la donnée qui nous interesse dans un conteneur appelé nomUtilisateur.
La valeur stockée et la valeur de la variable dde mon nom qui contient le nom de l'utilisateur saisit dans le prompt.
Au final, on utilisera la proprieté textContent du Titre pour lui attribuer un nouveau contenu ou affecter un nouveau contenu.


*/



