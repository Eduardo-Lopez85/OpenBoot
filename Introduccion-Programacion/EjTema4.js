/*
En este ejercicio practicarás las estructuras de control, para ello deberás crear:

Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
Pista: Los números inferiores a 0 son negativos y los superiores, positivos.

Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:

Incrementar el valor de la variable en uno cada vez que se ejecute.

Mostrarlo por pantalla cada vez que se ejecute.

Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.

Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.

Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.*/

function positiveOrNegative(number){
    if(number < 0){
        console.log('El numero es negativo')
    } else if(number > 0){ 
        console.log('El numero es positivo')
    } else { console.log('El numero es 0')}
}
positiveOrNegative(-1)
positiveOrNegative(0)
positiveOrNegative(50)

let numeroWhile = 0;
while (numeroWhile < 3 ){
    numeroWhile ++;
    console.log(numeroWhile)
}

numeroWhile = 10;
do {
    numeroWhile ++;
    console.log(numeroWhile)
} while (numeroWhile < 3)

for( let numeroFor = 0; numeroFor <= 3; numeroFor++){
    console.log(numeroFor)
}

let estaciones = ['verano', 'invierno', 'otoño', 'primavera', 'sinestacion']
for(let i =0; i<estaciones.length; i++){
    switch (estaciones[i]) {
        case 'verano': console.log('Estas en ' + estaciones[i]); break;
        case 'invierno': console.log('Estas en ' + estaciones[i]); break;
        case 'otoño': console.log('Estas en ' + estaciones[i]); break;
        case 'primavera': console.log('Estas en ' + estaciones[i]); break;
        default: console.log('El valor introducido no corresponde a una estacion')
    }
}