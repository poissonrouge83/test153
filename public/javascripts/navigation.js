

const dropdownt = document.querySelector(".dropdown-toggle");
const dropdownm = document.querySelector(".dropdown-menu");
const nav = document.querySelector("nav");
const test = document.getElementById("test")

const link = document.querySelectorAll('.nav-link');
const logo = document.querySelectorAll('.logo');


/////////////////dropdown-menu////////////////////
dropdownt.addEventListener('mouseenter', () => {
  if('mouseenter'){
    dropdownm.style.display = 'block';
  }
})

dropdownt && dropdownm .addEventListener('mouseleave', () => {
  if('mouseleave'){
    dropdownm.style.display = 'none';
  }
})

////////////////////hamburger menu/////////////////////
hamburger.onclick = () => {
  hamburger.classList.toggle("open");
  testt.classList.toggle("slide");
  document.body.classList.toggle("noScroll");
};

///////////////////////////animation///////////////////////
window.addEventListener('load', initAnim)

function initAnim(){
    
    const TLFADE = gsap.timeline();

    TLFADE
    
    .to(link, {autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.1}, '-=0.2')
    .to(logo, {autoAlpha: 1, y: 0})

}

