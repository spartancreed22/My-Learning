# Vite

Vite es una herramienta de desarrollo que facilita la creación de aplicaciones web, especialmente aquellas construidas con frameworks como React, Vue o Svelte. Fue creada por Evan You, quien también es el creador de Vue.js.

## Características

- **Desarrollo Rápido**: Vite utiliza un servidor de desarrollo ultra rápido basado en módulos ES. Esto significa que, en lugar de construir toda la aplicación al iniciar el servidor, Vite solo construye y ejecuta los módulos necesarios en el momento.

- **Recarga en Caliente (HMR)**: Realiza recargas en caliente casi instantáneamente en el cliente. Esto significa que al realizar un cambio, solo se recarga el módulo afectado en lugar de recargar toda la página, lo que mejora la agilidad en el desarrollo.

- **Compatibilidad con Múltiples Frameworks**: Aunque inicialmente fue pensado para Vue, Vite es compatible con muchos otros frameworks de JavaScript, como React y Svelte.

## Funcionalidades

Vite no es un instalador de paquetes como npm o Yarn, pero utiliza estas herramientas para manejar las dependencias. Sus principales funcionalidades son:

- Servidor de desarrollo ultra rápido.
- Recarga en caliente.
- Construcción optimizada para la producción.

## Ventajas

- **Rendimiento**: Vite es extremadamente rápido para el desarrollo.
  
- **Simplicidad**: Es muy fácil de configurar y usar, con una configuración mínima en comparación con herramientas tradicionales como Webpack.
  
- **Modernidad**: Utiliza tecnologías modernas y se adapta a las necesidades de desarrollo actuales.



##    COMANDOS


COMANDO PARA CREAR UN PROYECTO VITE:

UBICARME EN LA CARPETA QUE DESEO CREAR EL PROYECTO Y DESDE EL CMD TENIENDO NODE.JS INSTALADO EJECUTO EL SIGUIENTE COMANDO:

npm create vite@latest

Dar yes a todo y pondremos el nombre que deseamos
Y como vamos a trabajar con react selecionaremos la opcion de JavaScript

entonces primero seleccionaremos la opcion react y después javascript


Ahora instalaremos las dependencias con el comando "npm install" o "npm i" fijandonos que estemos en la carpeta donde esté el proyecto
Al instalar las dependencias revisaremos la carpeta node_modules y habrán muchisimos archivos

para emular o ejecutar el proyecto desde vite ejecutaremos el sigueinte comando:

    npm run dev

y buscaremos la url que nos arroja



## COMPONENTES 

Es una pieza de codigo reutilizable e independiente a la interfaz de usuario, la cual puede ser combinada por con otros componentes para la finalizacion de un proyecto.




## PROPTS

Son datos los cuales se pasan del componente principal a los componentes hijos y los hijos pueden enviar informacion a los subhijos por medio de unas propiedades

La comunicación entre componentes se realiza por medio de propiedades (props) o Usecontext


diferencia del props al (un hug) Usecontext:  a pesar de que existan buenas practicas es mejor usar propiedades (props) para proyectos pequeños ya para cuando se usan proyectos grandes ya que el paso de padre a hijos es demasiado larga, es mejor usar el usecontext



## VITE ESTRUCTURA

la carpeta donde dejaremos las imajenes será en públic con ./ y el nombre de la imagen

Para empezar a modificar la primera pantalla del proyecto sabremos donde se UBICA EL INDEX.HTML que esta den la carpeta base del proyecto y la carpeta App.jsx que está en "src/assets/App.jsx"

borremos todo lo que está dentro del return, dentro de los simbolos  "<> CONTENIDO </>"

