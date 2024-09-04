import Motorista from "./motorista.js";

function abrirModal(){
    const modal = document.getElementById('janela-modal');
    modal.classList.add('abrir');
}

function addMotorista(event){
    event.preventDefault();//previne o envio do formulario para evitar o refresh da pagina 
    const motorista = new Motorista(
        document.getElementById("nome-motorista").value,
        document.getElementById("cnh-motorista").value,
        document.getElementById("telefone-motorista").value,
        document.getElementById("cep-motorista").value,
        document.getElementById("nascimento-motorista").value
    )

    //exibindo o nome do motorista cadastrado na lista
    // Exibindo o nome do motorista cadastrado na lista
    const listaMotoristas = document.getElementById('lista-motoristas');
    const item = document.createElement('li');
    item.textContent = motorista.nome;
    listaMotoristas.appendChild(item);

    // Limpa o formulário após o cadastro
    document.getElementById('form-motorista').reset();
}
document.getElementById('form-motorista').addEventListener('submit', addMotorista);
