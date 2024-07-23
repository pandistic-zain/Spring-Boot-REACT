import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Loader from "./Components/Loader";
import Tables from "./Components/Tables";

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
          <NavBar />
          <Tables />
        </>
      )}
    </>
  );
}

export default App;
