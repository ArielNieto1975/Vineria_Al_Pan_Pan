import { productos } from "../servicios/productos.js";
const formulario = document.querySelector("[data-form]");

const obtenerInformacion = ()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

if(id == null) {
    // alert("Ocurrio un Error")
    window.location.href = "./menuAdministrador.html"
}

    const ruta = document.querySelector("[data-url]");
    // const categoria = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    // const descripcion = document.querySelector("[data-descripcion]");
   
    productos.detalleProducto(id).then(producto => {
        ruta.value=producto.imageURL;
        // categoria.value=producto.name;
        nombre.value=producto.name; 
        precio.value=producto.price;
        // descripcion.value=producto.nombre;

    })
}
obtenerInformacion()

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const ruta = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    
    productos.actualizarProducto(ruta, categoria, nombre, precio,descripcion,id).then(()=>{
        window.location.href ="./menuAdministrador.html"
    })
})