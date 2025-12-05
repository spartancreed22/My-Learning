# Principios Básicos del CSS

## Introducción

CSS (Cascading Style Sheets) es el lenguaje utilizado para definir la presentación visual de documentos HTML. Este documento presenta las propiedades fundamentales organizadas por categorías.

---

## 1. Propiedades de Texto

### `color`

**Definición técnica:** Establece el color del texto mediante valores hexadecimales, RGB, RGBA, HSL o nombres predefinidos.

**Explicación simple:** Define de qué color quieres que aparezca tu texto.

**Ejemplo:**
```css
p {
  color: #3498db; /* Azul */
}

h1 {
  color: rgb(255, 0, 0); /* Rojo */
}
```

### `font-size`

**Definición técnica:** Define el tamaño de la fuente usando unidades absolutas (px, pt) o relativas (em, rem, %).

**Explicación simple:** Controla qué tan grande o pequeño se ve el texto.

**Ejemplo:**
```css
h1 {
  font-size: 32px;
}

p {
  font-size: 1.2rem;
}
```

### `font-family`

**Definición técnica:** Especifica la familia tipográfica que se aplicará al texto, con opciones de respaldo (fallback fonts).

**Explicación simple:** Elige el tipo de letra que quieres usar.

**Ejemplo:**
```css
body {
  font-family: 'Arial', 'Helvetica', sans-serif;
}

h1 {
  font-family: 'Georgia', serif;
}
```

### `font-weight`

**Definición técnica:** Controla el grosor de los caracteres mediante valores numéricos (100-900) o palabras clave.

**Explicación simple:** Hace que tu texto sea más grueso (negrita) o más delgado.

**Ejemplo:**
```css
strong {
  font-weight: bold; /* o 700 */
}

p {
  font-weight: 400; /* Normal */
}
```

### `font-style`

**Definición técnica:** Define el estilo de la fuente, principalmente para aplicar cursiva u oblicua.

**Explicación simple:** Inclina el texto como en cursiva.

**Ejemplo:**
```css
em {
  font-style: italic;
}

cite {
  font-style: oblique;
}
```

### `text-align`

**Definición técnica:** Establece la alineación horizontal del contenido de texto dentro de su contenedor.

**Explicación simple:** Alinea tu texto a la izquierda, derecha, centro o justificado.

**Ejemplo:**
```css
h1 {
  text-align: center;
}

p {
  text-align: justify;
}
```

### `text-decoration`

**Definición técnica:** Añade líneas decorativas al texto (subrayado, tachado, overline).

**Explicación simple:** Agrega líneas sobre, bajo o atravesando el texto.

**Ejemplo:**
```css
a {
  text-decoration: underline;
}

del {
  text-decoration: line-through;
}
```

### `text-transform`

**Definición técnica:** Controla la capitalización del texto sin modificar el contenido HTML.

**Explicación simple:** Convierte el texto a mayúsculas, minúsculas o capitaliza cada palabra.

**Ejemplo:**
```css
h2 {
  text-transform: uppercase;
}

.titulo {
  text-transform: capitalize;
}
```

### `line-height`

**Definición técnica:** Define la altura de la línea de texto, controlando el espacio vertical entre líneas.

**Explicación simple:** Ajusta el espacio entre líneas de texto para mejor legibilidad.

**Ejemplo:**
```css
p {
  line-height: 1.6;
}

h1 {
  line-height: 1.2;
}
```

### `letter-spacing`

**Definición técnica:** Modifica el espaciado horizontal entre caracteres individuales.

**Explicación simple:** Aumenta o reduce el espacio entre las letras.

**Ejemplo:**
```css
h1 {
  letter-spacing: 2px;
}

.espaciado {
  letter-spacing: 0.1em;
}
```

---

## 2. Propiedades del Box Model

### `width` y `height`

**Definición técnica:** Establecen las dimensiones del contenido de un elemento, excluyendo padding, border y margin.

**Explicación simple:** Define el ancho y alto de un elemento.

**Ejemplo:**
```css
.caja {
  width: 300px;
  height: 200px;
}

.responsive {
  width: 80%;
  height: auto;
}
```

### `padding` (Espaciado)

**Definición técnica:** Genera espacio interno entre el contenido del elemento y su borde (border).

**Explicación simple:** Crea espacio dentro de la caja, alrededor del contenido.

**Ejemplo:**
```css
.caja {
  padding: 20px; /* Todos los lados */
}

.custom {
  padding: 10px 20px 15px 5px; /* arriba, derecha, abajo, izquierda */
}
```

