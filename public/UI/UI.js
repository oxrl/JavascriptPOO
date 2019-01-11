// UI Constructor
class UI {
    showProduct(products) {
        console.log(products.name);
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
      /*  for (var i = 0; i < products.length; i+=1) {
            console.log("En el índice '" + i + "' hay este valor: " + miArray[i]);
        }*/

/*
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${products.name} -
                    <strong>Price</strong>: ${products.price} - 
                    <strong>Year</strong>: ${products.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;*/
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
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