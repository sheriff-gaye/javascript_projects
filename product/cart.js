const removeBtn = document.querySelector('.card-btn');
const cartCount = document.querySelector('.cart_count');
const cardBtn = document.querySelector('.courses_container');
const cartList=document.getElementsByTagName('tbody');
let cartItemID = 1;

cardBtn.addEventListener('click',purchaseProduct);

function purchaseProduct(e){
    if(e.target.classList.contains('btn')){
        let product = e.target.parentElement.closest('.course');
        getProductInfo(product)
    }
}

function getProductInfo(product){
    let productInfo = {
        id: cartItemID,
        image: product.getElementsByClassName('pic')[0].src,
        name: product.getElementsByTagName('h4')[0].innerText,
        price:product.getElementsByTagName('h3')[0].innerText
    }
    console.log(productInfo)
    cartItemID++;
    addToCartList(productInfo);
    // saveProductInStorage(productInfo);
}

function addToCartList(product){
    const cartItem = document.createElement('tr');
    cartItem.setAttribute('data-id', `${product.id}`);
    cartItem.innerHTML = `
    <td><img src="${product.image}" alt=""></td>
    <td>${product.name}</td>
    <td>$30</td>
    <td><input type="number" value="1" min="1"></td>
    <td>${product.price}</td>
    <td><a href=""  class="card-btn"><i class="uil uil-trash-alt"></i></a></td>`;
    cartList.append(cartItem);
}

