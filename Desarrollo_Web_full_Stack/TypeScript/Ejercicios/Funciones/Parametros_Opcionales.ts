// En este archivo se explican los parametros obligatorios en TypeScript

// Estos argumentos son obligatorios siempre pero podemos definirlos como opcionales en la creacion de la propia funcion

(() => {

    //Para esto entonces usaremos el mismo ejemplo de la suma de dos numeros

    let Name : string= "Joshua";
    // let Surname : string= "Ortiz";

    // Definimos una funcion con parametros obligatorios
    // La diferencia es que ahora si no le pasamos los parametros pero con una sintaxis diferente

    //La diferencia es que al poner los parametros se le añade un signo de interrogacion "?" despues del nombre del parametro esto lo define como opcional

    const SumarObligatorios = (Name:string, Surname?:string) => {

        // usemos los backticks para poder usar interpolacion de variables osea mostrar la variable dentro de un string y aparte crearemos una condicion del or para que nos muestre un mensaje si el apellido no es proporcionado o es undefined-

        return `Su nombre completo es: ${Name}  ${Surname || 'Campo de apellido Vacio' }`;
    }
    
    const Suma = SumarObligatorios(Name);


})();