# Parcial 1 Desarrollo Web 
## Juan Diego Sarmiento Sánchez
## Descripción
Este proyecto es una aplicación web desarrollada con React y Vite. Implementa diversas funcionalidades utilizando React Bootstrap, React Router y react-intl para la internacionalización.

### Instalación y Ejecución
Sigue estos pasos para ejecutar el proyecto en tu máquina:

#### Requisitos Previos
- Node.js (versión recomendada: 18 o superior)
- npm o yarn

#### Pasos para ejecutar el proyecto
1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```sh
   npm start
   ```
   o si usas yarn:
   ```sh
   yarn start
   ```
## Reporte de Decisiones
#### Tecnologías y Librerías Utilizadas
- **React 19**: Para la construcción de componentes reutilizables.
- **Vite**: Como entorno de desarrollo rápido.
- **React Bootstrap**: Para los estilos y componentes UI.
- **React Router DOM**: Para la navegación entre páginas.
- **react-intl**: Para la internacionalización de la aplicación.
- **ESLint**: Para mantener un código limpio y consistente.
- **TypeScript**: Para mejorar la robustez y seguridad en el código.

#### Enfoque de Desarrollo
- Se estructuró el proyecto en componentes reutilizables.
- Se implementó un sistema de internacionalización con `react-intl`.
- Se utilizó Bootstrap para mejorar la apariencia y experiencia de usuario.
- Se implementó navegación dinámica con `react-router-dom`.

## Componentes y Elementos de React Utilizados
#### Componentes principales
- **CarouselImg**: Implementa un carrusel con imágenes usando `react-bootstrap`.
- **MainApp**: Página principal de la aplicación.
- **Navigation**: Barra de navegación con enlaces a diferentes secciones.

#### Hooks Utilizados
- `useState`: Para manejar el estado del carrusel.
- `useEffect`: Para efectos secundarios.
- `useIntl`: Para la internacionalización.
- `useNavigate`: Para la navegación entre páginas.
