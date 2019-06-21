//alert("Je suis operationnel !");
/************************************************************
 -----------------------L'ADDITION----------------------------
 *************************************************************/
//--1.Addition
 var nb1, nb2, resultat;
nb1 = 10;
nb2 = 5;
/*--Addition de nb1 + nb2 avec l'opérateur '+'*/
resultat = nb1 + nb2;
//affichage dans la console.
console.log(resultat);
document.write(resultat);

/************************************************************* 
 ---------------------------SOUSTRACTION----------------------
**************************************************************/
//--2. Soustraction
//---Soustraction de nb1 - nb2 avec l'operateur '-'

resultat = nb1 - nb2;
console.log(resultat);
//document.write(resultat);
//document.write(resultat);

/************************************************************ 
 --------------------------MULTIPLICATION---------------------
**************************************************************/
/*--3 La multiplication de nb1 * nb2 avec l'opérateur '*'*/
resultat = nb1 * nb2;
console.log(resultat);
//document.write(resultat);
/************************************************************* 
 ----------------------------LA DIVISION----------------------
**************************************************************/

/*--4 La division de nb1 / nb2 avec l'opérateur '/' */
resultat = nb1 / nb2;
console.log(resultat);
//document.write(resultat);

/************************************************************* 
 ---------------------------LE MODULO-------------------------
**************************************************************/

/*--5.Le MODULO
//-- Le modulo retourne le reste d'une division.
/*Modulo: Terme employé dans le domaine des mathématiques pour qualifier une fonction qui permet de detrminer le reste de la division d'une variable par un nombre préalablement defini.*/
//--Modulo de nb1 avec nb2 avec l'opérateur '%'.

resultat = nb1 % nb2;
console.log(resultat);
//document.write(resultat);
//-- Et maintenant je réaffecte une valeur à nb1
nb1 = 11;
resultat = nb1 % nb2;
console.log(resultat);
document.write(resultat);
console.log( "le reste de la division de" +nb1+ "par" +nb2+ "est égal à" + resultat);


/**************************************************************
 ---------------------LES ECRITURES SIMPLIFIEES--------------
 ************************************************************/
nb1 = 15;
nb1 = nb1 + 5;
console.log(nb1);
document.write(nb1);
nb1+= 10; // nb1 lui-même + quelque chose
console.log(nb1);
document.write(nb1);


