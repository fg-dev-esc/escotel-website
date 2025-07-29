// ESCOTEL Website - Aplicación Principal
// Sistema de inicialización modular

const EscotelApp = {
  // registro de módulos por vista
  modules: new Map(),
  
  // configuración global
  config: {
    animationDuration: 300,
    slideInterval: 5000,
    scrollOffset: 70
  },

  // inicializar aplicación
  init() {
    console.log('🚀 Iniciando ESCOTEL Website');
    
    // detectar vista actual
    this.currentView = this.detectCurrentView();
    
    // cargar componentes compartidos
    this.loadSharedComponents();
    
    // inicializar módulo específico de la vista
    this.initCurrentViewModule();
    
    // configurar eventos globales
    this.setupGlobalEvents();
    
    console.log(`✅ Vista "${this.currentView}" inicializada correctamente`);
  },

  // detectar vista actual basado en la URL
  detectCurrentView() {
    const path = window.location.pathname;
    
    if (path.includes('/views/services/')) return 'services';
    if (path.includes('/views/company/')) return 'company';
    if (path.includes('/views/business/')) return 'business';
    if (path.includes('/views/careers/')) return 'careers';
    if (path.includes('/views/contact/')) return 'contact';
    
    return 'home'; // vista por defecto
  },

  // cargar componentes compartidos
  loadSharedComponents() {
    // los componentes se cargan automáticamente por sus propios scripts
    console.log('📦 Componentes compartidos cargados');
  },

  // registrar módulo de vista
  registerModule(viewName, module) {
    this.modules.set(viewName, module);
    console.log(`📋 Módulo "${viewName}" registrado`);
  },

  // inicializar módulo de vista actual
  initCurrentViewModule() {
    const module = this.modules.get(this.currentView);
    
    if (module && typeof module.init === 'function') {
      try {
        module.init();
        console.log(`🎯 Módulo "${this.currentView}" inicializado`);
      } catch (error) {
        console.error(`❌ Error al inicializar módulo "${this.currentView}":`, error);
      }
    } else {
      console.log(`ℹ️ No hay módulo específico para "${this.currentView}"`);
    }
  },

  // configurar eventos globales
  setupGlobalEvents() {
    // navegación suave
    this.setupSmoothScrolling();
    
    // responsive breakpoints
    this.setupResponsiveHandlers();
    
    // performance optimizations
    this.setupPerformanceOptimizations();
  },

  // navegación suave para anclas
  setupSmoothScrolling() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - this.config.scrollOffset;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  },

  // manejadores responsive
  setupResponsiveHandlers() {
    let resizeTimer;
    
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.handleResize();
      }, 250);
    });
  },

  // manejar redimensionamiento
  handleResize() {
    const currentModule = this.modules.get(this.currentView);
    
    if (currentModule && typeof currentModule.handleResize === 'function') {
      currentModule.handleResize();
    }
    
    // actualizar variables CSS dependientes del viewport
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  },

  // optimizaciones de rendimiento
  setupPerformanceOptimizations() {
    // lazy loading para imágenes
    this.setupLazyLoading();
    
    // preload de recursos críticos
    this.preloadCriticalResources();
  },

  // configurar lazy loading
  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      // observar imágenes con data-src
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  },

  // precargar recursos críticos
  preloadCriticalResources() {
    // preload fuentes críticas si no están cargadas
    const criticalFonts = [
      'https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,900'
    ];

    criticalFonts.forEach(fontUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = fontUrl;
      document.head.appendChild(link);
    });
  },

  // utilidades públicas
  utils: {
    // debounce function
    debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    // throttle function
    throttle(func, limit) {
      let inThrottle;
      return function(...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },

    // animación de contadores
    animateCounter(element, target, duration = 2000) {
      const start = parseInt(element.textContent) || 0;
      const increment = (target - start) / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = target.toLocaleString();
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current).toLocaleString();
        }
      }, 16);
    },

    // formatear números
    formatNumber(num) {
      return new Intl.NumberFormat('es-MX').format(num);
    },

    // obtener path base según ubicación
    getBasePath() {
      const isInViews = window.location.pathname.includes('/views/');
      return isInViews ? '../../' : './';
    }
  }
};

// inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    EscotelApp.init();
  });
} else {
  EscotelApp.init();
}

// exponer globalmente para otros módulos
window.EscotelApp = EscotelApp;