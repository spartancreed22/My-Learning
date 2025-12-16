"use strict";
// En este archivo estaremos aprendiendo sobre el tipo de dato "never" en TypeScript.
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    // El tipo "never" representa un valor que nunca ocurre. Es utilizado en funciones que no retornan un valor, ya sea porque lanzan una excepción o porque tienen un bucle infinito.
    const ErrorNever = (mesage) => {
        //Never no es ni Undefine ni null ni void, es un tipo de dato propio llamado Never.
        // Una funcion con este tipo de dato nunca va a retornar un valor o nunca tendra un punto final.
        // Normalmente se usaran porque la funcion lanza un error y no tiene un punto final.
        throw new Error('Este es un error que lanza una excepcion y por lo tanto la funcion nunca retorna un valor');
    };
    ErrorNever('Hola');
    // Lo que se acaba de hacer es especificar una funcion en donde su tipo es never 
})();
//# sourceMappingURL=Never.js.map