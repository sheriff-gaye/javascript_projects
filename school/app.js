
// change nav bar style on scroll

window.addEventListener('scroll',()=>{

    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
})

//hide and show faqs answer

const faqs=document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        //changing the plus icon

        const icon =faq.querySelector('.faq_icon i')

        if (icon.className==='uil uil-plus'){
            icon.className='uil uil-minus'
        }
        else{
            icon.className='uil uil-plus'
        }
    })
})




