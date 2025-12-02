

// const Mayor = ( a, b ) => {
//     return ( a > b ) ? `A es valor mayor = ${a}` :`B es mayor = ${b}`;
// }

// console.log( Mayor(16, 13));

// el anterior codigo se puede simplifacar en una linea:

const Mayor = ( a, b ) => ( a > b ) ? `A es valor mayor = ${a}` :`B es mayor = ${b}`;

const Afiliado = (miembro) => (miembro) ? `5000 pesos` : `1500 pesos`;

console.log( Mayor(16, 13));
// console.log( Afiliado (miembro = false))
console.log( Afiliado(true))



const friend = true;

const FriendList = [
    'Camilo',
    'Juan',
    'Santiago',
    friend ? `Jhon` : `Lulz`
]

console.log(FriendList);



const NotaFinal = 73 ;
const Calificacion = NotaFinal >= 90 ? 'Superior' :
                     NotaFinal >= 75 ? 'Alto' :
                     NotaFinal >= 60 ? 'Basico' :
                     'Bajo';
console.log(NotaFinal, Calificacion);