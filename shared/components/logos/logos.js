function loadLogosSection(basePath = '') {
  const logosHTML = `
    <section class="logos-section-unified">
      <div class="container">
        <div class="text-center mb-5">
          <h3 class="logos-title">Clientes que confían en nosotros</h3>
        </div>
        <div class="logos-grid-unified">
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/abbott.png" alt="Abbott">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/actuarios.png" alt="Actuarios">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/aig.png" alt="AIG">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/asofarma.png" alt="Asofarma">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/avis.png" alt="Avis">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/bancoppel.png" alt="Bancoppel">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/banorte.png" alt="Banorte">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/bbva.png" alt="BBVA">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/santander.png" alt="Santander">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/brove.png" alt="Brove">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/cadi.png" alt="Cadi">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/chedraui.png" alt="Chedraui">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/contigo.png" alt="Contigo">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/coppel.png" alt="Coppel">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/crediplata.png" alt="Crediplata">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/edomex.png" alt="Edomex">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/general-de-seguros.png" alt="General de Seguros">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/gnp.png" alt="GNP">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/inter.png" alt="Inter">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/lilly.png" alt="Lilly">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/liverpool.png" alt="Liverpool">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/merck.png" alt="Merck">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/multiasistencia.png" alt="Multiasistencia">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/qualitas.png" alt="Qualitas">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/logo-hdi.jpg" alt="HDI">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/sanofi.png" alt="Sanofi">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/bnp.png" alt="BNP">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/scotiabank.png" alt="Scotiabank">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/sura.png" alt="Sura">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/vw.png" alt="VW">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/zion.png" alt="Zion">
          </div>
          <div class="logo-item">
            <img src="${basePath}shared/assets/img/logos/el-aguila.png" alt="El Aguila">
          </div>
        </div>
      </div>
    </section>
  `;

  return logosHTML;
}

function setupLogosAnimations() {
  const logoItems = document.querySelectorAll('.logo-item');
  
  logoItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.8) translateY(20px)';
    item.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`;
    
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.05)';
      this.style.boxShadow = 'var(--shadow-heavy)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = 'var(--shadow-medium)';
    });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'scale(1) translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(item);
  });
}

function loadLogos() {
  const logosContainer = document.getElementById('logos-container');
  if (logosContainer) {
    const path = window.location.pathname;
    let basePath = './';
    
    // Detectar si estamos en una subcarpeta de views
    if (path.includes('/views/')) {
      basePath = '../../';
    }
    
    logosContainer.innerHTML = loadLogosSection(basePath);
    
    // configurar animaciones después de cargar el HTML
    setTimeout(setupLogosAnimations, 100);
    
    console.log('logos cargados correctamente');
  } else {
    console.error('error: No se encontró el contenedor #logos-container');
  }
}

// inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadLogos);
} else {
  loadLogos();
}