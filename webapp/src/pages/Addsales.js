import React from 'react'
import './Allpages.css'
function Addsales() {
    //create a form for storing the data of the sales
  return (
    <div className='container'>
        <h1 className='text-center m-5'>ADD SALES</h1>
        <form  className='container shadow mt-5 py-4 rounded'>
            <label htmlFor='productName' className='mt-2 textColor'>Product Name</label>
            <input type='text' name='productName' className='form-control'/>

            <label htmlFor='quantity' className='mt-2 textColor'>Quantity</label>
            <input type='text' name='quantity' className='form-control'/>

            <label htmlFor='amount' className='mt-2 textColor'>Amount</label>
            <input type='text' name='amount' className='form-control'/>

            <button className='form-control bg-primary mt-3' type='button'>Submit</button>
        </form>
    </div>
  )
}

export default Addsales