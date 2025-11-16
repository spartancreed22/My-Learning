# Personalización de Fuentes en CSS

## Introducción

Las propiedades que comienzan con `font-` permiten modificar diferentes aspectos de las fuentes tipográficas en tu página web.

---

## Propiedades Principales de Fuentes

### `font-family`
Define el tipo de letra a utilizar.

```css
p {
  font-family: 'Arial', 'Helvetica', sans-serif;
}
```

### `font-size`
Controla el tamaño del texto.

```css
h1 {
  font-size: 32px;
}
```

### `font-weight`
Ajusta el grosor de la fuente.

```css
strong {
  font-weight: bold; /* o 700 */
}
```

### `font-style`
Aplica cursiva u otros estilos.

```css
em {
  font-style: italic;
}
```

---

## Google Fonts

Google Fonts es una herramienta gratuita que ofrece cientos de fuentes optimizadas para la web.

### Pasos para usar Google Fonts:

1. **Visita**: [fonts.google.com](https://fonts.google.com)
2. **Selecciona** una fuente que te guste
3. **Copia** los enlaces `<link>` proporcionados
4. **Pega** en el `<head>` de tu HTML
5. **Usa** la fuente en tu CSS con `font-family`

### Ejemplo de implementación:

**En el HTML (`<head>`):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sixtyfour+Convergence&display=swap" rel="stylesheet">
```

**En el CSS:**
```css
body {
  font-family: 'Sixtyfour Convergence', sans-serif;
}
```

---

## Orden de Carga en el `<head>`

El orden en que declaras los recursos en el `<head>` es crucial para evitar errores. Sigue esta estructura:

### ✅ Orden Correcto:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Página</title>
  
  <!-- 1. Librerías externas -->
  <link rel="stylesheet" href="libreria.css">
  
  <!-- 2. Fuentes de Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  
  <!-- 3. Tu archivo CSS (al final) -->
  <link rel="stylesheet" href="styles.css">
</head>
```

### 📋 Reglas de orden:

1. **Metadatos** (charset, viewport)
2. **Librerías CSS externas** (Bootstrap, Normalize, etc.)
3. **Google Fonts** (antes de tus estilos)
4. **Tu CSS personalizado** (siempre al final)

### ¿Por qué este orden?

- Las **librerías** deben cargarse primero porque otros estilos dependen de ellas
- Las **fuentes** se cargan antes de tus estilos para que estén disponibles cuando las uses
- **Tu CSS** va al final para que pueda sobrescribir estilos de librerías si es necesario

---

## Ejemplo Completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de Fuentes</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet">
  
  <!-- CSS personalizado -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Título con Poppins</h1>
  <p>Párrafo con la fuente personalizada</p>
</body>
</html>
```

```css
/* styles.css */
body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 300;
}

h1 {
  font-weight: 600;
  font-size: 2.5rem;
}
```

---

## Consejos Prácticos

✔️ **Siempre incluye fuentes de respaldo** (fallback fonts)
```css
font-family: 'Poppins', Arial, sans-serif;
```

✔️ **Usa `preconnect`** para mejorar la velocidad de carga

✔️ **Limita el número de fuentes** (máximo 2-3 por proyecto)

✔️ **Selecciona solo los pesos que necesitas** en Google Fonts para optimizar el rendimiento

---

## Resumen

- Las propiedades `font-*` controlan todos los aspectos de las fuentes
- Google Fonts ofrece fuentes gratuitas y fáciles de implementar
- El orden de carga en el `<head>` es fundamental: librerías → fuentes → tu CSS
- Siempre incluye fuentes de respaldo para mayor compatibilidad