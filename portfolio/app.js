

const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav_menu');


menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none'
})



const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block'

}

closeBtn.addEventListener('click', closeNav)


if (window.innerWidth < 1024) {
    document.querySelectorAll('.nav_menu li a').forEach(navitem => {
        navitem.addEventListener('click', closeNav)
    })
}


window.addEventListener('scroll', () => {

    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);

});



const fetchTestimonial = () => {
    let testimonialContainer = document.querySelector('.testimonial_container');
    testimonialContainer.innerHTML = '';

    testimonials.forEach(testimonial => {
        const newtestimonial = document.createElement('article');
        newtestimonial.className = 'testimonial';
        newtestimonial.innerHTML = `
        <p>${testimonial.quote}</p>
                <div class="testimonial_client">
                    <span class="avatar">
                        <img src="${testimonial.image}" alt="">
                    </span>
                    <div class="testimonial_work">
                        <p><b>${testimonial.name}</b></p>
                        <small>${testimonial.job}</small>
                    </div>
                </div>
        `
    testimonialContainer.append(newtestimonial);
    })
}



window.addEventListener('load', fetchTestimonial)