"use strict";
// Ahora vamos a ver el tipo de dato BOOLEANO en TypeScript.
Object.defineProperty(exports, "__esModule", { value: true });
// Los booleanos son valores lógicos que pueden ser verdaderos (true) o falsos (false). Se utilizan comúnmente en estructuras de control de flujo, como condicionales y bucles, para tomar decisiones basadas en condiciones.
(() => {
    let isProgrammer = true;
    console.log("¿Eres programador?: ", isProgrammer);
    // pero si quiero inprimir el nombre de la variable y su valor entonces lo haremos de la siguiente forma
    console.log({ isProgrammer });
    // Otra aventaja de Ts es que podemos igualar nuestra variable tambien a una expresion boleana por lo que: 
    isProgrammer = (10 > 5);
    // Aal realizar esta validaciones nos aseguramos que la aplicacion se comporta o hace lo que esperamos.
    console.log({ isProgrammer });
    // Valores ternarios 
    isProgrammer = (10 < 5) ? 'true' : 'false';
    // Funciona igual que en Js la condicion esta entre () el ? es para el valor verdadero y el : para el valor falso
    // pero esto nos arrojara un mensaje de error debido a que no se puede asignatr un string a una variable de tipo boolean asi sea aen una condicion o lo que sea.
    console.log({ isProgrammer });
})();
//# sourceMappingURL=Booleans.js.map