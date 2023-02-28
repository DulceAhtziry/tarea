/** 
 *  Ejercicio 1
    La asociación de vinicultores tiene como política fijar un precio inicial al kilo de uva, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. 
    Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por la uva que entrega en un embarque, 
    considerando lo siguiente: si es de tipo A, se le cargan 20 céntimos al precio inicial cuando es de tamaño 1; y 30 céntimos si es de tamaño 2. Si es de tipo B, 
    se rebajan 30 céntimos cuando es de tamaño 1, y 50 céntimos cuando es de tamaño 2. Realice un algoritmo para determinar la ganancia obtenida.
*/

class Ejercicio1 {
    public ejercicio1() {
        let precioInicial : number;
        let tipos : number;
        let tipoA : number = 1;
        let medidas : number;
        let medida1 : number = 1;
        let ajustePrecio : number;
        let finalPrecio : number;
        let kilos : number;
        let ganancia : number;
        
        precioInicial = Number(prompt('Escribre el precio inicial de la uva: '));
        kilos = Number(prompt('Ingresa la cantidad de kilos ha entregar: '))
        tipos = Number(prompt('Elije el tipo de uva: ' + '\nTipo A, escriba el número 1' + 'Tipo B, escriba el número: 2'));
        medidas = Number(prompt('Elije el tamaño de uva: ' + '\nTamaño 1, escriba el número: 1' + '\nTamaño 2, escriba el número: 2'));

        if (tipos == tipoA) {
            if (medidas == medida1) {
                ajustePrecio = 0.20;
            } else {
                ajustePrecio = 0.30;
            }
        }else {
            if (medidas ==1) {
                ajustePrecio = -0.30;
            }else {
                ajustePrecio = -0.50;
            }
        }
        finalPrecio = (precioInicial + ajustePrecio);
        ganancia = (finalPrecio * kilos);
        alert(' El precio inicial de uva fue: ' + precioInicial + '\nLos kilos ha entregar son: ' + kilos + '\nLa ganancia obtenida es de: ' + ganancia);

    }
}
let objeto = new Ejercicio1();
objeto.ejercicio1();