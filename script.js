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
        let fname = String(name.value)
        var form = document.querySelector('form')

        botao.addEventListener('click', () => {
            if (fname.value.trim().length == "") {
                msgerro.innerHTML = `This field is required`
                document.preventDefault()  
            } 
          
        })
    })

 
 
        

      

    }

   
