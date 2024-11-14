// Fonction qui traduit une séquence d'ARN en acides aminés
function translateARN(arn) {     //la fonction translateARN :Prend une chaîne arn en entrée.
    // Table de correspondance des codons en acides aminés
    // Un objet qui associe chaque codon (séquence de 3 lettres) à un acide aminé.
    // Chaque clé représente un codon, et chaque valeur est le nom de l'acide aminé correspondant.
    const codonToAminoAcid = {   
        "UCU": "Sérine", "UCC": "Sérine", "UCA": "Sérine", "UCG": "Sérine", "AGU": "Sérine", "AGC": "Sérine",
        "CCU": "Proline", "CCC": "Proline", "CCA": "Proline", "CCG": "Proline",
        "UUA": "Leucine", "UUG": "Leucine",
        "UUU": "Phénylalanine", "UUC": "Phénylalanine",
        "CGU": "Arginine", "CGC": "Arginine", "CGA": "Arginine", "CGG": "Arginine", "AGA": "Arginine", "AGG": "Arginine",
        "UAU": "Tyrosine", "UAC": "Tyrosine"
    };

    // Découpe la chaîne d'ARN en groupes de 3 lettres (codons)
    let codons = arn.match(/.{1,3}/g); 
    //Utilise match avec l'expression régulière /.{1,3}/g pour diviser la chaîne arn en segments de 3 caractères.
    // Cela crée un tableau codons qui contient chaque codon. 
        //match : Méthode qui retourne un tableau de sous-chaînes correspondant.
       //.{1,3}/g : Expression régulière qui signifie "prends chaque groupe de 3 caractères de la chaîne".
    
    // Traduit chaque codon en acide aminé en utilisant la table de correspondance
    let acidesAmines = codons.map(codon => codonToAminoAcid[codon] || "Inconnu");
    //let acidesAmines = codons.map(...) : Utilise map pour parcourir le tableau codons et convertir chaque codon en acide aminé.
    //codons.map(...) : Parcourt chaque codon et le traduit en utilisant la table.
    //codonToAminoAcid[codon] : Accède à l'acide aminé correspondant au codon dans l'objet codonToAminoAcid.
    // || "Inconnu" : Si le codon n'est pas trouvé dans codonToAminoAcid, on retourne "Inconnu".

    return acidesAmines.join("-");  
}
    //join("-") : Concatène  tous les éléments d'un tableau en une seule chaîne de caractère,
    // en insérant le symbole "-" entre chaque acide aminé.

// Exemple d'utilisation avec les deux ARN donnés
// Déclaration de la première chaîne d'ARN à traduire
let arn1 = "CCGUCGUUGCGCUACAGC";

// Déclaration de la deuxième chaîne d'ARN à traduire
let arn2 = "CCUCGCCGGUACUUCUCG";

// Affiche la traduction de la première séquence d'ARN
// `translateARN(arn1)` appelle la fonction `translateARN` pour traduire `arn1` en acides aminés
console.log("Traduction de l'ARN 1 : " + translateARN(arn1));


// Affiche la traduction de la deuxième séquence d'ARN
// `translateARN(arn2)` appelle la fonction `translateARN` pour traduire `arn2` en acides aminés
console.log("Traduction de l'ARN 2 : " + translateARN(arn2));
