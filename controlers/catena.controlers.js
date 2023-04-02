// Cargar los datos del archivo db.json
fetch('db.json')
.then(response => response.json())
.then(data => {
    // Filtrar los productos de la categoría "Nieto Senetiner"
    const productos = data.producto.filter(producto => producto.categoria === "Catena Zapata");
    // Crear un elemento HTML para cada producto y agregarlo a la galería
    const galeria = document.querySelector("[data-producto]");
    productos.forEach(producto => {
        const productoHTML = `
            <div class="gallery__item">
                <img src="${producto.imageURL}" alt="${producto.name}" class="gallery__item-img">
                <h2 class="gallery__item-name">${producto.name}</h2>
                
                <p class="gallery__item-precio">Precio: $${producto.price}</p>
                <button class="gallery__item-boton"><a href="" class="boton_acc">Ver Producto</a></button>
            </div>
        `;
        galeria.innerHTML += productoHTML;
    });
})
.catch(error => console.error(error));
