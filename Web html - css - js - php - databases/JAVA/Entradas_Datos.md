# Enttradas de datos

Tenemos que tener en cuenta que debemos interactuar con el usuario y para esto funcionan las entradas de datos:

Las entradas de datos nos sirven para solicitarle datos a los usuarios, luego procesarlos para luego imprimir la respuesta que el usuario nos solicite.

para esto podemos hacer uso de la clase **Scanner** la cual pertenece al paquete de java.util por lo que debe ser importado si necesitamos de su uso:
    import jaava.util.Scanner

En java estos paquetes se encargan de guardar muchas clases, es una organizacion de carpetas para asi poder organizar de mejor forma nuestro codigo.

Para poder usar esta clase primero, dentro de nuestro metodo main debemos declarar una variable para poder usarla, luego crear una variable normalmente con el nombre de scanner para después ahi si usarla mas adelante:

    1) Creamos un nuevo objeto para poder usarlo
    2) Utilizamos la palabra reservada new para crear un nuevo objeto
    3) Ahora indicaremos que queremos crear osea aqui tulizamos la calse Scanner
    4) Por ultimo dentro de los parentesis de Scanner se indica que recibira lo que reciba el sistema o leer la informacion de la consola, especificando que tomaremos datos de la entrada estandar.

Esta variable se puede nombrar como deseemos y como tipo de dato sera un tipo escaner es decir usando el tipo completo de la clase

Tengamos en cuenta que al solicitarle datos al usuario para que los digite debemos de ser claro con lo que necesitemos que el usuario ingrese, osea con el mensaje que el vera en la consola o interfaz.

    public static void main(String[] args) {
            // Declaramos la variable scanner
            var consola = new Scanner(System.in);

            // Solicitamos la informacion al usuario 
            System.out.println("Proporciona tu nombre: ");

            // crear variable para leer los datos recibidos por consola
            var Name = consola.nextLine();
            // En esta linea usamos nuestro objeto scanner que creamos al principio y usamos el metodo nextLine() para leer la linea completa de la consola.
        
            //  ahora solo impromimos el valor de la variable Name
            System.out.println("Tu nombre es: " + Name);

            
        
        }


## Leer tipos de datos

Para leer distintos tipos de datos, tenemos que tener en cuenta primero que datos necesitamos que nos de el usuario, para que al recibirlos convertilos o recibirlos en el tipo de dato que se necesita, empezaremos con los numeros enteros.


### Entero
Como vimos en el anterior ejercicio, despues de usar la variable consola se agrego el metodo .nextLine el cual se usa para leer la linea siguiente, de esta misma forma ahora tendremos que leer la linea pero buscando el formato que se requiere:

            var consola = new Scanner(System.in);

            System.out.println("Proporciona tu edad: ");

            var Edad = consola.nextInt();
            // En esta linea usamos nuestro objeto scanner y añadimos el metodo nextInt() para leer la linea completa de la consola y ademas convertir al formato que se requiere.
        
            //  ahora solo impromimos el valor de la variable
            System.out.println("Tu edad es: " + Edad);

### Double
Este tipo de dato son los fraccionarios con dos digitos despues del punto y como en los anteriores casos vamos a usar un metodo para poder leerlo y convertirlo, este metodo sera .nextDouble:


    System.out.println("Proporciona tu edad: ");

    var Edad = consola.nextDouble();
    // En esta linea usamos nuestro objeto scanner y añadimos el metodo nextDouble() para leer la linea completa de la consola y ademas convertir al formato que se requiere.
        
    //  ahora solo impromimos el valor de la variable
    System.out.println("Tu edad es: " + Edad);