// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================
for (let i = 0; i < 3; i++) {
    console.log("Hoera!");
}

// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================

//     // we gaan totaal 5x loopen
for (let i = 0; i < 5; i++) {
    // als het 1,2,3,4e keer is log: loop
    if (i < 4) {
        console.log("loop...");
    }
    // 5e keer log: klaar
    if (i === 4) {
        console.log("klaar!");
    }
// else {
//     console.log("klaar!");
// }
}


