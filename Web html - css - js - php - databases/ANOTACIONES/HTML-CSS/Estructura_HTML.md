# Estructura

HTML tiene una estructura (sintaxis) fácil y clara:

<p> Para los parrafos
<nav> Para las barras de navegacion
<header> Para el encabezado del sitio web, aqui proporcionamos cierta informacion para que funcione nuestro sitio web. (titulo de la pagina - Idioma en el que se realizo - Aqui se importan archivos externos - Icono de la pagina)
<body> Se pone toda la informacion o contenido la cual verán los usuarios 
<main> Para todo lo que es el contenido principal
<footer> Para el pie de pagina
<section> Para agrupar las secciones de la pagina
<aside> Barra lateral al lado derecho
<div> se usad practicamente para agrupar muchas cosas por individual
<span> es una etiqueta que no sirve para mucho pero tiene ua característica peculiar lo cual es que si necesitamos dividir un codigo dentro de un mismo titulo o algun texto.


<html> Esto tiene que cubrir todo el proyecto, ya que nos muestra todo lo que abra en la pagina


## Formularios.

Vamos a usar varias etiquetas para poder crear el formulario:

1) Primero donde ira todo el formulario se pondra la etiqueta <form> y todos los datos que esten adentro se recolectaran por este formulario
2) Para el titulo pondremos las siguientes etiquetas: primero <fieldset><legend> Y aqui dentro escribimos el texto de nuestro titulo </legend>
3) Y seguiremos poniendo mas campos ya que el fieldset nos sirve para agrupar todos los campos del formulario</fieldset> El legend se usa para que los usuarios puedan saber para que es el formulario.
4) El titulo tambien puede ser directamente un h# el que se desee.
5) Luego van los diferentes campos con sus respectivos. titulos y campos
    * Los titulos son: <label>
    * Los campos son: <input> los inputs son los campos donde el usuario va  a digitar o ingresar datos los cuales seran almacenados y tenemos que saber que tipo de dato necesitamos capturar para asi poderlo procesar y guardar.

## Tipos de Inputs.

Estos son todos los tipos de inputs que tenemos a nuestra disposicion:


### 1. Inputs de texto y números
   

text → Campo de texto simple.

password → Campo de contraseña (oculta los caracteres).

email → Campo para correos electrónicos (valida formato).

url → Campo para URLs (valida formato).

search → Campo de búsqueda.

tel → Campo para números de teléfono (no impone validación).

number → Campo para ingresar números (con controles de incremento/decremento).

### 2. Inputs de selección y archivos

checkbox → Casilla de verificación (permitiendo selección múltiple).

radio → Botón de opción (solo una selección por grupo).

file → Permite seleccionar y cargar archivos.

range → Control deslizante para seleccionar valores en un rango.

color → Selector de color.

### 3. Inputs de fecha y hora

date → Selector de fecha (YYYY-MM-DD).

datetime-local → Fecha y hora sin zona horaria.

month → Selector de mes y año.

week → Selector de semana y año.

time → Selector de hora.

### 4. Inputs ocultos y especiales

hidden → Campo oculto (no visible para el usuario).

button → Botón sin funcionalidad predeterminada.

submit → Botón para enviar el formulario.

reset → Botón para restablecer el formulario.

image → Botón de envío con imagen en lugar de texto.


Tambien existen los textarea los cuales se usan para cuando necesitamos que el usuario digite ,ucho texto como un mensaje largo entonces usamos esta etiqueta.


### Boton


Los botones en el formulario pueden tener varios formatos, ya sean mediante la etiqueta input con el type = "submit" o con la propia etiqueta.
Otra forma también es usar la propia etiqueta de button pero a diferencia del input esta tiene etiqueta de cierre

