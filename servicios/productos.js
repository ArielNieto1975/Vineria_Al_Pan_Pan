const listaProductos =()=> fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());
const crearProductos =(imageURL,categoria,name,price,descripcion)=> {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({imageURL,categoria,name,price,descripcion, id:uuid.v4()}),
    });
};

const eliminarProducto = (id)=>{
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE",
});
};
const detalleProducto = (id)=>{
    return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => respuesta.json());
};

const actualizarProducto = (imageURL, categoria, name, price, descripcion, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({imageURL, categoria, name, price, descripcion}),
}).then ((respuesta) => respuesta)
.catch((err)=> console.log(err));
};

export const productos = {
    listaProductos,
    crearProductos,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
};
