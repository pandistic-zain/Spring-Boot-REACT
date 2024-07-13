import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Users from "./Components/Class.jsx";
import States from "./Components/States.jsx";
import Props from "./Components/Props.jsx";
import Form from "./Components/Form.jsx";
import HooksUE from "./Components/HooksUE.jsx";
import HookUM from "./Components/HookUM.jsx";
import DataTrans from "./Components/DataTrans.jsx";
function App() {
  function dataShower(q) {
    let name = "Zain Ul Abdeen";
    name = q;
    console.warn(name);
    alert(name);
  }
  return (
    <>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>
          <p>Pendi a fer thak Champion!</p>
          <States />
          <Props name={"React"} />
          <HooksUE data={"ZAIN"} count={0} />
          <HookUM/>
        </header>
      </div>
      <DataTrans data={dataShower} />
      <Form />
      <Users />
    </>
  );
}
export default App;
