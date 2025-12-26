// Los parametros por defectos son todos aquellos que tienen un valor asignado en la definicion de la funcion


(() => {

    //Para esto entonces usaremos el mismo ejemplo de la suma de dos numeros

    let Name : string= "Joshua";
    // let Surname : string= "Ortiz";

    // Como vimos en el anterior ejemplo de los parametros opcionales, ahora si queremos añadir otro parametro a nuestra funcion debemos primero tener en cuenta el orden de los parametros

    // Ya que no se puede definir un parametro por defecto u obligatorio despues de uno opcional.

    // Esto se debe a que si no se le pasa un valor opcional a la funcion, entonces el parametro por defecto tomaria el valor del parametro opcional y eso generaria un error.

    //Entonces esto es muy bueno para cuando creemos nuestra funcion y queramos llamarla entonces no tendremos errores de parametros.

    // Pero si queremos organizar el parametro opcional en medio de los parametros obligatorios podemos usar los parametros por defecto, dandonle un valor por defecto al parametro.

    const SumarObligatorios = (Name:string, Surname?:string, Upper:boolean = false) => {
        //Aqui le definimos el parametro Upper con un valor por defecto de false

        // Entonces creemos una condicion si recibimos a upper como true entonces convertimos el nombre completo a mayusculas

        if( Upper ){
            return ` Su Nombre en Mayuscula es: ${(Name + `${Surname || 'Campo de apellido Vacio' }`).toUpperCase() }`;
        }else{
            return `Su nombre completo es: ${Name}  ${Surname || 'Campo de apellido Vacio' }`;
        }

    

        return `Su nombre completo es: ${Name}  ${Surname || 'Campo de apellido Vacio' }`;
    }
    
    const Suma = SumarObligatorios(Name, "Ortiz", true);


})();