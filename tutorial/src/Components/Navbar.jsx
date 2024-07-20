
import { Link } from "react-router-dom";
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
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact Us</Link>
    </>
  );
}
export default Navbar;
