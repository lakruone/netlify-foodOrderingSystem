import firebase from 'firebase/app';
import 'firebase/storage'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBnoQ_PMGADHh8TAy3G4BUuAZE1CoPL4U0",
  authDomain: "torrid-fdf18.firebaseapp.com",
  databaseURL: "https://torrid-fdf18.firebaseio.com",
  projectId: "torrid-fdf18",
  storageBucket: "torrid-fdf18.appspot.com",
  messagingSenderId: "904221841884"
};
firebase.initializeApp(config);


const storage =firebase.storage();

export {
  storage, firebase as default
}
