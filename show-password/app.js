
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')
const button = document.getElementById('submit')


cpassword.addEventListener('click', function(){
    const type=password.getAttribute('type')==="password"? "text":"password";

    password.setAttribute('type',type)
})