// Tableau des livres
const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps, perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// 1. Est-ce que tous les livres ont été au moins empruntés une fois ?
const allRented = books.every(book => book.rented > 0); 
//const allRented : constante qui stocke le résultat de every. 
//Ce sera true si tous les livres ont été empruntés au moins une fois, sinon false.
//books.every(...) : La méthode every vérifie si tous les éléments du tableau books remplissent une condition.
// Elle retourne true si chaque élément satisfait la condition et false sinon.
//book => book.rented > 0 : Une fonction fléchée (arrow function) qui prend un livre (book) 
//et retourne true si le nombre d'emprunts (rented) est supérieur à 0.
console.log("Tous les livres ont-ils été empruntés au moins une fois ? " + allRented);

// 2. Quel est le livre le plus emprunté ?
const mostRentedBook = books.reduce((max, book) => (book.rented > max.rented ? book : max));
//const mostRentedBook : constante qui stocke le livre le plus emprunté.
//books.reduce(...) : La méthode reduce parcourt tous les éléments du tableau books 
//et applique une fonction pour "réduire" le tableau à une seule valeur (ici, le livre le plus emprunté).
//max : Accumulateur qui garde la trace du livre le plus emprunté jusqu'à présent.
//book : L'élément actuel du tableau en cours de traitement.
//(book.rented > max.rented ? book : max) : Compare le nombre d'emprunts de book et max.
// Si book a été emprunté plus de fois que max, book devient le nouveau max. Sinon, max reste inchangé.
console.log("Le livre le plus emprunté est : " + mostRentedBook.title);

// 3. Quel est le livre le moins emprunté ?
const leastRentedBook = books.reduce((min, book) => (book.rented < min.rented ? book : min));
//const leastRentedBook : constante qui stocke le livre le moins emprunté.
//books.reduce(...) : Même méthode reduce, mais cette fois pour trouver le livre le moins emprunté.
//min : Accumulateur qui garde la trace du livre le moins emprunté jusqu'à présent.
//book : L'élément actuel du tableau en cours de traitement.
//(book.rented < min.rented ? book : min) : Compare le nombre d'emprunts de book et min.
// Si book a été emprunté moins de fois que min, book devient le nouveau min. Sinon, min reste inchangé.
console.log("Le livre le moins emprunté est : " + leastRentedBook.title);

// 4. Trouve le livre avec l'ID: 873495
const bookById = books.find(book => book.id === 873495);
//const bookById : constante qui stocke le livre trouvé avec l'ID 873495.
//books.find(...) : La méthode find recherche le premier élément du tableau books qui satisfait la condition donnée.
//book => book.id === 873495 : Une fonction fléchée qui vérifie si l'ID du livre (book.id) est égal à 873495.
console.log("Le livre avec l'ID 873495 est : " + bookById.title);

// 5. Supprime le livre avec l'ID: 133712
const indexToRemove = books.findIndex(book => book.id === 133712);
//const indexToRemove : constante qui stocke l'index du livre à supprimer.
//books.findIndex(...) : La méthode findIndex recherche l'index du premier élément qui satisfait la condition donnée.
//book => book.id === 133712 : Une fonction fléchée qui vérifie si l'ID du livre est égal à 133712.
books.splice(indexToRemove, 1); //  Utilise splice pour supprimer 1 élément du tableau books à l'index indexToRemove.
console.log("Le livre avec l'ID 133712 a été supprimé.");

// 6. Trie les livres par titre dans l'ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)
const sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));
//const sortedBooks : constante qui stocke le tableau trié.
//books.sort(...) : La méthode sort trie les éléments du tableau books.
//a et b : Deux éléments du tableau à comparer.
//a.title.localeCompare(b.title) : Compare les titres des livres en utilisant localeCompare,
// qui retourne un nombre pour déterminer l'ordre de tri.
console.log("Livres triés par ordre alphabétique :");
console.table(sortedBooks);
