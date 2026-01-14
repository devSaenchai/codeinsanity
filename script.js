// HERO fade-in on load
window.onload = () => {
  const hero = document.getElementById('hero-content');
  hero.style.opacity = '0';
  hero.style.transform = 'translateY(20px)';
  setTimeout(() => {
    hero.style.transition = 'all 1s ease-out';
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
  }, 300);
};

// SCROLL reveal function
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// VIEW ALL / SHOW LESS TOGGLE - What We Do
document.getElementById('toggle-services').addEventListener('click', (event)=>{
  const extra = document.getElementById('extra-services');
  extra.classList.toggle('toggle-visible');
  extra.classList.toggle('toggle-hidden');
  event.target.innerText = extra.classList.contains('toggle-visible') ? 'Show Less' : 'View All';
});

// VIEW MORE / SHOW LESS TOGGLE - What We Did
document.getElementById('toggle-projects').addEventListener('click', (event)=>{
  const extra = document.getElementById('extra-projects');
  extra.classList.toggle('toggle-visible');
  extra.classList.toggle('toggle-hidden');
  event.target.innerText = extra.classList.contains('toggle-visible') ? 'Show Less' : 'View More';
});

// PROJECT PREVIEW hover effect
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const preview = item.querySelector('.project-preview');
    if(preview) preview.style.display = 'block';
  });
  item.addEventListener('mouseleave', () => {
    const preview = item.querySelector('.project-preview');
    if(preview) preview.style.display = 'none';
  });
});
