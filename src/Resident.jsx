import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Resident() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8081/getResident')
    .then(res => {
      if(res.data.Status === "Success") {
        setData(res.data.Result);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  },[])

  const handleDelete = (id) => {
    axios.delete('http://localhost:8081/delete/' + id)
      .then(res => {
        if (res.data.Status === "Success") {
          setData(prevData => prevData.filter(resident => resident.id !== id));
        } else {
          alert("Error");
        }
      })
      .catch(err => console.log(err));
  }
  

  return (
    <div className='px-5 py-3'>
        <div className='d-flex justify-content-center'>
            <h3>Resident List</h3>
        </div>
        <Link to="/create" className='btn btn-success'>Add Resident</Link>
        <div className='mt-3'>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((resident, index) => {
                return <tr key={index}>
                  <td>{resident.name}</td>
                  <td>{
                    <img src={`http://localhost:8081/images/`+resident.image} alt="" className='resident_image'/>
                      }
                    </td>
                  <td>{resident.phoneNo}</td>
                  <td>{resident.email}</td>
                  <td>{resident.address}</td>
                  <td>
                    <Link to={`/residentEdit/` +resident.id} className='btn btn-sm btn-primary me-2'>edit</Link>
                    <button onClick={e => handleDelete(resident.id)} className='btn btn-sm btn-danger'>delete</button>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
        
    </div>
  )
}

export default Resident
