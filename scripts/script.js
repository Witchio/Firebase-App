// Web app's basic configuration, connect to firebase db
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



//Create references
const dbRefObject = firebase.database().ref().child('1');

//Sync object changes and test with console log if data is connected to js
// Creating an array containing all the objects needed
var dataArray = [];
let data = dbRefObject.once('value').then(function (snapshot) {
    dataToPush = snapshot.val();
    dataArray.push(dataToPush);
})

console.log(dash);




/**
 * * Sources
 * ? https://www.youtube.com/watch?v=noB98K6A0TY
 * ? https://firebase.google.com/docs/database/web/read-and-write
 */