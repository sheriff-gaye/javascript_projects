const circle = document.querySelector('#circle')

circle.addEventListener('mouse', () => {
    if (!circle.classList.contains('hover')) {
        circle.classList.add("hover");
    }
});

circle.addEventListener('mouseleave', () => {
    if (circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
});