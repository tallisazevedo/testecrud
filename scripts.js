function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('cadastrar-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const data = {
        nome_casa: document.getElementById('nome-casa').value,
        nome_proprietario: document.getElementById('nome-proprietario').value,
        numero_contato: document.getElementById('numero-contato').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
        cep: document.getElementById('cep').value,
        complemento: document.getElementById('complemento').value
    };

    fetch('http://localhost:3000/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('cadastrar-form').reset();
    })
    .catch(error => console.error('Erro:', error));
});

document.getElementById('atualizar-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.getElementById('id-update').value;
    const data = {
        nome_casa: document.getElementById('nome-casa-update').value,
        nome_proprietario: document.getElementById('nome-proprietario-update').value,
        numero_contato: document.getElementById('numero-contato-update').value,
        rua: document.getElementById('rua-update').value,
        numero: document.getElementById('numero-update').value,
        cep: document.getElementById('cep-update').value,
        complemento: document.getElementById('complemento-update').value
    };

    fetch(`http://localhost:3000/atualizar/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('atualizar-form').reset();
    })
    .catch(error => console.error('Erro:', error));
});

document.getElementById('remover-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.getElementById('id-remove').value;

    fetch(`http://localhost:3000/remover/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('remover-form').reset();
    })
    .catch(error => console.error('Erro:', error));
});
