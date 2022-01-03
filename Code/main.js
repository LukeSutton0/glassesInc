//Main Js File For Glasses Inc , by Luke Sutton. Last updated 22/12/2021

//Mobile Menu X animation
const mobileMenuBtn = document.querySelector('.menu-btn');
mobileMenuBtn.addEventListener('click', mobileMenuOpen)
let menuOpen = false;
const menuChoices = document.querySelector('.menuChoices');


//Nav bar dropdown for menu
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


//index carousel buttons and movement
let indexCarouselCurrentSelected = 0;
let indexCarouselLength = document.querySelectorAll('.index-carousel-flex-container .index-carousel-img-container').length;
let indexCarouselImgArray = document.getElementsByClassName("index-carousel-img-container");
let indexCarouselButtonArray = document.getElementsByClassName("index-carousel-button");

const indexCarouselArrowLeft = document.querySelector('#index-carousel-arrow-left');
indexCarouselArrowLeft.addEventListener('click', function(){ indexCarouselArrow('left')}) // pass reference to function rather than calling it  https://stackoverflow.com/questions/35667267/addeventlistenerclick-firing-immediately
const indexCarouselArrowRight = document.querySelector('#index-carousel-arrow-right');
indexCarouselArrowRight.addEventListener('click',function(){ indexCarouselArrow('right')})


function indexCarouselArrow(direction){
  if(direction == 'left' && indexCarouselCurrentSelected != 0){
    indexCarouselImgArray[(indexCarouselCurrentSelected-1)].classList.add("index-carousel-current-img-selected")
    indexCarouselImgArray[indexCarouselCurrentSelected].classList.remove("index-carousel-current-img-selected")
    indexCarouselButtonArray[(indexCarouselCurrentSelected-1)].classList.add("index-carousel-current-selected")
    indexCarouselButtonArray[indexCarouselCurrentSelected].classList.remove("index-carousel-current-selected")
    indexCarouselCurrentSelected -=1    
  }
  else if(direction == 'right' && indexCarouselCurrentSelected != (indexCarouselLength-1) ){
    indexCarouselImgArray[(indexCarouselCurrentSelected+1)].classList.add("index-carousel-current-img-selected")
    indexCarouselImgArray[indexCarouselCurrentSelected].classList.remove("index-carousel-current-img-selected")
    indexCarouselButtonArray[(indexCarouselCurrentSelected+1)].classList.add("index-carousel-current-selected")
    indexCarouselButtonArray[indexCarouselCurrentSelected].classList.remove("index-carousel-current-selected")
    indexCarouselCurrentSelected +=1      
  }
};

const indexCarouselButton0 = document.querySelector('#index-carousel-button-0')
indexCarouselButton0.addEventListener('click',function(){indexCarouselNav(0)})
const indexCarouselButton1 = document.querySelector('#index-carousel-button-1')
indexCarouselButton1.addEventListener('click',function(){indexCarouselNav(1)})
const indexCarouselButton2 = document.querySelector('#index-carousel-button-2')
indexCarouselButton2.addEventListener('click',function(){indexCarouselNav(2)})
const indexCarouselButton3 = document.querySelector('#index-carousel-button-3')
indexCarouselButton3.addEventListener('click',function(){indexCarouselNav(3)})
const indexCarouselButton4 = document.querySelector('#index-carousel-button-4')
indexCarouselButton4.addEventListener('click',function(){indexCarouselNav(4)})


function indexCarouselNav(chosen){
  indexCarouselImgArray[indexCarouselCurrentSelected].classList.remove("index-carousel-current-img-selected")
  indexCarouselImgArray[chosen].classList.add("index-carousel-current-img-selected")
  indexCarouselButtonArray[chosen].classList.add("index-carousel-current-selected")
  indexCarouselButtonArray[indexCarouselCurrentSelected].classList.remove("index-carousel-current-selected")
  indexCarouselCurrentSelected = chosen    
}

