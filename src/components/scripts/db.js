import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

var firebaseConfig = {
  apiKey: 'AIzaSyCaRLbP-1yR5tVtpbHZPSja-nIMqBeAYQw',
  authDomain: 'fotografiaalejacastano.firebaseapp.com',
  databaseURL: 'https://fotografiaalejacastano.firebaseio.com',
  projectId: 'fotografiaalejacastano',
  storageBucket: 'fotografiaalejacastano.appspot.com',
  messagingSenderId: '570685269118',
  appId: '1:570685269118:web:0ec518017b97a7ea07642f',
  measurementId: 'G-EZ17N33RF1',
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const ff = firebase.firestore;

export const db = fb.firestore();

export const newC = ()=>{
    alert('new')
}
export const newContact = (data) => {
  db.collection('contact')
    .doc('0q0DJ9luw63otYq0S1VS')
    .set(data)
    .then(() => console.log('datos escritos con id'));
};
