// Elements
const form = document.querySelector('form');
// Iputs Values
const inputName = document.querySelector('#inome');
const inputLastName = document.getElementById('isobre');
const inputEmail = document.getElementById('iemail');
const inputQuery = document.querySelectorAll('input[name="query"]')
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
const borderFocus = document.querySelectorAll('.border-radio')

// Functions
const enviar = (e) => {
    e.preventDefault();

    if (verificaErro()) {
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
    errorMessage.textContent = ''

    // Check inputName
    if (inputName.value.trim() === '') {
        errorName.textContent = 'This field is required';
        inputName.classList.add('error-border')
        temErro = true;
    }

    // Check inputLastName
    if (inputLastName.value.trim() === '') {
        errorLastName.textContent = 'This field is required'; 
        inputLastName.classList.add('error-border')
        temErro = true;
    }

    // Check inputEmail

    if (inputEmail.value.trim() === '') {
        errorEmail.textContent = 'This field is required'
        inputEmail.classList.add('error-border')
        temErro = true
    }

    // Check inputRadio

    let checkedCount = 0
    inputQuery.forEach(radios => {
        if (radios.checked) {
            checkedCount++
        }
    })

    if (checkedCount < 1) {
        errorRadio.textContent = 'Please select a query type'
        temErro = true
    } else {
        errorRadio.textContent = ''
        temErro = false
    }

    // Check inputMessage

    if (inputMessage.value.trim() === '') {
        errorMessage.textContent = 'This field is required'
        inputMessage.classList.add('error-border')
        temErro = true
    }

    // Check inputCheckBox

    if (!inputCheckBox.checked) {
        errorCheckBox.textContent = 'To submit this form, please consent to being contacted'
        inputCheckBox.classList.add('error-border')
        temErro = true
    }

    return !temErro;
};

function showAlert() {
    jsAlert.classList.remove('hidden')
}

const inputFocus = () => {
    if (borderFocus === checked) {
        
    }
}

// Events
form.addEventListener('submit', enviar);
