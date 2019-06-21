//Syntaxe de base
//Commentaire sur une seule ligne.
/*
Ici, je fais un commentaire 
sur plusieurs lignes*/
//---1: déclarer une variable en JS.
//var Prenom;
//---2: Affectr une variable.
//Prenom = "Sandra";
//var Prenom= "Sandra";
//--: Une instruction se termine TOUJOURS par un pont virgule ";"
// aussi il est possible d'écrire plusieurs instructions 
//en une seule ligne.
//inst_1;
//inst_2; inst_3;
// //--4: Afficher une boite de dialogue (2 façons).
// alert("super, tu es arrivé sur mon site"); // notre sricpt est bien relié.
// window.alert('Super, tu encore sur mon site!');//notre script est bien lié.
// //--5: Afficher dans la console(ici, la valeur de ma variable Prenom)
// //---: Afficher dans la page web
// document.write("A la pause vous aurez des haribots");
// //--7: Demander à l'utilisateur une valeur (2 façons)
// //window.prompt("Question: quel jours sommes nous ?, jour de la semaine");
// window.prompt("question: quel jour sommes nous ?");
// //-----------> Et pour manipuler cette valeur, je n'oublie pas de la stocker.
// var jour = prompt("Question: Quel jour sommes nous ?", "Jour de la semaine");

//console.log(jour);
//Attention /!\ JS est sensible à la casse "case sensitive".
//camel case snake case
//--9: Une variable ne peut pas commencer par un chiffre, elle ne doit contenir que des caractères 
//Alphanumeriques, et ne peut pas être un mot  reservé (var, //for....des élements natifs du language JS)
//--10: Une variable peut être declarée de façon explicite:
//var fruit;
//var fruit = "fraise";
//ou implicite:
//var fruit_2 = (coco);
//haribo = "tagada";
/************************************************************* 
-------------------LES TYPES DE VARIABLES-------------------- 
*************************************************************/

//---1. Chaîne de caractères (string)
//L'objet global "string" est un constructeur de chaîne de //caractères.
//var vacances = "2017";
//var destination = "Australie";
//--2. Un nombre entier (integer ou int)
//var annee = 2017;
//--3.Un nombre décimal (float)
//var nombre_a_virgule = -5.32;
//--4. Un (booléen = VRAI/FAUX = TRUE/FALSE)
//L'objet BOOLEAN  est un objet permettant de representer une //valeur booléenne.
//var unBOOLEEN = false; // ---TRUE

//---5. Les constances
/*La déclaration de constantes permet de créer une constante accessiblen uniquement en lecture. Contrairement à une variable, sa valeur ne peut plus être modifioée par réaffectationplus bas dans le code
Une constante ne peut pas être déclaré à nouveau dans le même script.*/
/*---Par COVENTION, les constantes sont en MAUSCULES. 
const AN '2020'; // string
const BIRTH = 2020; // nombre*/
/*TYPEOF permet de connaître le type de ma VARIABLE*/
/*console.log('vacances');
console.log(typeof "vacances");
console.log('annee');
console.log(typeof 2019);*/
// En JS les variables sont auto-typées 
//On peut convertir une variable de type Number en String
//Et aussi STRING  en NUMBER avec les fonctions natives de JS.
//-- La fonction parseInt() renvoei un entier à, partir d'une // chaîne de caractères.(La fonction parseInt analyse une //chaîne de caractère fournie en argument et renvoie un entier //dans une base de données.)
var unChiffre = "12";
console.log(unChiffre);
console.log(typeof "unChiffre");
// STRING ==> "unChiffre"//

unChiffre = parseInt( unChiffre );
console.log( unChiffre );
console.log(typeof unChiffre);
//Je réaffecte une valeur

unChiffre = "12.22";
console.log( unChiffre );
console.log( typeof unchiffre );
//STRING ====> FLOAT 

/* la fonctiopn parseFloat permet de transformer une chaîne de caractere analysée*/
/*Un nombre flottant obtenu à partir de l'analyse de la chaîne de caractère. Si le premier caractère ne permet pas d'obtenir un nombre, ce sera la valeur NAN qui sera renvoyée.*/
unChiffre = parseFloat( unChiffre );
console.log( unChiffre );
console.log( typeof unChiffre );

// NUMBER ==> STRING 

var nb_en_lettres = 258;
console.log( nb_en_lettres );
console.log( typeof nb_en_lettres);

var nb_en_lettres = nb_en_lettres.toString();
console.log( nb_en_lettres);
console.log( typeof nb_en_lettres);
/*La méthode toString() en JS permet de donner un apperçu d'un objet instancié. C'est à dire que cette méthode va te retourner une chaîne de caractèere réprésentant ton objet: affichage de la valeur des propriétés par exempe.*/








