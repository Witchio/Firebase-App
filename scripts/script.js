// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBfshrbgEZppCu-OhYvMdP9Bt662XDGW14",
    authDomain: "ng-technical-eval.firebaseapp.com",
    databaseURL: "https://ng-technical-eval.firebaseio.com",
    projectId: "ng-technical-eval",
    storageBucket: "ng-technical-eval.appspot.com",
    messagingSenderId: "539646868521",
    appId: "1:539646868521:web:533c86a0969bf1bd88f038",
    measurementId: "G-JM7MCND6YC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
//var database = firebase.database();
const preObject = document.getElementById('ng-technical-eval');

//Create references
const dbRefObject = firebase.database().ref().child('1');

//Sync object changes
dbRefObject.on('value', snap => console.log(snap.val()));




/**
 * * Sources
 * ? https://www.youtube.com/watch?v=noB98K6A0TY
 */