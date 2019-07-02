console.log("Connected!");

// A $( document ).ready() block.
$(document).ready(() => {
  console.log('Document is Ready!');

  // Setup Variables
  // *********************************************

  // Initialize Cloud Firestore through Firebase
  firebase.initializeApp({
    apiKey: 'AIzaSyBmsAwOoGTe21Njgv6tfQkgIe1H1al4soI',
    authDomain: 'train-maz.firebaseapp.com',
    projectId: 'train-maz',
  });

}); // End Document Ready