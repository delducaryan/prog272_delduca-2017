import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from './components/ElfHeader';
import App from './App';
import Address from './components/Address';
import './index.css';

ReactDOM.render(
  <div>
      <ElfHeader />
      <App />
      <Address />
  </div>,
  document.getElementById('root')
);
