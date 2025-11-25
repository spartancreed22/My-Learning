# Flexbox en CSS

## ¿Qué es Flexbox?

Flexbox es un **modelo de diseño unidimensional** que facilita la distribución y alineación de elementos en un contenedor. Es ideal para crear layouts flexibles y responsive sin complicaciones.

> **Importante:** Flexbox trabaja en **una dimensión a la vez**: fila (horizontal) o columna (vertical).

---

## Activando Flexbox

```css
.contenedor {
  display: flex;
}
```

Al aplicar `display: flex` a un contenedor, todos sus hijos directos se convierten en **flex items** y se habilitan todas las propiedades de Flexbox.

---

## Propiedades del Contenedor (Padre)

### 1. `flex-direction`

Define la dirección del eje principal (cómo se organizan los elementos).

**Valores:**
- `row` (default): Elementos en fila, de izquierda a derecha
- `row-reverse`: Elementos en fila, de derecha a izquierda
- `column`: Elementos en columna, de arriba hacia abajo
- `column-reverse`: Elementos en columna, de abajo hacia arriba

```css
.contenedor {
  display: flex;
  flex-direction: row; /* horizontal */
}

.contenedor-vertical {
  display: flex;
  flex-direction: column; /* vertical */
}
```

**Visualización:**
```
row:          [1] [2] [3] →
row-reverse:  ← [3] [2] [1]
column:       [1]
              [2]
              [3]
              ↓
```

---

### 2. `justify-content`

Alinea y distribuye los elementos a lo largo del **eje principal** (horizontal en `row`, vertical en `column`).

**Valores principales:**
- `flex-start`: Alinea al inicio (default)
- `flex-end`: Alinea al final
- `center`: Centra los elementos
- `space-between`: Espacio entre elementos (sin bordes)
- `space-around`: Espacio alrededor de cada elemento
- `space-evenly`: Espacio igual entre todos los elementos

```css
.contenedor {
  display: flex;
  justify-content: center; /* Centra horizontalmente */
}

.espaciado {
  display: flex;
  justify-content: space-between; /* Elementos separados */
}
```

**Visualización:**
```
flex-start:    [1][2][3]________
center:        ____[1][2][3]____
flex-end:      ________[1][2][3]
space-between: [1]____[2]____[3]
space-around:  __[1]__[2]__[3]__
space-evenly:  __[1]__[2]__[3]__
```

---

### 3. `align-items`

Alinea los elementos a lo largo del **eje transversal** (vertical en `row`, horizontal en `column`).

**Valores principales:**
- `stretch`: Estira los elementos (default)
- `flex-start`: Alinea al inicio
- `flex-end`: Alinea al final
- `center`: Centra los elementos
- `baseline`: Alinea según la línea base del texto

```css
.contenedor {
  display: flex;
  align-items: center; /* Centra verticalmente */
  height: 300px;
}
```

**Visualización (con flex-direction: row):**
```
flex-start:  [1][2][3]
             
             
center:      
             [1][2][3]
             
flex-end:    
             
             [1][2][3]
```

---

### 4. `flex-wrap`

Controla si los elementos se ajustan en múltiples líneas o permanecen en una sola.

**Valores:**
- `nowrap` (default): Todo en una línea
- `wrap`: Los elementos saltan a la siguiente línea
- `wrap-reverse`: Saltan en orden inverso

```css
.contenedor {
  display: flex;
  flex-wrap: wrap; /* Permite saltos de línea */
}
```

---

### 5. `gap`

Define el espacio entre los elementos flex (horizontal y vertical).

```css
.contenedor {
  display: flex;
  gap: 20px; /* Espacio de 20px entre elementos */
}

.custom {
  display: flex;
  gap: 10px 30px; /* gap vertical, gap horizontal */
}
```

---

### 6. `align-content`

Alinea las **líneas** de elementos cuando hay múltiples filas (solo funciona con `flex-wrap: wrap`).

```css
.contenedor {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 400px;
}
```

---

## Propiedades de los Elementos (Hijos)

### 1. `flex-grow`

Define cuánto puede **crecer** un elemento en relación a los demás.

```css
.item-1 {
  flex-grow: 1; /* Crece 1 parte */
}

.item-2 {
  flex-grow: 2; /* Crece el doble que item-1 */
}
```

---

### 2. `flex-shrink`

Define cuánto puede **encogerse** un elemento cuando falta espacio.

```css
.item {
  flex-shrink: 1; /* Puede encogerse (default) */
}

.no-encoge {
  flex-shrink: 0; /* No se encoge */
}
```

---

### 3. `flex-basis`

Define el tamaño **base** del elemento antes de distribuir el espacio.

```css
.item {
  flex-basis: 200px; /* Tamaño inicial de 200px */
}
```

---

### 4. `flex` (Atajo)

Combina `flex-grow`, `flex-shrink` y `flex-basis` en una sola propiedad.

```css
.item {
  flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
}

.item-fijo {
  flex: 0 0 200px; /* No crece, no encoge, base de 200px */
}
```

---

### 5. `align-self`

Permite alinear un elemento individual, sobrescribiendo `align-items` del contenedor.

```css
.item-especial {
  align-self: flex-end; /* Este elemento se alinea al final */
}
```

---

### 6. `order`

Cambia el orden visual de los elementos (sin modificar el HTML).

```css
.item-1 {
  order: 2; /* Aparece en segunda posición */
}

.item-2 {
  order: 1; /* Aparece en primera posición */
}
```

---

## Ejemplo Práctico Completo

```css
/* Contenedor principal */
.navbar {
  display: flex;
  justify-content: space-between; /* Logo a la izquierda, menú a la derecha */
  align-items: center; /* Centra verticalmente */
  padding: 20px;
  background-color: #333;
}

/* Items del menú */
.menu {
  display: flex;
  gap: 30px; /* Espacio entre items */
}

/* Galería responsive */
.galeria {
  display: flex;
  flex-wrap: wrap; /* Permite múltiples filas */
  gap: 20px;
}

.galeria-item {
  flex: 1 1 300px; /* Crece, encoge, base 300px */
}
```

---

## Casos de Uso Comunes

### Centrado Perfecto
```css
.centrado {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

### Barra de Navegación
```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### Tarjetas Responsivas
```css
.tarjetas {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.tarjeta {
  flex: 1 1 250px;
}
```

### Footer con Columnas
```css
.footer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
}
```

---

## Resumen Rápido

| Propiedad | Qué hace | Valores comunes |
|-----------|----------|-----------------|
| `display: flex` | Activa Flexbox | `flex` |
| `flex-direction` | Dirección del eje | `row`, `column` |
| `justify-content` | Alineación horizontal* | `center`, `space-between` |
| `align-items` | Alineación vertical* | `center`, `flex-start` |
| `flex-wrap` | Permite saltos de línea | `wrap`, `nowrap` |
| `gap` | Espacio entre items | `20px`, `1rem` |
| `flex` | Tamaño y crecimiento | `1`, `0 0 200px` |

*En `flex-direction: row`. Se invierten en `column`.

---

## Recursos Adicionales

- [Flexbox Froggy](https://flexboxfroggy.com/) - Juego para practicar
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Guía visual completa