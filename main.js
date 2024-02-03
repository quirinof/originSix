/* abre e fecha o menu quando clicar no icone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu */
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {  
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

/* change header on page when scroll */
function changeHeaderWhenScroll() {
  const header = document.querySelector("header")
  const navHeight = header.offsetHeight
  
  if(window.scrollY >= navHeight) {
    // scrol maior que altura do header
    header.classList.add('scroll')
  } else {
    // menor que a alture do header
    header.classList.remove('scroll')
  }
}


/* testiomonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true
});


/* ScrollReveal: Mostrar elementos quando der scroll na page */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  footer .brand, footer .social
  `,
  { interval: 100 }
)


/* Button back-to-top */ 
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* when scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})