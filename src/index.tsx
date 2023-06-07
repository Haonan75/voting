import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Scrypt, bsv } from 'scrypt-ts'

import { Voting } from './contracts/voting';
var artifact = require('../artifacts/src/contracts/voting.json');
Voting.loadArtifact(artifact);

Scrypt.init({
  // https://docs.scrypt.io/advanced/how-to-integrate-scrypt-service#get-your-api-key
  apiKey: 'testnet_1ssPz43eLocZShnhE17yPGsmARhb11a9z0HGW2Q7n07Fw7DtV',
  network: bsv.Networks.testnet
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
