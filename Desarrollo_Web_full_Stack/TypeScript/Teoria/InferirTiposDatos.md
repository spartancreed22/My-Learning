# Inferir tipos de datos 

Tengamos en cuenta que Ts siempre intentara inferir el tipo de dato osea adivinar el tipo de dato que usamos como en Js pero aqui trataremos de ser siempre lo mas estricto posible, ya que esto evita que el codigo se deforme o prevenir errores futuros.

    const a = 10;
    let b = 10;

Si ponemos nuesto cursor encima de cada uno nos dice que a = 10 pero b = a un numero. Esto sucede debido a que cuando creamos una constante entonces Ts crea ese tipo pq no se puede cambiar siempre tendra ese valor a comparacion de que la variable b si se podra cambiar pero solamente a otro numero.

Es mejor que siempre detallemos el tipo de dato que usamos aunque podemos dejar que ts lo infiera pero es mucho mejor decir que tipo de dato necesitamos ya que haremos un codigo con mejores practicas por lo que es mejor declaarar nuestros contenedores asi:

    const a:number = 10;
    let b:number = 10;

Tambien es mejor especificar el tipo de dato ya que al inicializarse sin ningun valor sera entonces de tipo any, osea cualquiera puede tener cualquier tipo de dato, por lo que ganariamos flexibilidad pero perderiamos control porque entonces b podriamos usarla para cualquier cosa.

    const a;
    let B;

    b = 3.1416;
    b = "hola";
    b = {};
    b = [];

## Funcion Anonima Autoinvocada.

Es basicamente una funcion de tipo flecha sin nombre que se imprime o llama a si misma.

    (() => {

        Cuerpo de lo que hara la funcion

    })(En esta parte se ejecuta)

Esta funcion se usa en proyectos donde tengo varios archivos y cocn esta no caen o estan en el score global