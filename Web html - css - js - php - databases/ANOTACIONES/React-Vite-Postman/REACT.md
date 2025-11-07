
        VENTAJAS

* COMUNIDAD
* MUCHAS ACTUALIZACIONES
* ES MUY USADO
* ES UNA LIBRERIA DE CODIGO LIBRE PARA CONSTRUIR INTERFACES
* USA TODO EN UN SOLO ARCHIVO (HTML CSS JS)
* USADO PARA DISPOSITIVOS MOBILES
* ES UNA LIBRERIA BASADA EN COMPONENTES LOS CUALES SE PUEDEN REUTILIZAR en diferentes codigos

Es una libreria de Js para construir interfaces la cual es de codigo libre (Frontend)

tiene un DOM virtual para compararlo con el remoto y optimizar procesos y saber que se reemplazará
REACT NATIVE _ Para dispositivos mobiles


JSX: Es una extensión de Js la cual permite escribir elementos similares a los de HTML en Código Js 
en un codigo html normal podemos insertar en el formato js directamente el cual nos permite ahorrar codigo, ejemplo:

Solo JS

const Elemento = document.createElement("div");
element.innerText = "Hello, World";

Con JSX resumimos:

const Elemento = <div>Hello, world</div>;


pero tambien permite el uso de expresiones JS dentro de codigo HTML
el cual debe estar encerrado dentro de llaves {}

const Usuario = "Joshua Ortiz";
const elemento = <div>Hello, {Usuario}</div>;




## COMPONENTES REACT

Los componentes son la parte principal de cualquier aplicacion REACT los cuales tienen una funcion que puedes ser reutilizado después 


## QUE ES UN HOOK

Son funciones las cuales nos permiten "enganchar o traer" valores, enviar y almacenar datos 

Los Hook no funcionana dentro de las clases, te permite usar reacr sin clases

useState = Es un hook de react el cual nos permite ponrer una variable al estado de un componente ejemplo :
        antes de todo debemos importar el hook useStatede la libreria de react

import {useState} from 'react'

        const [count, setCount] = useState(0)   
        constante con nombre count es un contador + , + la funcion de contar + hook
        
        cada vez que se le da click el contara cada una 
        <button onclick="{() => setCount (count + 1)}">
                contador {count}
                y el que mostrará la cantidad de clicks será la misma variable
        </button>


Esos datos los almacenamos mediante una funcion o hook UseStake, luego para poder mostrarlos es por medio de una variable que pertenece al mismo hook


## CICLO DE VIDA DE UN COMPONENTE 

Antes de la version 16 de React el ciclo de vida de un componente se divide en 3 partes de ciclo de vida 


### Montaje

Aqui se realiza la construccion del componente

Tambien se realizara la parte de render
componentDidMount

### Actualizacion

Aqui se actualiza el componente

Tambien se realizara la parte de render

componentDidUpdate

### Desmontaje

componentDidUnmount


## useEffect

Hay que saber que el efecto o funcion primaria de react es modificar o mostrar el DOM (interdaz)

el useEddect entra en los efectos secundarios de consumir una informacion (un appi) que se hace con el hook useEffect el cual se usa para muchisimas cosas aparte de consumir un appi 

Este nos permite crear un puente entre react y el navegador
Tiene este nombre ya que realizamos un efecto secundario, ya que react hará algo distinto que solamente mostrar codigo html.


## useContext

Este hook es una herramienta la cual nos permite compartir informacion entre componentes de una manera mas directa y sencilla entre componentes, con este hook los componentes pueden acceder a datos y funciones desde un contexto compartido sin tener que pasarle propiedades (props) de manera manual a traves de varios niveles de componen tes (padres e hijos)
