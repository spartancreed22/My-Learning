// OBJETOS

// Son estructuras de datos las cuales permiten almecenar datos y funcionalidades relacionadas

// comparados con otras estructuras para guardar datos estos pueden contener multiples valores y metodos

const object = {
    
    // Propiedad: Algo único del objeto (caracteristica)

    prop1: 'valor1',
    prop2: true,
    array: [1, 2, 3],
    funciones: () => {
        console.log("hola mundo")
    },

    saludar: () => { console.log("hello world")},

    objeto_interno: {
        a: 1,
        b: 'string',
        c: {
            x: true
        }
    }

};

console.log(object);




// FORMA ANTIGUA

// se crea primero el objeto vacío
let person = {};
console.log(person);


// para poderlo llenar con propiedades, llamamos al objeto y con el "." podremos acceder a una propiedad || cambiarle su valor || agregar una propiedad nueva

person.name = 'Josh';
person.city = 'Ibague';
person.age = 19;
person.saludar = () => { 
    console.log("hello world");
};
console.log(person);


// accede a las propiedades de un objeto 

// imprimimos en consola + el nombre del objeto + . para poder acceder al objeto + el nombre de la propiedad 

    // SI TIENEN MÁS OBJETOS INTERNOS, SE PODRÁ SEGUIR ACCEDIENDO A ELLOS MEDIANTE EL " . "
console.log(person.name);
person.saludar();


// eliminar propiedad

delete person.city;
console.log(person);


// OTRAS MANERAS DE CREAR OBJETOS

// JS tiene metodos bill int osea creados en el propio lenguaje (son herramientas del lenguaje) los cuales permiten crear objetos en base a otros o desde cero

// hay uno q permite congelar el objeto y que no sofre modificaciones

    // object  es una utilidad o clase que ya tiene JS 

    // object tiene bastantes funcionalidades

    // object.create


// OBJETO DE UN OBJETO 

const caracPersona = {
    nombre: 'Joshua',
    apellido: 'Ortiz',
    altura: 1.78,
    edad: 19
}

// se crea una variable y aplicaremos el object.create para crear el objeto a partir del objeto caracPersona

const infoProfesion = Object.create(caracPersona);

console.log(infoProfesion);
console.log(infoProfesion.nombre);

// ESTO ES HERENCIA POR PROTOTIPOS YA QUE SE TOMA UNA BASE PARA ACOPLARLA A ALGO NUEVO  (objeto prototype)

// añadirle a este objeto nuevas propiedades
infoProfesion.datos = "Hoja de vida";


    // Object.assign

// Copia los valores de un objeto en uno nuevo
                // el assign primero recibe el objeto q boy a construir (target) de (source) que es la funte de datos osea un objeto ya existente
const objectOrigen = {
    apellido: 'Ortiz',
    altura: 1.78,
    edad: 19
}


                // en el target pondremos un objeto vacio solo como ejemplo
// const CopiarProp = Object.assign({}, objectOrigen);
// acá vemos que al ejecutarlo añade todas las caractiristicas de objectOrigen

const CopiarProp = Object.assign({J : "Joshua"}, objectOrigen);
// pero al ejecutarlo aca nos podemos dar cuenta que a cambio del anterior esta funcioon suma todos las propiedades 

    // si no existe lo creo pero si existe entonces lo actualiza y reemplaza 

// pero si se añaden más objetos con propiedades del mismo nombre, entonces el último objeto pondrá el valor a la variable ( la actualiza)


// Object.freeze
// Al congelar el objeto este no podrá ser modificado de cualquier forma, ya sea añadir o editar propiedades 

const freezePersona = {
    nombre: 'Joshua',
    apellido: 'Ortiz',
    altura: 1.78,
    edad: 19
}

Object.freeze(freezePersona);

// solo me dejará agregar un nuevo item usando el .push || .pop ya que cambian la referencia

// ya que hace la realizar solo ambios a arrays u objetos internos al objeto padre




// VALOR VS REFERENCIA

// al comparar objetos u arrays el lenguaje no guarda el valor al que es igual si no una referencia en memoria ram 

const number_1 = 1;
const number_2 = 1;
console.log(number_1 === number_2);

// TRUE

const Obct_1 = { a: 1, b: 'Joshua'};
const Obct_2 = { a: 1, b: 'Joshua'};

// false
console.log(Obct_1 === Obct_2);


// PERO SI YO LE ASIGNO EL VALOR DE UN VALOR DE UN OBJETO A OTRO Y LOS COMPARO ENTONCES AHÍ SI ME DARÁ TRUE 
// ESTO OCURRE PQ SE PASA LA MISMA REFERENCIA DE MEMORIA DE UN OBJETO A OTRO

Obct_3 = Obct_1;

console.log(Obct_1 === Obct_3); //COMPARTEN LA MISMA REFERENCIA DE MEMORIA 

console.log(Obct_3 === Obct_2); //NO COMPARTEN LA REFERENCIA DE MEMORIA POR MAS Q TENGA EL MISMO VALOR

// AL IGUALAR LAS DOS VARIABLES ANTERIORES CUANDO REALICEMOS CAMBIOS EN UNA LA OTRA TAMBIÉN SE VERÁ AFECTADA YA QUE TIENEN EL MISMO CAMPO EN LA RAM

Obct_3.a = 117;
console.log(Obct_3);
console.log(Obct_1);


// En la consola nos imprimirá 

// { a: 117, b: 'Joshua' }
// { a: 117, b: 'Joshua' }

// YA QUE TIENEN LA MISMA REFERENCIA 


// COMO EVITAR QUE SE MODIFIQUEN VALORES EN VARIOS OBJETOS QUE OCUPAN LA MISMA REFERENCIA 
// Propiedades y Valores

const obj4 = Object.create(obj1);

// el Object.create nos creara un objeto que trae las propiedades del otro objeto mas no ocupan el mismo espacio en memoria




