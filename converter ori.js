//mehl = Gesammenge Mehl aus dem Trockensauerteig (Germ) Rezept
//wasser = Gesammenge Wasser aus dem Trockensauerteig (Germ) Rezept

function convertToSauerteig(mehl, wasser){
    let mengeMehlSauerteig = mehl * 0.75;
    let mengeSauerteig = mehl * 0.375;
    let mengeWasserSauerteig = wasser - (mengeSauerteig / 2);
    return "Für die Zubereitung mit Natursauerteig wird " + mengeMehlSauerteig + " g Mehl, " + mengeWasserSauerteig + " g Wasser und " + mengeSauerteig + " g Natursauerteig benötigt.";
}

//==================================================================

//Bitte hier die Mengen aus dem Trockensauerteig-Rezept eintragen:

let mehlTrockenSauerteig = 500
let wasserTrockenSauerteig = 300

//==================================================================

console.log("")
console.log("")
console.log("==================================================================")
console.log("Zur Berechnung eines neuen Rezepts bitte Programm öffnen und laut comment die Mengen eingeben!")
console.log("==================================================================")
console.log("")
console.log("")
console.log(convertToSauerteig(mehlTrockenSauerteig, wasserTrockenSauerteig).toUpperCase());
console.log("")
console.log("")