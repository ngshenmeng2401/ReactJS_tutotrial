import logo from './logo.svg';
import './App.css';
import profileImg from './img/profile.png';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      <h1>Demo app</h1>
      <h2>Meng</h2>
      <h3>HIII</h3>
      <img src={profileImg} alt="profile" />
    </div>
  );
}

export default App;
