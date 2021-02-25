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

var i = 0;
console.log("Voici les entrepreneurs né dans les années 70: \n")
while (i < 18) {
    if (entrepreneurs[i].year > 1969 && entrepreneurs[i].year < 1980) {
        console.log(entrepreneurs[i].year);
    }
    i++;
}
i = 0;

console.log("Voici les Noms et Prenoms des entrepreneurs: \n")
var arr = []
while (i < 18) {
    arr.push(`Nom: ${entrepreneurs[i].last}, Prenom: ${entrepreneurs[i].first}`)
    i++;
}
console.log(arr);
i = 0;

console.log("Voici l'age qu'aurait chaque entrepreneurs aujourdhui:' \n")
while (i < 18) {

    console.log(`${entrepreneurs[i].first} ${entrepreneurs[i].last} aurait ${2021 - entrepreneurs[i].year} ans aujourdhui`);
    i++;
}
i = 0;

console.log("Voici les entrepreneurs trié par ordre alphabetique: \n")
console.log(entrepreneurs.sort(function(a, b) {
    if (a.last < b.last) { return -1; }
    if (a.last > b.last) { return 1; }
    return 0;
}))