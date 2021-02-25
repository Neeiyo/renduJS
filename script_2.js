let number = 0;
number = prompt("Choisi un nombre pour calculer sa factorielle");
let n2 = number - 1;
while (n2 > 1) {
    number = number * n2
    n2--;
}
console.log(`Le resultat est: ${number}`);