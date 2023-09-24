import React, { useState, useEffect } from 'react';
import {CONFIG_API} from '../config'
import axios from 'axios';

function Revenue() {
  const [postdata, setPostData] = useState([]);

  useEffect(() => {
    handleRevenue();
  }, []);

  const handleRevenue = () => {
    axios.get(`${CONFIG_API}/allposts`)
      .then(response => {
        console.log(response.data.post);
        setPostData(response.data.post);
      })
      .catch(error => {
        console.error(error);
        // Handle the error here
      });
  }

  const totalRevenue = postdata.reduce((total, item) => total + Number(item.Amount), 0);

  return (
    <div className='container'>
      <h1 className='text-center mt-4'>TODAY'S REVENUES: {totalRevenue}</h1>
    </div>
  );
}

export default Revenue;