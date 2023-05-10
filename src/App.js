import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataFetcher from './DataFetcher';

function App() {
  return (
    <div>
      <img src={logo} alt="Logo" /> {/* Inserting the logo image */}
      <h1>Data Fetcher</h1>
      <DataFetcher />
    </div>
  );
}

export default App;
