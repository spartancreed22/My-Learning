# Colores en CSS

Los colores en CSS se pueden representar de cuatro formas principales: nombres, hexadecimal, RGB y HSL.

---

## 1. Nombres de Colores

La forma más simple de usar colores es mediante sus nombres en inglés.

**Características:**
- Limitado a ~140 colores predefinidos
- Fácil de recordar y usar
- Ideal para prototipos rápidos

**Ejemplos:**
```css
h1 {
  color: blue;
}

p {
  color: black;
}

.alerta {
  background-color: red;
}
```

**Colores comunes:** `red`, `blue`, `green`, `yellow`, `black`, `white`, `gray`, `orange`, `purple`, `pink`

---

## 2. Hexadecimal

Sistema numérico que representa colores mediante valores RGB en formato hexadecimal.

**Formato:** `#RRGGBB` o `#RGB`

**Características:**
- Puede usar 3 dígitos (`#RGB`) o 6 dígitos (`#RRGGBB`)
- Cada par representa Rojo, Verde y Azul
- Valores de `00` a `FF` (0 a 255 en decimal)
- Siempre comienza con `#`

**Ejemplos:**
```css
/* 3 dígitos - versión corta */
.negro {
  color: #000;  /* Negro */
}

.blanco {
  color: #FFF;  /* Blanco */
}

/* 6 dígitos - versión completa */
.azul {
  color: #0000FF;  /* Azul puro */
}

.verde {
  color: #00FF00;  /* Verde puro */
}

.gris {
  color: #808080;  /* Gris medio */
}

.personalizado {
  color: #3498DB;  /* Azul personalizado */
}
```

**Regla de simplificación:**
- `#112233` → `#123` (cuando los pares son iguales)
- `#000000` → `#000`
- `#FFFFFF` → `#FFF`

---

## 3. RGB / RGBA

Representa colores mediante sus componentes Rojo (Red), Verde (Green) y Azul (Blue).

**Formato:** `rgb(rojo, verde, azul)` o `rgba(rojo, verde, azul, alpha)`

**Características:**
- Valores de 0 a 255 para cada color
- RGBA incluye transparencia (alpha: 0 a 1)
- Más intuitivo que hexadecimal

**Ejemplos:**
```css
/* RGB básico */
.rojo {
  color: rgb(255, 0, 0);
}

.verde {
  color: rgb(0, 255, 0);
}

.negro {
  color: rgb(0, 0, 0);
}

/* RGBA con transparencia */
.semitransparente {
  background-color: rgba(255, 0, 0, 0.5);  /* Rojo al 50% */
}

.overlay {
  background-color: rgba(0, 0, 0, 0.7);  /* Negro al 70% */
}
```

---

## 4. HSL / HSLA

Representa colores mediante Matiz (Hue), Saturación (Saturation) y Luminosidad (Lightness).

**Formato:** `hsl(matiz, saturación%, luminosidad%)` o `hsla(matiz, saturación%, luminosidad%, alpha)`

**Características:**
- **Matiz:** 0 a 360 grados (color en rueda cromática)
  - 0° = Rojo
  - 120° = Verde
  - 240° = Azul
- **Saturación:** 0% (gris) a 100% (color puro)
- **Luminosidad:** 0% (negro) a 100% (blanco)
- **Alpha:** 0 (transparente) a 1 (opaco)

**Ejemplos:**
```css
/* HSL básico */
.rojo {
  color: hsl(0, 100%, 50%);
}

.verde {
  color: hsl(120, 100%, 50%);
}

.azul {
  color: hsl(240, 100%, 50%);
}

/* Variaciones de un mismo color */
.azul-claro {
  color: hsl(240, 100%, 75%);  /* Más luminoso */
}

.azul-oscuro {
  color: hsl(240, 100%, 25%);  /* Menos luminoso */
}

.azul-grisaceo {
  color: hsl(240, 30%, 50%);  /* Menos saturado */
}

/* HSLA con transparencia */
.fondo-transparente {
  background-color: hsla(240, 100%, 50%, 0.3);
}
```

---

## Comparación Práctica

El mismo color representado de diferentes formas:

```css
/* Azul brillante - todas son equivalentes */
.ejemplo1 { color: #3498DB; }
.ejemplo2 { color: rgb(52, 152, 219); }
.ejemplo3 { color: hsl(204, 70%, 53%); }

/* Negro - todas son equivalentes */
.negro1 { color: #000; }
.negro2 { color: #000000; }
.negro3 { color: rgb(0, 0, 0); }
.negro4 { color: hsl(0, 0%, 0%); }
.negro5 { color: black; }
```

---

## ¿Cuándo usar cada formato?

| Formato | Mejor uso |
|---------|-----------|
| **Nombres** | Prototipos rápidos, colores básicos |
| **Hexadecimal** | Diseños profesionales, más compacto |
| **RGB/RGBA** | Cuando necesitas transparencia o trabajar con valores numéricos |
| **HSL/HSLA** | Crear variaciones de color (más claro/oscuro), mejor para ajustes dinámicos |

---

## Transparencia

Solo RGBA y HSLA permiten transparencia mediante el canal alpha:

```css
/* Sin transparencia */
.opaco {
  background-color: rgb(255, 0, 0);
}

/* Con transparencia */
.transparente-50 {
  background-color: rgba(255, 0, 0, 0.5);  /* 50% transparente */
}

.casi-invisible {
  background-color: hsla(120, 100%, 50%, 0.1);  /* 10% visible */
}
```

**Valores alpha:**
- `0` = Completamente transparente (invisible)
- `0.5` = 50% transparente
- `1` = Completamente opaco (sin transparencia)

---

## Consejos Prácticos

1. **Consistencia:** Elige un formato y úsalo en todo el proyecto
2. **Hexadecimal** es el más usado profesionalmente
3. **HSL** es ideal para crear paletas de colores relacionados
4. **RGBA** es perfecto para overlays y elementos con transparencia
5. Usa variables CSS para mantener tus colores organizados:

```css
:root {
  --color-primario: #3498DB;
  --color-secundario: #2ECC71;
  --color-fondo: rgba(0, 0, 0, 0.05);
}

.boton {
  background-color: var(--color-primario);
}
```