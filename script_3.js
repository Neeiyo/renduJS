var number = 0;
number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

var stageCount = 0;
var hashSign = "#";
var spaceSign = " ";
var hashCount = 1;
var spaceCount = number;
var i = 0;

function pyr(n) {
    while (n > 0) {
        console.log(" ".repeat(n - 1) + "#".repeat(i));
        n--;
        i++;
    }
}
pyr(number);