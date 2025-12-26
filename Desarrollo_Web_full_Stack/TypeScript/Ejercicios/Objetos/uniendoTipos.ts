(() => {

    type tipoHumanos = {
            
        name:string, 
        age:number, 
        Rango:string[], 
        Lider:boolean, 
        getNombre?: () => string
    }

    // Crearemos una variable, especificando que puede tener varios tipos de datos pero ahora cde otra forma creando una condicion or "|"

let tipoPersonalized: (string | number | tipoHumanos) = "Joshua";
console.log(typeof tipoPersonalized)


// al hacer esto entonces podremos asignarle los valores de este objeto:

tipoPersonalized = 20;
console.log(typeof tipoPersonalized)


tipoPersonalized = {
    name: "Julian",
    age: 12,
    Rango: ["bla bla bla", "ble ble ble", "blo blo blo"],
    Lider: false 

}


// Como podamos ver es un tipo objeto no saldra con el nombre de "tipoPersonalized" porque en Js no se puede hacer esto.
console.log(typeof tipoPersonalized)
console.log(tipoPersonalized)



})();