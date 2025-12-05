# Estilos para diseñar en CSS.

### ¿Como escribir codigo CSS?

Las formas mas comunes para hacerlo son:

* BEM
* Utility First
* Modulo

## BEM.

Significa Bloques, elementos, modificadores, y se basa en crear bloques o partes en el codigo donde tendras una clase principal y luego describes cada elemento dentro de él, por ejemplo:

```css
.Noticia{}
.Noticia__Titulo{}
.Noticia__Imagen{}
.Notica__Boton{}


```

Para cuando alguna de estas clases sufran de una modificacion debido a un evento o alguna accion entonces usaremos la siguiente sintaxis:

```css
.Noticia__Boton--activo{}
```

## Utility First.

En esta, se crean clases con una sola propiedad, la cual describe lo que hará, por ejemplo si queremos centrar un texto:



## Modulos.

Se usa para definir un elemento principal y luego cada uno de los elementos html, como por ejemplo un contenedor, luego a esa mismo contenedor seleccionar la imagen, los enlaces o alguna etiqueta en especifico.