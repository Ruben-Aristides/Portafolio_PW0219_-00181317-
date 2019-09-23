/*Palíndromo: Se dice que una palabra es palíndroma cuando se puede leer de la misma manera tanto de derecha a izquierda y viceversa. Crear una función en JavaScript que reciba como parámetro una palabra. La función debe retornar si la palabra es palíndroma o no. */

funtion pa(){
    let palindromo = (Array) =>{
        let palitrue = true;

        for(let i=0; i < Array.length/2;i++){
            if (Array[i] !== Array[Array.length-i-1]){
                palitrue = false;
                console.log("no es palindromo");
                break
            }
        }
    }
    return palitrue
}