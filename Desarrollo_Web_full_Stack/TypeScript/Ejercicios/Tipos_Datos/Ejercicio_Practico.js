"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    let parejaHeroes = [batman, superman];
    let villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let FuerzaSupersHeroes;
    (function (FuerzaSupersHeroes) {
        FuerzaSupersHeroes[FuerzaSupersHeroes["MasterChief"] = 0] = "MasterChief";
        FuerzaSupersHeroes[FuerzaSupersHeroes["fuerzaIronman"] = 50] = "fuerzaIronman";
    })(FuerzaSupersHeroes || (FuerzaSupersHeroes = {}));
    const fuerzaFlash = FuerzaSupersHeroes.MasterChief;
    const fuerzaSuperman = FuerzaSupersHeroes.fuerzaIronman;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    // Retorno de funciones
    let batisenal = "Activa";
    function activar_batisenal(batisenal) {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=Ejercicio_Practico.js.map