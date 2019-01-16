import Product from './Models/Product.js';
import UI from './UI/UI.js';
// Create a new UI
const ui = new UI();
//Show Products
ui.showProducts();
// DOM Events
document.addEventListener('click', function (e) {
        e.preventDefault();

        if (e.target.id === 'btnSave') {
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
            ui.showProducts();
            ui.showMessage('Product Added Successfully', 'success');
            ui.resetForm();
        }
        if(e.target.name === 'edit'){
            ui.showProduct(e.target.id);

        }
        if (e.target.name === 'delete') {
            ui.deleteProduct(e.target.id);
            ui.showProducts();
        }
        if(e.target.name === 'btnUpdate'){
            ui.updateProduct(e.target.id);
            ui.showProducts();
            ui.resetForm();
        }

    });


