# Principios Básicos del CSS

## Introducción

CSS (Cascading Style Sheets u Hojas de Estilo en Cascada) es el lenguaje utilizado para describir la presentación de documentos HTML. Permite controlar el diseño, los colores, las fuentes y prácticamente todos los aspectos visuales de una página web.

---

## 1. Propiedades de Texto

### color
Define el color del texto.
```css
p { color: #333; }
p { color: rgb(51, 51, 51); }
p { color: blue; }
```

### font-family
Especifica la familia de fuentes para el texto.
```css
body { font-family: Arial, sans-serif; }
h1 { font-family: 'Georgia', serif; }
```

### font-size
Define el tamaño de la fuente.
```css
p { font-size: 16px; }
h1 { font-size: 2em; }
span { font-size: 1.2rem; }
```

### font-weight
Controla el grosor de la fuente (normal, bold, 100-900).
```css
strong { font-weight: bold; }
p { font-weight: 400; }
h2 { font-weight: 700; }
```

### font-style
Define el estilo de la fuente (normal, italic, oblique).
```css
em { font-style: italic; }
```

### text-align
Alinea el texto horizontalmente (left, right, center, justify).
```css
h1 { text-align: center; }
p { text-align: justify; }
```

### text-decoration
Añade decoración al texto (underline, overline, line-through, none).
```css
a { text-decoration: none; }
del { text-decoration: line-through; }
```

### text-transform
Controla la capitalización del texto (uppercase, lowercase, capitalize).
```css
h1 { text-transform: uppercase; }
p { text-transform: capitalize; }
```

### line-height
Define la altura de línea (interlineado).
```css
p { line-height: 1.6; }
```

### letter-spacing
Controla el espacio entre caracteres.
```css
h1 { letter-spacing: 2px; }
```

### word-spacing
Controla el espacio entre palabras.
```css
p { word-spacing: 5px; }
```

### text-shadow
Añade sombra al texto.
```css
h1 { text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
```

---

## 2. Propiedades de Fondo

### background-color
Define el color de fondo de un elemento.
```css
body { background-color: #f0f0f0; }
div { background-color: rgba(255, 0, 0, 0.5); }
```

### background-image
Establece una imagen como fondo.
```css
header { background-image: url('imagen.jpg'); }
```

### background-repeat
Controla la repetición de la imagen de fondo (repeat, no-repeat, repeat-x, repeat-y).
```css
div { background-repeat: no-repeat; }
```

### background-position
Define la posición de la imagen de fondo.
```css
div { background-position: center center; }
section { background-position: top right; }
```

### background-size
Controla el tamaño de la imagen de fondo (cover, contain, valores específicos).
```css
header { background-size: cover; }
div { background-size: 100px 200px; }
```

### background-attachment
Define si el fondo se desplaza con el contenido (scroll, fixed, local).
```css
body { background-attachment: fixed; }
```

### background (shorthand)
Propiedad abreviada para todas las propiedades de fondo.
```css
div { background: #fff url('img.jpg') no-repeat center/cover; }
```

---

## 3. Modelo de Caja (Box Model)

### width y height
Definen el ancho y alto del contenido.
```css
div { width: 300px; }
section { height: 500px; }
img { width: 100%; }
```

### padding
Espacio interno entre el contenido y el borde.
```css
div { padding: 20px; }
p { padding: 10px 20px; } /* vertical horizontal */
article { padding: 10px 20px 30px 40px; } /* top right bottom left */
```

### margin
Espacio externo alrededor del elemento.
```css
p { margin: 20px; }
div { margin: 10px auto; } /* centrado horizontal */
section { margin: 10px 20px 30px 40px; }
```

### border
Define el borde del elemento.
```css
div { border: 2px solid #333; }
p { border: 1px dashed red; }
```

### border-width
Grosor del borde.
```css
div { border-width: 3px; }
```

### border-style
Estilo del borde (solid, dashed, dotted, double, groove, ridge, inset, outset, none).
```css
p { border-style: dashed; }
```

### border-color
Color del borde.
```css
div { border-color: blue; }
```

### border-radius
Redondea las esquinas del elemento.
```css
button { border-radius: 5px; }
img { border-radius: 50%; } /* círculo */
div { border-radius: 10px 20px 30px 40px; }
```

