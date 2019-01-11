// Initialize Firebase



class Product {


    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
        this.config = {
            apiKey: "AIzaSyCAeNQm8V6lOkWAKhZBHEiLPfQ-4_OIb0U",
            authDomain: "appproduct-be53f.firebaseapp.com",
            databaseURL: "https://appproduct-be53f.firebaseio.com",
            projectId: "appproduct-be53f",
            storageBucket: "appproduct-be53f.appspot.com",
            messagingSenderId: "755003102096"
        };
        firebase.initializeApp(this.config);
        this.db = firebase.firestore();
        // Disable deprecated features
        this.db.settings({
            timestampsInSnapshots: true
        });
    }
    saveProduct(){
        this.db.collection("products").add({
            first: this.name,
            last: this.price,
            born: this.year
        })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    }
}

export default Product;