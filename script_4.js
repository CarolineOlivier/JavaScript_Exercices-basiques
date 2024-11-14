// Tableau des entrepreneurs
const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Filtrer les entrepreneurs nés dans les années 70
//const seventiesEntrepreneurs : Déclare une constante pour stocker le tableau filtré.
//entrepreneur => : Utilisation d' une fonction fléchée (arrow function) pour définir la logique de filtrage.
const seventiesEntrepreneurs = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);
// Utilise la méthode filter pour créer un nouveau tableau contenant uniquement les entrepreneurs nés dans les années 70.
console.log("\nEntrepreneurs nés dans les années 70 :"); // Affiche un message dans la console pour introduire la liste des entrepreneurs nés dans les années 70.
seventiesEntrepreneurs.forEach(entrepreneur => {   // Parcourt le tableau des entrepreneurs nés dans les années 70 et affiche chaque prénom et nom dans la console.
    console.log(`${entrepreneur.first} ${entrepreneur.last}`);
});


// Array contenant le prénom et le nom des entrepreneurs
// Utilisation de map pour créer un tableau avec les noms complets.
const fullNames = entrepreneurs.map(entrepreneur => `${entrepreneur.first} ${entrepreneur.last}`);
console.table("\nListe des prénoms et noms des entrepreneurs :");
console.table(fullNames);

// Âge de chaque entrepreneur aujourd'hui
console.log("\nÂge de chaque entrepreneur aujourd'hui :");
//Calcul de l'âge : Utilisation de  new Date().getFullYear() pour obtenir l'année actuelle et calculer l'âge.
const currentYear = new Date().getFullYear();
entrepreneurs.forEach(entrepreneur => {
    let age = currentYear - entrepreneur.year;
    console.table(`${entrepreneur.first} ${entrepreneur.last} aurait ${age} ans aujourd'hui.`);
});

// Trier les entrepreneurs par ordre alphabétique du nom de famille
//Utilisation de  sort avec localeCompare pour trier par nom de famille.
const sortedEntrepreneurs = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
console.table("\nEntrepreneurs triés par ordre alphabétique du nom de famille :");
console.table(sortedEntrepreneurs);

