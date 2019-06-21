/*var Moyenne = prompt("Entrez votre moyenne");
if(Moyenne >= 10){
alert("Reçu !");
document.write(Moyenne >= 10 , 12);
}
else if(Moyenne < 10){
alert("Recallé !");
document.write(Moyenne < 10);
}
else if(Moyenne >= 12 ){
alert("Reçu avec Mention");
document.write(Moyenne >= 12);
}*/

var moyenne = prompt("Entrez votre moyenne");
if(moyenne < 10){
document.write("Vous êtes malheureusement récallé");
}else if(moyenne >= 10 && moyenne < 12){
document.write("moyenne >= 10 && moyenne < 12");
}