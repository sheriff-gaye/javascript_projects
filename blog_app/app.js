
const navItems=document.querySelector('.nav_items')
const openNavBtn=document.querySelector('#open-nav_btn')
const closeNavBtn=document.querySelector('#close-nav_btn')



const openNav=()=>{
    navItems.style.display="flex";
    openNavBtn.style.display="none";
    closeNavBtn.style.display="inline-block";
}

const closeNav=()=>{
    navItems.style.display="none";
    openNavBtn.style.display="inline-block";
    closeNavBtn.style.display="none";
}




openNavBtn.addEventListener('click',openNav)
closeNavBtn.addEventListener('click',closeNav)


