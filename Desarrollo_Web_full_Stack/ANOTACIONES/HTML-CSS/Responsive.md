# Responsive Design con CSS

## ¿Qué es Responsive Web Design?

El **Responsive Web Design (RWD)** es una técnica que permite que un sitio web se adapte automáticamente al tamaño de pantalla del dispositivo donde se visualiza. En lugar de crear múltiples versiones de un sitio, creamos una sola que se ajusta dinámicamente.

**Ventajas:**
- Un solo código base para todos los dispositivos
- Mejor experiencia de usuario
- Más fácil de mantener
- Mejor posicionamiento SEO

---

## Media Queries: La Base del Responsive

Los **Media Queries** son reglas CSS que aplican estilos específicos según las características del dispositivo (principalmente el ancho de la pantalla).

### Sintaxis Básica

```css
@media (min-width: 768px) {
    /* Estilos que se aplican cuando la pantalla es de 768px o más */
    .contenedor {
        max-width: 720px;
    }
}
```

**Componentes de la sintaxis:**
- `@media` - Directiva que inicia el media query
- `(min-width: 768px)` - Condición que debe cumplirse (pantalla mínima de 768px)
- `{ }` - Bloque donde escribes los estilos que se aplicarán

### Tipos de Condiciones

```css
/* Ancho mínimo - se aplica desde ese tamaño hacia arriba */
@media (min-width: 768px) { }

/* Ancho máximo - se aplica desde ese tamaño hacia abajo */
@media (max-width: 767px) { }

/* Rango específico - se aplica solo entre esos tamaños */
@media (min-width: 768px) and (max-width: 991px) { }
```

---

## Breakpoints Estándar

Los **breakpoints** son los puntos donde el diseño cambia para adaptarse mejor a diferentes dispositivos.

### Breakpoints Comunes

```css
/* Móviles pequeños (landscape) */
@media (min-width: 576px) {
    .contenedor {
        max-width: 540px;
    }
}

/* Tablets */
@media (min-width: 768px) {
    .contenedor {
        max-width: 720px;
    }
}

/* Tablets landscape y laptops pequeñas */
@media (min-width: 992px) {
    .contenedor {
        max-width: 960px;
    }
}

/* Laptops y desktops */
@media (min-width: 1200px) {
    .contenedor {
        max-width: 1140px;
    }
}

/* Monitores grandes */
@media (min-width: 1400px) {
    .contenedor {
        max-width: 1320px;
    }
}
```

### Tabla de Referencias de Dispositivos

| Breakpoint | Rango | Dispositivos Típicos |
|------------|-------|---------------------|
| `< 576px` | Extra pequeño | Móviles portrait |
| `≥ 576px` | Pequeño | Móviles landscape |
| `≥ 768px` | Mediano | Tablets portrait |
| `≥ 992px` | Grande | Tablets landscape, laptops |
| `≥ 1200px` | Extra grande | Desktops |
| `≥ 1400px` | XXL | Monitores grandes |

---

## Buenas Prácticas

### 1. Mobile First

Escribe primero los estilos para móviles y luego usa `min-width` para pantallas más grandes:

```css
/* Estilos base (móvil) */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
    .grid {
        grid-template-columns: 1fr 1fr;
    }
}

/* Desktop */
@media (min-width: 1200px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

### 2. Organización del Código

Coloca los media queries **inmediatamente después** del selector correspondiente:

```css
/* ✅ CORRECTO - Fácil de mantener */
.card {
    padding: 1rem;
    margin: 0.5rem;
}

@media (min-width: 768px) {
    .card {
        padding: 2rem;
        margin: 1rem;
    }
}

.button {
    font-size: 14px;
}

@media (min-width: 768px) {
    .button {
        font-size: 16px;
    }
}
```

```css
/* ❌ INCORRECTO - Difícil de encontrar y modificar */
.card {
    padding: 1rem;
}

