   // Seleccionar elementos del DOM
   const productList = document.querySelector('.product-list');
   const addProductForm = document.getElementById('addProductForm');
   const productImageInput = document.getElementById('productImage');
   const productNameInput = document.getElementById('productName');
   const productPriceInput = document.getElementById('productPrice');
   const clearFieldsButton = document.getElementById('clearFields');

   // Evento: Agregar producto
   addProductForm.addEventListener('submit', (e) => {
     e.preventDefault();

     const file = productImageInput.files[0]; // Archivo seleccionado
     const name = productNameInput.value.trim();
     const price = productPriceInput.value.trim();

     // Validar que todos los campos estén llenos
     if (!file || !name || !price) {
       alert('Por favor, completa todos los campos y selecciona una imagen.');
       return;
     }

     // Leer el archivo de imagen
     const reader = new FileReader();
     reader.onload = function(event) {
       const imageUrl = event.target.result;

       // Crear la tarjeta del producto
       const product = document.createElement('div');
       product.classList.add('product-card');
       product.innerHTML = `
         <img src="${imageUrl}" alt="${name}">
         <h3>${name}</h3>
         <div class="details">
            <p>$${price}</p>
            <i class="fas fa-trash delete-icon"></i>
          </div>
       `;

       // Añadir funcionalidad de eliminar
       product.querySelector('.delete-icon').addEventListener('click', () => {
         product.remove();
       });

       // Añadir la tarjeta a la lista de productos
       productList.appendChild(product);

       // Limpiar los campos
       productImageInput.value = '';
       productNameInput.value = '';
       productPriceInput.value = '';
       customFileInput.textContent = 'Imagen...'; 
     };

     // Leer la imagen como Data URL
     reader.readAsDataURL(file);

   // Cambiar el texto del placeholder al nombre del archivo seleccionado
   customFileInput.textContent = productImageInput.files[0].name;
  });

   // Evento: Limpiar campos del formulario
   clearFieldsButton.addEventListener('click', () => {
     productImageInput.value = '';
     productNameInput.value = '';
     productPriceInput.value = '';
     customFileInput.textContent = 'Imagen...';
   });