import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Loader from './Components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed
  }, []);

  return (
    <>
      {loading ? <Loader /> : (
        <>
          <NavBar />
          <h1>Hello Employee Management System</h1>
        </>
      )}
    </>
  );
}

export default App;
