import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage.js';
import { Nav } from './Nav.js';
import Footer from './Footer.js';


function App() {
  return (
    <div className="App">
        <Nav />
      <HomePage />
    </div>
  )
}

export default App;
