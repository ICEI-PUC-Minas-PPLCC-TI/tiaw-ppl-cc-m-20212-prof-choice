var defaultThreads = []
var threads

const url = "http://127.0.0.1:8080/threads";

const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
        defaultThreads = JSON.parse(xhr.responseText);
        threads = defaultThreads

        var container = document.querySelector('ol');
        for (let thread of threads) {
            var html = `
                <li class="row">
                        <a href="/Thread.html?${thread.id_thread}">
                            <h1 class="title">
                                ${thread.conteudo} - ${thread.author.nome}
                            </h1>
                            <div class="bottom">
                                <p class="timestamp">
                                    ${new Date().toLocaleString()}
                                </p>
                            </div>
                        </a>
                    </li>
                `
            container.insertAdjacentHTML('beforeend', html);
        }
        
        let likebtn = document.querySelector('#likebtn');
        let dislikebtn = document.querySelector('#dislikebtn');
        let input1 = document.querySelector('#input1');
        let input2 = document.querySelector('#input2');
        likebtn.addEventListener('click',()=>{
            input.value = parseInt(input1.value) + 1;
        })
        
        dislikebtn.addEventListener('click',()=>{
            input2.value = parseInt(input2.value) + 1;
        })
    }};

  xhr.send();
