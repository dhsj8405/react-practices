import React from 'react';      //jsx여서 리액트를 부르진않지만  컴포넌트만들때 create element로 바뀌므로 import하고있어야함
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello React!!!
        </a>
      </header>
    </div>
  );
}

export default App;
