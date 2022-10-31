
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    const icon = faq.querySelector('.faq_icon i')

    if (icon.className === 'uil uil-plus') {
      icon.className = 'uil uil-minus'
    }
    else {
      icon.className = 'uil uil-plus'
    }
  })
})

window.addEventListener('scroll', () => {

  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);

});

const menu = document.querySelector('.nav_menu')
const openBtn = document.querySelector('#open_btn')
const closeBtn = document.querySelector('#close_btn')


openBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";

})

const closeNav = () => {
  menu.style.display = "none";
  openBtn.style.display = "inline-block"
  closeBtn.style.display = "none"

}
closeBtn.addEventListener('click', closeNav)


if (window.innerWidth < 1024) {
  document.querySelectorAll('.nav_menu li a').forEach(navitem => {
    navitem.addEventListener('click', closeNav)
  })
}


const navItems = document.querySelectorAll('nav ul li');

navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    removeActiveClass();
    link.classList.add('active')
  })
})


const removeActiveClass = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active')
  })
}

const searchBtn = document.getElementById('search-item');

searchBtn.addEventListener('keyup', () => {
  const searchBox = document.getElementById('search-item').value.toUpperCase();
  const proucts = document.getElementById('product-list');
  const product = document.querySelectorAll('.course');
  const pname = proucts.getElementsByTagName('h4');

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName('h4')[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = ''

      }
      else {
        product[i].style.display = 'none';

      }
    }
  }


})

const fetchProducts = () => {
  let productContainer = document.querySelector('.courses_container');
  productContainer.innerHTML = '';

  products.forEach(product => {
    const newProduct = document.createElement('article');
    newProduct.className = 'course';
    newProduct.innerHTML = `
    <div class="course_image">
    <img src="${product.image}" class="pic" />
    </div>
    <div class="course_info">
    <div class="review">
      <a href=""><i class="uis uis-star"></i></a>
      <a href=""><i class="uis uis-star"></i></a>
      <a href=""><i class="uis uis-star"></i></a>
      <a href=""><i class="uis uis-star"></i></a>
      <a href=""><i class="uis uis-star-half-alt"></i></a>

    </div>
    <h4>${product.name}</h4>

    <h3>GH₵‎${product.price}</h3>
    <a href="" class="btn btn-primary">Add to Cart</a>
    </div>`

    productContainer.append(newProduct)

  })

}
window.addEventListener('load', fetchProducts)
