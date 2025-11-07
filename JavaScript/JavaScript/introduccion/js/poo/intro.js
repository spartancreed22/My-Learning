
const Josh = {
    nombre:'Joshua',
    edad: 30
}

const Juan = {
    nombre:'Camilo',
    edad: 23
}

const camila = {
    nombre:'Cami',
    edad: 18,
    imprimir (){
        console.log(`Name: ${ this.nombre } - Age: ${ this.edad } }`);
    }
}



//vamos a crear una funciopara todas las personas: 
//cuando una funcion empieza por mayuscula nos referimos a un indicativo de que la funcion servira para crear instancias pero no es algo obligatorio, es solo un indicativo 

//si en java script una funcion notiene un return, se mostrara  como undefined 
function People ( nombre, edad ) {
    console.log('se ejecuto la linea');

    //aca estamnos haciendo referencia al objeto con el this y asignando la propiedad .nombre / .edad y las esta igualando con los argumentos que recibe (nombree, edad);
    this.name= nombre;
    this.age = edad;

    //entonces nos dice que la variable .name le damos el valor de lo que recibimos como argumento que es nombre, lo mismo para la .age


    this.imprimir  = function(){
        console.log(`Name: ${ this.name } - Age: ${ this.age     } }`);
    }
}


 //LA PALABRA NEW INDICA EN JS QUE SE QUIERE CREAR UNA NUEVA INSTANCIA 
const yari = new People( 'Natalia', 18);
yari.imprimir();








