// UI Constructor
import Product from '../Models/Product.js';
class UI extends Product {
    showProduct(){
        this.getProducts();
    }
    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {

        if (element.name === 'delete') {
           // console.log(element.name);
            this.Doc = document.getElementsByName(element.name)[0].getAttribute("data-id");
          //  console.log(this.Doc);
            this.deleteProductDB(this.Doc);
            this.showMessage('Product Deleted Succsssfully', 'success');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        // Insert Message in the UI
        container.insertBefore(div, app);
        // Remove the Message after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

export default UI;