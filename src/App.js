import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar';
import Item from './components/Shop/Products/Item/Item';
import Order from './components/Order/Order';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Shop' element={<Shop />}></Route>
        <Route path='/Shop/:slug' element={<Item></Item>}></Route>
        <Route path='/Order' element={<Order />}></Route>
        <Route path='/About' element={<About />}></Route>

      </Routes>

    </div>
  );
}

export default App;
