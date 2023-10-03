import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

function ResidentPage() {
    const navigate = useNavigate()
    const {id} = useParams();
    const [resident, setResident] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8081/get/'+id)
        .then(res => setResident (res.data.Result[0]))
        .catch(err => console.log(err));
    })

    const handleLogout = () => {
		axios.get('http://localhost:8081/logout')
		.then(res => {
			navigate('/start')
		}).catch(err => console.log(err));
	}

  return (
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline">Make a request</span>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                          
                        <li onClick={handleLogout}>
                            <a href="#" className="nav-link px-0 align-middle text-white">
                                <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Log Out</span> </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container'>
                <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
                    <h2>"WELCOME {resident.name}" </h2>
                    <img src={`http://localhost:8081/images/`+resident.image} alt="" className='resImg'/>
                    <div className='d-flex align-items-center flex-column mt-5'>
                        <h3>Name: {resident.name}</h3>
                        <h3>Phone: {resident.phoneNo}</h3>
                        <h3>Email: {resident.email}</h3>
                        <h3>Address: {resident.address}</h3>
                        <h3>REQUEST:</h3>
                        <select id="request" name="request">
                            <option></option>
                            <option value="volvo">BARANGAY CLEARANCE</option>
                            <option value="saab">BARANGAY CERTIFICATE</option>
                            <option value="fiat">CEDULA</option>
                            <option value="audi">POLICE CLEARANCE</option>
                        </select>
                        <br></br>
                        <h3>Message:</h3>
                        <textarea name="message" rows="10" cols="30">
                        Put Message Here
                        </textarea>

                    </div>
                    <div>
                        <button className='btn btn-primary me-2'>SUBMIT</button>
                    </div>
                </div>
            </div>
            
        </div>        
    </div>
  )
}

export default ResidentPage
