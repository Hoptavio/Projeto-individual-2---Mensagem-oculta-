let cesar  = document.getElementById('cesar'); 
let base64 = document.getElementById('base64'); 

let codificar  = document.getElementById('codificar'); 
let decodificar = document.getElementById('decodificar'); 
let incremento = parseInt(document.getElementById('incremento').value);

let botao = document.getElementById('botao');
let resultado = document.getElementById('resultado');

botao.addEventListener('click', function(evento) {
    evento.preventDefault();
     resultadoCode( );
  });

  function codificarCesar(mensagem)
{
  mensagem = mensagem.split("");
   
  let mensagemAtual = mensagem.map((valor) => valor.charCodeAt());
  let mensagemIncre = mensagemAtual.map((valor) => valor+incremento);
  let mensagemNova = mensagemIncre.map((valor) => String.fromCharCode(valor)).join("");

  return mensagemNova;
}

function decodificarCesar(mensagem)
{
  mensagem = mensagem.split("");

  let mensagemAtual = mensagem.map((valor) => valor.charCodeAt());
  let mensagemIncre = mensagemAtual.map((valor) => valor-incremento);
  let mensagemNova = mensagemIncre.map((valor) => String.fromCharCode(valor)).join("");
  
  return mensagemNova;
}

function resultadoCode()
{
    let mensagem = document.getElementById('mensagem').value;
    if(codificar.checked)
    {
      if(cesar.checked)
      {
        console.log("Codificar Cesar")
        resultado.innerText = codificarCesar(mensagem);

      }
      else 
      {
        resultado.innerText = btoa(mensagem);  
      }

    }
    else if(decodificar.checked)
    {
      if(cesar.checked)
      {
        resultado.innerText = decodificarCesar(mensagem)
      }
      else
      {
        resultado.innerText = atob(mensagem);
      }
    }
    else
    {
      resultado.innerText = "Código não informado";
    }
}

