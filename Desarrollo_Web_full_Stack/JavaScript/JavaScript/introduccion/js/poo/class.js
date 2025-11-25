//2 video= clases 


//un constructor es un metodo que se ejeutara cada vez que se crea una nueva instancia de la clase  



class People {
    
// Los metodos estaticos o propiedades estaticas nos permiten a nosotros poder usar dichos metodos y propiedades sin necesidad de instanciar(darle características) la clase que estamos usando.

    static cantidad= 0;

    // ese metodo  se vera como una propiedad de la clase 
    static get contarInst (){
        return People.cantidad+ ' Cantidad de instancias';
    }


    // crear metodo estatico 

    // para los metodos estaticos podemos hacer lo que queramos menos hacer referencia a las propiedades de la clase 

    // podemos definir propiedades estaticas por fuera de la clase  

    static metodoFirst (){
        console.log(this.nombre); //siempre nos dará undefined ya que estamos llamando a las propiedadesde la clase
        console.log('Metodo Estático'); 
    }


    //aca se pondrian las propiedades que ya hemos visto con anterioridad 
    //estas son variables con valor indefinido ya que no se les asigna alguno 
    //se estan inicializando las propiedades de la clase, osea las caracteristicas del objeto
        nombre='';
        Apodo='';  //las propiedades se pueden comentar y se pueden declarar mejor o igual 
        age='';  
        descript = '';         //en el constructor  y se les puede asignar un valor por defecto

    //constructor
    //los constructores son metodos que se ejecutan cuando se crea una nueva instancia de la clase y sirven para inicializar las propiedades de la clase
    //ahora vamos a recivir las variables en el  constructor 
    //esta variables se les puede poner valores por defecto para que no arroje el indefinido
    constructor(nombre, Apodo, age) {
    //siempre tratemos de llamar los dis igual a los que recibimos como argumentos ya que esto puede gneerar confusiones
        this.nombre= nombre;
        this.age = age;
        this.Apodo = Apodo;

        //console.log('hola!')

        // el constructor es el emjor lugar para incrementar el conteo para no tener que hacerlo fuera de la clase 
        People.cantidad ++;
    }

    //seters Recibir
    //normalmente los set solo reciben un argumento, pero se pueden recibir mas
    // et set es para establecer un valor 
    set NombrePlayer (descript){
        this.descript = descript.toUpperCase();
    }

    // getters recuperar 
    // mientas el get es para recuperar ese valor 
    // retornara una propiedad construida 
    get getJugadorBest () {
        return `El juego ${this.nombre} Con la descripcion: ${this.descript}`;
    }

    
    //DESPUES DEL CONSTRUCTOR SE UBICARIAN LOS METODOS
    //los metodos son funciones que estan dentro de una clase para que se puedan ejecutar en las instancias de la clase

    game (){
        console.log(`${this.Apodo} esta jugando con ${this.nombre}`);
    }

    datosGame (){
        //ahora nos podemos referir a las propiedades de la clase con el this
        
        //y nos podemos referir a el otro metodo de la clase con this y el nombre del metodo
        this.game();

        console.log(`${this.Apodo} tiene ${this.age} años y esta jugando con ${this.nombre}`);

    }


}


//mirara que son las instancias 
const halo = new People('Master Chief', 'Jhon117', 47);
// console.log(halo);

// const gears = new People('Marcus', 'Marcus antonio', 74);

console.log('contar', People.cantidad );
console.log(People.contarInst);

// sets y gets 
// establecer el get 
halo.NombrePlayer = 'Es un juego shooter de siencia ficción con un lore muy grande';

// getter
// console.log(gears);


// console.log(halo.getJugadorBest);

People.cantidad = 3;
//imprimir un metodo
halo.game();
// gears.game();

//imprimir otro metodo 
halo.datosGame();  
// gears.datosGame();



//orden de elementos de una clase:
//1. propiedades y metodos estaticos
//2. constructor
//SER Y GETS 
//3. metodos
//4. instancias
//5. ejecutar metodos de la clase
//6. ejecutar metodos de la instancia
//7. ejecutar metodos de la instancia con otros metodos de la clase
//8. ejecutar metodos de la instancia con otros metodos de la instancia 


//el set y el get dentro de la funcion constructora se pueden crear metodos que se llaman set y get, estos metodos sirven para modificar y obtener los valores de las propiedades de la clase

//antes de recibir una propiedad se maneja como se va a guardar (establecer) y como se va a recibir (obtener)


// metodo estatico 
People.metodoFirst();

// Tratar de no declarar las propiedades por fuera de la clase ya que externos podran ver nuestras instancias 
People.CaracaExter = 'Caracteristica externa';

console.log(People.CaracaExter);
console.log(People);