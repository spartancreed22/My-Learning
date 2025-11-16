# Estructura HTML y Formularios - Guía Rápida

## 📋 Estructura Básica de HTML

### Etiquetas Principales

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- Información del sitio: título, estilos, metadatos -->
    <title>Mi Sitio Web</title>
  </head>
  <body>
    <!-- Todo el contenido visible -->
  </body>
</html>
```

### Etiquetas Semánticas

| Etiqueta | Uso | Ejemplo |
|----------|-----|---------|
| `<header>` | Encabezado del sitio | Logo, menú principal |
| `<nav>` | Barra de navegación | Menú con links |
| `<main>` | Contenido principal | Contenido único de la página |
| `<section>` | Sección temática | Agrupar contenido relacionado |
| `<article>` | Contenido independiente | Blog post, noticia |
| `<aside>` | Contenido complementario | Barra lateral, widgets |
| `<footer>` | Pie de página | Copyright, links secundarios |

### Etiquetas de Agrupación

**`<div>`** - Contenedor genérico para agrupar elementos
```html
<div class="tarjeta">
  <h2>Título</h2>
  <p>Contenido</p>
</div>
```

**`<span>`** - Contenedor en línea para texto específico
```html
<p>Este texto es <span class="destacado">importante</span>.</p>
```

**`<p>`** - Párrafos de texto
```html
<p>Este es un párrafo de texto.</p>
```

---

## 📝 Formularios HTML

### Estructura Básica

```html
<form action="/procesar" method="POST">
  <fieldset>
    <legend>Título del Formulario</legend>
    
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">
    
    <button type="submit">Enviar</button>
  </fieldset>
</form>
```

### Componentes Principales

**`<form>`** - Contenedor del formulario
- `action`: URL donde se envían los datos
- `method`: GET o POST

**`<fieldset>`** - Agrupa campos relacionados

**`<legend>`** - Título del grupo de campos

**`<label>`** - Etiqueta descriptiva del campo
- Atributo `for` debe coincidir con el `id` del input

**`<input>`** - Campo de entrada de datos
- Atributo `type` define el tipo de dato
- Atributo `name` identifica el campo al enviar

---

## 🔤 Tipos de Inputs

### 1️⃣ Texto y Números

```html
<!-- Texto simple -->
<input type="text" placeholder="Nombre completo">

<!-- Contraseña (oculta caracteres) -->
<input type="password" placeholder="Contraseña">

<!-- Email (valida formato) -->
<input type="email" placeholder="correo@ejemplo.com">

<!-- URL (valida formato) -->
<input type="url" placeholder="https://ejemplo.com">

<!-- Búsqueda -->
<input type="search" placeholder="Buscar...">

<!-- Teléfono -->
<input type="tel" placeholder="+57 300 123 4567">

<!-- Número con controles -->
<input type="number" min="0" max="100" step="1">
```

### 2️⃣ Selección

```html
<!-- Checkbox (múltiple selección) -->
<input type="checkbox" id="terminos" name="terminos">
<label for="terminos">Acepto términos</label>

<!-- Radio (una sola opción) -->
<input type="radio" id="masculino" name="genero" value="M">
<label for="masculino">Masculino</label>
<input type="radio" id="femenino" name="genero" value="F">
<label for="femenino">Femenino</label>

<!-- Archivo -->
<input type="file" accept=".pdf,.jpg">

<!-- Rango deslizante -->
<input type="range" min="0" max="100" value="50">

<!-- Selector de color -->
<input type="color" value="#ff0000">
```

### 3️⃣ Fecha y Hora

```html
<!-- Fecha -->
<input type="date">

<!-- Fecha y hora local -->
<input type="datetime-local">

<!-- Mes y año -->
<input type="month">

<!-- Semana -->
<input type="week">

<!-- Hora -->
<input type="time">
```

### 4️⃣ Especiales

```html
<!-- Campo oculto -->
<input type="hidden" name="id" value="123">

<!-- Botón personalizado -->
<input type="button" value="Hacer algo">

<!-- Botón de envío -->
<input type="submit" value="Enviar">

<!-- Botón de reseteo -->
<input type="reset" value="Limpiar">

<!-- Botón con imagen -->
<input type="image" src="enviar.png" alt="Enviar">
```

---

## 📄 Área de Texto

Para textos largos como mensajes o comentarios:

```html
<label for="mensaje">Mensaje:</label>
<textarea id="mensaje" name="mensaje" rows="5" cols="30">
  Texto inicial (opcional)
</textarea>
```

**Atributos útiles:**
- `rows`: Número de líneas visibles
- `cols`: Ancho en caracteres
- `maxlength`: Límite de caracteres
- `placeholder`: Texto de ayuda

---

## 🔘 Botones

### Tres formas de crear botones:

#### 1. Con `<input>`
```html
<input type="submit" value="Enviar">
<input type="button" value="Cancelar">
<input type="reset" value="Limpiar">
```

#### 2. Con `<button>` (Recomendado)
```html
<button type="submit">Enviar</button>
<button type="button">Cancelar</button>
<button type="reset">Limpiar</button>
```

#### 3. Con contenido HTML dentro
```html
<button type="submit">
  <img src="icono.png" alt=""> Enviar con Icono
</button>
```

**Diferencias clave:**
- `<button>` permite contenido HTML (imágenes, iconos, etc.)
- `<input>` solo permite texto simple
- `<button>` tiene etiqueta de cierre

**Tipos de botones:**
- `submit`: Envía el formulario
- `button`: Sin acción predeterminada (requiere JavaScript)
- `reset`: Limpia todos los campos

---

## ✅ Ejemplo Completo

```html
<form action="/registro" method="POST">
  <h2>Registro de Usuario</h2>
  
  <fieldset>
    <legend>Datos Personales</legend>
    
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required>
    
    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="edad" min="18" max="100">
  </fieldset>
  
  <fieldset>
    <legend>Preferencias</legend>
    
    <input type="checkbox" id="newsletter" name="newsletter">
    <label for="newsletter">Recibir newsletter</label>
    
    <label for="mensaje">Comentarios:</label>
    <textarea id="mensaje" name="mensaje" rows="4"></textarea>
  </fieldset>
  
  <button type="submit">Registrarse</button>
  <button type="reset">Limpiar</button>
</form>
```

---

## 💡 Atributos Importantes

| Atributo | Descripción | Ejemplo |
|----------|-------------|---------|
| `required` | Campo obligatorio | `<input required>` |
| `placeholder` | Texto de ayuda | `<input placeholder="Ej: Juan">` |
| `disabled` | Campo deshabilitado | `<input disabled>` |
| `readonly` | Solo lectura | `<input readonly>` |
| `maxlength` | Límite de caracteres | `<input maxlength="50">` |
| `min` / `max` | Valores mínimo/máximo | `<input type="number" min="1">` |
| `pattern` | Validación con regex | `<input pattern="[0-9]{3}">` |
| `autocomplete` | Autocompletado | `<input autocomplete="off">` |

---

## 🎯 Buenas Prácticas

✅ Siempre usa `<label>` con atributo `for` para accesibilidad

✅ Agrupa campos relacionados con `<fieldset>`

✅ Usa el `type` correcto para cada dato (mejora UX en móviles)

✅ Agrega validaciones con atributos HTML5 (`required`, `pattern`, etc.)

✅ Usa `<button>` en lugar de `<input type="button">` para más flexibilidad

✅ Nombra los campos con el atributo `name` para envío de datos

❌ No uses `<div>` cuando existen etiquetas semánticas apropiadas

❌ No olvides el atributo `type` en los botones (por defecto es submit)