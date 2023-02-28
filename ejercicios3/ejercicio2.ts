/** 
 *  Ejercicio 2
    El director de una escuela está organizando un viaje de estudios, y requiere determinar cuánto debe cobrar a cada alumno y cuánto debe pagar a la compañía de 
    viajes por el servicio. La forma de cobrar es la siguiente: si son 100 alumnos o más, el costo por cada alumno es de 65 euros; de 50 a 99 alumnos, el costo es 
    de 70 euros, de 30 a 49, de 95 euros, y si son menos de 30, el costo de la renta del autobús es de 4000 euros, sin importar el número de alumnos. 
    Realice un algoritmo que permita determinar el pago a la compañía de autobuses y lo que debe pagar cada alumno por el viaje.
*/
8
class Ejercicio2 {
    public ejercicio2() {
        let cobroAlumno : number;
        let compania : number;
        let alumnos : number;
        alumnos = Number(prompt('Ingresa el número de alumnos que iran al viaje: '));

        if (alumnos >= 100) {
            cobroAlumno = 65;
            compania = (alumnos * cobroAlumno);
        } else if (alumnos >= 50) {
            cobroAlumno = 70;
            compania = (alumnos * cobroAlumno);
        } else if (alumnos >= 30) {
            cobroAlumno = 95;
            compania = (alumnos * cobroAlumno);
        } else {
            cobroAlumno = (4000 / alumnos);
            compania = 4000;
        }
        alert('El numero de alumnos ingrsados es: ' + alumnos + '\nPago por alumno: ' + cobroAlumno + '\nPago para la compañia de autobuses: ' + compania);
    }
}
let objeto2 = new Ejercicio2();
objeto2.ejercicio2();