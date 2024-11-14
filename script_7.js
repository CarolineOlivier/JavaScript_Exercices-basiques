// Fonction pour interagir avec le bot
function acneBot() {
    // Ouvre une fenêtre de prompt pour que l'utilisateur puisse écrire un message
    let userMessage = prompt("Yo, ça raconte quoi aujourd'hui?:");


   // Supprime les espaces en début et fin de la chaîne avant de faire les vérifications
    userMessage = userMessage.trim();

    // Vérifie si le message est une question (se termine par ?)
    if (userMessage.endsWith("?")) {
        console.log("Ouais Ouais...");
    }
    // Vérifie si le message est tout en majuscules (utilisateur hurle)
    else if (userMessage === userMessage.toUpperCase() && userMessage !== "") {
        console.log("Pwa, calme-toi...");
    }
    // Vérifie si le message contient "Fortnite"
    else if (userMessage.includes("Fortnite")) {
        console.log("on s' fait une partie soum-soum ?");
    }
    // Vérifie si le message est vide
    else if (userMessage.trim() === "") {
        console.log("t'es en PLS ?");
    }
    // Si aucune des conditions ci-dessus n'est remplie
    else {
        console.log("balek.");
    }
}

// Appelle la fonction pour lancer le bot
acneBot();
