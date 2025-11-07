// fines de semana abre a las 11
// entre semana abre a las 8 

// consultar en el sitio web si ya está abierto el local 
// const day = 3;
// const actualhour = 11 ;

// let hour;
// let mesaje;
// let estado;

// if ( day == 0 || day == 6){
//     hour= 11;
//     mesaje= "los fines de semana";
// }else{
//     hour= 8;
//     mesaje= "Entre semana";
// }

// // console.log({  mesaje, hour });

// if ( actualhour < hour){
//     estado = `Esta Cerrado, abrimos a las ${hour}`;
// }else{
//     estado = `Abierto`
// }

// console.log({mesaje, estado})



                    // RESUMEN

// fines de semana abre a las 11
// entre semana abre a las 8 

// consultar en el sitio web si ya está abierto el local 


// nos dice que si un arreglo tiene los valores de [0,6] y el includo nos dice que variable lo tiene
// if ( [0,6].includes(day)){ 
//     hour= 11;
//     mesaje= "los fines de semana";
// }else{
//     hour= 8;
//     mesaje= "Entre semana";
// }


// OPERADOR TERNARIO
const day = 3;
const actualhour = 11 ;

let hour;
let mesaje;
let estado;

// es la misma condicional anterior, nos dice que si (?)el dia tiene un valor de 0 o 6 entonces que le asigne un valor a hora de 11 y sino (:) que le de un valor de 8

hour = ([0,6].includes(day)) ? 11 : 8;

// console.log({  mesaje, hour });

estado= (actualhour < hour) ? `Esta Cerrado, abrimos a las ${hour}` : `Abierto`;

// if ( actualhour < hour){
//     estado = `Esta Cerrado, abrimos a las ${hour}`;
// }else{
//     estado = `Abierto`
// }

console.log({hour, estado})