### Operadores Lógicos

## == Comparador de referencia (ubicacion en la memoria)
Este operador lógico se usa para comparar y este el lugar en donde esta guardado en la memoria, osea compara la referencia en memoria, como en el siguiente ejemplo:

    var Cadena1 = "Hola";
    var Cadena2 = "Hola";

    System.out.println(Cadena1 == Cadena2 );

Peros si queremos crear un objeto o cadena totalmente nuevo debemos de usar la siguiente sintaxis:

    var Cadena3 = new String("Hola");
    asi se crearia un nuevo objeto en memoria y si comparamos Cadena1 == Cadena3 nos mostrara "false ya que compara sus referencias mas no sus contenidos

        System.out.println(Cadena1 == Cadena3 );


## equals Comparador de contenido (valor que tiene cada variable).

Se encarga de comparar el resultado o el valor al que equivale cada variable, esta es la sintaxis correcta

    System.out.println(Cadena1.equals(Cadena3) );

Lo que hace es buscar si la Cadena1 tiene el mismo contenido de la Cadena3