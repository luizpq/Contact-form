// Elements
const nome = document.querySelector('#inome');
const form = document.querySelector('form');
const sobre = document.getElementById('isobre');
const email = document.getElementById('iemail');
const query = document.getElementsByName('query');
const msg = document.getElementById('imsg');
const check = document.getElementById('iaceitar');
const erromsg = document.querySelector('div.msgerro'); 
const botao = document.getElementById('botao');
const inputs = [nome, sobre, email]


// Functions
const enviar = (e) => {
    e.preventDefault()

    const inome = nome.value.trim();
    console.log('Valor do nome:', inome); // Adicione esta linha para depuração
    if (verificaErro()) {
        alert('Thanks for completing the form. we`ll be in the soon')
    } 
    
};

const verificaErro = () => {
    let temErro = true

    inputs.forEach(input => {
        if (input.value.trim() === '') {
   
            temErro = true
        } else {
            temErro = false
        }
    })

    if (temErro) {
        erromsg.style.display = 'block'
        erromsg.textContent = 'This field is required'
    } else {
        erromsg.style.display = 'none'
        erromsg.textContent = ''
    }
    
    return !temErro
    
}
 

// Events
form.addEventListener('submit', enviar)