// Elements
const form = document.querySelector('form');
// Iputs Values
const inputName = document.querySelector('#inome');
const inputLastName = document.getElementById('isobre');
const inputEmail = document.getElementById('iemail');
const inputQuery = document.querySelectorAll('query')
const inputMessage = document.getElementById('imsg')
const inputCheckBox = document.getElementById('iaceitar')
// Error Div
const errorName = document.getElementById('error-name');
const errorLastName = document.getElementById('error-last-name');
const errorEmail = document.getElementById('error-email')
const errorRadio = document.getElementById('error-radio')
const errorMessage = document.getElementById('error-message')
const errorCheckBox = document.getElementById('error-check-box')
// Alert Elements
const jsAlert = document.querySelector('#js-alert')

// Functions
const enviar = (e) => {
    e.preventDefault();

    if (verificaErro()) {
        alert('Thanks for completing the form. We\'ll be in touch soon.');
    } else {
        showAlert()
    }
};

const verificaErro = () => {
    let temErro = false; // Assume no errors initially

    // Clear previous error messages
    errorName.textContent = '';
    errorLastName.textContent = '';
    errorEmail.textContent = ''
    errorRadio.textContent = ''
    errorCheckBox.textContent = ''
   

    // Check inputName
    if (inputName.value.trim() === '') {
        errorName.textContent = 'This field is required'; // Corrigido de 'requiried' para 'required'
        temErro = true;
    }

    // Check inputLastName
    if (inputLastName.value.trim() === '') {
        errorLastName.textContent = 'This field is required'; // Corrigido de 'requiried' para 'required'
        temErro = true;
    }

    if (inputEmail.value.trim() === '') {
        errorEmail.textContent = 'This field is required'
        temErro = true
    }

    let selected = false
    inputQuery.forEach(radio => {
        if (radio.checked) {
            selected = true
        }
    }) 

    if (!selected) {
        errorRadio.textContent = 'Please select a query type'
        temErro = true
    } else {
        errorRadio.textContent = ''
    }

    if (inputMessage.value.trim() === '') {
        errorMessage.textContent = 'This field is required'
        temErro = true
    }

    if (!inputCheckBox.checked) {
        errorCheckBox.textContent = 'To submit this form, please consent to being contacted'
    }

    return !temErro;
};

function showAlert() {
    jsAlert.classList.remove('hidden')
}

// Events
form.addEventListener('submit', enviar);
