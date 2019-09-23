/*Realice una función en JS, que dados un número y un arreglo como parámetros, retorne cuantas ocurrencias existen de ese número dentro del arreglo.*/

function lista_a(){

    var numero=5;
    let numeros = new Array(1,2,4,5,5,8);
    var count=0;
    
    for(i=0; i<numeros.length; i++){

        if (numero==numeros[i]){
            console.log("el numero es igual");
            count=count+1;
        }
        else{
            console.log("el numero no es igual");
        }
    }
}