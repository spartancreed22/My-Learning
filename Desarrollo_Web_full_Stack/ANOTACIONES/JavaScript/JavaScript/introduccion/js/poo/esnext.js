//Una propiedad se pone privada para que no pueda ser modificada por fuera de la propia clase



class  Cuadrado {
    //pondremos esta propiedad privada para no modificarla despues de la clase y para esro se pone un # antes de la propiedad
    #area = 0;

    constructor( base = 0 , altura = 0 ){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }
}


const Rectangulo = new Cuadrado ( 30, 55 );
//alggo malo es poder modificar el #area ya que es una propiedad calculada y no se le asigna un valor
//por lo que para que no se pueda realizar esta modificacion pondremos la propiedad privada desde la misma clase 
//Rectangulo.#area = 85;

console.log(Rectangulo);