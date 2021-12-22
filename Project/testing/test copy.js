const menuBtn = document.querySelector('.menu-btn');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    console.log('a')

    let topline = document.getElementById('menu-btn__topline')
    topline.style.animation = "menu-btn__topline-animation1";
    topline.style.animationPlayState = "running";

    let botline = document.getElementById('menu-btn__botline')
    botline.style.animation = "menu-btn__botline-animation1";
    botline.style.animationPlayState = "running";

    
    console.log(topline.style.animation)
    menuOpen = true;
  } 
  else {
    document.getElementById('menu-btn__topline').style.animation = 'menu-btn__topline-animation2';
    menuOpen = false;
  }
});

