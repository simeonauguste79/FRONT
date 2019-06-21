var disMoi = "";
var i = 0;
while ((disMoi !== "oui") && (disMoi !== "non")){
disMoi = prompt("Alors on joue au Ni oui Ni non ?");
document.write(disMoi + "pour la" + i + "° fois, dis moi oui ou non ! <br>"); i++
}
