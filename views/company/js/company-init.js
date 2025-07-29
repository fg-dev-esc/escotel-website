// Módulo de inicialización para la vista COMPANY
const CompanyModule = {
  // configuración del módulo
  config: {
    animationDelay: 200,
    staggerDelay: 100
  },

  // inicializar módulo company
  init() {
    console.log('🏢 Inicializando módulo COMPANY');
    
    // inicializar componentes
    this.initHeroAnimations();
    this.initQualitySection();
    this.initCertifications();
    this.initValues();
    
    console.log('✅ Módulo COMPANY inicializado');
  },

  // inicializar animaciones del hero
  initHeroAnimations() {
    const heroBadge = document.querySelector('.hero-badge');
    const heroTitle = document.querySelector('.company-hero-section h1');
    const heroText = document.querySelector('.company-hero-section .lead');
    
    const elements = [heroBadge, heroTitle, heroText].filter(Boolean);
    
    elements.forEach((element, index) => {
      if (element) {
        // configurar estado inicial
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        // animar con delay escalonado
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * this.config.staggerDelay + 300);
      }
    });

    console.log('🎬 Animaciones del hero inicializadas');
  },

  // inicializar sección de calidad
  initQualitySection() {
    const qualityImage = document.querySelector('.quality-image-container');
    const qualityContent = document.querySelector('.quality-content');
    const commitments = document.querySelectorAll('.quality-commitments li');
    
    // animar imagen de calidad
    if (qualityImage) {
      this.setupScrollAnimation(qualityImage, 'slideInLeft');
    }
    
    // animar contenido de calidad
    if (qualityContent) {
      this.setupScrollAnimation(qualityContent, 'slideInRight');
    }
    
    // animar compromisos uno por uno
    commitments.forEach((commitment, index) => {
      this.setupScrollAnimation(commitment, 'fadeInUp', index * 100);
    });

    // configurar badge interactivo
    this.setupQualityBadge();

    console.log('📋 Sección de calidad inicializada');
  },

  // configurar badge de calidad
  setupQualityBadge() {
    const badge = document.querySelector('.quality-badge');
    
    if (badge) {
      // efecto de pulso sutil
      setInterval(() => {
        badge.style.transform = 'scale(1.05)';
        setTimeout(() => {
          badge.style.transform = 'scale(1)';
        }, 300);
      }, 3000);

      // hover effect
      badge.addEventListener('mouseenter', () => {
        badge.style.transform = 'scale(1.1) rotate(5deg)';
        badge.style.transition = 'transform 0.3s ease';
      });

      badge.addEventListener('mouseleave', () => {
        badge.style.transform = 'scale(1) rotate(0deg)';
      });
    }
  },

  // inicializar certificaciones
  initCertifications() {
    const certCards = document.querySelectorAll('.certification-card');
    
    if (!certCards.length) {
      console.warn('⚠️ No se encontraron tarjetas de certificación');
      return;
    }

    certCards.forEach((card, index) => {
      // configurar animación de entrada
      this.setupScrollAnimation(card, 'slideInUp', index * this.config.staggerDelay);
      
      // efectos hover mejorados
      this.setupCertificationHover(card);
    });

    console.log('🏆 Certificaciones inicializadas:', certCards.length);
  },

  // configurar hover de certificaciones
  setupCertificationHover(card) {
    const icon = card.querySelector('.cert-icon img');
    
    card.addEventListener('mouseenter', () => {
      // efecto de brillo en la imagen
      if (icon) {
        icon.style.filter = 'brightness(1.1) saturate(1.2)';
        icon.style.transform = 'scale(1.05)';
        icon.style.transition = 'all 0.3s ease';
      }
      
      // efecto de elevación
      card.style.transform = 'translateY(-15px)';
      card.style.boxShadow = '0 20px 40px rgba(130, 103, 104, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
      if (icon) {
        icon.style.filter = 'brightness(1) saturate(1)';
        icon.style.transform = 'scale(1)';
      }
      
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'var(--shadow-light)';
    });
  },

  // inicializar valores
  initValues() {
    const valueCards = document.querySelectorAll('.value-card');
    
    if (!valueCards.length) {
      console.warn('⚠️ No se encontraron tarjetas de valores');
      return;
    }

    valueCards.forEach((card, index) => {
      // configurar animación de entrada
      this.setupScrollAnimation(card, 'fadeInUp', index * this.config.staggerDelay);
      
      // efectos hover para valores
      this.setupValueHover(card);
    });

    console.log('⭐ Valores inicializados:', valueCards.length);
  },

  // configurar hover de valores
  setupValueHover(card) {
    const icon = card.querySelector('.value-icon i');
    
    card.addEventListener('mouseenter', () => {
      // animar icono
      if (icon) {
        icon.style.transform = 'scale(1.2) rotate(10deg)';
        icon.style.color = 'var(--text-secondary)';
        icon.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
      }
      
      // efecto de elevación sutil
      card.style.transform = 'translateY(-5px)';
      card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
      if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
        icon.style.color = 'var(--text-primary)';
      }
      
      card.style.transform = 'translateY(0)';
    });
  },

  // configurar animación de scroll genérica
  setupScrollAnimation(element, animationType, delay = 0) {
    if (!element) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(`animate-${animationType}`);
          }, delay);
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // configurar estado inicial
    element.style.opacity = '0';
    
    switch (animationType) {
      case 'slideInLeft':
        element.style.transform = 'translateX(-50px)';
        break;
      case 'slideInRight':
        element.style.transform = 'translateX(50px)';
        break;
      case 'slideInUp':
        element.style.transform = 'translateY(30px)';
        break;
      case 'fadeInUp':
        element.style.transform = 'translateY(20px)';
        break;
      default:
        element.style.transform = 'translateY(20px)';
    }

    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    observer.observe(element);
  },

  // manejar redimensionamiento
  handleResize() {
    // ajustar animaciones en móvil si es necesario
    if (window.innerWidth < 768) {
      const cards = document.querySelectorAll('.certification-card, .value-card');
      
      cards.forEach(card => {
        // simplificar efectos en móvil
        card.style.transform = 'none';
      });
    }
  },

  // limpiar recursos al salir
  cleanup() {
    console.log('🧹 Limpiando módulo COMPANY');
  }
};

// estilos CSS dinámicos para animaciones
const animationStyles = `
  .animate-slideInLeft {
    opacity: 1 !important;
    transform: translateX(0) !important;
  }
  
  .animate-slideInRight {
    opacity: 1 !important;
    transform: translateX(0) !important;
  }
  
  .animate-slideInUp {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  .animate-fadeInUp {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  .quality-badge {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: var(--accent-gradient);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    box-shadow: var(--shadow-medium);
    transition: var(--transition-smooth);
    cursor: pointer;
  }
  
  .value-icon {
    width: 80px;
    height: 80px;
    background: rgba(130, 103, 104, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  
  .value-icon i {
    font-size: 2.5rem;
    color: var(--text-primary);
  }
  
  .commitment-icon i {
    font-size: 1.5rem;
  }
`;

// inyectar estilos
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// registrar módulo en la aplicación principal
if (window.EscotelApp) {
  window.EscotelApp.registerModule('company', CompanyModule);
} else {
  // fallback si app principal no está disponible
  document.addEventListener('DOMContentLoaded', () => {
    CompanyModule.init();
  });
}

// exponer módulo globalmente para debugging
window.CompanyModule = CompanyModule;