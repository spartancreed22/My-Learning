# TIPOS DE DATOS

Tipos de datos en java

### Enteros (su valor por default es 0)

Tipo byte: Escapas de guardar numeros enteros hasta el numero 127, ya que si excede esta cantidad nos arrojara un error de compilación ya que se le estaria asignando un tipo de dato entero

    byte tipoByte = 127;

Tipo short: este tipo de dato puede almacenar hasta 16 bits numericos:

    short Tiposhort = 32000;

En Java, el tipo de dato short tiene un rango de -32,768 a 32,767.
Vamos a explicar por qué:

El tipo short en Java es un entero de 16 bits con signo
16 bits = 2^16 posibles valores = 65,536 valores totales
Al ser con signo, se divide en:

Números negativos: -32,768 a -1
Cero: 0
Números positivos: 1 a 32,767



Tipo int: este tiene la capacidad de guardar datos muchisimos mas grandes  ya que almacena hasta 32 bits

    int tipoInt = 12124124;

Tipo long= este tipo de dato es el que más mas datos puede almacenar ya que tiene la capacidad de almacenar 8 bytes y se debe poner al final un L mayuscula para poderlos iterar:
    
    long TipoLong = 3411234563456L; //la L también indica que es un tipo de dato long


### Punto flotante (su valor por default es 0.0)

Tipo float: Este soporta hasta 32 bis, se deben de identificar al final con una letra F mayuscula indicando que es un numero flotante porque si no se hace esto lo asumira como un tipo double
    
    float TipoFlotante = 3.14F;

Tipo double: Este es capaz de almacenar 64 bits y al final si se desea se añade la d para saber que tipo de datos es:

    double TipoDouble = 3.141516D;

### Caracter (su valor por default es \u0000)

Tipos Char: a este tipo de dato se le pueden añadir todos los datos del juego unicode ya que este es el estandard para la mayoria de los sistemas, por lo tanto se puede añadir un valor de caracter o un valor decimal

    char TipoChar = 'A';
    Al ser el valor del juego unicode tambien tiene un valor decimal
    char TipoChar = 65;

### Booleano (su valor por default es false)

Tipo Booleano: solo puede tener dos valores los cuales son Verdadero o Falso (true - false)

    boolean TipoBool= true;

### Para una cadena - object o tipos de referencia (su valor por default es null)

Cadena de texto.

    String nombre = "Joshua";


## Como llavar las variables

Esto es para hacer más comprensible el codigo y que sea más facil de modificar en el futuro

1) Las variables deben comenzar con una letra, un simbolo de $ o un _
   ej: nombre -$nombre - _nombre

2) No Puede contener espacios o caracteres especiales
3) No debe tener palabras reservadas como int - for - While


### Tipo Var

Su funcion es inferir los tipos de datos en variables locales osea variables definidas dentro de un metodo

Con este podemos definir una variable pero sin especificar que tipo de dato será para que el codigo sea mas consciso y legible

Limitaciones y reglas: Es unicamente para definir variables locales dentro de metodos no puede usarse para definir variables de clases o parametros de metodos 

También debe de inicializarse en la misma linea en donde se declara:
    var numero;
    numero = 10; esto nos dará error

El tipo de dato debe ser inferible
    var lista = null; no se puede saber que tipo de datos es
    
Si una variable se inicializa con un tipo de dato, posteriormente no podra cambiarse este tipo 

## Unir Cadenas
es el proceso de unir dos o mas cadenas para asi poder formar una cadena nueva, la forma más conocida es usar el operador +
    var name = "Joshua";
    var lastName= "Gaitan";

    var FullName = name + " " + lastName;
    "Joshua Ortiz"


## Constantes

Es un valor el cual no puede modificarse una vez halla sido inicializada, Las constantes deben inicializarse con valores los cuales sabremos que no van a cambiar a lo largo de la ejecución de nuestro codigo / programa

Sintaxis:

    final   + tipo de dato o var    + Nombre de la constante    + = + valor + ;
    se usa para establecer una constante

    final int diasSemana = 7;

También se puede usar el tipo var.
