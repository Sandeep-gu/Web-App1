import React from 'react'
import './Allpages.css'
function Login() {
  return (
    <div>
        <h1 className='text-center mt-5'>LOGIN FORM</h1>
        <form  className='container shadow mt-5 py-4 rounded'>
            <label htmlFor='email' className='mt-2 textColor'>Email</label>
            <input type='email' name='quantity' className='form-control'/>

            <label htmlFor='password' className='mt-2 textColor'>Password</label>
            <input type='password' name='passwor' className='form-control'/>

            <button className='form-control bg-primary mt-3' type='button'>Submit</button>
        
        </form>
    </div>
  )
}

export default Login