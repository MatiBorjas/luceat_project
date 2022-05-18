import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJ8UXJPAhknMcHpH25Ge3wUSO7GCeG4l4",
  authDomain: "luceat-react.firebaseapp.com",
  projectId: "luceat-react",
  storageBucket: "luceat-react.appspot.com",
  messagingSenderId: "999912509145",
  appId: "1:999912509145:web:4351a229afd14dd2ea78c8"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
