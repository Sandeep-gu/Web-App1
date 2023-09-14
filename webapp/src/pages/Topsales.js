import React from 'react'

function Topsales() {
  return (
    //showing top 5 product in the table and heading name is #, id,quantity,amount
    <div>
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
    <tr>
      <th scope="row">1</th>
      <td>S1212</td>
      <td>Laptop</td>
      <td>2</td>
      <td>90000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>S1213</td>
      <td>Mobile</td>
      <td>4</td>
      <td>80000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>S1216</td>
      <td>Desktop</td>
      <td>2</td>
      <td>100000</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>S1217</td>
      <td>Tablet</td>
      <td>2</td>
      <td>40000</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>S1218</td>
      <td>iPhone</td>
      <td>2</td>
      <td>90000</td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Topsales