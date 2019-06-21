//alert('jS okay');
// alert(jS Okay) Pour verifier que mon fichier jS est relié à mon HTML.
/*Syntaxe de base*/
//Deux slash pour faire un commentaire uniligne
/*Ici je peux faire un commentaire sur plusieurs lignes */
//--1: Déclaration d'une variable en jS
var Prenom;
//--2: Affecter une valeur
var Prenom =' Auguste';
//--: Une instruction se termine TOUJOURS  par un point-virgule, aussi il est possible d'écrire plusieurs instructions sur une seule ligne.
var instruction_1;
var instruction_2, instruction_3;
//--4: Afficher une boîte de dialogue (2 façons )
alert("WOW ! Tu es sur ma page !");
window.alert("WOW ! tu es sur ma page !");
//--5: Afficher dans console (ici, la valeur de ma variable Prenom) 
console.log('Auguste');
//--6: Afficher du texte dans une page web
document.write("Bonjour à tous");
//--7: Demander à l'utilisateur une valeur (2 façons)
var retournerValeur = window.prompt("question : on est quel jour ?", "Saisissez le jour de la semaine");
var retourneValeur = prompt("Question : on est quel jour","Saisissez le jour de la semaine");
//--8: Attention le JS est sensible à la casse (case sensitive)
//mavariable=/=maVariable
//--9: Une variable ne peut pas commencer par un chiffre, ne doit contenir que des caractéres alphabetiques, et ne peut être un mot resevé (var, for.... des élements natifs du language JS)
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s
//--10: Une variable peut être declarée de façon explicite:
var prenom = "Auguste";
//--ou implicite:
prenom = "Auguste";
//--1. Chaine de caractére (string)
var vacances = "2017";
var destination="Guadaljara";
//--2. Un nombre entier (integrer)
var annee = 2017;
//--3. Un nombre decimal (float)
var nombre_a_virgule=-5.32;
//--4. Un booléan (boolean= VRAI/FAUX= TRUE/FALSE)

var unBoolean = false; //--true

//--5. Les Constantes
/* La declaration const permet de créer une constante accessible uniquement en lecture. 
Contrairement à une variable, sa valeur ne peut être modifiée par réaffectation plus bas dans le code.
une constante ne peut pas être declarée à nouveau dans le même scripte.*/
//Par convention, les constantes sont en majiscule.
const PAYS = "France";
/*======================================================================================================*/
//Intro JS & Algo
/*=========================================================================================================
                                      LA CONTENATION
=========================================================================================================*/
var x = 'Auguste';
console.log('Bonjour'+ x + ' Ba, comment allez vous ?');
//C'est des ajouts des élements des uns après les autres.
// 1er Exemple
var annee = 2017;
var mois = 3;
var calcul = annee + "/" + mois;
//console.log(calcul);
document.write(calcul + "<br>");
//Je réaffecte une valeur à ma variable mois
mois = "7";
var calcul = annee + '/' + mois;

var DebutDePhrase = "Aujourd'hui ";

var NombreDeStagiaires = " 9 ";

var SuiteDePhrase = " stagiaires ";

var FinDePhrase = " sont présent.<br>";
//ns souhaitons afficher tt ça en 1 seul morceau grâce à la contenation

document.write(DebutDePhrase + NombreDeStagiaires+SuiteDePhrase+FinDePhrase);

var phrase1 = "je m'appelle ";
var phrase2 = " Sandra et j'ai ";
var age = 375;
var phrase3 = " ans ";
document.write(phrase1 +  phrase2 + age + phrase3);
/*_________________________________________________________________________________________________________
                                      LES PERATEURS ARITHMETIQUES
___________________________________________________________________________________________________________*/

//#########################################L'addition#########################
//---Déclaration de plusieurs variables à la suite 
var nb1, nb2, resultats;
nb1 = 10;
nb2 = 5;
// Addition de nb1 + nb2 avec l'operateur "+"
resultat = nb1 + nb2;
console.log(resultat);
document.write(resultat);
//--document.write(resultat) pour avoir un resultat visuel sur le chrome.
//----Affichage du resultat

//##############################La soustraction####################################

var nb1, nb2, resultats;
nb1 = 10;
nb2 = 5;
resultat = nb1 - nb2;
// Addition de nb1 - nb2 avec l'operateur "-"
resultat = nb1 - nb2;
console.log(resultat);
document.write(resultat);
//------- Affichage du resultat

//################################# La multiplication#####################################
var nb1, nb2, resultats;
nb1 = 10;
nb2 = 5;
resultat = nb1 * nb2;
// Multiplication de nb1 * nb2 avec l'operateur "*"
resultat = nb1 * nb2;
console.log(resultat);
document.write(resultat);
//--------Affichage du resultat

//###############################La division########################################

var nb1, nb2, resultats;
nb1 = 10;
nb2 = 5;
resultat = nb1 / nb2;
console.log(resultat);
document.write(resultat);

//############################# Le Modulo#####################
//---Le modulo retourne le reste d'une division
//-----------Le modulo de nb1 % nb2 avec l'operatuer "%"

nb1 = 11;
resultat = nb1 % nb2;
//-------------Affichage du resultat
console.log(resultat);
document.write(resultat);

/*----------------------------------------------------------------------------------------------------------------------------------------
                                LES ECRITURES SIMPLIFIEES 
----------------------------------------------------------------------------------------------------------------------------------------*/


nb1 = 15;
nb1 = nb1 + 5;
console.log(nb1)
document.write(resultat);
//---Je peux procedé de la même maniere pour les autres operateurs arithmetiques. "+", "-", "/", "*"
nb1 + 5;
//Ce qui équivaut à écrire nb1 = nb1 + 5
// Ici, j'ai incrementé et reaffecté.

/*________________________________________________________________________________________________________________________________________
                                                    INCREMENTATION & DECREMENTATION
________________________________________________________________________________________________________________________________________*/

var nb1 = 1;
nb1 = nb1 + 1;
//Affichage dans la console
console.log(nb1);
//Ecriture simplifiée
nb1++;
console.log(nb1);
//####################################### Décrementation ############################################
nb1 = nb1 - 1;
//



/*______________________________________________________________________________________________________________________________________
                                                LES CONDITION
________________________________________________________________________________________________________________________________________*/

var MajoriteFR = 18;
if(MajoriteFR >= 18){//si ma condition est vraie (boolean = TRUE/VRAI) alert("Bienvenue");
} else{// sinon => ma condition est fausse (boolean = FALSE/FAUX)
alert("Allez voir ailleurs !");
}

//-------Exo

/*________________________________________________________________________________________________________________________________________
Créer une fonction permettant de verifier l'âge d'un visiteur.
S'il a la majorité legale, alors je lui souhaite la bienvenue, sinon, je fais une redirection sur Google après lui avoir signalé le soucis.
________________________________________________________________________________________________________________________________________*/
var MajoriteFR = 19;
if(MajoriteFR<= 18){
    alert('bienvenue');
}else{
    alert("https://www.google.fr/");
}
/*________________________________________________________________________________________________________________________________________
                                                                  CORRECTION
________________________________________________________________________________________________________________________________________*/
//Je declare une variable  
//1------
var age= prompt("Quel age avez vous ?", "<saisi votre age>");//"<> le placeheader"
//2------ma condition
if(age >= 18){
alert("Bienvenue sur mon site");
}else{
document.location.href = "https://www.google.com/";
}                                                             













