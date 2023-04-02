// Swal.fire({
//     title: 'Felicidades!',
//     text: 'Tu registro se ha realizado correctamente!',
//     icon: 'success',
//     confirmButtonText: 'ok'
//   })

import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

server.use(middlewares)
server.use(router)
server.listen(port)