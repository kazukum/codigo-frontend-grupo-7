import logo from './logo.svg';
import './App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hola mundo</h1>
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


import React from 'react'
import Header from "./componentes/Header/Header"
import Home from "./componentes/Home/Home"

const App = () => {
    return (
        <div>
           <Header />
           <Home/>
        </div>
    )
}

export default App
