function mostrar_ocultar(){
    var Inicio = document.getElementById("Inicio");

    if(Inicio.style.display == "none"){
        mostrar();
    }
    else{
        ocultar_Dia1();
        ocultar_Dia2();
        ocultar_Dia3();
        ocultar_Dia4();
        ocultar_Dia5();
    }
}

function mostrar_ocultar_Dia1(){
    var Dia1 = document.getElementById("Dia1");

    if(Dia1.style.display == "none"){
        mostrar_Dia1();
    }
    else{
        ocultar();
        ocultar_Dia2();
        ocultar_Dia3();
        ocultar_Dia4();
        ocultar_Dia5();
    }
}

function mostrar_ocultar_Dia2(){
    var Dia2 = document.getElementById("Dia2");

    if(Dia2.style.display == "none"){
        mostrar_Dia2();
    }
    else{
        ocultar();
        ocultar_Dia1();
        ocultar_Dia3();
        ocultar_Dia4();
        ocultar_Dia5();
    }
}

function mostrar_ocultar_Dia3(){
    var Dia3 = document.getElementById("Dia3");

    if(Dia3.style.display == "none"){
        mostrar_Dia3();
    }
    else{
        ocultar();
        ocultar_Dia1();
        ocultar_Dia2();
        ocultar_Dia4();
        ocultar_Dia5();
    }
}

function mostrar_ocultar_Dia4(){
    var Dia4 = document.getElementById("Dia4");

    if(Dia4.style.display == "none"){
        mostrar_Dia4();
    }
    else{
        ocultar();
        ocultar_Dia1();
        ocultar_Dia2();
        ocultar_Dia3();
        ocultar_Dia5();
    }
}

function mostrar_ocultar_Dia5(){
    var Dia5 = document.getElementById("Dia5");

    if(Dia5.style.display == "none"){
        mostrar_Dia5();
    }
    else{
        ocultar();
        ocultar_Dia1();
        ocultar_Dia2();
        ocultar_Dia3();
        ocultar_Dia4();
    }
}


function ocultar(){
    document.getElementById('Inicio').style.display = 'none';
    }

function ocultar_Dia1(){
    document.getElementById('Dia1').style.display = 'none';
    }

function ocultar_Dia2(){
    document.getElementById('Dia2').style.display = 'none';
    }

function ocultar_Dia3(){
    document.getElementById('Dia3').style.display = 'none';
    }

function ocultar_Dia4(){
    document.getElementById('Dia4').style.display = 'none';
    }

function ocultar_Dia5(){
    document.getElementById('Dia5').style.display = 'none';
    }

function mostrar(){
    document.getElementById('Inicio').style.display = 'block';
    }
    
function mostrar_Dia1(){
    document.getElementById('Dia1').style.display = 'block';
    }

function mostrar_Dia2(){
    document.getElementById('Dia2').style.display = 'block';
    }

function mostrar_Dia3(){
    document.getElementById('Dia3').style.display = 'block';
    }

function mostrar_Dia4(){
    document.getElementById('Dia4').style.display = 'block';
    }

function mostrar_Dia5(){
    document.getElementById('Dia5').style.display = 'block';
    }