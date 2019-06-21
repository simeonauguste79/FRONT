// // alert("coucou ");

// /* javascript fournit trois opérations permettantde comparer des valeurs:

// => l'égalité srict (ou identité ou <<triple égal>>) utilisant "===",

// => l'égalité faible (ou <<double égal>>) utilisant ==,

// => Object.is()(ajouté avec ECMAScript 2015) */

// // L'opérateur de comparaison == signifie 'égale à'

// // il permet de vérifier que les valeurs de 2 variables sont identiques.

// var nb1 = 123;

// var nb2 = 123;

// console.log(nb1 == nb2); // retourner TRUE.

// // L'opérateur de comparaison === signifie 'strictement égal à'

// // Il permet de vérifier la VALEUR et le type

// console.log(nb1 === nb2); //retourner TRUE

// // L'opérateur  !=signifie 'différent de ......en VALEUR'

// console.log(nb1 != nb2); // retourner FALSE

// // L'opérateur !== signifie 'strictement diffférent de ......en VALEUR et en TYPE'

// console.log(nb1 !== nb2); // retoune FALSE

// /*-------------------EXERCICE-------------*/

// /* J'arrive sur un espace sécurisé au moyen du prénom et de l'âge

// je dois saisir mon prénom et mon âge pour être authentifié sur le site ( les infos sont en BDD, ici dans mes variables prénom et âges)

// En cas d'echecs,une alerte m'informe du problème.

// Si tout se passe bien, un message de bienvenue m'accueille. */

// // 1-- Demander son prénom à l'utilisateur// var prenom = "nassim";

// var age = 28;// var prenom2 = prompt("Indiquez votre prenom");

// var age2 = prompt("Indiquez votre âge");// if (prenom == prenom2 && age2 == 28) {

//     alert("Bienvenue " + prenom);// }else{

//     // si ce n'est pas le bon prénom et âge

//     alert("Alerte");

// }// /*-----------CORRECTION----------*/

// var prenom, monAge;

// prenom = "Nassim";

// monAge = 25;// // 1-- Demander son prénom à l'utilisateur avec un prompt;

// var prenomLogin = prompt ("Quel est votre prénom");

// // 2-- Je vérifie si le prénom saisi (prenomLogin) correspond à celui de la base de données (prénom)

// if(prenomLogin === prenom){

//     //alert('test')

//     //2a. Si tout est ok,je continue la vérification avec l'âge

//     //2a1. je demande à mon utilisateur de rentrer son âge(prompt)

//     var ageLogin = parseInt(prompt("votre âge?"));

//      if(ageLogin === monAge){

//     alert ("Bienvenue"+ prenomLogin);

//     } else{

//         //2a2.Si les âges ne correspondent pas,je lance une ALERT.

//     alert("Erreur d'âge");

//     }

//     } else{

//         //2b. Sinon, les prenoms ne correspondent pas,je lance une alerte.("Erreur de prenom")

//         alert("Attention,prénom non reconnu");

//     }

var prenom,monAge;

prenom = "Nassim";

monAge = 28;

mdp = "amara";

var prenomLogin = prompt("Quel est votre prénom?");if(prenomLogin === prenom){

var ageLogin = parseInt(prompt("Votre âge?"));

if (ageLogin=== monAge){

    var mdpLogin = prompt("Quel est le mot de passe ");

    if(mdpLogin=== mdp){

        alert("Bienvenue " + prenomLogin);

    }else{

    alert("Problème avec votre mot de passe!");

    }    } else{

    alert("Erreur d'âge");

}

}else{

alert("Attention, prénom non reconnu");

}//FIN if(prenomLogin === prenom)

//Zone de message