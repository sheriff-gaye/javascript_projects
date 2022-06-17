const circle = document.querySelector('#circle')

circle.addEventListener('mouse', () => {
    if (!circle.classList.contains('hover')) {
        circle.classList.add("hover");
    }
});

circle.addEventListener('mouseeave', () => {
    if (circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
});