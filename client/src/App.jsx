import Home from "./components/Home";
import About from "./components/About";
import Desc from "./components/Desc";
import Books from "./components/Books";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home className="header" />
      <About />
      <Desc />
      <Books />
    </div>
  );
}

export default App;
