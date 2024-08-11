 /*function clickbtn() {
   
    
    var sobre = document.getElementById('isobre')
    var email = document.getElementById('iemail')
    var query = document.getElementsByName('query')
    var msg = document.getElementById('imsg')
    var check = document.getElementById('iaceitar')
    var msgerro = document.querySelector('div.msgerro')*/
    
    document.addEventListener('DOMContentLoaded', () => {
        const botao = document.getElementById('botao')
        var name = document.getElementById('inome')
        var form = document.querySelector('form')

        botao.addEventListener('click', () => {
            if (name.value == '') {
                msgerro.innerHTML = `This field is requeired`
                document.preventDefault()  
            } 
          
        })
    })

 
 
        

      

    }

   