### box-sizing
Define cómo se calculan las dimensiones (content-box, border-box).
```css
* { box-sizing: border-box; } /* incluye padding y border en width/height */
```

### max-width, min-width, max-height, min-height
Dimensiones máximas y mínimas.
```css
img { max-width: 100%; }
div { min-height: 500px; }
```

---

## 4. Propiedades de Display y Posicionamiento

### display
Define el tipo de caja de renderizado (block, inline, inline-block, flex, grid, none).
```css
span { display: block; }
div { display: inline-block; }
nav { display: flex; }
section { display: none; }
```

### position
Define el método de posicionamiento (static, relative, absolute, fixed, sticky).
```css
div { position: relative; }
aside { position: absolute; top: 0; right: 0; }
header { position: fixed; }
nav { position: sticky; top: 0; }
```

### top, right, bottom, left
Desplazamientos cuando se usa posicionamiento.
```css
.elemento { 
  position: absolute; 
  top: 20px; 
  left: 50px; 
}
```

### z-index
Controla el orden de apilamiento en el eje Z.
```css
.modal { z-index: 1000; }
.overlay { z-index: 999; }
```

### float
Hace que el elemento flote a la izquierda o derecha.
```css
img { float: left; margin-right: 20px; }
```

### clear
Previene que elementos floten a los lados (left, right, both, none).
```css
footer { clear: both; }
```

### overflow
Controla qué sucede con el contenido que desborda (visible, hidden, scroll, auto).
```css
div { overflow: hidden; }
textarea { overflow: auto; }
```

### visibility
Controla la visibilidad del elemento (visible, hidden).
```css
.oculto { visibility: hidden; } /* ocupa espacio pero no se ve */
```

### opacity
Define la transparencia del elemento (0 a 1).
```css
img { opacity: 0.5; }
div:hover { opacity: 1; }
```

---

## 5. Flexbox

### display: flex
Activa el modo flexbox en un contenedor.
```css
.contenedor { display: flex; }
```

### flex-direction
Define la dirección principal (row, row-reverse, column, column-reverse).
```css
.contenedor { flex-direction: row; }
```

### justify-content
Alinea elementos en el eje principal (flex-start, flex-end, center, space-between, space-around, space-evenly).
```css
.contenedor { justify-content: center; }
```

### align-items
Alinea elementos en el eje transversal (flex-start, flex-end, center, baseline, stretch).
```css
.contenedor { align-items: center; }
```

### align-content
Alinea líneas múltiples en el eje transversal.
```css
.contenedor { align-content: space-between; }
```

### flex-wrap
Controla si los elementos se ajustan en múltiples líneas (nowrap, wrap, wrap-reverse).
```css
.contenedor { flex-wrap: wrap; }
```

### flex-grow
Define cuánto puede crecer un elemento flex.
```css
.item { flex-grow: 1; }
```

### flex-shrink
Define cuánto puede encogerse un elemento flex.
```css
.item { flex-shrink: 0; }
```

### flex-basis
Define el tamaño base de un elemento flex.
```css
.item { flex-basis: 200px; }
```

### flex (shorthand)
Combina flex-grow, flex-shrink y flex-basis.
```css
.item { flex: 1 0 auto; }
```

### align-self
Permite anular align-items para un elemento específico.
```css
.item { align-self: flex-end; }
```

### gap, row-gap, column-gap
Define el espacio entre elementos flex o grid.
```css
.contenedor { gap: 20px; }
```

---

## 6. CSS Grid

### display: grid
Activa el modo grid en un contenedor.
```css
.contenedor { display: grid; }
```

### grid-template-columns
Define las columnas de la cuadrícula.
```css
.contenedor { grid-template-columns: 1fr 2fr 1fr; }
.contenedor { grid-template-columns: repeat(3, 1fr); }
```

### grid-template-rows
Define las filas de la cuadrícula.
```css
.contenedor { grid-template-rows: 100px auto 50px; }
```

### grid-template-areas
Define áreas nombradas en la cuadrícula.
```css
.contenedor {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
```

### grid-column, grid-row
Define la posición y extensión de un elemento.
```css
.item { grid-column: 1 / 3; }
.item { grid-row: 2 / 4; }
```

