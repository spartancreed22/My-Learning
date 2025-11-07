const Musicos = [ 'Sara', 'Sebas', 'Joshua', 'Juan', 'Macias'];

let Veces = 0;

// haga hasta 
// Tener en cuenta que la condicion del while siempre tiene que ser verdadera para que se ejecuta,    y no pd se = False, Undefined, Null
while ( Veces < Musicos.length){
    // me dice Musicos[Veces] ya que empieza a recorrer el array musicos desde el valor que tiene veces osea = 0
    console.log(Musicos[Veces]);
    // aumentar de a dos 
    // Veces += 2 o Veces += 3
    Veces++;
};

// para salir del CredentialsContainer, se pd usar una condicional y escribir un break 
// if ( i === 1){
//     break;
// }  

// y si quiero que en vez de romper el CredentialsContainer, continue, enconces le escribo un continue para que salga de la condicional y siga con el ciclo 

            // Ciclo Infinito

// while ( Musicos[Veces]){

//     if ( i === 1){
//         continue;
//     }  
//     console.log(Musicos[Veces]);
//     Veces++;
// }



// ciclo do While 
// La diferencia entre los dos es que este se ejecutará solamente una vez a cambio del ciclo while 

// se ejecuta el codigo que se ponga en el do{} siempre y cuando se cumpla la con la condicion del while, se repite hasta que la condicion no se cumpla 

console.warn('Do While');
let Contador = 0;

do{
    console.log(Musicos[Contador]);
}while(Musicos[Contador]);