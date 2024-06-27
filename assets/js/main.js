/*=============== SHOW MENU ===============*/
const navMenu =document.getElementById('nav-menu'),
navToggle =document.getElementById('nav-toggle'),
navClose =document.getElementById('nav-close');
/*Show Menu */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}
/* Menu hidden */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu'); 
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link , we remove the show-menu
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n=> n.addEventListener('click',linkAction));


/*=============== SHADOW HEADER ===============*/
const shadowHeader = ()=>{
    const header = document.getElementById('header');
    //Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >=50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);

/*=============== SWIPER FAVORITES ===============*/ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/


