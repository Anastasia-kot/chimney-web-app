let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header_menu');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

 