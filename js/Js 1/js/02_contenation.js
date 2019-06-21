//alert("coucou");
/**********************************************************
                         LA CONCATENATION
 ***********************************************************/


 /*Concatener signifie mettre bout en boout deux chaînes de caractères afin d'en former une troisième, nouvelle.
 Concatener, c'est donc additionner des chaînes de caractères.
 En Javascript, c'est donc additionner des chaînes de caractères . On va pouvoir concatener grace à à l'operateur <<+>>.*/

 var annee = 2017;
 var futur = 3;
 var calcul = annee + futur;
 console.log ( calcul );
 document.write ( calcul + "<br>" );

 var mois = "7";
 var calcul2 = annee + " " + mois;
 console.log ( calcul2 );
 document.write ( calcul2 + "<br>" );

 var DebutPhrase = "Auhourd'hui,";
 var NbStagiaires = 9;
 var SuitePhrase = "stagiaires";
 var FinPhrase = "sont présents";
 //Afficher la phrase en un seul morceau avec la concatenation.
 // ==> à vous de jouer  !!
 console.log( DebutPhrase  + " " + NbStagiaires + " " + SuitePhrase + " " + FinPhrase );
 /*document.write( DebutPhrase  + " " + NbStagiaires + " " + SuitePhrase + " " + FinPhrase  );*/
 

