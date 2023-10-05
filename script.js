const formulario = document.querySelector("form");


const Inome = document.querySelector(".name");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Itel = document.querySelector(".tel");


function cadastrar () {
    fetch("http://locahost:8080/cadastrar",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: Inome.Value,
            email: Iemail.Value,
            senha: Isenha.Value,
            telefone: Itel.value,
        })
    })
    .then(function (res) { console.log(res)})
    .catch(function (res) { console.log(res)})
};

function limpar ()  {
         Inome.Value = "";
         Iemail.Value = "";
         Isenha.Value = "";
         Itel.value = "";
};




formulario.addEventListener('submit', function (event) {
event.preventDefault();

  cadastrar();
  limpar();
  
});