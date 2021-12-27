//Main Js File For Glasses Inc , by Luke Sutton. Last updated 22/12/2021

//Mobile Menu X animation
const mobileMenuBtn = document.querySelector('.menu-btn');
mobileMenuBtn.addEventListener('click', mobileMenuOpen)
let menuOpen = false;
const menuChoices = document.querySelector('.menuChoices');

function mobileMenuOpen(){
  if(!menuOpen) {
    mobileMenuBtn.classList.toggle('anim1');
    setTimeout(() => {mobileMenuBtn.classList.toggle('anim2'); },500 );
    menuChoices.classList.toggle('mobileDropdown')
    menuOpen = true;
  } else {
    mobileMenuBtn.classList.toggle('anim2');
    setTimeout(() => {mobileMenuBtn.classList.toggle('anim1'); },500 );
    menuChoices.classList.toggle('mobileDropdown')
    menuOpen = false;
  }
};

