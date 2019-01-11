const http = require('http');
const express = require('express');
const app = express();
const morgan = require('morgan');
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyCAeNQm8V6lOkWAKhZBHEiLPfQ-4_OIb0U",
    authDomain: "appproduct-be53f.firebaseapp.com",
    projectId: "appproduct-be53f"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

const server = http.createServer(app);

// configuración del Servidor
app.set('port', 3000);

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));


server.listen(app.get('port'), function () {
    console.log('servidor en puerto 3000');
});