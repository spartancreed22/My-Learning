
import java.util.Scanner;

public class diagonales {
    public static void main(String[] args) {

// Introducir valores a la matriz

        int filas, columnas ;
        var consola = new Scanner(System.in);

//definir la matriz
        System.out.println("Digita la cantidad de filas");
// se hace la conversion a numero entero
        filas = Integer.parseInt(consola.nextLine());

        System.out.println("Digita la cantidad de columnas");
        columnas = Integer.parseInt(consola.nextLine());

        var matriz = new int[filas][columnas];

//solicitar los valores para cada celda

        for(int fils = 0; fils < filas; fils++){
            for(int cols = 0; cols < columnas; cols ++){
                System.out.println("Coordenadas[" +fils + "] [" + cols + "] = " );

                //en la anterior linea le solicitamos al usuario los valores, acá los vamos a ir guardando
                matriz[fils][cols] = Integer.parseInt(consola.nextLine());
            }
        };

//Iterar valores en la matriz
//Mostrar todos los valores en general

// para recorrerlos tenemos que hacer dos for para que recorran filas y columnas, el primero hace las filas
        for(int fils = 0; fils < filas; fils++){
            for(int cols = 0; cols < columnas; cols ++){
                System.out.println("Coordenadas[" +fils + "] [" + cols + "] = "  + matriz[fils][cols]);
            }
        };

    }
}
