# Funciones en JavaScript

## Definición de Funciones

Las funciones en JavaScript son bloques de código reutilizables que permiten realizar tareas específicas. Se pueden definir de diferentes formas:

### Funciones Declarativas

Se definen con la palabra clave `function` y pueden ser llamadas antes de su definición debido al **hoisting**.

```javascript
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar("Juan")); // "Hola, Juan!"
```

### Funciones Expresadas (Funciones Anónimas)

Son funciones almacenadas en variables y no pueden ser llamadas antes de su definición.

```javascript
const despedir = function(nombre) {
    return `Adiós, ${nombre}!`;
};

console.log(despedir("Ana")); // "Adiós, Ana!"
```

### Arrow Functions (Funciones Flecha)

Son una sintaxis más corta para definir funciones. No tienen su propio `this`.

```javascript
const sumar = (a, b) => a + b;

console.log(sumar(5, 3)); // 8
```

## Funciones de Orden Superior

Son funciones que reciben otras funciones como argumentos o retornan una función.

```javascript
function operacion(a, b, callback) {
    return callback(a, b);
}

const multiplicar = (x, y) => x * y;

console.log(operacion(4, 2, multiplicar)); // 8
```

## Parámetros y Argumentos

- **Parámetros por defecto**: Se pueden definir valores por defecto para evitar errores si no se pasan argumentos.

```javascript
function saludar(nombre = "Usuario") {
    return `Hola, ${nombre}!`;
}

console.log(saludar()); // "Hola, Usuario!"
```

- **Parámetro Rest (`...args`)**: Permite recibir múltiples argumentos como un array.

```javascript
function sumarTodos(...numeros) {
    return numeros.reduce((acum, num) => acum + num, 0);
}

console.log(sumarTodos(1, 2, 3, 4, 5)); // 15
```

## Métodos de Funciones

### `call()`
Llama a una función con un contexto específico.

```javascript
function presentar() {
    console.log(`Hola, soy ${this.nombre}`);
}

const persona = { nombre: "Carlos" };

presentar.call(persona); // "Hola, soy Carlos"
```

### `apply()`
Similar a `call()`, pero recibe los argumentos en un array.

```javascript
function sumar(a, b) {
    return a + b;
}

console.log(sumar.apply(null, [3, 7])); // 10
```

### `bind()`
Devuelve una nueva función con un contexto fijado.

```javascript
const persona2 = { nombre: "Lucía" };
const presentarLucia = presentar.bind(persona2);

presentarLucia(); // "Hola, soy Lucía"
```

## Funciones Recursivas

Son funciones que se llaman a sí mismas.

```javascript
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

## Clausuras (Closures)

Una clausura es cuando una función interna recuerda el estado de su función externa.

```javascript
function crearContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    };
}

const contador = crearContador();
console.log(contador()); // 1
console.log(contador()); // 2
```

## Funciones Asíncronas

### `setTimeout()` y `setInterval()`

```javascript
setTimeout(() => console.log("Hola después de 2 segundos"), 2000);
```

```javascript
const intervalo = setInterval(() => console.log("Ejecutando cada 1 segundo"), 1000);
setTimeout(() => clearInterval(intervalo), 5000); // Detiene después de 5 segundos
```

### `async/await`
Permiten manejar promesas de forma más legible.

```javascript
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ejecutar() {
    console.log("Inicio");
    await esperar(2000);
    console.log("Después de 2 segundos");
}

ejecutar();
```

---

Este documento resume las funciones en JavaScript, desde su definición hasta el uso de técnicas avanzadas como recursión, closures y asincronía. 🚀

