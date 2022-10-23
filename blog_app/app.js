
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



const sidebar=document.querySelector('aside')
const openSideBtn=document.querySelector('#show_sidebar-btn')
const closeSideBtn=document.querySelector('#hide_sidebar-btn')

const showSidebar= () =>{
    sidebar.style.left='0'  ;
    openSideBtn.style.display="none";
    closeSideBtn.style.display="inline-block"
} 

const hideSidebar= () =>{
    sidebar.style.left='-100%';
    openSideBtn.style.display="inline-block";
    closeSideBtn.style.display="none"
} 

openSideBtn.addEventListener('click',showSidebar)
closeSideBtn.addEventListener('click',hideSidebar)