# REACT

React es una biblioteca de Js construida para poder crear interfaces de usuario en cualquier sitio y tengamos en cuenta que React es declarativo entonces nos permite crear estas interfaces de forma mucho mas sencilla y está basado en componentes porque eso es componenetes se reutilizan varias veces y eso nos hace mas sencillo todo ya que es como si nosotros lo unieramos como piezas.

Tengamos en cuenta que React es Universal, osea se puede ejecutar tanto en el cliente como en el servidor para entenderlo es que en vez de tener codigo en el servidor y en el cliente osea en dos partes, maás ien lo tenemos todo en uno solo entonces escribimos nuestra aplicacion en nuestra aplicacion y su enfoque es tratar de simplificar el front-end y tratar de ser mas seguro.


## Porque React
* Es el framework mas demandado en cuanto a trabajo y proyectos.
* Tambien podras aprender react Native que son aplicaciones enfocadas para mobiles.
* Apoyo y uso en la comunidad.
* Bases solidos para poder aprender nuevas tecnologias
* Futuro prometedor solamente sube el consumo y uso
* Tiene un Api demasiado estable.
* Comunidad muy Grande.

Ejemplo de Js migrandolo a React:


Primero tenemos codigo html para un boton:
```html

<button> Like </button>

<style>
    button{
        background: #09f;
        color: fff;
        border: 0;
        padding: 4px 8px;
        font-size: 18px;
        cursor: pointer;
    }

    body{
        background: #222;
    }
</style>
```


Codigo Js para este boton en codigo imperativo como ejemplo:

```js

// Tener datos del boton
const Boton = document.querySelector('button');

Si queremos obtener los datos de este boton debemos llevarnos un id o algun dato:
<button data="123"> Like </button>

// Que al hacer click se realice algo con este boton.

Boton.addEventListener('click', function(){

    // Primero vamos a recuperar el Id del atributo HTML
    const Id = Boton.getAtribute(''data)

    //Teniendo esto en cuenta ya podremos llamara a algun servicio para asi poder actualizar si es que tiene like o no y sera con un 

    // toggleLike(id)

    // Creo una condicional por si es que en la lista de clase el contiene una que sea 'Liked'
    if(Boton.classList.contains('Like')){
        Boton.classList.remove('Liked')
        Boton.innerText = 'Me Gusta'
    }
    
    else{
        Boton.classList.add('Liked')
        Boton.innerText'Quitar me Gusta'
    }
    
})

```


Ahora como podemos ver en react tambien podremos modificara la UI para eso es que nos sirve como tal, entonces crearemos un IF


## Primeros Pasos.

Primero debemos empezar desde una raiz entonces creamos un Root y le decimos donde tenemos que crearlo.

```js
const root = ReactDOM.createRoot(appDomElement)


// ahora le diremos que en root renderice lo que deseemos:
root.render('Hola Mundo desde React')
```

Tengamos en cuenta que en react lo que vamos a generar será un arbol como tal donde tendremos nuestos elementos.

Donde tendremos nuestra UI con nuestra cantidad de componentes y tengamos en cuenta que en react no se  renderiza el HTML sino lo que se renderiza como tal tenemos que crear el elemento para asi poderle decir a react que queremos renderizar en concreto, EN REACT SE RENDERIZAN ELEMENTOS, todo esto se hace por seguridad.


Entonces para renderizar primero debemos de crear el elemento como tal,

### Uso 
Para empezarlo a usar primero tendremos que importarlo

```js
import React from "http://esm.sh/react@18.2.0"
import ReactDOM from "http://esm.sh/react@18.2.0/client"
```

Para crear el elemento entonces haremos: lo siguiente:

```js

    // Como parametros recibirá (primero el elemento que queremos crear en este caso (button) + , + luego tendremos que colocar los atibutos o propiedades que tendra este elemento (null) + Y al final podremos lo que envuelve este elemento o el texto que tendra)
const Button = React.createElement( 'button', { "data": 123 }, 'Me Gusta');


    // Aqui ya se esta renderizando nuestro elemento
root.render(Button)
```

En reat siempre solo se podra renderizar una cosa a la vez, y bueno ahora si queremos renderizar por ejemplo 3 botones como lo podremos hacer:

### Codigo original.

```js

import React from "http://esm.sh/react@18.2.0"
import ReactDOM from "http://esm.sh/react@18.2.0/client"

//obtener el Div general

const appDomElement = document.getElementById('app')
const root = ReactDOM.createRoot(appDomElement)

const div = React.createElement('div', { "data" : 123 }, 'Boton_1' )

const Button_1 = React.createElement( 'button', { "data": 123 }, 'Button_1');
const Button_2 = React.createElement( 'button', { "data": 324 }, 'Button_2');
const Button_3 = React.createElement( 'button', { "data": 456 }, 'Button_3');


// ahora le diremos que en root renderice lo que deseemos:
root.render(Button_1)


```
Entonces para estos casos React propiamente tiene un componente y es como una forma para poder envolver cosas con otras cosas vacias por decirlo asi para asi no renderizar nada y es un React.Frragment 

### Codigo Para 3 Botones


```js

import React from "http://esm.sh/react@18.2.0"
import ReactDOM from "http://esm.sh/react@18.2.0/client"



const appDomElement = document.getElementById('app')
const root = ReactDOM.createRoot(appDomElement)


const Button_1 = React.createElement( 'button', { "data": 123 }, 'Button_1');
const Button_2 = React.createElement( 'button', { "data": 324 }, 'Button_2');
const Button_3 = React.createElement( 'button', { "data": 456 }, 'Button_3');


// Vamos a modificar esta linea
const app = React.createElement(React.Fragment, null, [Boton_1, Boton_2, Boton_3] )


root.render(app)

// Para hacer el codigo inclusive mas limpio entonces:

const newElement = React.createElement

const Button_1 = newElement( 'button', { "data": 123 }, 'Button_1');
const Button_2 = newElement( 'button', { "data": 324 }, 'Button_2');
const Button_3 = newElement( 'button', { "data": 456 }, 'Button_3');


const app = newElement(React.Fragment, null, [Boton_1, Boton_2, Boton_3] )

```

## Para que es JS?

Como habiamos comentado a el principio tenemos que saber que es declarativo y para esto se usa este formato que es una extencion de aimscript basada en xml y lo que esto nos va a permitir sera crear todo de una forma muchisimo mas declarativa y no tener un codigo tan complicado.

Bueno en pocas palabras es como un lenguage o una extencion de Js que la escribes como un XML que es una sintaxis como tal en donde describes la interfaz a usar

### Quien se encarga de hacer las transformaciones.

Lo que sue sucede es que se transpila el codigo, osea se traduce a JS y lo hacen algunas herramientas, unas de las mas usadas es SWC.


## Expresiones en JSX.

Las expresiones se ponene entre llaves y esto lo que dice es que vamos a evaluar alguna expresion osea operaciones que nos devuelvan alguna valor y no declaraciones como tal "Explicar mas y mejor"


## Entorno de Trabajo.
Vamos a usar un empaquetador de aplicaciones web y la mejor opcion es usar Vite:

  * Primero vamos a acceder a la carpeta donde necesitamos crear el proyecto
  * Comando: npm create vite@latest 
  * Añadir el nombre del proyecto y el paquete:  Project name: Primer_React // Package name:primer_react.
  * Escoger la compilacion de Js.

## Estructura del proyecto.






profile.php?id=100092573247578&sk=reels_tab

/reel/
136520506097203
256921650256241
653925866233906
805147614608128
2272246319626125
270269782173751
987755448921340
