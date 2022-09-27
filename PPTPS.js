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
var eleccion_nomenclada_persona = '';
var eleccion_nomenclada_npc = '';

function juguemos(){
    eleccion_persona = document.querySelector('#feleccion').value;
    eleccion_npc = (Math.random()*(5-1)+1).toFixed();
    nomenclar_persona();
    nomenclar_npc();
    definir_ronda();
    
}
function nomenclar_persona(){
    if (eleccion_persona == 1){
        eleccion_nomenclada_persona = 'TIJERA';
    } else if (eleccion_persona == 2){
        eleccion_nomenclada_persona = 'PAPEL';
    } else if (eleccion_persona == 3){
        eleccion_nomenclada_persona = 'PIEDRA';
    } else if (eleccion_persona == 4){
        eleccion_nomenclada_persona = 'LAGARTO';
    } else if (eleccion_persona == 5){
        eleccion_nomenclada_persona = 'SPOCK';     
    }   
}
function nomenclar_npc(){
    if (eleccion_npc == 1){
        eleccion_nomenclada_npc = 'TIJERA';
    } else if (eleccion_npc == 2){
        eleccion_nomenclada_npc = 'PAPEL';
    } else if (eleccion_npc == 3){
        eleccion_nomenclada_npc = 'PIEDRA';
    } else if (eleccion_npc == 4){
        eleccion_nomenclada_npc = 'LAGARTO';
    } else if (eleccion_npc == 5){
        eleccion_nomenclada_npc = 'SPOCK';   
}
}
function definir_ronda(){
    if (eleccion_persona == eleccion_npc){
        //window.location.replace("empate.html");
        prompt('Esta ronda, vos elegiste '+ eleccion_nomenclada_persona + ' y la PC eligio Lo mismo..Tremendo y anticlimatico EMPATE... continuemos, recorda, gana el mejor de 5');
   
    } else if (eleccion_persona == 1 && eleccion_npc == 2){
        tot_persona = (tot_persona + 1);
       ronda();
       prompt('Esta ronda, vos elegiste '+ eleccion_nomenclada_persona + ' y la PC eligio ' + eleccion_nomenclada_npc + ' Ganaste suertudo, continuemos, recorda, gana el mejor de 5');
    } else if (eleccion_persona == 1 && eleccion_npc == 4){
        tot_persona = (tot_persona +1);
        ronda();
        prompt('Esta ronda, vos elegiste '+ eleccion_nomenclada_persona + ' y la PC eligio ' + eleccion_nomenclada_npc + ' Ganaste suertudo, continuemos, recorda, gana el mejor de 5');
    } else if (eleccion_persona == 1) {
        tot_npc = (tot_npc + 1);
        ronda();
        prompt('Esta ronda, vos elegiste '+ eleccion_nomenclada_persona + ' y la PC eligio ' + eleccion_nomenclada_npc + ' Y te toco perder..., recorda, gana el mejor de 5');
    } else if (eleccion_persona == 2 && eleccion_npc == 3){
        tot_persona = (tot_persona + 1);
        ronda();
        prompt('Esta ronda, vos elegiste '+ eleccion_nomenclada_persona + ' y la PC eligio ' + eleccion_nomenclada_npc + ' Ganaste suertudo, continuemos, recorda, gana el mejor de 5');
    } else if (eleccion_persona == 2 && eleccion_npc == 5){
        tot_persona = (tot_persona + 1);
        ronda();
        prompt('Esta ronda, vos elegiste '+ eleccion_nomenclada_persona + ' y la PC eligio ' + eleccion_nomenclada_npc + ' Ganaste suertudo, continuemos, recorda, gana el mejor de 5');
    } else if (eleccion_persona == 2){
        tot_npc = (tot_npc + 1);
        ronda();       
        prompt('Esta ronda, vos elegiste '+ eleccion_nomenclada_persona + ' y la PC eligio ' + eleccion_nomenclada_npc + ' Y te toco perder..., recorda, gana el mejor de 5');
    } else if (eleccion_persona == 3 && eleccion_npc == 1){
        tot_persona = (tot_persona +1);
        ronda();
        prompt('Esta ronda, vos elegiste '+ eleccion_nomenclada_persona + ' y la PC eligio ' + eleccion_nomenclada_npc + ' Ganaste suertudo, continuemos, recorda, gana el mejor de 5');
    } else if (eleccion_persona == 3 && eleccion_npc == 4){
        tot_persona = (tot_persona + 1);
        ronda();
        prompt('Esta ronda, vos elegiste '+ eleccion_nomenclada_persona + ' y la PC eligio ' + eleccion_nomenclada_npc + ' Ganaste suertudo, continuemos, recorda, gana el mejor de 5');
    } else if (eleccion_persona == 3){
        tot_npc = (tot_npc + 1);
        ronda();
        prompt('Esta ronda, vos elegiste '+ eleccion_nomenclada_persona + ' y la PC eligio ' + eleccion_nomenclada_npc + ' Y te toco perder..., recorda, gana el mejor de 5');
    } else if (eleccion_persona == 4 && eleccion_npc == 2){
        tot_persona = (tot_persona + 1);
        ronda();
        prompt('Esta ronda, vos elegiste '+ eleccion_nomenclada_persona + ' y la PC eligio ' + eleccion_nomenclada_npc + ' Ganaste suertudo, continuemos, recorda, gana el mejor de 5');
    } else if (eleccion_persona == 4 && eleccion_npc == 5){
        tot_persona = (tot_persona + 1);
        ronda();
        prompt('Esta ronda, vos elegiste '+ eleccion_nomenclada_persona + ' y la PC eligio ' + eleccion_nomenclada_npc + ' Ganaste suertudo, continuemos, recorda, gana el mejor de 5');
    } else if (eleccion_persona == 4){
        tot_npc = (tot_npc + 1);
        ronda();
        prompt('Esta ronda, vos elegiste '+ eleccion_nomenclada_persona + ' y la PC eligio ' + eleccion_nomenclada_npc + ' Y te toco perder..., recorda, gana el mejor de 5');
    } else if (eleccion_persona == 5 && eleccion_npc == 1){
        tot_persona = (tot_persona + 1 );
        ronda();
        prompt('Esta ronda, vos elegiste '+ eleccion_nomenclada_persona + ' y la PC eligio ' + eleccion_nomenclada_npc + ' Ganaste suertudo, continuemos, recorda, gana el mejor de 5');
    } else if (eleccion_persona == 5 && eleccion_npc == 3){
        tot_persona = (tot_persona + 1 );
        ronda();
        prompt('Esta ronda, vos elegiste '+ eleccion_nomenclada_persona + ' y la PC eligio ' + eleccion_nomenclada_npc + ' Ganaste suertudo, continuemos, recorda, gana el mejor de 5');
    } else if (eleccion_persona = 5){
        tot_npc = (tot_npc + 1 );
        ronda();
        prompt('Esta ronda, vos elegiste '+ eleccion_nomenclada_persona + ' y la PC eligio ' + eleccion_nomenclada_npc + ' Y te toco perder..., recorda, gana el mejor de 5');
    }
}

function ronda(){
      if (tot_persona == 3){
        window.location.replace("ganaste.html");
    } else if (tot_npc == 3){
         window.location.replace("perdiste.html");
    }
    
}