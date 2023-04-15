import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar';
import About from './pages/About';
import Home from './pages/Home';
import SneakerDetail from './pages/SneakerDetail';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <BrowserRouter>
      <div className="pages" style={{marginTop:'3%'}}>
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/login" 
            element={<Login />} 
          />
          <Route 
            path="/about" 
            element={<About />} 
          />
          <Route 
            path="/sneaker" 
            element={<SneakerDetail/>} 
          />

        </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
