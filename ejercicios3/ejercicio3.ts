/** 
 *  Ejercicio 3
   La política de cobro de una compañía telefónica es: cuando se realiza una llamada, el cobro es por el tiempo que ésta dura, de tal forma que los primeros 
   cinco minutos cuestan 1 euro, los siguientes tres, 80 céntimos, los siguientes dos minutos, 70 céntimos, y a partir del décimo minuto, 50 céntimos. 
   Además, se carga un impuesto de 3 % cuando es domingo, y si es otro día, en turno de mañana, 15 %, y en turno de tarde, 10 %. Realice un algoritmo para determinar 
   cuánto debe pagar por cada concepto una persona que realiza una llamada.
*/

class Ejercicio3 {
    public ejercicio3() {
        
        let duracionLlamada : number;
        let cincoMinutos : number = 1;
        let tresMinutos : number = 0.80;
        let dosMinutos : number = 0.70;
        let decimoMinuto : number = 0.50;
        let dia : number;
        let turno : number;
        let impuestoDiaYTurno : number;
        let domingo : number = 0.03;
        let mañana : number = 0.15;
        let tarde : number = 0.10;
        let cobro : number; 

        duracionLlamada = Number(prompt('Ingresa el número de minutos de la llamada: '));
        dia = Number(prompt('Si fue la llamda el dia domingo escribe el numero 1: ' + '\nSi fue otro día escribe el número 2: '));
        turno = Number(prompt('Si fue la llamda en el turno de la mañana escribe el numero 1: ' + '\nSi fue en el turno de la tarde escribe el número 2: '));

        if (duracionLlamada <= 5) {
            cobro =  cincoMinutos;
        } else if (duracionLlamada <= 8) {
            cobro = ( 5 * cincoMinutos + (duracionLlamada - 5) * tresMinutos);
        } else if ( duracionLlamada <= 10) {
            cobro = ( 5 * cincoMinutos + 3 * tresMinutos + (duracionLlamada -8) * dosMinutos);
        } else {
            cobro =(5 * cincoMinutos + 3 * tresMinutos + 2 * dosMinutos + (duracionLlamada - 10) * decimoMinuto);
        }

        if (dia == 1) {
            impuestoDiaYTurno = (cobro * domingo);
        } else  if(turno == 1){
            impuestoDiaYTurno = (cobro * mañana);
        } else {
            impuestoDiaYTurno = (cobro * tarde);
        }

        let total : number = (duracionLlamada + impuestoDiaYTurno);
        alert('La duración de la llamada fue: ' + duracionLlamada + '\nEl día de llamada fue: ' + dia + '\nEl turno de la llamada es: ' + turno + '\nEl total de la llamada es: ' + total);
    }
}
let objeto3= new Ejercicio3();
objeto3.ejercicio3();