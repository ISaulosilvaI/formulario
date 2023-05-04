const nome= document.getElementById("nome");
const email= document.getElementById("email");
const telefone= document.getElementById("telefone");
const mensagens= document.getElementById("mensagens");
const formulario= document.getElementById("formulario");
const alerta= document.getElementById(".alerta")

const validarNome= function(){
    if (!nome.value){
        nome.classList.remove("confirm");
        nome.classList.add("nofilled");
        nome.nextElementSibling.getElementsByClassName.display="block";
    }else{
        nome.classList.add("confirm");
        nome.nextElementSibling.getElementsByClassName.display= "none";
    }
};

const validarEmail= function(){
    if (!email.value){
        email.classList.remove("confirm");
        email.classList.add("nofilled");
        email.nextElementSibling.getElementsByClassName.display="block";
    }else{
        email.classList.add("confirm");
        email.nextElementSibling.getElementsByClassName.display= "none";
    }
};

const validarTelefone= function(){
    if (!telefone.value){
        telefone.classList.remove("confirm");
        telefone.classList.add("nofilled");
        telefone.nextElementSibling.getElementsByClassName.display="block";
    }else{
        telefone.classList.add("confirm");
        telefone.nextElementSibling.getElementsByClassName.display= "none";
    }
};

const validarMensagens= function(){
    if (!mensagens.value){
        mensagens.classList.remove("confirm");
        mensagens.classList.add("nofilled");
        mensagens.nextElementSibling.getElementsByClassName.display="block";
    }else{
        mensagens.classList.add("confirm");
        mensagens.nextElementSibling.getElementsByClassName.display= "none";
    }
};

function validateForm() {
    var name = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    
    var error = false;
    
    if (name == '') {
      document.getElementById('nameError').innerHTML = 'campo obrigatório.';
      document.getElementById('nameError').classList.add('error');
      error = true;
    } else {
      document.getElementById('nameError').innerHTML = '';
      document.getElementById('nameError').classList.remove('error');
    }
    
    if (email == '') {
      document.getElementById('emailError').innerHTML = 'campo obrigatório.';
      document.getElementById('emailError').classList.add('error');
      error = true;
    } else {
      document.getElementById('emailError').innerHTML = '';
      document.getElementById('emailError').classList.remove('error');
    }
    
    if (telefone == '') {
      document.getElementById('telefoneError').innerHTML = 'campo obrigatório.';
      document.getElementById('telefoneError').classList.add('error');
      error = true;
    } else {
      document.getElementById('telefoneError').innerHTML = '';
      document.getElementById('telefoneError').classList.remove('error');
    }
  
    return !error;
  }
  
formulario.addEventListener("submit", function(item){
    item.preventDefault();
    validarNome();
    validarEmail();
    validarTelefone();
    validarMensagens();
});