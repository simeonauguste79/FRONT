//alert("je suis là !");
/*********MA TABLE DE MULTIPLICATION**** */
var x = prompt("Entrez un nombre compris entre 2 et 9");

/*if(x >= 2){
console.log(x >= 2);
alert prompt("voici votre resultat");
}
else if(x < 2){
console.log(x < 2);
alert = prompt("Entre un chiffre compris entre 2 et 9");
}*/
if(x >= 2 && x <= 9){
/*
Boucle for:
1- J'initialise le debut de ma boucle: i = 0
2- La boucle doit aller jusqu'à 10 ====> i <= 10
3- a chqaue tour de boucle, i augmente de 1 ===> i++
*/
for(i = 0; i <= 10 ; i++){
    /*
    a: je concatène : x +" * " + i + " = " pour l'affichage (ex = 2 x 5 = )
    b/ j'exécute le résultat de l'opération x * i pour obtenir le résultat
    */ 
document.write(x +" * " + i + " = " + x*i + "<br>");
}
}
/*
le (X) est le nombre choisi
Le signe " x " est le signe de la multiplication
Le " + i +"
Le signe = sur le visuel
Le +    + sont pour marquer les espaces
===> + x*i + l'operation decrite avant
Le "<br>", c'est pour aller à la ligne
*/ 


