export function valida_Input (input) {
    const tipoInput = input.dataset.tipo
    if (validadores[tipoInput]) {
      validadores[tipoInput](input)
    }
  
    if (input.validity.valid) {
      input.parentElement.classList.remove('input__container-invalid')
      input.parentElement.querySelector('.input__message-error').innerHTML = ''
    } else {
      input.parentElement.classList.add('input__container-invalid')
      input.parentElement.querySelector('.input__message-error').innerHTML = mostrarError(tipoInput, input)
    }
}
  export function valida_Text (textarea) {
    const tipoInput = textarea.dataset.tipo
    if (validadores[tipoInput]) {
      validadores[tipoInput](textarea)
    }
  
    if (textarea.validity.valid) {
      textarea.parentElement.classList.remove('text__container-invalid')
      textarea.parentElement.querySelector('.text__message-error').innerHTML = ''
    } else {
      textarea.parentElement.classList.add('text__container-invalid')
      textarea.parentElement.querySelector('.text__message-error').innerHTML = mostrarError(tipoInput, textarea)
    }
}

function mostrarError (tipoInput, input) {
    let mensaje = ''
    tipoError.forEach(error => {
      if (input.validity[error]) {
        mensaje = mensajeError[tipoInput][error]
      }
    })
  
    return mensaje
  }
  
  const validadores = {
    mensaje: (textarea) => validarTextarea(textarea),
    // descripcion: (textarea) => validarTextareaDescripcion(textarea)
  }
  
  const tipoError = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
  ]

  const mensajeError = {
    nombre: {
      valueMissing: 'El campo Nombre no puede estar vacío',
      patternMismatch: 'Debe contener entre 3 y 50 caracteres, y no incluir Números.'
    },
    email: {
      valueMissing: 'El campo email no puede estar vacío',
      typeMismatch: 'El correo no es válido'
    },
    mensaje: {
      valueMissing: 'El campo Mensaje no puede estar vacío',
      customError: 'No debe superar los 120 caracteres'
    }
  }
  
  function validarTextarea (textarea) {
    const textLength = textarea.parentElement.querySelector('.contacto__mensaje').value.length
    let msgError = ''
    if (textLength > 120) {
      msgError = 'No debe superar los 120 caracteres'
    }
    textarea.setCustomValidity(msgError)
  }
  
//   function validarTextareaDescripcion (textarea) {
//     const textLength = textarea.parentElement.querySelector('.textarea__input').value.length
//     let msgError = ''
//     if (textLength > 150) {
//       msgError = 'No debe superar los 150 caracteres'
//     }
//     textarea.setCustomValidity(msgError)
//   }
  