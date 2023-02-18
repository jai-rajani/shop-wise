import { useState } from "react";


function Checkbox({value,label,setResellers,resellers}){
    console.log('inside is ',resellers)
    const [checked,setChecked]=useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        console.log(value)
       
       
        setChecked(!checked);
        if(checked){
            setResellers(resellers.append(value))
        }
        
        
        
      };
    
    return(
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value={value} id="flexCheckDefault" checked={checked} onChange={handleChange}/>
        <label class="form-check-label" for="flexCheckDefault">
            {label}
        </label>
        </div>
    )

}
export default Checkbox;