let nomeMotorista;
let nomesMotoristas = [];

function abrirNovaSenha() {
    window.location.href ="nova-senha.html";
}

function abrirIndex(){
    window.location.href = "index.html";
}
function cadMotorista(){
    nomeMotorista = document.getElementById("name-driver").value;
}

function abrirHome(){
    window.location.href = "home.html";
}
function abrirCadastrarMotorista(){
    window.location.href = "cadastrar-motorista.html";
}

function addMotorista(){
    if(nomeMotorista !="" && nomeMotorista != null){
        nomesMotoristas.push(nomeMotorista);
        atualizarLista();
    }
}

function atualizarLista(){
    const lista = document.getElementById("listaMotoristas");

    lista.innerHTML = "";

    nomesMotoristas.forEach(function(nomeMotorista){
        const li = document.createElement("li");
        li.innerText = nomeMotorista;
        lista.appendChild(li)
    })
}