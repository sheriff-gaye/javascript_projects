var button = document.getElementById("#btn")
const color = document.querySelector('.colors')

const colors = [
    'red', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    'brown', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    'yellow', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    'black', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    'indigo', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    'violet', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    'darkcyan', '#33991A', '#CC9999', '#B3B31A', 'azure',
    'orangered', 'royalblue', 'firebrick', 'forestgreen', 'darkred',
    'cyan', 'cream', 'white', 'lightgreen', 'blue',
    'purple', 'gray', 'pink', 'green', 'orange']


function chgcolor() {
    const colorNum = getRandomNum();
    document.body.style.backgroundColor = colors[colorNum];
    color.textContent = colors[colorNum]

}

function getRandomNum() {
    return Math.floor(Math.random() * colors.length);
}