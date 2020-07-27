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


//Let's select the 10 first elements of the database and display them

for (i = 0; i < 10; i++) {

    //Create references
    const dbRefObject = firebase.database().ref().child(i);

    // I loop through each asset to display them on the html file
    let data = dbRefObject.once('value').then(function (snapshot) {
        objectData = snapshot.val();

        //We inject these data into the html by creating clone rows of the table
        const row = document.querySelector(".table-none");
        let rowClone = row.cloneNode(true);

        let rowFund = rowClone.querySelector(".fund");
        rowFund.textContent = objectData.fund_name;

        let rowfSubFund = rowClone.querySelector(".subfund");
        rowfSubFund.textContent = objectData.subfund_name;

        let rowSubShareClass = rowClone.querySelector(".shareClass");
        rowSubShareClass.textContent = objectData.share_class_name;

        let rowDate = rowClone.querySelector(".date");
        rowDate.textContent = objectData.date;

        let rowAlerts = rowClone.querySelector(".alerts");
        rowAlerts.textContent = objectData.nb_alerts;

        let rowStatus = rowClone.querySelector(".status");
        rowStatus.textContent = objectData.report_status;

        //Appending the created clone row with desired data to the table
        const mytable = document.querySelector("table");
        mytable.append(rowClone);


    })
}











/**
 * ! Sources
 * ? https://www.youtube.com/watch?v=noB98K6A0TY
 * ? https://firebase.google.com/docs/database/web/read-and-write
 * ? https://softauthor.com/learn-to-build-firebase-crud-app-with-javascript-part01-reading-data/
 * ? https://firebase.google.com/docs/reference/js/firebase.database.Reference#equalto
 */