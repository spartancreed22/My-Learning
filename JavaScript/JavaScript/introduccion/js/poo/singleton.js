//Un singleton es una propiedad o instancia unica de mi clase

class Solo {
    //un singleton para que quede mas claro es como un ID osea es unido y no se pd cambiar o modificar despues
    
    static caracteristica; //undefined

    //caracteristica va a ser las instancia iniciada de mi clase
    //cuando se quiera inicializar de nuevo caracteristica le devolvera el valor que le diga aqui al principio y demas se puede de4jar como una propiedad privada
    
    name ='';


    // una clase solo pd tener un constructor 
    constructor( name = '' ){
        // console.log( Solo.caracteristica );


        // comprobaremos si el singleton no existe con doble negación !!    
        if ( !!Solo.caracteristica ){
            return Solo.caracteristica;
        }

        // cuando se ejecuta un return no se ejecutaran las lineas posteriores a él


        // haremos un if para saber si la instancia está vacía 
        Solo.caracteristica = this; //this hace referencia a caracteristica en este preciso momento 
        this.name = name;


        // un contructor puede regresar una instancia de la misma clase 
        return this;
    }


}

// lo importante del singleton es que al hacer otro new nos retorne la primera instancia 


const instanca_uno = new Solo ( 'Joshua' );
const instanca_dos = new Solo ( 'Yari' );
const instanca_tres = new Solo ( 'Natalia' );

console.log( `El nombre en la instancia : ${instanca_uno.name}` );
console.log( `El nombre en la instancia : ${instanca_dos.name}` );
console.log( `El nombre en la instancia : ${instanca_tres.name}` );