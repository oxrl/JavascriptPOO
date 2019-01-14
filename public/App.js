import Product from './Models/Product.js';
import UI from './UI/UI.js';
// Create a new UI
const ui = new UI();
//Show Products
ui.showProduct();
// DOM Events
document.getElementById('product-form')
    .addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value,
            price = document.getElementById('price').value,
            year = document.getElementById('year').value;
        // Input User Validation
        if (name === '' || price === '' || year === '') {
            ui.showMessage('Please Insert data in all fields', 'danger');
        }

        // Save Product
        const product = new Product(name, price, year);
        product.saveProduct();
        ui.showProduct();
        ui.showMessage('Product Added Successfully', 'success');
        ui.resetForm();

    });

document.getElementById('product-list')
    .addEventListener('click', function (e) {
        if (element.name === 'delete') {
            ui.deleteProduct(e.target);
        }
        if (element.name === 'edit') {
            ui.editProduct(e.target);
        }
        ui.showProduct();
        e.preventDefault();
    });

