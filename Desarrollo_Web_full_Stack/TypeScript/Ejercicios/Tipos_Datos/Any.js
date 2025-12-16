"use strict";
// Ahora vamos a ver el tipo de dato Any en TypeScript.
Object.defineProperty(exports, "__esModule", { value: true });
// Tengamos en cuenta que este tipo de datos no debemos de usarlo a menos que sea estrictamente necesario, ya que al usar este tipo de dato perderemos todas las ventajas que nos brinda TypeScript en cuanto a la verificacion de tipos y la deteccion temprana de errores en nuestro codigo.
(() => {
    let variableSinTipo;
    // tengamos en cuenta que si creamos una variable sin especificar su tipo de dato, TypeScript le asignara automaticamente el tipo de dato any.
    let exist; // tipo any
    let otroExist; // tipo any
    // pero si creamos una constante no se permite en Ts pero si en Js
    // const constanteExist; // Error: Const declarations must be initialized.
    // Los pocos beneficios de usar este tipo de datos son el poder cambiar el tipo de dato de una variable en cualquier momento.
    //Tambien Poder usar metodos y propiedades de cualquier tipo de dato sin que TypeScript nos marque un error es una muy buena ventaja.
    variableSinTipo = 42;
    console.log('variableSinTipo:', variableSinTipo);
    variableSinTipo = 'Hola Mundo';
    console.log('variableSinTipo:', variableSinTipo);
    // Lo unico malo de usar los metodos y propiedades de cualquier tipo de dato es que si nos equivocamos al escribir el nombre del metodo o propiedad, TypeScript no nos marcara ningun error y nuestro codigo podria fallar en tiempo de ejecucion.
    variableSinTipo = 'Hola TypeScript';
    console.log('Longitud del string:', variableSinTipo.length);
    //# CASTEO DE TIPOS
    // Para poder usara las funcionalidades de cada tipo podemos hacer algo llamado casteo de tipos, y esto es basicamente esindicarle a Ts que el dato any que estmos usando lo queremos tratar como un tipo de dato especifico, ya sea string, number, boolean, etc. Ya que haciendo esto podremos usar la ayuda de autocompletado para ese tipo de datos y sus funciones y metodos.
    let longitudDelString = variableSinTipo.length;
    console.log('Longitud del string casteado:', longitudDelString);
    // No se cambia el tipo de dato pero si la forma en que Ts lo interpreta.
    let Usuario = "Hola Mundo";
    console.log(Usuario.toUpperCase());
    console.log(Usuario.charAt(0));
    Usuario = 3.1416352;
    console.log(Usuario.toFixed(4));
})();
//# sourceMappingURL=Any.js.map