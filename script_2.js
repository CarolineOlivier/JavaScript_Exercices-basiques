// Demande à l'utilisateur de saisir un nombre
let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");

// Convertit l'entrée en nombre entier
nombre = parseInt(nombre);

// Fonction pour calculer la factorielle
function factorielle(n) {                  //factorielle(n) : Fonction qui calcule la factorielle en utilisant une boucle for.
    if (n === 0 || n === 1) {      // Vérifie si la valeur de n est 0 ou 1
        return 1; //  Retourne 1, car la factorielle de 0 ou 1 est toujours 1
    }
    let resultat = 1; // Initialise une variable "resultat" à 1, qui contiendra le produit final
    for (let i = 2; i <= n; i++) {  //Utilise une boucle pour multiplier tous les entiers de 2 à n
        resultat *= i; //Multiplie "resultat" par "i" à chaque itération
    }
    return resultat; // Retourne la valeur finale de "resultat", qui est la factorielle de "n"
}

// Affiche le résultat dans la console
console.log("Le résultat est : " + factorielle(nombre));
// Affiche dans la console le résultat de l'appel de la fonction "factorielle" avec "nombre" en argument




//détails sur le code : 
//=== - Opérateur de comparaison stricte. Il vérifie si la valeur de n est strictement égale à une autre valeur (ici, 0
//Cela signifie qu'il vérifie à la fois la valeur et le type (par exemple, n doit être de type number et égal à 0).

// || - Opérateur logique "OU". Il permet de vérifier si au moins une des deux conditions est vraie. 
//Si n === 0 est vrai, le bloc de code sera exécuté ; sinon, la seconde condition sera évaluée.
//{ - Accolade ouvrante qui indique le début du bloc de code à exécuter si la condition est vraie.


//for (let i = 2; i <= n; i++) {                        
// explication détaillées : 

//for - Mot-clé utilisé pour démarrer une boucle for. 
//Une boucle for est une structure qui permet de répéter l'exécution d'un bloc de code un certain nombre de fois, 
//jusqu'à ce qu'une condition soit remplie.

//( - Parenthèse ouvrante. Elle délimite le début de la déclaration de la boucle, où sont définies les instructions d'initialisation,
// la condition d'exécution, et l'incrémentation.

//let - Mot-clé qui déclare une variable (i dans ce cas) qui ne sera utilisée que dans la boucle (variable à portée de bloc).

//i - Nom de la variable de contrôle. i est souvent utilisée dans les boucles pour représenter un index ou un compteur.
// Cette variable sera initialisée, testée, et incrémentée à chaque itération de la boucle.

// = - Signe d'affectation. Il sert à donner une valeur initiale à la variable i.

//2 - Valeur initiale de la variable i. La boucle commence avec i égal à 2.

// ; - Point-virgule qui sépare chaque partie de la déclaration de la boucle for. Il y a trois parties dans cette boucle :

//Initialisation (let i = 2)
//Condition (i <= n)
//Incrémentation (i++)

// i <= n - Condition de continuation de la boucle. La boucle continue à s'exécuter tant que cette condition est vraie. 
// Ici, tant que i est inférieur ou égal (<=) à la valeur de n, la boucle continue de tourner.

// i : La variable de contrôle, qui est testée à chaque itération.
// <= : L'opérateur de comparaison "inférieur ou égal à". Cette condition est vérifiée à chaque itération.
// n : Une autre variable, souvent définie précédemment dans le code, qui détermine la limite supérieure de la boucle.

//; - Point-virgule qui sépare la condition de la mise à jour de la boucle.

// i++ - Incrémentation de la variable i. Cela signifie que la valeur de i sera augmentée de 1 à chaque itération de la boucle.
// i : La variable de contrôle.
// ++ : Opérateur d'incrémentation. Il augmente la valeur de i de 1 après chaque exécution du bloc de la boucle.

// ) - Parenthèse fermante qui délimite la fin de la déclaration de la boucle for.

//  { - Accolade ouvrante qui marque le début du bloc de code à exécuter à chaque itération de la boucle.
