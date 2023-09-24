import React, { useState } from 'react'
import './Allpages.css'
import axios from 'axios';
import {CONFIG_API} from '../config.js'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
function Addsales() {
    //create a form for storing the data of the sales
    const [salesdata,setSalesData] = useState({'productname':'','quantity':'','amount':''})

    const navigate = useNavigate();

    const CONFIG_HEADERS = {
      headers:{'Content-Type': 'application/json','Authorization':"Bearer "+localStorage.getItem('token')}
    }
    
    const onChangeData = (e) => {
      e.preventDefault();
      setSalesData({...salesdata,[e.target.name]:e.target.value});
    }
    const onSubmitSalesData=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:4000/api/createpost',salesdata,CONFIG_HEADERS)
        .then((response)=>{
          if(response.status === 200){
            Swal.fire({
              icon:'success',
              title:'Successfully products added'
            })
            navigate('/topsales')
          }
          else{
            Swal.fire({
              icon:'success',
              title:'Successfully products added'
            })
          }
        }).catch((error)=>{
          Swal.fire({
            icon:'error',
            title:error
          })
        });

    }
  return (
    <div className='container'>
        <h1 className='text-center m-5'>ADD SALES</h1>
        <form  className='container shadow mt-5 py-4 rounded' onSubmit={(e)=>onSubmitSalesData(e)}>
            <label htmlFor='productName' className='mt-2 textColor'>Product Name</label>
            <input type='text' className='form-control' name='productname' value={salesdata.productname} onChange={(e)=>onChangeData(e)}/>

            <label htmlFor='quantity' className='mt-2 textColor'>Quantity</label>
            <input type='text' name='quantity' className='form-control' value={salesdata.quantity} onChange={(e)=>onChangeData(e)}/>

            <label htmlFor='amount' className='mt-2 textColor'>Amount</label>
            <input type='text' name='amount' className='form-control' value={salesdata.amount} onChange={(e)=>onChangeData(e)}/>

            <button className='form-control bg-primary mt-3' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Addsales