import { productos } from "../servicios/productos.js";

const crearNuevoProducto = (imageURL,name,price,id)=> {
    const item = document.createElement("figure");
    item.classList.add("gallery__item")
    const contenido =`
                    <img src="${imageURL}" alt="Malbec - Nieto Senetiner" class="gallery__item-img"/>
                    <figcaption class="gallery__item-name">${name}</figcaption>
                    <figcaption class="gallery__item-precio">$${price}</figcaption>
                    <figcaption class="gallery__item-precio">#${id}</figcaption>
                    <a href="./modificarProducto.html?id=${id}"><img src="../assets/editar.png" alt="" class="gallery__item-editar"/></a>
                    <img src="../assets/eliminar.png" alt="" class="gallery__item-eliminar" id="${id}"/>
                    `;
    item.innerHTML = contenido;
    const elimina = item.querySelector(".gallery__item-eliminar");
    elimina.addEventListener("click", ()=>{
        const id = elimina.id;
        productos.eliminarCliente(id).then(respuesta => {
            console.log(respuesta)
        }).catch((error)=>[
            alert("Ocurrio un Error")]);
    });
    
    return item
};
const producto = document.querySelector("[data-producto]");
// const catenaZ = document.querySelector("[data-catena]");

productos.listaProductos().then((data)=>{
    data.forEach(({imageURL,name,price,id}) => {
                const nuevoProducto = crearNuevoProducto(imageURL,name,price,id)
        producto.appendChild(nuevoProducto)
    });
}).catch((error)=>[
    alert("Ocurrio un Error")]);

