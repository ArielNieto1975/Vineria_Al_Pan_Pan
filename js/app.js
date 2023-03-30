import { valida_Input, valida_Text } from './validaciones.js'

const inputs = document.querySelectorAll('.contacto__nombre')
const textarea = document.querySelector('.contacto__mensaje')
// const textareaDescripcion = document.querySelector('.textarea__input')

inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
      valida_Input(input.target)
    })
  })

  textarea.addEventListener('blur', (text) => {
    valida_Text(text.target)
  })

