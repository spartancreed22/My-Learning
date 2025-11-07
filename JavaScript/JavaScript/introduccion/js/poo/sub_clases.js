class People {

    static cantidad = 0;

    static get contarInst() {
        return People.cantidad + ' Cantidad de instancias';
    }

    static metodoFirst() {
        console.log(this.nombre); // Siempre nos dará undefined ya que estamos llamando a las propiedades de la clase
        console.log('Metodo Estático');
    }

    nombre = '';
    Apodo = '';
    age = '';
    descript = '';

    constructor(nombre, Apodo, age) {
        this.nombre = nombre;
        this.age = age;
        this.Apodo = Apodo;
        People.cantidad++;
    }

    set NombrePlayer(descript) {
        this.descript = descript.toUpperCase();
    }

    get getJugadorBest() {
        return `El juego ${this.nombre} Con la descripcion: ${this.descript}`;
    }

    game() {
        console.log(`${this.Apodo} esta jugando con ${this.nombre}`);
    }

    datosGame() {
        this.game();
        console.log(`${this.Apodo} tiene ${this.age} años y esta jugando con ${this.nombre}`);
    }

}

// juego se extiende (hereda)  de la clase persona ya que tienen casi las mismas instancias (caracteristicas),
// nos oslo se heredan los constructores sino también los metodos 
// clase hija juego o clase extendida de otra

class Juego extends People {
    tipo= 'accion';


    // debo llamar el constructor del padre (People)
    // apenas llame al constructor debo llamar al super() de forma inmediate 

    constructor(nombre, Apodo, age){
        super(nombre, Apodo, age);


        this.tipo='Terror';

        // con super ará referencia a la clase padre de forma directa (People)
        // tener en cuenta que como el constructor cuenta el total de las instancias 
        // por lo que al crear una instancia en Juego se ejecutará el constructor
        
        // esto es para enviar los datos al constructor padre 
    };

    // metodos 
    game(){
        console.log(`${this.Apodo} esta jugando con ${this.tipo}`);

        // si queremos ejecutar algo del metodo padre entonces vamos a poner la palabra super 
        super.game();
    };

}

// console.log(tipo);  
// menciones 

const halo = new Juego('Master Chief', 'Jhon117', 47);
const gears = new Juego();

console.log(halo);
halo.game();