import db from '../Firebase/Config.js';

class Product {

    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
        this.result = [];

    }

    saveProduct(){

       return db.collection("products").add({
            name: this.name,
            price: this.price,
            year: this.year
        })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);

            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    }
    getProducts(){

      db.collection("products").orderBy("name", "desc").get().then((querySnapshot) => {
            document.getElementById('product-list').innerHTML=``;
            querySnapshot.forEach((doc) => {
               // console.log(`${doc.id} => ${doc.data()}`);
              //  console.log(doc.data().name);
                const productList = document.getElementById('product-list');
                const element = document.createElement('div');
                element.innerHTML = `
                        <div class="card text-center mb-4">
                            <div class="card-body">        
                                <strong>Product</strong>: ${doc.data().name} -
                                <strong>Price</strong>: ${doc.data().price} - 
                                <strong>Year</strong>: ${doc.data().year}
                                <a href="#" data-id=${doc.id} class="btn btn-danger" name="delete">Delete</a>
                                <a href="#" data-id=${doc.id} class="btn btn-success" name="edit">Edit</a>
                            </div>
                        </div>
                    `;
                productList.appendChild(element);
            });
        });
        return this.result;
    }
    editProductDB(Doc){
        db.collection("products").doc(Doc).set({

        }).then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
    deleteProductDB(Doc){
        db.collection("products").doc(Doc).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }

}

export default Product;