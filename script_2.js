// Demande à l'utilisateur de saisir un nombre
let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");

// Convertit l'entrée en nombre entier
nombre = parseInt(nombre);

// Fonction pour calculer la factorielle
function factorielle(n) {                  //factorielle(n) : Fonction qui calcule la factorielle en utilisant une boucle for.
    if (n === 0 || n === 1) {
        return 1; // La factorielle de 0 ou 1 est 1
    }
    let resultat = 1;
    for (let i = 2; i <= n; i++) {
        resultat *= i; // Multiplie resultat par i
    }
    return resultat;
}

// Affiche le résultat dans la console
console.log("Le résultat est : " + factorielle(nombre));
