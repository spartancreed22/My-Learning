
// Patron modulo 
// o funcion anonima
// function o empezar con la funcion de flecha  () => {}

// (function () {

// })()


// o


(() => {
    'use strict'


    let baraja = [];

    const types = ['S', 'D', 'H', 'C'];

    const comodines = ['K', 'J', 'A', 'Q'];

    // sumar valor de las cartas

    let puntosPlayer = 0, puntosPc = 0;


    //REFERENCIAS DEL HTML

    // boton pedir carta 
    const callcarta = document.querySelector('#llamar_card');

    // boton para quedarnos con las cartas que tenemos
    const stopBtn = document.querySelector('#stop');

    // boton de refrescar la pagina 
    const btnNewGame = document.querySelector('#recet_game');

    // mostrar cantidad de puntos 
    const mostrarPuntos = document.querySelectorAll('h5');

    // cartas en mi baraja 
    const barajaMia = document.querySelector('#cartas_mias');

    // cartas de la baraja de la pc 
    const barajaPc = document.querySelector('#cartas_pc');




    // funncion para crear una baraja con todas las cartas
    const crearBaraja = () => {

        for (let recorrido = 2; recorrido <= 10; recorrido++) {
            for (tipos of types) {
                baraja.push(recorrido + tipos)
            }
        }

        for (let tipos of types) {
            for (comod of comodines) {
                baraja.push(comod + tipos)
            }
        }

        // console.log( baraja );
        baraja = _.shuffle(baraja);
        // console.log( baraja );
        return baraja;

    }


    // no borrae esta linea pq es la que se encarga de crear la baraja 
    crearBaraja();

    // funcion para tomar una carta
    const llamarCarta = () => {

        // camos a hacer una validacion de seguridad SI la baraja es = a 0 enviaremos un error a la consola

        if (baraja.length === 0) {
            // palabra para imprimir un error en la consola
            throw 'No rxisten cartas suficientes para llamar';
        }
        // La función 'pop()' se utiliza en un array para eliminar y devolver el último elemento del mismo.
        // En este caso, queremos obtener la última carta de la baraja y eliminarla de la misma.
        const carta = baraja.pop();

        //console.log( baraja );
        //console.log(carta); //esta carta debe de ser de la baraja 

        return carta;

    }

    // let baraja = [];
    // llamarCarta();


    // const valoresCards = ( carta ) => {

    // en javascript todos los strings son tomados como arreglos, por lo que podemos extraer las posiciones de las letras de las palabras 

    // entonces en la siguiente linea estámos extrayendo la posición 0 del valor ya que los valores equivalen a un número y a una letra,m por lo que estámos extrayendo el numero
    // const valor = carta[0]


    // El método substring() es útil cuando necesitas extraer partes específicas de una cadena de texto. Ten en cuenta que el índice de inicio debe ser menor o igual al índice de fin. Si el índice de inicio es mayor que el índice de fin, substring() intercambiará automáticamente los valores de inicio y fin para que la extracción sea válida.

    // entonces la funcion de esta linea es tomar todo el string del valor de la carta y quitarle la letra a la que equivale
    //     const valor = carta.substring(0, carta.length - 1);
    //     let punto = 0;

    //     // ahora crearemos una condicional por si lo que recivimos de la variable valor no es un numero 
    //     // isNaN significa si No es un Numero

    //     if (isNaN( valor )){
    //         // si es verdadero entonces que nos convierta la letra en un numero con un operador ternario
    //         punto = (valor === 'A') ? 11 : 10
    //         // si es un az entonces vale once sino vale 10, ademas no tenemos que multiplicarlos * 1 ya que nos los retorna como valor numerico

    //     }else{
    //         console.log('Valor numérico');

    //         // en esta linea le damos un valor str y no convertimos en int al mulktiplicarlo * 1
    //         punto = valor * 1;
    //     }


    //     // algo que debemos tener muy en cuenta al imprimir en consola son los diferentes colores, ya que dependiendo del color nos dirá que tipo de datos está imprimiendo 
    //     console.log(punto);

    //     // es importante saber que tipo de datos manejamos ya que si sumamos 5 + 5 en string me los juntará nomás dando como resultado 55
    // }

    // RESUMEN DEL CODIGO ANTERIOR

    // VALORES DE CARTA

    const valoresCards = (carta) => {

        const value = carta.substring(0, carta.length - 1);
        return (isNaN(value)) ?
            (value === 'A') ? 11 : 10
            : value * 1;

    }


    // TURNO DE LA COMPUTADORA

    const PcTurno = (minputos) => {

        do {
            const carta = llamarCarta();

            puntosPc = puntosPc + valoresCards(carta);

            mostrarPuntos[1].innerText = puntosPc;

            const nuevoDiv = document.createElement('div');

            nuevoDiv.classList.add('col-6');

            const PrintCarta = document.createElement('img');

            PrintCarta.src = `./img/cartas/${carta}.png`;

            PrintCarta.classList.add('carta', 'p-3');

            barajaPc.append(nuevoDiv);
            nuevoDiv.append(PrintCarta);

            if (minputos > 21) {
                break;
            }

        } while ((puntosPc < minputos) && (minputos <= 21));

        // Mostrar mensajes de quien ganó 

        // En este caso, el código dentro de setTimeout se ejecutará después de un retraso de 10 milisegundos. El tiempo proporcionado (10 milisegundos) es muy corto y, en la práctica, esto significa que el código se ejecutará prácticamente de inmediato, pero se ejecutará después de cualquier código que esté en el mismo hilo de ejecución.
        // Dentro de setTimeout, hay una serie de condiciones if que determinan qué mensaje de alerta mostrar según los valores de las variables puntosPc y minputos. Aquí está una descripción de cada condición.


        setTimeout(() => {
            if (puntosPc === minputos) {
                alert('¡Hay un empate!');
            } else if (minputos > 21) {
                alert('¡La Computadora Gana! Te has pasado de 21.');
            } else if (puntosPc > 21) {
                alert('¡Ganaste! La computadora se ha pasado de 21.');
            } else if (minputos === 21 && puntosPc === 21) {
                alert('Es un empate con Blackjack.');
            } else if (minputos === 21) {
                alert('¡Blackjack! Ganaste.');
            } else if (puntosPc === 21) {
                alert('¡La Computadora tiene Blackjack! Pierdes.');
            } else if (puntosPc > minputos) {
                alert('¡La Computadora Gana! Su puntuación es mayor.');
            } else if (minputos > puntosPc) {
                alert('¡Ganaste! Tu puntuación es mayor que la de la computadora.');
            } else {
                alert('¡La Computadora Gana!'); // Si ninguna de las condiciones anteriores se cumple
            }
        }, 10);


    }




    //const value = valoresCards( llamarCarta() );
    //console.log({value});


    // DOM

    // para buscar por el querySelector() hay que tener en cuenta que si necesitamos una etiqueta entonces ponemos 'la etiqueta ejemplo, div', si necesitamos una clase entonces ponemos '.el nombre de la clase' y si necesitamos un id ponemos '#el id de la etiqueta'cada uno va entre los parentesis del querySelector()

    // añadir cosasa al html

    // constante para seleccionar una etiqueta con un id específico
    // const div_boton = document.querySelector('#botones_cards')
    // undefined
    //     div_boton
    // <div id="botones_cards" class="botones row mt-6 justify-content-center">…</div>flex


    // ahora creamos una variable donde crearemos un boton con el createElement, este boton estara guardo en la ram pero no en el html
    // const newBotn = document.createElement('button')
    // undefined
    // newBotn
    // <button></button>

    // listo, ahora con el .append añadiremos ese boton al div que teniamos antes
    // div_boton.append ( newBotn )
    // undefined


    //tenemos que entender que todos los objetos en js pasan por referencia 

    //para añadirle algun teto entro del boton usamos lo anteriormente mencionado que fue el .innerText

    //y para añadirle una class al boton entonces ponemos la variable que teniamos como newBotn y le agregamos el .classList.add('la clase que queremos añadir')


    //evnetos botones
    // Esta funcion que se encuentra dentro de un argumento de otra función es conocida como un CallBack, una funcion que es mandadaa como argumento, puede ser una funcion tradicional o una funcion de flecha ", () =>"
    callcarta.addEventListener('click', () => {

        // ejecutamos la funcion para llamar una carta de la baraja 
        const carta = llamarCarta();

        // aca vamos a ejecutar la funcion de darle un valor a la carta y sumarlos a los puntos que ya se tienen
        puntosPlayer = puntosPlayer + valoresCards(carta);

        // aca diremos que lo que nos añada de la constante 'mostrarPuntos'desde la posicion 0 los puntos de puntosPlayer
        // en el codigo me sale error si dejo la linea desde la posicion 0 mostrarPuntos[0].innerText = puntosPlayer; pero esto se debia a que en la consulta dom lo tenia como solo query selector y no como query selectorall

        mostrarPuntos[0].innerText = puntosPlayer;

        //   <img class="carta p-3" src="./img/cartas/2S.png" alt="Carta Cuatro"> 


        // Ahora crearemos las cartas que apareceran impresas en la baraja del jugador
        // insertar la tabla en el html dentro de un div y con estilos 

        const nuevoDiv = document.createElement('div');
        nuevoDiv.classList.add('col-6'); // Agrega la clase 'col-6' al nuevo div

        const PrintCarta = document.createElement('img');
        PrintCarta.src = `./img/cartas/${carta}.png`;
        PrintCarta.classList.add('carta', 'p-3'); // Agrega las clases 'carta' y 'p-3' a la imagen

        barajaMia.append(nuevoDiv);
        nuevoDiv.append(PrintCarta);


        // condicion para desactivar el boton si el usuario pasó el valor de 21 
        if (puntosPlayer > 21) {
            console.warn('Tus puntos son mayores a 21,');
            console.warn('Perdiste');
            callcarta.disabled = true;
            PcTurno(puntosPlayer);

        } else if (puntosPlayer === 21) {
            stopBtn.disabled = true;
            console.warn('21 awesome');
            PcTurno(puntosPlayer);

        }

    });



    stopBtn.addEventListener('click', () => {
        stopBtn.disabled = true;
        callcarta.disabled = true;
        PcTurno(puntosPlayer);
    });



    btnNewGame.addEventListener('click', () => {

        console.clear();

        // baraja desde cero 
        // primero darle un valor vacio
        baraja = [];
        baraja = crearBaraja();



        // puntos jugaror 
        puntosPlayer = 0;


        // puntos pc 
        puntosPc = 0;


        // mostrar puntos en el html
        mostrarPuntos[0].innerText = '0';
        mostrarPuntos[1].innerText = '0';


        // cartas en mi baraja 
        barajaMia.innerHTML = '';

        // cartas de la baraja de la pc 
        barajaPc.innerHTML = '';


        // Habilitar botones 
        stopBtn.disabled = false;
        callcarta.disabled = false;


    })


})()
// al esta toda entre parentesis enctonces hace que se ejecute ahí mismo sin necesidad de llamarla

/*
clubs
Diamonds
Hearts
Spades
*/



// PROBLEMAS

// EL USUARIO puede desde la consola ingresar y modificar los turnos y ver la baraja (saber como vienen las cartas)

// entonces se van a hacer optimizaciones y corregir posibles errores de seguridad en el anterior codigo



// PATRON MODULO


// Es el patron de diseño mas comun que existe en JavaScript ya que:

// Es compatible con casi cualquier versión
// Una mejor encapsulacion del codigo
// y mejor protección del mismo

// CUando nos referimos a encapsular, nos referimos a dejar que nuestro codigo esté en un contenedor privado para que de manera externa no se puedan manipular ni llamar las variables

// Mejoras
// 1) quitar console.log() de la baraja

// 2) pondremos todo el codigo dentro de la funcion anónima 