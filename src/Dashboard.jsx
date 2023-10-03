import React, { useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
    const navigate = useNavigate ()
        axios.defaults.withCredentials = true;
        useEffect(() => {
        axios.get('http://localhost:8081/dashboard')
        .then(res => {
            if (res.data.Status === "Success") {
                if(res.data.role === "admin") {
                    navigate('/');
                } else {
                    const id = res.data.id;
                    navigate('/residentpage/'+id);
                }
            } else {
                navigate('/start');
            }
        })
       
    }, [])

    const handleLogout = () => {
        axios.get('http://localhost:8081/logout')
        .then(res => {
            navigate('/start')
        }).catch(err => console.log(err))
    }

  return (
    <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">ADMIN DASHBOARD</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link align-middle px-0 text-white">
                            <i className="fs-4 bi-clipboard-data"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </Link>
                    </li>
                    <li>
                        <Link to="resident" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-white">
                            <i className="fs-4 bi bi-people"></i> <span class="ms-1 d-none d-sm-inline">Manage Barangay</span> </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="request" className="nav-link align-middle px-0 text-white">
                            <i className="fs-4 bi-card-checklist"></i> <span className="ms-1 d-none d-sm-inline">Request</span> </Link>
                    </li>  
                    <li onClick={handleLogout}>
                        <a href="#" className="nav-link px-0 align-middle text-white">
                            <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Log Out</span> </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col p-0 m-0">
            <div className='p-2 d-flex justify-content-center shadow'>
                <h4>BARANGAY MANAGEMENT SYSTEM</h4>
            </div>
            <Outlet />            
        </div>
    </div>
</div>
  )
}

export default Dashboard
