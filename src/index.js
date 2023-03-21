import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Main from './Main';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBR2r-ldd5zmlryuOsJaIyP_4G2BBWDNz8",
  authDomain: "fir-test-auto.firebaseapp.com",
  databaseURL: "https://fir-test-auto-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-test-auto",
  storageBucket: "fir-test-auto.appspot.com",
  messagingSenderId: "20856425954",
  appId: "1:20856425954:web:b345d4a500d834acf07dbb"
}

firebase.initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);

export let db = firebase.database()