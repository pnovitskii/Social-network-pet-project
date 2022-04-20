import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let dataPosts = [
  {name:'Alex', message:"Hello! How it's goin?" },
  {name:'Pavel' , message:'Здарова.' },
  {name:'James' , message:'Good morning, sir!' }
];
let dataDialogs = [
  { name: 'Pavel' },
  { name: 'Pavel' },
  { name: 'Pavel' },
  { name: 'Pavel' },
  { name: 'Pavel' },
  { name: 'Pavel' },
  { name: 'Pavel' },
  { name: 'Pavel' },
  { name: 'Pavel' },
  { name: 'Pavel' },
  { name: 'Pavel' },
  { name: 'Pavel' }
];
ReactDOM.render(
  <React.StrictMode>
    <App dataPosts={dataPosts} dataDialogs={dataDialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
