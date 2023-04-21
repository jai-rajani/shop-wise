import { useDispatch } from "react-redux";
import { modify_search } from "../reducers/resellersSlice";

function Navbar(){
  const dispatch=useDispatch();

  function handleClick(search){
    dispatch(modify_search(search))


  };
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
        <a class="nav-link" href="/login">
          <span class="navbar-text">
            Login
          </span>
        </a>
      </li>



      
    </ul>
   
  </div>
</nav>

    );
}
export default Navbar;