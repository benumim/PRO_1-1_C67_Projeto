import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAg3zLxAiPQe7kI7Vp-d-syV8OYn-K0sP4",

  authDomain: "projeto-67-3ab9f.firebaseapp.com",

  databaseURL: "https://projeto-67-3ab9f-default-rtdb.firebaseio.com",

  projectId: "projeto-67-3ab9f",

  storageBucket: "projeto-67-3ab9f.appspot.com",

  messagingSenderId: "961545058870",

  appId: "1:961545058870:web:6bb1c6522ee26a4969b697"

};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
