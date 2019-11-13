// A) maak 2 verschillende variabelen met twee willekeurige integers (zelf kiezen)
var getal1 = 10;
var getal2 = 15;

// B) toon beide getallen op het scherm met document.getElementById('<jouw_gekozen_id>').innerHTML
document.getElementById("getal1").innerHTML = getal1;
document.getElementById("getal2").innerHTML = getal2;


// C) Vraag de gebruiker om een INPUT waarde door prompt() te gebruiken. 
// Gebruik de prompt()-waarde om een variabelen te 'vullen'
getal1 = prompt("Getal 1")
getal2 = prompt("Getal 2")

// D) Vergelijk de twee getallen met elkaar door gebruik te maken van conditions  if()
if (getal1 > getal2) {
    alert("Getal 1 is groter dan getal 2")
}
