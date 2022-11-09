// Import stylesheets
import './style.css';

// Import javascript files
import './js/add-element.js';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

import * as firebaseui from 'firebaseui';

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
const firebaseConfig = {
  apiKey: "AIzaSyDtdOrkmzEWai4wm_-3PbD8SUcdl5kvIU4",
  authDomain: "firstproject-db449.firebaseapp.com",
  projectId: "firstproject-db449",
  storageBucket: "firstproject-db449.appspot.com",
  messagingSenderId: "154793108981",
  appId: "1:154793108981:web:4c4fc179a9f48ca1adecbc",
  measurementId: "G-N0WQDBNKX9"
};

firebase.initializeApp(firebaseConfig);
// Save the list to database
$('#save').click(function () {

  $(this).text('saved');
  // document.querySelectorAll('li') ==> nodelist
  // for loop to go through each nodelist
  // and then get the text content

  $('li').each(function () {
    var value = $(this).text();
    console.log(value);

    firebase.firestore().collection('myList').add({
    item: value,
    price: '$' + value.length
    });
});
});
