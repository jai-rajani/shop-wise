import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';
import sneaker from '../assets/sneaker3.jpg'
import SignIn from '../components/SignIn';
import { useState } from 'react';
import Register from '../components/Register';
const Login=()=>{
    const [signup,setSignup]=useState(false);

    function changeForm(){
        setSignup(!signup)
    }

    return(


        <div class='main-container'>

        <div class='container rounded-4 p-5 h-100'>

        <div class='row rounded_container h-100 rounded-4'>
            
            
            <div class='col-lg-5 text-center login h-100 rounded-4' >

               {signup?
                (<Register/>):
                <SignIn/>
                }
                
                <div class='mt-4'>
                    <p>

                        {signup?(<>Have an account? <Button onClick={()=>{changeForm()}}>Login</Button></>):
                        
                <>Dont have an account? <Button onClick={()=>{changeForm()}}>Sign Up</Button></>
            }
                    </p>
                </div>


            </div>



            <div class='col-lg-7 image-bg h-100 rounded-4'>
                <div class='row h-100' >

                    
                    <img src={sneaker} alt='Sneaker' class="img-fluid"></img>
                   

                </div>
            </div>


        </div>
        </div>
        </div>
    )



}
export default Login

/* import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';
import sneaker from '../assets/sneaker3.jpg'
const Login=()=>{
    return(


        <div class='main-container'>

        <div class='container mt-5 rounded-4 p-5 h-100'>

        <div class='row rounded_container h-100 rounded-4'>
            
            
            <div class='col-lg-5 text-center login h-100 rounded-4' >
 
                <div>
                    <p class="font-weight-bold h3"> Welcome Back</p>
                   
                </div>

                <div class='mt-4'>
                    Welcome Back! Please enter your details
                </div>

                <div className='mt-5 px-5'>
                    <TextField id="standard-basic" label="Enter your Email" variant="outlined" fullWidth='true'/>
                </div>

                <div class='mt-4 px-5'>
                    <TextField id="standard-basic" label="Password" variant="outlined" type='password' fullWidth='true'/>
                </div>

                <div class='mt-4 px-5'>
                <Button variant="contained" fullWidth='true'>Sign In</Button>
                </div>

                <div class='mt-4'>
                    <p>
                        Dont have an account? Sign Up
                    </p>
                </div>



            </div>



            <div class='col-lg-7 image-bg h-100 rounded-4'>
                <div class='row h-100' >

                    
                    <img src={sneaker} alt='Sneaker' class="img-fluid"></img>
                   

                </div>
            </div>


        </div>
        </div>
        </div>
    )



}
export default Login */