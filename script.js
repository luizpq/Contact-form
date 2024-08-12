// Elemenst
   
const name = document.getElementById('inome')
const form = document.querySelector('form')
const sobre = document.getElementById('isobre')
const email = document.getElementById('iemail')
const query = document.getElementsByName('query')
const msg = document.getElementById('imsg')
const check = document.getElementById('iaceitar')
const msgerro = document.querySelector('div.msgerro')
const botao = document.getElementById('botao')



// Funções
const error = (e) => {
    if (inome == '') {
         e.preventDefault()
    }
}

 
// Eventos   

    botao.addEventListener('click', () => {
       error()
      
    })
      

    

   
