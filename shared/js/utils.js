// ESCOTEL Website - Utilidades Compartidas
// Funciones de utilidad reutilizables

const EscotelUtils = {
  
  // ========================================
  // ANIMACIONES Y EFECTOS
  // ========================================
  
  // intersection observer helper
  createScrollObserver(callback, options = {}) {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observerOptions = { ...defaultOptions, ...options };
    
    return new IntersectionObserver(callback, observerOptions);
  },

  // animar elemento cuando sea visible
  animateOnScroll(element, animationClass, delay = 0) {
    if (!element) return;

    const observer = this.createScrollObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(animationClass);
          }, delay);
          
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(element);
  },

  // animar lista de elementos con delay escalonado
  staggerAnimation(elements, animationClass, staggerDelay = 100) {
    elements.forEach((element, index) => {
      this.animateOnScroll(element, animationClass, index * staggerDelay);
    });
  },

  // ========================================
  // FORMULARIOS
  // ========================================
  
  // validar email
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // validar teléfono mexicano
  validatePhone(phone) {
    const phoneRegex = /^(\+52|52)?[\s\-]?(\d{2,3})[\s\-]?(\d{3,4})[\s\-]?(\d{4})$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },

  // limpiar y formatear teléfono
  formatPhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    
    if (cleaned.length === 10) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    } else if (cleaned.length === 12 && cleaned.startsWith('52')) {
      return `+52 ${cleaned.slice(2, 5)}-${cleaned.slice(5, 8)}-${cleaned.slice(8)}`;
    }
    
    return phone;
  },

  // mostrar mensaje de validación
  showValidationMessage(element, message, type = 'error') {
    const existingMessage = element.parentNode.querySelector('.validation-message');
    
    if (existingMessage) {
      existingMessage.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `validation-message validation-${type}`;
    messageDiv.textContent = message;
    
    element.parentNode.appendChild(messageDiv);
    
    // auto-remove después de 5 segundos
    setTimeout(() => {
      if (messageDiv.parentNode) {
        messageDiv.remove();
      }
    }, 5000);
  },

  // ========================================
  // NAVEGACIÓN Y URLs
  // ========================================
  
  // obtener parámetros de URL
  getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const result = {};
    
    for (let [key, value] of params) {
      result[key] = value;
    }
    
    return result;
  },

  // scroll suave a elemento
  smoothScrollTo(element, offset = 0) {
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  },

  // detectar si está en móvil
  isMobile() {
    return window.innerWidth < 768;
  },

  // detectar si está en tablet
  isTablet() {
    return window.innerWidth >= 768 && window.innerWidth < 1024;
  },

  // ========================================
  // ALMACENAMIENTO LOCAL
  // ========================================
  
  // guardar en localStorage con manejo de errores
  saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn('No se pudo guardar en localStorage:', error);
      return false;
    }
  },

  // obtener de localStorage con manejo de errores
  getFromStorage(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn('No se pudo leer de localStorage:', error);
      return defaultValue;
    }
  },

  // ========================================
  // RENDIMIENTO Y OPTIMIZACIÓN
  // ========================================
  
  // debounce function mejorada
  debounce(func, wait, immediate = false) {
    let timeout;
    
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      
      if (callNow) func(...args);
    };
  },

  // throttle function mejorada
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

  // lazy loading de imágenes
  setupLazyLoading(selector = 'img[data-src]') {
    if (!('IntersectionObserver' in window)) {
      // fallback para navegadores sin soporte
      document.querySelectorAll(selector).forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
      return;
    }

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.classList.add('lazy-loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll(selector).forEach(img => {
      imageObserver.observe(img);
    });
  },

  // ========================================
  // DETECCIÓN DE CARACTERÍSTICAS
  // ========================================
  
  // detectar soporte para features
  supports: {
    webp: null,
    avif: null,
    
    // detectar soporte para WebP
    checkWebP() {
      if (this.webp !== null) return Promise.resolve(this.webp);
      
      return new Promise((resolve) => {
        const webP = new Image();
        webP.onload = webP.onerror = () => {
          this.webp = webP.height === 2;
          resolve(this.webp);
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      });
    },

    // detectar soporte para AVIF
    checkAVIF() {
      if (this.avif !== null) return Promise.resolve(this.avif);
      
      return new Promise((resolve) => {
        const avif = new Image();
        avif.onload = avif.onerror = () => {
          this.avif = avif.height === 2;
          resolve(this.avif);
        };
        avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=';
      });
    }
  },

  // ========================================
  // ANALÍTICAS Y TRACKING
  // ========================================
  
  // track eventos personalizados
  trackEvent(eventName, properties = {}) {
    // implementar según el servicio de analytics usado
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, properties);
    }
    
    console.log('Event tracked:', eventName, properties);
  },

  // track tiempo en página
  trackTimeOnPage() {
    const startTime = Date.now();
    
    window.addEventListener('beforeunload', () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      this.trackEvent('time_on_page', {
        seconds: timeSpent,
        page: window.location.pathname
      });
    });
  },

  // ========================================
  // ACCESIBILIDAD
  // ========================================
  
  // mejorar contraste de colores
  enhanceContrast() {
    const contrastCSS = `
      .high-contrast {
        filter: contrast(1.2) brightness(1.1);
      }
      
      .high-contrast a {
        text-decoration: underline !important;
      }
    `;
    
    const style = document.createElement('style');
    style.textContent = contrastCSS;
    document.head.appendChild(style);
    
    document.body.classList.add('high-contrast');
  },

  // configurar navegación por teclado
  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // Escape para cerrar modales
      if (e.key === 'Escape') {
        const modal = document.querySelector('.modal.show');
        if (modal) {
          modal.classList.remove('show');
        }
      }
      
      // Enter en elementos clickeables
      if (e.key === 'Enter') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('clickable')) {
          focusedElement.click();
        }
      }
    });
  },

  // ========================================
  // INICIALIZACIÓN
  // ========================================
  
  // inicializar utilidades globales
  init() {
    // configurar lazy loading
    this.setupLazyLoading();
    
    // configurar navegación por teclado
    this.setupKeyboardNavigation();
    
    // track tiempo en página
    this.trackTimeOnPage();
    
    console.log('🔧 Utilidades ESCOTEL inicializadas');
  }
};

// auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    EscotelUtils.init();
  });
} else {
  EscotelUtils.init();
}

// exponer globalmente
window.EscotelUtils = EscotelUtils;