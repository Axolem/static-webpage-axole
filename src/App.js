import logo from "./logo.svg";
import "./App.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <img className="App-logo" src={logo}  />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <hr></hr>
      <p>Copyright © 2022 | Axole Maranjana</p>
    </footer>
  );
}
function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn react...</h1>
      <ol>
        <li>Simple</li>
        <li>Declarative language</li>
        <li>Large community</li>
      </ol>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
