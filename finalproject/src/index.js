import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import App from "./App";

const firebaseConfig = {
    apiKey: "AIzaSyB6gzzMBC2qGsWCIY5rWtm2p4NypegJWSA",
    authDomain: "coderhouse-reactjs-ecomm-5a072.firebaseapp.com",
    projectId: "coderhouse-reactjs-ecomm-5a072",
    storageBucket: "coderhouse-reactjs-ecomm-5a072.appspot.com",
    messagingSenderId: "15153365998",
    appId: "1:15153365998:web:4592f7308ca8eb316e04ff"
  };

const app = initializeApp(firebaseConfig);

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<App/>);