### grid-area
Asigna un elemento a un área nombrada.
```css
.header { grid-area: header; }
```

### grid-auto-flow
Controla cómo se colocan los elementos automáticamente (row, column, dense).
```css
.contenedor { grid-auto-flow: dense; }
```

### justify-items, align-items
Alinea elementos dentro de sus celdas.
```css
.contenedor { 
  justify-items: center;
  align-items: start;
}
```

### justify-content, align-content
Alinea la cuadrícula dentro del contenedor.
```css
.contenedor { 
  justify-content: center;
  align-content: space-between;
}
```

---

## 7. Propiedades de Transformación y Transición

### transform
Aplica transformaciones 2D o 3D.
```css
div { transform: rotate(45deg); }
img { transform: scale(1.2); }
section { transform: translate(50px, 100px); }
button { transform: skew(10deg, 5deg); }
```

### transform-origin
Define el punto de origen para las transformaciones.
```css
div { transform-origin: top left; }
```

### transition
Crea transiciones suaves entre estados.
```css
button { 
  transition: all 0.3s ease;
  transition: background-color 0.5s, transform 0.3s;
}
```

### transition-property
Especifica qué propiedades tendrán transición.
```css
div { transition-property: width, height; }
```

### transition-duration
Define la duración de la transición.
```css
div { transition-duration: 0.5s; }
```

### transition-timing-function
Define la curva de velocidad (ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier).
```css
div { transition-timing-function: ease-in-out; }
```

### transition-delay
Retrasa el inicio de la transición.
```css
div { transition-delay: 0.2s; }
```

---

## 8. Animaciones

### animation
Propiedad abreviada para todas las propiedades de animación.
```css
div { animation: slide 2s ease-in-out infinite; }
```

### animation-name
Especifica el nombre de la animación @keyframes.
```css
div { animation-name: fadeIn; }
```

### animation-duration
Define la duración de la animación.
```css
div { animation-duration: 3s; }
```

### animation-timing-function
Define la curva de velocidad de la animación.
```css
div { animation-timing-function: linear; }
```

### animation-delay
Retrasa el inicio de la animación.
```css
div { animation-delay: 1s; }
```

### animation-iteration-count
Define cuántas veces se repite (número o infinite).
```css
div { animation-iteration-count: infinite; }
```

### animation-direction
Define si la animación se reproduce hacia adelante, atrás o alternando (normal, reverse, alternate, alternate-reverse).
```css
div { animation-direction: alternate; }
```

### animation-fill-mode
Define qué estilos se aplican antes/después de la animación (none, forwards, backwards, both).
```css
div { animation-fill-mode: forwards; }
```

