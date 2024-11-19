var media1 = 0;
var contador = 0;
var vM = 0;
var vm = 999;
var soma = 0;
var s = 0;
var media2 = 0;

var menorhI = 9999;
var maiorhF = 0;

var menormI = 9999;
var maiormF = 0;


function calcular(){
    contador++
const Placa = window.document.getElementById('placaid').value;
const HorapA = parseFloat(document.getElementById('horaA').value);
const minpA = parseFloat(document.getElementById('minA').value);
const HorapB = parseFloat(document.getElementById('horaB').value);
const minpB = parseFloat(document.getElementById('minB').value);
let resul = document.getElementById('resultado');

const mphA = (minpA / 60) + HorapA;
const mphB = (minpB / 60) + HorapB;
const final =  mphB - mphA;
const vl = 20;
const vp = 70 / final;



if(vp <= 60 ){
    const cal = vl - (15 / 100 * vl) ;
    resul.innerHTML = `A placa do carro é: ${Placa}.\n Hora de entrada:${HorapA}:${minpA}.\n Hora de saída: ${HorapB}:${minpB}\n Tempo gasto:${final}\n Velocidade média:${vp} Km/h
     Valor a ser cobrado pelo pedágio:R$${cal}.`

     s += cal;
     media2 = soma / contador;

     
    }
else if( vp >= 60 && vp <= 100){
     const cal = vl - (10  / 100 * vl);
    resul.innerHTML = `A placa do carro é: ${Placa}.\n Hora de entrada:${HorapA}:${minpA}.\n Hora de saída: ${HorapB}:${minpB}\n Tempo gasto:${final}\n Velocidade média:${vp} Km/h
    Valor a ser cobrado pelo pedágio:R$${cal}.`

    s += cal;
     media2 = soma / contador;

   
}
else if( vp > 100){
    const cal = vl - (0 / 100 * vl);
   resul.innerHTML = `A placa do carro é: ${Placa}.\n Hora de entrada:${HorapA}:${minpA}.\n Hora de saída: ${HorapB}:${minpB}\n Tempo gasto:${final}\n Velocidade média:${vp} Km/h
    Valor a ser cobrado pelo pedágio:R$${cal}.`

    s += cal;
     media2 = soma / contador;

   
 }

 if (vp >= vM)
     {
     vM = vp;
     }

     if(vp <= vm)
     {
       vm = vp;
     }
     soma += vp;
     media1 = soma / contador;


     if(contador === 1){}

     if(HorapA <= menorhI)
     {
        menorhI = HorapA;
     }
     if(minpA <= menormI)
     {
        menormI = minpA
     }

     if(HorapB >= maiorhF)
     {
        maiorhF = HorapB
     }
     if(minpB >= maiormF)
     {
        maiormF = minpB
     }

}

function fim(){
    const fim = document.getElementById('finalizar');
     fim.innerHTML = `Menor velocidade registrada ${vm}Km/h\n Maior velocidade registrada ${vM}Km/h\n Média das velocidades registradas ${media1}Km/h\n Total dos valores cobrados R$${s}\n Hora de início do processamento ${menorhI}:${menormI} \n Hora do final do processamento ${maiorhF}: ${maiormF} `;
}
