# MANEJO DE CADENAS EN JAVA

Una secuencia en java es una secuencia de caracteres, se utilizan para almacenar y manipular texto.

como las cadenas son objetos, se pueden crear instancias de las cadenas que no es lo mas comun pero podemos hacerlo:

    var cadena = new String ("Hola Mundo");
    estamos creando un nuevo objeto de tipo cadena de forma formal 


Tambien se pueden crear los bloques de textos los cuales son más extensos:
    var Cadena2 = """
            Este 
            es un texto 
            multilinea
    """


## Manejo de indices

Los indices de memoria para una cadena de texto se manejan igual a una lista ya que se indexan de manera secuencial comenzando desde 0 hasta la longitud menos 1

Si queremos acceder a estos indices entonces utilizaremos la funcion charAt(aqui ingresamos el indice de la letra deseada);

    var Saludar = "Hola Mundo";

    String caracterUno = Saludar.charAt(0);


## Inmutabilidad de cadenas

Una vez creamos una cadena, los caracteres dentro no se pueden modificar, para poder modificarla, entonces debemos crear otro objeto string y asignarlas (en memoria ram)

Como podemos ver las cadenas son inmutables (no se pueden modificar, pero se asigna una nueva)

public class Inmutabilidad {
    public static void main (String[] args){
        var Cadena_Prueba= "Hola";

        //Al reescribirla lo que se hace es que se crea una nueva
        Cadena_Prueba = "Adios";
    }
}


## Metodos para Strings

Vamos a ver los metodos que se usan para manejar strings
    String Saludar = "Hola Mundo";


### Obtener el largo de la cadena
    var tamanio = Saludar.length();


### Reemplazar caracteres
    var Editar = Saludar.replace('o', 'a');
                            La letra que se quiere modificar en toda la cadena - la letra por la que se va a reemplazar



### Convertir a mayusculas
    var Mayus = Saludar.toUpperCase();
        Para hacer minusculas   .toLowerCase();

### Eliminar espacios

    String name = " Juan Camilo";
    name.trim()

El metodo trim lo que hace es eliminar los espacios que tengan al principio y al final, mas no los espacios del medio


# Subcadenas 

Primero que todo una subcadena es una parte de una cadena original por ejemplo: 

    Cadena = "Hola Mundo";
    Subcadena = "Hola";

Pero tambien se pueden generar con un solo caracter o varios aleatorios.

Para crear subcadenas hay que proporcionar el indice inicial hasta el indice final de la cadena padre

    var Fullname = "Joshua Ortiz";

    String subCadena = Fullname.substring(0,5);

    Esto nos imprimira solamente "Joshua"


## Buscar Subcadenas

Para poder buscar subadenas usaremos la funcion **indexOf** ya que buscaremos subcadenas precisas y nos dará el primer indice de donde se ubica la subcadena, y si no se encuentra entonces su resultado esrá de "-1"

Si la cadena se repite varias veces en la cadena original entonces nos devolvera el numero de la primera vez en la que aparece.

Teniendo en cuenta esta misma funcion vamos ahora a usar **lastIndexOf** para ahora encontrar el indice de la ultima letra.


## Reemplazar subcadenas

Para reemplazar usaremos el mismo replace que usamos anteriormente en las cadenas con:

    .replace("palabra que queremos cambiar", "el texto que lo va a reemplazar)


# Concatenacion de Cadenas

### metodo Concat.

Ya sabemos que para unirlas podemos usar el simbolo + peroo ahora usaremos el metodo concat.

el metodo concat se llamar para unir dos cadenas si deseamos, o inclusive aún más cadenas o espacios en blanco.

        var Concatenacion = Cadena.concat(" y ").concat(Reemplazo);
        System.out.println(Concatenacion);


### Clase StringBuilder.

Esta clase es muy eficiente para realizar esta tarea de unir de forma repetitiva las cadenas ya que es mutable y no crea diferentes instancias de cadenas ya que va a generar solamente una y no varias cadenas como en los anteriores metodos.

    var ConstructorCadenas = new StringBuilder();
    ConstructorCadenas.append(Cadena);

El metodo append lo que va a hacer es agregar la cadena q1ue llamemos en él.
con la segunda linea lo que haremos sera empezar a construir una nueva cadena a partir de la variable string llamada en el metodo append

Pero tambien tengamos en cuenta que este constructor nos ayudara a añadir cadenas si seguimos repitiendo el proceso de la segunda linea com en el siguiente ejemplo.

Ahora para imprimir este resultado necesitamos crear una variable y llamar el metodo que creamos y al final llamar el metodo toString.

Como podemos observar es mas eficiente construir una cadena de esta forma ya que solamente nos genera un objeto de tipo cadena en la memoria.

    var ConstructorCadenas = new StringBuilder();

    ConstructorCadenas.append("Ahora Usamos el Constructor de Cadenas: ");
    ConstructorCadenas.append(Cadena);
    ConstructorCadenas.append(" Y ");
    ConstructorCadenas.append(Reemplazo);

    var Construido = ConstructorCadenas.toString();
    System.out.println(Construido);


### Clase StringBuffer

Esta clase es similar a la anterior pero esta es más segura cuando se estan procesando o trabajando con varios hilos ya que hay ocaciones donde varios procesos estarán trabajando y se llaman como hilos.

Y en cuanto a sus sintaxis es practicamente es la misma sintaxis, creando primero la variable con el metodo constructor, y al final se usa la variable y se llama el metodo .append


    var Cadena_1 = "Hola,";
    var Cadena_2 = "Bienvenido";

    var UniendoBuffer = new StringBuffer();
        
    UniendoBuffer.append("Ahora vamos a crear con Buffer: ").append(Cadena_1).append(" ").append(Cadena_2).toString();

    System.out.println(UniendoBuffer);

Como podemos ver el .toString también se puede poner en la misma linea del append para no gastar mas lineas de codigo.

### Join

Se usa para unir cadenas también y a continuación vamos a explicar 



todos los ejemplos de este archivo estan ubicados en : ./ejemplos/Subcadenas.java