function salvar(){
  var nome = document.getElementById("nomeid")
  var email = document.getElementById("emailid")
  var data = document.getElementById("dataid")
  var cel = document.getElementById("celid")
  var tel = document.getElementById("telid")
  var ingresso = document.getElementById("ingressoid")
  var curso= document.getElementById("cursoid")
  var habilitação  = document.getElementById("Habilitaçaoid")
  var turno = document.getElementById("Turnoid")
  var dat = document.getElementById("datid")
  var hora = document.getElementById("horaid")
  var local = document.getElementById("Localid")
  var cpf = document.getElementById("cpfid")
  var rg = document.getElementById("RGid")
  var nacionalidade = document.getElementById("nacionalidadeid")
  var cep = document.getElementById("cepid")
  var endereço = document.getElementById("Endereçoid")
  var n = document.getElementById("Nid")
  var complemento = document.getElementById("complementoid")
  var bairro = document.getElementById("Bairroid")
  var cidade = document.getElementById("cidadeid")
 
  if (nome.value !="") {
    window.alert(`Cadastro realizado com sucesso!\n confira os seus dados:\n Seu nome:${nome.value}\n Seu E-mail: ${email.value} \n Sua data de nascimento é: ${data.value}\n
     Seu celular principal é: ${cel.value}\n  Seu telefone Residencial é :${tel.value}\n 
     Sua forma de ingresso é :${ingresso.value}\n O curso escolhido foi:${curso.value}\n sua forma de habilitação: ${habilitação.value}\n
     Turno:${turno.value}\n Data da prova:${dat.value}\n 
     Hora da prova: ${hora.value}\n Local da prova:${local.value}\n Seu cpf:${cpf.value}\n Seu RG:${rg.value}\n Sua nacionalidade:${nacionalidade.value}\n
     CEP:${cep.value}\n Endereço:${endereço.value}\n N°:${n.value}\n Complemento:${complemento.value}\n Bairro:${bairro.value}\n
     Cidade:${cidade.value}  `);
  }
  else{
    alert("campo não preenchido!")
  }
}