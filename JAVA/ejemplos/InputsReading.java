import java.util.Scanner;

public class InputsReading {
    public static void main(String[] args) {

        // Leeremos un dato tipo cade o string desde la consola
        // Declaramos la variable scanner
        var consola = new Scanner(System.in);

        // Solicitamos la informacion al usuario 
        System.out.println("Proporciona tu nombre: ");

        // crear variable para leer los datos recibidos por consola
        var Name = consola.nextLine();
        // En esta linea usamos nuestro objeto scanner que creamos al principio y usamos el metodo nextLine() para leer la linea completa de la consola.
    
        //  ahora solo impromimos el valor de la variable Name
        System.out.println("Tu nombre es: " + Name);

        
    // Ahora usaremos los demas lectores de consola
        
        
    // Para numeros enteros usamos nextInt()
        System.out.println("Proporciona tu edad: ");
        var age = consola.nextInt();
        System.out.println("Tu edad es: " + age);


    // Para numeros enteros usamos fraccionarios con dos numeros despues del cero usamos nextDouble()
        System.out.println("Proporciona tu estatura (por ejemplo 1.75): ");
        var height = consola.nextDouble();
        System.out.println("Tu estatura es: " + height + " mts");

        // cerramos el scanner
        consola.close();
    
    }
}