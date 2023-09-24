import React from 'react'
import axios from 'axios';
import {CONFIG_API} from '../config.js'
import {useEffect,useState} from 'react'

function Topsales() {
  const [salesdata,setSalesData] = useState('');

  useEffect(()=>{
    handleAllSalesData();
  },[])
  const handleAllSalesData =()=>{
    axios.get(`${CONFIG_API}/allposts`)
    .then(response =>{
      console.log(response.data.post)
      setSalesData(response.data.post)
    });
  }
  return (
    //showing top 5 product in the table and heading name is #, id,quantity,amount
    <div className="container">
        <h1 className='text-center my-5'>TOP 5 SALES</h1>
        <div className='container'>
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Sales Id:</th>
      <th scope="col">Product Name</th>
      
      <th scope="col">Quantity</th>
      <th scope="col">Sale Amount</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
  {
    salesdata?salesdata.map((data,index)=>{
      return(
        <tr>
          <th scope="row">{index}</th>
          <td>{data._id}</td>
          <td>{data.ProductName}</td>
          <td>{data.Quantity}</td>
          <td>{data.Amount}</td>
    </tr>
      )
    }):""
  }
    
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Topsales