// Elemenst
   
const nome = document.querySelector('#inome')
const form = document.querySelector('#form')
const sobre = document.getElementById('isobre')
const email = document.getElementById('iemail')
const query = document.getElementsByName('query')
const msg = document.getElementById('imsg')
const check = document.getElementById('iaceitar')
const msgerro = document.querySelector('div.msgerro')
const botao = document.getElementById('botao')



// Funções
true 
false
const error = (e) => {
    if (e.value == '') {
        return true
    }
}
 
// Eventos   

    botao.addEventListener('submit', (e) => {
        if (error(nome) == true) {
            e.preventDefault()
        }
       
      
    })
    

   
