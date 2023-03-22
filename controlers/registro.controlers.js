import { productos } from "../servicios/productos.js";

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (evento)=> {
    evento.preventDefault();
    const imageURL = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const name = document.querySelector("[data-nombre]").value;
    const price = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productos.crearProductos(imageURL,categoria,name,price,descripcion).then(()=> {
        window.location.href= "./menuAdministrador.html"
    }).catch (err => console.log(err));
});

