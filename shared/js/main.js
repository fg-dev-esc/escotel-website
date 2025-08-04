(function() {
  // esperar a que el dom esté completamente cargado
  document.addEventListener('DOMContentLoaded', function() {
    // seleccionar todos los elementos del slider
    const slides = document.querySelectorAll('.slide');
    // botones de navegación
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const textoSuperior = document.getElementById('texto-superior');
    const textoPrincipal = document.getElementById('texto-principal');
    const textoSecundario = document.getElementById('texto-secundario');
    let currentSlide = 0;
    const slideInterval = 3000;

    // función para animar elementos de texto
    function animateText(element) {
      element.classList.remove('text-fade');
      void element.offsetWidth;
      element.classList.add('text-fade');
    }

    function changeSlide(n) {
      slides[currentSlide].classList.remove('active');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      if (textoSuperior && textoPrincipal && textoSecundario) {
        const current = slides[currentSlide];
        textoSuperior.textContent = current.getAttribute('data-texto-superior');
        textoPrincipal.textContent = current.getAttribute('data-texto-principal');
        textoSecundario.textContent = current.getAttribute('data-texto-secundario');
        animateText(textoSuperior);
        animateText(textoPrincipal);
        animateText(textoSecundario);
      }
    }

    let autoSlide = setInterval(() => changeSlide(currentSlide + 1), slideInterval);

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener('click', () => {
        clearInterval(autoSlide);
        changeSlide(currentSlide + 1);
        autoSlide = setInterval(() => changeSlide(currentSlide + 1), slideInterval);
      });
      prevBtn.addEventListener('click', () => {
        clearInterval(autoSlide);
        changeSlide(currentSlide - 1);
        autoSlide = setInterval(() => changeSlide(currentSlide + 1), slideInterval);
      });
    }

    const sliderContainer = document.querySelector('.slider-backgrounds');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
      sliderContainer.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => changeSlide(currentSlide + 1), slideInterval);
      });
    }

    if (window.CountUp) {
      if (document.getElementById('state1')) {
        const countUp = new CountUp('state1', document.getElementById('state1').getAttribute('countTo'));
        if (!countUp.error) countUp.start();
      }
      if (document.getElementById('state2')) {
        const countUp1 = new CountUp('state2', document.getElementById('state2').getAttribute('countTo'));
        if (!countUp1.error) countUp1.start();
      }
      if (document.getElementById('state3')) {
        const countUp2 = new CountUp('state3', document.getElementById('state3').getAttribute('countTo'));
        if (!countUp2.error) countUp2.start();
      }
    }

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // actualizar año en el footer
    var copyright = document.getElementById('copyright-year');
    if (copyright) {
      copyright.textContent = new Date().getFullYear();
    }
  });
})();

// Tab functionality for industries section
    document.querySelectorAll('.industry-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        document.querySelectorAll('.industry-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.industry-content').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding content
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(`${tabId}-content`).classList.add('active');
      });
    });

    document.addEventListener('DOMContentLoaded', function() {
      // Contadores mejorados con CountUp
      if (window.CountUp) {
          const counters = [
              { id: 'state1', target: 450000, suffix: '+' },
              { id: 'state2', target: 2000000, suffix: '+' },
              { id: 'state3', target: 5000, suffix: '' },
              { id: 'state4', target: 5, suffix: '' }
          ];

          counters.forEach(counter => {
              const element = document.getElementById(counter.id);
              if (element) {
                  const countUp = new CountUp(counter.id, counter.target, {
                      duration: 2.5,
                      useEasing: true,
                      useGrouping: true,
                      separator: ',',
                      suffix: counter.suffix
                  });
                  
                  const observer = new IntersectionObserver((entries) => {
                      entries.forEach(entry => {
                          if (entry.isIntersecting && !countUp.error) {
                              countUp.start();
                              observer.unobserve(entry.target);
                          }
                      });
                  });
                  
                  observer.observe(element);
              }
          });
      }

      // Efectos de hover mejorados para servicios
      const serviceCards = document.querySelectorAll('.card-service');
      serviceCards.forEach(card => {
          card.addEventListener('mouseenter', function() {
              this.style.transform = 'translateY(-8px) scale(1.02)';
          });
          
          card.addEventListener('mouseleave', function() {
              this.style.transform = 'translateY(0) scale(1)';
          });
      });

      // Smooth scroll para enlaces internos
      const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
      smoothScrollLinks.forEach(link => {
          link.addEventListener('click', function(e) {
              const targetId = this.getAttribute('href');
              const targetElement = document.querySelector(targetId);
              if (targetElement) {
                  e.preventDefault();
                  targetElement.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'start',
                      inline: 'nearest'
                  });
              }
          });
      });

      // Parallax suave para el hero
      const hero = document.querySelector('.slider-container');
      if (hero) {
          window.addEventListener('scroll', () => {
              const scrolled = window.pageYOffset;
              const parallax = scrolled * 0.5;
              hero.style.transform = `translateY(${parallax}px)`;
          });
      }

      // Mejorar la experiencia del slider
      const slides = document.querySelectorAll('.slide');
      const textElements = {
          superior: document.getElementById('texto-superior'),
          principal: document.getElementById('texto-principal'),
          secundario: document.getElementById('texto-secundario')
      };

      // Función mejorada para cambio de texto con efectos
      function updateSliderText(slide) {
          if (textElements.superior && textElements.principal && textElements.secundario) {
              // Fade out
              Object.values(textElements).forEach(el => {
                  el.style.opacity = '0';
                  el.style.transform = 'translateY(20px)';
              });

              setTimeout(() => {
                  textElements.superior.textContent = slide.getAttribute('data-texto-superior') || '';
                  textElements.principal.textContent = slide.getAttribute('data-texto-principal') || '';
                  textElements.secundario.textContent = slide.getAttribute('data-texto-secundario') || '';

                  // Fade in
                  Object.values(textElements).forEach((el, index) => {
                      setTimeout(() => {
                          el.style.opacity = '1';
                          el.style.transform = 'translateY(0)';
                      }, index * 100);
                  });
                }, 300);
            }
        }
  
      });