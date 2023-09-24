import React, { useState } from 'react'
import './Allpages.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import {CONFIG_API} from '../config'
function Resister() {
  const [name,setName] = useState('');
  const [lastname,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false);

  const handleSubmitbtn = (e)=>{
    e.preventDefault();
    const details = {'name':name, 'email':email, 'password':password,'lastname':lastname}
    setLoading(true)
    axios.post(`${CONFIG_API}/createuser`,details)
    .then(response =>{
      setLoading(false)
      if(response.status === 200){
          Swal.fire({
            icon:'success',
            title:"Successfully submitted"
          })
          console.log("SignUp Successfully created")
      }
    }).catch(err=>{
      setLoading(false)
      Swal.fire({
        icon:'Error',
        title:"Successfully submitted"
      })
    })

  }
  return (
    //create user a form the storing user details through the html form
    <div>
         <h1 className='text-center m-5'>ADD SALES</h1>
         {
          loading?
          <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>:""
         }
        <form className='container shadow p-3 mt-3 rounded' onSubmit={(e)=>handleSubmitbtn(e)}>
            <label htmlFor='name' className='mt-2 textColor'>First Name</label>
            <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} className='form-control'/>

            <label htmlFor='lname' className='mt-2 textColor'>Last Name</label>
            <input type='text' name='lname' className='form-control' value={lastname} onChange={(e)=>setLastName(e.target.value)}/>

            <label htmlFor='email' className='mt-2 textColor'>Email</label>
            <input type='text' name='email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <label htmlFor='password' className='mt-2 textColor'>Password</label>
            <input type='text' name='password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button className='form-control bg-primary mt-3' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Resister