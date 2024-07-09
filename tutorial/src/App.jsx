import logo from './logo.svg';
import './App.css';
import Navbar from'./Components/Navbar.jsx';
import Users from'./Components/Class.jsx';
function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <p>
          Pendi a fer thak Champion!
        </p>
      </header>
    </div>
    <Users/>
    </>
  );
}
export default App;