### @keyframes
Define las etapas de una animación.
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide {
  0% { transform: translateX(0); }
  50% { transform: translateX(100px); }
  100% { transform: translateX(0); }
}
```

---

## 9. Propiedades de Sombras y Efectos

### box-shadow
Añade sombra a la caja del elemento.
```css
div { box-shadow: 5px 5px 10px rgba(0,0,0,0.3); }
button { box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08); }
```

### filter
Aplica efectos gráficos (blur, brightness, contrast, grayscale, etc.).
```css
img { filter: blur(5px); }
div { filter: brightness(1.2) contrast(1.1); }
img:hover { filter: grayscale(100%); }
```

### backdrop-filter
Aplica efectos al área detrás del elemento.
```css
.modal { backdrop-filter: blur(10px); }
```

---

## 10. Propiedades de Lista

### list-style-type
Define el tipo de marcador de lista (disc, circle, square, decimal, none, etc.).
```css
ul { list-style-type: square; }
ol { list-style-type: upper-roman; }
```

### list-style-position
Define la posición del marcador (inside, outside).
```css
ul { list-style-position: inside; }
```

### list-style-image
Usa una imagen como marcador.
```css
ul { list-style-image: url('bullet.png'); }
```

### list-style (shorthand)
Combina las propiedades de lista.
```css
ul { list-style: square inside; }
```

---

## 11. Propiedades de Tabla

### border-collapse
Controla si los bordes de tabla se colapsan (collapse, separate).
```css
table { border-collapse: collapse; }
```

### border-spacing
Define el espacio entre celdas (cuando border-collapse: separate).
```css
table { border-spacing: 10px; }
```

### caption-side
Define la posición del caption (top, bottom).
```css
caption { caption-side: bottom; }
```

### table-layout
Controla el algoritmo de diseño de tabla (auto, fixed).
```css
table { table-layout: fixed; }
```

---

## 12. Propiedades de Cursor y Interacción

### cursor
Define el tipo de cursor al pasar sobre el elemento.
```css
button { cursor: pointer; }
input { cursor: text; }
div { cursor: not-allowed; }
```

### pointer-events
Controla cómo el elemento responde a eventos del ratón (auto, none).
```css
.disabled { pointer-events: none; }
```

### user-select
Controla si el texto puede ser seleccionado (auto, none, text, all).
```css
.no-select { user-select: none; }
```

---

## 13. Propiedades de Contenido Generado

### content
Inserta contenido generado con ::before y ::after.
```css
.elemento::before { content: "★ "; }
.elemento::after { content: " →"; }
```

### quotes
Define las comillas para contenido generado.
```css
q { quotes: "«" "»" "‹" "›"; }
```

---

## 14. Propiedades de Columnas

### column-count
Define el número de columnas.
```css
article { column-count: 3; }
```

### column-gap
Define el espacio entre columnas.
```css
article { column-gap: 40px; }
```

### column-rule
Define una línea entre columnas.
```css
article { column-rule: 2px solid #ccc; }
```

### column-width
Define el ancho ideal de las columnas.
```css
article { column-width: 200px; }
```

---

## 15. Propiedades Responsivas

### @media
Define reglas para diferentes tamaños de pantalla.
```css
@media (max-width: 768px) {
  .contenedor { flex-direction: column; }
}

@media (min-width: 1024px) {
  .sidebar { display: block; }
}
```

### viewport units
Unidades relativas al viewport (vw, vh, vmin, vmax).
```css
.hero { height: 100vh; }
.ancho { width: 50vw; }
```

---

## 16. Propiedades Adicionales Importantes

### outline
Similar al borde pero no afecta el diseño.
```css
input:focus { outline: 2px solid blue; }
button { outline: none; } /* evitar, afecta accesibilidad */
```

### resize
Permite al usuario redimensionar el elemento (none, both, horizontal, vertical).
```css
textarea { resize: vertical; }
```

### white-space
Controla cómo se maneja el espacio en blanco (normal, nowrap, pre, pre-wrap, pre-line).
```css
code { white-space: pre; }
.texto { white-space: nowrap; }
```

### word-wrap / overflow-wrap
Permite que palabras largas se rompan (normal, break-word).
```css
p { word-wrap: break-word; }
```

### object-fit
Controla cómo se ajusta el contenido de imágenes/videos (fill, contain, cover, none, scale-down).
```css
img { object-fit: cover; }
```

### object-position
Define la posición del contenido ajustado.
```css
img { object-position: center top; }
```

### clip-path
Recorta el elemento con una forma específica.
```css
img { clip-path: circle(50%); }
div { clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%); }
```

### mix-blend-mode
Define cómo se mezcla el elemento con el fondo.
```css
.overlay { mix-blend-mode: multiply; }
```

---

## 17. Variables CSS (Custom Properties)

### Definición y uso de variables
```css
:root {
  --color-primario: #3498db;
  --espaciado: 20px;
  --fuente-principal: 'Arial', sans-serif;
}

.boton {
  background-color: var(--color-primario);
  padding: var(--espaciado);
  font-family: var(--fuente-principal);
}
```

---

## Conclusión

CSS es un lenguaje extremadamente potente que ofrece control total sobre la presentación visual de los documentos web. Dominar estas propiedades te permitirá crear diseños modernos, responsivos y atractivos. La práctica constante y la experimentación son clave para convertirse en un experto en CSS.

### Recursos Recomendados
- MDN Web Docs (Mozilla Developer Network)
- CSS-Tricks
- Can I Use (compatibilidad de navegadores)
- W3C CSS Specifications

### Buenas Prácticas
- Usar metodologías como BEM o SMACSS para organizar el código
- Aprovechar preprocesadores como Sass o Less para proyectos grandes
- Optimizar el rendimiento minimizando el CSS
- Usar variables CSS para mantener consistencia
- Escribir código responsivo desde el principio (mobile-first)
- Validar el código CSS regularmente