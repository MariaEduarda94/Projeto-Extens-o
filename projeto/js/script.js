class Motorista{
    constructor(nome, cnh, telefone, cep, dataNascimento){
        this.nome = nome;
        this.cnh = cnh;
        this.telefone = telefone;
        this.cep = cep;
        this.dataNascimento = dataNascimento;
    }
}

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
    var motorista = new Motorista(
        document.getElementById("name-driver").value,
        document.getElementById("cnh-driver").value,
        document.getElementById("telefone-driver").value
    )
    if(nomeMotorista){
        var lista = JSON.parse(localStorage.getItem('listaSalva')) || [];

        lista.push(nomeMotorista);

        localStorage.setItem('listaSalva', JSON.stringify(lista));
        atualizarLista();

        document.getElementById('nome-driver').value ="";
    }else{
        alert("Digite novamente!")
    }
}

function atualizarLista(){
    var lista = JSON.parse(localStorage.getItem("listaSalva")) || [];
    var listaUl = document.getElementById("minhaLista");

    listaUl.innerHTML = "";
    //cria um novo item de lista para cada valor salvo
    lista.forEach(function(item){
        var li = document.createElement("li");
        li.textContent = item;
        listaUl.appendChild(li);
    });
}
window.onload = function(){
    atualizarLista();
}
