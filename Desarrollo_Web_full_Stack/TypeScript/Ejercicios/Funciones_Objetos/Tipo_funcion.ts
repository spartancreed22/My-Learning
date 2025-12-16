// En este documento, definimos un tipo de función en TypeScript.

(() => {

    //Empezaremos creando unas variables que seran funciones:

    const AgregarNumeros = (a:number, b:number) => {
        return a * b;
    }

    // podemos hacerlo todo en una sola linea:

    const Suma = (a:number, b:number):number => a + b;

    //Ahora, definamos un tipo de función para asegurarnos de que nuestras funciones sigan una estructura específica.

})();