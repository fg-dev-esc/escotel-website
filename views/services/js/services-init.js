// Módulo de inicialización para la vista SERVICES
const ServicesModule = {
  // configuración del módulo
  config: {
    animationDelay: 150,
    scrollOffset: 80
  },

  // inicializar módulo services
  init() {
    console.log('🛠️ Inicializando módulo SERVICES');
    
    // inicializar componentes
    this.initServiceCards();
    this.initSmoothScrolling();
    this.initAnimations();
    
    console.log('✅ Módulo SERVICES inicializado');
  },

  // inicializar tarjetas de servicios
  initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
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
            entry.target.classList.add('animate-in');
          }, index * this.config.animationDelay);
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    serviceCards.forEach((card, index) => {
      // configurar estado inicial
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      
      // agregar efectos hover mejorados
      this.setupCardHoverEffects(card);
      
      observer.observe(card);
    });

    console.log('🎴 Tarjetas de servicios inicializadas:', serviceCards.length);
  },

  // configurar efectos hover de tarjetas
  setupCardHoverEffects(card) {
    const icon = card.querySelector('.service-icon i');
    const features = card.querySelectorAll('.service-features li');
    
    card.addEventListener('mouseenter', () => {
      // animar icono
      if (icon) {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        icon.style.transition = 'transform 0.3s ease';
      }
      
      // animar features con delay escalonado
      features.forEach((feature, index) => {
        setTimeout(() => {
          feature.style.transform = 'translateX(5px)';
          feature.style.transition = 'transform 0.2s ease';
        }, index * 50);
      });
    });

    card.addEventListener('mouseleave', () => {
      // resetear icono
      if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
      }
      
      // resetear features
      features.forEach(feature => {
        feature.style.transform = 'translateX(0)';
      });
    });
  },

  // configurar navegación suave específica para servicios
  initSmoothScrolling() {
    // navegación del hero a secciones
    const heroButtons = document.querySelectorAll('.hero-buttons a[href^="#"]');
    
    heroButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = button.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.getBoundingClientRect().top + 
                           window.pageYOffset - this.config.scrollOffset;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });

          // resaltar temporalmente la tarjeta objetivo
          this.highlightTargetCard(targetElement);
        }
      });
    });
  },

  // resaltar tarjeta objetivo
  highlightTargetCard(targetElement) {
    const card = targetElement.querySelector('.service-card');
    
    if (card) {
      // agregar clase de resaltado
      card.classList.add('highlight-card');
      
      // remover después de la animación
      setTimeout(() => {
        card.classList.remove('highlight-card');
      }, 2000);
    }
  },

  // inicializar animaciones generales
  initAnimations() {
    // animar hero badge
    this.animateHeroBadge();
    
    // animar sección CTA
    this.initCTAAnimation();
  },

  // animar badge del hero
  animateHeroBadge() {
    const badge = document.querySelector('.hero-badge');
    
    if (badge) {
      // configurar animación de entrada
      badge.style.opacity = '0';
      badge.style.transform = 'translateY(-20px)';
      badge.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      
      // animar después de un breve delay
      setTimeout(() => {
        badge.style.opacity = '1';
        badge.style.transform = 'translateY(0)';
      }, 300);

      // efecto de pulso sutil
      setInterval(() => {
        badge.style.transform = 'scale(1.02)';
        setTimeout(() => {
          badge.style.transform = 'scale(1)';
        }, 200);
      }, 4000);
    }
  },

  // inicializar animación de CTA
  initCTAAnimation() {
    const ctaSection = document.querySelector('.cta-section');
    
    if (ctaSection) {
      const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-cta');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      observer.observe(ctaSection);
    }
  },

  // filtrar servicios (funcionalidad futura)
  filterServices(category) {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
      const cardCategory = card.dataset.category;
      
      if (!category || category === 'all' || cardCategory === category) {
        card.style.display = 'block';
        card.style.opacity = '1';
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
      }
    });
  },

  // buscar servicios (funcionalidad futura)
  searchServices(query) {
    const cards = document.querySelectorAll('.service-card');
    const searchTerm = query.toLowerCase();
    
    cards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();
      const features = Array.from(card.querySelectorAll('.service-features li'))
                          .map(li => li.textContent.toLowerCase())
                          .join(' ');
      
      const searchContent = `${title} ${description} ${features}`;
      
      if (searchContent.includes(searchTerm)) {
        card.style.display = 'block';
        card.classList.add('search-match');
      } else {
        card.style.display = 'none';
        card.classList.remove('search-match');
      }
    });
  },

  // manejar redimensionamiento
  handleResize() {
    // reajustar animaciones si es necesario
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
      // resetear transformaciones en móvil
      if (window.innerWidth < 768) {
        card.style.transform = 'none';
      }
    });
  },

  // limpiar recursos al salir
  cleanup() {
    // limpiar event listeners si es necesario
    console.log('🧹 Limpiando módulo SERVICES');
  }
};

// registrar módulo en la aplicación principal
if (window.EscotelApp) {
  window.EscotelApp.registerModule('services', ServicesModule);
} else {
  // fallback si app principal no está disponible
  document.addEventListener('DOMContentLoaded', () => {
    ServicesModule.init();
  });
}

// exponer módulo globalmente para debugging
window.ServicesModule = ServicesModule;