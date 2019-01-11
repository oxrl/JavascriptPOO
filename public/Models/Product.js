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

      db.collection("products").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                console.log(doc.data().name);

                //this.result[doc.id] = { "name" : doc.data().name , "price" : doc.data().price } ;
                this.result.push({ "name" : doc.data().name , "price" : doc.data().price });
            });
        });
        return this.result;
    }
}

export default Product;