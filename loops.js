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


// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over..
// ==========================================

// for loop van 0 tot 15 loop
for (let i = 0; i < 16; i++) {
    // voor elk getal even of oneven tonen
    if (i % 2 === 0) {
        console.log(i + " is even")
    } else {
        console.log(i + " is oneven")
    }
}


// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 9
// ==========================================


