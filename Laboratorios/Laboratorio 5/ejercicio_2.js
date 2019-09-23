/*Realice una función que reciba un arreglo de datos numéricos, y muestre la suma de todos los elementos del arreglo y su promedio*/

function suma(){

    let arreglo = new Array(1,2,4,5,5,8);
    var suma=0;
    var promedio=0;
    
    for(i=0; i<arreglo.length; i++){

        suma=suma+arreglo[i];

        }
        console.log(suma);
        promedio=suma/arreglo.length
        console.log(promedio)
    }