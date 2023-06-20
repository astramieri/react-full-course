import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Angelo";

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const index = Math.floor(Math.random() * 3);
    return names[index];
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello, {name}!</p>
        {/* <p>This is a comment</p> */}
        <p>Hello, {handleNameChange()}!</p>
      </header>
    </div>
  );
}

export default App;
