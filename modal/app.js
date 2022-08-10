const open_btn = document.querySelector('.open_modal');
const close_btn = document.querySelector('.btn')

const popup = document.querySelector('.popup');

open_btn.addEventListener('click', () => {

    popup.classList.remove('modal');
})

close_btn.addEventListener('click', () => {

    popup.classList.add('modal');
})