import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from './components/ElfHeader';
import App from './App';
import Address from './components/Address';
import addresses from './components/address-list';
import './css/index.css';

ReactDOM.render(
  <div>
      <ElfHeader />
      <App />
      <Address addressList={addresses} />
  </div>,
  document.getElementById('root')
);
