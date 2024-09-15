// Elements
const form = document.querySelector('form');
// Iputs Values
const inputName = document.querySelector('#inome');
const inputLastName = document.getElementById('isobre');
const inputEmail = document.getElementById('iemail');
const inputQuery = document.querySelectorAll('input[name="query"]')
const inputMessage = document.getElementById('imsg')
const inputCheckBox = document.getElementById('checkbox')
// Error Div
const errorName = document.getElementById('error-name');
const errorLastName = document.getElementById('error-last-name');
const errorEmail = document.getElementById('error-email')
const errorRadio = document.getElementById('error-radio')
const errorMessage = document.getElementById('error-message')
const errorCheckBox = document.getElementById('error-check-box')
// Alert Elements
const jsAlert = document.querySelector('#js-alert')
const radios = document.querySelectorAll('input[type="radio"]')
const borderRadio = document.querySelectorAll('.border-radio')
const radioGroup = document.querySelectorAll('.radio-group')
const inputs = [inputLastName, inputEmail, inputName, inputMessage, inputQuery, inputCheckBox]
const errors = [errorCheckBox, errorEmail, errorLastName,  errorName, errorRadio, errorMessage]

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

    inputCheckBox.classList.remove('error-border')
    inputName.classList.remove('error-border')
    inputLastName.classList.remove('error-border')
    inputEmail.classList.remove('error-border')
    inputMessage.classList.remove('error-border')

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

     // Check inputRadio

const checkSelectedRadio = () => {
// Remove a classe 'border-checked' de todos os labels
        
    const resetBorder = document.querySelectorAll('.border-radio');
    resetBorder.forEach(radio => {
    radio.classList.remove('border-checked');
    // Adiciona de volta a classe original
})

    inputQuery.forEach(radio => {
    
    if (radio.checked) {
        const associatedLabel = radio.closest('.border-radio');
            
            associatedLabel.classList.add('border-checked');
        }
    });
}

// Adicionar ouvintes de eventos para os botões de rádio
inputQuery.forEach(radio => {
radio.addEventListener('change', checkSelectedRadio);
});

// Verifica se o input está vazio

function clearError() {
    inputs.forEach(input => {
        if (input != '') {
            input.classList.remove('error-border')
        }

        errors.forEach(error => {
            if (input != '') {
                error.textContent = ''
            }
        })
    })

   
}

document.addEventListener('input', clearError)

function showAlert() {
    jsAlert.classList.remove('hidden')
}

// Events
form.addEventListener('submit', enviar);
