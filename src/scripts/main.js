document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('form-sorteador').addEventListener('submit', function(event) {
    event.preventDefault()

    let max_number = document.getElementById('numero-maximo').value
    max_number = parseInt(max_number)

    let rand_number = Math.floor(Math.random() * max_number + 1)

    document.getElementById('resultado-valor').innerText = rand_number
    document.querySelector('.resultado').style.display = 'block'
  })
})
