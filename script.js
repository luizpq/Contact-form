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
<<<<<<< HEAD
    if (e.value == '') {
        return true
=======
    if (e == '') {
         document.preventDefault()
>>>>>>> 8264341e15934b752aad60aa39a0023314f973c9
    }
}
 
// Eventos   

<<<<<<< HEAD
    
       
=======
    botao.addEventListener('submit', () => {
       if (error(inome)) {
            document.preventDefault()
       }
>>>>>>> 8264341e15934b752aad60aa39a0023314f973c9
      
    })
    

   
