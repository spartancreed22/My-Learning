// Ahora vamos a ver el tipo de dato Array en TypeScript.

// Los arreglos son variables que pueden almacenar multiples valores en una sola variable, y estos valores pueden ser de cualquier tipo de dato, ya sea primitivo o complejo.


(() => {

    let numbers: number[] = [1, 2, 3, 4, 5];
    let strings: string[] = ['Hola', 'Mundo', 'TypeScript'];
    let booleans: boolean[] = [true, false, true];

    // Tambien podemos crear arreglos que contengan multiples tipos de datos usando el tipo any, pero no es recomendable usarlo a menos que sea estrictamente necesario.

    let mixto: any[] = [1, 'Hola', true, 3.14];
    console.log('Arreglo de numeros:', numbers);

    // Tambien tengamos en cuenta que debemos siempre especificar el tipo de dato que va a contener el arreglo para aprovechar las ventajas de Ts.

    // Podemos usar digamoslo asi varios datos a la vez pero esoecificando los tipos de datos que va a contener el arreglo usando union types.

    let variosTipos: (number | string | boolean)[] = [1, 'Hola', true, 2, 'Mundo', false];
    console.log('Arreglo de varios tipos:', variosTipos);

    // Con esto evitamos añadir un dato que no necesitemos y que pueda generar errores en nuestro codigo.

    // OPERACIONES COMUNES CON ARREGLOS

    // .push Agregar elementos al final del arreglo
    numbers.push(6);
    console.log('Arreglo despues de push:', numbers);


    // .pop Eliminar el ultimo elemento del arreglo
    let ultimo = numbers.pop();
    console.log('Elemento eliminado con pop:', ultimo);
    console.log('Arreglo despues de pop:', numbers);



    // .forEach Recorrer un arreglo
    console.log('Recorriendo el arreglo de strings:');
    strings.forEach((str, index) => {
        console.log(`Indice ${index}: ${str}`);
    });


    //Sintaxis del forEach
    // array.forEach((elemento, indice, arreglo) => {
    //  Codigo a ejecutar para cada elemento
    // });

    //Nombre del array.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void

    // .find Encontrar un elemento en el arreglo
    let encontrado = booleans.find(b => b === false);
    console.log('Elemento encontrado con find:', encontrado);


    // .filter Filtrar elementos en el arreglo
    let filtrados = numbers.filter(num => num > 2);
    console.log('Elementos filtrados con filter:', filtrados);


})();