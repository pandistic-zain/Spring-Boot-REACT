function Navbar() {
  function Alerter()
    {
      alert("Function Fired....!")
    }
    
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light"></nav>
      <h1>This Is NavBar</h1>
      <button onClick={Alerter}> Click Me</button>
    </>
  );
}
export default Navbar;
