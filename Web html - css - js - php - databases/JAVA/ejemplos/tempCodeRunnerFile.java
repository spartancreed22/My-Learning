import java.util.Scanner;

public class InputsReading {
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
}