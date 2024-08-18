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

const obj = {
    inome: nome,
    isobre: sobre
}

// Functions
const eviar = () => {
   

    const data = Object.fromEntries(new FormData(form).entries());
    const {inome, sobre} = data

    if (inome === '' || isobre === '') {
        .classlist.remove('notVisible')
    }
}

const verificaInput = () => {
    
}



// Events   

botao.addEventListener('click', (e) => {
    e.preventDefault()
    enviar()
})
