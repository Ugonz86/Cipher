// var sentence = prompt("Enter a sentence:");
// alert (sentence);
//
// var newSentence = alert(sentence.charAt(0).toUpperCase() + sentence.slice(1,sentence.length-1) + sentence.charAt(sentence.length-1).toUpperCase() + " !");
//
//
// var revSentence = alert(sentence.charAt(sentence.length-1).toUpperCase() + sentence.slice(1,sentence.length-1) + sentence.charAt(0).toUpperCase() + " !");



// var sentence = prompt("Enter a sentence:");
// alert (sentence);
//
// var result = alert(sentence.charAt(0).toUpperCase() + sentence.slice (-1).toUpperCase());
//
// var result = alert(sentence.slice (-1).toUpperCase() + sentence.charAt(0).toUpperCase());
//
// var result2 = alert(sentence.charAt(0).toUpperCase() + sentence.slice(1,sentence.length-1) + sentence.charAt(sentence.length-1) + sentence.charAt(0).toUpperCase() + sentence.slice (-1).toUpperCase());
//
// var result2 = alert(sentence.charAt(0).toUpperCase() + sentence.slice(1,sentence.length-1) + sentence.charAt(sentence.length-1) + sentence.slice (-1).toUpperCase() + sentence.charAt(0).toUpperCase());

var sentence = prompt("Enter a sentence:");
alert (sentence);

var wordCounter = ("Your sentence has " + sentence.length + " characters!");
alert (wordCounter);

// var sentence = (prompt("Enter a sentence:"));
var result = letterCounter(sentence) / 2;
alert ("Your sentence letter count divided by 2 equals " + result + "!");
function letterCounter(userInput) {

    var letters = 0;
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var letras = alphabet.split("");
    for (var i=0; i<userInput.length;i++) {
        if (letras.indexOf(userInput[i]) > -1) {
            letters = letters + 1;
        }
    }
    alert ("Your sentence has " + letters + " letters!");
    return letters;
}
