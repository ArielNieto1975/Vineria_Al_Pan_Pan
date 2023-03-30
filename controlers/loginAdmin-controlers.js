import { adminUsers } from "../servicios/usuario.js";

const login = document.querySelector('[data-login]');

login.addEventListener('submit', async (evento) => {
    evento.preventDefault()
    const user = document.querySelector('[data-usuario]').value
    const password = document.querySelector('[data-pass]').value

    
    try {
        const administradores = await adminUsers.administradores()
        administradores.forEach(admin => {
          if (admin.user == user && admin.password == password) {

            Swal.fire({
              title: `Bienvenido ${user}`,
              icon: 'success',
              background: "#F0FFFF",
              timer:3000,
              timerProgressBar: true,
              confirmButtonText: 'Continuar'
            }).then(() => {
              window.location.href = '../pages/menuAdministrador.html'
            })
            
          } else {
            Swal.fire({
              title: 'Eres administrador?',
              text: 'Si no lo eres, por favor usa nuestro Formulario de Contacto para comunicarse con nuestros Administradores',
              icon: 'error',
              background: "#F0FFFF",
              timer:5000,
              timerProgressBar: true,
              confirmButtonText: 'Continuar'
            }).then(() => {
              window.location.href = '../pages/login.html'
            })
          }
        })
      } catch (error) {
        Swal.fire({
          title: 'Ocurrió un error!',
          text: 'Intentalo más tarde ...',
          icon: 'error',
          confirmButtonText: 'Continuar'
        }).then(() => {
          window.location.href = '../index.html'
        })
      }


});

