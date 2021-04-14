
/*
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


import './App.css';
import Home from './componentes/Home/Home';
import Imagen from './componentes/Imagen/Imagen';


function App() {
  return (
    <>
    <div className="App">
      
      <Home/>
      <Navbar/>
    </div>
    <Imagen/>
</>

  );
}

export default App;
*/

import './App.css';
import Home from './componentes/Home/Home';
import NavBar from './componentes/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;