// funciones en TypeScript

// Las funciones son operaciones las cuales siempre requiere un nombre y suelen necesitar diferentes parametros para realizar su tarea u operacion.


//Empezamos con una funcion autoinvocada la cual nos ayudara a encapsular nuestro codigo y evitar conflictos con otras partes del mismo.


(() => {

    // esta sera la sintaxis con la que definiremos una funcion en TypeScript

    let Mensaje:string = "Hola, soy una funcion en TypeScript";

    //Tengamos en cuenta el valor de retorno de esta o de cada funcion, en este caso retornara un string

    function PrimeraFuncion():string {
        return Mensaje;
    }

    //Tambien existen las funciones pero de tipo flecha, las cuales son una forma mas corta de escribir funciones en TypeScript

    const SegundaFuncion = ():string => {
        return "Hola, soy una funcion flecha en TypeScript";
    }


   
})()