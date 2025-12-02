const BlackJack = (() => {
    'use strict';

    let baraja = [];

    const types = ['S', 'D', 'H', 'C'],
        comodines = ['K', 'J', 'A', 'Q'];

    let puntosGame = [];

    const callcarta = document.querySelector('#llamar_card'),
        stopBtn = document.querySelector('#stop'),
        btnNewGame = document.querySelector('#recet_game');

    const mostrarPuntos = document.querySelectorAll('h5'),
        cardsJugadores = document.querySelectorAll('.cartas_div');

        
    const inicioJuego = (numPlayers = 2) => {
        baraja = crearBaraja();

        puntosGame = [];

        for (let i = 0; i < numPlayers; i++) {
            puntosGame.push(0);
        }

           // mostrar puntos en el html
        mostrarPuntos.forEach( objeto => objeto.innerText = '0');

            // mostrar cartas 
        cardsJugadores.forEach( objeto => objeto.innerText = '');


            // Habilitar botones 
        stopBtn.disabled = false;
        callcarta.disabled = false;


    }

    const crearBaraja = () => {
        baraja = [];

        for (let recorrido = 2; recorrido <= 10; recorrido++) {
            for (let tipos of types) {
                baraja.push(recorrido + tipos);
            }
        }

        for (let tipos of types) {
            for (let comod of comodines) {
                baraja.push(comod + tipos);
            }
        }

        return _.shuffle(baraja);
    }

    const llamarCarta = () => {
        if (baraja.length === 0) {
            throw 'No existen cartas suficientes para llamar';
        }

        return baraja.pop();
    }

    const valoresCards = (carta) => {
        const value = carta.substring(0, carta.length - 1);
        return (isNaN(value)) ?
            (value === 'A') ? 11 : 10
            : value * 1;
    }


    const AcumularPts = (carta, turno) => {

        puntosGame[turno] = puntosGame[turno] + valoresCards(carta);
        mostrarPuntos[turno].innerText = puntosGame[turno];
        return puntosGame[turno];

    }



    const crearCard = (carta, turno) => {
        
        const nuevoDiv = document.createElement('div');
        nuevoDiv.classList.add('col-6');

        const PrintCarta = document.createElement('img');
        PrintCarta.src = `./img/cartas/${carta}.png`;
        PrintCarta.classList.add('carta', 'p-3');
        
        cardsJugadores[turno].append(nuevoDiv);

        nuevoDiv.append(PrintCarta);
    }

    
    const Ganador = () => {

        const [ minputos, puntosPc ] = puntosGame;

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
                alert('¡La Computadora Gana!');
            }
        }, 10);
    }


    const PcTurno = (minputos) => {

        let puntosPc = 0;

        do {
            const carta = llamarCarta();
            
            puntosPc = AcumularPts(carta, puntosGame.length - 1);

            crearCard(carta, puntosGame.length - 1);


        } while ((puntosPc < minputos) && (minputos <= 21));


        Ganador();
    }

    callcarta.addEventListener('click', () => {

        const carta = llamarCarta();

        const puntosPlayer = AcumularPts( carta, 0);

        crearCard(carta, 0); 

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
        PcTurno(puntosGame[0]);
    });

    btnNewGame.addEventListener('click', () => {
        console.clear();

        inicioJuego();


    })


    return{
        desdeCero: inicioJuego

    };

})();
