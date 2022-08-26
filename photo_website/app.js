

//nav scroll color change

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scrolled'),window.screenY>0;
})

//end of nav scroll