import React from 'react'
import './Allpages.css'
function Resister() {
  return (
    //create user a form the storing user details through the html form
    <div>
         <h1 className='text-center m-5'>ADD SALES</h1>
        <form className='container shadow p-3 mt-3 rounded'>
            <label htmlFor='name' className='mt-2 textColor'>First Name</label>
            <input type='text' name='name' className='form-control'/>

            <label htmlFor='lname' className='mt-2 textColor'>Last Name</label>
            <input type='text' name='lname' className='form-control'/>

            <label htmlFor='email' className='mt-2 textColor'>Email</label>
            <input type='text' name='email' className='form-control'/>

            <label htmlFor='password' className='mt-2 textColor'>Password</label>
            <input type='text' name='password' className='form-control'/>

            <button className='form-control bg-primary mt-3' type='button'>Submit</button>
        </form>
    </div>
  )
}

export default Resister