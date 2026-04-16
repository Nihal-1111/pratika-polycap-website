/* =========================
MOBILE MENU FIX
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// click toggle
if(menuToggle){
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// auto close after click
const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
/* =========================
CAROUSEL (PRO VERSION)
========================= */

const track = document.querySelector(".carousel-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const carousel = document.querySelector(".carousel");

if(track){

let index = 0;
let cards = document.querySelectorAll(".machine-card");

// 🔥 dynamic width (responsive)
function getCardWidth(){
  return cards[0].offsetWidth + 25; // gap included
}

function moveSlide(){
  track.style.transform = `translateX(-${index * getCardWidth()}px)`;
}

// NEXT
function nextSlide(){
  if(index < cards.length - 1){
    index++;
  } else {
    index = 0; // loop
  }
  moveSlide();
}

// PREV
function prevSlide(){
  if(index > 0){
    index--;
  } else {
    index = cards.length - 1;
  }
  moveSlide();
}

// BUTTONS
nextBtn && (nextBtn.onclick = nextSlide);
prevBtn && (prevBtn.onclick = prevSlide);

// 🔥 AUTO PLAY
let autoSlide = setInterval(nextSlide, 2500);

// ⏸️ HOVER PAUSE
carousel.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

carousel.addEventListener("mouseleave", () => {
  autoSlide = setInterval(nextSlide, 2500);
});

// 📱 RESIZE FIX
window.addEventListener("resize", moveSlide);

}