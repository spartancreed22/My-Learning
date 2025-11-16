# Normalize CSS

## ¿Qué es Normalize?

**Normalize.css** es un pequeño archivo CSS que proporciona una mejor consistencia cross-browser en los estilos predeterminados de los elementos HTML.

## ¿Por qué es importante?

Cada navegador (Chrome, Firefox, Safari, Edge) tiene sus propios estilos predeterminados para los elementos HTML. Esto causa inconsistencias visuales entre navegadores.

**Normalize soluciona esto:**
- ✅ Preserva los estilos útiles (a diferencia de un CSS Reset completo)
- ✅ Normaliza estilos para una amplia gama de elementos
- ✅ Corrige bugs y inconsistencias comunes
- ✅ Mejora la usabilidad con sutiles mejoras
- ✅ Está documentado y explicado en su código

## Normalize vs Reset CSS

| Normalize | Reset |
|-----------|-------|
| Preserva estilos útiles | Elimina todos los estilos |
| Normaliza diferencias | Parte de cero |
| Corrige bugs conocidos | No corrige bugs |
| Mejor punto de partida | Más trabajo adicional |

## ¿Cómo implementarlo?

### Opción 1: CDN (Más rápido)
```html
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
  <link rel="stylesheet" href="styles.css">
</head>
```

### Opción 2: Descarga local
1. Descarga desde: [normalize.css](https://necolas.github.io/normalize.css/)
2. Coloca el archivo en tu proyecto
3. Enlázalo antes de tus estilos:

```html
<head>
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/styles.css">
</head>
```

### Opción 3: NPM (Para proyectos con bundlers)
```bash
npm install normalize.css
```

Luego importa en tu CSS o JS:
```css
@import 'normalize.css';
```

## ⚠️ Orden importante

Normalize **SIEMPRE** debe ir **ANTES** de tus estilos personalizados:

```html
<!-- ✅ CORRECTO -->
<link rel="stylesheet" href="normalize.css">
<link rel="stylesheet" href="styles.css">

<!-- ❌ INCORRECTO -->
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="normalize.css">
```

## Ejemplo práctico

### Sin Normalize:
```css
/* Los márgenes y paddings varían entre navegadores */
body { /* Chrome: 8px, Firefox: diferente */ }
h1 { /* Tamaños inconsistentes */ }
```

### Con Normalize:
```css
/* Todos los navegadores comienzan igual */
body { margin: 0; padding: 0; }
h1 { 
  font-size: 2em;
  margin: 0.67em 0;
}
```

## Buenas prácticas adicionales

Después de incluir Normalize, es común añadir algunos estilos globales:

```css
/* En tu archivo styles.css */

/* Box-sizing universal */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Scroll suave */
html {
  scroll-behavior: smooth;
}

/* Fuente base */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  line-height: 1.6;
}

/* Imágenes responsive */
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

## Cuándo usar Normalize

✅ **Úsalo siempre que:**
- Inicies un nuevo proyecto web
- Necesites consistencia entre navegadores
- Quieras un punto de partida sólido
- Trabajes con múltiples dispositivos/navegadores

❌ **Podrías no necesitarlo si:**
- Usas frameworks como Bootstrap o Tailwind (ya lo incluyen)
- Trabajas en un proyecto legacy con estilos establecidos

## Resumen

Normalize.css es una herramienta **esencial** para desarrollo web moderno. Toma 30 segundos implementarlo y te ahorra horas de debugging de inconsistencias entre navegadores.

**Regla de oro:** Incluye Normalize al inicio de cada proyecto, antes de escribir cualquier CSS personalizado.