"use strict";
// Este tipo de dato "null" y "undefined" en TypeScript representa la ausencia de un valor o la falta de definición de una variable.
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    let variableNull;
    let variableUndefined;
    // tengamos en cuenta que si a una variable de tipo null o undefined le intentamos asignar otro tipo de dato, TypeScript nos lanzara un error.
    // variableNull = 123; // Error: Type 'number' is not assignable to type 'null'.
    // variableUndefined = 'Hola'; //
    // Pero los mas importante es que numll y undefined son tipos de datos propios en TypeScript, y no son lo mismo que otros tipos de datos como void o never.
    null !== undefined; // true
    // null es un valor asignable a una variable que indica la ausencia intencional de cualquier objeto o valor.
    // undefined indica que una variable ha sido declarada pero no se le ha asignado ningún valor.
})();
//# sourceMappingURL=Null_Undefined.js.map