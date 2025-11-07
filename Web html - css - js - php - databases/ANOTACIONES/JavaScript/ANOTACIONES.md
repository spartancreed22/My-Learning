# OPERACIONES

## Operadores de Módulo

El operador `%` devuelve el residuo de la división de un número por otro.

```javascript
let residuo = 10 % 3; // Resultado: 1
```

## Ciclos y Métodos de Iteración

### `forEach`

- Es un método de los arrays que permite iterar sobre sus elementos.
- Ejecuta una función de devolución de llamada (callback) en cada elemento del array.
- No retorna un nuevo array, solo recorre los elementos.

```javascript
let numeros = [1, 2, 3, 4];
numeros.forEach(numero => console.log(numero));
```

### `for...of`

- Es un ciclo que permite recorrer los valores de un array u objetos iterables.
- Maneja mejor tareas asíncronas en comparación con `forEach`.
- Resume más código al iterar sobre los elementos directamente.

```javascript
let numeros = [10, 20, 30];
for (let numero of numeros) {
    console.log(numero);
}
```

## Métodos de Arrays

### `.push()`

- Agrega uno o más elementos al final de un array y retorna la nueva longitud.

```javascript
let arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr); // [1, 2, 3, 4, 5]
```

### `.pop()`

- Elimina el último elemento de un array y lo retorna.

```javascript
let arr = [1, 2, 3];
let ultimo = arr.pop();
console.log(ultimo); // 3
console.log(arr); // [1, 2]
```

### `.shift()`

- Elimina el primer elemento de un array y lo retorna.

```javascript
let arr = [1, 2, 3];
let primero = arr.shift();
console.log(primero); // 1
console.log(arr); // [2, 3]
```

### `.unshift()`

- Agrega uno o más elementos al inicio del array y retorna la nueva longitud.

```javascript
let arr = [2, 3];
arr.unshift(0, 1);
console.log(arr); // [0, 1, 2, 3]
```

### `.split()`

- Convierte un string en un array según un delimitador especificado.

```javascript
let texto = "Hola, mundo";
let palabras = texto.split(", ");
console.log(palabras); // ["Hola", "mundo"]
```

### `.reverse()`

- Invierte el orden de los elementos de un array.

```javascript
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
```

### `.join()`

- Une los elementos de un array en un string, separados por un delimitador especificado.

```javascript
let arr = ["Hola", "mundo"];
let texto = arr.join(" ");
console.log(texto); // "Hola mundo"
```

### `.toString()`

- Convierte un array en una cadena de texto.

```javascript
let arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
```

## Métodos de Objetos

### `Object.freeze()`

- Congela un objeto para que sus propiedades no puedan modificarse ni eliminarse.

```javascript
const obj = { nombre: "Juan" };
Object.freeze(obj);
obj.nombre = "Pedro"; // No se aplicará el cambio
console.log(obj.nombre); // "Juan"
```

### `Object.assign()`

- Copia las propiedades de un objeto a otro.

```javascript
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let resultado = Object.assign({}, obj1, obj2);
console.log(resultado); // { a: 1, b: 2 }
```

### `Object.values()`

- Retorna un array con los valores de las propiedades de un objeto.

```javascript
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // [1, 2, 3]
```

### `Object.entries()`

- Retorna un array de arrays con pares `[clave, valor]` del objeto.

```javascript
let obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]
```

## Referencia vs. Valor en Objetos

- Los tipos primitivos (números, strings, booleanos) se pasan por **valor**.
- Los objetos y arrays se pasan por **referencia**, lo que significa que modificar un objeto afectará todas sus referencias.

```javascript
let a = { nombre: "Juan" };
let b = a;
b.nombre = "Pedro";
console.log(a.nombre); // "Pedro"
```

## Código Sincrónico

- Se ejecuta línea por línea, en orden, bloqueando la ejecución hasta que cada línea finalice.

```javascript
console.log("Inicio");
console.log("Proceso");
console.log("Fin");
```

## Condición Ternaria

- Sintaxis compacta para condicionales `if-else`.

```javascript
let edad = 18;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);
```

