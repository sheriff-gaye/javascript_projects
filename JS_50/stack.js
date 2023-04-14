

var letter = []
var word = "racecar";
var rword = "";


for (var i = 0; i < word.length; i++) {
    letter.push(word[i]);
}

for (var i = 0; i < word.length; i++) {
    rword += letter.pop();
}

if (rword == word) {
    console.log(word + " is a palindorme");
}
else{
    console.log(word  + " is not a plaindorme")
}
