import { useDispatch, useSelector } from "react-redux";
import { modify_search } from "../reducers/resellersSlice";
import { authLogout } from "../reducers/authReducer";

function Navbar(){
  const dispatch=useDispatch();

  const logged_in=useSelector((state)=>state.auth.login);
  const user=useSelector((state)=>state.auth.user);

  function handleClick(search){
    dispatch(modify_search(search))


  };

  function logOut(){
    console.log('clicked')
    localStorage.clear();
    
    dispatch(authLogout());
}
    return(

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{paddingLeft:'2%'}}>
        <a class="navbar-brand" href="/"> <span class="navbar-brand mb-0 h1">Shop Wise</span></a>
 

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <li class="nav-item active">
        <a class="nav-link" onClick={()=>{handleClick('Jordan')}} >
          <span class="navbar-text">
            Jordans
          </span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link"  onClick={()=>{handleClick('Dunk')}}>
          <span class="navbar-text">
            Dunks
          </span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link"  onClick={()=>{handleClick('Yeezy')}}>
          <span class="navbar-text">
            Yeezy
          </span>
        </a>
      </li>

      
      <li class="nav-item">
        {!logged_in?
        <a class="nav-link" href="/login">
          <span class="navbar-text">
            Login
          </span>
        </a>
        :
        <a class="nav-link" href="/profile">
          <span class="navbar-text">
            Profile
          </span>
        </a>}
      </li>

      {logged_in?
      <>
      <li class="nav-item">
        <a class="nav-link"  onClick={()=>{logOut()}}>
          <span class="navbar-text">
            LogOut
          </span>
        </a>
      </li></>
      :<></>}



      
    </ul>
   
  </div>
</nav>

    );
}
export default Navbar;