const url = "http://127.0.0.1:8080/cadastro"
var user;



function logar() {

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            informationUser = JSON.parse(xhr.responseText);
            user = informationUser;
            console.log(user);
            for (var i = 0; i < 100; i++) {
                if (user[i].email == email && user[i].senha == senha) {
                    window.location.href = "/index.html";
                    window.alert(`Olá, ${user[i].nome}`);
                    break;
                }
            }
            
            
        };

    }

    xhr.send();

}