# ESCOTEL Website

Sitio web corporativo de ESCOTEL - Excelencia en Asistencia

## Estructura del Proyecto

```
escotel-website/
├── views/                      # Vistas organizadas por funcionalidad
│   ├── home/                   # Página principal
│   ├── services/               # Servicios y soluciones
│   ├── company/                # Información corporativa
│   ├── business/               # Nuevos negocios
│   ├── careers/                # Oportunidades laborales
│   └── contact/                # Contacto
├── shared/                     # Recursos compartidos
│   ├── components/             # Componentes reutilizables
│   │   ├── navbar/            # Barra de navegación
│   │   ├── footer/            # Pie de página
│   │   └── logos/             # Galería de clientes
│   ├── js/                    # JavaScript compartido
│   └── assets/                # Recursos estáticos
│       ├── img/               # Imágenes
│       └── fonts/             # Fuentes tipográficas
└── assets/                    # Estilos principales
    └── css/                   # Hojas de estilo
```

## Arquitectura

- **HTML puro**: Estructura semántica y accesible
- **CSS unificado**: Un solo archivo organizado por secciones
- **JavaScript modular**: Funcionalidades separadas por vista
- **Diseño responsivo**: Compatible con todos los dispositivos

## Tecnologías

- HTML5 semántico
- CSS3 con custom properties
- JavaScript ES6+ vanilla
- Bootstrap Icons
- Material Symbols

## Desarrollo

El proyecto está organizado siguiendo principios de separación de responsabilidades y reutilización de componentes, manteniendo la simplicidad de las tecnologías web nativas.

## Características

### 🎨 Arquitectura Feature-Based
- Organización por funcionalidades (views)
- Componentes reutilizables en carpeta shared
- CSS unificado con secciones bien definidas
- JavaScript modular con sistema de registro

### ⚡ Rendimiento Optimizado  
- Lazy loading de imágenes
- Debounce y throttle en eventos
- Animaciones CSS3 hardware-accelerated
- Detección de soporte para formatos modernos (WebP, AVIF)

### 📱 Diseño Responsive
- Mobile-first approach
- Breakpoints optimizados para todos los dispositivos
- Navegación adaptativa con mega-menús
- Componentes flexibles y escalables

### ♿ Accesibilidad
- Navegación por teclado completa
- ARIA labels y roles semánticos
- Soporte para lectores de pantalla
- Contrastes de color optimizados

### 🔧 Herramientas de Desarrollo
- Sistema de utilidades compartidas
- Debugging helpers en modo desarrollo
- Event tracking integrado
- Validaciones de formulario avanzadas

## Scripts Disponibles

- **Desarrollo local**: Abrir `index.html` en navegador
- **Testing**: Validar HTML, CSS y accesibilidad
- **Deployment**: Subir carpeta completa a servidor web

## Estructura de Commits

El proyecto sigue una estructura de commits semántica:
- `feat:` - Nuevas funcionalidades
- `fix:` - Corrección de errores  
- `docs:` - Documentación
- `style:` - Cambios de formato
- `refactor:` - Reestructuración de código
- `test:` - Pruebas
- `chore:` - Tareas de mantenimiento