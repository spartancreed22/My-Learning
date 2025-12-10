// Ahora vamos a ver el tipo de dato Strings en TypeScript.

(() =>{

    // Existen varias formas de declarar strings normalmente en TypeScript y JavaScript: se usan 3 tipos de comillas diferentes: comillas simples (' '), comillas dobles (" ") y backticks (` `).


    let firstName: string = "Camilo";
    let lastName: string = 'Montoya';
    let fullName: string = `${firstName} ${lastName}`;

    // Aca tenemos los ejemplos de casos de usos para cada uno de los tipos de comillas, pero es mas comun usar las comillas simples '' pero normalmente se usan las backticks `` cuando queremos hacer interpolacion de variables o expresiones dentro del string, pero cuando tengamos que usar comillas dentro de un string usaremos las comillas dobles "" para evitar errores Pero esto se puede evitar usardo un \ backslash antes de la comilla que queremos usar dentro del string.

    console.log("Nombre completo: ", fullName);

    console.log("Nombre: ", firstName);
})()
