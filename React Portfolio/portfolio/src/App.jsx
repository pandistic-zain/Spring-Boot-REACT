import "./App.css";
import Home from "./Components/Home.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import Footer from "./Components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./Components/FrontPage.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<FrontPage/>}></Route>
    </Routes>
   
    </>
  );
}
export default App;
