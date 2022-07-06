const navbar = document.querySelector('nav');

window.addEventListener('scroll', e => {
    const scrollValue = window.scrollY;

    if (scrollValue >= 50) {
        navbar.classList.add('background');
    } else {
        navbar.classList.remove('background');
    }
}) 


const ul = document.querySelector('ul');
const show = document.querySelector('.fa-bars');
const closeItem = document.querySelector('.fa-x');


show.addEventListener('click', e => {
    const navShow = ul.getAttribute('data-show');
    if (navShow == 'false' ) {
        ul.setAttribute('data-show', true);
    } else {
        ul.setAttribute('data-show', false);
    }
})
closeItem.addEventListener('click', e => {
    const navShow = ul.getAttribute('data-show');
    if (navShow == 'true' ) {
        ul.setAttribute('data-show', false);
    } else {
        ul.setAttribute('data-show', true);
    }
})



