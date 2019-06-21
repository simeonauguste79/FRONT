//alert("Salut Sim !");
/*L'instruction "if" execute une instruction si une condition donnée est vraie. si la condition n'est pas verifiée, il est possible d'utiliser une autre instruction.*/
//---------------------STUCTURE DE BASE-----------------------/

if(true){/*Par defaut, la condition à verifier le "if" verifie si elle est vraie*/
/*------ici le code---------*/

}
 var nb1 = 10;
 if(nb1<50){
     console.log("nb1 est bien inferieur à 50");
 }
 if(true){
    /*--------Le code-----si c'est vrai------*/
 }else{
    /*----------Le code si c'est faux--------*/
 }

 if(nb1>50){
    console.log("nb1 est bien inferieur à 50");
 }else{
    console.log("nb1 n'est pas inferieur à 50");
 }

 /*-----------------------EXERCICE---------------------------

 On utilise le if  pour verifier l'âge de l'internaute.
 ===> Si, il est majeur, je lui souhaite la bienvenue.
 ===========> si, il est mineur, je:
 1. Lui signale et 2: le renvoie vers un autre site*/
 //-Je declare la majorité legale
 //------determiner l'âge en s'assurant que nous avons un number
 //Je verifie si mon internaute est majeur
 //S'il est mineur je lui signale
 //Et ensuite je le redirige vers un autre site internet

 var age = prompt("Quel âge avez-vous ?");
 
if(age>=18){
alert =("Bienvenue");
}
else(age<=18)
{
alert = prompt("https://www.google.com/");
}


 