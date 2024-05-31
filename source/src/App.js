import logo from './logo.svg';
import './App.css';
import OnProcess from './views/onProcess'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <OnProcess />
      </header>
    </div>
  );
}

export default App;
