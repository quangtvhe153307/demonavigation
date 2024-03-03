import About from './About';
import Contact from './Contact';
import Homepage from './Homepage';
import { Route, Routes, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/about" className="nav-item">About</Link>

      </nav>
      
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
