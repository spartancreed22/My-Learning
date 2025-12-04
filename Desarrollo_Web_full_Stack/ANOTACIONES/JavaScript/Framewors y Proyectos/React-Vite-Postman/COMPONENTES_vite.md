### Componente padre

En vite el componente padre es App




## ESTRUCTURA

Las estructura de un componente compuesto principalmente en una funcion 

nombre de esta funcion debe tener la primera letra en mayuscula sino genera erro al importarlo 

Para crearlos vamos a la carpeta src (source) creamos una carpeta llamada components aqui organizaremos los componentes a nuestro gusto, mirando la forma más practica, ya sea creando archivos o sub carpetas

al crear el archivo .jsx y realicemos un componente, de manera más facil podriamos usar un comando de react 

Para ahorrar tiempo el cual es "rafce" para que nos haga una funcion tipo flecha y exportar el componente 

Para reutilizar los componentes se llaman mediante un import

Para ponerle nombre a las clases dentro de los componentes, para mas adelante añadirle estilos, lo mejor es que en la carpeta en donde creamos el componente tambien pongamos el archvo de los estilos .css
y lo importamos con un Import el cual es como si nos pararamos desde la carpeta en la que estamos actualmente

### IMAGENES
las imagenes se guardarán en la carpeta públic y para importar el componente de una manera mas facil podemos, escribir el nombre del componente y ver en los atajos el que nos diga la direccion de donde creamos es componente y si no cramos una etiqueta como el "div" (<div></div>) pero con el nombre del componente y oprimimos Ctrl + espacio y buscamos el que tenga la direccion para que nos importe el import

En es ejemplo como es una imagen que estamos importando en un componente desde otro

    <Imagen ruta='./haloo.jpg'></Imagen>

    para capturar la ruta del componente de la imagen origen (componente padre) lo obtendremos mediante las propiedades del componente (props)

Archivo padre realizaremos el componente y le pondremos una propiedad la cual será la ruta que viene del archivo hijo donde lo ejecutaremos o necesitaremos imprimir.

Dentro del return, realizaremos la etiqueta img con la src={nombre de la propiedad de este componente + . + nombre de la propiedad dada desde el componente hijo}

    EJEMPLO COMPONENTE PADRE Imagen_ex.jsx:

        import React from 'react'

        // como propiedad le pasaremos la ruta de la imagen 
        const Imagen = (Propiedad) => {
        console.log(Propiedad, 'props de la ruta');
        
        return (
            <div className='Imagen'>
            <h1>Master Chief</h1>
            <img src={Propiedad.ruta} alt="Master chetos" />
            </div>
        )
        }

        // linea para poder exportar el componente

        export default Imagen 


Componente hijo 

Aqui solamente importamos el componente como dijimos anteriormente y le añadiremos una propiedad con el nombre que deseemos la cual obtendrá la ruta, cabe recalcar que solo necesitaremos poner el nombre del archi.la extension que tenga ya que react sabe que todas las imagenes deben ir en public

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Imagen from './Components/Images/Imagen_ex'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hola fans de HALO</h1>
        
        {/* aqui dejariamos como RUTA siendo una propiedad */}
        <Imagen ruta='./haloo.jpg'></Imagen>
          
      </div>
    </>
  )
}

export default App


### CSS

Para importar los estilos css debemos usar el import
como ya sabemos los archivos de los componentes deben de estar en la misma carpeta para ser mas organizados,

por lo que el css deberá de estar en el misma carpeta donde está el archivo actual

    import './nombre_archivo.css' 