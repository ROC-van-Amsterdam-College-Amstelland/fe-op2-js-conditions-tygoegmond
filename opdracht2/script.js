/* Opdracht 2 */

/* A) Schrijf code waarmee je ingevulde waarde uit het invulveld 'ophaalt'
 *    maak gebruik van document.getElementById().value; 
 */

var ingevuld_getal = document.getElementById("leeftijd").value;

/* B) Schrijf code waarmee je het ingevulde getal vergelijkt (condition) met de stemgerechtigde leeftijd van 18 jaar.
 * Als de leeftijd groter is dan 18 dan verander je de achtergrondkleur van de site met:
                    document.getElementByTagName('body').style.backgroundColor = 'purple'
 */

/* jouw code hieronder-->> */

var input = document.getElementById("leeftijd");

input.addEventListener('change', (ev) => {
    var ingevuld_getal = document.getElementById("leeftijd").value;

    if (ingevuld_getal > 18) {
        document.getElementById('body').style.backgroundColor = 'purple';
    }
    
    if (ingevuld_getal < 18) {
        document.getElementById('body').style.backgroundColor = 'green';
    }
    
})