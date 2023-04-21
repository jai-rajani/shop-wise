import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar';
import About from './pages/About';
import Home from './pages/Home';
import SneakerDetail from './pages/SneakerDetail';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from './reducers/authReducer';
import { useEffect } from 'react';

function App() {
  const logged_in=useSelector((state)=>state.auth.login);
  console.log(logged_in)
  const dispatch=useDispatch()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
    
      dispatch(authLogin(JSON.parse(loggedInUser)))
    }
  }, [logged_in]);

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

          {!logged_in?
          <Route 
            path="/login" 
            element={<Login />} 
          />:<></>}
          <Route 
            path="/about" 
            element={<About />} 
          />
          <Route 
            path="/sneaker" 
            element={<SneakerDetail/>} 
          />
            <Route 
            path="/profile" 
            element={<Profile/>} 
          />

        </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
