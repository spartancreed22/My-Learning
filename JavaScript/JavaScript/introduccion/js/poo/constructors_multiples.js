

// Declaración de la clase
class People {
    

    // metodo estatico para crear otro "constructor"
    // su funcion sera crear otra instancia de la persona utilizando el costructor pero utilizando un argumento diferente
    
    static combObjeto ({ name, lastna, country}){
        return new People(name, lastna, country)

    }

    // Constructor
    constructor( name, lastna, country ) {
      
      
        // Propiedades de la clase
      this.name = name;
      this.lastna = lastna;
      this.country = country;

    }
  
    // Método de la clase
    getImfo() {
      console.log(`Hola, mi nombre es ${this.name} con mi apellido ${this.lastna}, del pais ${this.country}`);
    }

  }
  
  const nombre1 = 'Natalia',
        apellido1 = 'Mendoza',
        pais1 = 'galarza';
    

  const fer = {
    name : 'Fernando',
    lastna : 'Alejandro',
    country : 'Bosque'
  }


  // Creación de una instancia de la clase
  const People1 = new People( nombre1, apellido1, pais1 );
  const People2 = People.combObjeto( fer );
  


  People1.getImfo();
  People2.getImfo();

  

