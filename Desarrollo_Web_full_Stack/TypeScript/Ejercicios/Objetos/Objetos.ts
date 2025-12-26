// En este documento estaremos aprendiendo sobre los objetos en Ts.

(() => {

// objeto literal

// let PrimerObjeto = {
//     name: "Jhon",
//     age: 57,
//     Rango: ["Master chief", "117", "Suboficial"],
//     Lider: true
// }

// añadamos otra propiedad

// PrimerObjeto = {
    // OtroName = "Juan"
    // name: "Camilo",
    // age: 25,
    // Rango: ["Teniente", "025", "Suboficial"],
    // Lider: false


    //esto nos arrojara error ya que Ts lo que hace es hacer un tipo completamente nuevo con todas las propiedades que creamos desde un principio

    //si por ejemplo queremos modificar una entonces tendremos que ponerlas todas pq el necesita validar que esten


    // CREAR OBJETOS ESPECIFICOS

    // Primero vamos a tipar nuestro objeto

    // let PrimerObjeto: { name:string, age:number, Rango:string[], Lider:boolean } = {
    //     name: "Jhon",
    //     age: 57,
    //     Rango: ["Master chief", "117", "Suboficial"],
    //     Lider: true
    // }
    

    // Al abrir y cerrar las llaves en el tipado estoy indicando que es un objeto y lo que agregue dentro seran las llaves

    //METODOS

   

    // Ahora vamos a crear el nuevo metodo llamado getNombre pero tendremos que ponerlo como opcional  getNombre?: Function, pero no solamente esto pq quedaria muy abierto tendremos que ser mas especificos

    // Al mejorar el tipado con ", getNombre?: () => string" 

     let PrimerObjeto: { name:string, age:number, Rango:string[], Lider:boolean, getNombre?: () => string } = {

        name: "Jhon",
        age: 57,
        Rango: ["Master chief", "117", "Suboficial"],
        Lider: true
    }

    //Creemos otro objeto similar
    // Que debemos hacer si necesitamos cambiar un tipo de datos que vamos a estar manejando por ejemplo modificar el Rango a tipo number

    //Para no tener que modificarlo en todos los lugares donde se ha usado entonces crearemos tipos personalizados.

    let Humanos: { name:string, age:number, Rango:string[], Lider:boolean, getNombre?: () => string } = {

        name: "Carlo",
        age: 32,
        Rango: ["Civil", "Senior", "Ingeniero"],
        Lider: false
    }



})();