// Demande à l'utilisateur le nombre d'étages de la pyramide
let etages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// Convertit l'entrée en nombre entier
etages = parseInt(etages);

// Construire la pyramide
for (let i = 1; i <= etages; i++) {  //Une boucle for pour construire chaque étage de la pyramide.
    let espace = " ".repeat(etages - i); //Génère les espaces nécessaires pour aligner les blocs.
    let bloc = "#".repeat(i); // Génère les blocs de la pyramide.
    console.log(espace + bloc); // Affiche chaque ligne de la pyramide dans la console
}
