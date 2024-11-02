import User from ".Model/User.js";

document.getElementById('formUser').addEventListener('submit', function(event){
event.preventDefault();
const user = new User(
    document.getElementById("name-user").value,
    document.getElementById("cpf-user").value,
    document.getElementById("email-user").value,
    document.getElementById("birthDate-user").value,
    document.getElementById("password-user").value
)
resgisterUser(user);
})

function registerUser(user) {
    fetch('https://localhost.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('resultado').innerHTML = 'Usuário cadastrado com sucesso!';
    })
    .catch(error => {
        document.getElementById('resultado').innerHTML = 'Erro: ' + error.message;
    });
}