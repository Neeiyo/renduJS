const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 30 },
    { title: 'Guerre et Paix', id: 748147, rented: 10 }
];

var i = 0;
var zero = 0;
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?\n")
while (i < 12) {
    if (books[i].rented == 0) {
        zero = 1;
    }
    i++;
}
if (zero == 1) {
    console.log("Non");
} else {
    console.log("Oui")
}
i = 0;


console.log("Voici le livre le plus emprunté:  \n")
var tmp = 0;
var nametmp = "";
while (i < 12) {
    if (tmp < books[i].rented) {
        tmp = books[i].rented
        nametmp = books[i].title
    }
    i++
}
console.log(nametmp);
i = 0;

console.log("Voici le livre le moin emprunté: \n")
var tmp = books[1].rented;
var nametmp = "";
while (i < 12) {
    if (tmp > books[i].rented) {
        tmp = books[i].rented
        nametmp = books[i].title
    }
    i++
}
console.log(nametmp);
i = 0;

console.log("Voici le livre avec l'id: 873495  \n")
var tmp = "";
while (i < 12) {
    if (books[i].id == 873495) {
        tmp = books[i].title;
    }
    i++;
}
console.log(tmp);
i = 0;

console.log("Voici les livres sans celui avec l'id: 133712 \n")
while (i < 11) {
    if (books[i].id == 133712) {
        books.splice(i, 1);
        console.log(books);
    }
    i++;
}
i = 0;


console.log("Voici les livres trié par ordre alphabetique sans Gatsby le magnifique: \n")
console.log(books.sort(function(a, b) {
    if (a.title < b.title) { return -1; }
    if (a.title > b.title) { return 1; }
    return 0;
}))