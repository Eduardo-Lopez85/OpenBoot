/*Primera parte:

Crear una función con tres parámetros que sean números que se suman entre sí.

Llamar a la función en el main y darle valores.

Segunda parte:

Crear una clase coche.

Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.

Una función que incremente el número de puertas que tiene el coche.

Crear un objeto miCoche en el main y añadirle una puerta.

Mostrar el número de puertas que tiene el objeto.*/

function sumaTres(num1, num2, num3){
    return num1+num2+num3
    }
console.log(sumaTres(1,2,3))
console.log(sumaTres(-1,55,-4))
  
class Coche{
        
    constructor(numero){
    this.numeroPuertas = numero;}
    
    incrementarPuertas(){
    this.numeroPuertas++;}
    }
let miCoche = new Coche(5);
console.log(miCoche.numeroPuertas);
miCoche.incrementarPuertas();
console.log(miCoche.numeroPuertas);


