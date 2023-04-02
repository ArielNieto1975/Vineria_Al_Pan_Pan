const listaProductos =()=> fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

listaProductos()
.then((data)=> {
    const datos= data
    const products = datos

// para que desaparenzacan los productos filtrados al borrar el input
const input = document.querySelector("[data-buscar]");
const prods = document.querySelectorAll('#products');

input.addEventListener('input', () => {
  if (input.value === '') {
    prods.forEach(product => {
      product.style.display = 'none';
    });
  }else {
	prods.forEach(product => {
		product.style.display = 'flex';
	  });
  }
});


		// Función para filtrar los productos
		function filterProducts() {
			// Obtener el valor de búsqueda
			const searchValue = document.querySelector("[data-buscar]").value.toLowerCase();

			// Filtrar los productos que coinciden con la búsqueda
			const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue));

			// Mostrar los productos filtrados en la página
			const productsDiv = document.getElementById("products");
			productsDiv.innerHTML = "";
			filteredProducts.forEach(product => {
				const productDiv = document.createElement("div");
				productDiv.innerHTML = `
                <div class="gallery__item">
				    <img src="${product.imageURL}" alt="${product.name}" class="gallery__item-img">	
                    <h2 class="gallery__item-name">${product.name}</h2>	
                    <p> ${product.categoria}</p>		
					<p class="gallery__item-precio">Precio: ${product.price}</p>
                    </div>
				`;
				productsDiv.appendChild(productDiv);
			});
		}

		// Agregar un evento de escucha al campo de entrada de texto
		document.querySelector("[data-buscar]").addEventListener("input", filterProducts);

    })