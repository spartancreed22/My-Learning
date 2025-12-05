
const Notas = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'la', 'Si'];

console.warn('FOR');

//Dentro de los parentesis va lo que se quiere RTCPeerConnectionIceErrorEvent, osea la condicion que le queremos dar

//dentro del parentesis se divide en 3 partes, 
//1 donde se inicializ la variabble
//2 esta parte va a se la condicion
//3 será el incrementador
//for( let Veces = 0; Veces < 8; Veces ++){

for( let Veces = 0; Veces <= Notas.length -1; Veces ++){
    console.log(Notas[Veces]);
}


//diferencia es que se evaluara las veces que el contador con la cantidad de elementos dentro de Musicos de forma automática 
console.warn('FOR IN');
for( let Veces in Notas ) {
    console.log(Notas[Veces]);
}


//Se usa para tener referencias a valores de objetos o arreglos de una forma más sencilla
console.warn('FOR OF');
for( let Veces in Notas ) {
    console.log(Veces);
}