### `margin` (Margenes)

**Definición técnica:** Define el espacio exterior alrededor del elemento, separándolo de otros elementos adyacentes.

**Explicación simple:** Crea espacio fuera de la caja, alejándola de otros elementos.

**Ejemplo:**
```css
.seccion {
  margin: 30px auto; /* arriba/abajo: 30px, izquierda/derecha: centrado */
}

.espaciado {
  margin-bottom: 20px;
}
```

### `border` (Bordes)

**Definición técnica:** Establece el borde del elemento, definiendo grosor, estilo y color.

**Explicación simple:** Dibuja un contorno alrededor de tu elemento.

**Ejemplo:**
```css
.caja {
  border: 2px solid #333;
}

.tarjeta {
  border-top: 3px dashed red;
  border-radius: 10px; /* Esquinas redondeadas */
}
```

### `box-sizing`

**Definición técnica:** Define cómo se calculan las dimensiones totales del elemento (content-box vs border-box).

**Explicación simple:** Controla si padding y border se incluyen en el ancho/alto total.

**Ejemplo:**
```css
* {
  box-sizing: border-box; /* Incluye padding y border en el tamaño */
}

.tradicional {
  box-sizing: content-box; /* Solo el contenido */
}
```

---

## 3. Propiedades de Fondo

### `background-color`

**Definición técnica:** Establece el color de fondo del área de contenido y padding del elemento.

**Explicación simple:** Pinta el fondo de tu elemento con un color.

**Ejemplo:**
```css
body {
  background-color: #f5f5f5;
}

.destacado {
  background-color: rgba(255, 215, 0, 0.3);
}
```

### `background-image`

**Definición técnica:** Define una o más imágenes como fondo del elemento mediante la función url().

**Explicación simple:** Coloca una imagen como fondo de tu elemento.

**Ejemplo:**
```css
.hero {
  background-image: url('imagen-fondo.jpg');
}

.patron {
  background-image: linear-gradient(to right, #667eea, #764ba2);
}
```

### `background-size`

**Definición técnica:** Controla las dimensiones de la imagen de fondo (cover, contain, o valores específicos).

**Explicación simple:** Ajusta el tamaño de la imagen de fondo.

**Ejemplo:**
```css
.banner {
  background-image: url('banner.jpg');
  background-size: cover; /* Cubre todo el área */
}

.icono {
  background-size: 50px 50px;
}
```

### `background-position`

**Definición técnica:** Define la posición inicial de la imagen de fondo dentro del elemento.

**Explicación simple:** Mueve la imagen de fondo a una posición específica.

**Ejemplo:**
```css
.hero {
  background-position: center center;
}

.esquina {
  background-position: top right;
}
```

### `background-repeat`

**Definición técnica:** Controla si y cómo se repite la imagen de fondo en el eje horizontal y vertical.

**Explicación simple:** Decide si la imagen de fondo se repite o aparece solo una vez.

**Ejemplo:**
```css
.patron {
  background-repeat: repeat;
}

.logo {
  background-repeat: no-repeat;
}
```

---

## 4. Propiedades de Display y Posicionamiento

### `display`

**Definición técnica:** Define el tipo de caja de renderizado que genera el elemento (block, inline, flex, grid, etc.).

**Explicación simple:** Controla cómo se comporta el elemento en la página (como bloque o en línea).

**Ejemplo:**
```css
.bloque {
  display: block; /* Ocupa todo el ancho */
}

.en-linea {
  display: inline; /* Solo ocupa lo necesario */
}

.flex-container {
  display: flex;
}
```

### `position`

**Definición técnica:** Establece el método de posicionamiento del elemento (static, relative, absolute, fixed, sticky).

**Explicación simple:** Define cómo y dónde se coloca el elemento en la página.

**Ejemplo:**
```css
.relativo {
  position: relative;
  top: 10px;
  left: 20px;
}

.fijo {
  position: fixed;
  top: 0;
  right: 0;
}
```

### `top`, `right`, `bottom`, `left`

**Definición técnica:** Definen el desplazamiento del elemento desde su posición de referencia cuando position no es static.

**Explicación simple:** Mueven el elemento en diferentes direcciones.

**Ejemplo:**
```css
.posicionado {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

### `z-index`

**Definición técnica:** Controla el orden de apilamiento en el eje Z de elementos posicionados.

**Explicación simple:** Define qué elementos aparecen encima de otros.

**Ejemplo:**
```css
.atras {
  position: relative;
  z-index: 1;
}

