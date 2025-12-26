 // ARGUMENTOS OBLIGATORIOS

    // En Ts, los argumentos son los parametros que se le pasan en los parantesis para ser utilizados dentro de ella
    
(() =>{

    let num1 : number=6;
    let num2 : number=4;

    // Definimos una funcion con parametros obligatorios

    //Tendremos que definir que tipo de dato van a recibir los parametros porque sino tenemos un error
    const SumarObligatorios = (num1:number, num2:number) => {

        console.log("La suma es: " + (num1 + num2));
    }
    
    const Suma = SumarObligatorios(num1, num2);

    //Al declarar los parametros en la propia funcion pasan a convertirse en parametros requeridos para usar la funcion en codigo futuro

    // Si entonces intentamos llamar a la funcion sin pasarle los parametros nos dara error
    const Suma2 = SumarObligatorios(); // ERROR

    
})(); 