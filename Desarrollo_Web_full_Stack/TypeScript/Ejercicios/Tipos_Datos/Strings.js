"use strict";
// Ahora vamos a ver el tipo de dato Strings en TypeScript.
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    // Existen varias formas de declarar strings normalmente en TypeScript y JavaScript: se usan 3 tipos de comillas diferentes: comillas simples (' '), comillas dobles (" ") y backticks (` `).
    let firstName = "Camilo";
    let lastName = 'Montoya';
    let fullName = `${firstName} ${lastName}`;
    // Aca tenemos los ejemplos de casos de usos para cada uno de los tipos de comillas, pero es mas comun usar las comillas simples '' pero normalmente se usan las backticks `` cuando queremos hacer interpolacion de variables o expresiones dentro del string, pero cuando tengamos que usar comillas dentro de un string usaremos las comillas dobles "" para evitar errores Pero esto se puede evitar usardo un \ backslash antes de la comilla que queremos usar dentro del string.
    console.log("Nombre completo: ", fullName);
    // Tengamos en cuenta que los strings en TypeScript son inmutables, es decir, una vez que se crea un string no se puede cambiar su valor directamente. Cualquier operación que modifique un string en realidad crea un nuevo string.
    // Ademas que al no especificar bien el tipo de dato, perderemos las ventajas que nos brinda TypeScript en cuanto a la verificacion de tipos y la deteccion temprana de errores en nuestro codigo, y el uso de diferentes metodos y propiedades disponibles para los strings que son funcionalidades muy buenas para demostrar nuestro manejo del lenguaje.     
    // G:\JOSHUA\PROGRAMACION\UDEMY\Desarrollo_Web_full_Stack\JavaScript\Teoria\METHODS.md
    // Operaciones y Concatenaciones
    console.log('Mi nombre es ${ fullName }');
    // Tengamos en cuenta que deseamos ubicarnos en una posicion especifica del string pero esta posicion excede la longitud de nuestro string, tengamos en cuenta que las posiciones empiezan a contar desde 0  y si se excede entonces .
    console.log(firstName[6].toLowerCase()); // Error: Index signature in type 'string' only permits reading, esto debido a que no se puede ejecutar el metodo toLowerCase() en una posicion que no existe dentro del string y nos arroja un undefined, auqque podemos crear una condicion ternaria para evitar este error.
    console.log(firstName[6]?.toLowerCase()); //ahora nos imprimira en la consola un undefined
})();
//# sourceMappingURL=Strings.js.map