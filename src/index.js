import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CardList from "./components/CardList";
import Gambar from "./assets/images/21120118120039.jpg";
import Quotes from "./components/Quotes"

const quotes = "Disaat payung teduh ku dengar , disitu lah tugas-tugas terbabat abis";
ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList name="Wisnu" 
    nim="21120118120039" 
    kelompok="13" 
    isNameBold
    image={Gambar}
    />
    <Quotes author="Orang" quotes={quotes} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

