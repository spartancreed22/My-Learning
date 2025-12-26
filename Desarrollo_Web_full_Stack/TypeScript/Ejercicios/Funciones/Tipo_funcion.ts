// En este documento, definimos un tipo de función en TypeScript.

(() => {

    //Empezaremos creando unas variables que seran funciones:

    const multiplicarNumeros = (a:number, b:number): number => {
        return a * b;
    }

    // podemos hacerlo todo en una sola linea:

    const Suma = (a:number, b:number):number => a + b;

    //Ahora, definamos un tipo de función para asegurarnos de que nuestras funciones sigan una estructura específica.

    // Creemos otra funcion

    const Saludo = (nombre: string): string =>  `Hola, ${nombre}`;
    const DatoBooleano = (valor: boolean): boolean => !valor;


    // Ahora, definamos un tipo de función

    // let FuncionTipo;


    // Corregiremos el eny solamente con decir que la usaremos para funciones tienes que declarar la palabra en Mayuscula la F:
    // let FuncionTipo: Function;


    // Si deseo ser mas especifico por ejemplo que solo acepte e imprima numeros, entonces 


    let FuncionTipo: ( firstArg:number, second_Arg:number ) => number ;
    //Aqui si le estamos especificando que solo vamos a usarla en funciones que retornen numeros y los tipos en los parametros que debe recibir tambien.

    
    //Si queremos hacerlo en un string entonces usamos esta sintaxis:

        // let FuncionTipo: ( firstArg:string ) => string ; 


    //vamos a asignarle las funciones creadas anteriormente a esta nueva variable de tipo any:

    FuncionTipo = multiplicarNumeros;
    console.log( FuncionTipo(2, 3) ); // 6

    FuncionTipo = Suma;
    console.log( FuncionTipo(5, 7) ); // 12

    // FuncionTipo = Saludo;
    // console.log(FuncionTipo("Joshua Ortiz")); // Hola, Joshua Ortiz

    // FuncionTipo = DatoBooleano;
    // console.log( FuncionTipo(true) ); // false

    // Pero tengamos en cuenta que no es buena practica dejar a nuestra funcion de tipo any por lo que cambiaremos el codigo que teniamos anteriormente para especificar que tupo de funciones vamos a permitir en nuestra variable FuncionTipo.

})();