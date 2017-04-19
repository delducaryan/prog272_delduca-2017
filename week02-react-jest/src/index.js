import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from './components/ElfHeader';
import App from './App';
import Address from './components/Address';
import './index.css';

var address =
{
    firstName: "foo",
    lastName: "bar",
    buildingNumber: "unknown",
    street: "unknown",
    suite: "unknown",
    city: "unknown",
    zipcode: "unknown",
    state: "unknown"
};

ReactDOM.render(
  <div>
      <ElfHeader />
      <App />
      <Address address={address} />
  </div>,
  document.getElementById('root')
);
