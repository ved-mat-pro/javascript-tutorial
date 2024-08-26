const form = document.querySelector('form')

form.addEventListener(function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)   // string value obtained from .value will convert into integer by parseInt
    const weight = parseInt(document.querySelector('#weight').value) 
    const results = document.querySelector('#results')
})