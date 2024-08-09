function addMotorista(){
    var motorista = new Motorista(
        document.getElementById("name-driver").value,
        document.getElementById("cnh-driver").value,
        document.getElementById("telefone-driver").value,
        document.getElementById("cep-driver").value,
        document.getElementById("birth-driver").value
    )
    if(motorista.nome){
        var lista = JSON.parse(localStorage.getItem('listaSalva')) || [];

        lista.push(motorista.nome);

        localStorage.setItem('listaSalva', JSON.stringify(lista));
        atualizarLista();

    }else if(document.getElementById('nome-driver').value =""){
        alert("Digite novamente!")
    }
}

function atualizarLista(){

}
window.onload = function(){
    atualizarLista();
}
