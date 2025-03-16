# Parcial 1 Desarrollo Web 
## Juan Diego Sarmiento Sánchez
## Descripción
Este proyecto se realizó utilizando react y Vite. Implementa diferentes funcionalidades utilizando React Bootsrap, React Router y finalmente react-intl.
### Instalación y Ejecución
Siga estos pasos para ejecutar el proyecto en su máquina:

#### Requisitos Previos
- Node.js (versión recomendada: 18 o superior)
- npm o yarn

#### Pasos para ejecutar el proyecto
1. Clone el repositorio:
   ```sh
   git clone https://github.com/JuanSarS/Parcial_1_Web.git 
   ```
   
2. Instale las dependencias:
   ```sh
   npm install
   ```
3.1 Ejecute el servidor de desarrollo:
   ```sh
   npm start
   ```
   o si utiliza yarn:
   ```sh
   yarn start
   ```
3.2 (Recomendado) Ejecute el servidor de producción:
   ```sh
   npm run build
   ```
   ```sh
   npm run preview
   ```
4. Explore la aplicación web con su propia interfaz.
   
## Reporte de Decisiones
Para el desarrollo del parcial se realizó el siguiente proceso: 
- Se inicializó un repositorio vacío.
   -    
- Se ejcutó React + Vite y se probó.
- Se realizó el primer Release.
- A partir de este se emepzó a trabjar en la hora de desarrollo del parcial.
- Se comenzó con el desarrollo de la vista del login.
- Luego a partir de la librería de React-Bootstrap se implementó un Carrousel.
- Luego se agregó navegación con todos los compenentes y vistas ue se deseaban tener.
- Se Agregó el menú principal
- Se creó la página de detail para cad aparte del menú.
- Se realizó el primer Release para el final de la hora del parcial.
- Se implementó internacionalización con React I18N.
- Se realizó el segundo Release.
- Se temrinó todos los estilos y demás fuincionalidades faltantes de la aplicación.
- Se realizó el Release Final.  
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
