//code to capilatlize first letter of a word

function cap(word) {
    var first = word.charAt(0)
    const cap = first.toUpperCase()
    var rem = word.slice(1)
    var res = cap + rem
    document.getElementById('demo').innerHTML = res
}

