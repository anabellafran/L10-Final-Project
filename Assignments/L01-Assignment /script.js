alert("Hello, Its working! YAY!")

function stringCounter(sentence) {

    var sentenceSplit = sentence.split(" ");

    console.log("No. of words: " + sentenceSplit.length);

    var numCharacter = sentence.length;
    console.log("No. of Characters: " + numCharacter);
}
//Test Case 1
let sentence1 = "The largest living thing on earth is a giant sequoia named General Sherman";
stringCounter(sentence1);
//Test Case 2
let sentence2 = "A sunset on Mars is blue";
stringCounter(sentence2);