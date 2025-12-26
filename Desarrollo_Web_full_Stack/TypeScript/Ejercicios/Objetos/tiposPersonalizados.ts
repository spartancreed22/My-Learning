(() => {


     let PrimerObjeto: { name:string, age:number, Rango:string[], Lider:boolean, getNombre?: () => string } = {

        name: "Jhon",
        age: 57,
        Rango: ["Master chief", "117", "Suboficial"],
        Lider: true
    }

    //Creemos otro objeto similar
    // Que debemos hacer si necesitamos cambiar un tipo de datos que vamos a estar manejando por ejemplo modificar el Rango a tipo number

    //Para no tener que modificarlo en todos los lugares donde se ha usado entonces crearemos tipos personalizados.




    //Para hacer un tipo personalizado en ts existe una palabra reservada llamada "type"

    //Este Type no existe en el codigo de Js,  y estos estan creados para obligar o poner diferentes reglas o constraints

    //Es tal cual como si se estuviera creando un tipo como number - string ..etc.
    //Entonces creamos un tipo el cual contenga todos los datos que queremos que reciban los objetos para asi poderlos modificar

    type tipoHumanos = {
        
        name:string, 
        age:number, 
        Rango:string[], 
        Lider:boolean, 
        getNombre?: () => string
    }

    // Ahora ya no necesitamos poner entre corchetes todo el larguero de tipado name:string, age:number, Rango:string[], Lider:boolean, getNombre?: () => string

    let Humanos: tipoHumanos = {

        name: "Carlo",
        age: 32,
        Rango: ["Civil", "Senior", "Ingeniero"],
        Lider: false,
        getNombre () {
            return this.name;
        }
    }


})()