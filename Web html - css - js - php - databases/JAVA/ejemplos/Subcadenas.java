public class Subcadenas {
    public static void main(String[] args) {
        var Cadena = "Hola Mundo";
        System.out.println("Esta es la cadena mayor " + Cadena);

        // generaremos la subcadena 
        var Subcadena = Cadena.substring(0, 4);
        System.out.println("Esta es la primera subcadena " + Subcadena);

        var Subcadena2 = Cadena.substring(5,10);
        System.out.println("Esta es la segunda subcadena " + Subcadena2);


        // Busqueda de subcadenas con la funcion indexof e lastIndexOf

        var IndiceInicio = Cadena.indexOf("Hola");
        System.out.println(IndiceInicio);

        var IndiceFinal = Cadena.lastIndexOf("Mundo");
        System.out.println(IndiceFinal);


        // Vamos a reemplazar la cadena pero como sabemos que estas son inmutables notaremos que se crea una nueva
        var Reemplazo = Cadena.replace("Mundo", "a Todos");
        System.out.println("Asi quedo la cadena reemplazada " + Reemplazo);


// CONCATENAR CADENAS

        // Metodo .concat

        var Concatenacion = Cadena.concat(" y ").concat(Reemplazo);
        System.out.println("Usando el metodo concat: " + Concatenacion);


        // Clase StringBuilder

        var ConstructorCadenas = new StringBuilder();

        ConstructorCadenas.append("Ahora Usamos el Constructor de Cadenas: ");
        ConstructorCadenas.append(Cadena);

        // el metodo append lo que va a hacer es agregar la cadena q1ue llamemos en él.
        // Tambien podemos añadirle más cadenas repitiendo el proceso de la segunda linea.

        ConstructorCadenas.append(" Y ");
        ConstructorCadenas.append(Reemplazo);

        // Ahora para imprimir este resultado necesitamos crear una variable y llamar el metodo que creamos y al final llamar el metodo toString.

        var Construido = ConstructorCadenas.toString();
        System.out.println(Construido);


        // Clase StringBuffer

        var Cadena_1 = "Hola,";
        var Cadena_2 = "Bienvenido";

        var UniendoBuffer = new StringBuffer();
        
        UniendoBuffer.append("Ahora vamos a crear con Buffer: ").append(Cadena_1).append(" ").append(Cadena_2).toString();

        System.out.println(UniendoBuffer);

        // clase join

        var usoJoin = String.join(" Ahora usaremos el join:  ", Cadena_1, Cadena_2);
        System.out.println(usoJoin);


        

    }
}
