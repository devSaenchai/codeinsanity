// Preloader
window.addEventListener("load", function(){
  document.getElementById("preloader").style.display = "none";
});

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", ()=>{
  navLinks.classList.toggle("show");
});

// Scroll to section
function scrollToSection(id){
  document.querySelector(id).scrollIntoView({behavior:'smooth'});
}

// Scroll reveal animation
const sections = document.querySelectorAll('section, .hero h1, .hero p, .scroll-btn, .card');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section=>{
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom){
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
