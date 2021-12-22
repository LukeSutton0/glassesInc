const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.toggle('anim1');
    setTimeout(() => {menuBtn.classList.toggle('anim2'); },500 );
    menuOpen = true;
    
  } else {
    menuBtn.classList.toggle('anim2');
    setTimeout(() => {menuBtn.classList.toggle('anim1'); },500 );
    menuOpen = false;
  }
});