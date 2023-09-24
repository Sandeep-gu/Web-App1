import React, { useState } from 'react'
import './Allpages.css'
import axios from 'axios';
import {CONFIG_API} from '../config.js'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
function Login() {
  const navigate = useNavigate()
  const [logindata,setLoginData] = useState({'email':'','password':''})
  const handleLoginbtn = (e)=>{
    e.preventDefault();
    console.log(logindata)
    axios.post(`${CONFIG_API}/loginuser`,logindata)

    .then(response=>{
      if(response){
        Swal.fire({
          icon:'success',
          title:'Successfully logged in'
        })
        console.log(response)
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("user",JSON.stringify(response.data.user))
        navigate('/topsales')

      }
      else{
        Swal.fire({
          icon:'error',
          title:'logged in Failed'
        })
      }
    }).catch(error=>{
      console.log(error)
    })
    
    
  }
  return (
    <div>
        <h1 className='text-center mt-5'>LOGIN FORM</h1>
        <form  className='container shadow mt-5 py-4 rounded' onSubmit={(e)=>handleLoginbtn(e)}>
            <label htmlFor='email' className='mt-2 textColor'>Email</label>
            <input type='email' name='quantity' value={logindata.email} onChange={(e)=>setLoginData({...logindata,'email':e.target.value})} className='form-control'/>

            <label htmlFor='password' className='mt-2 textColor'>Password</label>
            <input type='password' name='passwor' className='form-control' value={logindata.password} onChange={(e)=>setLoginData({...logindata,'password':e.target.value})}/>

            <button className='form-control bg-primary mt-3' type='submit'>Submit</button>
        
        </form>
    </div>
  )
}

export default Login