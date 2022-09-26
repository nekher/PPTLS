/*
Intento de ver si podemos realizar el juego de TBBT

---------------------------------------------
---------------------------------------------
----Autor original: Maximiliano Rodriguez----
----         www.rodig.com.ar            ----
----        maxi@rodig.com.ar            ----
---------------------------------------------
---------------------------------------------
reglas PPTPS
tijeras le gana a papel
tijeras le gana a lagarto
papel le gana a Piedra 
papel le gana a spock
piedra le gana a lagarto
piedra le gana a tijeras
lagarto le gana a spock
lagarto le gana a papel
spock le gana a tijeras
spock le gana a piedra
fin reglas

*/


//INICIO

var eleccion_persona = 0;
var eleccion_npc = 0;
var tot_persona = 0;
var tot_npc = 0;
var tijera = 1;
var papel = 2;
var roca = 3;
var lagarto = 4;
var spock = 5;
var empates = 0;

function juguemos(){
    alert('Bienvenido a Roca, Papel, Tijera, Lagarto, Spock. elegi lo que queres seleccionar y luego y apreta el boton');
    iniciar_ronda();
    definir_ronda();
    ronda();
}

function iniciar_ronda(){
    eleccion_persona = document.querySelector('#feleccion').value;
    eleccion_npc = Math.random()*(5-1)+1;
}


function definir_ronda(){
    if (eleccion_persona == eleccion_npc){
        empates = (empates + 1);
        alert('Alto empate, pa!, va de nuevo!!');
        juguemos();
    } else if (eleccion_persona == 1 && eleccion_npc == 2){
        tot_persona = (tot_persona + 1);
        ronda();
    } else if (eleccion_persona == 1 && eleccion_npc == 4){
        tot_persona = (tot_persona +1);
        ronda();
    } else if (eleccion_persona == 1) {
        tot_npc = (tot_npc + 1);
        ronda();
    } else if (eleccion_persona == 2 && eleccion_npc == 3){
        tot_persona = (tot_persona + 1);
        ronda();
    } else if (eleccion_persona == 2 && eleccion_npc == 5){
        tot_persona = (tot_persona + 1);
        ronda();
    } else if (eleccion_persona == 2){
        tot_npc = (tot_npc + 1);
        ronda();
    } else if (eleccion_persona == 3 && eleccion_npc == 1){
        tot_persona = (tot_persona +1);
        ronda();  
    } else if (eleccion_persona == 3 && eleccion_npc == 4){
        tot_persona = (tot_persona + 1);
        ronda();
    } else if (eleccion_persona == 3){
        tot_npc = (tot_npc + 1);
        ronda();
    } else if (eleccion_persona == 4 && eleccion_npc == 2){
        tot_persona = (tot_persona + 1);
        ronda();
    } else if (eleccion_persona == 4 && eleccion_npc == 5){
        tot_persona = (tot_persona + 1);
        ronda();
    } else if (eleccion_persona == 4){
        tot_npc = (tot_npc + 1);
        ronda();
    } else if (eleccion_persona == 5 && eleccion_npc == 1){
        tot_persona = (tot_persona + 1 );
        ronda();
    } else if (eleccion_persona == 5 && eleccion_npc == 3){
        tot_persona = (tot_persona + 1 );
        ronda();
    } else if (eleccion_persona = 5){
        tot_npc = (tot_npc + 1 );
        ronda();
    }
}

function ronda(){
    if (tot_persona = 3){
        alert ('GANASTE!!!, sos mejor que la PC, que CRA!!!');
        alert ('Vas de nuevo?');
        juguemos();
    }
    if (tot_npc = 3){
        alert ('PERDISTE!!!!, yo que vos me retiro del gaming.');
        alert ('Personalmente apagaria la PC, pero...si queres vamos de nuevo');
        juguemos();
    }
    juguemos();
}