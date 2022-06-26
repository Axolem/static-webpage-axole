import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originallt created by Jordan Walker</li>
        <li>Has over 100K stars in Github</li>
        <li>It is maintained by Facebook</li>
        <li>Use in thousands of enterprice apps including mobile apps</li>
      </ul>
    </div>
  );
}

export default App;
