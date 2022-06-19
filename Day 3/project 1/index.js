let count = 0;
var counter = document.getElementById('counter');

function plus() {
    count += 1
    counter.innerHTML = count
}

function minus() {
    if (count == 0) {
        count = 0;
    }
    else {
        count -= 1
    }
    counter.innerHTML = count
}