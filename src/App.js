import logo from './logo.svg';
import './App.css';
const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY
console.log(giphy_secret_key)

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
          Hello
        </a>
      </header>
    </div>
    
  );
}

export default App;
