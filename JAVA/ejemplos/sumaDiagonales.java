import java.util.Scanner;

class sumaDiagonales {
    public static void main(String[] args) {
        int filas, columnas;
        var consola = new Scanner(System.in);

        System.out.println("Digita la cantidad de filas");
        filas = Integer.parseInt(consola.nextLine());

        System.out.println("Digita la cantidad de columnas");
        columnas = Integer.parseInt(consola.nextLine());

        // Verificar si la matriz es cuadrada
        if (filas != columnas) {
            System.out.println("La matriz debe ser cuadrada para calcular diagonales");
            return;
        }

        var matriz = new int[filas][columnas];

        // Solicitar los valores para cada celda
        for (int fils = 0; fils < filas; fils++) {
            for (int cols = 0; cols < columnas; cols++) {
                System.out.println("Coordenadas[" + fils + "] [" + cols + "] = ");
                matriz[fils][cols] = Integer.parseInt(consola.nextLine());
            }
        }

        // Mostrar la matriz
        System.out.println("\nLa matriz ingresada es:");
        for (int fils = 0; fils < filas; fils++) {
            for (int cols = 0; cols < columnas; cols++) {
                System.out.print(matriz[fils][cols] + " ");
            }
            System.out.println(); // Salto de línea al final de cada fila
        }

        // Calcular suma de diagonal principal
        int sumaDiagonalPrincipal = 0;
        for (int i = 0; i < filas; i++) {
            sumaDiagonalPrincipal += matriz[i][i];
        }

        // Calcular suma de diagonal secundaria
        int sumaDiagonalSecundaria = 0;
        for (int i = 0; i < filas; i++) {
            sumaDiagonalSecundaria += matriz[i][columnas - 1 - i];
        }

        // Mostrar resultados
        System.out.println("\nLa suma de la diagonal principal es: " + sumaDiagonalPrincipal);
        System.out.println("La suma de la diagonal secundaria es: " + sumaDiagonalSecundaria);
        System.out.println("La suma de ambas diagonales es: " + (sumaDiagonalPrincipal + sumaDiagonalSecundaria));
    }
}