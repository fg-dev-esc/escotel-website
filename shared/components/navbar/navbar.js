function loadNavbar(basePath = '') {
  const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-unified">
      <div class="container-fluid">
        <a class="navbar-brand font-weight-bolder" href="https://www.escotel.com.mx" target="_blank">
          <img src="https://www.escotel.com.mx/images/logo@2x.png" alt="Escotel Logo">
        </a>
        
        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" 
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon mt-2">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        
        <div class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100 navbar-solid" id="navigation">
          <ul class="navbar-nav navbar-nav-hover ms-auto">
            <li class="nav-item mx-2">
              <a class="nav-link d-flex cursor-pointer align-items-center" href="${basePath}index.html">
                <i class="material-symbols-rounded opacity-6 me-2 text-md">home</i>Inicio
              </a>
            </li>
            
            <li class="nav-item mx-2">
              <a class="nav-link d-flex cursor-pointer align-items-center" href="${basePath}views/company/fortalezas.html">
                <i class="material-symbols-rounded opacity-6 me-2 text-md">psychology</i>Fortalezas
              </a>
            </li>
            
            <!-- versión desktop - con dropdown -->
            <li class="nav-item dropdown mega-dropdown mx-2 d-none d-lg-block" id="soluciones-desktop">
              <a class="nav-link d-flex cursor-pointer align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="material-symbols-rounded opacity-6 me-2 text-md">settings</i>
                Soluciones
                <i class="material-symbols-rounded opacity-6 ms-2 text-md">keyboard_arrow_down</i>
              </a>
              <div class="dropdown-menu mega-menu p-4">
                <div class="container-fluid">
                  <div class="row">
                    <!-- columna 1 -->
                    <div class="col-lg-3 mb-3">
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">view_list</i>Ver todos
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#asistencia-vial">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">car_repair</i>Asistencia Vial
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#asistencia-medica">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">medical_services</i>Asistencia Médica
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#asistencia-hogar">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">home</i>Asistencia en el Hogar
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#asistencia-viajes">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">flight</i>Asistencia en Viajes
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#asistencia-legal">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">gavel</i>Asistencia Legal
                      </a>
                    </div>
                    
                    <!-- columna 2 -->
                    <div class="col-lg-3 mb-3">
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#asistencia-tecnica">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">computer</i>Asistencia Técnica
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#prevencion-salud">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">health_and_safety</i>Prevención y Salud
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#viajes-internacionales">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">public</i>Viajes Internacionales
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#asistencia-migrante">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">group</i>Asistencia Migrante
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#seguridad-bancaria">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">security</i>Seguridad Bancaria
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#asistencia-funeraria">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">local_florist</i>Asistencia Funeraria
                      </a>
                    </div>
                    <div class="col-lg-3 mb-3">
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#asistencia-educativa">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">school</i>Asistencia Educativa
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#asistencia-mascota">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">pets</i>Asistencia Mascota
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#asistencia-fraude">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">shield</i>Asistencia Fraude
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#soporte-tecnico">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">support</i>Soporte Técnico
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#oficina-virtual">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">cloud</i>Oficina Virtual
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#gestoria-administrativa">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">description</i>Gestoría Administrativa
                      </a>
                    </div>
                    <div class="col-lg-3 mb-3">
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#asistencia-senior">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">elderly</i>Asistencia Senior
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#servicios-campo">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">work</i>Servicios en Campo
                      </a>
                      <a class="dropdown-item d-flex align-items-center" href="${basePath}views/services/soluciones.html#centro-contacto-telefonico">
                        <i class="material-symbols-rounded me-2 text-sm text-primary">call</i>Centro de Contacto
                      </a>
                      
                      <!-- imagen destacada -->
                      <div class="mt-1 text-center">
                        <img src="${basePath}shared/assets/img/iso-9001-2015.jpg" alt="Soluciones ESCOTEL" class="img-fluid rounded shadow-sm" style="max-height: 120px; object-fit: contain;">
                        <p class="small text-muted mt-2 mb-0"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <!-- versión mobile -->
            <li class="nav-item mx-2 d-lg-none" id="soluciones-mobile">
              <a class="nav-link d-flex cursor-pointer align-items-center" href="${basePath}views/services/soluciones.html">
                <i class="material-symbols-rounded opacity-6 me-2 text-md">settings</i>
                Soluciones
              </a>
            </li>
            
            <li class="nav-item mx-2">
              <a class="nav-link d-flex cursor-pointer align-items-center" href="${basePath}views/business/nuevos-negocios.html">
                <i class="material-symbols-rounded opacity-6 me-2 text-md">business_center</i>Nuevos Negocios
              </a>
            </li>
            
            <li class="nav-item mx-2">
              <a class="nav-link d-flex cursor-pointer align-items-center" href="${basePath}views/careers/unete.html">
                <i class="material-symbols-rounded opacity-6 me-2 text-md">handshake</i>Únete
              </a>
            </li>
            
            <li class="nav-item my-auto ms-3 ms-lg-0">
              <a href="${basePath}views/contact/contacto.html" class="btn-contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  // insertar navbar en el contenedor
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;
    
    setupMobileNavigation();
    
    console.log('navbar cargado correctamente');
  } else {
    console.error('error: no se encontró el contenedor #navbar-container');
  }
}

function setupMobileNavigation() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    const navLinks = navbarCollapse.querySelectorAll('.nav-link, .dropdown-item');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          navbarCollapse.classList.remove('show');
        }
      });
    });
  }
}

// detectar ubicación y cargar navbar
function initNavbar() {
  const path = window.location.pathname;
  let basePath = './';
  
  // Detectar si estamos en una subcarpeta de views
  if (path.includes('/views/')) {
    basePath = '../../';
  }
  
  loadNavbar(basePath);
}

// inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbar);
} else {
  initNavbar();
}