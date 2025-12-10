# Tipos de datos en TypeScript.

Todos los datos en JavaScript estan incluidos pero acá tenemos más, hay que tener en cuenta que los datos se dividen en Primitivos y Compuestos (o conocidos como objetos).

En los tipos de datos primitivos encontramos los mas comunes como:

    * Strings
    * Number
    * Boolean
    * Symbol


En los tipos de datos compuestos ya podremos usar:

    * Objetos literarios.
    * Funciones.
    * Clases.
    * Arreglos.
    * Mas.

## Datos Primitivos

Mostraremos como lucen cada uno emezando desde los mas sencillos.

### String:
Estos datos se ven de las siguientes formas:
    "Johua Ortiz"
    'Johua Ortiz'


### Numericos: 
Estos guardan todos los tipos de numeros:

    PI = 3.141592
    Salario = 1500.01
    age = 30

### Booleanos: 
Usaremos los de siempre:
        isActive: True
        keepAlive: False

    Pero tenemos estos valores especiales que tammbien podrian entrar en esta categoria como:
        Null: es cuando nosotros de forma especifica que algo es nulo.
        Undefined: es cucando no se le a asignado un valor de forma directa.


### Symbol: 
Es considerado como un valor primitivo y nos sirve para ocasiones en donde tenemos dentro de un objeto una propiedad que se garantice como única y se usa para que esta propiedad tenga un valor en la memoria diferente con cualquier otro.

    sym = Symbol()
    sym2 = symbol('myProperty')

## Datos Compuestos

### Objeto Literal:
Los objetos son como un diccionario llamado objeto los cuales tienen variedad de valores, donde internamente podemos agregar mas datos de los que ya nombramos anteriormente ya que como son objetos pueden tener sus propias caracteristicas y con ellas hacer diferentes acciones y ser llamados (instancias) en diferentes partes del codigo para asi poderlos usar.

    person = {
        Name = "Joshua",
        Surname = 'Ortiz',
        Age = 21,
        heigh = 1.78
    }

### Clases:

Esta clase como podemos ver no nos dice que valores tienen sus propiedades solamente se llaman

    Class Person {
        name;
        age;
    }


### Funciones:

Son acciones que realizaremos con un fin, ya sea crear un objeto, guardar algo, realizar un ciclo a algo, lo que sea, asi sea una simple suma:

    function sayHello (Parametros para usar en la operacion) {
        Proceso que haremos con los parametros
    }

Funcion de tipo flecha

    const sayHello = (Parametros) => {
        Procesamiento
    }


## Tipos de datos propios de Ts

* Nosotros podemos crear nuevos tipos propiamente
* Podemos crear interfaces
* Genericos
* Tuplas: son pares de valores.
* Tambien mas que tuplas.

