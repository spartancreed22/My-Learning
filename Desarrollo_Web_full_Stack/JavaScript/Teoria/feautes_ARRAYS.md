# Operaciones en JavaScript

## Funciones para Manipulación de Arrays

JavaScript proporciona varios métodos que permiten realizar operaciones sobre arrays, como:

- **Filtrado** de elementos.
- **Creación o transformación** de nuevos arrays.
- **Lectura y búsqueda** de elementos específicos.
- **Verificación de condiciones** en los elementos del array.

Estas funciones permiten reducir el código, hacerlo más funcional y mejorar su eficiencia.

### Métodos principales:

- `.map()`
- `.filter()`
- `.find()`
- `.forEach()`
- `.some()`
- `.every()`

## Funciones Callback

Una **función callback** es una función que se pasa como argumento de otra función para ser ejecutada dentro de ella. En JavaScript, se recomienda utilizar **arrow functions** al usar callbacks para hacer el código más limpio y legible.

### `.map()`
Crea un nuevo array aplicando una función a cada elemento del array original.

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7];
const porDos = numeros.map((elemento) => elemento * 2);
console.log(porDos); // [2, 4, 6, 8, 10, 12, 14]
```

### `.filter()`
Devuelve un nuevo array con los elementos que cumplen una condición específica.

```javascript
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares); // [2, 4, 6]
```

### `.find()`
Encuentra el **primer elemento** que cumpla con la condición dada.

```javascript
const encontrado = numeros.find((numero) => numero > 4);
console.log(encontrado); // 5
```

### `.forEach()`
Ejecuta una función por cada elemento del array, pero **no devuelve un nuevo array**.

```javascript
numeros.forEach((numero) => console.log(numero * 2));
```

### `.some()`
Verifica si **al menos un elemento** del array cumple con una condición. Retorna `true` o `false`.

```javascript
const tieneImpares = numeros.some((numero) => numero % 2 !== 0);
console.log(tieneImpares); // true
```

### `.every()`
Verifica si **todos los elementos** del array cumplen con una condición. Retorna `true` o `false`.

```javascript
const todosMayoresQueCero = numeros.every((numero) => numero > 0);
console.log(todosMayoresQueCero); // true
```

