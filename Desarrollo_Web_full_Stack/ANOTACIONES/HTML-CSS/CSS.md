# CSS
## ROL

El rol de css es encargarse de colores - tamaños - espacios - animaciones, mientras que con html creamos una estructura a la pagina, con css le damos una forma y diseño a esta.

### ¿Qué es CSS?

son hojas de estilos en cascada (osea se ejecuta linea por linea) los cuales nos permitiran dar a tu código html un diseño único y especial en las lineas de codigo más eficientes.

Funciones:

    * Tamaños y tipos de fuentes.
    * Colores.
    * Espacios.
    * Margenes.
    * Distribución de Contenido de la página.
    * Adaptar diseños a diferentes dispositivos (responsive - diseños responsivos).
    * Animaciones y mucho más.


## Anatomía de CSS (sintaxis)

Primero tenemos un selector el cual nos indicara a que le estamos aplicando los estilos.
El selector es una etiqueta de HTML la cual estamos modificando.
luego de este selector podremos las llaves {todo lo que se encuentre dentro de estas llaves serán los estilos que se le aplicaran a la etiqueta escogida}.

dentro de estas llaves irán los estilos los cuales pueden ser de distintos tipos y valores, llamados llave y valor, primero tendremos la propiedad  + : + el valor que le queramos dar.


### Ejemplos:

   <style>

        h1{
            text-align: center;
            color: #fff;
            background-color: #000;
        }
        
        h2{
            text-align: center;
            color: #fff;
            background-color: #000;
        }
    </style>



## Selectores

los selectores son las propiedades que vamos a agregar a los estilos que estamos creando, estos vienen de las etiquetas html que vamos a modificar, tengamos en cuenta que si unimos dos, entonces sucedera que solo modificara el o las diferentes propiedades en especifico que cumpla esta funcion.

### Selector de elemento.
Con este selecionara el elemento mediante su etiqueta, como ya vimos con anterioridad:

p {
    color: blue;
}

### Selector de clases
Aqui no tomaremos las etiquetas html sino el name de la clase, con este codigo modificaremos todas las etiquetas que tengan el mismo identificador de la clase (tomara en cuenta el class:""), ejemplo

.cliente{
    color: blue;
}


### Selector de ID
Aqui no tomaremos las etiquetas html ni el name de la clase, aqui tomamos el id de la etiqueta usada o de la parte de codigo que queremos modificar, en cada página se pueden tener muchos ID´s diferentes, pero entre si no se pueden repetir ya que estos deben de ser unicos (tomara en cuenta el class:""), ejemplo:

#cliente {
    color: blue;
}



### Selector de Atributo
Este se encarga de tomar y seleccionar el elemento, basandose en algun atributo, el atributo son aquellas características que podemos agregarles a las etiquetas de html, ejemplo:

[src = "logo.png]{
    color: blue;
}


### Combinar los selectores
Al combinarlos hacemos más específica la selección de algun elemento de html, por ejemplo si combinamos una clase dentro de otra clase, por ejemplo: 

Seleccionar los elementos hijos, donde el padre sea otra clase o un id en especifico:

.cliente .nombre {
    color: blue;
}

.cliente h2 {
    width: 10px;
}

### Acceder a los elementos hijos.
Para poder acceder a los hijos de algun elemento usaremos la siguiente sintaxis:

.cliente > p{
    color: blue;
}

Como podemos notar, aqui tomara a todos los hijos de alguna etiqueta con la clase cliente


## Especificidad
Recordar que los estilos css se realizan en cascada, esto quiere decir que si reescribimos codigo, siempre se ejecutara el que se aplique en la última linea escrita con ese mismo selector.

Tengamos en cuenta que en css se le da prioridad a los formularios especificos, entre más especifico el selector, entonces se le aplicarán los estilos que definamos.

La especificidad es la valoracion que toma CSS para saber los valores que serán tomados en cuenta por el navegador para aplicarlos, de forma más sencilla entra más "Especifi"co sea el selector entonces más valor tendrá.

Es como el navegador nos va a mostrar el CSS de acuerdo a que tan especifico es el selector que hemos creado, tambien tengamos en cuenta que a pesar de que css es una hoja de estilos en cascada, no significara que esto pasara por encima de la especificidad ya que esto tiene más valor.

Pero si queremos pasar por encima de cualquier especificidad, entonces tendremos que poner dentro del selector un !important despues de la caracteristica o las caracteristicas que queramos dejar.

span{
    color: red!important;
}

## Custom Properties (Propiedades personalizadas)
Estas propiedades son son pseudo elementos, como tal son elementos que no existen en el codigo HTML pero en CSS se usan para por decirlo asi crear variables donde se pueden definir o guardar diferentes elementos.
Por decirlo asi podriamos usarlos para crear una paleta de colores en la webs.

Estos usaran una sintaxis diferente a las anteriores propiedades usadas en CSS.

ejemplo paleta de colores para la web:

:root{
    --color-primario: #FFC107;
    --Negro: #000000;
    --Blanco: #ffffff;
    --color-secundario: #0097A7;
    --Gris: #757575;
}

tengamos en cuenta que cada variable creada es cada palabra que vemos en el ejemplo que empieza con -- y como podemos ver le asignamos un valor como cualquier otra:

para llamarlas se usa de la siguiente forma:

color: var(--Negro);

Podremos guardar cualquier tipo de valor que necesitemos usar mucho o llamar en una futura propiedad.