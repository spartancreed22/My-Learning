// Ahora vamos a ver el tipo de dato Numerico en TypeScript.

(() => {
    let ageCamilo;

    console.log("Edad de Camilo: ", ageCamilo);

    const ageJoshua: number = 30;

    if (ageCamilo < ageJoshua) {
        console.log("Camilo es menor que Joshua");
    }else{
        console.log("Camilo es mayor que Joshua");
    }

    // Como podemos observar Ts nos ayuda mucho en validar de forma profunda los tipos de datos que estamos utilizando en nuestra aplicacion, ya que si intentamos comparar una variable que no es numerica con una numerica nos arrojara un error y esto con Js no pasaria ya que es menos estricto con los tipos y aun asi nos comparara las variables.

    // la mejor solucion seria darle un tipo a la variable ageCamilo como se muestra a continuacion:

    let ageCamilo2: number = 25;

    // Tambien tengamos en cuenta que TypeScript nos permite utilizar numeros en diferentes bases numericas como lo son:

    // Decimal
    const decimal: number = 6;
    // Hexadecimal
    const hex: number = 0xf00d;
    // Binario
    const binary: number = 0b1010;
    // Octal
    const octal: number = 0o744;

    // Ademas tambien tengamos en cuenta que Ts nos muestra un error cuando espera un numero pero no lo es entonces tendra el valor de NaN (Not a Number) el cual es considerado como un numero pero no es valido.

    ageCamilo2 = Number('55A');
    console.log("Edad de Camilo 2: ", ageCamilo2);    

    

})() 
