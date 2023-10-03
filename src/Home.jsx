import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Home() {
    const [adminCount, setAdminCount] = useState();
    const [residentCount, setResidentCount] = useState();
    useEffect(() => {
        axios.get('http://localhost:8081/adminCount')
		.then(res => {
			setAdminCount(res.data[0].admin)
		}).catch(err => console.log(err));

        axios.get('http://localhost:8081/residentCount')
		.then(res => {
			setResidentCount(res.data[0].resident)
		}).catch(err => console.log(err));
    })

  return (
    <div>
        <div className='p-3 d-flex justify-content-around mt-5'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
            <div className='text-center pb-1'>
                <h4>ADMIN</h4>
            </div>       
            <hr/>
            <h5>Total: {adminCount}</h5>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
            <div className='text-center pb-1'>
                <h4>RESIDENT</h4>
            </div>    
            <hr/>
            <h5>Total: {residentCount}</h5>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
            <div className='text-center pb-1'>
            <h4>REQUEST</h4>
            </div>      
            <hr/>
            <h5>Total: {}</h5>
        </div>
        </div>
    </div>
  )
}

export default Home
