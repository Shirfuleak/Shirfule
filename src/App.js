
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="">
      <Router>
      <Routes>
        <Route path="" element={<Layout />}> 
        <Route index path="home" element={<Home></Home>} />
        <Route  path="/" element={<Home></Home>} />

        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} /></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
