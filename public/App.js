import Product from './Models/Product.js';
import UI from './UI/UI.js';


// DOM Events
document.getElementById('product-form')
    .addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value,
            price = document.getElementById('price').value,
            year = document.getElementById('year').value;
        //Product(name,price,year);
        // Create a new Oject Product
        const product = new Product(name, price, year);

        // Create a new UI
        const ui = new UI();

        // Input User Validation
        if (name === '' || price === '' || year === '') {
            ui.showMessage('Please Insert data in all fields', 'danger');
        }

        // Save Product
        product.saveProduct();
        this.result =product.getProducts();

        ui.showProduct(this.result);
        ui.showMessage('Product Added Successfully', 'success');
        ui.resetForm();

    });

document.getElementById('product-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });

