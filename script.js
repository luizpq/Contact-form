function clickbtn() {
    var name = document.getElementById('inome')
    var sobre = document.getElementById('isobre')
    var email = document.getElementById('iemail')
    var query = document.getElementsByName('query')
    var msg = document.getElementById('imsg')
    var check = document.getElementById('iaceitar')
    var msgerro = document.getElementsByTagName('div.msgerro')

    if (name.value.trim() === '') {
        msgerro.innerHTML += `This field is required`
        Event.preventDefault()
    }
}