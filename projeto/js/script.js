function abrirNovaSenha() {
    window.location.href ="nova-senha.html";
}

function abrirIndex(){
    window.location.href = "index.html";
}
function abrirHome(){
    window.location.href = "home.html";
}
function abrirCadastrarMotorista(){
    window.location.href = "cadastrar-motorista.html";
}

let nomesMotoristas = [];

function addMotorista(){
    const nomeMotorista = document.getElementById("name-driver").value;
    if(nomeMotorista.trim() !==""){
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