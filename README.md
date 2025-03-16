# Parcial 1 - Desarrollo Web  
## Juan Diego Sarmiento Sánchez  

## Descripción  
Este proyecto se realizó utilizando React y Vite. Implementa diferentes funcionalidades con `React Bootstrap`, `React Router` y `react-intl` para la internacionalización.  

### Instalación y Ejecución  
Siga estos pasos para ejecutar el proyecto en su máquina:  

#### Requisitos Previos  
- Node.js (versión recomendada: 18 o superior)  
- npm o yarn  

#### Pasos para ejecutar el proyecto  

1. **Clonar el repositorio:**  
   ```sh
   git clone https://github.com/JuanSarS/Parcial_1_Web.git 
   ```

2. **Instalar las dependencias:**  
   ```sh
   npm install
   ```
   
3. **Ejecutar el servidor:**  
   - **Modo desarrollo:**  
     ```sh
     npm start
     ```
     o con yarn:  
     ```sh
     yarn start
     ```
   - **Modo producción (recomendado):**  
     ```sh
     npm run build
     npm run preview
     ```

4. **Explorar la aplicación web con su interfaz interactiva.**  

## Reporte de Decisiones  
Para el desarrollo del parcial se siguió el siguiente proceso:  

- Se inicializó un repositorio vacío.  
   - Para facilitar el desarrollo del parcial, se preparó previamente el ambiente de trabajo.  
- Se ejecutó React con Vite y se realizaron pruebas.  
   - Se eligió Vite como bundler por su rapidez y facilidad de uso con TypeScript.  
   - Se tomó la decisión de utilizar TypeScript debido a su mayor robustez en comparación con JavaScript.  
- Se realizó el primer *Release*.  
- A partir de este punto, se comenzó a trabajar en el desarrollo del parcial.  
- Se inició con la implementación de la vista de inicio de sesión (*Login*).  
- Se implementó un *Carousel* utilizando `React-Bootstrap`.  
- Se añadió la navegación entre componentes y vistas con `React Router`.  
- Se incorporó el menú principal.  
- Se creó la página de detalles (*Detail*) para cada opción del menú.  
- Se realizó el primer *Release* al finalizar el tiempo del parcial.  
   - Debido al límite de tiempo, este *Release* contenía algunas funcionalidades incompletas.  
- Se implementó la internacionalización con `react-intl`.  
   - Se añadieron dos idiomas: español e inglés.  
- Se realizó el segundo *Release*.  
- Se completaron los estilos y las funcionalidades faltantes.  
   - Se corrigieron errores de la implementación inicial y se refinó la internacionalización.  
- Se realizó el *Release* final.  

---  

## Tecnologías y Librerías Utilizadas  
- **React 19**: Para la construcción de componentes reutilizables.  
- **Vite**: Como entorno de desarrollo rápido.  
- **React Bootstrap**: Para los estilos y componentes de UI.  
- **React Router DOM**: Para la navegación entre páginas.  
- **react-intl**: Para la internacionalización de la aplicación.  
- **ESLint**: Para mantener un código limpio y consistente.  
- **TypeScript**: Para mejorar la robustez y seguridad en el código.  

#### Enfoque de Desarrollo  
- Se estructuró el proyecto en componentes reutilizables.  
- Se implementó un sistema de internacionalización con `react-intl`.  
- Se utilizó `React-Bootstrap` para mejorar la apariencia y experiencia de usuario.  
- Se implementó la navegación dinámica con `react-router-dom`.  

Para comenzar, se implementó la página de inicio de sesión (*Login*), ya que era sencilla de desarrollar y permitía verificar los requisitos de la contraseña. Luego, se implementó el *Carousel*, aprovechando la documentación de [React-Bootstrap](https://react-bootstrap.netlify.app/docs/components/carousel).  

En `App.tsx`, se definieron las rutas necesarias para la navegación. Se tomó esta decisión porque ya se conocían las páginas que debían ser accesibles. Posteriormente, se implementó la página principal, que serviría como base para la navegación.  

Se creó una nueva página para incluir el *Carousel* como un componente independiente. Finalmente, se realizó el primer *Release*.  

---  

## Componentes y Elementos de React Utilizados  

### Componentes Principales  
- **`CarouselImg`**: Implementa un carrusel de imágenes con `react-bootstrap`.  
- **`MainApp`**: Página principal de la aplicación encargada del *routing* entre páginas.  
- **`LogIn`**: Página de inicio de sesión con verificación de contraseña.  
- **`Detail`**: Página con el *Carousel* y la información correspondiente a cada opción del menú.  
- **`i18n`**: Componente encargado de la internacionalización.  

### Hooks Utilizados  
- **`useState`**: Para manejar el estado de la aplicación, como la validación de contraseña y la navegación en el *Carousel*.  
- **`useEffect`**: Para manejar efectos secundarios, como actualizaciones de datos y eventos después del renderizado.  
- **`useIntl`**: Para la gestión de la internacionalización, facilitando la traducción dinámica del contenido.  
- **`useNavigate`**: Para la navegación entre páginas sin recargar la aplicación.  
- **`useContext`**: Para compartir la configuración de idioma y otros estados globales entre componentes.  
- **`useLocation`**: Para enviar datos desde un componente padre a un hijo a través de la navegación.  

### Componentes de React Utilizados  

- **`Link`**: Componente de `react-router-dom` que permite la navegación sin recargar la aplicación.  
- **`Container`**: Componente de `react-bootstrap` que organiza la estructura general de la página con márgenes adecuados.  
- **`Row`**: Componente de `react-bootstrap` para dividir la interfaz en filas dentro de un `Container`.  
- **`Col`**: Se usa dentro de un `Row` para estructurar columnas de manera responsiva.  
- **`Card`**: Componente de `react-bootstrap` que muestra información organizada con encabezado, cuerpo y pie.  
- **`Spinner`**: Componente de `react-bootstrap` que indica que una operación está en proceso, utilizado en la carga de datos en la página de detalles (*Detail*).  
- **`FormattedMessage`**: Componente de `react-intl` para traducir dinámicamente textos según el idioma seleccionado.  

---
   
 
