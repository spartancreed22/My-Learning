
# CICLOS

Los ciclos son estructuras que permiten repetir un bloque de código varias veces. En JavaScript, existen varias formas de implementar ciclos, siendo las más comunes `for`, `while`, `forEach`, y `for...of`.

### FOR

El ciclo `for` se utiliza generalmente para iterar sobre arreglos u otros elementos con un número de iteraciones definido (como el length de un array).

**Sintaxis básica:**

```javascript
    for (let i = 0; i < array.length; i++) {
        // Código a ejecutar
    }
```

**Ejemplo:**

```javascript
    let numeros = [1, 2, 3, 4, 5];

    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
```

### WHILE

El ciclo `while` se utiliza para repetir un bloque de código mientras una condición especificada sea verdadera.

**Sintaxis básica:**

```javascript
while (condición) {
    // Código a ejecutar
}
```

**Ejemplo:**

```javascript
let contador = 0;

while (contador < 5) {
    console.log("El contador es: " + contador);
    contador++;
}
```

### CICLO FOR EACH

El método `forEach` es una función propia del lenguaje JavaScript que se utiliza para iterar sobre cualquier array. Ejecuta una función proporcionada una vez por cada elemento del array.

**Sintaxis básica:**

```javascript
array.forEach(function(elemento) {
    // Código a ejecutar por cada elemento
});
```

**Ejemplo:**

```javascript
let frutas = ["manzana", "banana", "pera"];

frutas.forEach(function(fruta) {
    console.log(fruta);
});
```

### FOR OF

El ciclo `for...of` es utilizado para iterar sobre iterables (arrays, strings, etc.), guardando cada elemento del iterable principal en una variable.

**Sintaxis básica:**

```javascript
for (let variable of iterable) {
    // Código a ejecutar por cada elemento
}
```

**Ejemplo:**

```javascript
let colores = ["rojo", "verde", "azul"];

for (let color of colores) {
    console.log(color);
}
```

### FOR IN

este es capas de entrar a las keys ( propiedades ) de los objetos 

```javascript
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

```

## Interacciones con ciclos

Las interacciones con ciclos permiten realizar operaciones complejas sobre arrays y otros iterables de forma más eficiente. Aquí hay algunos ejemplos adicionales para complementar:

**Ejemplo de `for` para sumar elementos de un array:**

```javascript
let numeros = [10, 20, 30, 40, 50];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log("La suma es: " + suma);
```

**Ejemplo de `while` para contar hacia atrás:**

```javascript
let cuentaRegresiva = 10;

while (cuentaRegresiva > 0) {
    console.log(cuentaRegresiva);
    cuentaRegresiva--;
}

console.log("¡Feliz Año Nuevo!");
```

**Ejemplo de `forEach` para modificar elementos de un array:**

```javascript
let numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero, indice, arreglo) {
    arreglo[indice] = numero * 2;
});

console.log(numeros); // [2, 4, 6, 8, 10]
```

**Ejemplo de `for...of` para concatenar strings:**

```javascript
    let palabras = ["Hola", "mundo", "desde", "JavaScript"];
    let frase = "";

    for (let palabra of palabras) {
        frase += palabra + " ";
    }

    console.log(frase.trim()); // "Hola mundo desde JavaScript"
```

Estos ejemplos muestran cómo se pueden utilizar los diferentes ciclos para iterar sobre arrays y otros iterables, y cómo aplicar operaciones específicas a cada elemento.
