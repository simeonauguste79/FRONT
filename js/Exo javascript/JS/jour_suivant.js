var jour = prompt("Saisissez un nom de jour de la semaine");
var lundi
var Mardi
var Mercredi
var Jeudi
var Vendredi
var Samedi
var Dimanche
else if(jour === "lundi"){
alert("Jour suivant est Mardi");
document.write("demain nous serons Mardi");
}
else if(jour === "Mardi"){
alert("Jour suivant est Mercredi");
}
else if(jour === "Mercredi"){
alert("Jour suivant est Jeudi");
}
else if(jour === "Jeudi"){
alert("Jour suivant est Vendredi");
}
else if(jour === "Vendredi"){
alert("Jour suivant est Samrdi");
}
else if(jour === "Samedi"){
alert("Jour suivant est Dimanche");
}
else if(jour === "Dimanche"){
alert("Jour suivant est Lundi");
}
else if(jour === "Lundi"){
alert("Jour suivant est Mardi");
}





switch(jour){
case 'Lundi':
document.write('Demain nous aurons Mardi');
break;
case 'Mardi':
document.write('Demain nous aurons Mercredi');
break;
case 'Mercredi':
document.write('Demain nous aurons Jeudi');
break;
case 'Jeudi':
document.write('Demain nous aurons Vendredi');
break;
case 'Vendredi':
document.write('Demain nous aurons Samedi');
break;
case 'Samedi':
document.write('Demain nous aurons Dimanche');
break;
case 'Dimanche':
document.write('Demain nous aurons Lundi');
break;
default:
break;
}

