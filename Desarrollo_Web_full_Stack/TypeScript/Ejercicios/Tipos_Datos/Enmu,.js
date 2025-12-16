"use strict";
// Ahora concentrémonos en el tipo de dato Enum o enumeracion en TypeScript, es un dato unico de este lenguaje que nos permite definir un conjunto de constantes con nombre, lo que facilita la legibilidad y el mantenimiento del código.
Object.defineProperty(exports, "__esModule", { value: true });
// Nos ayuda a trabajar con valor que tengan un peso o sentido facil de usar, por decirlo asi en este momento los dias de la semana, los meses del año, los estados de una aplicacion, etc.
(() => {
    // Ejemplo practico de un Enum para los dias de la semana.
    // Tengamos muy en en cuenta tambien que las sintaxis para nombrar a los Enum es con la primera letra en mayuscula y usando CamelCase para las palabras compuestas, osea sin espacios y con la primera letra de cada palabra en mayuscula.
    //Es un poco extraña su estructura ya que es una funcion la cual valida si este enmun ya existe y si no entonces lo crea y le asigna los valores que le indiquemos.
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    // uso del enum AudioLevel
    let NivelAudion = AudioLevel.medium;
    //Si imprimimos cada uno de los valores del enum podremos ver que segun su orden entonces su valor aumentara en 1 empezando desde 0 como si fuera un array.
    // So lo miramos desde la traduccion que se le da en Js entonces veremos que se crea un objeto (AudioLevel) con las propiedades y valores que le asignamos, esas propiedades les da el valor automaticamente con su orden empezando desde 0.
    let DaysOfWeek;
    (function (DaysOfWeek) {
        DaysOfWeek[DaysOfWeek["Sunday"] = 1] = "Sunday";
        DaysOfWeek[DaysOfWeek["Monday"] = 2] = "Monday";
        DaysOfWeek[DaysOfWeek["Tuesday"] = 3] = "Tuesday";
        DaysOfWeek[DaysOfWeek["Wednesday"] = 4] = "Wednesday";
        DaysOfWeek[DaysOfWeek["Thursday"] = 5] = "Thursday";
        DaysOfWeek[DaysOfWeek["Friday"] = 6] = "Friday";
        DaysOfWeek[DaysOfWeek["Saturday"] = 7] = "Saturday";
    })(DaysOfWeek || (DaysOfWeek = {}));
    // hay algo curioso en los enum y es que podemos asignarles valores personalizados a cada una de sus propiedades, ya sea numeros o cadenas de texto pero si no se le asigna el numero continuara con su orden de asignacion.
    console.log('Dia de la semana sin valor personalizado:', DaysOfWeek.Monday); // Imprime 1
    // Basicamente son objetos con propiedades.
    // asi se tipa un enum completo en TypeScript
    let dia = DaysOfWeek.Friday;
    console.log('Dia de la semana con valor personalizado:', dia); // Imprime 6
})();
//# sourceMappingURL=Enmu,.js.map