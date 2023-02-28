/**
 *  Ejercicio 3
   La política de cobro de una compañía telefónica es: cuando se realiza una llamada, el cobro es por el tiempo que ésta dura, de tal forma que los primeros
   cinco minutos cuestan 1 euro, los siguientes tres, 80 céntimos, los siguientes dos minutos, 70 céntimos, y a partir del décimo minuto, 50 céntimos.
   Además, se carga un impuesto de 3 % cuando es domingo, y si es otro día, en turno de mañana, 15 %, y en turno de tarde, 10 %. Realice un algoritmo para determinar
   cuánto debe pagar por cada concepto una persona que realiza una llamada.
*/
var Ejercicio3 = /** @class */ (function () {
    function Ejercicio3() {
    }
    Ejercicio3.prototype.ejercicio3 = function () {
        var duracionLlamada;
        var cincoMinutos = 1;
        var tresMinutos = 0.80;
        var dosMinutos = 0.70;
        var decimoMinuto = 0.50;
        var dia;
        var turno;
        var impuestoDiaYTurno;
        var domingo = 0.03;
        var mañana = 0.15;
        var tarde = 0.10;
        var cobro;
        duracionLlamada = Number(prompt('Ingresa el número de minutos de la llamada: '));
        dia = Number(prompt('Si fue la llamda el dia domingo escribe el numero 1: ' + '\nSi fue otro día escribe el número 2: '));
        turno = Number(prompt('Si fue la llamda en el turno de la mañana escribe el numero 1: ' + '\nSi fue en el turno de la tarde escribe el número 2: '));
        if (duracionLlamada <= 5) {
            cobro = (duracionLlamada * cincoMinutos);
        }
        else if (duracionLlamada <= 8) {
            cobro = (5 * cincoMinutos + (duracionLlamada - 5) * tresMinutos);
        }
        else if (duracionLlamada <= 10) {
            cobro = (5 * cincoMinutos + 3 * tresMinutos + (duracionLlamada - 8) * dosMinutos);
        }
        else {
            cobro = (5 * cincoMinutos + 3 * tresMinutos + 2 * dosMinutos + (duracionLlamada - 10) * decimoMinuto);
        }
        if (dia == 1) {
            impuestoDiaYTurno = (cobro * domingo);
        }
        else if (turno == 1) {
            impuestoDiaYTurno = (cobro * mañana);
        }
        else {
            impuestoDiaYTurno = (cobro * tarde);
        }
        var total = (duracionLlamada + impuestoDiaYTurno);
        alert('La duración de la llamada fue: ' + duracionLlamada + '\nEl día de llamada fue: ' + dia + '\nEl turno de la llamada es: ' + turno + '\nEl total de la llamada es: ' + total);
    };
    return Ejercicio3;
}());
var objeto3 = new Ejercicio3();
objeto3.ejercicio3();
