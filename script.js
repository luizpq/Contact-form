// Elemenst
   
const nome = document.querySelector('#inome')
const form = document.querySelector('#form')
const sobre = document.getElementById('isobre')
const email = document.getElementById('iemail')
const query = document.getElementsByName('query')
const msg = document.getElementById('imsg')
const check = document.getElementById('iaceitar')
const erromsg = document.querySelector('div.msgerro')
const botao = document.getElementById('botao')
const nomevl = nome.value


// Functions
const msgerro = () => {
        const pError = document.createElement('p')
    
          pError.innerText = 'This field is requiried'
          erromsg.appendChild(pError)
}

const verificaInput = () => {
    
}



// Events   

botao.addEventListener('click', (e) => {

    
    if (nomevl === '')
        msgerro()
        e.preventDefault()
})