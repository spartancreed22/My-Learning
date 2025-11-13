public class GeneradorEmail {
    // Debemos crear un programa el cual nos permita crear un email teniendo en cuenta los siguientes datos:
    // Nombre - Empresa o Escuela - Dominio
        // En el resultado final debe crear con estos valores un email con la siguiente estructura: 
        // Nombre completo en minuscula separando cada espacio por un . + @ + nombre de la empresa pegada y en minuscula + el dominio

    public static void main(String[] args) {
        var Nombre = "Joshua Ortiz Gaitan";
        var Empresa = "Dynatrace";
        var Dominio = ".com.co";

        var Email = new StringBuilder();
        Email.append(Nombre.toLowerCase().strip().replace(" ", ".")).append("@").append(Empresa.toLowerCase()).append(Dominio).toString();


        System.out.println("Bienvenido al generador de emails");
        System.out.println("Este es tu email generado:"+ Email);
    }
}
