import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Loader from "./Components/Loader";
import FrontPage from "./Components/FrontPage";
import AddEmployee from "./Components/AddEmployee";
import UpdateEmployee from "./Components/UpdateEmployee";
 
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        <Routes>
          <Route exact path="/" element =  {<FrontPage/>}></Route>
          <Route path ="/addemployee" element  = {<AddEmployee/>}></Route>
          <Route path ="/updateemployee" element  = {<UpdateEmployee/>}></Route>
        </Routes>

          
        </>
      )}
    </>
  );
}

export default App;
