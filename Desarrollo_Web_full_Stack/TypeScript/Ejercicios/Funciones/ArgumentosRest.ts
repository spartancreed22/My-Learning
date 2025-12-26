// Ahora aprenderemos sobre los argumentos REST en TypeScript


// Los argumentos rest nos permiten representar un número indefinido de argumentos como un array.

(() => {

    
    //Quiero hacer a mi funcion donde mi primer valor sea obligatorio y los demas opcionales y se pueden mandar la cantidad que quieran extra

    //Para ello entonces crea una funcion donde su salida sera un string tambien haciendo una concatenacion de todos los argumentos recibidos.

    const Nombres = (firstName: string, ...restoNombres: string[] ): string => {
        return `${firstName}, `;
        //recibe el firstName obligatorio y de ahi en adelante todos los datos que le administren
        //Entonces para estos casos se usan los rest arguments o resto de argumentos para recibbir una cantidad indefinida de argumentos: 

        
        // y se pone en los argumentos como ...nombreDelArray: tipoDeDato[] y en array porque seran varios datos o argumentos.

    }

    const MasterChief = Nombres("John-117", "Linda-058", "Kelly-087", "Fred-104");
    console.log( {MasterChief} ); // John-117, Linda-058, Kelly-087, Fred-104


})();