Propiedades de Grid

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