.adelante {
  position: relative;
  z-index: 10;
}
```

### `float`

**Definición técnica:** Saca el elemento del flujo normal y lo posiciona a la izquierda o derecha de su contenedor.

**Explicación simple:** Hace que el elemento "flote" a un lado y el texto lo rodee.

**Ejemplo:**
```css
.imagen-flotante {
  float: left;
  margin-right: 20px;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

### `clear`

**Definición técnica:** Especifica si un elemento puede estar al lado de elementos flotantes o debe moverse debajo de ellos.

**Explicación simple:** Evita que elementos se coloquen junto a elementos flotantes.

**Ejemplo:**
```css
.despues-de-float {
  clear: both;
}
```

---

## 5. Propiedades de Flexbox

### `display: flex`

**Definición técnica:** Activa el contexto de formato Flexbox, convirtiendo al elemento en un contenedor flexible.

**Explicación simple:** Activa un sistema moderno para organizar elementos en filas o columnas.

**Ejemplo:**
```css
.contenedor {
  display: flex;
}
```

### `flex-direction`

**Definición técnica:** Define la dirección del eje principal del contenedor flex (row, column, row-reverse, column-reverse).

**Explicación simple:** Decide si los elementos se ordenan en fila o columna.

**Ejemplo:**
```css
.horizontal {
  display: flex;
  flex-direction: row;
}

.vertical {
  display: flex;
  flex-direction: column;
}
```

### `justify-content`

**Definición técnica:** Alinea los elementos flex a lo largo del eje principal del contenedor.

**Explicación simple:** Distribuye los elementos horizontalmente (en filas) o verticalmente (en columnas).

**Ejemplo:**
```css
.centrado {
  display: flex;
  justify-content: center;
}

.espaciado {
  display: flex;
  justify-content: space-between;
}
```

### `align-items`

**Definición técnica:** Alinea los elementos flex a lo largo del eje transversal del contenedor.

**Explicación simple:** Alinea los elementos en la dirección perpendicular al eje principal.

**Ejemplo:**
```css
.centrado-vertical {
  display: flex;
  align-items: center;
}

.estirado {
  display: flex;
  align-items: stretch;
}
```

### `flex-wrap`

**Definición técnica:** Controla si los elementos flex se fuerzan en una sola línea o pueden fluir en múltiples líneas.

**Explicación simple:** Permite que los elementos "salten" a la siguiente línea si no caben.

**Ejemplo:**
```css
.envolvente {
  display: flex;
  flex-wrap: wrap;
}
```

### `gap`

**Definición técnica:** Define el espacio entre elementos flex o grid sin usar margins.

**Explicación simple:** Crea espacio automático entre elementos.

**Ejemplo:**
```css
.con-espacios {
  display: flex;
  gap: 20px;
}
```

---------------------------------------------
## Muy Importante
## 6. Propiedades de Grid

### `display: grid`

**Definición técnica:** Activa el contexto de formato CSS Grid, convirtiendo al elemento en un contenedor de cuadrícula.

**Explicación simple:** Activa un sistema de cuadrícula para organizar elementos en filas y columnas.

**Ejemplo:**
```css
.cuadricula {
  display: grid;
}
```

### `grid-template-columns` y `grid-template-rows`

**Definición técnica:** Define el número y tamaño de columnas y filas en el grid container.

**Explicación simple:** Crea las columnas y filas de tu cuadrícula.

**Ejemplo:**
```css
.galeria {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 columnas iguales */
  grid-template-rows: 200px auto;
}

.responsive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

### `grid-gap` / `gap`

**Definición técnica:** Define el espacio entre columnas y filas del grid.

**Explicación simple:** Crea espacios entre las celdas de la cuadrícula.

**Ejemplo:**
```css
.cuadricula {
  display: grid;
  gap: 20px; /* Espacio entre todas las celdas */
}

.custom-gap {
  display: grid;
  gap: 10px 30px; /* filas columnas */
}
```

---

## 7. Propiedades de Transformación y Transición

### `transform`

**Definición técnica:** Aplica transformaciones 2D o 3D al elemento (translate, rotate, scale, skew).

**Explicación simple:** Mueve, rota, escala o inclina elementos sin alterar el flujo del documento.

**Ejemplo:**
```css
.rotado {
  transform: rotate(45deg);
}

.escalado {
  transform: scale(1.2);
}

.movido {
  transform: translate(50px, 100px);
}
```

### `transition`

**Definición técnica:** Define la animación de propiedades CSS cuando cambian de valor, especificando duración y función de tiempo.

**Explicación simple:** Crea animaciones suaves cuando algo cambia.

**Ejemplo:**
```css
.boton {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.boton:hover {
  background-color: darkblue;
}
```

### `animation`

**Definición técnica:** Aplica animaciones definidas con @keyframes a elementos, controlando duración, iteraciones y dirección.

**Explicación simple:** Crea animaciones complejas que se repiten automáticamente.

**Ejemplo:**
```css
@keyframes deslizar {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

.animado {
  animation: deslizar 2s infinite;
}
```

---

## 8. Propiedades de Visibilidad

### `opacity`

**Definición técnica:** Controla el nivel de transparencia del elemento, desde 0 (invisible) hasta 1 (opaco).

**Explicación simple:** Hace que un elemento sea transparente.

**Ejemplo:**
```css
.semitransparente {
  opacity: 0.5;
}

.invisible {
  opacity: 0;
}
```

### `visibility`

**Definición técnica:** Controla si el elemento es visible, manteniendo su espacio en el layout.

**Explicación simple:** Esconde un elemento pero deja su espacio vacío.

**Ejemplo:**
```css
.oculto {
  visibility: hidden;
}

.visible {
  visibility: visible;
}
```

### `overflow`

**Definición técnica:** Define el comportamiento cuando el contenido excede las dimensiones del contenedor.

**Explicación simple:** Controla qué pasa cuando el contenido es más grande que su caja.

**Ejemplo:**
```css
.scroll {
  width: 300px;
  height: 200px;
  overflow: auto; /* Agrega scroll si es necesario */
}

.oculto {
  overflow: hidden; /* Corta el contenido extra */
}
```

---

## 9. Propiedades de Sombras

### `box-shadow`

**Definición técnica:** Añade una o más sombras al elemento, definiendo desplazamiento, difuminado y color.

**Explicación simple:** Crea una sombra alrededor de la caja del elemento.

**Ejemplo:**
```css
.tarjeta {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.elevada {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
```

### `text-shadow`

**Definición técnica:** Aplica sombras al texto, con desplazamiento horizontal, vertical, difuminado y color.

**Explicación simple:** Agrega sombra al texto para darle profundidad.

**Ejemplo:**
```css
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.relieve {
  text-shadow: 1px 1px 0px white;
}
```

---

## 10. Propiedades de Lista

### `list-style-type`

**Definición técnica:** Define el estilo del marcador de lista (disc, circle, square, decimal, etc.).

**Explicación simple:** Cambia el símbolo o número que aparece en las listas.

**Ejemplo:**
```css
ul {
  list-style-type: square;
}

ol {
  list-style-type: upper-roman;
}
```

### `list-style-position`

**Definición técnica:** Controla si el marcador de lista aparece dentro o fuera del flujo del contenido.

**Explicación simple:** Decide si el marcador está dentro o fuera del texto.

**Ejemplo:**
```css
ul {
  list-style-position: inside;
}
```

---

## 11. Propiedades de Cursor y Interacción

### `cursor`

**Definición técnica:** Define el tipo de cursor que aparece cuando el puntero está sobre el elemento.

**Explicación simple:** Cambia la forma del cursor del mouse.

**Ejemplo:**
```css
.clickeable {
  cursor: pointer;
}

.ayuda {
  cursor: help;
}

.cargando {
  cursor: wait;
}
```

### `pointer-events`

**Definición técnica:** Controla si el elemento puede ser objetivo de eventos del puntero.

**Explicación simple:** Desactiva la interacción con el mouse en un elemento.

**Ejemplo:**
```css
.no-clickeable {
  pointer-events: none;
}
```

---

## 12. Propiedades Responsive

### Media Queries

**Definición técnica:** Aplican estilos condicionalmente basados en características del dispositivo como ancho, altura u orientación.

**Explicación simple:** Cambian los estilos según el tamaño de la pantalla.

**Ejemplo:**
```css
/* Estilos para pantallas pequeñas */
@media (max-width: 768px) {
  .contenedor {
    flex-direction: column;
  }
}

/* Estilos para pantallas grandes */
@media (min-width: 1200px) {
  .contenedor {
    max-width: 1140px;
  }
}
```

---

## Conclusión

CSS ofrece un conjunto extenso de propiedades que permiten controlar completamente la presentación visual de páginas web. Dominar estas propiedades básicas es fundamental para crear interfaces atractivas, funcionales y responsive. La práctica constante y la experimentación son clave para convertirse en un experto en CSS.