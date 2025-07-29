// Módulo de inicialización para la vista HOME
const HomeModule = {
  // configuración del módulo
  config: {
    sliderInterval: 5000,
    counterAnimationDuration: 2000,
    sliderAutoplay: true
  },

  // estado del slider
  sliderState: {
    currentSlide: 0,
    slides: [],
    intervalId: null,
    isPlaying: true
  },

  // inicializar módulo home
  init() {
    console.log('🏠 Inicializando módulo HOME');
    
    // inicializar componentes
    this.initHeroSlider();
    this.initStatisticsCounters();
    this.initServiceCards();
    
    console.log('✅ Módulo HOME inicializado');
  },

  // inicializar slider del hero
  initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const sliderContainer = document.querySelector('.slider-backgrounds');
    
    if (!slides.length|| !sliderContainer) {
      console.warn('⚠️ Elementos del slider no encontrados');
      return;
    }

    this.sliderState.slides = Array.from(slides);
    
    // crear controles del slider
    this.createSliderControls();
    
    // configurar textos dinámicos
    this.setupDynamicTexts();
    
    // iniciar autoplay si está habilitado
    if (this.config.sliderAutoplay) {
      this.startSliderAutoplay();
    }
    
    console.log('🖼️ Hero slider inicializado con', slides.length, 'slides');
  },

  // crear controles del slider
  createSliderControls() {
    const controlsContainer = document.querySelector('.slider-controls');
    if (!controlsContainer) return;

    const controlsHTML = this.sliderState.slides.map((_, index) => 
      `<button class="slider-dot ${index === 0 ? 'active' : ''}" 
               data-slide="${index}" 
               aria-label="Ir a slide ${index + 1}"></button>`
    ).join('');

    controlsContainer.innerHTML = `
      <div class="slider-dots">
        ${controlsHTML}
      </div>
      <div class="slider-nav">
        <button class="slider-prev" aria-label="Slide anterior">
          <i class="material-symbols-rounded">chevron_left</i>
        </button>
        <button class="slider-next" aria-label="Siguiente slide">
          <i class="material-symbols-rounded">chevron_right</i>
        </button>
      </div>
    `;

    // agregar event listeners
    this.setupSliderEvents();
  },

  // configurar eventos del slider
  setupSliderEvents() {
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');

    // dots navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.goToSlide(index);
      });
    });

    // navigation buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.previousSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.nextSlide();
      });
    }

    // keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.previousSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
    });

    // pause on hover
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', () => {
        this.pauseSlider();
      });

      sliderContainer.addEventListener('mouseleave', () => {
        if (this.config.sliderAutoplay) {
          this.resumeSlider();
        }
      });
    }
  },

  // ir a slide específico
  goToSlide(index) {
    const slides = this.sliderState.slides;
    const dots = document.querySelectorAll('.slider-dot');

    if (index < 0 || index >= slides.length) return;

    // actualizar slides
    slides[this.sliderState.currentSlide].classList.remove('active');
    slides[index].classList.add('active');

    // actualizar dots
    dots[this.sliderState.currentSlide]?.classList.remove('active');
    dots[index]?.classList.add('active');

    // actualizar estado
    this.sliderState.currentSlide = index;

    // actualizar textos
    this.updateSlideTexts(slides[index]);
  },

  // slide anterior
  previousSlide() {
    const prevIndex = this.sliderState.currentSlide === 0 
      ? this.sliderState.slides.length - 1 
      : this.sliderState.currentSlide - 1;
    
    this.goToSlide(prevIndex);
  },

  // siguiente slide
  nextSlide() {
    const nextIndex = (this.sliderState.currentSlide + 1) % this.sliderState.slides.length;
    this.goToSlide(nextIndex);
  },

  // iniciar autoplay
  startSliderAutoplay() {
    this.sliderState.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.config.sliderInterval);
    
    this.sliderState.isPlaying = true;
  },

  // pausar slider
  pauseSlider() {
    if (this.sliderState.intervalId) {
      clearInterval(this.sliderState.intervalId);
      this.sliderState.intervalId = null;
    }
    this.sliderState.isPlaying = false;
  },

  // reanudar slider
  resumeSlider() {
    if (!this.sliderState.isPlaying) {
      this.startSliderAutoplay();
    }
  },

  // configurar textos dinámicos
  setupDynamicTexts() {
    const initialSlide = this.sliderState.slides[0];
    if (initialSlide) {
      this.updateSlideTexts(initialSlide);
    }
  },

  // actualizar textos del slide
  updateSlideTexts(slide) {
    const textoSuperior = document.getElementById('texto-superior');
    const textoPrincipal = document.getElementById('texto-principal');
    const textoSecundario = document.getElementById('texto-secundario');

    if (textoSuperior) {
      textoSuperior.textContent = slide.dataset.textoSuperior || '';
    }
    
    if (textoPrincipal) {
      textoPrincipal.textContent = slide.dataset.textoPrincipal || '';
    }
    
    if (textoSecundario) {
      textoSecundario.textContent = slide.dataset.textoSecundario || '';
    }
  },

  // inicializar contadores de estadísticas
  initStatisticsCounters() {
    const counters = document.querySelectorAll('[countTo]');
    
    if (!counters.length) {
      console.warn('⚠️ No se encontraron contadores de estadísticas');
      return;
    }

    // configurar intersection observer para animar cuando sea visible
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('countTo'));
          
          if (target && !counter.classList.contains('counted')) {
            counter.classList.add('counted');
            this.animateCounter(counter, target);
          }
        }
      });
    }, observerOptions);

    counters.forEach(counter => {
      observer.observe(counter);
    });

    console.log('📊 Contadores de estadísticas inicializados:', counters.length);
  },

  // animar contador individual
  animateCounter(element, target) {
    const duration = this.config.counterAnimationDuration;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = this.formatNumber(target);
        clearInterval(timer);
      } else {
        element.textContent = this.formatNumber(Math.floor(current));
      }
    }, 16);
  },

  // formatear números para display
  formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toLocaleString('es-MX');
  },

  // inicializar tarjetas de servicios
  initServiceCards() {
    const serviceCards = document.querySelectorAll('.card-service');
    
    if (!serviceCards.length) {
      console.warn('⚠️ No se encontraron tarjetas de servicios');
      return;
    }

    // configurar animaciones de entrada
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 150);
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    serviceCards.forEach((card, index) => {
      // configurar estado inicial
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      
      observer.observe(card);
    });

    console.log('🎴 Tarjetas de servicios inicializadas:', serviceCards.length);
  },

  // manejar redimensionamiento
  handleResize() {
    // reajustar slider si es necesario
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
      // lógica de reajuste si es necesaria
    }
  },

  // limpiar recursos al salir
  cleanup() {
    if (this.sliderState.intervalId) {
      clearInterval(this.sliderState.intervalId);
    }
  }
};

// registrar módulo en la aplicación principal
if (window.EscotelApp) {
  window.EscotelApp.registerModule('home', HomeModule);
} else {
  // fallback si app principal no está disponible
  document.addEventListener('DOMContentLoaded', () => {
    HomeModule.init();
  });
}

// exponer módulo globalmente para debugging
window.HomeModule = HomeModule;