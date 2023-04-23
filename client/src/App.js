import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar';
import About from './pages/About';
import Home from './pages/Home';
import SneakerDetail from './pages/SneakerDetail';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin,addSneakers, setSneakers } from './reducers/authReducer';
import { useEffect } from 'react';

function App() {
  const logged_in=useSelector((state)=>state.auth.login);
  const user=useSelector((state)=>state.auth.user);
  const sneakers=useSelector((state)=>state.auth.sneakers);
  console.log(user)
  const dispatch=useDispatch()


  //check if logged in 
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
    
      dispatch(authLogin(JSON.parse(loggedInUser)))
    }
  }, [logged_in]);


  //get users sneakers
  useEffect(() => {
    (async () => {
      await fetch('/api/user/get', {
        method:'POST',
         headers: {
           "Content-Type": "application/json",
         },
        body:JSON.stringify({email:user.email})
       }).then((resp) =>(resp.json()))
       .then((data) => {
         
        if (data.ok) {
           console.log(data.sneakers)
          
           dispatch(setSneakers(data.sneakers))
         }
          else {
           if (data.errors) console.log(data.errors);
           
         }
       })
    })();
  
    return () => {
      // this now gets called when the component unmounts
    };
  }, [user]);

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
