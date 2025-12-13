// En este archivo hablaremos sobre el tipo de dato 'void' || 'Vacio' en TypeScript.

(() => {
    // El tipo 'void' se utiliza para indicar que especificamente una función no retorna ningún valor.

    function saludar(): void {
        console.log('Hola, bienvenido a TypeScript!');
    }

    function Vacia (){
        
    }

    const Prueba = Vacia();
    console.log(Prueba); // Imprimimos el resultado de llamar a la función Vacia, que es de tipo void.

    // En este caso, la función 'saludar' no tiene una sentencia 'return', por lo que su tipo de retorno es 'void' ya que si tiene el return nos dará como resultado un undefined.

    // Intentar retornar un valor desde una función declarada con tipo 'void' resultará en un error de compilación.

    //Recuerda que el tipo 'void' es diferente de 'undefined'. 'void' indica la ausencia de un valor de retorno, mientras que 'undefined' es un valor en sí mismo.

    // Void Significa que no tiene un resultado de retorno especifico.

    saludar(); // Llamamos a la función saludar que no retorna nada.

})();