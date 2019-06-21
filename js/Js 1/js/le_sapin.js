// var Monsapin = prompt("Entrez un chiffre");
// if(Monsapin >= 1 && Monsapin <= 50){
// for(i = 0; i <= 1; i++ ){
// document.write( + Monsapin*i + "<br>");
// }if(i = 1,i <=  i++){
// document.write(Monsapin + Monsapin + "<br>");
// }
// }

/****************************CORRECTION DU SAPIN**********************/
var branche = prompt('choix du nombre d\'étages du sapin');
// on itère le nombre d'étages du sapin
for(var etage=1; etage<=branche; etage++) {
   // 1. Pour chaque étage e, nous avons i=e+3 lignes
   for(var i=0; i<etage+3 ; i++){
               // 2. Pour chaque ligne i, nous avons ((etage+i)*2)-1 étoiles
for(var nb_etoile=1; nb_etoile<=((etage+i)*2)-1; nb_etoile++){
document.getElementById('sapin').innerHTML+='*';
sapin.style.color ="green";
/*sapin.style.color ="red";*/          
}
document.getElementById('sapin').innerHTML+='</br>';
} //fin lignes
} //fin étage// On affiche le pied
for(var s=1; s<=branche; s++) {
 document.getElementById('sapin').innerHTML+='||||';
 document.getElementById('sapin').innerHTML+='</br>';
}
//La propriété Element.innerHTML de Element recupère ou definit la syntaxe 
//HTML decrivant les descendants de l'élement .
/*La methode getElementByID() de Document renvoie un objet Element representant l'élement dont la propriété id correspond à la chaîne de caractère specifiée. Etant donné que les ID d'élement doivent être uniques, s'ils */