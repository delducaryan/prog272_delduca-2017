import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from './components/ElfHeader';
import ElfMenu from './components/ElfMenu';
import './css/index.css';

ReactDOM.render(
  <div>
      <ElfHeader />
      <ElfMenu />
  </div>,
  document.getElementById('root')
);
