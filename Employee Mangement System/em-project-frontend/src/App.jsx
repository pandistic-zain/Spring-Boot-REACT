import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Loader from './Components/Loader';
import Tables from './Components/Tables';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? <Loader /> : (
        <>
          <NavBar />
          <Tables />
        </>
      )}
    </>
  );
}

export default App;
