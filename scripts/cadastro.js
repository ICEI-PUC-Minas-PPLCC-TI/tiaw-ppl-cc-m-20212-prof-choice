const url = "http://127.0.0.1:8080/cadastro";

function cadastrar(){
  const nome = document.getElementById('text1').value;
  const email = document.getElementById('text2').value;
  const senha = document.getElementById('text3').value;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        window.location.href = "/index.html";
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};

  const data = `{
    "nome": "${nome}",
    "email": "${email}",
    "senha": "${senha}"
  }`;

  xhr.send(data);
}