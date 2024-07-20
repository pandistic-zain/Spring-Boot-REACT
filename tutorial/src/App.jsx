import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;