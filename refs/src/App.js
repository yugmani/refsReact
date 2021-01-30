import logo from "./logo.svg";
import "./App.css";
import RefsDemo from "./RefsDemo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <RefsDemo />
    </div>
  );
}

export default App;
