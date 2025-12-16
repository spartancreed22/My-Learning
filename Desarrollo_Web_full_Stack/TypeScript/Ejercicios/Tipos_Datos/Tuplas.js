"use strict";
// TUPLAS - 3 - 4 ++
// Las tuplas son un tipo especial de arreglo que permite almacenar una cantidad fija de elementos de diferentes tipos de datos.
Object.defineProperty(exports, "__esModule", { value: true });
//La sintaxis puede ser muy similar a la de los arrays pero en este caso especificamos los tipos de datos y el orden en que van a estar almacenados, entonces debemos ser muy estrictos con el tipo y el orden de los elementos.
(() => {
    let tupla = [1, 'Hola', true];
    console.log('Elementos de mi Tupla:', tupla);
    // Accediendo a los elementos de la tupla
    console.log('Primer elemento de la tupla (number):', tupla[0]);
    console.log('Segundo elemento de la tupla (string):', tupla[1]);
    console.log('Tercer elemento de la tupla (boolean):', tupla[2]);
    // Como Ts nos valida el tipo de dato entonces no podriamos hacer algo como esto:
    tupla[0] = 'Nuevo Valor'; // Error: Type 'string' is not assignable to type 'number'
    // Sin embargo, podemos modificar los valores siempre y cuando respetemos el tipo de dato y el orden.
    tupla[0] = 42;
})();
//# sourceMappingURL=Tuplas.js.map