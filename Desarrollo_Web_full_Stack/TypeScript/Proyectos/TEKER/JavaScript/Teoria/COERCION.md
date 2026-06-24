# Coerción en JavaScript

La coerción en JavaScript hace referencia a la conversión de datos de un tipo a otro diferente. Esto se aplica en el momento de realizar comparaciones u operaciones.

Se divide en dos tipos: **coerción implícita** y **coerción explícita**.

## Coerción Implícita

Es la conversión que se realiza de forma automática de un tipo de dato a otro y está a cargo de JavaScript. Si el lenguaje encuentra alguna incoherencia al momento de hacer una operación o comparación, como `'10' + 1`, lo interpreta a su manera y retorna un valor que puede ser erróneo.

### Tener en cuenta:
- Los strings pueden hacer operaciones con números si el string solo contiene números.
- Si el string contiene caracteres no numéricos, el resultado será `NaN` (**Not a Number**).

```javascript
console.log('10' + 5); // "105" (concatena en lugar de sumar)
console.log('10' - 5); // 5 (convierte '10' en número y resta)
console.log('Hola' * 2); // NaN (no puede multiplicar un string no numérico)
```

## Coerción Explícita

La coerción explícita es la transformación de tipos de datos donde nosotros controlamos el resultado. Para realizar estas transformaciones, se utilizan las funciones `Number()`, `String()` y `Boolean()` para convertir a tipo número, string y lógico, respectivamente.

```javascript
let num = Number('10'); // Convierte "10" a número
let texto = String(20); // Convierte 20 a string
let bool = Boolean(1); // Convierte 1 a true
```

[Ejemplos](../../Clase-6/workclass/coercion.js)

## Comparación entre Arrays y Objetos

Al comparar un array con otro, se compara la **referencia en memoria** y no el valor que contienen internamente. Esto significa que dos arrays con los mismos valores serán considerados diferentes si no apuntan a la misma referencia.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false (tienen referencias distintas)

let arr3 = arr1;
console.log(arr1 === arr3); // true (apuntan a la misma referencia en memoria)
```

