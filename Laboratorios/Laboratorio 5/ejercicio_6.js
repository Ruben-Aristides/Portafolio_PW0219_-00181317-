/*Ordenamiento de array: Crear una función en JavaScript que ordene los elementos de un Array en orden ascendente. */

function ordenar(){
    
    let numero = new Array(3,2,1,5,8);
    let ordenar = new Array();

    for(let i=0; i<numero.length; i++){

        for (let j=0; j<ordenar.lenght; j++ ){

            if(numero[i+1]>ordenar[j+1]){
                ordenar.push(numero[i]);
        }

        
    }

}
    return ordenar;
}