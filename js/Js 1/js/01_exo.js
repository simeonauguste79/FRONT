/*function surfaceRectangle(){

}
alert()
var longueur = 6; //longuer du rectangle
var largeur = 12; // Largeur du rectangle
//perimetre du rectangle est donc la surface= 2*(l+L)
console.log(varl + varL + varl + varl);
varResult = (varl + varL + varl + varl),
document.write(varl + varL);
varResult+// C'était mon exo et je me suis tropmé.*/
// Solutions 
//1ère methode
var largeur;
var longuer;
largeur = prompt("Quelle est la largeur du rectangle ?");
longueur = prompt("Quest la longuer du rectangle ?");
alert("la surface vaut" + longueur * largeur);
alert("le perimètre vaut" + 2* (Number(longuer) + Number(largeur)));

//2ème methode

function surfaceRectangle(){
alert("Salut, on va calculer ensemble !");
var longueur = prompt("Entre s' il te plait une longueur");
var largeur = prompt("Et maintenant une largeur");
resultat = longueur * largeur;
alert("La surface du rectagle est de " + resultat );
alert("Maintenant on va s' occuper du périmetre !");
var longueur = prompt("Entre s' il te plait une longueur");
var largeur = prompt("Et maintenant une largeur");
resultat = (2 * longueur) + (2 * largeur) ;
alert("Le périmetre du rectagle est de " + resultat );
}
