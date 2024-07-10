import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Users from "./Components/Class.jsx";
import States from "./Components/States.jsx";
import Props from "./Components/Props.jsx";
import Form from "./Components/Form.jsx";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>
          <p>Pendi a fer thak Champion!</p>
          <States />
          <Props name={"React"} />
        </header>
        </div>
        <Form/>
        <Users />
    </>
  );
}
export default App;
