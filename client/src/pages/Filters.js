import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../components/checkbox";
import { modify, modify_final } from "../reducers/resellersSlice";
import './Filters.css'

function Filters(){
    const get=useSelector((state) => state.resellers.value);
    //console.log('get is',get)
    const [resellers,setResellers]=useState(get);
    const dispatch=useDispatch();
   
    let new_resellers2=[]
    
    //console.log('resselrs',resellers);

    function handleChange(e){
        
        const { value, checked } = e.target;
       
        if (checked) {
            //console.log('is checked')
            dispatch(modify([...resellers,value]))
            setResellers([...resellers,value]);
          }
        
          else {
            //console.log('not checked')
            new_resellers2=resellers
            let x=[]
            x=new_resellers2.filter((e)=>e!=value);
            //console.log('x not checkef is',x)
            dispatch(modify(x))
            setResellers(x)
          }
        //console.log(resellers)
       
    }

    function handleSubmit(){
        dispatch(modify_final(resellers));
    }
    return(
   
    
    <div class='main'>
        
        <div class='header'>
            Resellers
        </div>

        <div class="form-check">
        <input class="form-check-input" type="checkbox" value='superkicks' id="flexCheck1" onChange={handleChange}/>
        <label class="form-check-label text" for="flexCheck1" style={{fontSize:'0.8em'}}>
        Super Kicks
        </label>
        </div>

        <div class="form-check">
        <input class="form-check-input" type="checkbox" value='hypefly' id="flexCheckDefault" onChange={handleChange}/>
        <label class="form-check-label text" for="flexCheckDefault" style={{fontSize:'0.8em'}}>
        HypeFly
        </label>
        </div>

        <div class="form-check">
        <input class="form-check-input" type="checkbox" value='vegnonveg' id="flexCheckDefault" onChange={handleChange}/>
        <label class="form-check-label text" for="flexCheckDefault" style={{fontSize:'0.8em'}}>
        Veg Non-Veg
        </label>
        </div>

        <div class="form-check">
        <input class="form-check-input" type="checkbox" value='crepdogcrew' id="flexCheckDefault" onChange={handleChange}/>
        <label class="form-check-label text" for="flexCheckDefault" style={{fontSize:'0.8em'}}>
        CrepDogCrew
        </label>
        </div>

        <div style={{paddingTop:'3%'}}>
            <button type="button" class="btn btn-primary" onClick={handleSubmit}>Apply</button>
        </div>
       
    </div>
  )
}
export default Filters;