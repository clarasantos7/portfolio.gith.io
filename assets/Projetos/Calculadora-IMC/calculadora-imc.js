function calcular(){
   const nome = window.document.getElementById('nome').value;
   let sexof = window.document.getElementById('fem');
   let sexom = window.document.getElementById('mas');
   const peso = parseFloat(document.getElementById('peso').value);
   const altura = parseFloat(document.getElementById('altura').value);
   const medicao = document.getElementById('medicao');
   

   const calculo = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura)) ;
    
 

  //peso ideal

  const fperda = peso - (19.1 * altura * altura);
  const mperda = peso - (20.7 * altura * altura);
  const fganhar = (19.1 * altura * altura) - peso;
  const mganhar = (20.7 * altura * altura) - peso;
    
 if (sexof.checked){
   

   if( calculo < 19.1){
            medicao.innerHTML = `${nome} seu percentual de gordural corporal é ${calculo.toFixed(1)} e você está abaixo do peso!
            Você precisa ganhar ${fganhar.toFixed(1)}`;
        }
     else if(calculo >=19.1 && calculo <= 25.8 ){
            medicao.innerHTML =`${nome} seu percentual de gordural corporal é ${calculo.toFixed(1)} e você está no peso normal!`;
        }
     else if( calculo >= 25.8 && calculo <= 27.3){
            medicao.innerHTML = `${nome} seu percentual de gordural corporal é ${calculo.toFixed(1)} e você está marginalmente acima do peso!
             Você precisa perder ${fperda.toFixed(1)}`;
        }
    else if( calculo >= 27.3 && calculo <= 32.3){
            medicao.innerHTML = `${nome} seu percentual de gordural corporal é ${calculo.toFixed(1)} e você está acima do peso ideal!
             Você precisa perder ${fperda.toFixed(1)}`;
            
        }
     else if ( calculo > 32.3 ){
            medicao.innerHTML = `${nome} seu percentual de gordural corporal é ${calculo.toFixed(1)} e você está obeso!
             Você precisa perder ${fperda.toFixed(1)}`;
            
        } }

    else if(sexom.checked === true ){

        if( calculo < 20.7){
                medicao.innerHTML = `ola ! ${nome} seu percentual de gordural corporal é ${calculo.toFixed(1)} e você está abaixo do peso!
             Você precisa ganhar ${mganhar.toFixed(1)}`;
                
            }
         else if(calculo >=20.7 && calculo <= 26.4 ){
                medicao.innerHTML = `${nome} seu percentual de gordural corporal é ${calculo.toFixed(1)} e você está no peso normal!`;
            }
         else if( calculo >= 26.4 && calculo <= 27.8){
                medicao.innerHTML = `${nome} seu percentual de gordural corporal é ${calculo.toFixed(1)} e você está marginalmente acima do peso!
                Você precisa perder ${mperda.toFixed(1)}`;
            }
         else if( calculo >= 27.8 && calculo <= 31.1){
                medicao.innerHTML = `${nome} seu percentual de gordural corporal é ${calculo.toFixed(1)} e você está acima do peso ideal!
                Você precisa perder ${mperda.toFixed(1)}`;
            }
         else if ( calculo > 31.1 ){
                medicao.innerHTML = `${nome} seu percentual de gordural corporal é ${calculo.toFixed(1)} e você está obeso!
                Você precisa perder ${mperda.toFixed(1)}`;
            }}
    

}