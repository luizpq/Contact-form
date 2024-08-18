// Elements
const nome = document.querySelector('#inome');
const form = document.querySelector('form');
const sobre = document.getElementById('isobre');
const email = document.getElementById('iemail');
const query = document.getElementsByName('query');
const msg = document.getElementById('imsg');
const check = document.getElementById('iaceitar');
const erromsg = document.querySelector('div.msgerro'); // Verifique se a classe está correta
const botao = document.getElementById('botao');

// Functions
const enviar = () => {
    const inome = nome.value.trim();
    console.log('Valor do nome:', inome); // Adicione esta linha para depuração

    if (inome === '') {
        erromsg.style.display = 'block';
    } else {
        erromsg.style.display = 'none';
    }
};


// Events
botao.addEventListener('click', (e) => {
    e.preventDefault();
    enviar();
});
