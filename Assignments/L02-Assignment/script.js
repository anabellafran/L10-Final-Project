
var sentence = "London is a big city in the United Kingdom";

function arrayFilter(sentence) {
    var splitSentence = sentence.split(" ");
    let newSentence = [];
    for (var i = 0; i < splitSentence.length; i++) {
        if (splitSentence[i].length > 3){
            newSentence.push(splitSentence[i]);
        }
    }
    return newSentence.join(" ");
}
console.log(arrayFilter(sentence));

arrayFilter("London is a big city in the United Kingdom");
//shoud return "London city United Kingdom"