.button {
    font-size: 14px;
}

/* Todos los media queries al final */
@media (min-width: 768px) {
    .card {
        padding: 2rem;
    }
    .button {
        font-size: 16px;
    }
}
```

---

## Creación de Snippets para Media Queries

### ¿Por qué usar snippets?

Escribir media queries repetidamente es tedioso y propenso a errores. Los **snippets** son atajos que automatizan este proceso.

### Paso a Paso: Crear un Snippet en VS Code

**1. Abrir la paleta de comandos:**
- Windows/Linux: `Ctrl + Shift + P`
- Mac: `Cmd + Shift + P`

**2. Buscar "snippets":**
- Escribe: `Configure User Snippets`
- Selecciona esta opción

**3. Seleccionar el lenguaje:**
- Busca y selecciona: `css.json`
- Se abrirá el archivo de configuración

**4. Agregar el snippet:**

```json
{
    "Media Query": {
        "prefix": "mq",
        "body": [
            "@media (min-width: ${1:768px}) {",
            "    $2",
            "}"
        ],
        "description": "Crea un media query responsive"
    }
}
```

**Explicación del código:**
- `"Media Query"` - Nombre descriptivo del snippet
- `"prefix": "mq"` - Atajo que escribirás (escribe "mq" y presiona Tab)
- `"body"` - Contenido que se insertará
- `${1:768px}` - Primera posición del cursor con valor por defecto
- `$2` - Segunda posición donde saltará el cursor
- `"description"` - Texto que aparece en el autocompletado

**5. Uso del snippet:**
- Escribe `mq` en tu archivo CSS
- Presiona `Tab`
- El snippet se expande automáticamente
- Modifica `768px` si necesitas otro breakpoint
- Presiona `Tab` nuevamente para saltar al interior del bloque

### Snippets Adicionales Útiles

```json
{
    "Media Query Max Width": {
        "prefix": "mqmax",
        "body": [
            "@media (max-width: ${1:767px}) {",
            "    $2",
            "}"
        ],
        "description": "Media query con max-width"
    },
    "Media Query Range": {
        "prefix": "mqrange",
        "body": [
            "@media (min-width: ${1:768px}) and (max-width: ${2:991px}) {",
            "    $3",
            "}"
        ],
        "description": "Media query con rango específico"
    },
    "Complete Responsive Set": {
        "prefix": "mqset",
        "body": [
            "/* Móvil (base) */",
            "$1",
            "",
            "/* Tablet */",
            "@media (min-width: 768px) {",
            "    $2",
            "}",
            "",
            "/* Desktop */",
            "@media (min-width: 1200px) {",
            "    $3",
            "}"
        ],
        "description": "Conjunto completo de media queries"
    }
}
```

### Ventajas de usar Snippets

✅ **Velocidad** - Escribe media queries en segundos
✅ **Consistencia** - Siempre usa la misma sintaxis
✅ **Sin errores** - Elimina errores de tipeo
✅ **Productividad** - Enfócate en el diseño, no en escribir código repetitivo
✅ **Personalización** - Crea tus propios atajos según tus necesidades

---

## Ejemplo Práctico Completo

```css
/* Navegación responsive */
.navbar {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}

@media (min-width: 768px) {
    .navbar {
        flex-direction: row;
        justify-content: space-between;
        padding: 1.5rem 2rem;
    }
}

/* Grid de tarjetas */
.cards-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 576px) {
    .cards-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 992px) {
    .cards-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
}

@media (min-width: 1200px) {
    .cards-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

---

## Recursos Adicionales

**Herramientas útiles:**
- Chrome DevTools - Simula diferentes dispositivos
- Firefox Responsive Design Mode - Prueba breakpoints
- [mydevice.io](https://www.mydevice.io/) - Información sobre resoluciones de dispositivos

**Tip final:** Siempre prueba tu diseño en dispositivos reales cuando sea posible, no solo en el simulador del navegador.