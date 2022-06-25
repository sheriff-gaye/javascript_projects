const closeface = document.querySelector('.close');
const openface = document.querySelector('.open');

closeface.addEventListener('click', () => {
    if (openface.classList.contains('open')) {
        openface.classList.add('active');
        closeface.classList.remove('active');
    }
});

openface.addEventListener('click', () => {
    if (closeface.classList.contains('close')) {
        closeface.classList.add('active');
        openface.classList.remove('active');
    }
});
