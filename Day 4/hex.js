const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'E', 'F']
document.getElementById('#btn')
colors = document.querySelector('.colors')

function color() {
    var hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNum()];

    }
    console.log(hexColor)
    colors.textContent = hexColor
    document.body.style.backgroundColor = hexColor
}
function getRandomNum() {
    return Math.floor(Math.random() * hex.length)
}
