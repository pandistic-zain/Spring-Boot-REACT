import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Users from "./Components/Class.jsx";
import Form from "./Components/Form.jsx";
import DataTrans from "./Components/DataTrans.jsx";
import {Route} from "react-router-dom";
import Home from "./Components/Home.jsx";
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
      <Route exact path="/"><Home/></Route> 
      <DataTrans data={dataShower} />
      <Form />
      <Users />
    </>
  );
}
export default App;
