 /*function clickbtn() {
   
    
    var sobre = document.getElementById('isobre')
    var email = document.getElementById('iemail')
    var query = document.getElementsByName('query')
    var msg = document.getElementById('imsg')
    var check = document.getElementById('iaceitar')
    var msgerro = document.querySelector('div.msgerro')*/
    
    document.addEventListener('DOMContentLoaded', function() {
        var name = document.getElementById('inome')
        var form = document.querySelector('form')
        form.addEventListener('submit', function(event) {
           
            if (name.value.trim() == '') {
                msgerro.innerHTML = `This field is required`
                event.preventDefault()
            }       
        })
    })

   
