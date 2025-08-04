function loadFooter(basePath = '') {
  const footerHTML = `
    <footer class="footer-unified footer-modern">
      <div class="container">
        <!-- Sección principal -->
        <div class="row gy-4">
          <!-- Logo y descripción -->
          <div class="col-lg-3 col-md-6">
            <div class="footer-brand" style="padding-top: 0.5rem;">
              <a href="https://www.escotel.com.mx" class="d-inline-block mb-3">
                <img src="${basePath}shared/assets/img/logo-escotel.png" class="footer-logo" alt="ESCOTEL Logo" style="height: 40px; width: auto;">
              </a>
              <h6 class="footer-tagline mb-2" style="font-size: 0.9rem; margin-top: 0.8rem;">Excelencia en Asistencia</h6>
              <p class="footer-description text-muted mb-3" style="font-size: 0.8rem; line-height: 1.4; margin-bottom: 1.2rem !important;">Soluciones telefónicas integrales para empresas y particulares.</p>
              
              <!-- Redes sociales -->
              <div class="social-links d-flex gap-2" style="margin-top: 1.5rem;">
                <a href="https://www.facebook.com/escotel" target="_blank" class="social-icon social-facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/escotel" target="_blank" class="social-icon social-twitter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://mx.linkedin.com/company/escotel" target="_blank" class="social-icon social-linkedin">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/escotel" target="_blank" class="social-icon social-instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/escotel" target="_blank" class="social-icon social-youtube">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Servicios -->
          <div class="col-lg-2 col-md-6 col-6">
            <div class="footer-section" style="padding-top: 0.5rem;">
              <h6 class="footer-title mb-3" style="font-size: 0.95rem;">Servicios</h6>
              <ul class="footer-links list-unstyled" style="font-size: 0.85rem;">
                <li class="mb-2"><a href="${basePath}views/services/soluciones.html" class="footer-link">Call Center</a></li>
                <li class="mb-2"><a href="${basePath}views/services/soluciones.html" class="footer-link">Asistencia en el Hogar</a></li>
                <li class="mb-2"><a href="${basePath}views/services/soluciones.html" class="footer-link">Asistencia Vial</a></li>
                <li class="mb-2"><a href="${basePath}views/services/soluciones.html" class="footer-link">Asistencia Médica</a></li>
              </ul>
            </div>
          </div>

          <!-- Soluciones -->
          <div class="col-lg-2 col-md-6 col-6">
            <div class="footer-section" style="padding-top: 0.5rem;">
              <h6 class="footer-title mb-3" style="font-size: 0.95rem;">Soluciones</h6>
              <ul class="footer-links list-unstyled" style="font-size: 0.85rem;">
                <li class="mb-2"><a href="${basePath}views/services/soluciones.html" class="footer-link">Asistencia en Viajes</a></li>
                <li class="mb-2"><a href="${basePath}views/services/soluciones.html" class="footer-link">Prevención Salud</a></li>
                <li class="mb-2"><a href="${basePath}views/services/soluciones.html" class="footer-link">Asistencia Legal</a></li>
                <li class="mb-2"><a href="${basePath}views/services/soluciones.html" class="footer-link">Asistencia Técnica</a></li>
              </ul>
            </div>
          </div>

          <!-- Empresa -->
          <div class="col-lg-2 col-md-6 col-6">
            <div class="footer-section" style="padding-top: 0.5rem;">
              <h6 class="footer-title mb-3" style="font-size: 0.95rem;">Empresa</h6>
              <ul class="footer-links list-unstyled" style="font-size: 0.85rem;">
                <li class="mb-2"><a class="footer-link" href="${basePath}views/company/fortalezas.html">Acerca de Nosotros</a></li>
                <li class="mb-2"><a class="footer-link" href="${basePath}views/company/fortalezas.html">Fortalezas</a></li>
                <li class="mb-2"><a class="footer-link" href="${basePath}views/company/fortalezas.html">Certificaciones</a></li>
                <li class="mb-2"><a class="footer-link" href="${basePath}views/company/fortalezas.html">Clientes</a></li>
              </ul>
            </div>
          </div>

          <!-- Contacto -->
          <div class="col-lg-3 col-md-4">
            <div class="footer-section">
              <h6 class="footer-title mb-3">Contacto</h6>

              <!-- Teléfono -->
              <div class="contact-item d-flex align-items-start mb-2">
                <div class="contact-icon me-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div class="contact-content">
                  <span class="fw-semibold d-block" style="font-size: 0.8rem;">(55) 5537-3400</span>
                  <small class="text-muted" style="font-size: 0.75rem;">Línea directa</small>
                </div>
              </div>

              <!-- Email -->
              <div class="contact-item d-flex align-items-start mb-2">
                <div class="contact-icon me-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div class="contact-content">
                  <span class="fw-semibold d-block" style="font-size: 0.7rem;">contacto@escotel.com.mx</span>
                  <small class="text-muted" style="font-size: 0.75rem;">Email corporativo</small>
                </div>
              </div>

              <!-- Dirección -->
              <div class="contact-item d-flex align-items-start">
                <div class="contact-icon me-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div class="contact-content">
                  <span class="fw-semibold d-block" style="font-size: 0.7rem;">José María Velasco 13 piso 3</span>
                  <small class="text-muted" style="font-size: 0.7rem;">San José Insurgentes, CDMX</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;

  // insertar footer en el contenedor
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
    
    setupFooterAnimations();
    
    console.log('footer cargado correctamente');
  } else {
    console.error('error: No se encontró el contenedor #footer-container');
  }
}

function setupFooterAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const footerElements = document.querySelectorAll('.footer-section, .footer-brand');
  footerElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });

  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.1)';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  const footerLinks = document.querySelectorAll('.footer-link');
  footerLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(4px)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });
}

// detectar ubicación y cargar footer
function initFooter() {
  const path = window.location.pathname;
  let basePath = './';
  
  // Detectar si estamos en una subcarpeta de views
  if (path.includes('/views/')) {
    basePath = '../../';
  }
  
  loadFooter(basePath);
}

// inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFooter);
} else {
  initFooter();
}