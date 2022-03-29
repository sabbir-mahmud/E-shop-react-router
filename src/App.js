import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Shop' element={<Shop />}></Route>
        <Route path='/About' element={<About />}></Route>

      </Routes>

    </div>
  );
}

export default App;
